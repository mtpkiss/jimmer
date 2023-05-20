"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[4531],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,A=m["".concat(u,".").concat(d)]||m[d]||p[d]||l;return t?r.createElement(A,i(i({ref:n},s),{},{components:t})):r.createElement(A,i({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},85162:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(67294),a=t(34334),l="tabItem_Ymn6";function i(e){var n=e.children,t=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,i),hidden:t},n)}},65488:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(83117),a=t(67294),l=t(34334),i=t(72389),o=t(67392),u=t(7094),c=t(12466),s="tabList__CuJ",p="tabItem_LNqP";function m(e){var n,t,i=e.lazy,m=e.block,d=e.defaultValue,A=e.values,g=e.groupId,k=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=A?A:f.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),b=(0,o.l)(v,(function(e,n){return e.value===n.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===d?d:null!=(n=null!=d?d:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:f[0].props.value;if(null!==h&&!v.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,u.U)(),x=y.tabGroupChoices,I=y.setTabGroupChoices,j=(0,a.useState)(h),N=j[0],w=j[1],E=[],D=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var O=x[g];null!=O&&O!==N&&v.some((function(e){return e.value===O}))&&w(O)}var X=function(e){var n=e.currentTarget,t=E.indexOf(n),r=v[t].value;r!==N&&(D(n),w(r),null!=g&&I(g,String(r)))},Z=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r,a=E.indexOf(e.currentTarget)+1;t=null!=(r=E[a])?r:E[0];break;case"ArrowLeft":var l,i=E.indexOf(e.currentTarget)-1;t=null!=(l=E[i])?l:E[E.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},k)},v.map((function(e){var n=e.value,t=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,key:n,ref:function(e){return E.push(e)},onKeyDown:Z,onFocus:X,onClick:X},i,{className:(0,l.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":N===n})}),null!=t?t:n)}))),i?(0,a.cloneElement)(f.filter((function(e){return e.props.value===N}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==N})}))))}function d(e){var n=(0,i.Z)();return a.createElement(m,(0,r.Z)({key:String(n)},e))}},62824:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return d}});var r=t(83117),a=t(80102),l=(t(67294),t(3905)),i=t(65488),o=t(85162),u=["components"],c={sidebar_position:4,title:"\u751f\u6210\u4ee3\u7801"},s=void 0,p={unversionedId:"tutorial/prepare/generate",id:"tutorial/prepare/generate",title:"\u751f\u6210\u4ee3\u7801",description:"\u4ee3\u7801\u751f\u6210",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/tutorial/prepare/generate.mdx",sourceDirName:"tutorial/prepare",slug:"/tutorial/prepare/generate",permalink:"/jimmer/zh/docs/tutorial/prepare/generate",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/tutorial/prepare/generate.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"\u751f\u6210\u4ee3\u7801"},sidebar:"tutorialSidebar",previous:{title:"\u5b9a\u4e49\u5b9e\u4f53",permalink:"/jimmer/zh/docs/tutorial/prepare/entity"},next:{title:"\u542f\u52a8\u5e94\u7528",permalink:"/jimmer/zh/docs/tutorial/prepare/start"}},m={},d=[{value:"\u4ee3\u7801\u751f\u6210",id:"\u4ee3\u7801\u751f\u6210",level:2},{value:"\u786e\u8ba4\u4ee3\u7801\u751f\u6210\u6210\u529f",id:"\u786e\u8ba4\u4ee3\u7801\u751f\u6210\u6210\u529f",level:2}],A={toc:d};function g(e){var n=e.components,c=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},A,c,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u4ee3\u7801\u751f\u6210"},"\u4ee3\u7801\u751f\u6210"),(0,l.kt)("p",null,"\u548cJPA2.0 Criteria\u3001QueryDsl\u3001Fluent MyBatis\u7b49\u6846\u67b6\u7c7b\u4f3c\uff0cJimmer\u662f\u8ba9\u5f00\u53d1\u4eba\u5458\u4f7f\u7528\u5f3a\u7c7b\u578bDSL\u8fdb\u884c\u5f00\u53d1\uff0c\u5c3d\u53ef\u80fd\u5728\u7f16\u8bd1\u65f6\u53d1\u73b0\u5f00\u53d1\u4eba\u5458\u72af\u7684\u9519\u8bef\uff0c\u800c\u975e\u8fd0\u884c\u65f6\u3002"),(0,l.kt)("p",null,"\u56e0\u6b64\uff0c\u7f16\u8bd1\u65f6\u9700\u8981\u6839\u636e\u7528\u6237\u7f16\u5199\u7684\u5b9e\u4f53\u7c7b\u578b\uff0c\u751f\u6210\u4e00\u4e9b\u4ee3\u7801\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Java\u7528\u6237\u4f7f\u7528Annotation Processor"),(0,l.kt)("li",{parentName:"ul"},"Kotlin\u7528\u6237\u4f7f\u7528KSP")),(0,l.kt)(i.Z,{groupId:"buildTool",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java_maven",label:"Java(Maven)",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="pom.xml"',title:'"pom.xml"'},"...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n\n<build>\n    <plugins>\n        <plugin>\n            <groupId>org.apache.maven.plugins</groupId>\n            <artifactId>maven-compiler-plugin</artifactId>\n            <version>3.10.1</version>\n            <configuration>\n                \x3c!-- highlight-next-line --\x3e\n                <annotationProcessorPaths>\n                    <path>\n                        <groupId>org.babyfish.jimmer</groupId>\n                        \x3c!-- highlight-next-line --\x3e\n                        <artifactId>jimmer-apt</artifactId>\n                        <version>${jimmer.version}</version>\n                    </path>\n                </annotationProcessorPaths>\n            </configuration>\n        </plugin>\n    </plugins>\n</build>\n\n...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n"))),(0,l.kt)(o.Z,{value:"java_gradle",label:"Java(Gradle)",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-groovy",metastring:'title="build.gradle"',title:'"build.gradle"'},'dependencies {\n    \n    ...\u7701\u7565\u5176\u4ed6\u4f9d\u8d56...\n\n    annotationProcessor "org.babyfish.jimmer:jimmer-apt:${jimmerVersion}"\n}\n'))),(0,l.kt)(o.Z,{value:"kotin_maven",label:"Kotlin(Maven)",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="pom.xml"',title:'"pom.xml"'},"...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n\n<build>\n    <sourceDirectory>src/main/kotlin</sourceDirectory>\n    <testSourceDirectory>src/test/kotlin</testSourceDirectory>\n\n    <plugins>\n        <plugin>\n            <groupId>org.jetbrains.kotlin</groupId>\n            <artifactId>kotlin-maven-plugin</artifactId>\n            <version>${kotlin.version}</version>\n            <executions>\n                <execution>\n                    <id>compile</id>\n                    <phase>compile</phase>\n                    <goals>\n                        <goal>compile</goal>\n                    </goals>\n                </execution>\n                <execution>\n                    <id>test-compile</id>\n                    <phase>test-compile</phase>\n                    <goals>\n                        <goal>test-compile</goal>\n                    </goals>\n                </execution>\n            </executions>\n            <configuration>\n                <compilerPlugins>\n                    \x3c!-- \u4f7f\u7528KSP --\x3e\n                    \x3c!-- highlight-next-line --\x3e\n                    <compilerPlugin>ksp</compilerPlugin>\n                </compilerPlugins>\n            </configuration>\n            <dependencies>\n                <dependency>\n                    <groupId>com.dyescape</groupId>\n                    \x3c!-- \u4f9d\u8d56KSP\u7684Maven\u63d2\u4ef6 --\x3e\n                    \x3c!-- highlight-next-line --\x3e\n                    <artifactId>kotlin-maven-symbol-processing</artifactId>\n                    <version>1.3</version>\n                </dependency>\n                <dependency>\n                    <groupId>org.babyfish.jimmer</groupId>\n                    \x3c!-- \u5e94\u7528Jimmer\u7684KSP\u4ee3\u7801\u751f\u6210\u5668 --\x3e\n                    \x3c!-- highlight-next-line --\x3e\n                    <artifactId>jimmer-ksp</artifactId>\n                    <version>${jimmer.version}</version>\n                </dependency>\n            </dependencies>\n        </plugin>\n    </plugins>\n</build>\n\n...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n"))),(0,l.kt)(o.Z,{value:"kotin_gralde",label:"Kotlin(Gradle.kts)",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="build.gradle.kts"',title:'"build.gradle.kts"'},'plugins {\n    // \u6dfb\u52a0ksp\u63d2\u4ef6\n    id("com.google.devtools.ksp") version "1.7.10-1.0.6"\n\n    ...\u7701\u7565\u5176\u4ed6\u63d2\u4ef6...\n}\ndepdencies {\n    \n    // \u5e94\u7528jimmer\u7684ksp\u4ee3\u7801\u751f\u6210\u5668\n    // highlight-next-line\n    ksp("org.babyfish.jimmer:jimmer-ksp:${jimmerVersion}")\n\n    ...\u7701\u7565\u5176\u4ed6\u4f9d\u8d56...\n}\n\n// \u5c06\u751f\u6210\u7684\u4ee3\u7801\u6dfb\u52a0\u5230\u7f16\u8bd1\u8def\u5f84\u4e2d\u3002\n// \u6ca1\u6709\u8fd9\u4e2a\u914d\u7f6e\uff0cgradle\u547d\u4ee4\u4ecd\u7136\u53ef\u4ee5\u6b63\u5e38\u6267\u884c\uff0c\n// \u4f46\u662f, Intellij\u65e0\u6cd5\u627e\u5230\u751f\u6210\u7684\u6e90\u7801\u3002\nkotlin {\n    sourceSets.main {\n        kotlin.srcDir("build/generated/ksp/main/kotlin")\n    }\n}\n')))),(0,l.kt)("p",null,"\u5b8c\u6210\u8fd9\u6837\u7684\u914d\u7f6e\u540e\uff0c\u4f7f\u7528maven\u6216gradle\u7f16\u8bd1\u9879\u76ee\uff0c\u5373\u53ef\u6839\u636e\u7528\u6237\u7f16\u5199\u7684\u5b9e\u4f53\u7c7b\u578b\u81ea\u52a8\u751f\u6210\u66f4\u591a\u7684\u6e90\u4ee3\u7801\u3002"),(0,l.kt)("h2",{id:"\u786e\u8ba4\u4ee3\u7801\u751f\u6210\u6210\u529f"},"\u786e\u8ba4\u4ee3\u7801\u751f\u6210\u6210\u529f"),(0,l.kt)("p",null,"\u5982\u679c\u4ee3\u7801\u751f\u6210\u6210\u529f\uff0c\u5f00\u53d1\u4eba\u5458\u5728\u7f16\u8bd1\u8f93\u51fa\u76ee\u5f55\u4e2d\u5e94\u8be5\u770b\u5230\u5982\u4e0b\u6587\u4ef6\u7ed3\u6784"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Java\u7528\u6237\u5e94\u8be5\u770b\u5230\u7684\u76ee\u5f55\u7ed3\u6784"),(0,l.kt)("th",{parentName:"tr",align:null},"Kotlin\u7528\u6237\u5e94\u8be5\u770b\u5230\u7684\u76ee\u5f55\u7ed3\u6784"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{alt:"generated-java",src:t(2646).Z,width:"600",height:"1164"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{alt:"generated-kt",src:t(33289).Z,width:"610",height:"800"}))))),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u8fd9\u91cc\u7684\u622a\u56fe\u6765\u81eagradle\u9879\u76ee\u3002"),(0,l.kt)("p",{parentName:"admonition"},"maven\u9879\u76ee\u5927\u540c\u5c0f\u5f02\uff0c\u9876\u7ea7\u76ee\u5f55\u5e94\u8be5\u662ftarget\uff0c\u800c\u975ebuild")),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"\u6b63\u5e38\u60c5\u51b5\u4e0b\uff0c\u81ea\u52a8\u751f\u4ea7\u7684\u4ee3\u7801\u76ee\u5f55\uff08java/kt\u5305\u6240\u5728\u7684\u7236\u76ee\u5f55\uff09\u4f1a\u88abIntellij\u6807\u8bb0\u4e0a\u7279\u6b8a\u56fe\u6807",(0,l.kt)("img",{alt:"generated",src:t(33941).Z,width:"36",height:"32"})),(0,l.kt)("p",{parentName:"admonition"},"\u7136\u800c\uff0cIntellij\u6709\u4e00\u5b9a\u7684\u6982\u7387\u4e0d\u5bf9\u6b64\u76ee\u5f55\u8fdb\u884c\u6807\u8bb0\uff0c\u8fd9\u6837\u4f1a\u5bfc\u81f4\u751f\u6210\u7684\u4ee3\u7801\u65e0\u6cd5\u88ab\u7528\u4e8e\u540e\u7eed\u5f00\u53d1\u3002"),(0,l.kt)("p",{parentName:"admonition"},"\u5982\u679c\u9047\u5230\u6b64\u95ee\u9898\uff0c\u8bf7\u5728\u6b64\u76ee\u5f55\u4e0a\u53f3\u952e\u5f39\u51fa\u83dc\u5355\uff0c\u9009\u62e9",(0,l.kt)("inlineCode",{parentName:"p"},"Mark Directory As")," -> ",(0,l.kt)("inlineCode",{parentName:"p"},"Generated Sources Root"),"\u3002")),(0,l.kt)("p",null,"\u8fd9\u4e9b\u751f\u6210\u7684\u4ee3\u7801\u5927\u81f4\u529f\u80fd\u5982\u4e0b"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Java\u6587\u4ef6"),(0,l.kt)("th",null,"Kotlin\u6587\u4ef6"),(0,l.kt)("th",null,"\u529f\u80fd\u63cf\u8ff0"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"XXXDraft.java"),(0,l.kt)("td",null,"XXXDraft.kt"),(0,l.kt)("td",null,"\u4e0d\u53ef\u53d8\u5bf9\u8c61\u7684\u5b9e\u73b0\uff0c\u521b\u5efa\u548c\u201c\u4fee\u6539\u201d\u4e0d\u53ef\u53d8\u5bf9\u8c61\u65b9\u6cd5")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"XXXProps.java"),(0,l.kt)("td",{rowspan:"3"},"XXXProps.kt"),(0,l.kt)("td",{rowspan:"3"},"\u5f3a\u7c7b\u578bSQL DSL")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"XXXTable.java")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"XXXTableEx.java")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"XXXFetcher.java"),(0,l.kt)("td",null,"XXXFetcher.kt"),(0,l.kt)("td",null,"\u5bf9\u8c61\u6293\u53d6\u5668DSL\u3002Jimmer\u652f\u6301\u4e00\u53e5\u8bdd\u67e5\u8be2\u4efb\u610f\u590d\u6742\u7684\u6570\u636e\u7ed3\u6784\uff0c\u5bf9\u8c61\u6293\u53d6\u5668\u7528\u4e8e\u5b9a\u4e49\u8be5\u6570\u636e\u7ed3\u6784\u7684\u5f62\u72b6\u3002")))))}g.isMDXComponent=!0},2646:function(e,n,t){n.Z=t.p+"assets/images/generated-java-99f3245b74fbc82bd5889fbc2ccdeebb.png"},33289:function(e,n,t){n.Z=t.p+"assets/images/generated-kt-031b1fcfd611bd48bc3d8db9a01014ce.png"},33941:function(e,n){n.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAgCAYAAAB6kdqOAAABRGlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf87AzCDJIMRgziCemFxc4BgQ4ANUwgCjUcG3awyMIPqyLsisD7NcU4oawmvPXZXp1188cTumehTAlZJanAyk/wBxanJBUQkDA2MKkK1cXlIAYncA2SJFQEcB2XNA7HQIewOInQRhHwGrCQlyBrJvANkCyRmJQDMYXwDZOklI4ulIbKi9IMAdamQeauRuFmTiRMC1ZICS1IoSEO2cX1BZlJmeUaLgCAylVAXPvGQ9HQUjAyNjBgZQmENUf74BDktGMQ6EWNFJBgarNUDBiQixWA4Ghi1/GRj4AxBi6qxAb4UxMBzyKUgsSoQ7gPEbS3GasRGEzQ2MD9Zp//9/DmdgYNdkYPh7/f//39v///+7jIGB+RYDw4FvAAtwX7Ykzgr0AAAAbGVYSWZNTQAqAAAACAAEARoABQAAAAEAAAA+ARsABQAAAAEAAABGASgAAwAAAAEAAgAAh2kABAAAAAEAAABOAAAAAAAAAJAAAAABAAAAkAAAAAEAAqACAAQAAAABAAAAJKADAAQAAAABAAAAIAAAAAC1pKw6AAAACXBIWXMAABYlAAAWJQFJUiTwAAAA7UlEQVRYCWO0sXf8zzCIANMgcgvYKSwwB3kHRzAwMDLCuBj0r1+/GN6+eslw/9Z1hvfv3mLIU0sAEUJ4HAOyjI2NjUFSRpbB0tGNQVFVk1r2Y5iDcBCGFHYBkLu19A0YlDW0sCugUJRkB8Hs09DRp4mj4GkIZhEpNMhRIEwO2LpmOVZtZIcQVtOoIDjqIEKBOBpCoyFEKAQIyY+mIUIhRFFJjWw4rpIXWQ0x7EEXZVQLIZjvWcrnw5hE0X86E1HUDboQGnUQSvxg4YyGEJZAQRGC5zJqlSMoppPBGY0yQoE2GkJDLoQYR0c/CMQZAALKHWrkYD5bAAAAAElFTkSuQmCC"}}]);