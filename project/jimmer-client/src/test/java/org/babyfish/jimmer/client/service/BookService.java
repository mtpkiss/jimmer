package org.babyfish.jimmer.client.service;

import org.babyfish.jimmer.client.Doc;
import org.babyfish.jimmer.client.FetchBy;
import org.babyfish.jimmer.client.model.*;
import org.babyfish.jimmer.sql.ast.tuple.Tuple2;
import org.babyfish.jimmer.sql.fetcher.Fetcher;
import org.jetbrains.annotations.Nullable;

import java.math.BigDecimal;
import java.util.List;

@Doc("BookService interface")
public interface BookService {

    Fetcher<Book> BOOK_FETCHER = BookFetcher.$
            .allScalarFields()
            .store(BookStoreFetcher.$.name())
            .authors(AuthorFetcher.$.firstName());

    Fetcher<Author> AUTHOR_FETCHER = AuthorFetcher.$
            .allScalarFields()
            .books(
                    BookFetcher.$
                            .name()
                            .store(BookStoreFetcher.$.name())
            );

    @Doc("Find book list")
    @Doc("Format of each element:")
    @Doc("- id")
    @Doc("- name")
    @Doc("- edition")
    @Doc("- price")
    @Doc("- store")
    @Doc("-- id")
    @Doc("-- name")
    @Doc("- authors")
    @Doc("-- id")
    @Doc("-- firstName")
    @GetMapping("/books")
    List<@FetchBy("BOOK_FETCHER") Book> findBooks(
            @RequestParam("name") String name,
            @RequestParam("storeName") @Nullable String storeName,
            @RequestParam("authorName") @Nullable String authorName,
            @RequestParam(value = "minPrice", required = false) BigDecimal minPrice,
            @RequestParam(value = "maxPrice", required = false) BigDecimal maxPrice
    );

    @GetMapping("/tuples")
    Page<
            Tuple2<
                    ? extends @FetchBy("BOOK_FETCHER") Book,
                    ? extends @FetchBy("AUTHOR_FETCHER") Author
            >
    > findTuples(
            @Doc("Match the book name, optional") @RequestParam("name") @Nullable String name,
            @Doc("Start from 0, not 1") @RequestParam("pageIndex") int pageIndex,
            @RequestParam("pageSize") int pageSize
    );

    @PutMapping("/book")
    Book saveBooks(@RequestBody BookInput input);

    @DeleteMapping("/book/{id}")
    int deleteBook(@PathVariable("id") long id);
}