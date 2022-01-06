"use strict";(self.webpackChunkopen_class=self.webpackChunkopen_class||[]).push([[7530],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(l,".").concat(d)]||p[d]||h[d]||r;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},614:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return h},default:function(){return d}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=n(4996),s=["components"],l={slug:"assignment-branch-logic",title:"Assignment 3: Branching logic\n",sidebar_label:"Assignment 3"},u=void 0,c={unversionedId:"classes/assignment-branch-logic",id:"classes/assignment-branch-logic",title:"Assignment 3: Branching logic\n",description:"Walking Down the Path: Branching Logic",source:"@site/docs/classes/assignment-branch-logic.md",sourceDirName:"classes",slug:"/classes/assignment-branch-logic",permalink:"/legal-tech-class/docs/classes/assignment-branch-logic",editUrl:"https://github.com/suffolklitlab/legal-tech-class/edit/master/class/docs/classes/assignment-branch-logic.md",tags:[],version:"current",frontMatter:{slug:"assignment-branch-logic",title:"Assignment 3: Branching logic\n",sidebar_label:"Assignment 3"},sidebar:"someSidebar",previous:{title:"Assignment 2",permalink:"/legal-tech-class/docs/classes/2020-law-smart-machines-assignment-2"},next:{title:"Assignment 4",permalink:"/legal-tech-class/docs/classes/assignment-creating-document"}},h=[{value:"Walking Down the Path: Branching Logic",id:"walking-down-the-path-branching-logic",children:[],level:2},{value:"Example",id:"example",children:[{value:"Thinking through outcomes",id:"thinking-through-outcomes",children:[],level:3},{value:"What do you need to know?",id:"what-do-you-need-to-know",children:[],level:3},{value:"If this, then that",id:"if-this-then-that",children:[],level:3},{value:"More branches!",id:"more-branches",children:[],level:3},{value:"Assignment 3",id:"assignment-3",children:[],level:3}],level:2},{value:"Turn in your work",id:"turn-in-your-work",children:[],level:2},{value:"Contributors",id:"contributors",children:[],level:2}],p={toc:h};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"walking-down-the-path-branching-logic"},"Walking Down the Path: Branching Logic"),(0,r.kt)("img",{alt:"Woman at crossroads",src:(0,i.Z)("img/einar-storsul-K3W7I7x37Xk-unsplash.jpg")}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Photo by Einar Storsul on Unsplash")),(0,r.kt)("p",null,"Very simple interviews might just ask a user some questions and spit out some result. Most interviews, though, will want to change what the questions they ask and the results they show based on a user's answers."),(0,r.kt)("p",null,"Our code has to make a choice and, until the AI take over, we have to give it very specific instructions about how to make that choice. That's often called ",(0,r.kt)("em",{parentName:"p"},"branching logic"),". Probably because of trees."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://imgs.xkcd.com/comics/automation.png",alt:null})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Panel by Randall Munroe from xkcd.com")),(0,r.kt)("p",null,"Suppose you have a friend who comes to you for advice. They were invited to a party, but they're not sure if they should go. You give them advice, your friend is happy, and now you have lots of friends, and even strangers coming to you looking for advice on the same topic. You decide ",(0,r.kt)("a",{parentName:"p",href:"https://xkcd.com/1319/"},"code is the answer")," and you'll write a simple form to help them out."),(0,r.kt)("p",null,"You start simple."),(0,r.kt)("h3",{id:"thinking-through-outcomes"},"Thinking through outcomes"),(0,r.kt)("p",null,"What outcomes will our flowchart have? "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to the party"),(0,r.kt)("li",{parentName:"ol"},"Stay home")),(0,r.kt)("p",null,"We'll need two ",(0,r.kt)("strong",{parentName:"p"},"ending")," screens. You make endings screens with an ",(0,r.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/questions.html#event"},(0,r.kt)("inlineCode",{parentName:"a"},"event")," specifier")," in a ",(0,r.kt)("inlineCode",{parentName:"p"},"question")," block. Unlike regular question screens, your user isn't going to give an answer here, so there's no variable for Docassemble to find. The ",(0,r.kt)("inlineCode",{parentName:"p"},"event")," specifier tells Docassemble how to find the question without needing a variable name."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nevent: dont_go_to_party\nquestion: |\n  Don't go to that dumb party. Do something fun instead!\nsubquestion: |\n  [FILE https://media.giphy.com/media/3j7lxEPPFseD0xvhPi/giphy.gif]\n---\nevent: go_to_party\nquestion: |\n  You should go to the party! I promise it'll be awesome!\nsubquestion: |\n  [FILE https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif]\n")),(0,r.kt)("h3",{id:"what-do-you-need-to-know"},"What do you need to know?"),(0,r.kt)("p",null,"Well, without user research, you don't really know what good questions would be. You don't have funding or time to do that discovery work, though, but you don't care that much about those strangers and it's not like they have other options, so you'll start by making a guess and worry about it later."),(0,r.kt)("p",null,"Do they even like parties? That seems like a place to start."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nquestion: |\n  Do you like parties?\nfields:\n  - no label: user_likes_parties\n    datatype: yesnoradio\n")),(0,r.kt)("p",null,"Docassemble will show two buttons on this question screen. If the user clicks 'Yes', ",(0,r.kt)("inlineCode",{parentName:"p"},"user_likes_parties")," will have a value of ",(0,r.kt)("inlineCode",{parentName:"p"},"True"),". If they click 'No', it will have a value of ",(0,r.kt)("inlineCode",{parentName:"p"},"False"),". We can use that to help our program decide what to do. ",(0,r.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/fields.html#fields%20yesno"},"Read more about yes/no fields"),"."),(0,r.kt)("h3",{id:"if-this-then-that"},"If this, then that"),(0,r.kt)("p",null,"We'll use what's called an ",(0,r.kt)("inlineCode",{parentName:"p"},"if")," statement. It tells our program, 'if the situation is this, then do that.'"),(0,r.kt)("p",null,"We already learned about using ",(0,r.kt)("inlineCode",{parentName:"p"},"if")," statements inside a ",(0,r.kt)("inlineCode",{parentName:"p"},"question")," block. The ",(0,r.kt)("inlineCode",{parentName:"p"},"if")," statement inside a ",(0,r.kt)("inlineCode",{parentName:"p"},"code")," block is very similar. However, we don't need to start our line with a ",(0,r.kt)("inlineCode",{parentName:"p"},"%")," symbol. We also use indentation to show the start and end instead of an ",(0,r.kt)("inlineCode",{parentName:"p"},"endif")," statement."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nmandatory: True\ncode: |\n  if user_likes_parties :\n    go_to_party\n  else:\n    dont_go_to_party\n")),(0,r.kt)("h3",{id:"more-branches"},"More branches!"),(0,r.kt)("p",null,"So that's not really all that matters, right? For example, do they have a ride or would they have to walk?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nquestion: |\n  Do you have a ride?\nfields:\n  - no label: user_has_a_ride\n    datatype: yesnoradio\n")),(0,r.kt)("p",null,"We could ask them both questions separately..."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nmandatory: True\ncode: |\n  if user_likes_parties :\n    go_to_party\n  else:\n    dont_go_to_party\n  \n  if user_has_a_ride :\n    go_to_party\n  else:\n    dont_go_to_party\n")),(0,r.kt)("p",null,"...but we'd be wasting their time. If they don't like parties, why does it matter if they have a ride? They want their answer as soon as possible! So we nest the ",(0,r.kt)("inlineCode",{parentName:"p"},"if")," statements inside each other. We only ask the second question if they said yes to the first question."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nmandatory: True\ncode: |\n  if user_likes_parties:\n    if user_has_a_ride:\n      go_to_party\n    else:\n      dont_go_to_party      \n  else:\n    dont_go_to_party\n")),(0,r.kt)("h3",{id:"assignment-3"},"Assignment 3"),(0,r.kt)("p",null,"We've put the app out there and people aren't happy. They feel the situation is more nuanced than the questions you have. Add some more questions! What else could you ask? Copy the script above and add some more questions."),(0,r.kt)("p",null,"Add three more questions to the file we already have. If you are short on inspiration, you could choose from this list:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Do you have a big assignment due the next day?"),(0,r.kt)("li",{parentName:"ul"},"Is it really far away?"),(0,r.kt)("li",{parentName:"ul"},"Will it be mostly people you don't know?"),(0,r.kt)("li",{parentName:"ul"},"Do you have someone you want to meet?"),(0,r.kt)("li",{parentName:"ul"},"Did you promise someone a ride?")),(0,r.kt)("p",null,"The basic steps will be:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a question block for each question."),(0,r.kt)("li",{parentName:"ol"},"Add the question in the right place inside your nested ",(0,r.kt)("inlineCode",{parentName:"li"},"if")," statement.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"---\ncomment: |\n  ASSIGNMENT CHECKLIST:\n  [ ] Copy this code\n  [ ] Turn it into an interview\n  [ ] Add three more question blocks\n  [ ] Add logical `if` statements to the code block\n  [ ] Upload two items to the Blackboard\n      [ ] Your version of this script on the Blackboard\n      [ ] A link to your working interview\n---\nmandatory: True\ncode: |\n  if user_likes_parties:\n    if user_has_a_ride:\n      go_to_party\n    else:\n      dont_go_to_party\n  else:\n    dont_go_to_party\n---\nquestion: |\n  Do you like parties?\nfields:\n  - no label: user_likes_parties\n    datatype: yesnoradio\n---\nquestion: |\n  Do you have a ride?\nfields:\n  - no label: user_has_a_ride\n    datatype: yesnoradio\n---\nevent: dont_go_to_party\nquestion: |\n  Don't go to that dumb party. Do something fun instead!\n---\nevent: go_to_party\nquestion: |\n  You should go to the party! I promise it'll be awesome!\n")),(0,r.kt)("h2",{id:"turn-in-your-work"},"Turn in your work"),(0,r.kt)("p",null,"Use Blackboard to turn in your work. As you see in the comment at the top of the script, you will need to turn in a link to your working interview, as well as the actual YAML code."),(0,r.kt)("h2",{id:"contributors"},"Contributors"),(0,r.kt)("p",null,"This exercise was prepared by:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nonprofittechy"},"Quinten Steenhuis"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/plocket"},"@Plocket")))}d.isMDXComponent=!0}}]);