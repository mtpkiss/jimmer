"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[518],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294),r=n(34334),l="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(83117),r=n(67294),l=n(34334),o=n(72389),i=n(67392),s=n(7094),u=n(12466),c="tabList__CuJ",m="tabItem_LNqP";function p(e){var t,n,o=e.lazy,p=e.block,d=e.defaultValue,f=e.values,b=e.groupId,v=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=f?f:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,i.l)(g,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(t=null!=d?d:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:h[0].props.value;if(null!==y&&!g.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),N=w.tabGroupChoices,j=w.setTabGroupChoices,O=(0,r.useState)(y),T=O[0],_=O[1],D=[],E=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var q=N[b];null!=q&&q!==T&&g.some((function(e){return e.value===q}))&&_(q)}var x=function(e){var t=e.currentTarget,n=D.indexOf(t),a=g[n].value;a!==T&&(E(t),_(a),null!=b&&j(b,String(a)))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=D.indexOf(e.currentTarget)+1;n=null!=(a=D[r])?a:D[0];break;case"ArrowLeft":var l,o=D.indexOf(e.currentTarget)-1;n=null!=(l=D[o])?l:D[D.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},v)},g.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return D.push(e)},onKeyDown:C,onFocus:x,onClick:x},o,{className:(0,l.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(h.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function d(e){var t=(0,o.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},85618:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return d}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),o=n(65488),i=n(85162),s=["components"],u={sidebar_position:2,title:"Delete statement"},c=void 0,m={unversionedId:"jimmer-sql/mutation/delete-statement",id:"jimmer-sql/mutation/delete-statement",title:"Delete statement",description:"The scope of this article",source:"@site/docs/jimmer-sql/mutation/delete-statement.mdx",sourceDirName:"jimmer-sql/mutation",slug:"/jimmer-sql/mutation/delete-statement",permalink:"/jimmer/docs/jimmer-sql/mutation/delete-statement",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/jimmer-sql/mutation/delete-statement.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Delete statement"},sidebar:"tutorialSidebar",previous:{title:"Update statement",permalink:"/jimmer/docs/jimmer-sql/mutation/update-statement"},next:{title:"Save command",permalink:"/jimmer/docs/jimmer-sql/mutation/save-command"}},p={},d=[{value:"The scope of this article",id:"the-scope-of-this-article",level:2},{value:"Basic usage",id:"basic-usage",level:2},{value:"Use table joins",id:"use-table-joins",level:2}],f={toc:d};function b(e){var t=e.components,n=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"the-scope-of-this-article"},"The scope of this article"),(0,l.kt)("p",null,"Jimmer supports ",(0,l.kt)("a",{parentName:"p",href:"../advanced/trigger"},"trigger"),", which is divided into binlog trigger and transaction trigger."),(0,l.kt)("p",null,"Using transaction triggers will cause jimmer's modification operations to generate more and more complete queries to simulate triggers."),(0,l.kt)("p",null,"Several scenarios have been discussed in this article, and the generated SQL will be discussed for each scenario, all on the premise that transaction triggers are not used."),(0,l.kt)("h2",{id:"basic-usage"},"Basic usage"),(0,l.kt)("p",null,"Delete statement usage is as follows"),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'BookTable book = BookTable.$;\n\nint affectedRowCount = sqlClient\n    .createDelete(book)\n    .where(book.name().eq("Learning GraphQL"))\n    .execute();\nSystem.out.println("Affected row count: " + affectedRowCount);\n'))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val affectedRowCount = sqlClient\n    .createDelete(Book::class) {\n        where(table.name eq "Learning GraphQL")\n    }\n    .execute()\nprintln("Affected row count: $affectedRowCount")\n')))),(0,l.kt)("p",null,"The generated SQL is as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"delete \nfrom BOOK as tb_1_ \nwhere tb_1_.NAME = ?\n")),(0,l.kt)("h2",{id:"use-table-joins"},"Use table joins"),(0,l.kt)("p",null,"The Delete statement supports table joins, like this"),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'BookTable book = BookTable.$;\n\nint affectedRowCount = sqlClient\n    .createDelete(book)\n    .where(book.store().name().eq("MANNING"))\n    .execute();\nSystem.out.println("Affected row count: " + affectedRowCount);\n'))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val affectedRowCount = sqlClient\n    .createDelete(Book::class) {\n        where(table.store.name eq "MANNING")\n    }\n    .execute()\nprintln("Affected row count: $affectedRowCount")\n')))),(0,l.kt)("p",null,"Finally, three SQL statements are generated:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    distinct tb_1_.ID \nfrom BOOK as tb_1_ \ninner join BOOK_STORE as tb_2_ \n    on tb_1_.STORE_ID = tb_2_.ID \nwhere \n    tb_2_.NAME = ?\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"delete from BOOK_AUTHOR_MAPPING \nwhere BOOK_ID in(?, ?, ?)\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"delete from BOOK \nwhere ID in(?, ?, ?)\n")))),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"If you use table join in a delete statement, jimmer-sql will translate it to ",(0,l.kt)("inlineCode",{parentName:"p"},"select")," + ",(0,l.kt)("inlineCode",{parentName:"p"},"delete"),". First use the ",(0,l.kt)("inlineCode",{parentName:"p"},"select")," statement with the table joins to query the id of the data to be deleted, and then use the ",(0,l.kt)("a",{parentName:"p",href:"./delete-command"},"Delete command")," to delete the data."),(0,l.kt)("p",{parentName:"admonition"},"This scheme is valid for any database.")))}b.isMDXComponent=!0}}]);