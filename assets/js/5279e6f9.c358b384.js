"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[4760],{3905:function(e,n,t){t.d(n,{Zo:function(){return b},kt:function(){return m}});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=a.createContext({}),i=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},b=function(e){var n=i(e.components);return a.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),p=i(t),m=l,d=p["".concat(u,".").concat(m)]||p[m]||c[m]||r;return t?a.createElement(d,o(o({ref:n},b),{},{components:t})):a.createElement(d,o({ref:n},b))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=p;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:l,o[1]=s;for(var i=2;i<r;i++)o[i]=t[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5162:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(7294),l=t(4334),r="tabItem_Ymn6";function o(e){var n=e.children,t=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:t},n)}},5488:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(3117),l=t(7294),r=t(4334),o=t(2389),s=t(7392),u=t(7094),i=t(2466),b="tabList__CuJ",c="tabItem_LNqP";function p(e){var n,t,o=e.lazy,p=e.block,m=e.defaultValue,d=e.values,h=e.groupId,k=e.className,_=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=d?d:_.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),g=(0,s.l)(y,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===m?m:null!=(n=null!=m?m:null==(t=_.find((function(e){return e.props.default})))?void 0:t.props.value)?n:_[0].props.value;if(null!==v&&!y.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var T=(0,u.U)(),f=T.tabGroupChoices,N=T.setTabGroupChoices,I=(0,l.useState)(v),q=I[0],x=I[1],O=[],w=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var E=f[h];null!=E&&E!==q&&y.some((function(e){return e.value===E}))&&x(E)}var B=function(e){var n=e.currentTarget,t=O.indexOf(n),a=y[t].value;a!==q&&(w(n),x(a),null!=h&&N(h,String(a)))},A=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a,l=O.indexOf(e.currentTarget)+1;t=null!=(a=O[l])?a:O[0];break;case"ArrowLeft":var r,o=O.indexOf(e.currentTarget)-1;t=null!=(r=O[o])?r:O[O.length-1]}null==(n=t)||n.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",b)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":p},k)},y.map((function(e){var n=e.value,t=e.label,o=e.attributes;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:q===n?0:-1,"aria-selected":q===n,key:n,ref:function(e){return O.push(e)},onKeyDown:A,onFocus:B,onClick:B},o,{className:(0,r.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":q===n})}),null!=t?t:n)}))),o?(0,l.cloneElement)(_.filter((function(e){return e.props.value===q}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},_.map((function(e,n){return(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==q})}))))}function m(e){var n=(0,o.Z)();return l.createElement(p,(0,a.Z)({key:String(n)},e))}},2111:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return b},default:function(){return h},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return m}});var a=t(3117),l=t(102),r=(t(7294),t(3905)),o=t(5488),s=t(5162),u=["components"],i={sidebar_position:1,title:"Subquery"},b=void 0,c={unversionedId:"jimmer-sql/query/sub-query",id:"jimmer-sql/query/sub-query",title:"Subquery",description:"Typed Subquery",source:"@site/docs/jimmer-sql/query/sub-query.mdx",sourceDirName:"jimmer-sql/query",slug:"/jimmer-sql/query/sub-query",permalink:"/jimmer/docs/jimmer-sql/query/sub-query",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/jimmer-sql/query/sub-query.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Subquery"},sidebar:"tutorialSidebar",previous:{title:"Query",permalink:"/jimmer/docs/jimmer-sql/query/"},next:{title:"Pagination Query",permalink:"/jimmer/docs/jimmer-sql/query/pagination"}},p={},m=[{value:"Typed Subquery",id:"typed-subquery",level:2},{value:"IN subquery based on single column",id:"in-subquery-based-on-single-column",level:3},{value:"IN subquery based on multiple columns",id:"in-subquery-based-on-multiple-columns",level:3},{value:"Treat subquery as simple value",id:"treat-subquery-as-simple-value",level:3},{value:"Using subqueries in select and orderBy clauses",id:"using-subqueries-in-select-and-orderby-clauses",level:3},{value:"Using the ANY operator",id:"using-the-any-operator",level:3},{value:"Using the ALL operator",id:"using-the-all-operator",level:3},{value:"Using the EXISTS operator",id:"using-the-exists-operator",level:3},{value:"Untyped subquery",id:"untyped-subquery",level:2}],d={toc:m};function h(e){var n=e.components,t=(0,l.Z)(e,u);return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"typed-subquery"},"Typed Subquery"),(0,r.kt)("h3",{id:"in-subquery-based-on-single-column"},"IN subquery based on single column"),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'BookTable book = BookTable.$;\nAuthorTableEx author = AuthorTableEx.$;\n\nList<Book> books = sqlClient\n    .createQuery(book)\n    .where(\n        book.id().in(sqlClient\n            .createSubQuery(author)\n            .where(author.firstName().eq("Alex"))\n            .select(author.books().id())\n        )\n    )\n    .select(book)\n    .execute();\n'))),(0,r.kt)(s.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val books = sqlClient\n    .createQuery(Book::class) {\n        where( \n            // highlight-next-line\n            table.id valueIn subQuery(Author::class) {\n                where(table.firstName eq "Alex")\n                select(table.books.id)\n            }\n        )\n        select(table)    \n    }\n    .execute()\n')))),(0,r.kt)("p",null,"The final generated SQL is as follows"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    tb_1_.ID, \n    tb_1_.NAME, \n    tb_1_.EDITION, \n    tb_1_.PRICE, \n    tb_1_.STORE_ID \nfrom BOOK as tb_1_ \nwhere \n    /* highlight-next-line */\n    tb_1_.ID in (\n        select \n            tb_3_.BOOK_ID \n        from AUTHOR as tb_2_ \n        inner join BOOK_AUTHOR_MAPPING as tb_3_ \n            on tb_2_.ID = tb_3_.AUTHOR_ID \n        where \n            tb_2_.FIRST_NAME = ?\n    )\n\n")),(0,r.kt)("h3",{id:"in-subquery-based-on-multiple-columns"},"IN subquery based on multiple columns"),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"BookTable book = BookTable.$;\n\nList<Book> newestBooks = sqlClient\n    .createQuery(book)\n    .where(\n        Expression.tuple(\n            book.name(),\n            book.edition()\n        ).in(sqlClient\n            .createSubQuery(book)\n            .groupBy(book.name())\n            .select(\n                book.name(),\n                book.edition().max()\n            )\n        )\n    )\n    .select(book)\n    .execute();\n"))),(0,r.kt)(s.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val newestBooks = sqlClient\n    .createQuery(Book::class) {\n        where( \n            // highlight-next-line\n            tuple(\n                table.name, \n                table.edition\n            ) valueIn subQuery(Book::class) {\n                groupBy(table.name)\n                select(\n                    table.name,\n                    max(table.edition).asNonNull()\n                )\n            }\n        )\n        select(table)\n    }\n    .execute()\n")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"In kotlin code, we can see ",(0,r.kt)("inlineCode",{parentName:"p"},"asNonNull()"),"."),(0,r.kt)("p",{parentName:"admonition"},"In SQL, ",(0,r.kt)("inlineCode",{parentName:"p"},"max()")," is aggregation function that may return null."),(0,r.kt)("p",{parentName:"admonition"},"However, it never returns null if it is used by group query. In order to compile correctly, we need cast the nullable expression to non-null expression."),(0,r.kt)("p",{parentName:"admonition"},"Java API does not support nullsafety, I does not have this problem.")),(0,r.kt)("p",null,"The final generated SQL is as follows"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    tb_1_.ID, \n    tb_1_.NAME, \n    tb_1_.EDITION, \n    tb_1_.PRICE, \n    tb_1_.STORE_ID \nfrom BOOK as tb_1_ \nwhere \n    /* highlight-next-line */\n    (tb_1_.NAME, tb_1_.EDITION) in (\n        select \n            tb_2_.NAME, \n            max(tb_2_.EDITION) \n            from BOOK as tb_2_ \n            group by tb_2_.NAME\n    )\n")),(0,r.kt)("h3",{id:"treat-subquery-as-simple-value"},"Treat subquery as simple value"),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"BookTable book = BookTable.$;\n\nList<Book> newestBooks = sqlClient\n    .createQuery(book)\n    .where(\n        book.price().gt(sqlClient\n            .createSubQuery(book)\n            .groupBy(book.name())\n            .select(\n                book\n                    .price()\n                    .avg()\n                    .coalesce(BigDecimal.ZERO)\n            )\n        )\n    )\n    .select(book)\n    .execute();\n"))),(0,r.kt)(s.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val books = sqlClient\n    .createQuery(Book::class) {\n        where( \n            // highlight-next-line\n            table.price gt subQuery(Book::class) {\n                select(\n                    avg(table.price)\n                        .coalesce(BigDecimal.ZERO)\n                )\n            }\n        )\n        select(table)\n    }\n    .execute()\n")))),(0,r.kt)("p",null,"The final generated SQL is as follows"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    tb_1_.ID, \n    tb_1_.NAME, \n    tb_1_.EDITION, \n    tb_1_.PRICE, \n    tb_1_.STORE_ID \nfrom BOOK as tb_1_ \nwhere \n    /* highlight-next-line */\n    tb_1_.PRICE > (\n        select \n            coalesce(avg(tb_2_.PRICE), ?) \n        from BOOK as tb_2_\n    )\n")),(0,r.kt)("h3",{id:"using-subqueries-in-select-and-orderby-clauses"},"Using subqueries in select and orderBy clauses"),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"BookStoreTable store = BookStoreTable.$;\nBookTable book = BookTable.$;\n\nMutableRootQuery<BookStoreTable> query =\n    sqlClient.createQuery(store);\nTypedSubQuery<BigDecimal> subQuery =\n    sqlClient\n        .createSubQuery(book)\n        .where(book.store().eq(store))\n        .select(\n            book\n                .price()\n                .avg()\n                .coalesce(BigDecimal.ZERO)\n        );\nList<Tuple2<BookStore, BigDecimal>> storeAvgPriceTuples =\n    query\n        \n        .orderBy(\n            // highlight-next-line\n            subQuery.desc()\n        )\n        .select(\n            store, \n            // highlight-next-line\n            subQuery\n        )\n        .execute();\n"))),(0,r.kt)(s.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val storeAvgPriceTuples = sqlClient\n    .createQuery(BookStore::class) {\n        val avgPriceSubQuery = subQuery(Book::class) {\n            where(table.store eq parentTable)\n            select(avg(table.price))\n        }\n        orderBy(\n            // highlight-next-line\n            avgPriceSubQuery.desc()\n        )\n        select(\n            table,\n            // highlight-next-line\n            avgPriceSubQuery\n        )\n    }\n    .execute()\n")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This example is special, the subquery is reused multiple times."),(0,r.kt)("p",{parentName:"admonition"},"In this case, lambda style is better than fluent style for Java.")),(0,r.kt)("p",null,"The final generated SQL is as follows"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    tb_1_.ID, \n    tb_1_.NAME, \n    tb_1_.WEBSITE, \n    (\n        /* highlight-next-line */\n        select coalesce(avg(tb_2_.PRICE), ?) \n        from BOOK as tb_2_\n        where tb_2_.STORE_ID = tb_1_.ID\n    ) \nfrom BOOK_STORE as tb_1_ \norder by (\n    /* highlight-next-line */\n    select coalesce(avg(tb_2_.PRICE), ?) \n    from BOOK as tb_2_\n    where tb_2_.STORE_ID = tb_1_.ID\n) desc\n")),(0,r.kt)("h3",{id:"using-the-any-operator"},"Using the ANY operator"),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'BookTable book = BookTable.$;\nAuthorTableEx author = AuthorTableEx.$;\n\nList<Book> books = sqlClient\n    .createQuery(book)\n    .where(\n        book.id().eq(sqlClient\n            .createSubQuery(author)\n            .where(\n                author.firstName().in(\n                    Arrays.asList("Alex", "Bill")\n                )\n            )\n            .select(author.books().id())\n            // highlight-next-line\n            .any()\n        )\n    )\n    .select(book)\n    .execute();\n'))),(0,r.kt)(s.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val books = sqlClient\n    .createQuery(Book::class) {\n        where(\n            // highlight-next-line\n            table.id eq any(\n                subQuery(Author::class) {\n                    where(\n                        table.firstName valueIn listOf(\n                            "Alex",\n                            "Bill"\n                        )\n                    )\n                    select(table.id)\n                }\n            )\n        )\n        select(table)\n    }\n    .execute()\n')))),(0,r.kt)("p",null,"The final generated SQL is as follows"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    tb_1_.ID, \n    tb_1_.NAME, \n    tb_1_.EDITION, \n    tb_1_.PRICE, \n    tb_1_.STORE_ID \nfrom BOOK as tb_1_ \nwhere tb_1_.ID = \n    /* highlight-next-line */\n    any(\n        select \n            tb_3_.BOOK_ID \n        from AUTHOR as tb_2_ \n        inner join BOOK_AUTHOR_MAPPING as tb_3_ \n            on tb_2_.ID = tb_3_.AUTHOR_ID \n        where \n            tb_2_.FIRST_NAME in (?, ?)\n    )\n")),(0,r.kt)("h3",{id:"using-the-all-operator"},"Using the ALL operator"),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'BookTable book = BookTable.$;\nAuthorTableEx author = AuthorTableEx.$;\n\nList<Book> books = sqlClient\n    .createQuery(book)\n    .where(\n        book.id().ne(sqlClient\n            .createSubQuery(author)\n            .where(\n                author.firstName().in(\n                    Arrays.asList("Alex", "Bill")\n                )\n            )\n            .select(author.books().id())\n            // highlight-next-line\n            .all()\n        )\n    )\n    .select(book)\n    .execute();\n'))),(0,r.kt)(s.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val books = sqlClient\n    .createQuery(Book::class) {\n        where(\n            // highlight-next-line\n            table.id ne all(\n                subQuery(Author::class) {\n                    where(\n                        table.firstName valueIn listOf(\n                            "Alex",\n                            "Bill"\n                        )\n                    )\n                    select(table.id)\n                }\n            )\n        )\n        select(table)\n    }\n    .execute()\n')))),(0,r.kt)("p",null,"The final generated SQL is as follows"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    tb_1_.ID, \n    tb_1_.NAME, \n    tb_1_.EDITION, \n    tb_1_.PRICE, \n    tb_1_.STORE_ID \nfrom BOOK as tb_1_ \nwhere tb_1_.ID <> \n    /* highlight-next-line */\n    all(\n        select \n            tb_3_.BOOK_ID \n        from AUTHOR as tb_2_ \n        inner join BOOK_AUTHOR_MAPPING as tb_3_ \n            on tb_2_.ID = tb_3_.AUTHOR_ID \n        where \n            tb_2_.FIRST_NAME in (?, ?)\n    )\n")),(0,r.kt)("h3",{id:"using-the-exists-operator"},"Using the EXISTS operator"),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'BookTable book = BookTable.$;\nAuthorTableEx author = AuthorTableEx.$;\n\nList<Book> books = sqlClient\n    .createQuery(book)\n    .where(sqlClient\n        .createSubQuery(author)\n        .where(\n            author.books().eq(book),\n            author.firstName().eq("Alex")\n        )\n        .select(author)\n        // highlight-next-line\n        .exists()\n    )\n    .select(book)\n    .execute();\n'))),(0,r.kt)(s.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val books = sqlClient\n    .createQuery(Book::class) {\n        where(\n            // highlight-next-line\n            exists(\n                subQuery(Author::class) {\n                    where(\n                        table.books eq parentTable,\n                        table.firstName eq "Alex"\n                    )\n                    select(table)\n                }\n            )\n        )\n        select(table)\n    }\n    .execute()\n')))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Kotlin code uses ",(0,r.kt)("inlineCode",{parentName:"p"},"parentTable")," to get the table of parent query.")),(0,r.kt)("p",null,"The final generated SQL is as follows"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    tb_1_.ID, \n    tb_1_.NAME, \n    tb_1_.EDITION, \n    tb_1_.PRICE, \n    tb_1_.STORE_ID \nfrom BOOK as tb_1_ \nwhere \n    /* highlight-next-line */\n    exists (\n        select \n            1 \n        from AUTHOR as tb_2_ \n        inner join BOOK_AUTHOR_MAPPING as tb_3_ \n            on tb_2_.ID = tb_3_.AUTHOR_ID \n        where \n            tb_3_.BOOK_ID = tb_1_.ID \n        and \n            tb_2_.FIRST_NAME = ?\n    )\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Note that in the final generated SQL, the column selected by the subquery is the constant ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),", not the setting of the Java code."),(0,r.kt)("p",{parentName:"admonition"},"This is because the ",(0,r.kt)("inlineCode",{parentName:"p"},"exists")," operator only cares whether the subquery matches the data, not which columns the subquery selects. Whatever you select in subquery will be ignored.")),(0,r.kt)("h2",{id:"untyped-subquery"},"Untyped subquery"),(0,r.kt)("p",null,"The last example in the previous section is the ",(0,r.kt)("inlineCode",{parentName:"p"},"exists")," subquery, whatever you select in subquery will be ignored."),(0,r.kt)("p",null,"That being the case, why specify the selection columns for the ",(0,r.kt)("inlineCode",{parentName:"p"},"exists")," subquery?"),(0,r.kt)("p",null,"Therefore, jimmer-sql supports untyped sub-query: wild-sub-query, which is different from ordinary sub-query. In the implementation of wild sub-query, the call to method ",(0,r.kt)("inlineCode",{parentName:"p"},"select")," is no longer required, that is, no return type is required."),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'BookTable book = BookTable.$;\nAuthorTableEx author = AuthorTableEx.$;\n\nList<Book> books = sqlClient\n    .createQuery(book)\n    .where(sqlClient\n        .createSubQuery(author)\n        .where(\n            author.books().eq(book),\n            author.firstName().eq("Alex")\n        )\n        // No select clause here\n        .exists()\n    )\n    .select(book)\n    .execute();\n'))),(0,r.kt)(s.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val books = sqlClient\n    .createQuery(Book::class) {\n        where(\n            exists(\n                // highlight-next-line\n                wildSubQuery(Author::class) {\n                    where(\n                        table.books eq parentTable,\n                        table.firstName eq "Alex"\n                    )\n                    // No select clause here\n                }\n            )\n        )\n        select(table)\n    }\n    .execute()\n')))),(0,r.kt)("p",null,"The final generated SQL is unchanged, still is"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    tb_1_.ID, \n    tb_1_.NAME, \n    tb_1_.EDITION, \n    tb_1_.PRICE, \n    tb_1_.STORE_ID \nfrom BOOK as tb_1_ \nwhere \n    /* highlight-next-line */\n    exists (\n        select \n            1 \n        from AUTHOR as tb_2_ \n        inner join BOOK_AUTHOR_MAPPING as tb_3_ \n            on tb_2_.ID = tb_3_.AUTHOR_ID \n        where \n            tb_3_.BOOK_ID = tb_1_.ID \n        and \n            tb_2_.FIRST_NAME = ?\n    )\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The only value of wild subqueries is to work with the ",(0,r.kt)("inlineCode",{parentName:"p"},"exists")," operator.")))}h.isMDXComponent=!0}}]);