package org.babyfish.jimmer.example.kt.sql.dal

import org.babyfish.jimmer.example.kt.sql.model.*
import org.babyfish.jimmer.spring.repository.KRepository
import org.babyfish.jimmer.sql.fetcher.Fetcher
import org.springframework.data.domain.Sort

interface AuthorRepository : KRepository<Author, Long> {

    fun findByFirstNameAndLastNameAndGender(
        sort: Sort,
        firstName: String?,
        lastName: String?,
        gender: Gender?,
        fetcher: Fetcher<Author>?
    ): List<Author>
}