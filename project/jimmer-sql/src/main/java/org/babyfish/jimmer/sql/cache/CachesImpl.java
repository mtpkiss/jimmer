package org.babyfish.jimmer.sql.cache;

import org.babyfish.jimmer.meta.ImmutableProp;
import org.babyfish.jimmer.meta.ImmutableType;
import org.babyfish.jimmer.runtime.ImmutableSpi;
import org.babyfish.jimmer.sql.Triggers;

import java.util.*;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReadWriteLock;
import java.util.concurrent.locks.ReentrantReadWriteLock;

public class CachesImpl implements Caches {

    private final Triggers triggers;

    private final CacheFactory cacheFactory;

    private final Map<ImmutableType, CacheWrapper<?, ?>> objectCacheMap;

    private final Map<ImmutableProp, CacheWrapper<?, ?>> associationCacheMap;

    private final CacheOperator operator;

    // ConcurrentHashMap.computeIfAbsent does not accept null value,
    // So read write lock is used here.
    private final ReadWriteLock rwl = new ReentrantReadWriteLock();

    private final boolean disableAll;

    private final Set<ImmutableType> disabledTypes;

    private final Set<ImmutableProp> disabledProps;

    public CachesImpl(
            Triggers triggers,
            CacheFactory cacheFactory,
            Map<ImmutableType, Cache<?, ?>> objectCacheMap,
            Map<ImmutableProp, Cache<?, ?>> associationCacheMap,
            CacheOperator operator
    ) {
        Map<ImmutableType, CacheWrapper<?, ?>> objectCacheWrapperMap = new HashMap<>();
        for (Map.Entry<ImmutableType, Cache<?, ?>> e : objectCacheMap.entrySet()) {
            ImmutableType type = e.getKey();
            objectCacheWrapperMap.put(type, wrapObjectCache(e.getValue(), type));
        }
        Map<ImmutableProp, CacheWrapper<?, ?>> associationCacheWrapperMap = new HashMap<>();
        for (Map.Entry<ImmutableProp, Cache<?, ?>> e : associationCacheMap.entrySet()) {
            ImmutableProp prop = e.getKey();
            associationCacheWrapperMap.put(prop, wrapAssociationCache(e.getValue(), prop));
        }
        this.triggers = triggers;
        this.cacheFactory = cacheFactory;
        this.objectCacheMap = objectCacheWrapperMap;
        this.associationCacheMap = associationCacheWrapperMap;
        this.operator = operator;
        disableAll = false;
        disabledTypes = Collections.emptySet();
        disabledProps = Collections.emptySet();
    }

    public CachesImpl(
            CachesImpl base,
            CacheDisableConfig cfg
    ) {
        triggers = base.triggers;
        cacheFactory = base.cacheFactory;
        objectCacheMap = base.objectCacheMap;
        associationCacheMap = base.associationCacheMap;
        operator = base.operator;
        this.disableAll = cfg.isDisableAll();
        this.disabledTypes = cfg.getDisabledTypes();
        this.disabledProps = cfg.getDisabledProps();
    }

    @Override
    public <K, V> Cache<K, V> getObjectCache(ImmutableType type) {
        if (disableAll || disabledTypes.contains(type)) {
            return null;
        }
        return CacheWrapper.export(getObjectCacheWrapper(type));
    }

    @Override
    public <K, V> Cache<K, V> getAssociationCache(ImmutableProp prop) {
        if (disableAll ||
                disabledProps.contains(prop) ||
                disabledTypes.contains(prop.getTargetType())
        ) {
            return null;
        }
        return CacheWrapper.export(getAssociationWrapper(prop));
    }

    @SuppressWarnings("unchecked")
    private <K, V> CacheWrapper<K, V> getObjectCacheWrapper(ImmutableType type) {

        Lock lock;

        (lock = rwl.readLock()).lock();
        try {
            CacheWrapper<?, ?> cacheWrapper = objectCacheMap.get(type);
            if (cacheWrapper != null || objectCacheMap.containsKey(type)) {
                return (CacheWrapper<K, V>) cacheWrapper;
            }
        } finally {
            lock.unlock();
        }

        (lock = rwl.writeLock()).lock();
        try {
            CacheWrapper<?, ?> cacheWrapper = objectCacheMap.get(type);
            if (cacheWrapper != null || objectCacheMap.containsKey(type)) {
                return (CacheWrapper<K, V>) cacheWrapper;
            }
            if (cacheFactory != null) {
                cacheWrapper = wrapObjectCache(cacheFactory.createObjectCache(type), type);
            }
            objectCacheMap.put(type, cacheWrapper);
            return (CacheWrapper<K, V>) cacheWrapper;
        } finally {
            lock.unlock();
        }
    }

    @SuppressWarnings("unchecked")
    private <K, V> CacheWrapper<K, V> getAssociationWrapper(ImmutableProp prop) {

        Lock lock;

        (lock = rwl.readLock()).lock();
        try {
            CacheWrapper<?, ?> cacheWrapper = associationCacheMap.get(prop);
            if (cacheWrapper != null || associationCacheMap.containsKey(prop)) {
                return (CacheWrapper<K, V>) cacheWrapper;
            }
        } finally {
            lock.unlock();
        }

        (lock = rwl.writeLock()).lock();
        try {
            CacheWrapper<?, ?> cacheWrapper = associationCacheMap.get(prop);
            if (cacheWrapper != null || associationCacheMap.containsKey(prop)) {
                return (CacheWrapper<K, V>) cacheWrapper;
            }
            if (cacheFactory != null) {
                cacheWrapper = wrapAssociationCache(cacheFactory.createAssociatedIdCache(prop), prop);
            }
            associationCacheMap.put(prop, cacheWrapper);
            return (CacheWrapper<K, V>) cacheWrapper;
        } finally {
            lock.unlock();
        }
    }

    @SuppressWarnings("unchecked")
    private CacheWrapper<?, ?> wrapObjectCache(
            Cache<?, ?> cache,
            ImmutableType type
    ) {
        if (cache == null) {
            return null;
        }
        CacheWrapper<Object, Object> wrapper = CacheWrapper.wrap(
                (Cache<Object, Object>) cache,
                type
        );
        triggers.addEntityListener(type, e -> {
            ImmutableSpi oldEntity = e.getOldEntity();
            if (oldEntity != null) {
                Object id = oldEntity.__get(type.getIdProp().getId());
                if (operator != null) {
                    operator.delete(wrapper, id);
                } else {
                    wrapper.delete(id);
                }
            }
        });
        return wrapper;
    }

    @SuppressWarnings("unchecked")
    private CacheWrapper<?, ?> wrapAssociationCache(
            Cache<?, ?> cache,
            ImmutableProp prop
    ) {
        if (cache == null) {
            return null;
        }
        CacheWrapper<Object, Object> wrapper = CacheWrapper.wrap(
                (Cache<Object, Object>) cache,
                prop
        );
        triggers.addAssociationListener(prop, e -> {
            Object id = e.getSourceId();
            if (operator != null) {
                operator.delete(wrapper, id);
            } else {
                wrapper.delete(id);
            }
        });
        return wrapper;
    }
}
