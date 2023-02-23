package org.babyfish.jimmer.sql.model.logic;

import org.babyfish.jimmer.sql.Entity;
import org.babyfish.jimmer.sql.Id;
import org.babyfish.jimmer.sql.LogicalDeleted;
import org.jetbrains.annotations.Nullable;

import java.time.LocalDateTime;

@Entity
public interface D {

    @Id
    long id();

    @Nullable
    @LogicalDeleted("null")
    LocalDateTime createdTime();
}
