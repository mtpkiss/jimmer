"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[7449],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return m}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),c=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(t),m=a,d=f["".concat(i,".").concat(m)]||f[m]||p[m]||o;return t?n.createElement(d,u(u({ref:r},s),{},{components:t})):n.createElement(d,u({ref:r},s))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,u=new Array(o);u[0]=f;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,u[1]=l;for(var c=2;c<o;c++)u[c]=t[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},85162:function(e,r,t){t.d(r,{Z:function(){return u}});var n=t(67294),a=t(34334),o="tabItem_Ymn6";function u(e){var r=e.children,t=e.hidden,u=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,u),hidden:t},r)}},65488:function(e,r,t){t.d(r,{Z:function(){return m}});var n=t(83117),a=t(67294),o=t(34334),u=t(72389),l=t(67392),i=t(7094),c=t(12466),s="tabList__CuJ",p="tabItem_LNqP";function f(e){var r,t,u=e.lazy,f=e.block,m=e.defaultValue,d=e.values,v=e.groupId,y=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=d?d:b.map((function(e){var r=e.props;return{value:r.value,label:r.label,attributes:r.attributes}})),O=(0,l.l)(h,(function(e,r){return e.value===r.value}));if(O.length>0)throw new Error('Docusaurus error: Duplicate values "'+O.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===m?m:null!=(r=null!=m?m:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?r:b[0].props.value;if(null!==g&&!h.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,i.U)(),x=w.tabGroupChoices,E=w.setTabGroupChoices,T=(0,a.useState)(g),j=T[0],k=T[1],q=[],P=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var C=x[v];null!=C&&C!==j&&h.some((function(e){return e.value===C}))&&k(C)}var D=function(e){var r=e.currentTarget,t=q.indexOf(r),n=h[t].value;n!==j&&(P(r),k(n),null!=v&&E(v,String(n)))},N=function(e){var r,t=null;switch(e.key){case"ArrowRight":var n,a=q.indexOf(e.currentTarget)+1;t=null!=(n=q[a])?n:q[0];break;case"ArrowLeft":var o,u=q.indexOf(e.currentTarget)-1;t=null!=(o=q[u])?o:q[q.length-1]}null==(r=t)||r.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":f},y)},h.map((function(e){var r=e.value,t=e.label,u=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:j===r?0:-1,"aria-selected":j===r,key:r,ref:function(e){return q.push(e)},onKeyDown:N,onFocus:D,onClick:D},u,{className:(0,o.Z)("tabs__item",p,null==u?void 0:u.className,{"tabs__item--active":j===r})}),null!=t?t:r)}))),u?(0,a.cloneElement)(b.filter((function(e){return e.props.value===j}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map((function(e,r){return(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==j})}))))}function m(e){var r=(0,u.Z)();return a.createElement(f,(0,n.Z)({key:String(r)},e))}},23253:function(e,r,t){t.r(r),t.d(r,{assets:function(){return s},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=t(83117),a=t(80102),o=(t(67294),t(3905)),u=(t(65488),t(85162),["components"]),l={sidebar_position:4,title:"Complex Query"},i=void 0,c={unversionedId:"tutorial/query/complex-query",id:"tutorial/query/complex-query",title:"Complex Query",description:"TODO",source:"@site/docs/tutorial/query/complex-query.mdx",sourceDirName:"tutorial/query",slug:"/tutorial/query/complex-query",permalink:"/jimmer/docs/tutorial/query/complex-query",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/tutorial/query/complex-query.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Complex Query"},sidebar:"tutorialSidebar",previous:{title:"Simple Query",permalink:"/jimmer/docs/tutorial/query/simple-query"},next:{title:"Calcluated Property",permalink:"/jimmer/docs/tutorial/query/calc/"}},s={},p=[{value:"TODO",id:"todo",level:2}],f={toc:p};function m(e){var r=e.components,t=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"todo"},"TODO"))}m.isMDXComponent=!0}}]);