"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[5353],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,m=p["".concat(l,".").concat(d)]||p[d]||f[d]||o;return r?n.createElement(m,u(u({ref:t},s),{},{components:r})):n.createElement(m,u({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var c=2;c<o;c++)u[c]=r[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},85162:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(67294),a=r(34334),o="tabItem_Ymn6";function u(e){var t=e.children,r=e.hidden,u=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,u),hidden:r},t)}},65488:function(e,t,r){r.d(t,{Z:function(){return d}});var n=r(83117),a=r(67294),o=r(34334),u=r(72389),i=r(67392),l=r(7094),c=r(12466),s="tabList__CuJ",f="tabItem_LNqP";function p(e){var t,r,u=e.lazy,p=e.block,d=e.defaultValue,m=e.values,v=e.groupId,b=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=m?m:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),O=(0,i.l)(y,(function(e,t){return e.value===t.value}));if(O.length>0)throw new Error('Docusaurus error: Duplicate values "'+O.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(t=null!=d?d:null==(r=h.find((function(e){return e.props.default})))?void 0:r.props.value)?t:h[0].props.value;if(null!==g&&!y.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,l.U)(),j=w.tabGroupChoices,E=w.setTabGroupChoices,T=(0,a.useState)(g),k=T[0],x=T[1],C=[],D=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var P=j[v];null!=P&&P!==k&&y.some((function(e){return e.value===P}))&&x(P)}var N=function(e){var t=e.currentTarget,r=C.indexOf(t),n=y[r].value;n!==k&&(D(t),x(n),null!=v&&E(v,String(n)))},q=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n,a=C.indexOf(e.currentTarget)+1;r=null!=(n=C[a])?n:C[0];break;case"ArrowLeft":var o,u=C.indexOf(e.currentTarget)-1;r=null!=(o=C[u])?o:C[C.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},b)},y.map((function(e){var t=e.value,r=e.label,u=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,key:t,ref:function(e){return C.push(e)},onKeyDown:q,onFocus:N,onClick:N},u,{className:(0,o.Z)("tabs__item",f,null==u?void 0:u.className,{"tabs__item--active":k===t})}),null!=r?r:t)}))),u?(0,a.cloneElement)(h.filter((function(e){return e.props.value===k}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}function d(e){var t=(0,u.Z)();return a.createElement(p,(0,n.Z)({key:String(t)},e))}},10219:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return f}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),u=(r(65488),r(85162),["components"]),i={sidebar_position:1,title:"Cache Introduce"},l=void 0,c={unversionedId:"tutorial/query/cache/intro",id:"tutorial/query/cache/intro",title:"Cache Introduce",description:"TODO",source:"@site/docs/tutorial/query/cache/intro.mdx",sourceDirName:"tutorial/query/cache",slug:"/tutorial/query/cache/intro",permalink:"/jimmer/docs/tutorial/query/cache/intro",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/tutorial/query/cache/intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Cache Introduce"},sidebar:"tutorialSidebar",previous:{title:"Cache",permalink:"/jimmer/docs/tutorial/query/cache/"},next:{title:"Object cache",permalink:"/jimmer/docs/tutorial/query/cache/object"}},s={},f=[{value:"TODO",id:"todo",level:2}],p={toc:f};function d(e){var t=e.components,r=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"todo"},"TODO"))}d.isMDXComponent=!0}}]);