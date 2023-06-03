"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[5169],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return k}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(t),k=o,d=m["".concat(s,".").concat(k)]||m[k]||c[k]||r;return t?a.createElement(d,l(l({ref:n},p),{},{components:t})):a.createElement(d,l({ref:n},p))}));function k(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<r;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},85162:function(e,n,t){t.d(n,{Z:function(){return l}});var a=t(67294),o=t(34334),r="tabItem_Ymn6";function l(e){var n=e.children,t=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,l),hidden:t},n)}},65488:function(e,n,t){t.d(n,{Z:function(){return k}});var a=t(83117),o=t(67294),r=t(34334),l=t(72389),i=t(67392),s=t(7094),u=t(12466),p="tabList__CuJ",c="tabItem_LNqP";function m(e){var n,t,l=e.lazy,m=e.block,k=e.defaultValue,d=e.values,b=e.groupId,h=e.className,N=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),_=null!=d?d:N.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),g=(0,i.l)(_,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===k?k:null!=(n=null!=k?k:null==(t=N.find((function(e){return e.props.default})))?void 0:t.props.value)?n:N[0].props.value;if(null!==f&&!_.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+_.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,s.U)(),T=v.tabGroupChoices,y=v.setTabGroupChoices,O=(0,o.useState)(f),A=O[0],E=O[1],I=[],x=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var B=T[b];null!=B&&B!==A&&_.some((function(e){return e.value===B}))&&E(B)}var C=function(e){var n=e.currentTarget,t=I.indexOf(n),a=_[t].value;a!==A&&(x(n),E(a),null!=b&&y(b,String(a)))},w=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a,o=I.indexOf(e.currentTarget)+1;t=null!=(a=I[o])?a:I[0];break;case"ArrowLeft":var r,l=I.indexOf(e.currentTarget)-1;t=null!=(r=I[l])?r:I[I.length-1]}null==(n=t)||n.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",p)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":m},h)},_.map((function(e){var n=e.value,t=e.label,l=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:A===n?0:-1,"aria-selected":A===n,key:n,ref:function(e){return I.push(e)},onKeyDown:w,onFocus:C,onClick:C},l,{className:(0,r.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":A===n})}),null!=t?t:n)}))),l?(0,o.cloneElement)(N.filter((function(e){return e.props.value===A}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},N.map((function(e,n){return(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==A})}))))}function k(e){var n=(0,l.Z)();return o.createElement(m,(0,a.Z)({key:String(n)},e))}},41558:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return k}});var a=t(83117),o=t(80102),r=(t(67294),t(3905)),l=t(65488),i=t(85162),s=["components"],u={sidebar_position:12,title:"\u76f4\u63a5\u67e5\u8be2\u4e2d\u95f4\u8868"},p=void 0,c={unversionedId:"team-work/query/associations",id:"team-work/query/associations",title:"\u76f4\u63a5\u67e5\u8be2\u4e2d\u95f4\u8868",description:"\u88ab\u5bf9\u8c61\u6a21\u578b\u9690\u85cf\u7684\u4e2d\u95f4\u8868",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/team-work/query/associations.mdx",sourceDirName:"team-work/query",slug:"/team-work/query/associations",permalink:"/jimmer/zh/docs/team-work/query/associations",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/team-work/query/associations.mdx",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12,title:"\u76f4\u63a5\u67e5\u8be2\u4e2d\u95f4\u8868"},sidebar:"tutorialSidebar",previous:{title:"\u591a\u89c6\u89d2\u7f13\u5b58",permalink:"/jimmer/zh/docs/team-work/query/global-filter/multiview-cache"},next:{title:"\u4fee\u6539\u7bc7",permalink:"/jimmer/zh/docs/team-work/mutation/"}},m={},k=[{value:"\u88ab\u5bf9\u8c61\u6a21\u578b\u9690\u85cf\u7684\u4e2d\u95f4\u8868",id:"\u88ab\u5bf9\u8c61\u6a21\u578b\u9690\u85cf\u7684\u4e2d\u95f4\u8868",level:2},{value:"\u76f4\u63a5\u67e5\u8be2\u4e2d\u95f4\u8868",id:"\u76f4\u63a5\u67e5\u8be2\u4e2d\u95f4\u8868",level:2},{value:"\u548c\u975e\u4e2d\u95f4\u8868\u67e5\u8be2\u7684\u5bf9\u6bd4",id:"\u548c\u975e\u4e2d\u95f4\u8868\u67e5\u8be2\u7684\u5bf9\u6bd4",level:2},{value:"1. \u57fa\u4e8e\u4e2d\u95f4\u8868\u5b50\u67e5\u8be2\u5b9e\u73b0\u4e00\u4e2a\u529f\u80fd",id:"1-\u57fa\u4e8e\u4e2d\u95f4\u8868\u5b50\u67e5\u8be2\u5b9e\u73b0\u4e00\u4e2a\u529f\u80fd",level:3},{value:"2. \u4e0d\u57fa\u4e8e\u4e2d\u95f4\u8868\u5b50\u67e5\u8be2\u5b9e\u73b0\u540c\u6837\u7684\u529f\u80fd",id:"2-\u4e0d\u57fa\u4e8e\u4e2d\u95f4\u8868\u5b50\u67e5\u8be2\u5b9e\u73b0\u540c\u6837\u7684\u529f\u80fd",level:3}],d={toc:k};function b(e){var n=e.components,t=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u88ab\u5bf9\u8c61\u6a21\u578b\u9690\u85cf\u7684\u4e2d\u95f4\u8868"},"\u88ab\u5bf9\u8c61\u6a21\u578b\u9690\u85cf\u7684\u4e2d\u95f4\u8868"),(0,r.kt)("p",null,"\u8ba9\u6211\u4eec\u56de\u987e\u4e00\u4e0b\u8fd9\u6bb5\u5b9e\u4f53\u63a5\u53e3\u5b9a\u4e49\u4ee3\u7801"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Entity\npublic interface Book {\n\n    @ManyToMany\n    @JoinTable(\n        // highlight-next-line\n        name = "BOOK_AUTHOR_MAPPING", \n        joinColumnName = "BOOK_ID", \n        inverseJoinColumnName = "AUTHOR_ID"\n    )\n    List<Author> authors();\n\n    ...omit other code...\n}\n'))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Entity\ninterface Book {\n\n    @ManyToMany\n    @JoinTable(\n        // highlight-next-line\n        name = "BOOK_AUTHOR_MAPPING", \n        joinColumnName = "BOOK_ID", \n        inverseJoinColumnName = "AUTHOR_ID"\n    )\n    val authors: List<Author>\n\n    ...omit other code...\n}\n')))),(0,r.kt)("p",null,"\u4e0a\u8ff0\u4ee3\u7801\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"BOOK_AUTHOR_MAPPING"),"\u8868\u4f5c\u4e3a\u4e2d\u95f4\u8868\u88ab\u4f7f\u7528\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6570\u636e\u5e93\u7684BOOK\u8868\uff0cJava\u4ee3\u7801\u6709\u4e0e\u4e4b\u5bf9\u5e94\u7684\u5b9e\u4f53\u63a5\u53e3Book\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6570\u636e\u5e93\u7684AUTHOR\u8868\uff0cJava\u4ee3\u7801\u6709\u4e0e\u4e4b\u5bf9\u5e94\u7684\u5b9e\u4f53\u63a5\u53e3Author\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4f46\u662f\uff0c\u6570\u636e\u5e93\u4e2d\u7684BOOK_AUTHOR_MAPPING\u8868\uff0c\u5728Java\u4ee3\u7801\u4e2d\u6ca1\u6709\u5bf9\u5e94\u7684\u5b9e\u4f53\u63a5\u53e3\u3002"))),(0,r.kt)("p",null,"\u5373\uff0c\u4e2d\u95f4\u8868\u88ab\u5bf9\u8c61\u6a21\u578b\u9690\u85cf\u4e86\u3002"),(0,r.kt)("h2",{id:"\u76f4\u63a5\u67e5\u8be2\u4e2d\u95f4\u8868"},"\u76f4\u63a5\u67e5\u8be2\u4e2d\u95f4\u8868"),(0,r.kt)("p",null,"Jimmer\u63d0\u4f9b\u4e86\u4e00\u4e2a\u6709\u8da3\u7684\u529f\u80fd\uff0c\u5373\u4fbf\u4e2d\u95f4\u8868\u88ab\u9690\u85cf\u6ca1\u6709\u5bf9\u5e94\u5b9e\u4f53\uff0c\u4e5f\u53ef\u4ee5\u5bf9\u5176\u76f4\u63a5\u67e5\u8be2\u3002"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"AssociationTable<Book, BookTableEx, Author, AuthorTableEx> association =\n    AssociationTable.of(BookTableEx.class, BookTableEx::authors);\n    \nList<Association<Book, Author>> associations =\n    sqlClient\n        // highlight-next-line\n        .createAssociationQuery(association)\n        .where(association.source().id().eq(3L))\n        .select(association)\n        .execute();\nassociations.forEach(System.out::println);\n"))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val associations = sqlClient\n    .queries\n    .forList(Book::authors) {\n        where(table.source.id eq 3L)\n        select(table)\n    }\n    .execute()\nassociations.forEach(::println)\n")))),(0,r.kt)("p",null,"\u8fd9\u91cc\uff0cJava\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"createAssociationQuery"),"\u6216Kotlin\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"queries.forList"),"\u8868\u793a\u57fa\u4e8e\u4e2d\u95f4\u8868\u521b\u5efa\u67e5\u8be2\uff0c\u800c\u975e\u57fa\u4e8e\u5b9e\u4f53\u8868\u3002"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u8fd9\u91cc\u7684Java\u4ee3\u7801\u793a\u8303\u4e3a\u4e86\u517c\u5bb9Java8\uff0c\u7b2c\u4e00\u884c\u7684\u53d8\u91cf",(0,r.kt)("inlineCode",{parentName:"p"},"association"),"\u7684\u7c7b\u578b\u6bd4\u8f83\u590d\u6742\u3002\u5efa\u8bae\u63d0\u9ad8Java\u7684\u7248\u672c\uff0c\u91c7\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"var"),"\u5173\u952e\u5b57\u3002")),(0,r.kt)("p",null,"\u751f\u6210\u7684SQL\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    tb_1_.BOOK_ID, \n    tb_1_.AUTHOR_ID \n/* highlight-next-line */\nfrom BOOK_AUTHOR_MAPPING as tb_1_\nwhere tb_1_.BOOK_ID = ? /* 3 */\n")),(0,r.kt)("p",null,"\u679c\u7136\uff0c\u8fd9\u662f\u4e00\u4e2a\u57fa\u4e8e\u4e2d\u95f4\u8868\u7684\u67e5\u8be2\u3002"),(0,r.kt)("p",null,"\u6700\u7ec8\u6253\u5370\u7ed3\u679c\u5982\u4e0b\uff08\u539f\u8f93\u51fa\u662f\u7d27\u51d1\u7684\uff0c\u4e3a\u4e86\u65b9\u4fbf\u9605\u8bfb\uff0c\u8fd9\u91cc\u8fdb\u884c\u4e86\u683c\u5f0f\u5316\uff09:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Association{\n    source={\n        "id":3\n    }, target={\n        "id":1\n    }\n}\nAssociation{\n    source={\n        "id":3\n    }, \n    target={\n        "id":2\n    }\n}\n')),(0,r.kt)("p",null,"\u8fd4\u56de\u6570\u636e\u662f\u4e00\u7cfb\u5217Association\u5bf9\u8c61"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"package org.babyfish.jimmer.sql.association;\n\npublic class Association<S, T> {\n\n    public Association(S source, T target) {\n        this.source = source;\n        this.target = target;\n    }\n\n    public S source() {\n        return source;\n    }\n\n    public T target() {\n        return target;\n    }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Association<S, T>"),"\u8868\u793a\u4ece",(0,r.kt)("inlineCode",{parentName:"p"},"S"),"\u7c7b\u578b\u6307\u5411",(0,r.kt)("inlineCode",{parentName:"p"},"T"),"\u7c7b\u578b\u5173\u8054\u7684\u4e2d\u95f4\u8868\u5b9e\u4f53\u3002\u4e2d\u95f4\u8868\u5b9e\u4f53\u662f\u4f2a\u5b9e\u4f53\uff0c\u6ca1\u6709id\u3002\u5b83\u53ea\u6709\u4e24\u4e2a\u5c5e\u6027:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"source"),": \u4e2d\u95f4\u8868\u6307\u5411\u5df1\u65b9\u7684\u5916\u952e\u6240\u5bf9\u5e94\u7684\u5bf9\u8c61(\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u5c31\u662f",(0,r.kt)("inlineCode",{parentName:"li"},"Book"),"\u5bf9\u8c61)\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"target"),": \u4e2d\u95f4\u8868\u6307\u5411\u5bf9\u65b9\u7684\u5916\u952e\u6240\u5bf9\u5e94\u7684\u5bf9\u8c61(\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u5c31\u662f",(0,r.kt)("inlineCode",{parentName:"li"},"Author"),"\u5bf9\u8c61)\u3002")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u5e76\u672a\u4f7f\u7528\u5bf9\u8c61\u6293\u53d6\u5668\u5b9a\u4e49Association\u7684\u5bf9\u8c61\u683c\u5f0f\uff08\u4e8b\u5b9e\u4e0aAssociation\u4e5f\u4e0d\u652f\u6301\u5bf9\u8c61\u6293\u53d6\u5668\uff09\uff0c\u56e0\u6b64\u5bf9\u8c61\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"source"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"targate"),"\u5173\u8054\u5c5e\u6027\u4ec5\u5305\u542b\u5bf9\u8c61id\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Author"),"\u4e5f\u6709\u4e00\u4e2a\u4ece\u52a8\u7684\u591a\u5bf9\u591a\u5173\u8054",(0,r.kt)("inlineCode",{parentName:"p"},"Author.books"),", \u5b83\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"Book.authors"),"\u7684\u955c\u50cf\u3002"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Entity\npublic interface Author {\n\n    // highlight-next-line\n    @ManyToMany(mappedBy = "authors")\n    List<Book> books();\n\n    ...\n}\n'))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Entity\ninterface Author {\n\n    // highlight-next-line\n    @ManyToMany(mappedBy = "authors")\n    val books: List<Book>\n\n    ...\n}\n')))),(0,r.kt)("p",{parentName:"li"},"\u57fa\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"Author.books"),"\u4e5f\u53ef\u4ee5\u521b\u5efa\u4e2d\u95f4\u8868\u67e5\u8be2\uff0c\u4f46\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"source"),"\u4ee3\u8868Author\uff0c\u800c",(0,r.kt)("inlineCode",{parentName:"p"},"target"),"\u4ee3\u8868Book\u3002\u548c\u5f53\u524d\u4f8b\u5b50\u76f8\u53cd\u3002")))),(0,r.kt)("p",null,"\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u53ea\u67e5\u8be2\u4e86\u4e2d\u95f4\u8868\u672c\u8eab\u3002\u6240\u4ee5\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"source"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"target"),"\u5bf9\u8c61\u4e2d\u53ea\u6709id\u3002"),(0,r.kt)("p",null,"\u8981\u83b7\u83b7\u53d6\u5b8c\u6574\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"source"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"target"),"\u5bf9\u8c61\uff0c\u53ef\u4ee5\u8868\u8fde\u63a5\uff0c\u7136\u540e\u5229\u7528\u5143\u7ec4\u8fdb\u884c\u8fd4\u56de\u3002"),(0,r.kt)("p",null,"\u4ee3\u7801\u5982\u4e0b"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"AssociationTable<Book, BookTableEx, Author, AuthorTableEx> association =\n    AssociationTable.of(BookTableEx.class, BookTableEx::authors);\n\nList<Tuple2<Book, Author>> tuples =\n    sqlClient\n        .createAssociationQuery(association)\n        .where(association.source().id().eq(3L))\n        // highlight-next-line\n        .select(\n            association.source(),\n            association.target()\n        )\n        .execute();\ntuples.forEach(System.out::println);\n"))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val associations = sqlClient\n    .queries\n    .forList(Book::authors) {\n        where(table.source.id eq 3L)\n        // highlight-next-line\n        select(\n            table.source,\n            table.target\n        )\n    }\n    .execute()\nassociations.forEach(::println)\n")))),(0,r.kt)("p",null,"\u751f\u6210\u7684SQL\u5982\u4e0b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select \n\n    /* source() */\n    tb_1_.BOOK_ID, \n    tb_2_.NAME, \n    tb_2_.EDITION, \n    tb_2_.PRICE, \n    tb_2_.STORE_ID, \n\n    /* target() */\n    tb_1_.AUTHOR_ID, \n    tb_3_.FIRST_NAME, \n    tb_3_.LAST_NAME, \n    tb_3_.GENDER\n\nfrom BOOK_AUTHOR_MAPPING as tb_1_ \ninner join BOOK as tb_2_ \n    on tb_1_.BOOK_ID = tb_2_.ID \ninner join AUTHOR as tb_3_ \n    on tb_1_.AUTHOR_ID = tb_3_.ID \nwhere tb_1_.BOOK_ID = ? /* 3 */\n")),(0,r.kt)("p",null,"\u6700\u7ec8\u6253\u5370\u7ed3\u679c\u5982\u4e0b\uff08\u539f\u8f93\u51fa\u662f\u7d27\u51d1\u7684\uff0c\u4e3a\u4e86\u65b9\u4fbf\u9605\u8bfb\uff0c\u8fd9\u91cc\u8fdb\u884c\u4e86\u683c\u5f0f\u5316\uff09:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Tuple2{\n    _1={\n        "id":3,\n        "name":"Learning GraphQL",\n        "edition":3,\n        "price":51.00,\n        "store":{\n            "id":1\n        }\n    }, \n    _2={\n        "id":1,\n        "firstName":"Alex",\n        "lastName":"Banks",\n        "gender":"MALE"\n    }\n}\nTuple2{\n    _1={\n        "id":3,\n        "name":"Learning GraphQL",\n        "edition":3,\n        "price":51.00,\n        "store":{\n            "id":1\n        }\n    }, \n    _2={\n        "id":2,\n        "firstName":"Eve",\n        "lastName":"Procello",\n        "gender":"MALE"\n    }\n}\n')),(0,r.kt)("p",null,":::cuation\n\u5173\u8054\u5bf9\u8c61",(0,r.kt)("inlineCode",{parentName:"p"},"Association<S, T>"),"\u5f88\u7b80\u5355\u4e5f\u5f88\u7279\u6b8a\uff0c\u4e0d\u652f\u6301\u4e5f\u4e0d\u9700\u8981",(0,r.kt)("a",{parentName:"p",href:"./object-fetcher"},"\u5bf9\u8c61\u6293\u53d6\u5668"),"\u3002"),(0,r.kt)("p",null,"\u6ce8\u610f\uff0c\u8fd9\u91cc\u4ec5\u6307",(0,r.kt)("inlineCode",{parentName:"p"},"Association<S, T>"),"\u5bf9\u8c61",(0,r.kt)("b",null,"\u672c\u8eab"),"\u4e0d\u652f\u6301\uff0c\u5176\u5173\u8054\u5c5e\u6027",(0,r.kt)("inlineCode",{parentName:"p"},"source"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"target"),"\u4ecd\u7136\u652f\u6301",(0,r.kt)("a",{parentName:"p",href:"./object-fetcher"},"\u5bf9\u8c61\u6293\u53d6\u5668"),"\uff0c\u5982\uff1a"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"select(\n    table\n        .source\n        // highlight-next-line\n        .fetchBy {\n            allScalarFields()\n            store { \n                allScalarFields()\n            }\n        },\n    table.target\n)\n")))),(0,r.kt)("p",null,":::"),(0,r.kt)("h2",{id:"\u548c\u975e\u4e2d\u95f4\u8868\u67e5\u8be2\u7684\u5bf9\u6bd4"},"\u548c\u975e\u4e2d\u95f4\u8868\u67e5\u8be2\u7684\u5bf9\u6bd4"),(0,r.kt)("p",null,"\u8bfb\u8005\u53ef\u80fd\u4f1a\u8ba4\u4e3a\uff0c\u57fa\u4e8e\u4e2d\u95f4\u8868\u67e5\u8be2\u7684\u67e5\u8be2\u5b58\u5728\u7684\u4ef7\u503c\uff0c\u662f\u4e3a\u4e86\u8ba9\u5f00\u53d1\u4eba\u5458\u5199\u51fa\u6027\u80fd\u66f4\u9ad8\u7684\u67e5\u8be2\u3002"),(0,r.kt)("p",null,"\u4f46\u5176\u5b9e\u4e0d\u662f\u8fd9\u6837\u7684\u3002\u7531\u4e8e",(0,r.kt)("a",{parentName:"p",href:"./dynamic-join/optimization#%E5%B9%BB%E8%BF%9E%E6%8E%A5"},"\u5e7b\u8fde\u63a5"),"\u548c",(0,r.kt)("a",{parentName:"p",href:"./dynamic-join/optimization#%E5%8D%8A%E8%BF%9E%E6%8E%A5"},"\u534a\u8fde\u63a5"),"\u8fd9\u4e24\u4e2a\u4f18\u5316\u624b\u6bb5\u7684\u5b58\u5728\uff0c\u65e0\u8bba\u662f\u5426\u4f7f\u7528\u57fa\u4e8e\u4e2d\u95f4\u8868\u7684\u67e5\u8be2\uff0c\u90fd\u80fd\u8fbe\u5230\u5f88\u597d\u7684\u6027\u80fd\u3002\u662f\u5426\u9009\u62e9\u4f7f\u7528\u57fa\u4e8e\u4e2d\u95f4\u8868\u7684\u67e5\u8be2\uff0c\u5b8c\u5168\u770b\u7528\u6237\u81ea\u5df1\u559c\u597d\u3002"),(0,r.kt)("h3",{id:"1-\u57fa\u4e8e\u4e2d\u95f4\u8868\u5b50\u67e5\u8be2\u5b9e\u73b0\u4e00\u4e2a\u529f\u80fd"},"1. \u57fa\u4e8e\u4e2d\u95f4\u8868\u5b50\u67e5\u8be2\u5b9e\u73b0\u4e00\u4e2a\u529f\u80fd"),(0,r.kt)("p",null,"\u4e4b\u524d\u7684\u4ee3\u7801\uff0c\u6211\u4eec\u6f14\u793a\u57fa\u4e8e\u4e2d\u95f4\u8868\u7684\u9876\u7ea7\u67e5\u8be2\uff1b\u800c\u8fd9\u4e2a\u4f8b\u5b50\u6f14\u793a\u57fa\u4e8e\u4e2d\u95f4\u8868\u7684\u5b50\u67e5\u8be2\u3002"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'BookTable table = BookTable.$;\nAssociationTable<Book, BookTableEx, Author, AuthorTableEx> association =\n    AssociationTable.of(BookTableEx.class, BookTableEx::authors);\n\nList<Book> books = sqlClient\n    .createQuery(table)\n    .where(\n        table.id().in(\n            // highlight-next-line\n            sqlClient\n                .createAssociationSubQuery(association)\n                .where(\n                    association\n                        .target() \u2776\n                        .firstName().eq("Alex")\n                )\n                .select(\n                    association\n                        .source() \u2777\n                        .id()\n                )\n        )\n    )\n    .select(table)\n    .execute();\n'))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val books = sqlClient\n    .createQuery(Book::class) {\n        where(\n            table.id valueIn\n                // highlight-next-line\n                subQueries.forList(Book::authors) {\n                    where(\n                        table\n                        .target \u2776\n                        .firstName eq "Alex"\n                    )\n                    select(\n                        table\n                        .source \u2777\n                        .id\n                    )\n                }\n        )\n        select(table)\n    }\n    .execute()\n')))),(0,r.kt)("p",null,"\u5176\u4e2d"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Java\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"createAssociationSubQuery"),"\u548cKotlin\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"subQueries.forList"),"\u7528\u4e8e\u521b\u5efa\u4e00\u4e2a\u57fa\u4e8e\u4e2d\u95f4\u8868\u7684\u5b50\u67e5\u8be2\u3002\u8be5\u67e5\u8be2\u7528\u6237\u5bfb\u627e\u6240\u6709\u5305\u542b",(0,r.kt)("inlineCode",{parentName:"p"},"firstName"),'\u4e3a"Alex"\u7684\u4f5c\u8005\u7684\u4e66\u7c4d\u3002')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u2776\u5904",(0,r.kt)("inlineCode",{parentName:"p"},"association.target"),"\u662f\u771f\u6b63\u7684\u8868\u8fde\u63a5\uff0c\u4f1a\u751f\u6210SQL JOIN\u8fde\u63a5",(0,r.kt)("inlineCode",{parentName:"p"},"AUTHOR"),"\u8868\u8fdb\u884c\u6761\u4ef6\u5224\u65ad\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u2777\u5904",(0,r.kt)("inlineCode",{parentName:"p"},"association.source"),"\u662f\u7531\u4e8e",(0,r.kt)("a",{parentName:"p",href:"./dynamic-join/optimization#%E5%B9%BB%E8%BF%9E%E6%8E%A5"},"\u5e7b\u8fde\u63a5"),"\uff0c\u5e76\u4e0d\u4f1a\u751f\u6210SQL join\u3002"))),(0,r.kt)("p",null,"\u6700\u7ec8\u751f\u6210\u7684SQL\u5982\u4e0b: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    tb_1_.ID, \n    tb_1_.NAME, \n    tb_1_.EDITION, \n    tb_1_.PRICE, \n    tb_1_.STORE_ID \nfrom BOOK as tb_1_ \nwhere \n    tb_1_.ID in (\n        /* highlight-next-line */\n        select \n            tb_2_.BOOK_ID \n        from BOOK_AUTHOR_MAPPING as tb_2_ \n        inner join AUTHOR as tb_3_ \n            on tb_2_.AUTHOR_ID = tb_3_.ID \n        where tb_3_.FIRST_NAME = ?\n    )\n")),(0,r.kt)("h3",{id:"2-\u4e0d\u57fa\u4e8e\u4e2d\u95f4\u8868\u5b50\u67e5\u8be2\u5b9e\u73b0\u540c\u6837\u7684\u529f\u80fd"},"2. \u4e0d\u57fa\u4e8e\u4e2d\u95f4\u8868\u5b50\u67e5\u8be2\u5b9e\u73b0\u540c\u6837\u7684\u529f\u80fd"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'BookTable book = BookTable.$;\nAuthorTableEx author = AuthorTableEx.$;\n\nList<Book> books = sqlClient\n    .createQuery(book)\n    .where(\n        book.id().in(sqlClient\n            // highlight-next-line\n            .createSubQuery(author)\n            .where(author.firstName().eq("Alex"))\n            .select(\n                author.books().id() \u2776\n            )\n        )\n    )\n    .select(book)\n    .execute();\n'))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val books = sqlClient\n    .createQuery(Book::class) {\n        where(\n            table.id valueIn\n                // highlight-next-line\n                subQuery(Author::class) {\n                    where(table.firstName eq "Alex")\n                    select(\n                        table.books.id \u2776\n                    )\n                }\n        )\n        select(table)\n    }\n    .execute()\n')))),(0,r.kt)("p",null,"\u2776\u5904",(0,r.kt)("inlineCode",{parentName:"p"},"author.books"),"\u662f",(0,r.kt)("a",{parentName:"p",href:"./dynamic-join/optimization#%E5%8D%8A%E8%BF%9E%E6%8E%A5"},"\u534a\u8fde\u63a5"),"\uff0c\u6240\u4ee5\u4ec5\u4ec5\u751f\u6210\u4ece\u8868",(0,r.kt)("inlineCode",{parentName:"p"},"AUTHOR"),"\u5230\u4e2d\u95f4\u8868",(0,r.kt)("inlineCode",{parentName:"p"},"BOOK_AUTHOR_MAPPING"),"\u7684SQL JOIN\uff0c\u800c\u4e0d\u4f1a\u8fdb\u4e00\u6b65SQL JOIN\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"BOOK\u8868"),"\u3002"),(0,r.kt)("p",null,"\u6700\u7ec8\u751f\u6210\u7684SQL\u5982\u4e0b: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select \n\n    tb_1_.ID, \n    tb_1_.NAME, \n    tb_1_.EDITION, \n    tb_1_.PRICE, \n    tb_1_.STORE_ID \n\nfrom BOOK as tb_1_ \nwhere \n    tb_1_.ID in (\n        /* highlight-next-line */\n        select \n            tb_3_.BOOK_ID \n        from AUTHOR as tb_2_ \n        inner join BOOK_AUTHOR_MAPPING as tb_3_ \n            on tb_2_.ID = tb_3_.AUTHOR_ID \n        where tb_2_.FIRST_NAME = ?\n    )\n")),(0,r.kt)("p",null,"\u5bf9\u6bd4\u8fd9\u4e24\u4e2aSQL\uff0c\u4e0d\u96be\u53d1\u73b0\uff0c\u5b83\u4eec\u529f\u80fd\u4e00\u6837\uff0c\u6027\u80fd\u4e00\u6837\u3002"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u57fa\u4e8e\u4e2d\u95f4\u8868\u7684\u67e5\u8be2\uff0c\u53ea\u662f\u4e3a\u5f00\u53d1\u4eba\u5458\u591a\u63d0\u4f9b\u4e00\u79cd\u4ee3\u7801\u4e66\u5199\u98ce\u683c\uff0c\u5e76\u4e0d\u5177\u5907\u4e0d\u53ef\u53d6\u4ee3\u6027\uff0c\u7528\u5176\u4ed6\u624b\u6bb5\u4e5f\u53ef\u4ee5\u5b9e\u73b0\u529f\u80fd\u548c\u6027\u80fd\u5f62\u540c\u7684\u67e5\u8be2\u3002")))}b.isMDXComponent=!0}}]);