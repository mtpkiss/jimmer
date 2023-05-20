"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[2076],{70544:function(e,n,t){t.r(n),t.d(n,{assets:function(){return y},contentTitle:function(){return v},default:function(){return B},frontMatter:function(){return b},metadata:function(){return I},toc:function(){return f}});var a=t(83117),l=t(80102),i=t(67294),o=t(3905),r=t(65488),p=t(85162),u=t(55113),s=t(26447),d=t(61903),m=t(94054),k=t(33841),c=t(43246),h=t(23599),g=(0,i.memo)((function(e){var n=e.defaultValue,t=(0,i.useState)(n),a=t[0],l=t[1],o=(0,i.useCallback)((function(e){l((function(n){return Object.assign({},n,{name:e.target.value})}))}),[]),r=(0,i.useCallback)((function(e){l((function(n){return Object.assign({},n,{edition:e.target.valueAsNumber})}))}),[]),p=(0,i.useCallback)((function(e){l((function(n){return Object.assign({},n,{price:e.target.valueAsNumber})}))}),[]),g=(0,i.useCallback)((function(e){var n=void 0,t=e.target.value;-1===(n="string"==typeof t?parseInt(t):t)&&(n=void 0),l((function(e){return Object.assign({},e,{storeId:n})}))}),[]),N=(0,i.useCallback)((function(e){var n=[];console.log(e.target.value);var t=e.target.value;n="string"==typeof t?t.split(",").map((function(e){return parseInt(e)})):t,l((function(e){return Object.assign({},e,{authorIds:n})}))}),[]);return i.createElement(u.Z,{elevation:3,style:{padding:"1.5rem",width:500}},i.createElement(s.Z,{spacing:2},i.createElement("h1",null,"Book Form"),i.createElement(d.Z,{label:"Name",value:a.name,onChange:o,error:""===a.name,helperText:""===a.name?"Name is required":""}),i.createElement(d.Z,{label:"Edition",type:"number",value:a.edition,onChange:r}),i.createElement(d.Z,{label:"Price",type:"number",value:a.price,onChange:p}),i.createElement(m.Z,{fullWidth:!0},i.createElement(k.Z,{id:"store-select-label"},"Store"),i.createElement(c.Z,{labelId:"store-select-label",label:"Authors",value:a.storeId,onChange:g},i.createElement(h.Z,{value:-1},"--NONE--"),i.createElement(h.Z,{value:1},"O'REILLY"),i.createElement(h.Z,{value:2},"MANNING"))),i.createElement(m.Z,{fullWidth:!0},i.createElement(k.Z,{id:"author-multi-select-label"},"Authors"),i.createElement(c.Z,{multiple:!0,labelId:"author-multi-select-label",label:"Authors",value:a.authorIds,onChange:N},i.createElement(h.Z,{value:1},"Eve Procello"),i.createElement(h.Z,{value:2},"Alex Banks"),i.createElement(h.Z,{value:3},"Dan Vanderkam"),i.createElement(h.Z,{value:4},"Boris Cherny"),i.createElement(h.Z,{value:5},"Samer Buna")))))})),N=["components"],b={sidebar_position:2,title:"Id\u89c6\u56fe"},v=void 0,I={unversionedId:"tutorial/query/calc/idview",id:"tutorial/query/calc/idview",title:"Id\u89c6\u56fe",description:"\u57fa\u672c\u6982\u5ff5\uff1a\u77ed\u5173\u8054",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/tutorial/query/calc/idview.mdx",sourceDirName:"tutorial/query/calc",slug:"/tutorial/query/calc/idview",permalink:"/jimmer/zh/docs/tutorial/query/calc/idview",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/tutorial/query/calc/idview.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Id\u89c6\u56fe"},sidebar:"tutorialSidebar",previous:{title:"\u7b80\u5355\u8ba1\u7b97",permalink:"/jimmer/zh/docs/tutorial/query/calc/formula"},next:{title:"\u590d\u6742\u8ba1\u7b97",permalink:"/jimmer/zh/docs/tutorial/query/calc/transient"}},y={},f=[{value:"\u57fa\u672c\u6982\u5ff5\uff1a\u77ed\u5173\u8054",id:"\u57fa\u672c\u6982\u5ff5\u77ed\u5173\u8054",level:2},{value:"Microsoft\u7684\u89e3\u51b3\u65b9\u6848",id:"microsoft\u7684\u89e3\u51b3\u65b9\u6848",level:2},{value:"IdView\u5c5e\u6027",id:"idview\u5c5e\u6027",level:2},{value:"\u58f0\u660e\u89c6\u56fe\u5c5e\u6027",id:"\u58f0\u660e\u89c6\u56fe\u5c5e\u6027",level:3},{value:"\u89c6\u56fe\u7684\u672c\u8d28",id:"\u89c6\u56fe\u7684\u672c\u8d28",level:3},{value:"\u6293\u53d6IdView\u5c5e\u6027",id:"\u6293\u53d6idview\u5c5e\u6027",level:2}],C={toc:f};function B(e){var n=e.components,t=(0,l.Z)(e,N);return(0,o.kt)("wrapper",(0,a.Z)({},C,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u57fa\u672c\u6982\u5ff5\u77ed\u5173\u8054"},"\u57fa\u672c\u6982\u5ff5\uff1a\u77ed\u5173\u8054"),(0,o.kt)("p",null,"\u5728\u4ecb\u7ecdId\u89c6\u56fe\u4e4b\u524d\uff0c\u6211\u4eec\u8981\u5148\u4ecb\u7ecd\u4e00\u4e2a\u6982\u5ff5\uff1a\u77ed\u5173\u8054\u3002"),(0,o.kt)("p",null,"\u5728\u4ecb\u7ecd\u77ed\u5173\u8054\u4e4b\u524d\uff0c\u6211\u4eec\u5148\u770b\u4e00\u770b\u666e\u901a\u5173\u8054"),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"Book book = bookRepository.findNullable(\n    1L,\n    BookFetcher.$\n        .allScalarFields()\n        // highlight-next-line\n        .store(\n            BookStoreFetcher.$\n                .allScalarFields()\n        )\n        // highlight-next-line\n        .authors(\n            AuthorFetcher.$\n                .firstName()\n                .lastName()\n        )\n);\nSystem.out.println(book);\n"))),(0,o.kt)(p.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val book = bookRepository.findNullable(\n    1L,\n    newFetcher(Book::class).by {\n        allScalarFields()\n        // highlight-next-line\n        store {\n            allScalarFields()\n        }\n        // highlight-next-line\n        authors {\n            firstName()\n            lastName()\n        }\n    }\n);\nSystem.out.println(book);\n")))),(0,o.kt)("p",null,"\u4ee3\u7801\u4e2d"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u5173\u8054\u5c5e\u6027",(0,o.kt)("inlineCode",{parentName:"li"},"Book.store"),"\u5173\u8054\u6293\u53d6\u5173\u8054\u5bf9\u8c61",(0,o.kt)("inlineCode",{parentName:"li"},"BookStore"),"\uff0c\u5e76\u671f\u671b\u83b7\u5f97\u5173\u8054\u5bf9\u8c61\u7684\u6240\u6709\u975e\u5173\u8054\u5c5e\u6027"),(0,o.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u5173\u8054\u5c5e\u6027",(0,o.kt)("inlineCode",{parentName:"li"},"Book.authors"),"\u5173\u8054\u6293\u53d6\u5173\u8054\u5bf9\u8c61",(0,o.kt)("inlineCode",{parentName:"li"},"Author"),"\uff0c\u5e76\u671f\u671b\u83b7\u5f97\u5173\u8054\u5bf9\u8c61\u7684\u7684",(0,o.kt)("inlineCode",{parentName:"li"},"id"),"(\u9690\u542b+\u5f3a\u5236)\u3001",(0,o.kt)("inlineCode",{parentName:"li"},"firstName"),"\u548c",(0,o.kt)("inlineCode",{parentName:"li"},"lastName"))),(0,o.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\u4e3a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id":1,\n    "name":"Learning GraphQL",\n    "edition":1,\n    "price":45,\n    // highlight-next-line\n    "store":{\n        "id":1,\n        "name":"O\'REILLY",\n        "website":null\n    },\n    // highlight-next-line\n    "authors":[\n        {\n            "id":2,\n            "firstName":"Alex",\n            "lastName":"Banks"\n        },\n        {\n            "id":1,\n            "firstName":"Eve",\n            "lastName":"Procello"\n        }\n    ]\n}\n')),(0,o.kt)("p",null,"\u8fd9\u91cc\uff0c\u805a\u5408\u6839\u5bf9\u8c61",(0,o.kt)("inlineCode",{parentName:"p"},"Book"),"\u4e0a\u7684\u5173\u8054\u5bf9\u8c61\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"BookStore"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"Author"),"\uff0c\u5177\u5907\u9664\u4e86id\u4ee5\u5916\u7684\u5176\u4ed6\u5c5e\u6027\uff0c\u5177\u6709\u76f8\u5bf9\u5b8c\u5584\u7684\u4fe1\u606f\u3002"),(0,o.kt)("p",null,"\u66f4\u91cd\u8981\u7684\u662f\uff0c\u975e",(0,o.kt)("inlineCode",{parentName:"p"},"id"),"\u5c5e\u6027\u5f53\u7136\u4e5f\u5305\u62ec\u5173\u8054\u5c5e\u6027\uff0c\u6240\u4ee5\u6b64\u6570\u636e\u7ed3\u6784\u53ef\u4ee5\u591a\u5c42\u5d4c\u5957\u751a\u81f3\u9012\u5f52\uff08\u6b64\u5904\u6570\u636e\u7ed3\u6784\u672a\u5c55\u793a\u591a\u5c42\u6b21\uff0c\u4f46\u53ef\u4ee5\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"../initial-contact#%E6%9F%A5%E8%AF%A2%E5%A4%8D%E6%9D%82%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84"},"\u591a\u5c42\u5173\u8054"),"\u548c",(0,o.kt)("a",{parentName:"p",href:"../initial-contact#%E9%80%92%E5%BD%92%E6%9F%A5%E8%AF%A2"},"\u9012\u5f52\u5173\u8054"),"\uff09\u3002\u56e0\u6b64\uff0c\u8fd9\u79cd\u5173\u8054\u4e5f\u53ef\u4ee5\u53eb\u505a\u201c\u957f\u5173\u8054\u201d\u3002"),(0,o.kt)("p",null,"\u4f46\u662f\uff0c\u5e76\u975e\u6240\u6709\u65f6\u5019\u90fd\u9700\u8981\u5c42\u6b21\u5f88\u6df1\u7684\u6570\u636e\u7ed3\u6784\u3002\u5b9e\u9645\u9879\u76ee\u4e2d\uff0c\u6709\u65f6\u9700\u8981\u7684\u53ea\u662f\u4e00\u79cd\u975e\u5e38\u7b80\u5355\u7684\u754c\u9762\uff0c\u5982\u4e0b"),(0,o.kt)(g,{defaultValue:{name:"Learning GraphQL",edition:1,price:45,storeId:1,authorIds:[1,2]},mdxType:"ShortAssociation"}),(0,o.kt)("p",null,"\u5728\u8fd9\u4e2a\u754c\u9762\u4e2d"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Book.store"),"\u662f\u591a\u5bf9\u4e00\u5173\u8054\uff0c\u5728\u754c\u9762\u4e0a\u4f53\u73b0\u4e3a\u5355\u9009\u4e0b\u62c9\u6846"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Book.authors"),"\u662f\u591a\u5bf9\u591a\u5173\u8054\uff0c\u5728\u754c\u9762\u4e0a\u4f53\u73b0\u4e3a\u591a\u9009\u4e0b\u62c9\u6846")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"\u5f53\u7136\uff0c\u5982\u679c\u5019\u9009\u6570\u636e\u5f88\u591a\uff0c\u4e0b\u62c9\u5217\u8868\u4e0d\u518d\u662f\u5408\u7406\u7684\u8bbe\u8ba1\uff0c\u8fd9\u65f6\uff0c\u6539\u8fdb\u4e3a\u5f39\u51fa\u5bf9\u8bdd\u6846\u5e76\u5728\u5bf9\u8bdd\u6846\u4e2d\u4f7f\u7528\u5206\u9875\u3002\u4f46\uff0c\u8fd9\u4e9bUI\u7ec6\u8282\u4e0d\u91cd\u8981\uff0c\u548c\u73b0\u6709\u8bdd\u9898\u65e0\u5173\u3002"))),(0,o.kt)("p",null,"\u5f88\u660e\u663e\uff0c\u8fd9\u65f6\uff0c\u7528\u6237\u53ea\u5173\u6ce8\u5173\u8054\u5bf9\u8c61\u5bf9\u8c61\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"id"),"\uff0c\u5bf9\u5173\u8054\u5bf9\u8c61\u7684\u5176\u4ed6\u5c5e\u6027\u6ca1\u6709\u5174\u8da3\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u5373, \u5e0c\u671b\u5173\u8054\u5bf9\u8c61\u53ea\u6709id\u5c5e\u6027")),(0,o.kt)("p",null,"\u4e3a\u4e86\u8ba9\u805a\u5408\u6839\u6302\u4e0a\u4e00\u4e9b\u53ea\u6709id\u7684\u7684\u5173\u8054\u5bf9\u8c61\uff0c\u6211\u4eec\u53ef\u4ee5\u6539\u8fdb\u4ee3\u7801\u3002"),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"Book book = bookRepository.findNullable(\n    1L,\n    BookFetcher.$\n        .allScalarFields()\n        // highlight-next-line\n        .store() //\u65e0\u53c2\u6570\u8868\u793aid only\n        // highlight-next-line\n        .authors() //\u65e0\u53c2\u6570\u8868\u793aid only\n);\nSystem.out.println(book);\n"))),(0,o.kt)(p.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val book = bookRepository.findNullable(\n    1L,\n    newFetcher(Book::class).by {\n        allScalarFields()\n        // highlight-next-line\n        store() //\u65e0\u53c2\u6570\u8868\u793aid only\n        // highlight-next-line\n        authors() //\u65e0\u53c2\u6570\u8868\u793aid only\n    }\n);\nSystem.out.println(book);\n")))),(0,o.kt)("p",null,"\u8fd9\u6b21\uff0c\u6211\u4eec\u5f97\u5230\u4e86\u8fd9\u6837\u7684\u6570\u636e\u7ed3\u6784"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id":1,\n    "name":"Learning GraphQL",\n    "edition":1,\n    "price":45,\n    "store":{\n        // \u53ea\u6709id\u5c5e\u6027\n        // highlight-next-line\n        "id":1\n    },\n    "authors":[\n        {\n            // \u53ea\u6709id\u5c5e\u6027\n            // highlight-next-line\n            "id":1\n        },\n        {\n            // \u53ea\u6709id\u5c5e\u6027\n            // highlight-next-line\n            "id":2\n        }\n    ]\n}\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u5728Hibernate\u4e2d\uff0c\u8fd9\u79cd\u53ea\u6709id\u5c5e\u6027\u7684\u5bf9\u8c61\u88ab\u79f0\u4e3a\u4ee3\u7406\u5bf9\u8c61\u3002")),(0,o.kt)("p",null,"\u4f46\u662f\uff0c\u53ea\u6709id\u7684\u5173\u8054\u5bf9\u8c61\uff0c\u5e76\u6ca1\u6709\u5173\u8054id\u90a3\u4e48\u7b80\u5355\u3002\u8ba9\u540c\u6837\u7684\u7684\u6570\u636e\u7528\u5173\u8054id\u800c\u975e\u5173\u8054\u5bf9\u8c61\u6765\u8868\u8fbe\u7684\u6837\u5b50\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id":1,\n    "name":"Learning GraphQL",\n    "edition":1,\n    "price":45,\n    // highlight-next-line\n    "storeId": 1,\n    // highlight-next-line\n    "authorIds":[1, 2]\n}\n')),(0,o.kt)("p",null,"\u5f88\u660e\u663e\uff0c\u5bf9\u4e8e\u77ed\u5173\u8054\u4e1a\u52a1\u800c\u8a00\uff0c\u5173\u8054id\u6216\u5176\u96c6\u5408\u6bd4\u53ea\u6709id\u7684\u5173\u8054\u5bf9\u8c61\u6216\u5176\u96c6\u5408\u7b80\u5355\u3002"),(0,o.kt)("h2",{id:"microsoft\u7684\u89e3\u51b3\u65b9\u6848"},"Microsoft\u7684\u89e3\u51b3\u65b9\u6848"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ADO.NET EF Core"),"\u662fMicrosoft\u7684ORM\uff0c\u8ba9\u6211\u4eec\u6765\u770b\u770b\u5176\u8bbe\u8ba1: ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/ef/core/modeling/relationships?tabs=fluent-api%2Cfluent-api-simple-key%2Csimple-key"},"https://learn.microsoft.com/en-us/ef/core/modeling/relationships?tabs=fluent-api%2Cfluent-api-simple-key%2Csimple-key")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="\u8fd9\u6bb5C#\u4ee3\u7801\u4ece\u4e0a\u9762\u7684\u94fe\u63a5\u7684\u9875\u9762\u590d\u5236"',title:'"\u8fd9\u6bb5C#\u4ee3\u7801\u4ece\u4e0a\u9762\u7684\u94fe\u63a5\u7684\u9875\u9762\u590d\u5236"'},"public class Post\n{\n    public int PostId { get; set; }\n    public string Title { get; set; }\n    public string Content { get; set; }\n\n    // highlight-start\n    public int BlogId { get; set; }\n    public Blog Blog { get; set; }\n    // highlight-end\n}\n")),(0,o.kt)("p",null,"\u4e0d\u96be\u53d1\u73b0"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5173\u8054\u5bf9\u8c61: ",(0,o.kt)("inlineCode",{parentName:"li"},"public Blog Blog { get; set; }")),(0,o.kt)("li",{parentName:"ul"},"\u5173\u8054id: ",(0,o.kt)("inlineCode",{parentName:"li"},"public int BlogId { get; set; }"))),(0,o.kt)("p",null,"\u4e8c\u8005\u5e76\u5b58\u3002"),(0,o.kt)("p",null,"Jimmer\u501f\u9274",(0,o.kt)("inlineCode",{parentName:"p"},"ADO.NET EF Core"),"\u8fd9\u79cd\u8bbe\u8ba1\uff0c\u63d0\u4f9b\u4e86",(0,o.kt)("inlineCode",{parentName:"p"},"@IdView"),"\u5c5e\u6027\u3002"),(0,o.kt)("h2",{id:"idview\u5c5e\u6027"},"IdView\u5c5e\u6027"),(0,o.kt)("h3",{id:"\u58f0\u660e\u89c6\u56fe\u5c5e\u6027"},"\u58f0\u660e\u89c6\u56fe\u5c5e\u6027"),(0,o.kt)("p",null,"IdView\u5c5e\u6027\u7531",(0,o.kt)("inlineCode",{parentName:"p"},"@org.babyfish.jimmer.sql.IdView"),"\u58f0\u660e"),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},'package com.example.model;\n\nimport org.babyfish.jimmer.sql.*;\nimport org.jetbrains.annotations.Nullable;\n\n@Entity\npublic interface Book {\n\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n\n    @ManyToOne\n    @Nullable\n    BookStore store();\n\n    @ManyToMany\n    @JoinTable(\n        name = "BOOK_AUTHOR_MAPPING",\n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "AUTHOR_id"\n    )\n    List<Author> authors();\n\n    // highlight-next-line\n    @IdView // \u5173\u8054\u5bf9\u8c61store\u7684id\u7684\u89c6\u56fe\n    Long storeId();\n\n    // \u5173\u8054\u5bf9\u8c61\u96c6\u5408authors\u4e2d\u6240\u6709\u5bf9\u8c61\u7684id\u7684\u89c6\u56fe\n    // highlight-next-line\n    @IdView("authors") \n    List<Long> authorIds();\n}\n'))),(0,o.kt)(p.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},'package com.example.model\n\nimport org.babyfish.jimmer.sql.*\n\n@Entity\ninterface Author {\n\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n\n    @ManyToOne\n    val store: BookStore?\n\n    @ManyToMany\n    @JoinTable(\n        name = "BOOK_AUTHOR_MAPPING",\n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "AUTHOR_id"\n    )\n    val authors: List<Auhtor>\n\n    // highlight-next-line\n    @IdView // \u5173\u8054\u5bf9\u8c61store\u7684id\u7684\u89c6\u56fe\n    val storeId: Long?\n\n    // \u5173\u8054\u5bf9\u8c61\u96c6\u5408authors\u4e2d\u6240\u6709\u5bf9\u8c61\u7684id\u7684\u89c6\u56fe\n    // highlight-next-line\n    @IdView("authors") \n    val authorIds: List<Long>\n}\n')))),(0,o.kt)("p",null,"\u5176\u4e2d\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Book.storeId"),": \u5173\u8054",(0,o.kt)("inlineCode",{parentName:"p"},"Book.store"),"\u5bf9\u8c61\u7684id\u7684\u89c6\u56fe\u3002"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"storeId"),"\u672c\u8eab\u4ee5",(0,o.kt)("inlineCode",{parentName:"p"},"Id"),"\u7ed3\u5c3e\uff0c\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u53ef\u4ee5\u4e0d\u6307\u5b9a",(0,o.kt)("inlineCode",{parentName:"p"},"@IdView"),"\u6ce8\u89e3\u7684\u53c2\u6570\uff0cJimmer\u8ba4\u4e3a\u6539\u89c6\u56fe\u5c5e\u6027\u7684\u539f\u59cb\u5173\u8054\u5c5e\u6027\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"Book.store"),"\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u539f\u59cb\u5173\u8054\u5c5e\u6027\u548cIdView\u5c5e\u6027\u7684\u53ef\u7a7a\u6027\u5fc5\u987b\u4e00\u81f4\u3002"),(0,o.kt)("p",{parentName:"li"},"  \u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"Book.store"),"\u5c5e\u6027\u53ef\u4ee5\u4e3anull\uff0c\u5373\uff0cJava\u7248\u672c\u88ab",(0,o.kt)("inlineCode",{parentName:"p"},"@Nullable\u4fee\u9970"),"\uff0cKotlin\u7248\u672c\u8fd4\u56de",(0,o.kt)("inlineCode",{parentName:"p"},"BookStore?"),"\u3002"),(0,o.kt)("p",{parentName:"li"},"  \u56e0\u6b64\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"Book.storeId"),"\u4e5f\u5fc5\u987b\u53ef\u4ee5\u4e3anull\uff0c\u5373\uff0cJava\u7248\u672c\u8fd4\u56de\u5fc5\u987b\u8fd4\u56de",(0,o.kt)("inlineCode",{parentName:"p"},"Long"),"\u800c\u975e",(0,o.kt)("inlineCode",{parentName:"p"},"long"),"\uff0cKotlin\u7248\u672c\u5fc5\u987b\u8fd4\u56de",(0,o.kt)("inlineCode",{parentName:"p"},"Long?"),"\u800c\u975e",(0,o.kt)("inlineCode",{parentName:"p"},"Long"),"\u3002"),(0,o.kt)("p",{parentName:"li"},"  \u5426\u5219\uff0c\u4f1a\u5bfc\u81f4\u7f16\u8bd1\u9519\u8bef\u3002")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Book.authorIds"),": \u5173\u8054",(0,o.kt)("inlineCode",{parentName:"p"},"Book.store"),"\u5bf9\u8c61\u96c6\u5408\u4e2d\uff0c\u6240\u6709\u5bf9\u8c61\u7684id\u5f62\u6210\u7684\u89c6\u56fe\u3002"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"authorIds"),"\u672c\u8eab\u4e0d\u4ee5",(0,o.kt)("inlineCode",{parentName:"p"},"Id"),"\u7ed3\u5c3e\uff0c\u5fc5\u987b\u6307\u5b9a",(0,o.kt)("inlineCode",{parentName:"p"},"@IdView"),"\u6ce8\u89e3\u7684\u53c2\u6570\uff0c\u660e\u786e\u8868\u793a\u5176\u539f\u59cb\u5173\u8054\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"Book.authors"),"\u3002"),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u9700\u8981\u8fd9\u6837\u505a\u7684\u539f\u56e0\u662f\u82f1\u6587\u5b58\u5728\u4e0d\u89c4\u5219\u540d\u8bcd\u590d\u6570\u53d8\u5f62\u7684\u95ee\u9898\u3002")))),(0,o.kt)("h3",{id:"\u89c6\u56fe\u7684\u672c\u8d28"},"\u89c6\u56fe\u7684\u672c\u8d28"),(0,o.kt)("p",null,"\u4e0a\u6587\u53cd\u590d\u5f3a\u8c03",(0,o.kt)("inlineCode",{parentName:"p"},"\u89c6\u56fe"),"\u4e8c\u5b57\u662f\u6709\u539f\u56e0\u7684\u3002IdView\u5c5e\u6027\u5e76\u6ca1\u6709\u81ea\u5df1\u7684\u6570\u636e\uff0c\u5b83\u53ea\u662f\u539f\u59cb\u5173\u8054\u5c5e\u6027\u7684\u89c6\u56fe\u3002"),(0,o.kt)("p",null,"\u8fd9\u8868\u793a\uff0cIdView\u5c5e\u6027\u548c\u539f\u59cb\u5173\u8054\u5c5e\u6027\u662f\u8054\u52a8\u7684\uff0c\u4fee\u6539\u4e00\u4e2a\uff0c\u5fc5\u7136\u5f71\u54cd\u53e6\u5916\u4e00\u4e2a\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u8bbe\u7f6e\u89c6\u56fe\u5c5e\u6027\uff0c\u5f71\u54cd\u539f\u59cb\u5c5e\u6027:"),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// \u8bbe\u7f6e\u89c6\u56fe\u5c5e\u6027\nBook book = BookDraft.$.produce(draft -> {\n    draft.setStoreId(10L);\n    draft.setAuthorIds(Arrays.asList(100L, 101L));\n});\n\n// \u6253\u5370\u539f\u59cb\u5c5e\u6027\nSystem.out.println("Store: " + book.store());\nSystem.out.println("Authors:" + book.authors());\n'))),(0,o.kt)(p.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'// \u8bbe\u7f6e\u89c6\u56fe\u5c5e\u6027\nval book = new(Book::class).by {\n    storeId = 10L\n    authorIds = listOf(100L, 101L)\n}\n\n// \u6253\u5370\u539f\u59cb\u5c5e\u6027\nprintln("Store: $book.store}")\nprintln("Authors: ${book.authors}")\n')))),(0,o.kt)("p",{parentName:"li"},"\u6253\u5370\u7ed3\u679c\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'Store: {"id":10}\nAuthors: [{"id":100},{"id":101}]\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u8bbe\u7f6e\u539f\u59cb\u5c5e\u6027\uff0c\u5f71\u54cd\u89c6\u56fe\u5c5e\u6027:"),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// \u8bbe\u7f6e\u539f\u59cb\u5c5e\u6027\nBook book = BookDraft.$.produce(draft -> {\n    draft.applyStore(store -> {\n        store.setId(10L).storeName("TURING")\n    });\n    draft.addIntoAuthors(author -> {\n        author.setId(101L);\n        author.setFirstName("Fabrice");\n        author.setLastName("Marguerie");\n    });\n    draft.addIntoAuthors(author -> {\n        author.setId(101L);\n        author.setFirstName("Steve");\n        author.setLastName("Eichert"); \n    });\n});\n\n// \u6253\u5370\u89c6\u56fe\u5c5e\u6027\nSystem.out.println("StoreId: " + book.storeId());\nSystem.out.println("AuthorIds:" + book.authorIds());\n'))),(0,o.kt)(p.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'// \u8bbe\u7f6e\u539f\u59cb\u5c5e\u6027\nval book = new(Book::class).by {\n    store().apply {\n        id = 10L\n        name = "TURING"\n    }\n    authorIds().addBy {\n        id = 101L;\n        firstName = "Fabrice"\n        lastName = "Marguerie"\n    }\n    draft.addIntoAuthors(author -> {\n        id = 101L\n        firstName = "Steve"\n        lastName = "Eichert" \n    });\n}\n\n// \u6253\u5370\u89c6\u56fe\u5c5e\u6027\nprintln("Store: $book.storeId}")\nprintln("Authors: ${book.authorIds}")\n')))),(0,o.kt)("p",{parentName:"li"},"\u6253\u5370\u7ed3\u679c\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"StoreId: 10\nAuthorIds: [100, 101]\n")))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u8fd9\u8bf4\u660e\u89c6\u56fe\u5c5e\u6027\u548c\u539f\u59cb\u5c5e\u6027\u662f\u9ad8\u5ea6\u7edf\u4e00\u7684\uff0cJimmer\u4ecd\u7136\u662f\u4ee5\u5173\u8054\u5bf9\u8c61\u4e3a\u6838\u5fc3\u7684ORM\u6846\u67b6\uff0c\u89c6\u56fe\u5c5e\u6027\u4ec5\u4ec5\u662f\u4e00\u79cd\u8bed\u6cd5\u7cd6\u3002"),(0,o.kt)("p",{parentName:"admonition"},"\u9664\u4e86\u63a5\u4e0b\u6765\u8981\u8bb2\u89e3\u7684\u89c6\u56fe\u5c5e\u6027\u5bf9\u5bf9\u8c61\u6293\u53d6\u5668\u7684\u5f71\u54cd\u5916\uff0c\u89c6\u56fe\u5c5e\u6027\u5bf9ORM\u548c\u6838\u5fc3\u903b\u8f91\u4e0d\u4f1a\u9020\u6210\u4efb\u4f55\u5f71\u54cd\u3002")),(0,o.kt)("h2",{id:"\u6293\u53d6idview\u5c5e\u6027"},"\u6293\u53d6IdView\u5c5e\u6027"),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"Book book = bookRepository.findNullable(\n    1L,\n    BookFetcher.$\n        .allScalarFields()\n        // highlight-next-line\n        .storeId()\n        // highlight-next-line\n        .authorIds()\n);\nSystem.out.println(book);\n"))),(0,o.kt)(p.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val book = bookRepository.findNullable(\n    1L,\n    newFetcher(Book::class).by {\n        allScalarFields()\n        // highlight-next-line\n        storeId()\n        // highlight-next-line\n        authorIds()\n    }\n);\nSystem.out.println(book);\n")))),(0,o.kt)("p",null,"\u6253\u5370\u7ed3\u679c\u4e3a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id":1,\n    "name":"Learning GraphQL",\n    "edition":1,\n    "price":45,\n    // highlight-next-line\n    "storeId": 1,\n    // highlight-next-line\n    "authorIds":[1, 2]\n}\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u5bf9Jimmer\u52a8\u6001\u5b9e\u4f53\u800c\u8a00\uff0c\u539f\u59cb\u5173\u8054\u5c5e\u6027\u548c\u89c6\u56fe\u5c5e\u6027\u7edd\u5bf9\u4e00\u81f4\uff0c\u8981\u4e48\u90fd\u53ef\u4ee5\u8bbf\u95ee\uff0c\u8981\u4e48\u90fd\u7f3a\u5931\u3002"),(0,o.kt)("p",{parentName:"admonition"},"\u65e0\u8bba\u9009\u62e9\u6293\u53d6\u539f\u59cb\u5173\u8054\u5c5e\u6027\uff0c\u8fd8\u662f\u9009\u62e9\u6293\u53d6IdView\u89c6\u56fe\u5c5e\u6027\uff0c\u90fd\u4e0d\u4f1a\u5f71\u54cdJimmer\u5e95\u5c42\u6267\u884c\u903b\u8f91\uff0c\u5f53\u7136\u5305\u62ec\u6700\u7ec8\u751f\u6210\u7684SQL\u3002"),(0,o.kt)("p",{parentName:"admonition"},"\u4e0d\u540c\u9009\u62e9\u5e26\u6765\u5dee\u5f02\u53ea\u6709\u4e00\u4e2a\uff0c\u539f\u59cb\u5173\u8054\u5c5e\u6027\u548c\u89c6\u56fe\u5c5e\u6027\u7684Jackson\u53ef\u89c1\u6027\u6807\u5fd7\u4e0d\u540c\u3002"),(0,o.kt)("p",{parentName:"admonition"},"\u5373\uff0c\u4f7f\u7528Jackson\u5e8f\u5217\u5316\u65f6\uff0c\u88ab\u76f4\u63a5\u6293\u53d6\u7684\u5c5e\u6027\u4f1a\u88ab\u5e8f\u5217\u5316\uff0c\u672a\u88ab\u76f4\u63a5\u6293\u53d6\u7684\u5c5e\u6027\u4f1a\u88ab\u5ffd\u7565\u3002")))}B.isMDXComponent=!0}}]);