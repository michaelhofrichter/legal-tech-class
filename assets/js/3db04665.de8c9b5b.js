"use strict";(self.webpackChunkopen_class=self.webpackChunkopen_class||[]).push([[9653],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return h}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(t),h=i,m=p["".concat(s,".").concat(h)]||p[h]||c[h]||o;return t?a.createElement(m,r(r({ref:n},u),{},{components:t})):a.createElement(m,r({ref:n},u))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=t[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2086:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return u},default:function(){return p}});var a=t(7462),i=t(3366),o=(t(7294),t(3905)),r=["components"],l={slug:"controlling-interview-order",title:"Controlling Interview Order",sidebar_label:"Controlling Interview Order"},s=void 0,d={unversionedId:"practical-guide-docassemble/controlling-interview-order",id:"practical-guide-docassemble/controlling-interview-order",title:"Controlling Interview Order",description:"The interview as a question library",source:"@site/docs/practical-guide-docassemble/controlling-interview-order.md",sourceDirName:"practical-guide-docassemble",slug:"/practical-guide-docassemble/controlling-interview-order",permalink:"/legal-tech-class/docs/practical-guide-docassemble/controlling-interview-order",editUrl:"https://github.com/suffolklitlab/legal-tech-class/edit/master/class/docs/practical-guide-docassemble/controlling-interview-order.md",tags:[],version:"current",frontMatter:{slug:"controlling-interview-order",title:"Controlling Interview Order",sidebar_label:"Controlling Interview Order"},sidebar:"someSidebar",previous:{title:"What should you use Docassemble for?",permalink:"/legal-tech-class/docs/practical-guide-docassemble/practical-guide-docassemble"},next:{title:"Object Oriented Programming",permalink:"/legal-tech-class/docs/practical-guide-docassemble/object-oriented-programming"}},u=[{value:"The interview as a question library",id:"the-interview-as-a-question-library",children:[{value:"What happened?",id:"what-happened",children:[],level:3}],level:2},{value:"Who&#39;s the boss? Why you should use only one mandatory block",id:"whos-the-boss-why-you-should-use-only-one-mandatory-block",children:[{value:"What happened?",id:"what-happened-1",children:[],level:3}],level:2},{value:"The interview order block",id:"the-interview-order-block",children:[{value:"How the block is run",id:"how-the-block-is-run",children:[],level:3},{value:"You cannot trigger a block with <code>id</code>",id:"you-cannot-trigger-a-block-with-id",children:[],level:3},{value:"<code>event</code> does not do what you think",id:"event-does-not-do-what-you-think",children:[],level:3},{value:"How the interview order block differs from HotDocs&#39; INTERVIEW computation",id:"how-the-interview-order-block-differs-from-hotdocs-interview-computation",children:[],level:3},{value:"Triggering a screen for a variable that is already defined",id:"triggering-a-screen-for-a-variable-that-is-already-defined",children:[{value:"Forcing docassemble to re-ask a defined variable",id:"forcing-docassemble-to-re-ask-a-defined-variable",children:[],level:4},{value:"The <strong>default</strong> pattern",id:"the-default-pattern",children:[],level:4},{value:"The &quot;existing or new&quot; pattern",id:"the-existing-or-new-pattern",children:[],level:4},{value:"Displaying a link to allow the user to edit a value",id:"displaying-a-link-to-allow-the-user-to-edit-a-value",children:[],level:4}],level:3},{value:"Avoid setting variables in the interview order block",id:"avoid-setting-variables-in-the-interview-order-block",children:[],level:3},{value:"Triggering a question and then continuing: using <code>continue button field</code>",id:"triggering-a-question-and-then-continuing-using-continue-button-field",children:[],level:3},{value:"Triggering code and then continuing: using &quot;named&quot; blocks",id:"triggering-code-and-then-continuing-using-named-blocks",children:[],level:3}],level:2}],c={toc:u};function p(e){var n=e.components,t=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"the-interview-as-a-question-library"},"The interview as a question library"),(0,o.kt)("p",null,"You can think of a docassemble interview as a library of questions.\nThe only questions that docassemble will ask are those that are triggered,\neither by a ",(0,o.kt)("inlineCode",{parentName:"p"},"mandatory")," block or in some other way."),(0,o.kt)("p",null,"Docassemble will scan the interview file until it finds a question\nthat contains the answer to every field that is required by any\nmandatory block. If a field isn't used in the mandatory block, or a\nblock that the mandatory block itself triggers, it will never be shown\nto the user."),(0,o.kt)("p",null,"Copy and paste the interview below into your playground."),(0,o.kt)("p",null,"Before you run it, make a prediction."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Which questions will be asked?"),(0,o.kt)("li",{parentName:"ol"},"Which question will be asked first? What will be the order of the remaining questions?")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nquestion: |\n  What is the average airspeed velocity of an unladen swallow?\nfields:\n  - no label: air_speed\n---\nquestion: |\n  What is your quest?\nfields:\n  - no label: quest\n---\nquestion: |\n  What is your name?\nfields:\n  - First name: first_name\n  - Last name: last_name\n---\nmandatory: True\nquestion: |\n  Hello, ${ first_name }\nsubquestion: |\n  You said the swallow's speed is ${ air_speed }\n\n  Your first name is ${ first_name }\n")),(0,o.kt)("h3",{id:"what-happened"},"What happened?"),(0,o.kt)("p",null,"Docassemble only asks the ",(0,o.kt)("inlineCode",{parentName:"p"},"air_speed")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"first_name")," questions. The ",(0,o.kt)("inlineCode",{parentName:"p"},"quest"),"\nquestion wasn't used by any mandatory blocks in this interview, so it\nwas never asked."),(0,o.kt)("p",null,"The first question that is asked is the ",(0,o.kt)("inlineCode",{parentName:"p"},"first_name")," question. This is because\nthe one ",(0,o.kt)("inlineCode",{parentName:"p"},"mandatory")," block mentions the ",(0,o.kt)("inlineCode",{parentName:"p"},"first_name")," field before it mentions any\nother fields."),(0,o.kt)("p",null,"As you can imagine, the incidental order of fields on your final screen doesn't always\ndictate the most logical or pleasant order for questions in a lengthy interview.\nThere are other ways to control the order of questions in a more fine-grained way."),(0,o.kt)("h2",{id:"whos-the-boss-why-you-should-use-only-one-mandatory-block"},"Who's the boss? Why you should use only one mandatory block"),(0,o.kt)("p",null,"There are a lot of ways to ",(0,o.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/logic.html"},"control the\norder")," of questions in a docassemble\ninterview. For example: you can use a ",(0,o.kt)("inlineCode",{parentName:"p"},"mandatory")," modifier on many questions,\nand the ",(0,o.kt)("inlineCode",{parentName:"p"},"if")," modifier to handle optional questions. Alternatively, you can\nuse the ",(0,o.kt)("inlineCode",{parentName:"p"},"need")," modifier on multiple individual blocks."),(0,o.kt)("p",null,"It's a good habit to use only ",(0,o.kt)("strong",{parentName:"p"},"one")," mandatory block in your interview."),(0,o.kt)("p",null,"Using one mandatory block can allow you to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Visualize and trace your interview logic in one place"),(0,o.kt)("li",{parentName:"ol"},"Better understand which code will end up executing and which will not")),(0,o.kt)("p",null,"Copy and paste the interview below into your playground. Before you run it,\nmake a prediction."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"What will be the last screen that is shown to the user?"),(0,o.kt)("li",{parentName:"ol"},"What action will happen when the interview is complete?")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'---\nmandatory: True\nquestion: |\n  Please answer our intake questionnaire\ncontinue button field: introduction\n---\nmandatory: True\nquestion: |\n  Tell us your name\nfields:\n  - First name: user_first_name\n  - Last name: user_last_name\n---\nmandatory: True\nquestion: |\n  How old are you?\nfields:\n  - birthdate: birthday\n    datatype: date\n---\nmandatory: True\nquestion: |\n  Results\nsubquestion: |\n  Thank you, ${user_first_name}.\n  \n  We will send your results to Dewey, Cheatem and Howe.\n---\ntemplate: email_contents\ncontent: |\n  Here is the intake\n  \n  First name: ${ user_first_name }  \n  Last name: ${ user_last_name }\n\n  Birthdate: ${birthday}\n---\nmandatory: True\ncode: |\n  send_email(to="dewey@example.com", template=email_contents)\n')),(0,o.kt)("h3",{id:"what-happened-1"},"What happened?"),(0,o.kt)("p",null,'Mandatory blocks are read from "top to bottom" of the interview file.'),(0,o.kt)("p",null,'In the interview above, all of the blocks are mandatory. But the code block\nthat sends an email will never run. Why? It can only run after the last screen\nis shown. But docassemble pauses on the "results" screen indefinitely.'),(0,o.kt)("h2",{id:"the-interview-order-block"},"The interview order block"),(0,o.kt)("p",null,'I often call the code block that I use to control question order the "interview order" block.\nThere is no official name for it; in HotDocs and its predecessors, this would be called the\nINTERVIEW computation. Here\'s an example interview order block:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nid: interview order\nmandatory: True\ncode: |\n  intro_screen\n  user.name.first\n  if user_type == 'attorney':\n    attorney_instructions\n  else:\n    prose_instructions\n  user.address.address\n  download\n")),(0,o.kt)("h3",{id:"how-the-block-is-run"},"How the block is run"),(0,o.kt)("p",null,"Docassemble runs this code block from top to bottom, seeking the definition of\neach variable listed in the code block in order. Each ",(0,o.kt)("strong",{parentName:"p"},"undefined")," variable\ntriggers an exception (",(0,o.kt)("inlineCode",{parentName:"p"},"NameError"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"AttributeError")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"KeyError"),") which\nDocassemble intercepts, running code or asking a question that can define that\nvariable. ",(0,o.kt)("strong",{parentName:"p"},"Docassemble will then run the interview order block again")," from top\nto bottom until it reaches the next undefined variable."),(0,o.kt)("p",null,"Understanding that the code block might run multiple times is important! Use\nthis as a place to list variables as a reference and do simple branching logic.\nDon't use it to set any variables or call an API that might be triggered\nmultiple times."),(0,o.kt)("h3",{id:"you-cannot-trigger-a-block-with-id"},"You cannot trigger a block with ",(0,o.kt)("inlineCode",{parentName:"h3"},"id")),(0,o.kt)("p",null,"Another common pattern new Docassemble developers try is to trigger a specific\nblock in the interview order block by referencing the block's ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," or by\nadding an ",(0,o.kt)("inlineCode",{parentName:"p"},"event")," modifier to the block."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," of a block is information for you, the developer, and gets used by\nanalytics tools as well. It is not used to trigger a block."),(0,o.kt)("h3",{id:"event-does-not-do-what-you-think"},(0,o.kt)("inlineCode",{parentName:"h3"},"event")," does not do what you think"),(0,o.kt)("p",null,"A new developer might try using an\n",(0,o.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/questions.html#event"},(0,o.kt)("inlineCode",{parentName:"a"},"event"))," modifier to trigger\na block. An ",(0,o.kt)("inlineCode",{parentName:"p"},"event")," ",(0,o.kt)("strong",{parentName:"p"},"generally")," does not save or persist any variables that are\nset during it. You should not attach an ",(0,o.kt)("inlineCode",{parentName:"p"},"event")," modifier to a block of code that\nyou want to trigger in an ",(0,o.kt)("inlineCode",{parentName:"p"},"interview order")," block. Reserve it for ending\nquestions, not to label code you want to run."),(0,o.kt)("p",null,"The other place that ",(0,o.kt)("inlineCode",{parentName:"p"},"event")," is used is with the Docassemble ",(0,o.kt)("inlineCode",{parentName:"p"},"actions")," system."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Event"),"s linked to actions that ",(0,o.kt)("strong",{parentName:"p"},"do")," permanently alter an interview's state\ncan be triggered by an ",(0,o.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/api.html#session_action"},"external\noccurrence"),", ",(0,o.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/functions.html#url_action"},"clicking a\nbutton"),", or be used by\n",(0,o.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/background.html#background"},"background code"),".\nDon't try to use an ",(0,o.kt)("inlineCode",{parentName:"p"},"event")," to trigger code in the main flow of an interview."),(0,o.kt)("h3",{id:"how-the-interview-order-block-differs-from-hotdocs-interview-computation"},"How the interview order block differs from HotDocs' INTERVIEW computation"),(0,o.kt)("p",null,"Remember, Docassemble is goal seeking. It doesn't care what screens the user has\nseen: it tries to define all of the variables that you mark as ",(0,o.kt)("inlineCode",{parentName:"p"},"mandatory")," that\nit can reach."),(0,o.kt)("p",null,"Unlike in HotDocs, listing a variable that is already defined will not trigger\nanything being displayed. Docassemble only displays something or tries running\ncode if the variable triggers a Python exception."),(0,o.kt)("p",null,"A common mistake when a developer is getting used to Docassemble's built-in\n",(0,o.kt)("inlineCode",{parentName:"p"},"Individual")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Address")," classes is to list an object in the interview order\nblock. The developer may not realize that the ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"address")," attributes of\nan Individual are themselves objects and that they get pre-initialized."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"objects:\n  - user: Individual\n---\nid: interview order\nmandatory: True\ncode: |\n  user.name\n  user.address\n")),(0,o.kt)("p",null,"The short interview above will trigger the objects block in lines 1-2, and\nnothing else visible will happen. This is because the ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"address"),"\nattributes of the ",(0,o.kt)("inlineCode",{parentName:"p"},"user")," object are created instantly when the ",(0,o.kt)("inlineCode",{parentName:"p"},"objects")," block\nis run (by the ",(0,o.kt)("inlineCode",{parentName:"p"},"__init__")," class constructor of ",(0,o.kt)("inlineCode",{parentName:"p"},"Individual"),"). If you want to\ntrigger a question, you need to trigger an attribute that is not defined yet,\neither by a question, code, or a class constructor."),(0,o.kt)("p",null,"Here is a version of the above interview that probably matches the developer's\nintent:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"objects:\n  - user: Individual\n---\nid: interview order\nmandatory: True\ncode: |\n  user.name.first\n  user.address.address\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"name.first")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"address.address")," attributes are not defined yet.\nMentioning them will cause an ",(0,o.kt)("inlineCode",{parentName:"p"},"AttributeError")," exception and lead\nDocassemble to seeking a question or code block to define them."),(0,o.kt)("p",null,"Another way that the ",(0,o.kt)("inlineCode",{parentName:"p"},"interview order")," block differs from HotDocs\nis that you might find that other variables are triggered that you did not\nexplicitly list. Remember, Docassemble is seeking to satisfy all of the\nvariables you list in order. If your question or code block in turn\ndepends on another variable, that will be triggered along with the\nvariable you explicitly list."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"objects:\n  - user: Individual\n---\nid: interview order\nmandatory: True\ncode: |\n  user.address.address\n  user.name.first\n---\nid: user's address\nquestion: |\n  What is the address of ${ user }?\nfields:\n  - Street address: user.address.address\n  - City: user.address.city\n")),(0,o.kt)("p",null,"In the example above, triggering ",(0,o.kt)("inlineCode",{parentName:"p"},"user.address.address")," will run the\n",(0,o.kt)("inlineCode",{parentName:"p"},"id: user's address")," block before asking for the user's address.\nThat is because the user's name is displayed on the ",(0,o.kt)("inlineCode",{parentName:"p"},"id: user's address"),"\nblock."),(0,o.kt)("h3",{id:"triggering-a-screen-for-a-variable-that-is-already-defined"},"Triggering a screen for a variable that is already defined"),(0,o.kt)("h4",{id:"forcing-docassemble-to-re-ask-a-defined-variable"},"Forcing docassemble to re-ask a defined variable"),(0,o.kt)("p",null,"One pattern you might encounter is that a variable is pre-defined (maybe by an API)\nbut you still want the user to have a chance to review and edit the value."),(0,o.kt)("p",null,"You can do that a few different ways:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://docassemble.org/docs/functions.html#invalidate"},(0,o.kt)("inlineCode",{parentName:"a"},"invalidate()"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://docassemble.org/docs/functions.html#force_ask"},(0,o.kt)("inlineCode",{parentName:"a"},"force_ask()"))),(0,o.kt)("li",{parentName:"ol"},"Creating a ",(0,o.kt)("a",{parentName:"li",href:"https://docassemble.org/docs/fields.html#review"},"review screen")),(0,o.kt)("li",{parentName:"ol"},"Using ",(0,o.kt)("a",{parentName:"li",href:"https://docassemble.org/docs/functions.html#url_action"},(0,o.kt)("inlineCode",{parentName:"a"},"url_action()")))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"invalidate()")," will tell Docassemble the variable is not defined without erasing the\nvalue it has. This has the effect of allowing you to revisit a question."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"force_ask()")," has a similar effect in most circumstances, but offers much more\ncomplex options to trigger a series of follow-up questions."),(0,o.kt)("p",null,"Think carefully about how you use this pattern. You can avoid it\nif the API is used to provide defaults. Using ",(0,o.kt)("inlineCode",{parentName:"p"},"invalidate()")," or\n",(0,o.kt)("inlineCode",{parentName:"p"},"force_ask()")," in the interview order block is also risky, as it may\nrun more than one time. Try the ",(0,o.kt)("inlineCode",{parentName:"p"},"named block")," pattern below to\ncontain any ",(0,o.kt)("inlineCode",{parentName:"p"},"force_ask()")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"invalidate()")," code and ensure it\nonly runs one time."),(0,o.kt)("h4",{id:"the-default-pattern"},"The ",(0,o.kt)("strong",{parentName:"h4"},"default")," pattern"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nid: interview order\nmandatory: True\ncode: |\n  address_default\n  user.address.address\n---\ncode: |\n  address_default = run_some_api()\n---\nquestion: |\n  What is your address?\nsubquestion: |\n  We set the default value based on an API result.\nfields:\n  - Address: user.address.address\n    default: address_default\n")),(0,o.kt)("p",null,'This very simple pattern just displays the API-generated results as a\nplaceholder. This pattern is nice because the user gets to see the value and\nchange it. The potentially "wrong" value is never stored in the ',(0,o.kt)("inlineCode",{parentName:"p"},"Address"),"\nobject."),(0,o.kt)("h4",{id:"the-existing-or-new-pattern"},'The "existing or new" pattern'),(0,o.kt)("p",null,"Another pattern you could try is allowing the user to choose from existing\nvalues or to define a new one. ",(0,o.kt)("inlineCode",{parentName:"p"},"object_radio")," combined with ",(0,o.kt)("inlineCode",{parentName:"p"},"disable others")," is\na good way to do this. This pattern works well with API results."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'---\nobjects:\n  user: Individual\n---\nid: interview order\nmandatory: True\ncode: |\n  address_default_object\n  user.address.address\n  display_results\n---\ncode: |\n  # You could use a function or API call that returns an Address object instead of directly initializing the object\n  address_default_object = Address(address="123 Main St", city="Boston")\n---\nquestion: |\n  What is your address?\nfields:\n  - An existing address: user.address\n    datatype: object_radio\n    none of the above: True\n    choices:\n      - address_default_object\n    disable others: True\n  - Address: user.address.address\n  - City: user.address.city\n  - State: user.address.state\n    code: states_list()\n---\nevent: display_results\nquestion: |\n  ${ user.address.block() }\n')),(0,o.kt)("p",null,'In the interview snippet above, the Address/City/State fields can only be\ninteracted with if the "Existing address" field has been left set to ',(0,o.kt)("inlineCode",{parentName:"p"},"None of\nthe above"),"."),(0,o.kt)("h4",{id:"displaying-a-link-to-allow-the-user-to-edit-a-value"},"Displaying a link to allow the user to edit a value"),(0,o.kt)("p",null,"One safe option is to display a link to edit a variable on an arbitrary screen\nwith ",(0,o.kt)("inlineCode",{parentName:"p"},"url_action()"),". Here is an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"question: |\n  Verify your court\nsubquestion: |\n  Based on the information you gave us, it looks like\n  you belong in ${ trial_court }.\n\n  [Edit court](${ url_action('trial_court') })\ncontinue button field: inform_about_court\n")),(0,o.kt)("p",null,"If you want to review multiple fields at once, use the\n",(0,o.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/fields.html#review"},"review screen")," pattern.\nReview screens will automatically update to display only variables that\nhave a value, which is handy. They can be displayed in-line or when the\nuser clicks a link."),(0,o.kt)("h3",{id:"avoid-setting-variables-in-the-interview-order-block"},"Avoid setting variables in the interview order block"),(0,o.kt)("p",null,"You might be tempted to treat the interview order block like a script in an\nimperative programming language. This would be incorrect. Docassemble is\ndeclarative. The interview order block should list a set of goals. Setting variables\nin the interview order block can:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Lead to infinite loops (you can avoid this by using the modifier ",(0,o.kt)("inlineCode",{parentName:"li"},"scan for\nvariables: False"),")"),(0,o.kt)("li",{parentName:"ol"},"Lead to variables definition being changed unexpectedly and in a hard to\ntrace way.")),(0,o.kt)("p",null,'Yet sometimes you do want to trigger code. Do that by using a "named block".'),(0,o.kt)("h3",{id:"triggering-a-question-and-then-continuing-using-continue-button-field"},"Triggering a question and then continuing: using ",(0,o.kt)("inlineCode",{parentName:"h3"},"continue button field")),(0,o.kt)("p",null,"Docassemble does have a way for you to invoke a screen more explicitly. When you\nadd a ",(0,o.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/fields.html#continue%20button%20field"},(0,o.kt)("inlineCode",{parentName:"a"},"continue button\nfield"))," to\na question block, you give the block a variable name. You can mention that\nvariable name in your interview order block."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"id: interview order\nmandatory: True\ncode: |\n  intro_screen\n  user.name.first\n---\nid: introduction\ncontinue button field: intro_screen\nquestion: |\n  Welcome to our interview\nsubquestion: |\n  Before you start, follow these steps:\n\n  1. Step 1\n  2. Step 2\n  3. Step 3\n")),(0,o.kt)("p",null,"Usually you should ",(0,o.kt)("strong",{parentName:"p"},"only")," give a ",(0,o.kt)("inlineCode",{parentName:"p"},"continue button field")," to a screen\nthat doesn't ask any questions. Avoid using it to simulate HotDocs's\ndialog-based interview order. You can run into harder to trace logic."),(0,o.kt)("h3",{id:"triggering-code-and-then-continuing-using-named-blocks"},'Triggering code and then continuing: using "named" blocks'),(0,o.kt)("p",null,"Named block is a term that I use that is not in the Docassemble documentation,\nbut is a very handy concept."),(0,o.kt)("p",null,"Here is a short example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"objects:\n  - user: Individual\n---\nid: interview order\nmandatory: True\ncode: |\n  user.name.first\n  get_api_results\n  user.address.address\n---\ncode: |\n  user.address.address = run_some_api()\n  get_api_results = True\n")),(0,o.kt)("p",null,"Notice that in our interview order block, we referenced a variable named\n",(0,o.kt)("inlineCode",{parentName:"p"},"get_api_results"),'. This is the "named block." This variable gets defined at the\n',(0,o.kt)("strong",{parentName:"p"},"end")," of our code block. Because it is not defined until the end of the code\nblock, Docassemble needs to run the whole code block to define it."),(0,o.kt)("p",null,"This is roughly equivalent to a computation in HotDocs, but note that this code\nblock will only run once. When the interview order block is run again,\n",(0,o.kt)("inlineCode",{parentName:"p"},"get_api_results")," will already be defined. There is no need for Docassemble\nto run it again."),(0,o.kt)("p",null,"What if you ",(0,o.kt)("strong",{parentName:"p"},"do")," want it to run multiple times? You can use the ",(0,o.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/logic.html#depends%20on"},(0,o.kt)("inlineCode",{parentName:"a"},"depends\non"))," modifier to specify\nconditions that will cause Docassemble to recalculate the ",(0,o.kt)("inlineCode",{parentName:"p"},"get_api_results"),"\ndefinition. More bluntly, you can use\n",(0,o.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/logic.html#reconsider"},(0,o.kt)("inlineCode",{parentName:"a"},"reconsider"))," to run the\ncode block each time the screen is refreshed. It is usually best to avoid\n",(0,o.kt)("inlineCode",{parentName:"p"},"reconsider")," if there is a different tool that works because overusing it can\ngreatly slow down Docassemble's operation and sometimes lead to unintended\nbehavior. ",(0,o.kt)("inlineCode",{parentName:"p"},"depends on")," also serves a dual purpose of allowing you to explain\nyour code's purpose to the next developer to come along and read your interview."),(0,o.kt)("h1",{id:"learn-more"},"Learn more"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Docassemble Documentation: ",(0,o.kt)("a",{parentName:"li",href:"https://docassemble.org/docs/logic.html"},"Logic"))),(0,o.kt)("p",null,"Quinten Steenhuis, February 2021"))}p.isMDXComponent=!0}}]);