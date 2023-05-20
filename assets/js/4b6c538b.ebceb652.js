"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[2009],{2360:function(e,a,t){t.d(a,{L:function(){return v}});var r=t(7294),o=t(3012),n=t(7906),l=t(295),u=t(3252),i=t(3184),m=t(3816),s=t(5488),d=t(5162),c=t(3457),p=t(480),k=t(5071),f=t(1519),v=function(e){var a=e.type,t=e.locale,o=(0,r.useState)("OPS"!==a),n=o[0],l=o[1],u=(0,r.useCallback)((function(e,a){l(a)}),[]);return r.createElement(s.Z,null,r.createElement(d.Z,{value:"chart",label:"zh"===t?"\u56fe\u8868":"Chart",default:!0},"OPS"===a&&r.createElement(r.Fragment,null,r.createElement(c.Z,null,r.createElement(p.Z,{control:r.createElement(k.Z,{value:n,onChange:u}),label:"zh"===t?"\u663e\u793a\u539f\u751fJDBC\u6307\u6807":"Show native JDBC metrics"})),r.createElement(f.Z,null)),"OPS"==a?r.createElement(C,{rows:g,scale:h,showJdbc:n}):r.createElement(C,{rows:D,scale:J,showJdbc:n})),r.createElement(d.Z,{value:"data",label:"zh"===t?"\u6570\u636e":"Data"},"OPS"===a?r.createElement(w,{rows:g,valueTitle:"Ops/s"}):r.createElement(w,{rows:D,valueTitle:"Time(\u03bcs)"})))},C=function(e){var a=e.rows,t=e.scale,n=e.showJdbc;return r.createElement(o.Chart,{filter:n?void 0:{framework:function(e){return!e.startsWith("JDBC")}},height:400,padding:"auto",data:a,scale:t,autoFit:!0},r.createElement(o.Interval,{adjust:[{type:"dodge",marginRatio:0}],color:"framework",position:"dataCount*value"}),r.createElement(o.Axis,{name:"value",title:!0}),r.createElement(o.Legend,{position:"left"}),r.createElement(o.Tooltip,{shared:!0}),r.createElement(o.Interaction,{type:"active-region"}))},w=function(e){var a=e.rows,t=e.valueTitle;return r.createElement(n.Z,null,r.createElement(i.Z,null,r.createElement(m.Z,null,r.createElement(u.Z,null,"Framework"),r.createElement(u.Z,null,"Data count"),r.createElement(u.Z,null,t))),r.createElement(l.Z,null,a.map((function(e){return r.createElement(m.Z,{key:e.framework+"-"+e.dataCount},r.createElement(u.Z,null,e.framework),r.createElement(u.Z,null,e.dataCount),r.createElement(u.Z,null,e.value))}))))},h={dataCount:{alias:"Data count"},value:{alias:"Ops/s"}},J={dataCount:{alias:"Data count"},value:{alias:"Time(\u03bcs)"}},b=[{framework:"JDBC(ColIndex)",dataCount:"10",value:564001.2567729354},{framework:"JDBC(ColIndex)",dataCount:"20",value:480692.0049806773},{framework:"JDBC(ColIndex)",dataCount:"50",value:232400.81448051397},{framework:"JDBC(ColIndex)",dataCount:"100",value:134662.65691855497},{framework:"JDBC(ColIndex)",dataCount:"200",value:71072.13756007861},{framework:"JDBC(ColIndex)",dataCount:"500",value:30750.505197085316},{framework:"JDBC(ColIndex)",dataCount:"1000",value:14681.13949962451},{framework:"JDBC(ColName)",dataCount:"10",value:340040.8951522477},{framework:"JDBC(ColName)",dataCount:"20",value:194773.9145513743},{framework:"JDBC(ColName)",dataCount:"50",value:125966.97513243598},{framework:"JDBC(ColName)",dataCount:"100",value:55367.65334694574},{framework:"JDBC(ColName)",dataCount:"200",value:38822.98374903588},{framework:"JDBC(ColName)",dataCount:"500",value:16254.22473511859},{framework:"JDBC(ColName)",dataCount:"1000",value:8157.27625556836},{framework:"Jimmer(Java)",dataCount:"10",value:234768.53510339226},{framework:"Jimmer(Java)",dataCount:"20",value:135347.1018453932},{framework:"Jimmer(Java)",dataCount:"50",value:70747.2920672707},{framework:"Jimmer(Java)",dataCount:"100",value:35901.15112642172},{framework:"Jimmer(Java)",dataCount:"200",value:18584.529478668042},{framework:"Jimmer(Java)",dataCount:"500",value:7660.571335425491},{framework:"Jimmer(Java)",dataCount:"1000",value:3758.5644619620043},{framework:"Jimmer(Kotlin)",dataCount:"10",value:231853.04285935243},{framework:"Jimmer(Kotlin)",dataCount:"20",value:133593.8293837718},{framework:"Jimmer(Kotlin)",dataCount:"50",value:61120.85011656247},{framework:"Jimmer(Kotlin)",dataCount:"100",value:27804.709414444893},{framework:"Jimmer(Kotlin)",dataCount:"200",value:16830.479649806184},{framework:"Jimmer(Kotlin)",dataCount:"500",value:6919.78158024675},{framework:"Jimmer(Kotlin)",dataCount:"1000",value:3485.590552457007},{framework:"MyBatis",dataCount:"10",value:77973.45980995704},{framework:"MyBatis",dataCount:"20",value:43832.823890403015},{framework:"MyBatis",dataCount:"50",value:20452.94226988173},{framework:"MyBatis",dataCount:"100",value:10489.448602735492},{framework:"MyBatis",dataCount:"200",value:5146.512081854517},{framework:"MyBatis",dataCount:"500",value:1921.8943211405174},{framework:"MyBatis",dataCount:"1000",value:1059.434126831536},{framework:"Exposed",dataCount:"10",value:96616.78513212189},{framework:"Exposed",dataCount:"20",value:69563.16749094054},{framework:"Exposed",dataCount:"50",value:34146.01603428918},{framework:"Exposed",dataCount:"100",value:19736.116951748565},{framework:"Exposed",dataCount:"200",value:10248.907897197449},{framework:"Exposed",dataCount:"500",value:4261.024374795272},{framework:"Exposed",dataCount:"1000",value:2182.4893364493373},{framework:"JPA(Hibernate)",dataCount:"10",value:103156.13364887898},{framework:"JPA(Hibernate)",dataCount:"20",value:60657.86283377519},{framework:"JPA(Hibernate)",dataCount:"50",value:26729.97622160438},{framework:"JPA(Hibernate)",dataCount:"100",value:13504.199265684878},{framework:"JPA(Hibernate)",dataCount:"200",value:6850.270944007042},{framework:"JPA(Hibernate)",dataCount:"500",value:2540.475589159096},{framework:"JPA(Hibernate)",dataCount:"1000",value:1436.778709930832},{framework:"JPA(EclipseLink)",dataCount:"10",value:63771.749254104725},{framework:"JPA(EclipseLink)",dataCount:"20",value:33636.783791773945},{framework:"JPA(EclipseLink)",dataCount:"50",value:13524.821332500553},{framework:"JPA(EclipseLink)",dataCount:"100",value:6815.290869847297},{framework:"JPA(EclipseLink)",dataCount:"200",value:3232.206328003842},{framework:"JPA(EclipseLink)",dataCount:"500",value:1361.0075376064835},{framework:"JPA(EclipseLink)",dataCount:"1000",value:666.3806417880297},{framework:"JOOQ",dataCount:"10",value:57409.591343825436},{framework:"JOOQ",dataCount:"20",value:35125.83069317591},{framework:"JOOQ",dataCount:"50",value:14441.417555740112},{framework:"JOOQ",dataCount:"100",value:9954.880100551949},{framework:"JOOQ",dataCount:"200",value:3738.1415218764314},{framework:"JOOQ",dataCount:"500",value:1689.4977546444927},{framework:"JOOQ",dataCount:"1000",value:994.240300985835},{framework:"Nutz",dataCount:"10",value:82880.5218855578},{framework:"Nutz",dataCount:"20",value:48007.869458932815},{framework:"Nutz",dataCount:"50",value:17310.36987144335},{framework:"Nutz",dataCount:"100",value:8570.213250226707},{framework:"Nutz",dataCount:"200",value:5123.799062062122},{framework:"Nutz",dataCount:"500",value:1891.545739299192},{framework:"Nutz",dataCount:"1000",value:963.5871325666997},{framework:"ObjectiveSQL",dataCount:"10",value:59701.04409818739},{framework:"ObjectiveSQL",dataCount:"20",value:29487.308838276065},{framework:"ObjectiveSQL",dataCount:"50",value:12662.44231891958},{framework:"ObjectiveSQL",dataCount:"100",value:6795.016060183564},{framework:"ObjectiveSQL",dataCount:"200",value:3419.3520576008223},{framework:"ObjectiveSQL",dataCount:"500",value:1355.7026828586477},{framework:"ObjectiveSQL",dataCount:"1000",value:598.5931780214165},{framework:"Spring Data JDBC",dataCount:"10",value:20612.491148409532},{framework:"Spring Data JDBC",dataCount:"20",value:10123.095370535204},{framework:"Spring Data JDBC",dataCount:"50",value:4029.2231032104232},{framework:"Spring Data JDBC",dataCount:"100",value:1984.4450348794267},{framework:"Spring Data JDBC",dataCount:"200",value:1078.6076478516723},{framework:"Spring Data JDBC",dataCount:"500",value:411.6478839875141},{framework:"Spring Data JDBC",dataCount:"1000",value:226.5922089775573},{framework:"Ktorm",dataCount:"10",value:17717.284985056343},{framework:"Ktorm",dataCount:"20",value:10213.518906877975},{framework:"Ktorm",dataCount:"50",value:4181.627630394707},{framework:"Ktorm",dataCount:"100",value:2040.6740629521064},{framework:"Ktorm",dataCount:"200",value:1067.170484739404},{framework:"Ktorm",dataCount:"500",value:356.0009982293281},{framework:"Ktorm",dataCount:"1000",value:180.52960713759404}],g=b.map((function(e){return Object.assign({},e,{value:Math.round(e.value)})})),D=b.map((function(e){return Object.assign({},e,{value:Math.round(1e6/e.value)})}))},1695:function(e,a,t){t.r(a),t.d(a,{assets:function(){return d},contentTitle:function(){return m},default:function(){return k},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var r=t(3117),o=t(102),n=(t(7294),t(3905)),l=t(2360),u=["components"],i={sidebar_position:5,title:"Benchmark"},m=void 0,s={unversionedId:"benchmark",id:"benchmark",title:"Benchmark",description:"The source code of the benchmark is here, using H2's in-memory database, it can run directly without any environment preparation.",source:"@site/docs/benchmark.mdx",sourceDirName:".",slug:"/benchmark",permalink:"/jimmer/docs/benchmark",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/benchmark.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Benchmark"},sidebar:"tutorialSidebar",previous:{title:"Feature list",permalink:"/jimmer/docs/intro"},next:{title:"jimmer-core(Old)",permalink:"/jimmer/docs/jimmer-core/"}},d={},c=[{value:"Report",id:"report",level:2},{value:"Operation count per second",id:"operation-count-per-second",level:3},{value:"Time cost per operation",id:"time-cost-per-operation",level:3},{value:"Implementation principle",id:"implementation-principle",level:2},{value:"Value",id:"value",level:2}],p={toc:c};function k(e){var a=e.components,t=(0,o.Z)(e,u);return(0,n.kt)("wrapper",(0,r.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The source code of the benchmark is ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/babyfish-ct/jimmer/tree/main/benchmark"},"here"),", using H2's in-memory database, it can run directly without any environment preparation."),(0,n.kt)("h2",{id:"report"},"Report"),(0,n.kt)("h3",{id:"operation-count-per-second"},"Operation count per second"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The abscissa represents the count of data objects queried from the database each time."),(0,n.kt)("li",{parentName:"ul"},"The ordinate represents the operation count per second.")),(0,n.kt)(l.L,{type:"OPS",mdxType:"Benchmark"}),(0,n.kt)("h3",{id:"time-cost-per-operation"},"Time cost per operation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The abscissa represents the count of data objects queried from the database each time."),(0,n.kt)("li",{parentName:"ul"},"The ordinate represents the time cost per operation(\u03bcs).")),(0,n.kt)(l.L,{type:"TIME",mdxType:"Benchmark"}),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"This benchmark does not include ",(0,n.kt)("inlineCode",{parentName:"p"},"JPA(OpenJPA)")," as Spring has removed support for OpenJPA.")),(0,n.kt)("h2",{id:"implementation-principle"},"Implementation principle"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Disable caching for all frameworks")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"All frameworks close the log")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"All frameworks open and close connections/sessions each time without sharing; rely on the connection pool to ensure performance.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use Spring's connection management. Due to different framework APIs, the implementation methods are slightly different."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Some use ",(0,n.kt)("inlineCode",{parentName:"li"},"getConnection")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"releaseConnection")," of ",(0,n.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/jdbc/datasource/DataSourceUtils.html"},"DataSourceUtils")),(0,n.kt)("li",{parentName:"ul"},"Some use ",(0,n.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/jdbc/datasource/TransactionAwareDataSourceProxy.html"},"TransactionAwareDataSourceProxy"))),(0,n.kt)("p",{parentName:"li"},"but the end result is the same")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Don't use transactions"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"Exposed")," is special, its API enforces transactions, provide fake implementation for it.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use the embedded H2 database to compress database consumption as much as possible, highlighting the performance of ORM itself, that is, the performance of mapping."))),(0,n.kt)("h2",{id:"value"},"Value"),(0,n.kt)("p",null,"A common point of view is that the performance of ORM itself is not important. In actual projects, the database is not embedded memory database, so the time consumption of the ORM itself is negligible compared to the time consumption of the database."),(0,n.kt)("p",null,"Rebuttal: After the release of Java 19, virtual threads are supported. ORM can complete the mapping as soon as possible, allowing the JVM to schedule more virtual threads."))}k.isMDXComponent=!0}}]);