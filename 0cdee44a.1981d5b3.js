(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(1),i=n(6),o=(n(0),n(183)),r=(n(185),{id:"2020-assembly-line-assignment-3",title:"Assignment 3",sidebar_label:"Assignment 3"}),l={id:"classes/assembly-line/2020-assembly-line-assignment-3",isDocsHomePage:!1,title:"Assignment 3",description:"Before you get started",source:"@site/docs/classes/assembly-line/assignment-3.md",permalink:"/legal-tech-class/docs/classes/assembly-line/2020-assembly-line-assignment-3",editUrl:"https://github.com/suffolklitlab/legal-tech-class/edit/master/class/docs/classes/assembly-line/assignment-3.md",sidebar_label:"Assignment 3",sidebar:"someSidebar",previous:{title:"Assignment 1",permalink:"/legal-tech-class/docs/classes/assembly-line/2020-assembly-line-assignment-1"},next:{title:"Hello, World",permalink:"/legal-tech-class/docs/classes/docacon-2020/hello-world"}},s=[{value:"Before you get started",id:"before-you-get-started",children:[]},{value:"Working with Docx Templates",id:"working-with-docx-templates",children:[{value:"What is a Docx Template?",id:"what-is-a-docx-template",children:[]},{value:"An introduction to Jinja syntax",id:"an-introduction-to-jinja-syntax",children:[]}]},{value:"Benefits of Docx templates as compared to PDFs",id:"benefits-of-docx-templates-as-compared-to-pdfs",children:[{value:"Example",id:"example",children:[]}]},{value:"Using the built-in variables from the docassembly line project in your interview",id:"using-the-built-in-variables-from-the-docassembly-line-project-in-your-interview",children:[]},{value:"Further exploration",id:"further-exploration",children:[]},{value:"Further reading",id:"further-reading",children:[]}],c={rightToc:s};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"before-you-get-started"},"Before you get started"),Object(o.b)("p",null,"Read the brief section about ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/legal-tech-class/docs/jinja2"}),"Jinja"),"."),Object(o.b)("h2",{id:"working-with-docx-templates"},"Working with Docx Templates"),Object(o.b)("p",null,"Let's take a look at a simple interview that automates a Docx template.\nThe interview has two parts: the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/legal-tech-class/docs/yaml"}),"YAML")," which contains the\ninterview and its logic, and a regular Microsoft Word document."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"---\nmandatory: True\ncode: |\n  intro\n  user_name\n  download\n---\nquestion: |\n  This interview shows how to create a Docx template\n---\nquestion: |\n  What is your name?\nfields:\n  - no label: user_name\n---\nevent: download\nquestion: |\n  Your document is ready\nsubquestion: |\n  ${hello_world}\n---\nattachment:\n  docx filename: hello_world.docx\n  variable name: hello_world \n")),Object(o.b)("p",null,"Here is what the document looks like inside:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"Hello, {{ user_name }}\n")),Object(o.b)("p",null,"In our document, we marked the variable with ",Object(o.b)("inlineCode",{parentName:"p"},"{{ user_name }}"),". The text\n",Object(o.b)("inlineCode",{parentName:"p"},"{{user_name}}")," is replaced with the name the user gives us during the\ninterview."),Object(o.b)("p",null,"There are different ways to add an\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docassemble.org/docs/documents.html#attachment"}),"attachment")," to a\nquestion. Above, we're using the style that embeds a thumbail of the document\nright in the page. We also assigned a ",Object(o.b)("inlineCode",{parentName:"p"},"variable name")," to the attachment so we\ncan re-use the same attachment in multiple places."),Object(o.b)("h3",{id:"what-is-a-docx-template"},"What is a Docx Template?"),Object(o.b)("p",null,"A docx template is an ordinary Microsoft Word file. You don't use any special\nMicrosoft Word features to turn it into a template. You just type in the special\ndocassemble codes in the right place in your file."),Object(o.b)("h3",{id:"an-introduction-to-jinja-syntax"},"An introduction to Jinja syntax"),Object(o.b)("p",null,"You can use most of the same features in a Docx template that you can use\ninside an ordinary Docassemble ",Object(o.b)("inlineCode",{parentName:"p"},"question")," block. Docx templates use a similar,\nbut slightly different syntax to what you use inside questions, called\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/legal-tech-class/docs/jinja2"}),"Jinja"),"."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Variables are marked with double curly braces, like this: ",Object(o.b)("inlineCode",{parentName:"li"},"{{ variable_name }}")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"if")," statements come in two varieties:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"in-line ",Object(o.b)("inlineCode",{parentName:"li"},"if")," statements, like this:\n",Object(o.b)("inlineCode",{parentName:"li"},"{% if is_female %}she{% elif is_male %}he{% else %}they{%endif %}")),Object(o.b)("li",{parentName:"ul"},"Paragraph-level ",Object(o.b)("inlineCode",{parentName:"li"},"if")," statements, like this:")))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"{%p if show_paragraph %}\nYou really like cheese!\n{%p endif %}\n")),Object(o.b)("p",null,"You can also use ",Object(o.b)("inlineCode",{parentName:"p"},"{% for ... %}")," and other Python control structures."),Object(o.b)("h2",{id:"benefits-of-docx-templates-as-compared-to-pdfs"},"Benefits of Docx templates as compared to PDFs"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You can completely control the formatting"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"fields")," expand to take up as much or as little space as they need"),Object(o.b)("li",{parentName:"ul"},"You can build a table one row at a time, rather than having to\ninclude code that represents each possible cell in the table."),Object(o.b)("li",{parentName:"ul"},"You can place all formatting code and conditional text in the template,\ndecluttering your interview file.  "),Object(o.b)("li",{parentName:"ul"},"Helper functions and methods can make things even simpler")),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("p",null,"Docassemble uses ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/legal-tech-class/docs/practical-guide-docassemble/object-oriented-programming"}),"objects"),",\na useful way in programming to group a bunch of related fields."),Object(o.b)("p",null,"As an example, a built-in object that we use again and again is the\nIndividual object."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"---\nobjects:\n  - tenant: Individual\n---\nmandatory: True\ncode: |\n  tenant.name.first\n  tenant.address.address\n  download\n---\nquestion: |\n  Your name\nfields:\n  - First: tenant.name.first\n  - Last: tenant.name.last\n---\nquestion: |\n  Where do you live?\nfields:\n  - Street address: tenant.address.address\n  - City: tenant.address.city\n  - State: tenant.address.state\n    choices: states_list()\n  - Zip: tenant.address.zip\n---\nevent: download\nquestion: |\n  Download your file\nattachment: \n  docx filename: address_example.docx\n")),Object(o.b)("p",null,"Inside the Docx template, we could show the address and name like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"Hello, my name is {{tenant}}.\n\n \nYours sincerely,\n\n{{ tenant.address_block()}}\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"address_block()")," is a method of an Individual object that shows the person's full\naddress block, including their name. In a PDF, we would have had to code as many\nas six different fields to show the same information."),Object(o.b)("p",null,"Above we use the second kind of attachment block, one that is part of a question. This style\nadds a fair amount of text and buttons around the attachment automatically. It also adds\nan email box by default, so that someone can send themselves a copy of the finished document."),Object(o.b)("h2",{id:"using-the-built-in-variables-from-the-docassembly-line-project-in-your-interview"},"Using the built-in variables from the docassembly line project in your interview"),Object(o.b)("p",null,"Take a look at the list of variables in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/SuffolkLITLab/doc-assembly-line/blob/master/internal_object_names.md"}),"Docassembly Line Documentation"),"."),Object(o.b)("p",null,"When you write a Docassemble interview that uses the MAVirtualCourt package,\nyou don't need to write your own questions that use these variables or the\nattributes that come along with them."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"include:\n  - docassemble.MAVirtualCourt:basic-questions.yml\n---\nmandatory: True\nevent: download\nquestion: |\n  Download your file\nattachment: \n  docx template file: vc_demo.docx\n")),Object(o.b)("p",null,"Is enough to fill-in the document below, without adding any additional questions in the YAML:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"{{ users }}             {{ courts }}\n\nv.\n                        {{user_role}}'s MOTION TO DISMISS\n\n{{ other_parties }}\n\n\nComes now the {{ user_role }} and moves that the court dismiss this action because:\n\n\n{{ users[0].signature}}\n\n{{ users[0].address_block()}}\n\nSigned {{ signature_date}}\n")),Object(o.b)("h2",{id:"further-exploration"},"Further exploration"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Add some more variables to the hello_world.docx template."),Object(o.b)("li",{parentName:"ol"},"Experiment with showing/hiding optional text based on a ",Object(o.b)("inlineCode",{parentName:"li"},"yesno")," question.")),Object(o.b)("h2",{id:"further-reading"},"Further reading"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"The ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docassemble.org/docs/documents.html#attachment"}),"attachment")," block"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docassemble.org/docs/documents.html#docx%20template%20file"}),"Docx Templates")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docassemble.org/docs/helloworld.html"}),"Docassemble tutorial")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://jinja.palletsprojects.com/en/2.11.x/"}),"Jinja reference")," (this is\nsimilar but not the exact syntax used in Docasssemble)"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docxtpl.readthedocs.io/en/latest/#jinja2-like-syntax"}),"Docx-template Jinja reference"))))}b.isMDXComponent=!0},183:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return p}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),b=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},d=function(e){var t=b(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=b(n),m=a,p=d["".concat(r,".").concat(m)]||d[m]||u[m]||o;return n?i.a.createElement(p,l({ref:t},c,{components:n})):i.a.createElement(p,l({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},184:function(e,t,n){"use strict";var a=n(0),i=n(35);t.a=function(){return Object(a.useContext)(i.a)}},185:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(184),i=n(186);function o(e,{forcePrependBaseUrl:t=!1,absolute:n=!1}={}){const{siteConfig:{baseUrl:o="/",url:r}={}}=Object(a.a)();if(!e)return e;if(t)return o+e;if(!Object(i.a)(e))return e;const l=o+e.replace(/^\//,"");return n?r+l:l}},186:function(e,t,n){"use strict";function a(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}n.d(t,"a",(function(){return a}))}}]);