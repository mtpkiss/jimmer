"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[7769],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return c}});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var d=a.createContext({}),u=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return a.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(t),c=l,k=m["".concat(d,".").concat(c)]||m[c]||p[c]||r;return t?a.createElement(k,i(i({ref:n},s),{},{components:t})):a.createElement(k,i({ref:n},s))}));function c(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=m;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},85162:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(67294),l=t(34334),r="tabItem_Ymn6";function i(e){var n=e.children,t=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:t},n)}},65488:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(83117),l=t(67294),r=t(34334),i=t(72389),o=t(67392),d=t(7094),u=t(12466),s="tabList__CuJ",p="tabItem_LNqP";function m(e){var n,t,i=e.lazy,m=e.block,c=e.defaultValue,k=e.values,N=e.groupId,f=e.className,g=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=k?k:g.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),v=(0,o.l)(b,(function(e,n){return e.value===n.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===c?c:null!=(n=null!=c?c:null==(t=g.find((function(e){return e.props.default})))?void 0:t.props.value)?n:g[0].props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,d.U)(),T=h.tabGroupChoices,E=h.setTabGroupChoices,x=(0,l.useState)(y),I=x[0],B=x[1],_=[],j=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=N){var q=T[N];null!=q&&q!==I&&b.some((function(e){return e.value===q}))&&B(q)}var C=function(e){var n=e.currentTarget,t=_.indexOf(n),a=b[t].value;a!==I&&(j(n),B(a),null!=N&&E(N,String(a)))},M=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a,l=_.indexOf(e.currentTarget)+1;t=null!=(a=_[l])?a:_[0];break;case"ArrowLeft":var r,i=_.indexOf(e.currentTarget)-1;t=null!=(r=_[i])?r:_[_.length-1]}null==(n=t)||n.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",s)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":m},f)},b.map((function(e){var n=e.value,t=e.label,i=e.attributes;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:I===n?0:-1,"aria-selected":I===n,key:n,ref:function(e){return _.push(e)},onKeyDown:M,onFocus:C,onClick:C},i,{className:(0,r.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":I===n})}),null!=t?t:n)}))),i?(0,l.cloneElement)(g.filter((function(e){return e.props.value===I}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},g.map((function(e,n){return(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==I})}))))}function c(e){var n=(0,i.Z)();return l.createElement(m,(0,a.Z)({key:String(n)},e))}},49714:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return s},default:function(){return N},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return c}});var a=t(83117),l=t(80102),r=(t(67294),t(3905)),i=t(65488),o=t(85162),d=["components"],u={sidebar_position:5,title:"\u7b80\u5355\u67e5\u8be2"},s=void 0,p={unversionedId:"jimmer-sql/query/find",id:"jimmer-sql/query/find",title:"\u7b80\u5355\u67e5\u8be2",description:"\u4e4b\u524d\u8ba8\u8bba\u8fc7\u7684\u67e5\u8be2DSL\u53ef\u4ee5\u5e94\u5bf9\u8db3\u591f\u590d\u6742\u7684\u60c5\u51b5\uff0c\u7136\u800c\u5b9e\u9645\u9879\u76ee\u4e2d\u6709\u5f88\u591a\u67e5\u8be2\u662f\u7b80\u5355\u7684\u67e5\u8be2\u3002\u4e3a\u6b64\uff0cJimmer\u5bf9\u7b80\u5355\u67e5\u8be2\u63d0\u4f9b\u4e86API\u652f\u6301\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/jimmer-sql/query/find.mdx",sourceDirName:"jimmer-sql/query",slug:"/jimmer-sql/query/find",permalink:"/jimmer/zh/docs/jimmer-sql/query/find",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/jimmer-sql/query/find.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"\u7b80\u5355\u67e5\u8be2"},sidebar:"tutorialSidebar",previous:{title:"\u5bf9\u8c61\u6293\u53d6\u5668",permalink:"/jimmer/zh/docs/jimmer-sql/query/fetcher"},next:{title:"\u67e5\u8be2\u4e2d\u95f4\u8868",permalink:"/jimmer/zh/docs/jimmer-sql/query/association"}},m={},c=[{value:"findAll",id:"findall",level:2},{value:"\u6309\u7c7b\u578b\u67e5\u8be2",id:"\u6309\u7c7b\u578b\u67e5\u8be2",level:3},{value:"\u6309\u5bf9\u8c61\u6293\u53d6\u5668\u67e5\u8be2",id:"\u6309\u5bf9\u8c61\u6293\u53d6\u5668\u67e5\u8be2",level:3},{value:"findById",id:"findbyid",level:2},{value:"\u6309\u7c7b\u578b\u67e5\u8be2",id:"\u6309\u7c7b\u578b\u67e5\u8be2-1",level:3},{value:"\u6309\u5bf9\u8c61\u6293\u53d6\u5668\u67e5\u8be2",id:"\u6309\u5bf9\u8c61\u6293\u53d6\u5668\u67e5\u8be2-1",level:3},{value:"findByExample",id:"findbyexample",level:2},{value:"\u7b80\u5355QBE",id:"\u7b80\u5355qbe",level:3},{value:"\u4f7f\u7528\u6a21\u7cca\u5339\u914d",id:"\u4f7f\u7528\u6a21\u7cca\u5339\u914d",level:3},{value:"\u4f7f\u7528\u5bf9\u8c61\u6293\u53d6\u5668",id:"\u4f7f\u7528\u5bf9\u8c61\u6293\u53d6\u5668",level:3}],k={toc:c};function N(e){var n=e.components,t=(0,l.Z)(e,d);return(0,r.kt)("wrapper",(0,a.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u4e4b\u524d\u8ba8\u8bba\u8fc7\u7684\u67e5\u8be2DSL\u53ef\u4ee5\u5e94\u5bf9\u8db3\u591f\u590d\u6742\u7684\u60c5\u51b5\uff0c\u7136\u800c\u5b9e\u9645\u9879\u76ee\u4e2d\u6709\u5f88\u591a\u67e5\u8be2\u662f\u7b80\u5355\u7684\u67e5\u8be2\u3002\u4e3a\u6b64\uff0cJimmer\u5bf9\u7b80\u5355\u67e5\u8be2\u63d0\u4f9b\u4e86API\u652f\u6301\u3002"),(0,r.kt)("p",null,"\u672c\u6587\u8ba8\u8bba\u4e09\u4e2a\u8bdd\u9898"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"findAll"),(0,r.kt)("li",{parentName:"ol"},"findById"),(0,r.kt)("li",{parentName:"ol"},"findByExample")),(0,r.kt)("h2",{id:"findall"},"findAll"),(0,r.kt)("h3",{id:"\u6309\u7c7b\u578b\u67e5\u8be2"},"\u6309\u7c7b\u578b\u67e5\u8be2"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"List<Book> books = sqlClient.getEntities()\n    .findAll(\n        \n        // \u67e5\u8be2Book\n        Book.class,\n\n        // \u53ef\u9009\u53d8\u53c2\uff0c\u6392\u5e8f\u65b9\u5f0f\n        BookProps.NAME,\n        BookProps.EDITION.desc()\n    );\n"))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val books = sqlClient.entities\n    .findAll(Book::class) {\n        asc(Book::name)\n        desc(Book::edition)\n    }\n")))),(0,r.kt)("h3",{id:"\u6309\u5bf9\u8c61\u6293\u53d6\u5668\u67e5\u8be2"},"\u6309\u5bf9\u8c61\u6293\u53d6\u5668\u67e5\u8be2"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"List<Book> books = sqlClient.getEntities()\n    .findAll(\n        \n        // highlight-next-line\n        BookFetcher.$\n            .allScalarFields()\n            .store(\n                BookStoreFetcher.$.allScalarFields()\n            )\n            .authors(\n                AuthorFetcher.$.allScalarFields()\n            ),\n\n        BookProps.NAME,\n        BookProps.EDITION.desc()\n    );\n"))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val books = sqlClient.entities\n    .findAll(\n        // highlight-next-line\n        newFetcher(Book::class).by { \n            allScalarFields()\n            store { \n                allScalarFields()\n            }\n            authors { \n                allScalarFields()\n            }\n        }\n    ) {\n        asc(Book::name)\n        desc(Book::edition)\n    }\n")))),(0,r.kt)("h2",{id:"findbyid"},"findById"),(0,r.kt)("p",null,"Jimmer\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"sqlClient.entities"),"\u63d0\u4f9b\u5982\u4e0b\u516d\u4e2a\u65b9\u6cd5\u7528\u4e8e\u6309id\u67e5\u8be2\u5bf9\u8c61"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u51fd\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u65701"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u65702"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"findById"),(0,r.kt)("td",{parentName:"tr",align:null},"Class\u6216KClass"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5355\u4e2aid"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5355\u4e2a\u5bf9\u8c61\u6216null"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6309\u7167id\u67e5\u8be2\u4e00\u4e2a\u7b80\u5355\u5bf9\u8c61\uff1b\u6ca1\u5339\u914d\u6570\u636e\u65f6\u8fd4\u56denull")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"findById"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5bf9\u8c61\u6293\u53d6\u5668"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5355\u4e2aid"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5355\u4e2a\u5bf9\u8c61\u6216null"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6309\u7167id\u67e5\u8be2\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5176\u683c\u5f0f\u7531\u5bf9\u8c61\u6293\u53d6\u5668\u6307\u5b9a\uff1b\u6ca1\u5339\u914d\u6570\u636e\u65f6\u8fd4\u56denull")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"findByIds"),(0,r.kt)("td",{parentName:"tr",align:null},"Class\u6216KClass"),(0,r.kt)("td",{parentName:"tr",align:null},"id\u96c6\u5408"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5bf9\u8c61\u96c6\u5408"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6309\u7167id\u96c6\u5408\u67e5\u8be2\u4e00\u6279\u7b80\u5355\u5bf9\u8c61\uff1b\u7531\u4e8e\u67d0\u4e9b\u6570\u636e\u53ef\u80fd\u65e0\u6cd5\u5339\u914d\uff0c\u8fd4\u56de\u7684\u5bf9\u8c61\u5217\u8868\u7684\u957f\u5ea6\u53ef\u80fd\u6bd4\u4f20\u5165\u7684id\u96c6\u5408\u957f\u5ea6\u5c0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"findByIds"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5bf9\u8c61\u6293\u53d6\u5668"),(0,r.kt)("td",{parentName:"tr",align:null},"id\u96c6\u5408"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5bf9\u8c61\u96c6\u5408"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6309\u7167id\u96c6\u5408\u67e5\u8be2\u4e00\u6279\u5bf9\u8c61\uff0c\u5176\u683c\u5f0f\u7531\u5bf9\u8c61\u6293\u53d6\u5668\u6307\u5b9a\uff1b\u7531\u4e8e\u67d0\u4e9b\u6570\u636e\u53ef\u80fd\u65e0\u6cd5\u5339\u914d\uff0c\u8fd4\u56de\u7684\u5bf9\u8c61\u5217\u8868\u7684\u957f\u5ea6\u53ef\u80fd\u6bd4\u4f20\u5165\u7684id\u96c6\u5408\u957f\u5ea6\u5c0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"findMapByIds"),(0,r.kt)("td",{parentName:"tr",align:null},"Class\u6216KClass"),(0,r.kt)("td",{parentName:"tr",align:null},"id\u96c6\u5408"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7531id\u548c\u5bf9\u8c61\u7ec4\u6210\u7684\u6709\u5e8fMap"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e00\u4e2aMap\uff0c\u952e\u4e3aid\uff0c\u503c\u4e3a\u7b80\u5355\u5bf9\u8c61\uff0c\u6b64Map\u4e0d\u4f1a\u6539\u53d8\u4f20\u5165id\u96c6\u5408\u7684\u987a\u5e8f\uff1b\u7531\u4e8e\u67d0\u4e9b\u6570\u636e\u53ef\u80fd\u65e0\u6cd5\u5339\u914d\uff0c\u8fd4\u56de\u7684Map\u7684\u957f\u5ea6\u53ef\u80fd\u6bd4\u4f20\u5165\u7684id\u96c6\u5408\u957f\u5ea6\u5c0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"findMapByIds"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5bf9\u8c61\u6293\u53d6\u5668"),(0,r.kt)("td",{parentName:"tr",align:null},"id\u96c6\u5408"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7531id\u548c\u5bf9\u8c61\u7ec4\u6210\u7684\u6709\u5e8fMap"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e00\u4e2aMap\uff0c\u952e\u4e3aid\uff0c\u503c\u4e3a\u5bf9\u8c61\uff0c\u503c\u7684\u683c\u5f0f\u7531\u5bf9\u8c61\u6293\u53d6\u5668\u6307\u5b9a\uff0c\u6b64Map\u4e0d\u4f1a\u6539\u53d8\u4f20\u5165id\u96c6\u5408\u7684\u987a\u5e8f\uff1b\u7531\u4e8e\u67d0\u4e9b\u6570\u636e\u53ef\u80fd\u65e0\u6cd5\u5339\u914d\uff0c\u8fd4\u56de\u7684Map\u7684\u957f\u5ea6\u53ef\u80fd\u6bd4\u4f20\u5165\u7684id\u96c6\u5408\u957f\u5ea6\u5c0f")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u8fd9\u4e9b\u6309\u7167id\u67e5\u8be2\u6570\u636e\u7684API\u4f1a\u5229\u7528",(0,r.kt)("a",{parentName:"p",href:"../advanced/cache"},"\u5916\u90e8\u7f13\u5b58"))),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u4ee5",(0,r.kt)("inlineCode",{parentName:"p"},"findMapByIds"),"\u4e3a\u4f8b"),(0,r.kt)("h3",{id:"\u6309\u7c7b\u578b\u67e5\u8be2-1"},"\u6309\u7c7b\u578b\u67e5\u8be2"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Map<Long, Book> bookMap = sqlClient.getEntities()\n    .findMapByIds(\n        Book.class,\n        Arrays.asList(2L, 3L, 4L)\n    );\n"))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val bookMap = sqlClient.entities\n    .findMapByIds(\n        Book::class,\n        listOf(2L, 3L, 4L)\n    )\n")))),(0,r.kt)("h3",{id:"\u6309\u5bf9\u8c61\u6293\u53d6\u5668\u67e5\u8be2-1"},"\u6309\u5bf9\u8c61\u6293\u53d6\u5668\u67e5\u8be2"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Map<Long, Book> bookMap = sqlClient.getEntities()\n    .findMapByIds(\n        BookFetcher.$\n            .allScalarFields()\n            .store(\n                BookStoreFetcher.$.allScalarFields()\n            )\n            .authors(\n                AuthorFetcher.$.allScalarFields()\n            ),\n        Arrays.asList(2L, 3L, 4L)\n    );\n"))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val bookMap = sqlClient.entities\n    .findMapByIds(\n        newFetcher(Book::class).by {\n            allScalarFields()\n            store {\n                allScalarFields()\n            }\n            authors {\n                allScalarFields()\n            }\n        },\n        listOf(2L, 3L, 4L)\n    )\n")))),(0,r.kt)("h2",{id:"findbyexample"},"findByExample"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"findByExample"),"\u5b9e\u73b0\u4e86QBE(Query By Example)\u67e5\u8be2\u3002"),(0,r.kt)("p",null,"\u6240\u8c13QBE\u67e5\u8be2\uff0c\u5c31\u662f\u7528\u6237\u4f20\u5165\u4e00\u4e2a\u6837\u677f\u5bf9\u8c61\uff0cORM\u67e5\u8be2\u4e0e\u4e4b\u76f8\u4f3c\u7684\u5bf9\u8c61\u3002"),(0,r.kt)("p",null,"\u7531\u4e8eJimmer\u5bf9\u8c61\u662f\u52a8\u6001\u7684\uff0c\u6240\u4ee5Jimmer\u7684QBE\u67e5\u8be2\u975e\u5e38\u7075\u6d3b\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u6837\u677f\u5bf9\u8c61\u7684\u67d0\u4e9b\u5c5e\u6027\u7f3a\u5931\uff0c\u672a\u88ab\u6307\u5b9a\u7684\u5c5e\u6027",(0,r.kt)("strong",{parentName:"li"},"\u4e0d"),"\u4f1a\u7528\u4e8e\u751f\u6210SQL\u8fc7\u6ee4\u6761\u4ef6"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u6837\u677f\u5bf9\u8c61\u67d0\u5c5e\u6027\u4e3a\u6307\u5b9a\u4e3anull\uff0c\u4f1a\u751f\u6210SQL\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"IS NULL"),"\u8fc7\u6ee4\u6761\u4ef6"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u6837\u677f\u5bf9\u8c61\u67d0\u5c5e\u6027\u4e3a\u6307\u5b9a\u4e3a\u975enull\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4f1a\u751f\u6210SQL\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"="),"\u8fc7\u6ee4\u6761\u4ef6",(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u5bf9\u4e8e\u6307\u5b9a\u4e3a\u975enull\u7684\u5b57\u7b26\u4e32\u5c5e\u6027\uff0c\u7528\u6237\u53ef\u4ee5\u5c06\u901a\u8fc7\u914d\u7f6e\u6539\u4e3a\u6a21\u7cca\u8fc7\u6ee4\u6761\u4ef6\uff0c\u8fd9\u5c06\u5728\u540e\u6587\u4e2d\u4ecb\u7ecd\u3002")))),(0,r.kt)("h3",{id:"\u7b80\u5355qbe"},"\u7b80\u5355QBE"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'TreeNode treeNode = TreeNodeDraft.$.produce(draft -> {\n    draft.setParent(null);\n    draft.setName("Hello");\n});\nList<TreeNode> treeNodes = sqlClient.getEntities()\n    .findByExample(\n            // highlight-next-line\n            Example.of(treeNode),\n            TreeNodeProps.NAME.asc()\n    );\n'))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val treeNode = new(TreeNode::class).by { \n    parent = null\n    name = "Hello"\n}\nval treeNodes = sqlClient.entities\n    .findByExample(\n        example(treeNode)\n    ) {\n        asc(TreeNode::name)\n    }\n')))),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"\u6837\u677f\u5bf9\u8c61\u53ea\u5141\u8bb8\u6307\u5b9a\u57fa\u4e8e\u7b80\u5355\u5217\u6216\u5916\u952e\u7684\u5c5e\u6027\uff0c\u5426\u5219\u4f1a\u5bfc\u81f4\u5f02\u5e38")),(0,r.kt)("p",null,"\u6700\u7ec8\u6210\u7684SQL\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    tb_1_.NODE_ID, \n    tb_1_.NAME, \n    tb_1_.PARENT_ID \nfrom TREE_NODE as tb_1_ \nwhere\n    /* highlight-next-line */\n    tb_1_.NAME = ? \nand \n    /* highlight-next-line */\n    tb_1_.PARENT_ID is null \norder by tb_1_.NAME asc\n")),(0,r.kt)("h3",{id:"\u4f7f\u7528\u6a21\u7cca\u5339\u914d"},"\u4f7f\u7528\u6a21\u7cca\u5339\u914d"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6837\u677f\u5bf9\u8c61\u7684\u975enull\u5c5e\u6027\u5c06\u4f1a\u751f\u6210",(0,r.kt)("inlineCode",{parentName:"p"},"="),"\uff0c\u7136\u800c\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u6765\u6539\u53d8\u8fd9\u79cd\u9ed8\u8ba4\u884c\u4e3a\u3002"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'TreeNode treeNode = TreeNodeDraft.$.produce(draft -> {\n    draft.setParent(null);\n    draft.setName("Hello");\n});\nList<TreeNode> treeNodes = sqlClient.getEntities()\n    .findByExample(\n        Example.of(treeNode)\n            // highlight-next-line\n            .like(TreeNodeProps.NAME),\n        TreeNodeProps.NAME.asc()\n    );\n'))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val treeNode = new(TreeNode::class).by {\n    parent = null\n    name = "Hello"\n}\nval treeNodes = sqlClient.entities\n    .findByExample(\n        example(treeNode) {\n            // highlight-next-line\n            like(TreeNode::name)\n        }\n    ) {\n        asc(TreeNode::name)\n    }\n')))),(0,r.kt)("p",null,"\u6700\u7ec8\u6210\u7684SQL\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select tb_1_.NODE_ID, tb_1_.NAME, tb_1_.PARENT_ID \nfrom TREE_NODE as tb_1_ \nwhere \n    /* highlight-next-line */\n    tb_1_.NAME like ? \nand \n    tb_1_.PARENT_ID is null \norder by tb_1_.NAME asc\n")),(0,r.kt)("h3",{id:"\u4f7f\u7528\u5bf9\u8c61\u6293\u53d6\u5668"},"\u4f7f\u7528\u5bf9\u8c61\u6293\u53d6\u5668"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'TreeNode treeNode = TreeNodeDraft.$.produce(draft -> {\n    draft.setParent(null);\n    draft.setName("Hello");\n});\nList<TreeNode> treeNodes = sqlClient.getEntities()\n    .findByExample(\n        Example.of(treeNode),\n        // highlight-next-line\n        TreeNodeFetcher.$\n            .allScalarFields()\n            .childNodes(\n                TreeNodeFetcher.$.allScalarFields(),\n                it -> it.recursive()\n            ),\n        TreeNodeProps.NAME.asc()\n    );\n'))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val treeNodes = sqlClient.entities\n    .findByExample(\n        example(treeNode),\n        // highlight-next-line\n        newFetcher(TreeNode::class).by { \n            allScalarFields()\n            childNodes({\n                filter { \n                    recursive()\n                }\n            }) {\n                allScalarFields()\n            }\n        }\n    ) {\n        asc(TreeNode::name)\n    }\n")))))}N.isMDXComponent=!0}}]);