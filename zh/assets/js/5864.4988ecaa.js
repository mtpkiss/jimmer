"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[5864],{67720:function(e,t,r){var n=r(80102),i=r(83117),o=r(67294),l=r(93680),a=r(94780),c=r(41796),u=r(42151),s=r(27623),d=r(35097),h=r(85893);const v=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],f=(0,u.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.absolute&&t.absolute,t[r.variant],r.light&&t.light,"vertical"===r.orientation&&t.vertical,r.flexItem&&t.flexItem,r.children&&t.withChildren,r.children&&"vertical"===r.orientation&&t.withChildrenVertical,"right"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignRight,"left"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignLeft]}})((({theme:e,ownerState:t})=>(0,i.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:e.vars?`rgba(${e.vars.palette.dividerChannel} / 0.08)`:(0,c.Fq)(e.palette.divider,.08)},"inset"===t.variant&&{marginLeft:72},"middle"===t.variant&&"horizontal"===t.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===t.variant&&"vertical"===t.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===t.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"})),(({theme:e,ownerState:t})=>(0,i.Z)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}})),(({theme:e,ownerState:t})=>(0,i.Z)({},t.children&&"vertical"===t.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${(e.vars||e).palette.divider}`,transform:"translateX(0%)"}})),(({ownerState:e})=>(0,i.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}))),m=(0,u.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.wrapper,"vertical"===r.orientation&&t.wrapperVertical]}})((({theme:e,ownerState:t})=>(0,i.Z)({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},"vertical"===t.orientation&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`}))),p=o.forwardRef((function(e,t){const r=(0,s.Z)({props:e,name:"MuiDivider"}),{absolute:o=!1,children:c,className:u,component:p=(c?"div":"hr"),flexItem:g=!1,light:b=!1,orientation:w="horizontal",role:x=("hr"!==p?"separator":void 0),textAlign:S="center",variant:Z="fullWidth"}=r,y=(0,n.Z)(r,v),I=(0,i.Z)({},r,{absolute:o,component:p,flexItem:g,light:b,orientation:w,role:x,textAlign:S,variant:Z}),A=(e=>{const{absolute:t,children:r,classes:n,flexItem:i,light:o,orientation:l,textAlign:c,variant:u}=e,s={root:["root",t&&"absolute",u,o&&"light","vertical"===l&&"vertical",i&&"flexItem",r&&"withChildren",r&&"vertical"===l&&"withChildrenVertical","right"===c&&"vertical"!==l&&"textAlignRight","left"===c&&"vertical"!==l&&"textAlignLeft"],wrapper:["wrapper","vertical"===l&&"wrapperVertical"]};return(0,a.Z)(s,d.V,n)})(I);return(0,h.jsx)(f,(0,i.Z)({as:p,className:(0,l.Z)(A.root,u),role:x,ref:t,ownerState:I},y,{children:c?(0,h.jsx)(m,{className:A.wrapper,ownerState:I,children:c}):null}))}));t.Z=p},35097:function(e,t,r){r.d(t,{V:function(){return i}});var n=r(34867);function i(e){return(0,n.Z)("MuiDivider",e)}const o=(0,r(1588).Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);t.Z=o},88169:function(e,t,r){r.d(t,{Z:function(){return b}});var n=r(83117),i=r(67294),o=r(80102),l=r(93680),a=r(94780),c=r(98216),u=r(27623),s=r(42151),d=r(34867);function h(e){return(0,d.Z)("MuiSvgIcon",e)}(0,r(1588).Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var v=r(85893);const f=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],m=(0,s.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,"inherit"!==r.color&&t[`color${(0,c.Z)(r.color)}`],t[`fontSize${(0,c.Z)(r.fontSize)}`]]}})((({theme:e,ownerState:t})=>{var r,n,i,o,l,a,c,u,s,d,h,v,f,m,p,g,b;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:null==(r=e.transitions)||null==(n=r.create)?void 0:n.call(r,"fill",{duration:null==(i=e.transitions)||null==(o=i.duration)?void 0:o.shorter}),fontSize:{inherit:"inherit",small:(null==(l=e.typography)||null==(a=l.pxToRem)?void 0:a.call(l,20))||"1.25rem",medium:(null==(c=e.typography)||null==(u=c.pxToRem)?void 0:u.call(c,24))||"1.5rem",large:(null==(s=e.typography)||null==(d=s.pxToRem)?void 0:d.call(s,35))||"2.1875"}[t.fontSize],color:null!=(h=null==(v=(e.vars||e).palette)||null==(f=v[t.color])?void 0:f.main)?h:{action:null==(m=(e.vars||e).palette)||null==(p=m.action)?void 0:p.active,disabled:null==(g=(e.vars||e).palette)||null==(b=g.action)?void 0:b.disabled,inherit:void 0}[t.color]}})),p=i.forwardRef((function(e,t){const r=(0,u.Z)({props:e,name:"MuiSvgIcon"}),{children:i,className:s,color:d="inherit",component:p="svg",fontSize:g="medium",htmlColor:b,inheritViewBox:w=!1,titleAccess:x,viewBox:S="0 0 24 24"}=r,Z=(0,o.Z)(r,f),y=(0,n.Z)({},r,{color:d,component:p,fontSize:g,instanceFontSize:e.fontSize,inheritViewBox:w,viewBox:S}),I={};w||(I.viewBox=S);const A=(e=>{const{color:t,fontSize:r,classes:n}=e,i={root:["root","inherit"!==t&&`color${(0,c.Z)(t)}`,`fontSize${(0,c.Z)(r)}`]};return(0,a.Z)(i,h,n)})(y);return(0,v.jsxs)(m,(0,n.Z)({as:p,className:(0,l.Z)(A.root,s),ownerState:y,focusable:"false",color:b,"aria-hidden":!x||void 0,role:x?"img":void 0,ref:t},I,Z,{children:[i,x?(0,v.jsx)("title",{children:x}):null]}))}));p.muiName="SvgIcon";var g=p;function b(e,t){const r=(r,i)=>(0,v.jsx)(g,(0,n.Z)({"data-testid":`${t}Icon`,ref:i},r,{children:e}));return r.muiName=g.muiName,i.memo(i.forwardRef(r))}},85162:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(67294),i=r(34334),o="tabItem_Ymn6";function l(e){var t=e.children,r=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(o,l),hidden:r},t)}},65488:function(e,t,r){r.d(t,{Z:function(){return v}});var n=r(83117),i=r(67294),o=r(34334),l=r(72389),a=r(67392),c=r(7094),u=r(12466),s="tabList__CuJ",d="tabItem_LNqP";function h(e){var t,r,l=e.lazy,h=e.block,v=e.defaultValue,f=e.values,m=e.groupId,p=e.className,g=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=f?f:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),w=(0,a.l)(b,(function(e,t){return e.value===t.value}));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var x=null===v?v:null!=(t=null!=v?v:null==(r=g.find((function(e){return e.props.default})))?void 0:r.props.value)?t:g[0].props.value;if(null!==x&&!b.some((function(e){return e.value===x})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+x+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var S=(0,c.U)(),Z=S.tabGroupChoices,y=S.setTabGroupChoices,I=(0,i.useState)(x),A=I[0],N=I[1],z=[],C=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var R=Z[m];null!=R&&R!==A&&b.some((function(e){return e.value===R}))&&N(R)}var T=function(e){var t=e.currentTarget,r=z.indexOf(t),n=b[r].value;n!==A&&(C(t),N(n),null!=m&&y(m,String(n)))},k=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n,i=z.indexOf(e.currentTarget)+1;r=null!=(n=z[i])?n:z[0];break;case"ArrowLeft":var o,l=z.indexOf(e.currentTarget)-1;r=null!=(o=z[l])?o:z[z.length-1]}null==(t=r)||t.focus()};return i.createElement("div",{className:(0,o.Z)("tabs-container",s)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":h},p)},b.map((function(e){var t=e.value,r=e.label,l=e.attributes;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:A===t?0:-1,"aria-selected":A===t,key:t,ref:function(e){return z.push(e)},onKeyDown:k,onFocus:T,onClick:T},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":A===t})}),null!=r?r:t)}))),l?(0,i.cloneElement)(g.filter((function(e){return e.props.value===A}))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==A})}))))}function v(e){var t=(0,l.Z)();return i.createElement(h,(0,n.Z)({key:String(t)},e))}}}]);