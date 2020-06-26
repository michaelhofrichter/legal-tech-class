(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{135:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(6),o=(n(0),n(188)),i={},s={id:"classes/docacon-2020/question-types",isDocsHomePage:!1,title:"question-types",description:"So far we've only looked at one type of question - single text. Docassemble",source:"@site/docs/classes/docacon-2020/question-types.md",permalink:"/legal-tech-class/docs/classes/docacon-2020/question-types",editUrl:"https://github.com/suffolklitlab/legal-tech-class/edit/master/class/docs/classes/docacon-2020/question-types.md"},l=[{value:"The example block is your friend",id:"the-example-block-is-your-friend",children:[{value:"Using multiple fields in the same question",id:"using-multiple-fields-in-the-same-question",children:[]},{value:"Restricting the user to a specific type of answer",id:"restricting-the-user-to-a-specific-type-of-answer",children:[]},{value:"Creating true-false questions",id:"creating-true-false-questions",children:[]},{value:"Multiple choice questions",id:"multiple-choice-questions",children:[]}]},{value:"Your assignment",id:"your-assignment",children:[]}],c={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"So far we've only looked at one type of question - single text. Docassemble\ncomes pre-loaded with many different question types that give you options\non how to ask users for information, as well as how to present options to\nyour users. "),Object(o.b)("h2",{id:"the-example-block-is-your-friend"},"The example block is your friend"),Object(o.b)("p",null,"At the bottom of the Playground there's a segment called ",Object(o.b)("inlineCode",{parentName:"p"},"Example blocks"),".\nThis many examples of common structures and methods used in creating\nDocassemble interviews, and is the best reference guide for starting out,\nand even if you've been using Docassemble for a while. "),Object(o.b)("h3",{id:"using-multiple-fields-in-the-same-question"},"Using multiple fields in the same question"),Object(o.b)("p",null,"What if we want to ask the user for multiple pieces of information using only\na single question?"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"question: |\n  What are your favorite things to eat?\nsubquestion: |\n  Please be specific.\nfields:\n  - Vegetable: fav_veggie\n  - Fruit: fav_fruit\n  - Mineral: fav_mineral\n")),Object(o.b)("h3",{id:"restricting-the-user-to-a-specific-type-of-answer"},"Restricting the user to a specific type of answer"),Object(o.b)("p",null,"What if we want the user to only answer with a number, a date, or an email address?\nUse the ",Object(o.b)("inlineCode",{parentName:"p"},"datatype")," specifier:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"question: |\n  Please answer my questions:\nsubquestion: |\n  Please be specific.\nfields:\n  - Dollar value: big_bucks\n    datatype: currency\n  - Favorite round number: big_number\n    datatype: integer\n  - Favorite decimal number: deci_number\n    datatype: number\n  - Your birthday: user_bday\n    datatype: date\n  - Your email: user_email\n    datatype: email\n")),Object(o.b)("h3",{id:"creating-true-false-questions"},"Creating true-false questions"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"yesno")," question type is an easy way to have users set a\nvariable to true or false:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"question: |\n  Are you at least 18 years of age?\nyesno: over_eighteen\n")),Object(o.b)("h3",{id:"multiple-choice-questions"},"Multiple choice questions"),Object(o.b)("p",null,"Docassemble gives you different ways to present multiple choice questions. "),Object(o.b)("p",null,"Radio buttons:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"question: |\n  What type of shoes do you wear?\nfield: target_variable\nchoices:\n  - Sneakers\n  - Sandals\n  - Clogs\n  - Other\n")),Object(o.b)("p",null,"Dropdown:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"question: |\n  What type of shoes do you wear?\nfield: target_variable\ndropdown:\n  - Sneakers\n  - Sandals\n  - Clogs\n  - Other\n")),Object(o.b)("p",null,"Combobox:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"question: |\n  What is your favorite color?\nfields:\n  - Color: favorite_color\n    input type: combobox\n    choices: \n      - Red\n      - Green\n      - Purple\n")),Object(o.b)("h2",{id:"your-assignment"},"Your assignment"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Modify your Hello, World exercise so that it uses three different question types.")))}u.isMDXComponent=!0},188:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(f,s({ref:t},c,{components:n})):a.a.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);