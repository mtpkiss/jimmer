"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[4163],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return u}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(t),u=o,h=m["".concat(s,".").concat(u)]||m[u]||p[u]||r;return t?a.createElement(h,i(i({ref:n},c),{},{components:t})):a.createElement(h,i({ref:n},c))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5162:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(7294),o=t(4334),r="tabItem_Ymn6";function i(e){var n=e.children,t=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:t},n)}},5488:function(e,n,t){t.d(n,{Z:function(){return u}});var a=t(3117),o=t(7294),r=t(4334),i=t(2389),l=t(7392),s=t(7094),d=t(2466),c="tabList__CuJ",p="tabItem_LNqP";function m(e){var n,t,i=e.lazy,m=e.block,u=e.defaultValue,h=e.values,N=e.groupId,g=e.className,f=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=h?h:f.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),b=(0,l.l)(y,(function(e,n){return e.value===n.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===u?u:null!=(n=null!=u?u:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:f[0].props.value;if(null!==k&&!y.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,s.U)(),x=v.tabGroupChoices,T=v.setTabGroupChoices,j=(0,o.useState)(k),w=j[0],E=j[1],O=[],S=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=N){var D=x[N];null!=D&&D!==w&&y.some((function(e){return e.value===D}))&&E(D)}var C=function(e){var n=e.currentTarget,t=O.indexOf(n),a=y[t].value;a!==w&&(S(n),E(a),null!=N&&T(N,String(a)))},I=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a,o=O.indexOf(e.currentTarget)+1;t=null!=(a=O[o])?a:O[0];break;case"ArrowLeft":var r,i=O.indexOf(e.currentTarget)-1;t=null!=(r=O[i])?r:O[O.length-1]}null==(n=t)||n.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":m},g)},y.map((function(e){var n=e.value,t=e.label,i=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:function(e){return O.push(e)},onKeyDown:I,onFocus:C,onClick:C},i,{className:(0,r.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":w===n})}),null!=t?t:n)}))),i?(0,o.cloneElement)(f.filter((function(e){return e.props.value===w}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},f.map((function(e,n){return(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==w})}))))}function u(e){var n=(0,i.Z)();return o.createElement(m,(0,a.Z)({key:String(n)},e))}},7931:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return c},default:function(){return N},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return u}});var a=t(3117),o=t(102),r=(t(7294),t(3905)),i=t(5488),l=t(5162),s=["components"],d={sidebar_position:4,title:"Dynamic Object"},c=void 0,p={unversionedId:"jimmer-core/dynamic",id:"jimmer-core/dynamic",title:"Dynamic Object",description:"Dynamic objects",source:"@site/docs/jimmer-core/dynamic.mdx",sourceDirName:"jimmer-core",slug:"/jimmer-core/dynamic",permalink:"/jimmer/docs/jimmer-core/dynamic",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/jimmer-core/dynamic.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Dynamic Object"},sidebar:"tutorialSidebar",previous:{title:"Draft Proxies",permalink:"/jimmer/docs/jimmer-core/draft"},next:{title:"Validation",permalink:"/jimmer/docs/jimmer-core/validation"}},m={},u=[{value:"Dynamic objects",id:"dynamic-objects",level:2},{value:"Jimmer and Jackson",id:"jimmer-and-jackson",level:2},{value:"Demonstration",id:"demonstration",level:2},{value:"Demonstration 1: Lonely object",id:"demonstration-1-lonely-object",level:3},{value:"Demonstration 2: Object tree",id:"demonstration-2-object-tree",level:3},{value:"CircularReferenceException",id:"circularreferenceexception",level:2},{value:"Concept",id:"concept",level:3},{value:"Example",id:"example",level:3}],h={toc:u};function N(e){var n=e.components,d=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},h,d,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"dynamic-objects"},"Dynamic objects"),(0,r.kt)("p",null,"Dynamics can describe arbitrarily complex data structures, and you can decide whether each business perspective can protect certain entities, associations, or even properties."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"shape",src:t(8793).Z,width:"1150",height:"856"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Please use a unified entity model to express the data format required by any business, instead of defining DTOs for the data format required by each business scenario")),(0,r.kt)("h2",{id:"jimmer-and-jackson"},"Jimmer and Jackson"),(0,r.kt)("p",null,"To support ORM, Jimmer improves the dynamic features of objects. Any property of an object is allowed to be missing."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Missing properties cause exceptions when accessed directly with code;"),(0,r.kt)("li",{parentName:"ul"},"Missing properties are automatically ignored during Jackson serialization and would not cause exceptions.")),(0,r.kt)("p",null,"jimmer-core defines a jackson module: ",(0,r.kt)("inlineCode",{parentName:"p"},"org.babyfish.jimmer.jackson.ImmutableModule"),", which can be used to add the ability to serialize/deserialize jimmer immutable objects for jackson."),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'ObjectMapper mapper = new ObjectMapper()\n    // highlight-next-line\n    .registerModule(new ImmutableModule());\n\nTreeNode treeNode = TreeNodeDraft.$.produce(\n    draft -> draft.setName("Root Node")\n);\n\n// Serialization\nString json = mapper.writeValueAsString(treeNode);\n\n// Deserialization\nTreeNode deserializedTreeNode = \n    mapper.readValue(json, TreeNode.class);\n'))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val mapper = ObjectMapper()\n    // highlight-next-line\n    .registerModule(ImmutableModule())\n\nval treeNode = new(TreeNode::class).by {\n    name = "Root Node"\n}\n\n// Serialization\nval json = mapper.writeValueAsString(treeNode);\n\n// Deserialization\nTreeNode deserializedTreeNode = \n    mapper.readValue(json, TreeNode::class.java);\n')))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For serialization operations, there is a convenienter way, which is the ",(0,r.kt)("inlineCode",{parentName:"p"},"toString")," method of the jimmer object.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If the user uses jimmer's spring boot starter, the setting of ",(0,r.kt)("inlineCode",{parentName:"p"},"ImmutableModule")," is fully automatic.")))),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'TreeNode treeNode = TreeNodeDraft.$.produce(\n    draft -> draft.setName("Root Node")\n);\nString json = \n    // Shortcut for JSON serialization\n    // highlight-next-line\n    treeNode.toString()\nSystem.out.println(json);\n'))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val treeNode = new(TreeNode::class).by {\n    name = "Root Node"\n}\nval json = \n    // Shortcut for JSON serialization\n    // highlight-next-line\n    treeNode.toString()\nprintln(json)\n')))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Since the code to call the ",(0,r.kt)("inlineCode",{parentName:"p"},"toString")," method is simple, the rest of the examples in this article use it instead of calling jackson's API.")),(0,r.kt)("h2",{id:"demonstration"},"Demonstration"),(0,r.kt)("p",null,"Missing properties cause exceptions when accessed directly with code: ",(0,r.kt)("inlineCode",{parentName:"p"},"org.babyfish.jimmer.UnloadedException"),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This behavior of accessing unspecified properties throws exception, similar to ORM frameworks, for example: ",(0,r.kt)("inlineCode",{parentName:"p"},"org.hibernate.LazyInitializationException"),".")),(0,r.kt)("h3",{id:"demonstration-1-lonely-object"},"Demonstration 1: Lonely object"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'TreeNode treeNode = TreeNodeDraft.$\n    .produce(current -> \n        current.setName("Current Node")\n    );\n\nSystem.out.println(\n    "JSON serialization: " + treeNode\n);\n\nSystem.out.println(\n    "this.name(): " + treeNode.name()\n);\n\ntry {\n    System.out.println(\n        "this.parent(): " + treeNode.parent()\n    );\n} catch (UnloadedException ex) {\n    System.out.println(\n        "UnloadedException message: " +\n            ex.getMessage()\n    );\n}\n\ntry {\n    System.out.println(\n        "this.childNodes(): " + treeNode.childNodes()\n    );\n} catch (UnloadedException ex) {\n    System.out.println(\n        "UnloadedException message: " +\n            ex.getMessage()\n    );\n}\n'))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val treeNode = new(TreeNode::class).by {\n    name = "Current Node"\n}\n\nprintln("JSON serialization: $treeNode")\n\nprintln("this.name: ${treeNode.name}")\n\ntry {\n    println("this.name: ${treeNode.parent}")\n} catch (ex: UnloadedException) {\n    println(\n        "UnloadedException message: " +\n            ex.message\n    )\n}\n\ntry {\n    println("this.name: ${treeNode.childNodes}")\n} catch (ex: UnloadedException) {\n    println(\n        "UnloadedException message: " +\n            ex.message\n    )\n}\n')))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The print result is as follows"),(0,r.kt)("hr",{parentName:"admonition"}),(0,r.kt)("p",{parentName:"admonition"},'JSON serialization: {"name":"Current Node"}'),(0,r.kt)("p",{parentName:"admonition"},"this.name(): Current Node"),(0,r.kt)("p",{parentName:"admonition"},'UnloadedException message: The property "yourpackage.TreeNode.parent" is unloaded'),(0,r.kt)("p",{parentName:"admonition"},'UnloadedException message: The property "yourpackage.TreeNode.childNodes" is unloaded')),(0,r.kt)("h3",{id:"demonstration-2-object-tree"},"Demonstration 2: Object tree"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'TreeNode treeNode = TreeNodeDraft.$\n    .produce(current ->\n        current\n            .setName("Current Node")\n            .applyParent(parent ->\n                    parent.setName("Parent Node")\n            )\n            .addIntoChildNodes(child ->\n                    child.setName("Child Node")\n            )\n    );\n\n\nSystem.out.println(\n    "JSON serialization: " + treeNode\n);\n\nSystem.out.println(\n    "this.name(): " + treeNode.name()\n);\n\nSystem.out.println(\n    "this.parent(): " + treeNode.parent()\n);\n\nSystem.out.println(\n    "this.childNodes(): " + treeNode.childNodes()\n);\n\n\nSystem.out.println(\n    "this.parent().name(): " +\n    treeNode.parent().name()\n);\n\ntry {\n    System.out.println(\n        "this.parent().parent(): " +\n            treeNode.parent().parent()\n    );\n} catch (UnloadedException ex) {\n    System.out.println(\n        "The message of UnloadedException of this.parent.parent: " +\n            ex.getMessage()\n    );\n}\n\ntry {\n    System.out.println(\n        "this.parent().childNodes(): " +\n            treeNode.parent().childNodes()\n    );\n} catch (UnloadedException ex) {\n    System.out.println(\n        "The message of UnloadedException of this.parent.childNodes: " +\n            ex.getMessage()\n    );\n}\n\n\nSystem.out.println(\n        "this.childNodes().get(0).name(): " +\n                treeNode.childNodes().get(0).name()\n);\n\ntry {\n    System.out.println(\n        "this.childNodes().get(0).parent(): " +\n            treeNode.childNodes().get(0).parent()\n    );\n} catch (UnloadedException ex) {\n    System.out.println(\n        "The message of UnloadedException of this.childNodes[0].parent: " +\n            ex.getMessage()\n    );\n}\n\ntry {\n    System.out.println(\n        "this.childNodes().get(0).childNodes(): " +\n            treeNode.childNodes().get(0).childNodes()\n    );\n} catch (UnloadedException ex) {\n    System.out.println(\n        "The message of UnloadedException of this.childNodes[0].childNodes: " +\n            ex.getMessage()\n    );\n}\n'))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val treeNode = new(TreeNode::class).by {\n    name = "Current Node"\n    parent().apply {\n        name = "Parent Node"\n    }\n    childNodes().addBy {\n        name = "Child Node"\n    }\n}\n\nprintln("JSON serialization: $treeNode")\n\nprintln("this.name: ${treeNode.name}")\n\nprintln("this.parent: ${treeNode.parent}")\n\nprintln("this.childNodes: ${treeNode.childNodes}")\n\nprintln("this.parent.name: ${treeNode.parent?.name}")\n\ntry {\n    println("this.parent.parent: ${treeNode.parent?.parent}")\n} catch (ex: UnloadedException) {\n    println(\n        "The message of UnloadedException of this.parent.parent: " +\n            ex.message\n    )\n}\n\ntry {\n    println("this.parent.childNodes: ${treeNode.parent?.childNodes}")\n} catch (ex: UnloadedException) {\n    println(\n        "The message of UnloadedException of this.parent.childNodes: " +\n            ex.message\n    )\n}\n\n\nprintln("this.childNodes[0].name: ${treeNode.childNodes[0].name}")\n\ntry {\n    println("this.childNodes[0].parent: ${treeNode.childNodes[0].parent}")\n} catch (ex: UnloadedException) {\n    println(\n        "The message of UnloadedException of this.childNodes[0].parent: " +\n            ex.message\n    )\n}\n\ntry {\n    println("this.childNodes[0].childNodes: ${treeNode.childNodes[0].childNodes}")\n} catch (ex: UnloadedException) {\n    println(\n        "The message of UnloadedException of this.childNodes[0].childNodes: " +\n            ex.message\n    )\n}\n')))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The print result is as follows"),(0,r.kt)("hr",{parentName:"admonition"}),(0,r.kt)("p",{parentName:"admonition"},'JSON serialization: {"name":"Current Node","parent":{"name":"Parent Node"},"childNodes":','[{"name":"Child Node"}]',"}"),(0,r.kt)("p",{parentName:"admonition"},"this.name(): Current Node"),(0,r.kt)("p",{parentName:"admonition"},'this.parent(): {"name":"Parent Node"}'),(0,r.kt)("p",{parentName:"admonition"},"this.childNodes(): ",'[{"name":"Child Node"}]'),(0,r.kt)("p",{parentName:"admonition"},"this.parent().name(): Parent Node"),(0,r.kt)("p",{parentName:"admonition"},'The message of UnloadedException of this.parent.parent: The property "yourpackage.TreeNode.parent" is unloaded'),(0,r.kt)("p",{parentName:"admonition"},'The message of UnloadedException of this.parent.childNodes: The property "yourpackage.TreeNode.childNodes" is unloaded'),(0,r.kt)("p",{parentName:"admonition"},"this.childNodes().get(0).name(): Child Node"),(0,r.kt)("p",{parentName:"admonition"},"The message of UnloadedException of this.childNodes","[0]",'.parent: The property "yourpackage.TreeNode.parent" is unloaded'),(0,r.kt)("p",{parentName:"admonition"},"The message of UnloadedException of this.childNodes","[0]",'.childNodes: The property "yourpackage.TreeNode.childNodes" is unloaded')),(0,r.kt)("h2",{id:"circularreferenceexception"},"CircularReferenceException"),(0,r.kt)("h3",{id:"concept"},"Concept"),(0,r.kt)("p",null,"In the process of information management software development, HTTP APIs often interact with object trees that only contain one-way associations, people will not use two-way associations even though the JSON serialization technology used has some corresponding ability."),(0,r.kt)("p",null,"Therefore, DTOs are important when designing module API, because the DTOs required by each business clearly define the aggregate root. DTO design becomes a prerequisite for business design and development."),(0,r.kt)("p",null,"Immutable objects in Jimmer are dynamic. Although two-way associations can be defined in the design of ORM entity types, Jimmer ensures that there are only one-way associations between object instances when creating objects for specific business scenarios, and any attempt to establish a two-way association will result in exceptions."),(0,r.kt)("p",null,"That is, the design of the aggregate root is deferred from the design of the system API until the object is created in a specific business scenario. It is no longer necessary to design and develop based on DTO, and it is possible to completely use entity objects as the basis for development, which makes the development process natural."),(0,r.kt)("p",null,"Of course, such a design concept does not deny the value of DTO. If you think it is safer and clearer to design external APIs with static DTOs than with dynamic entities, you can still use DTOs to encapsulate a layer. This is a useful but not required option."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'TreeNode aggregateRoot = TreeNodeDraft.$\n    .produce(aggregateRootDraft ->\n        aggregateRootDraft\n            .setName("Aggregate root")\n            .addIntoChildNodes(childDraft ->\n                childDraft\n                    .setName("Child")\n                    // CircularReferenceException will be thrown\n                    // highlight-next-line\n                    .setParent(aggregateRootDraft)\n            )\n    );\n'))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val aggregateRoot = new(TreeNode::class).by {\n\n    val that = this\n\n    name = "Aggregate root"\n    childNodes().addBy {\n        name = "Child"\n        // CircularReferenceException will be thrown\n        // highlight-next-line\n        parent = that\n    }\n}\n')))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This code causes exception: org.babyfish.jimmer.CircularReferenceException.")))}N.isMDXComponent=!0},8793:function(e,n,t){n.Z=t.p+"assets/images/shape-877c9a8df8953a5c8b7e0af6f45b8bea.png"}}]);