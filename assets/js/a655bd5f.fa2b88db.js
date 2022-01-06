"use strict";(self.webpackChunkopen_class=self.webpackChunkopen_class||[]).push([[2626],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5406:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={slug:"representing-rules",title:"Representing Law as Code",sidebar_label:"Representing Law as Code"},l=void 0,c={unversionedId:"representing-rules/representing-rules",id:"representing-rules/representing-rules",title:"Representing Law as Code",description:"How do we take legal rules, in all of their ambiguity, and turn them into computer code?",source:"@site/docs/representing-rules/representing-rules.md",sourceDirName:"representing-rules",slug:"/representing-rules/representing-rules",permalink:"/legal-tech-class/docs/representing-rules/representing-rules",editUrl:"https://github.com/suffolklitlab/legal-tech-class/edit/master/class/docs/representing-rules/representing-rules.md",tags:[],version:"current",frontMatter:{slug:"representing-rules",title:"Representing Law as Code",sidebar_label:"Representing Law as Code"},sidebar:"someSidebar",previous:{title:"Lorem Ipsum",permalink:"/legal-tech-class/docs/testing/lorem-ipsum"},next:{title:"Introduction to Docassemble",permalink:"/legal-tech-class/docs/introduction-to-docassemble"}},u=[{value:"Limits to translation",id:"limits-to-translation",children:[],level:2},{value:"Case based reasoning",id:"case-based-reasoning",children:[],level:2},{value:"External logic",id:"external-logic",children:[],level:2},{value:"Making the implicit explicit",id:"making-the-implicit-explicit",children:[],level:2},{value:"Moving away from the flowchart",id:"moving-away-from-the-flowchart",children:[],level:2},{value:"Explorations in rules as code",id:"explorations-in-rules-as-code",children:[],level:2},{value:"Further reading",id:"further-reading",children:[],level:2},{value:"Contributors and acknowledgments",id:"contributors-and-acknowledgments",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'How do we take legal rules, in all of their ambiguity, and turn them into computer code?\nComputers are literal. As we used to say, "garbage-in, garbage out." When translating law\nto code, we turning something liminal into 1s and 0s. Sometimes great ambiguity is hidden\nin a comma or a word like "reasonable."'),(0,i.kt)("p",null,"Talking to a subject matter expert to transform a rule into code can be tricky. Lawyers are\ntrained to apply law to facts. When turning a rule into code, we need to apply a law to\nall possible sets of facts at once. This is an exercise that requires a different kind\nof legal thinking."),(0,i.kt)("p",null,"When creating an expert system, it's easy to mix code that represents rules with code\nthat controls the formatting and display of the different screens or the final output.\nThis can lead to a hard to debug mess. Mistakes in translation might be hard to catch\nwithout careful attention."),(0,i.kt)("p",null,"Both of these concerns--translating, and making our code that translates law understandable--\nare at the forefront of the legal rule representation problem."),(0,i.kt)("p",null,"The area of computational research that explores this can be generally described as ",(0,i.kt)("strong",{parentName:"p"},"Rules\nas Code"),"."),(0,i.kt)("h2",{id:"limits-to-translation"},"Limits to translation"),(0,i.kt)("h2",{id:"case-based-reasoning"},"Case based reasoning"),(0,i.kt)("h2",{id:"external-logic"},"External logic"),(0,i.kt)("p",null,"Externalizing logical rules, so that they are no longer mixed with interview or template logic, can help reduce these problems. Various authors have made efforts to represent logical rules in a platform-independent way. Some authors have used Google Sheets to represent rules. In the case of HotDocs, such rules need to be compiled into code, but Docassemble can make direct use of those rules. Neota Logic also allows for external representations of logical rules."),(0,i.kt)("p",null,"Jason Morris has adapted the Legal Case Based Analogical Reasoning Tool to create applications with logic independent of a specific interview, reasoning by analogy to previous cases, and directly usable within a Docassemble interview."),(0,i.kt)("p",null,"From the business process world, the Decision Model and Notation (DMN) representation can express complex logical rules. Rules expressed as DMNs could be directly integrated into systems such as Docassemble, or compiled into code for other platforms. This is a promising avenue for improving interactive legal application quality and maintainability. Dimyadi et al. ","[7]"," report one successful effort along these lines."),(0,i.kt)("p",null,"Another interesting approach to specifying legal rules is to write them as functions or object-oriented classes with abstract interfaces. Rather than embody the logic inside an interview, then, the interview can just present the relevant variables as parameters to the function, and let the function tell you whether the rule applies or not. The code still must be written by a developer and reviewed by a subject matter expert. The main advantage is when the same legal rules are used in multiple interviews. This approach would also assist authors in developing unit tests to avoid regressions as an interview is amended over time."),(0,i.kt)("h2",{id:"making-the-implicit-explicit"},"Making the implicit explicit"),(0,i.kt)("p",null,"Proscriptively, in the planning and implementation phase, authors should use methods to inventory and codify the legal and business rules that the system will be implementing. Often the legal rules may derive from a body of case law and statutes, but subject matter experts should translate any rules that the system will follow into plain English, in a form analogous to a syllogism (IF A and B, then C) . Then it can be the author\u2019s project to translate those rules into computer code. Methods of externally expressing the legal rules that can be directly used by the reasoning engine discussed above will cut down on translation errors to the extent that they can reviewed or authored by the SME more easily than traditional code can be. This is likely to be an iterative process. Business rules that are familiar to the subject matter expert through their daily practice may be unwritten or invisible, but become clear when the automated system is used."),(0,i.kt)("p",null,"The same care and attention must be given to the information that is not expressed in a rule, but is still delivered to the user, through help texts or materials produced for the user. Such texts should be written and reviewed completely by the SME, with editing for plain language and usability also subject to SME review. If alternate information is delivered to the end-user, rules should be written to clearly express in which circumstance a given set is delivered. This information can be referenced in comments. "),(0,i.kt)("h2",{id:"moving-away-from-the-flowchart"},"Moving away from the flowchart"),(0,i.kt)("p",null,"Visual representations of interview paths can be useful, but a flowchart representing an interview with hundreds of paths will often be harder to read than the code. Legal applications can be visualized as finite state automatons, but this representation may not be useful when it is too hard to translate from this state into working code or difficult for a subject matter expert to review."),(0,i.kt)("h2",{id:"explorations-in-rules-as-code"},"Explorations in rules as code"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Decision_table"},"Decision Tables")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Legal_XML"},"Oasis Legal XML")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation"},"BPMN/DMN")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blawx.com"},"Blawx"))),(0,i.kt)("h2",{id:"further-reading"},"Further reading"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Rules as Code: ",(0,i.kt)("a",{parentName:"li",href:"https://www.lawpracticetoday.org/article/rules-code/"},"https://www.lawpracticetoday.org/article/rules-code/")," (",(0,i.kt)("a",{parentName:"li",href:"https://perma.cc/NFS4-P7ZY"},"https://perma.cc/NFS4-P7ZY"),")")),(0,i.kt)("h2",{id:"contributors-and-acknowledgments"},"Contributors and acknowledgments"),(0,i.kt)("p",null,"Excerpted in part from Marc Lauritsen and Quinten Steenhuis. 2019. Substantive Legal Software Quality: A Gathering Storm?. In\n",(0,i.kt)("em",{parentName:"p"},"Proceedings of the Seventeenth International Conference on Artificial Intelligence and Law (ICAIL '19)"),". ACM, New\nYork, NY, USA, 52-62. DOI: ",(0,i.kt)("a",{parentName:"p",href:"https://doi.org/10.1145/3322640.3326706"},"https://doi.org/10.1145/3322640.3326706"),". Available online at ",(0,i.kt)("a",{parentName:"p",href:"http://www.capstonepractice.com/s/Substantive-Legal-Software-Quality-A-Gathering-Storm.pdf"},"http://www.capstonepractice.com/s/Substantive-Legal-Software-Quality-A-Gathering-Storm.pdf")))}d.isMDXComponent=!0}}]);