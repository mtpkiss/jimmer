"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[69],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=c(r),d=o,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(m,u(u({ref:t},s),{},{components:r})):n.createElement(m,u({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,u=new Array(a);u[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,u[1]=i;for(var c=2;c<a;c++)u[c]=r[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5162:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(7294),o=r(4334),a="tabItem_Ymn6";function u(e){var t=e.children,r=e.hidden,u=e.className;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,u),hidden:r},t)}},5488:function(e,t,r){r.d(t,{Z:function(){return d}});var n=r(3117),o=r(7294),a=r(4334),u=r(2389),i=r(7392),l=r(7094),c=r(2466),s="tabList__CuJ",p="tabItem_LNqP";function f(e){var t,r,u=e.lazy,f=e.block,d=e.defaultValue,m=e.values,v=e.groupId,b=e.className,y=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),O=(0,i.l)(h,(function(e,t){return e.value===t.value}));if(O.length>0)throw new Error('Docusaurus error: Duplicate values "'+O.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(t=null!=d?d:null==(r=y.find((function(e){return e.props.default})))?void 0:r.props.value)?t:y[0].props.value;if(null!==g&&!h.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,l.U)(),E=w.tabGroupChoices,T=w.setTabGroupChoices,j=(0,o.useState)(g),k=j[0],D=j[1],x=[],P=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var N=E[v];null!=N&&N!==k&&h.some((function(e){return e.value===N}))&&D(N)}var C=function(e){var t=e.currentTarget,r=x.indexOf(t),n=h[r].value;n!==k&&(P(t),D(n),null!=v&&T(v,String(n)))},q=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n,o=x.indexOf(e.currentTarget)+1;r=null!=(n=x[o])?n:x[0];break;case"ArrowLeft":var a,u=x.indexOf(e.currentTarget)-1;r=null!=(a=x[u])?a:x[x.length-1]}null==(t=r)||t.focus()};return o.createElement("div",{className:(0,a.Z)("tabs-container",s)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":f},b)},h.map((function(e){var t=e.value,r=e.label,u=e.attributes;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,key:t,ref:function(e){return x.push(e)},onKeyDown:q,onFocus:C,onClick:C},u,{className:(0,a.Z)("tabs__item",p,null==u?void 0:u.className,{"tabs__item--active":k===t})}),null!=r?r:t)}))),u?(0,o.cloneElement)(y.filter((function(e){return e.props.value===k}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},y.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}function d(e){var t=(0,u.Z)();return o.createElement(f,(0,n.Z)({key:String(t)},e))}},4794:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var n=r(3117),o=r(102),a=(r(7294),r(3905)),u=(r(5488),r(5162),["components"]),i={sidebar_position:1,title:"Declare repositories"},l=void 0,c={unversionedId:"tutorial/query/repository",id:"tutorial/query/repository",title:"Declare repositories",description:"TODO",source:"@site/docs/tutorial/query/repository.mdx",sourceDirName:"tutorial/query",slug:"/tutorial/query/repository",permalink:"/jimmer/docs/tutorial/query/repository",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/tutorial/query/repository.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Declare repositories"},sidebar:"tutorialSidebar",previous:{title:"Query",permalink:"/jimmer/docs/tutorial/query/"},next:{title:"Initial Contact",permalink:"/jimmer/docs/tutorial/query/initial-contact"}},s={},p=[{value:"TODO",id:"todo",level:2}],f={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"todo"},"TODO"))}d.isMDXComponent=!0}}]);