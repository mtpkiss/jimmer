"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[3861],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294),r=n(34334),i="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(83117),r=n(67294),i=n(34334),o=n(72389),l=n(67392),s=n(7094),u=n(12466),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n,o=e.lazy,d=e.block,m=e.defaultValue,f=e.values,v=e.groupId,k=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=f?f:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,l.l)(g,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var T=null===m?m:null!=(t=null!=m?m:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==T&&!g.some((function(e){return e.value===T})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+T+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,s.U)(),N=h.tabGroupChoices,D=h.setTabGroupChoices,E=(0,r.useState)(T),I=E[0],O=E[1],C=[],S=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var j=N[v];null!=j&&j!==I&&g.some((function(e){return e.value===j}))&&O(j)}var w=function(e){var t=e.currentTarget,n=C.indexOf(t),a=g[n].value;a!==I&&(S(t),O(a),null!=v&&D(v,String(a)))},L=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=C.indexOf(e.currentTarget)+1;n=null!=(a=C[r])?a:C[0];break;case"ArrowLeft":var i,o=C.indexOf(e.currentTarget)-1;n=null!=(i=C[o])?i:C[C.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},k)},g.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:I===t?0:-1,"aria-selected":I===t,key:t,ref:function(e){return C.push(e)},onKeyDown:L,onFocus:w,onClick:w},o,{className:(0,i.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":I===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(b.filter((function(e){return e.props.value===I}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==I})}))))}function m(e){var t=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},77195:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=n(65488),l=n(85162),s=["components"],u={sidebar_position:7,title:"Draft\u62e6\u622a\u5668"},c=void 0,p={unversionedId:"jimmer-sql/mutation/interceptor",id:"jimmer-sql/mutation/interceptor",title:"Draft\u62e6\u622a\u5668",description:"Draft\u62e6\u622a\u5668\u548cSave\u6307\u4ee4\u914d\u5408\u4f7f\u7528\uff0c\u5728\u5bf9\u8c61\u88ab\u4fdd\u5b58\u4e4b\u524d\u8c03\u6574\u6570\u636e\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/jimmer-sql/mutation/interceptor.mdx",sourceDirName:"jimmer-sql/mutation",slug:"/jimmer-sql/mutation/interceptor",permalink:"/jimmer/zh/docs/jimmer-sql/mutation/interceptor",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/jimmer-sql/mutation/interceptor.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Draft\u62e6\u622a\u5668"},sidebar:"tutorialSidebar",previous:{title:"\u4fee\u6539\u4e2d\u95f4\u8868",permalink:"/jimmer/zh/docs/jimmer-sql/mutation/association"},next:{title:"\u8fdb\u9636",permalink:"/jimmer/zh/docs/jimmer-sql/advanced/"}},d={},m=[{value:"\u672c\u6587\u8ba8\u8bba\u8303\u56f4",id:"\u672c\u6587\u8ba8\u8bba\u8303\u56f4",level:2},{value:"\u5b9a\u4e49\u88ab\u62e6\u622a\u6570\u636e\u683c\u5f0f",id:"\u5b9a\u4e49\u88ab\u62e6\u622a\u6570\u636e\u683c\u5f0f",level:2},{value:"\u5b9a\u4e49\u62e6\u622a\u5668",id:"\u5b9a\u4e49\u62e6\u622a\u5668",level:2},{value:"\u914d\u7f6e\u62e6\u622a\u5668",id:"\u914d\u7f6e\u62e6\u622a\u5668",level:2},{value:"\u6700\u7ec8\u4f7f\u7528",id:"\u6700\u7ec8\u4f7f\u7528",level:2}],f={toc:m};function v(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Draft\u62e6\u622a\u5668\u548c",(0,i.kt)("a",{parentName:"p",href:"./save-command"},"Save\u6307\u4ee4"),"\u914d\u5408\u4f7f\u7528\uff0c\u5728\u5bf9\u8c61\u88ab\u4fdd\u5b58\u4e4b\u524d\u8c03\u6574\u6570\u636e\u3002"),(0,i.kt)("h2",{id:"\u672c\u6587\u8ba8\u8bba\u8303\u56f4"},"\u672c\u6587\u8ba8\u8bba\u8303\u56f4"),(0,i.kt)("p",null,"Jimmer\u652f\u6301",(0,i.kt)("a",{parentName:"p",href:"../advanced/trigger"},"\u89e6\u53d1\u5668"),"\uff0c\u5176\u4e2d\u5206\u4e3aBinLog\u89e6\u53d1\u5668\u548cTransaction\u89e6\u53d1\u5668\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u4f7f\u7528Transaction\u89e6\u53d1\u5668\uff0c\u5c06\u4f1a\u5bfc\u81f4Jimmer\u4fee\u6539\u64cd\u4f5c\u751f\u6210\u66f4\u591a\u66f4\u5b8c\u6574\u7684\u67e5\u8be2\u8bed\u53e5\u4ee5\u6a21\u62df\u89e6\u53d1\u5668\u3002"),(0,i.kt)("p",null,"\u672c\u6587\u6240\u8ba8\u8bba\u4e86\u82e5\u5e72\u573a\u666f\uff0c\u5bf9\u6bcf\u79cd\u573a\u666f\u90fd\u4f1a\u8ba8\u8bba\u751f\u6210\u7684SQL\uff0c\u90fd\u662f\u4ee5\u672a\u4f7f\u7528Transaction\u89e6\u53d1\u5668\u4f5c\u4e3a\u524d\u63d0\u4e0b\u7684\u3002"),(0,i.kt)("h2",{id:"\u5b9a\u4e49\u88ab\u62e6\u622a\u6570\u636e\u683c\u5f0f"},"\u5b9a\u4e49\u88ab\u62e6\u622a\u6570\u636e\u683c\u5f0f"),(0,i.kt)("p",null,"\u5047\u5982\u5927\u90e8\u5206\u5b9e\u4f53\u8868\u90fd\u5177\u5907created_time\u3001modified_time\u3001created_by\u548cmodified_by\u56db\u4e2a\u5b57\u6bb5\uff0c\u53ef\u4ee5\u63d0\u4f9b\u5982\u4e0b\u8d85\u7c7b"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// highlight-next-line\n@MappedSuperclass\npublic interface BaseEntity {\n\n    LocalDateTime createdTime();\n\n    LocalDateTime modifiedTime();\n\n    @ManyToOne\n    @OnDissociate(DissociateAction.SET_NULL)\n    User creator();\n\n    @ManyToOne\n    @OnDissociate(DissociateAction.SET_NULL)\n    User editor();\n}\n"))),(0,i.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"// highlight-next-line\n@MappedSuperclass\ninterface BaseEntity {\n\n    val createdTime: LocalDateTime\n\n    val modifiedTime: LocalDateTime\n\n    @ManyToOne\n    @OnDissociate(DissociateAction.SET_NULL)\n    val creator: User\n\n    @ManyToOne\n    @OnDissociate(DissociateAction.SET_NULL)\n    val editor: User\n}\n")))),(0,i.kt)("p",null,"\u6240\u6709\u9700\u8981\u8fd9\u4e9b\u5b57\u6bb5\u7684\u5b9e\u4f53\u90fd\u4ece\u6b64\u8d85\u7c7b\u6d3e\u751f\u5373\u53ef\u3002"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u8fd9\u91cc\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"@OnDissociate(DissociateAction.SET_NULL)"),"\u662f\u4e3a\u4e86\u9632\u6b62\u56e0\u8fd9\u4e24\u4e2a\u5916\u952e\u5bfc\u81f4\u76f8\u5173",(0,i.kt)("inlineCode",{parentName:"p"},"User"),"\u6570\u636e\u7684\u5220\u9664\u64cd\u4f5c\u88ab\u963b\u6b62\u3002\u5f53\u76f8\u5173",(0,i.kt)("inlineCode",{parentName:"p"},"User"),"\u88ab\u5220\u9664\u540e\uff0c\u8fd9\u4e24\u4e2a\u5916\u952e\u81ea\u52a8\u6e05\u7a7a\u3002")),(0,i.kt)("h2",{id:"\u5b9a\u4e49\u62e6\u622a\u5668"},"\u5b9a\u4e49\u62e6\u622a\u5668"),(0,i.kt)("p",null,"\u5047\u8bbe\u6709\u4e00\u4e2a\u53eb\u505a",(0,i.kt)("inlineCode",{parentName:"p"},"UserService"),"\u7684\u670d\u52a1\u7c7b\uff0c\u5176java\u65b9\u6cd5",(0,i.kt)("inlineCode",{parentName:"p"},"getCurrentUserId()"),"\u6216kotlin\u5c5e\u6027",(0,i.kt)("inlineCode",{parentName:"p"},"currentUserId"),"\u8fd4\u56de\u5f53\u524d\u767b\u5f55\u7528\u6237\u7684id\u3002"),(0,i.kt)("p",null,"\u62e6\u622a\u5668\u5fc5\u987b\u5b9e\u73b0",(0,i.kt)("inlineCode",{parentName:"p"},"org.babyfish.jimmer.sql.DraftInterceptor"),"\u63a5\u53e3\uff0c\u5982\u679c\u4f7f\u7528Spring\u6258\u7ba1\uff0c\u4ee3\u7801\u65b9\u5f0f\u5982\u4e0b\uff1a"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@Component\npublic class BaseEntityDraftInterceptor implements DraftInterceptor<BaseEntityDraft> {\n\n    private final UserService userService;\n\n    public BaseEntityDraftInterceptor(UserService userService) {\n        this.userService = userService;\n    }\n\n    @Override\n    public void beforeSave(BaseEntityDraft draft, boolean isNew) {\n        if (!ImmutableObjects.isLoaded(draft, BaseEntityProps.MODIFIED_TIME)) {\n            draft.setModifiedTime(LocalDateTime.now());\n        }\n        if (!ImmutableObjects.isLoaded(draft, BaseEntityProps.EDITOR)) {\n            draft.setEditor(editor - > {\n                editor.setId(userService.getCurrentUserId());\n            });\n        }\n        if (isNew) {\n            if (!ImmutableObjects.isLoaded(draft, BaseEntityProps.CREATED_TIME)) {\n                draft.setCreatedTime(LocalDateTime.now());\n            }\n            if (!ImmutableObjects.isLoaded(draft, BaseEntityProps.CREATOR)) {\n                draft.setCreator(creator - > {\n                    creator.setId(userService.getCurrentUserId());\n                });\n            }   \n        }\n    }\n}\n"))),(0,i.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Component\nclass BaseEntityDraftInterceptor(\n    private val userService: UserService\n) : DraftInterceptor<BaseEntityDraft> {\n\n    override fun beforeSave(draft: BaseEntityDraft, isNew: Boolean) {\n        if (!isLoaded(draft, BaseEntity::modifiedTime)) {\n            draft.modifiedTime = LocalDateTime.now()\n        }\n        if (!isLoaded(draft, BaseEntity::editor)) {\n            draft.editor().apply {\n                id = userService.currentUserId\n            }\n        }\n        if (isNew) {\n            if (!isLoaded(draft, BaseEntity::createdTime)) {\n                draft.createdTime = LocalDateTime.now()\n            }\n            if (!isLoaded(draft, BaseEntity::creator)) {\n                draft.creator().apply {\n                    id = userService.currentUserId\n                }\n            }\n        }\n    }\n}\n")))),(0,i.kt)("p",null,"\u5176\u4e2d\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"beforeSave"),"\u65b9\u6cd5\u5728\u67d0\u4e2a\u5bf9\u8c61\u88ab\u4fdd\u5b58\u4e4b\u524d\u88ab\u8c03\u7528\uff0c\u7528\u6237\u53ef\u4ee5\u5373\u5c06\u4fdd\u5b58\u7684\u6570\u636e\u505a\u51fa\u6700\u540e\u8c03\u6574\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u53c2\u6570",(0,i.kt)("inlineCode",{parentName:"p"},"isNew"),"\u4e3atrue\uff0c\u5219\u8868\u793a\u7a0d\u540e\u64cd\u4f5c\u662finsert\u64cd\u4f5c\uff1b\u5426\u5219\uff0c\u662fupdate\u64cd\u4f5c\u3002"),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"\u8bf7\u4e0d\u8981\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"beforeSave"),"\u65b9\u6cd5\u4e2d\uff0c\u4fee\u6539\u88ab",(0,i.kt)("inlineCode",{parentName:"p"},"@Id"),"\u6216",(0,i.kt)("inlineCode",{parentName:"p"},"@Key"),"\u4fee\u9970\u7684\u5c5e\u6027\u3002")),(0,i.kt)("h2",{id:"\u914d\u7f6e\u62e6\u622a\u5668"},"\u914d\u7f6e\u62e6\u622a\u5668"),(0,i.kt)("p",null,"\u5c06\u62e6\u622a\u5668\u6302\u63a5\u5230SqlClinet\u5bf9\u8c61\u4e0a\uff0c\u5373\u53ef\u751f\u6548"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@Bean\npublic JSqlClient sqlClient(\n    List<DraftInterceptor<?>> interceptors,\n    ...\u7701\u7565\u5176\u4ed6\u53c2\u6570...\n) {\n    return JSqlClient\n        .newBuilder()\n        // highlight-next-line\n        .addDraftinterceptors(interceptors)\n        ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n        .build();\n}\n"))),(0,i.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Bean\nfun sqlClient(\n    interceptors: List<DraftInterceptor<?>>,\n    ...\u7701\u7565\u5176\u4ed6\u53c2\u6570...\n): KSqlClient =\n    newKSqlClient {\n        // highlight-next-line\n        addDraftinterceptors(interceptors)\n        ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n    }\n")))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\u867d\u7136\u5728\u672c\u6587\u4ec5\u793a\u8303\u4e86\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"DraftInterceptor"),"\uff0c\u5b9e\u9645\u9879\u76ee\u4e2d\u53ef\u80fd\u6709\u5f88\u591a\u4e2a\u3002"),(0,i.kt)("p",{parentName:"admonition"},"\u6240\u4ee5\uff0c\u8fd9\u91cc\u4f7f\u7528\u96c6\u5408\uff0c\u8ba9Spring\u6ce8\u5165\u6240\u6709\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"DraftInterceptor"),"\u3002")),(0,i.kt)("h2",{id:"\u6700\u7ec8\u4f7f\u7528"},"\u6700\u7ec8\u4f7f\u7528"),(0,i.kt)("p",null,"\u5047\u5982",(0,i.kt)("inlineCode",{parentName:"p"},"Book"),"\u7ee7\u627f\u4e86",(0,i.kt)("inlineCode",{parentName:"p"},"BaseEntity"),"\uff0c\u5219\u53ef\u4ee5\u8fd9\u4e48\u4f7f\u7528"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Book book = BookDraft.$.produce(draft -> {\n    draft.setName("SQL in Action");\n    draft.setEdition(1);\n    draft.setPrice(new BigDecimal("59"));\n    draft.applyStore(store -> store.setId(2L));\n});\nsqlClient.getEntities().save(book);\n'))),(0,i.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'val book = new(Book::class).by {\n    name = "SQL in Action"\n    edition = 1\n    price = BigDecimal("59")\n    store().id = 2\n}\nsqlClient.entities.save(book)\n')))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5982\u679c\u4e0a\u9762\u7684\u4fdd\u5b58\u6307\u4ee4\u6700\u7ec8\u5bfc\u81f4\u4e86insert\u64cd\u4f5c\uff0c\u751f\u6210\u7684SQL\u5982\u4e0b"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"insert into BOOK(\n    /* highlight-start */\n    CREATED_TIME,\n    MODIFIED_TIME,\n    CREATOR_ID,\n    EDITOR_ID,\n    /* highlight-end */\n    NAME, \n    EDITION, \n    PRICE, \n    STORE_ID\n) values(\n    /* highlight-next-line */\n    ?, ?, ?, ?,\n    ?, ?, ?, ?\n)\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5982\u679c\u4e0a\u9762\u7684\u4fdd\u5b58\u6307\u4ee4\u6700\u7ec8\u5bfc\u81f4\u4e86update\u64cd\u4f5c\uff0c\u751f\u6210\u7684SQL\u5982\u4e0b"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"update BOOK set \n    /* highlight-start */\n    MODIFIED_TIME = ?,\n    EDITOR_ID = ?,\n    /* highlight-end */\n    PRICE = ?, \n    STORE_ID = ? \nwhere ID = ?\n")))),(0,i.kt)("p",null,"\u6211\u4eec\u770b\u5230\uff0c\u867d\u7136\u7528\u6237\u5e76\u6ca1\u6709\u4e3a\u88ab\u4fdd\u5b58\u5bf9\u8c61\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"createdTime"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"modifiedTime"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"creator"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"editor"),"\u7b49\u5b57\u6bb5\u6307\u5b9a\u503c\uff0c\u4f46",(0,i.kt)("inlineCode",{parentName:"p"},"DraftIntercetor"),"\u8fd8\u662f\u4e3a\u8fd9\u4e9b\u7f3a\u5931\u5c5e\u6027\u8bbe\u7f6e\u4e86\u503c\u3002"))}v.isMDXComponent=!0}}]);