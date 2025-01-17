package org.babyfish.jimmer.jackson;

public class LongConverter implements Converter<Long, String> {

    @Override
    public String output(Long value) {
        return Long.toString(value);
    }

    @Override
    public Long input(String jsonValue) {
        return Long.parseLong(jsonValue);
    }
}
