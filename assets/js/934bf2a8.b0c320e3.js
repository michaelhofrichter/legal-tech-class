"use strict";(self.webpackChunkopen_class=self.webpackChunkopen_class||[]).push([[2298],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5282:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return u},default:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=n(4996),i=["components"],s={slug:"hello-world",title:"Hello, World",sidebar_label:"Hello, World"},c=void 0,d={unversionedId:"classes/docacon-2020/hello-world",id:"classes/docacon-2020/hello-world",title:"Hello, World",description:"What is Docassemble?",source:"@site/docs/classes/docacon-2020/hello-world.md",sourceDirName:"classes/docacon-2020",slug:"/classes/docacon-2020/hello-world",permalink:"/legal-tech-class/docs/classes/docacon-2020/hello-world",editUrl:"https://github.com/suffolklitlab/legal-tech-class/edit/master/class/docs/classes/docacon-2020/hello-world.md",tags:[],version:"current",frontMatter:{slug:"hello-world",title:"Hello, World",sidebar_label:"Hello, World"},sidebar:"someSidebar",previous:{title:"Assignment 3",permalink:"/legal-tech-class/docs/classes/assembly-line/2020-assembly-line-assignment-3"},next:{title:"Logic",permalink:"/legal-tech-class/docs/classes/docacon-2020/logic"}},u=[{value:"What is Docassemble?",id:"what-is-docassemble",children:[{value:"Recording from June 2020 Live Training",id:"recording-from-june-2020-live-training",children:[],level:3}],level:2},{value:"Introduction to the Docassemble Playground",id:"introduction-to-the-docassemble-playground",children:[],level:2},{value:"Hello, World",id:"hello-world",children:[{value:"Baby steps",id:"baby-steps",children:[],level:3},{value:"The mandatory specifier",id:"the-mandatory-specifier",children:[],level:3},{value:"Introducing variables",id:"introducing-variables",children:[],level:3}],level:2},{value:"Your assignment",id:"your-assignment",children:[],level:2}],p={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-is-docassemble"},"What is Docassemble?"),(0,o.kt)("p",null,"Docassemble is a system for running interactive questionnaires. It uses several\nopen source technologies, including Python, Markdown, YAML and docx-template to\nlet you concentrate on writing your interviews and writing very little code.\nYet, it's flexible enough to allow you to use advanced coding techniques when\nyou need to do so."),(0,o.kt)("h3",{id:"recording-from-june-2020-live-training"},"Recording from June 2020 Live Training"),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/Lsh_2qmTSAw",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("h2",{id:"introduction-to-the-docassemble-playground"},"Introduction to the Docassemble Playground"),(0,o.kt)("p",null,"We will use the Docassemble playground for all exercises. Log in to your\nDocassemble server. When you are loggged\nin, click on your email address, and then select the Playground option to reach the\nPlayground."),(0,o.kt)("img",{alt:"Overview of the Docassemble Playground",src:(0,l.Z)("img/playground_window.png")}),(0,o.kt)("p",null,"The Playground is made up of several elements."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The main text editing window"),(0,o.kt)("li",{parentName:"ol"},"A list of example blocks that can be directly inserted into the text editing window"),(0,o.kt)("li",{parentName:"ol"},"A list of variables and functions available in the current interview file"),(0,o.kt)("li",{parentName:"ol"},"The save and run button, used to run the interview and view results."),(0,o.kt)("li",{parentName:"ol"},"The share button which also gives you a link that can be shared ")),(0,o.kt)("h2",{id:"hello-world"},"Hello, World"),(0,o.kt)("p",null,"In computer programming, the ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/%22Hello,_World!%22_program"},"traditional first\nexercise"),' in a new\nprogramming language is to display the text "Hello, World."'),(0,o.kt)("h3",{id:"baby-steps"},"Baby steps"),(0,o.kt)("p",null,"Let's erase the text in the playground and replace it with the text below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"question: Hello, World\n")),(0,o.kt)("p",null,"Docassemble interviews contain a series of ",(0,o.kt)("inlineCode",{parentName:"p"},"specifiers")," followed by text, such\nas the ",(0,o.kt)("inlineCode",{parentName:"p"},"question")," specifier. The ",(0,o.kt)("inlineCode",{parentName:"p"},"question")," specifier tells docassemble that\nwhat follows will be the title of a screen displayed to the user."),(0,o.kt)("p",null,"When you save and then run this sample, you will notice an error."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Error\nDocassemble has finished executing all code blocks marked as initial or mandatory, and finished asking all questions marked as mandatory (if any). It is a best practice to end your interview with a question that says goodbye and offers an Exit button.\n")),(0,o.kt)("h3",{id:"the-mandatory-specifier"},"The mandatory specifier"),(0,o.kt)("p",null,"Take a minute to read the error message. In Docassemble, your interview can\ncontain many questions and branches that are never shown to the user. This error\nis telling us that ",(0,o.kt)("em",{parentName:"p"},"none")," of the questions are marked as ",(0,o.kt)("inlineCode",{parentName:"p"},"mandatory"),", or\nrequired, so Docassemble doesn't know what to display. Let's fix that."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"question: Hello, World\nmandatory: True\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"mandatory"),' specifier marks this block as required. Now when we run the\ninterview, we\'ll see the text "Hello, World" on the screen without any errors.'),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note"),": you should normally have only ONE ",(0,o.kt)("inlineCode",{parentName:"p"},"mandatory")," block in a single\ninterview. We'll discuss good practices around this later.")),(0,o.kt)("h3",{id:"introducing-variables"},"Introducing variables"),(0,o.kt)("p",null,"The purpose of Docassemble is to gather information from the users. Let's ask\nthe user's name so we can greet them personally."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"question: Hello, ${user_name}\nmandatory: True\n---\nquestion: What is your name?\nfields:\n  - Name: user_name\n")),(0,o.kt)("p",null,"We introduced several new ideas in this interview. Notice that each screen in\nthe interview is separated by three dashes, like this: ",(0,o.kt)("inlineCode",{parentName:"p"},"---"),"."),(0,o.kt)("p",null,"We introduced a new ",(0,o.kt)("inlineCode",{parentName:"p"},"specifier"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"fields"),". Instead of single line of text, this\n",(0,o.kt)("inlineCode",{parentName:"p"},"specifier")," takes a list. Each field in the list is indented and begins with a\nsingle dash, like this: ",(0,o.kt)("inlineCode",{parentName:"p"},"-"),". Each item has a label, followed by a colon,\nfollowed by the name of the variable that the user's input will be assigned to."),(0,o.kt)("p",null,"To learn more about the format of a Docassemble interview, read the section on\nthe ",(0,o.kt)("a",{parentName:"p",href:"/legal-tech-class/docs/yaml"},"YAML format"),"."),(0,o.kt)("p",null,"We also introduced ",(0,o.kt)("inlineCode",{parentName:"p"},"variables"),". A variable is simply a placeholder. ",(0,o.kt)("inlineCode",{parentName:"p"},"user_name"),"\nis a variable that is a placeholder for the user's name. Inside the Docassemble\ninterview, we can display a variable by surrounding it with ",(0,o.kt)("inlineCode",{parentName:"p"},"Mako")," tags, like\nthis: ",(0,o.kt)("inlineCode",{parentName:"p"},"${variable_name}"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note"),": We don't need to tell Docassemble to mark the second question as\nmandatory. Because the mandatory question requires the variable ",(0,o.kt)("inlineCode",{parentName:"p"},"user_name"),",\nDocassemble automatically asks the first question that provides a definition.")),(0,o.kt)("h2",{id:"your-assignment"},"Your assignment"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Modify the Hello, World exercise so that it ask for the user's first and last\nnames separately.")),(0,o.kt)("p",null,"Quinten Steenhuis, June 2020\nSam Harden, June 2020"))}m.isMDXComponent=!0}}]);