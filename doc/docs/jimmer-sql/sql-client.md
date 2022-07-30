---
sidebar_position: 3
title: SqlClient
---

SqlClient is the entry point for all APIs of jimmer-sql.

## Create SqlClient

SqlClient is an immutable object, created based on the Builder pattern.

```java
SqlClient sqlClient = SqlClient
    .newBuilder()
    ...doSomething...
    .builde();
```

SqlClient requires an instance and should be shared globally.

- If Spring is not used, it should be shared via static variables.

- If Spring is used, it should be used as a Spring singleton bean object.

There is no doubt that using Spring/SpringBoot is a fixed pattern for almost all server-side programs.

```java
@Configuration
public class SqlClientConfig {

    @Bean
    public SqlClient sqlClient() {
        return SqlClient
            .newBuilder()
            ...doSomething...
            .builde();
    }
}
```

Then, the SqlClient object can be injected anywhere to use all the features of jimmer-sql.

## ConnectionManager

All executable statements and commands in jimmer-sql inherit from the `Executable` interface

```java title="Executable.java"
package org.babyfish.jimmer.sql.ast;

import java.sql.Connection;

public interface Executable<R> {

    R execute();

    R execute(Connection con);
}
```

- `execute(Connection)`: Execution based on user-specified JDBC connection.

    Take the query as an example:
    ```java
    public List<Book> findBooks(Connection con) {
        return sqlClient
            .createQuery(BookTable.class, (q, book) -> {
                return q.select(book);
            })
            // highlight-next-line
            .execute(con);
    }
    ```

- `execute()`: Execution based on automatically acquired JDBC connection.

    Take the query as an example:
    ```java
    public List<Book> findBooks() {
        return sqlClient
            .createQuery(BookTable.class, (q, book) -> {
                return q.select(book);
            })
            // highlight-next-line
            .execute();
    }
    ```

:::caution
To use the first way, no special configuration of SqlClient is required.

To use the second way, the ConnectionManager must be configured for SqlClient. Otherwise an exception will be thrown.

There is no doubt that the second method is more in line with the requirements of business system development and is more recommended. Therefore, it is strongly recommended to configure ConnectionManager for SqlClient.
:::

### Simple ConnectionManager

```java
javax.sql.DataSource dataSource = ...;

SqlClient sqlClient = SqlClient
    .newBuilder()
    .setConnectionManager(
        ConnectionManager
            // highlight-next-line
            .simpleConnectionManager(dataSource)
    )
    .builde();
```

:::danger
`ConnectionManager.simpleConnectionManager` is only responsible for obtaining connections from DataSource and has no transaction management mechanism.

This method is only suitable for occasions where Spring is not used. Except for learning and trying, it is not recommended to use simpleConnectionManager in actual projects.
:::

### ConnectionManager under Spring transaction management

As mentioned earlier, using Spring/SpringBoot is a fixed pattern for almost all server-side programs.

jimmer-sql only focuses on generating SQL and executing SQL. In terms of connection management and transaction management, it does not want to develop duplicate functions with Spring/SpringBoot, and it does not want to increase the difficulty of integrating with Spring/SpringBoot.

When you use spring-jdbc, you can implement ConnectionManager based on `org.springframework.jdbc.datasource.DataSourceUtils`, so that jimmer-sql is managed by Spring transactions.

```java
@Bean
public SqlClient sqlClient(
    // Inject dataSoruce of spring-jdbc
    // highlight-next-line
    DataSource dataSource
) {
    return SqlClient.newBuilder()
        .setConnectionManager(
            new ConnectionManager() {
                @Override
                public <R> R execute(
                    Function<Connection, R> block
                ) {
                    Connection con = DataSourceUtils
                        // highlight-next-line
                        .getConnection(dataSource);
                    try {
                        return block.apply(con);
                    } finally {
                        DataSourceUtils
                            // highlight-next-line
                            .releaseConnection(con, dataSource);
                    }
                }
            }
        )
        .build();
}
```

:::info
Having jimmer-sql be managed by Spring transactions is the recommended usage.
:::

## Dialect

As with most ORMs, different dialects need to be set for different databases. The dialects supported so far are as follows:

- org.babyfish.jimmer.sql.dialect.H2Dialect
- org.babyfish.jimmer.sql.dialect.MySqlDialect
- org.babyfish.jimmer.sql.dialect.PostgresDialect
- org.babyfish.jimmer.sql.dialect.OracleDialect
- org.babyfish.jimmer.sql.dialect.SqlServerDialect

Taking H2 as an example, the dialect is set as follows

```java
@Configuration
public class SqlClientConfig {

    @Bean
    public SqlClient sqlClient() {
        return SqlClient
            .newBuilder()
            .setConnectionManager(...)
            // highlight-next-line
            .setDialect(new H2Dialect())
            .build();
    }
}
```

## Executor

Executor is the entry point for jimmer-sql to execute the final SQL and acts as an interceptor for SQL execution.

:::note
Setting the Executor is optional.
:::

```java title="Executor.java"
package org.babyfish.jimmer.sql.runtime;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.util.List;

public interface Executor {

    <R> R execute(
            Connection con,
            String sql,
            List<Object> variables,
            SqlFunction<PreparedStatement, R> block
    );
}
```

This interface has only one method `execute`

1. `con`: SQL is executed based on this connection

2. `sql`: SQL statement to be executed

3. `variables`: JDBC parameters attached to the SQL to be executed

    > Note:
    >
    > The list does not contain null values, all null values are pre-replaced with objects of type `org.babyfish.jimmer.sql.runtime.DbNull`.

4. `block`: Substantial operation to be performed.

    > Note:
    >
    > Do not call `block` directly in a custom Executor, instead call the method `execute` of `org.babyfish.jimmer.sql.runtime.DefaultExecutor`.

The default `DefaultExecutor` is already capable of all jobs, so specifying a custom Exector is optional.

If you encounter one of the following scenarios, you can specify a custom Executor to override the default DefaultExecutor.

### Log SQL and its parameters

```java
@Configuration
public class SqlClientConfig {

    private static final Logger LOGGER = 
        LoggerFactory.getLogger(SqlClientConfig.class);

    @Bean
    public SqlClient sqlClient() {
        return SqlClient
            .newBuilder()
            .setConnectionManager(...)
            .setDialect(new H2Dialect())
            // highlight-next-line
            .setExecutor(
                new Executor() {
                    @Override
                    public <R> R execute(
                            Connection con,
                            String sql,
                            List<Object> variables,
                            SqlFunction<PreparedStatement, R> block
                    ) {
                        // Log SQL and variables.
                        LOGGER.info(
                            "Execute sql : \"{}\", " +
                            "with variables: {}", 
                            sql, 
                            variables
                        );
                        // Call DefaultExecutor
                        // highlight-next-line
                        return DefaultExecutor
                            .INSTANCE
                            .execute(
                                con,
                                sql,
                                variables,
                                block
                            );
                    }
                }
            )
            .build();
    }
}
```

### Collect slow SQL for improvement

```java
@Configuration
public class SqlClientConfig {

    private static final Logger LOGGER = 
        LoggerFactory.getLogger(SqlClientConfig.class);

    @Bean
    public SqlClient sqlClient() {
        return SqlClient
            .newBuilder()
            .setConnectionManager(...)
            .setDialect(new H2Dialect())
            // highlight-next-line
            .setExecutor(
                new Executor() {
                    @Override
                    public <R> R execute(
                            Connection con,
                            String sql,
                            List<Object> variables,
                            SqlFunction<PreparedStatement, R> block
                    ) {
                        long millis = System.currentTimeMillis();
                        // Call DefaultExecutor
                        // highlight-next-line
                        R result = DefaultExecutor
                            .INSTANCE
                            .execute(
                                con,
                                sql,
                                variables,
                                block
                            );
                        millis = System.currentTimeMillis() - millis;
                        if (millis > 1000) { // Slow SQL
                            ...sendMessageToTechTeam...
                        }
                        return result;
                    }
                }
            )
            .build();
    }
}
```

## ScalarProvider

Multiple `ScalarProvider`s can be added to SqlClient, each `ScalarProvider` tells the database how to handle a custom data type.

`ScalarProvider` is defined as follows

```java title="ScalarProvider"
package org.babyfish.jimmer.sql.runtime;

import java.util.function.Consumer;

public abstract class ScalarProvider<T, S> {

    protected ScalarProvider(Class<T> scalarType, Class<S> sqlType) {
        this.scalarType = scalarType;
        this.sqlType = sqlType;
    }

    public abstract T toScalar(S sqlValue);

    public abstract S toSql(T scalarValue);
 }
```

- Generic parameter `T`: data type in Java
- Generic parameter `S`: data type in the database
- Method `toScalar`: Convert the non-null data read from the database to Java data
- Method `toSql`: converts non-null java data to the data that can be accepted by database

### Custom ScalarProvider

For example, if database does not support the UUID type, it can be handled like this

```java
@Configuration
public class SqlClientConfig {

    private static final Logger LOGGER = 
        LoggerFactory.getLogger(SqlClientConfig.class);

    @Bean
    public SqlClient sqlClient() {
        return SqlClient
            .newBuilder()
            .setConnectionManager(...)
            .setDialect(new H2Dialect())
            .setExecutor(...)
            // highlight-next-line
            .addScalarProvider(
                new ScalarProvider<>(
                    UUID.class,
                    String.class
                ) {
                    @Override
                    public UUID toScalar(String sqlValue) {
                        return UUID.fromString(sqlValue);
                    }

                    @Override
                    public String toSql(UUID scalarValue) {
                        return scalarValue.toString();
                    }
                }
            )
            .build();
    }
}
```
:::note
Such usage is not demonstrated in the accompanying examples of this framework, because the accompanying examples are based on H2, which supports UUID types.
:::

### Built-in ScalarProvider

jimmer-sql has built-in ScalarProvider for enum.

Suppose there is an enum type:

```java title="GcObjColor.java"
public enum GcObjColor { 
    WHITE, 
    GRAY, 
    BLACK 
}
```

1. Maps to strings by enum's `name()`

    ```java
    return SqlBuilder
        .newBuilder()
        // highlight-next-line
        .addScalarProvoder(
            ScalarProvoder.enumProviderByString(
                GcObjColor.class
            )
        )
        ...doOtherthings...
        .build();
    ```

1. Maps to string as enum's `name()`, but maps `GRAY` to `GREY`

    ```java
    return SqlBuilder
        .newBuilder()
        .addScalarProvoder(
            ScalarProvoder.enumProviderByString(
                GcObjColor.class, 
                // highlight-next-line
                it -> it.map(GcObjColor.GRAY, "GREY")
            )
        )
        ...doOtherthings...
        .build();
    ```

3. Maps to integers by enum's `ordinal()`

    ```java
    return SqlBuilder
        .newBuilder()
        // highlight-next-line
        .addScalarProvoder(
            ScalarProvoder.enumProviderByInt(
                GcObjColor.class
            )
        )
        ...doOtherthings...
        .build();
    ```

4. Maps to integers as enum's `ordinal()`, but maps `BLACK` to `3`*(default is 2)*

    ```java
    return SqlBuilder
        .newBuilder()
        // highlight-next-line
        .addScalarProvoder(
            ScalarProvoder.enumProviderByInt(
                GcObjColor.class,
                it -> it.map(GcObjColor.BLACK, 3)
            )
        )
        ...doOtherthings...
        .build();
    ```

## IdGenerator

The id generation strategy for objects can be set dynamically.

:::info

Normally, the id generation strategy should be statically configured in the entity interface using the annotation `@javax.persistance.GeneratedValue`, you can refer to [mapping](./mapping#javaxpersistancegeneratedvalue) for more information.

In this case, why provide the function of dynamically specifying the id generator in SqlClient?

Dynamically specifying IdGenerator in SqlClient can override the static configuration of the annotation `@javax.persistance.GeneratedValue` in the entity file, which is very useful for unit testing.
:::

```java title="UnitTestIdGenerator.java"
public class UnitTestIdGenerator implements UserIdGenerator {

    private final Iterator<Object> preAllocatedIdItr;
    
    public UnitTestIdGenerator(Object ... preAllocatedIds) {
        preAllocatedIdItr = Arrays
                .asList(preAllocatedIds)
                .iterator();
    }

    @Override
    public Object generate(Class<?> entityType) {
        return preAllocatedIdItr.next();
    }
}
```

```java title="MyTest.java"
class MyTest {

    private SqlClient sqlClient;

    @BeforeEach
    public void init() {
        sqlClient = SqlClient
            .newBuilder()
            // highlight-next-line
            .setIdGenerator(
                Department.class,
                new UnitTestIdGenerator(51L, 52L, 53L)
            )
            // highlight-next-line
            .setIdGenerator(
                Employee.class,
                new UnitTestIdGenerator(100L, 101L)
            )
            // highlight-next-line
            .setIdGenerator(
                // For other entity types
                new UnitTestIdGenerator(1L, 2L, 3L, 4L)
            )
            .build();
    }

    @Test
    public void test() {
        // TODO: Add unit test code here
    }
}
```

## DefaultBatchSize and DefaultListBatchSize

SqlClient supports two configurations: `DefaultBatchSize` and `DefaultListBatchSize`.

```java
@Configuration
public class SqlClientConfig {

    @Bean
    public SqlClient sqlClient() {
        return SqlClient
            .newBuilder()
            .setConnectionManager(...)
            .setDialect(new H2Dialect())
            .setExecutor(...)
            .addScalarProvider(...)
            // highlight-next-line
            .setDefaultBatchSize(256)
            // highlight-next-line
            .setDefaultListBatchSize(32)
            .build();
    }
}
```

The usage is described in detail in [Object Fetcher](./query/fetcher#batchsize), which will not be repeated in this article.