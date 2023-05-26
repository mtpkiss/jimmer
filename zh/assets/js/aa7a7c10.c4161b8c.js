"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[2449],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,f=s["".concat(u,".").concat(d)]||s[d]||m[d]||l;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294),r=n(34334),l="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(83117),r=n(67294),l=n(34334),o=n(72389),i=n(67392),u=n(7094),p=n(12466),c="tabList__CuJ",m="tabItem_LNqP";function s(e){var t,n,o=e.lazy,s=e.block,d=e.defaultValue,f=e.values,v=e.groupId,k=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=f?f:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,i.l)(b,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===d?d:null!=(t=null!=d?d:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==h&&!b.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var T=(0,u.U)(),N=T.tabGroupChoices,E=T.setTabGroupChoices,j=(0,r.useState)(h),x=j[0],w=j[1],O=[],C=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var Z=N[v];null!=Z&&Z!==x&&b.some((function(e){return e.value===Z}))&&w(Z)}var S=function(e){var t=e.currentTarget,n=O.indexOf(t),a=b[n].value;a!==x&&(C(t),w(a),null!=v&&E(v,String(a)))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=O.indexOf(e.currentTarget)+1;n=null!=(a=O[r])?a:O[0];break;case"ArrowLeft":var l,o=O.indexOf(e.currentTarget)-1;n=null!=(l=O[o])?l:O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":s},k)},b.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return O.push(e)},onKeyDown:I,onFocus:S,onClick:S},o,{className:(0,l.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(g.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function d(e){var t=(0,o.Z)();return r.createElement(s,(0,a.Z)({key:String(t)},e))}},69596:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return d}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),o=n(65488),i=n(85162),u=["components"],p={sidebar_position:3,title:"MappedSuperclass"},c=void 0,m={unversionedId:"team-work/mapping/advanced/mapped-super-class",id:"team-work/mapping/advanced/mapped-super-class",title:"MappedSuperclass",description:"org.babyfish.jimmer.sql.MappedSuperclass\u7528\u4e8e\u63d0\u4f9b\u53ef\u4f9b\u5b9e\u4f53\u7ee7\u627f\u7684\u62bd\u8c61\u8d85\u7c7b\u578b\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/team-work/mapping/advanced/mapped-super-class.mdx",sourceDirName:"team-work/mapping/advanced",slug:"/team-work/mapping/advanced/mapped-super-class",permalink:"/jimmer/zh/docs/team-work/mapping/advanced/mapped-super-class",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/team-work/mapping/advanced/mapped-super-class.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"MappedSuperclass"},sidebar:"tutorialSidebar",previous:{title:"Key",permalink:"/jimmer/zh/docs/team-work/mapping/advanced/key"},next:{title:"\u903b\u8f91\u5220\u9664",permalink:"/jimmer/zh/docs/team-work/mapping/advanced/logical-deleted"}},s={},d=[],f={toc:d};function v(e){var t=e.components,n=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"org.babyfish.jimmer.sql.MappedSuperclass"),"\u7528\u4e8e\u63d0\u4f9b\u53ef\u4f9b\u5b9e\u4f53\u7ee7\u627f\u7684\u62bd\u8c61\u8d85\u7c7b\u578b\u3002"),(0,l.kt)("p",null,"\u8be5\u8d85\u7c7b\u578b\u4e0d\u5e76\u662f\u5b9e\u4f53\uff0c\u4f46\u53ef\u4ee5\u88ab\u591a\u4e2a\u5b9e\u4f53\u7c7b\u578b\u7ee7\u627f\uff0c\u4ece\u800c\u907f\u514d\u591a\u4e2a\u5b9e\u4f53\u91cd\u590d\u58f0\u660e\u76f8\u540c\u7684\u5c5e\u6027\u3002"),(0,l.kt)("p",null,"\u8ba9\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u4f8b\u5b50\uff0c\u5148\u5b9a\u4e49\u8d85\u7c7b\u578b"),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="CommonEntity.java"',title:'"CommonEntity.java"'},"// highlight-next-line\n@MappedSuperclass\npublic interface CommonEntity {\n\n    LocalDateTime createdTime();\n\n    @ManyToOne\n    User createdBy();\n\n    LocalDateTime modifiedTime();\n\n    @ManyToOne\n    User modifiedBy();\n}\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="CommonEntity.kt"',title:'"CommonEntity.kt"'},"// highlight-next-line\ninterface CommonEntity {\n\n    val createdTime: LocalDateTime\n\n    @ManyToOne\n    val createdBy: User\n\n    val modifiedTime: LocalDateTime\n\n    @ManyToOne\n    val modifiedBy: User\n}\n")))),(0,l.kt)("p",null,"\u5176\u4ed6\u5b9e\u4f53\u5c31\u53ef\u4ee5\u7ee7\u627f\u5b83"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"BookStore")),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookStore.java"',title:'"BookStore.java"'},"@Entity\n// highlight-next-line\npublic interface BookStore extends CommonEntity {\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookStore.kt"',title:'"BookStore.kt"'},"@Entity\n// highlight-next-line\ninterface BookStore : CommonEntity {\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Book")),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},"@Entity\n// highlight-next-line\npublic interface Book extends CommonEntity {\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},"@Entity\n// highlight-next-line\ninterface Book : CommonEntity {\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Author")),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Author.java"',title:'"Author.java"'},"@Entity\n// highlight-next-line\npublic interface Author extends CommonEntity {\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Author.kt"',title:'"Author.kt"'},"@Entity\n// highlight-next-line\ninterface Author : CommonEntity {\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n")))))),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"@MapperSuperclass"),"\u7684\u4f5c\u7528\u4e0d\u4ec5\u4ec5\u662f\u51cf\u5c11\u6eb6\u4e8e\u4ee3\u7801\uff0c\u5b83\u548c\u5176\u4ed6\u4e24\u4e2a\u529f\u80fd\u70b9\u6709\u5bc6\u5207\u8054\u7cfb"),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../../query/global-filter"},"\u5168\u5c40\u8fc7\u6ee4\u5668")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../../mutation/draft-interceptor"},"\u62e6\u622a\u5668")))))}v.isMDXComponent=!0}}]);