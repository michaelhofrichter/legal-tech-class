(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{170:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=b(n),p=a,m=u["".concat(o,".").concat(p)]||u[p]||d[p]||i;return n?r.a.createElement(m,s(s({ref:t},c),{},{components:n})):r.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},171:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var a=n(22),r=n(172);function i(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,o=i.forcePrependBaseUrl,s=void 0!==o&&o,l=i.absolute,c=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(s)return t+n;var b=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+b:b}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},172:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),i=(n(0),n(170)),o=n(171),s={slug:"2020-law-smart-machines-assignment-1",title:"Assignment 1",sidebar_label:"Assignment 1"},l={unversionedId:"classes/2020-law-smart-machines-assignment-1",id:"classes/2020-law-smart-machines-assignment-1",isDocsHomePage:!1,title:"Assignment 1",description:"Before you get started",source:"@site/docs/classes/2020-law-smart-machines-assignment-1.md",slug:"/classes/2020-law-smart-machines-assignment-1",permalink:"/legal-tech-class/docs/classes/2020-law-smart-machines-assignment-1",editUrl:"https://github.com/suffolklitlab/legal-tech-class/edit/master/class/docs/classes/2020-law-smart-machines-assignment-1.md",version:"current",sidebar_label:"Assignment 1",sidebar:"someSidebar",previous:{title:"Project Ideas",permalink:"/legal-tech-class/docs/classes/project-ideas"},next:{title:"Assignment 2: Object-oriented programming\n",permalink:"/legal-tech-class/docs/classes/2020-law-smart-machines-assignment-2"}},c=[{value:"Before you get started",id:"before-you-get-started",children:[]},{value:"Introduction to the Docassemble Playground",id:"introduction-to-the-docassemble-playground",children:[]},{value:"Hello, World",id:"hello-world",children:[{value:"Baby steps",id:"baby-steps",children:[]},{value:"The mandatory specifier",id:"the-mandatory-specifier",children:[]},{value:"Introducing variables",id:"introducing-variables",children:[]},{value:"Introducing logic",id:"introducing-logic",children:[]}]},{value:"Your assignment",id:"your-assignment",children:[]},{value:"Turning in your work",id:"turning-in-your-work",children:[]}],b={toc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"before-you-get-started"},"Before you get started"),Object(i.b)("p",null,"We will discuss the first few sections of this assignment in class. To refresh your memory and reflect on your own, I recommend skimming the Overview of Docassemble, Description of ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/legal-tech-class/docs/yaml"}),"YAML"),", and the section describing ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/legal-tech-class/docs/mako"}),"Mako"),". If you run into any trouble, please ask for help on the class Slack channel."),Object(i.b)("h2",{id:"introduction-to-the-docassemble-playground"},"Introduction to the Docassemble Playground"),Object(i.b)("p",null,"We will use the Docassemble playground for all exercises. Log in to the Docassemble server at ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://interviews.lemmalegal.com."}),"https://interviews.lemmalegal.com.")," When you are loggged in, click on your name, and then select the Playground option to reach the Playground."),Object(i.b)("img",{alt:"Overview of the Docassemble Playground",src:Object(o.a)("img/playground_window.png")}),Object(i.b)("p",null,"The Playground is made up of several elements."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"The main text editing window"),Object(i.b)("li",{parentName:"ol"},"A list of example blocks that can be directly inserted into the text editing window"),Object(i.b)("li",{parentName:"ol"},"A list of variables and functions available in the current interview file"),Object(i.b)("li",{parentName:"ol"},"The save and run button, used to run the interview and view results."),Object(i.b)("li",{parentName:"ol"},"The share button which also gives you a link that can be shared ")),Object(i.b)("h2",{id:"hello-world"},"Hello, World"),Object(i.b)("p",null,"In computer programming, the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/%22Hello,_World!%22_program"}),"traditional first exercise"),' in a new programming language is to display the text "Hello, World."'),Object(i.b)("h3",{id:"baby-steps"},"Baby steps"),Object(i.b)("p",null,"Let's erase the text in the playground and replace it with the text below:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"question: Hello, World\n")),Object(i.b)("p",null,"Docassemble interviews contain a series of ",Object(i.b)("inlineCode",{parentName:"p"},"specifiers")," followed by text, such as the ",Object(i.b)("inlineCode",{parentName:"p"},"question")," specifier. The ",Object(i.b)("inlineCode",{parentName:"p"},"question")," specifier tells docassemble that what follows will be the title of a screen displayed to the user."),Object(i.b)("p",null,"When you save and then run this sample, you will notice an error."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"Error\nDocassemble has finished executing all code blocks marked as initial or mandatory, and finished asking all questions marked as mandatory (if any). It is a best practice to end your interview with a question that says goodbye and offers an Exit button.\n")),Object(i.b)("h3",{id:"the-mandatory-specifier"},"The mandatory specifier"),Object(i.b)("p",null,"Take a minute to read the error message. In Docassemble, your interview can contain many questions and branches that are never shown to the user. This error is telling us that ",Object(i.b)("em",{parentName:"p"},"none")," of the questions are marked as ",Object(i.b)("inlineCode",{parentName:"p"},"mandatory"),", or required, so Docassemble doesn't know what to display. Let's fix that."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"question: Hello, World\nmandatory: True\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"mandatory"),' specifier marks this block as required. Now when we run the interview, we\'ll see the text "Hello, World" on the screen without any errors.'),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Note"),": you should normally have only ONE ",Object(i.b)("inlineCode",{parentName:"p"},"mandatory")," block in a single interview. We'll discuss good practices around this later.")),Object(i.b)("h3",{id:"introducing-variables"},"Introducing variables"),Object(i.b)("p",null,"The purpose of Docassemble is to gather information from the users. Let's ask the user's name so we can greet them personally."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"question: Hello, ${user_name}\nmandatory: True\n---\nquestion: What is your name?\nfields:\n  - Name: user_name\n")),Object(i.b)("p",null,"We introduced several new ideas in this interview. Notice that each screen in the interview is separated by three dashes, like this: ",Object(i.b)("inlineCode",{parentName:"p"},"---"),"."),Object(i.b)("p",null,"We introduced a new ",Object(i.b)("inlineCode",{parentName:"p"},"specifier"),", ",Object(i.b)("inlineCode",{parentName:"p"},"fields"),". Instead of single line of text, this ",Object(i.b)("inlineCode",{parentName:"p"},"specifier")," takes a list. Each field in the list is indented and begins with a single dash, like this: ",Object(i.b)("inlineCode",{parentName:"p"},"-"),". Each item has a label, followed by a colon, followed by the name of the variable that the user's input will be assigned to."),Object(i.b)("p",null,"To learn more about the format of a Docassemble interview, read the section on the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/legal-tech-class/docs/yaml"}),"YAML format"),"."),Object(i.b)("p",null,"We also introduced ",Object(i.b)("inlineCode",{parentName:"p"},"variables"),". A variable is simply a placeholder. ",Object(i.b)("inlineCode",{parentName:"p"},"user_name")," is a variable that is a placeholder for the user's name. Inside the Docassemble interview, we can display a variable by surrounding it with ",Object(i.b)("inlineCode",{parentName:"p"},"Mako")," tags, like this: ",Object(i.b)("inlineCode",{parentName:"p"},"${variable_name}"),"."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Note"),": We don't need to tell Docassemble to mark the second question as mandatory. Because the mandatory question requires the variable ",Object(i.b)("inlineCode",{parentName:"p"},"user_name"),", Docassemble automatically asks the first question that provides a definition.")),Object(i.b)("h3",{id:"introducing-logic"},"Introducing logic"),Object(i.b)("p",null,"Docassemble uses ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/legal-tech-class/docs/mako"}),"Mako")," tags to control displaying variables and basic logic inside the interview file. Let's try out using an ",Object(i.b)("inlineCode",{parentName:"p"},"if")," statement: the most basic building block of logic."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"question: Hello, ${user_name}\nsubquestion: |\n  % if user_name == 'Bob':\n  My uncle's name is Bob too!\n  % endif\nmandatory: True\n---\nquestion: What is your name?\nfields:\n  - Name: user_name\n")),Object(i.b)("p",null,"In this iteration, we introduce the ",Object(i.b)("inlineCode",{parentName:"p"},"line continuation")," marker, ",Object(i.b)("inlineCode",{parentName:"p"},"|"),". This allows us to have more than one line of text in a row that is part of the same field. Text that follows the ",Object(i.b)("inlineCode",{parentName:"p"},"line continuation")," marker is always indented. Usually, we use two spaces as indentation."),Object(i.b)("p",null,"We also introduce the ",Object(i.b)("inlineCode",{parentName:"p"},"subquestion")," specifier. A ",Object(i.b)("inlineCode",{parentName:"p"},"subquestion")," is displayed in a smaller font than the main ",Object(i.b)("inlineCode",{parentName:"p"},"question")," text."),Object(i.b)("p",null,"A ",Object(i.b)("inlineCode",{parentName:"p"},"Mako")," ",Object(i.b)("inlineCode",{parentName:"p"},"if")," statement is written on its own line. Notice that the line ",Object(i.b)("em",{parentName:"p"},"must")," end in a ",Object(i.b)("inlineCode",{parentName:"p"},":"),". Also notice that when we check the value of a variable, we need to use a double ",Object(i.b)("inlineCode",{parentName:"p"},"=="),", not ",Object(i.b)("inlineCode",{parentName:"p"},"="),". We also need to tell Docassemble when the optional text ends and the main text starts back up with the ",Object(i.b)("inlineCode",{parentName:"p"},"endif")," keyword."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Note"),":  ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/legal-tech-class/docs/yaml"}),"YAML")," is picky about indentation. If you run into an error, check to make sure each line is indented the same way as the example above.")),Object(i.b)("h2",{id:"your-assignment"},"Your assignment"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Modify the Hello, World exercise so that it ask for the user's first and last names separately.")),Object(i.b)("h2",{id:"turning-in-your-work"},"Turning in your work"),Object(i.b)("p",null,'Please use the course Blackboard to turn in your work this week. I would like you to provide me a link so that I can run your interview, and a copy of the interview code. To obtain the link, use the green "Share" button. Right-click and Copy link. Use the "Download" button to download a copy of your YAML. Turn both of these in by 5:30 PM on Wednesday.'))}u.isMDXComponent=!0}}]);