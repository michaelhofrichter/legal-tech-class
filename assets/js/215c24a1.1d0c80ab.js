"use strict";(self.webpackChunkopen_class=self.webpackChunkopen_class||[]).push([[9325],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),h=o,c=m["".concat(s,".").concat(h)]||m[h]||d[h]||i;return n?a.createElement(c,r(r({ref:t},u),{},{components:n})):a.createElement(c,r({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8393:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=["components"],l={slug:"python",title:"The Python programming language",sidebar_label:"Understanding Python"},s=void 0,p={unversionedId:"python",id:"python",isDocsHomePage:!1,title:"The Python programming language",description:"About Python",source:"@site/docs/python.md",sourceDirName:".",slug:"/python",permalink:"/legal-tech-class/docs/python",editUrl:"https://github.com/suffolklitlab/legal-tech-class/edit/master/class/docs/python.md",version:"current",frontMatter:{slug:"python",title:"The Python programming language",sidebar_label:"Understanding Python"},sidebar:"someSidebar",previous:{title:"Overview of Mako",permalink:"/legal-tech-class/docs/mako"},next:{title:"Overview of Jinja2",permalink:"/legal-tech-class/docs/jinja2"}},u=[{value:"About Python",id:"about-python",children:[]},{value:"The basics of programming",id:"the-basics-of-programming",children:[{value:"Variables",id:"variables",children:[]},{value:"Datatypes, Datastructures, and Objects",id:"datatypes-datastructures-and-objects",children:[]},{value:"Tests and logical operators",id:"tests-and-logical-operators",children:[]},{value:"Assignment operators",id:"assignment-operators",children:[]},{value:"Control structures",id:"control-structures",children:[]},{value:"Functions and methods",id:"functions-and-methods",children:[]}]},{value:"Learning more about Python",id:"learning-more-about-python",children:[{value:"Books and tutorials",id:"books-and-tutorials",children:[]},{value:"Online Python interpreter (run Python without installing it to your computer)",id:"online-python-interpreter-run-python-without-installing-it-to-your-computer",children:[]}]}],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"about-python"},"About Python"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://python.org"},"Python")," is one of the worlds ",(0,i.kt)("a",{parentName:"p",href:"https://www.infoworld.com/article/3401536/python-popularity-reaches-an-all-time-high.html"},"most popular programming languages")," for a good reason. It is easy to use, while familiar enough that people who have tried other languages can jump right in."),(0,i.kt)("p",null,"Two unique features of Python for people who come from other programming languages are that indentation marks the end and beginning of Python statements (rather than curly braces {}); and that you do not need to use a semi-colon at the end of lines."),(0,i.kt)("p",null,"Python has a very large collection of ",(0,i.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/"},'pre-built "modules"')," and an even larger library of ",(0,i.kt)("a",{parentName:"p",href:"https://pypi.org"},"modules contributed by third-party developers"),". This can make it fast and easy to build very capable applications."),(0,i.kt)("h2",{id:"the-basics-of-programming"},"The basics of programming"),(0,i.kt)("p",null,"Docassemble developers may use only a few features of Python. Still, let's take some time to put the different aspects of any programming language in context, and then talk about how they are used in Python and in Docassemble."),(0,i.kt)("p",null,"Programming involves two basic concepts: data, and instructions. Data is stored in variables which usually are provided when the program is run. Instructions tell the computer what to do with the data it receives."),(0,i.kt)("h3",{id:"variables"},"Variables"),(0,i.kt)("p",null,'Variables could be considered "buckets" that hold information. Just like ',(0,i.kt)("inlineCode",{parentName:"p"},"x")," in an algebra equation, we don't know the value until our program is run. Docassemble variables (or fields) are also Python variables."),(0,i.kt)("h3",{id:"datatypes-datastructures-and-objects"},"Datatypes, Datastructures, and Objects"),(0,i.kt)("p",null,'Variables each have an associated "type". For example, a number is treated differently by the computer than a piece of written text. ',(0,i.kt)("inlineCode",{parentName:"p"},'"Roger" + "Helicopter"')," should really do something different than ",(0,i.kt)("inlineCode",{parentName:"p"},"1 + 2"),". Unlike many languages, in Python variables can change type dynamically. The same variable can be a number at one time, and text later in the same program."),(0,i.kt)("p",null,"Python uses the following ",(0,i.kt)("em",{parentName:"p"},"basic")," or ",(0,i.kt)("em",{parentName:"p"},"primitive")," datatypes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"int")," (integer, or whole numbers)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"float")," (floating point, or fractional numbers)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"str")," (string, or text)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bool")," (Boolean, or ",(0,i.kt)("inlineCode",{parentName:"li"},"True"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"False"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"None")," (null value, or undefined)")),(0,i.kt)("p",null,"Python includes the following built-in data structures:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"list")," (an array, or list of one or more variables)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dict")," (a dictionary, or associative array)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tuple")," (like a list, but cannot be changed (immutable))"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"set")," (like a list, but has unique values)")),(0,i.kt)("p",null,"Docassemble has its own implementation of these datastructures, named ",(0,i.kt)("inlineCode",{parentName:"p"},"DAList"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"DADict"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"DASet")," respectively."),(0,i.kt)("p",null,"Python also supports object oriented programming principles that allow you to create your own complex types. A ",(0,i.kt)("inlineCode",{parentName:"p"},"class")," is a blueprint for an ",(0,i.kt)("inlineCode",{parentName:"p"},"object"),". When you use objects, you gather a list of ",(0,i.kt)("inlineCode",{parentName:"p"},"attributes")," together with ",(0,i.kt)("inlineCode",{parentName:"p"},"methods")," that can act on the attributes to provide standardized behavior and model your program against the real world."),(0,i.kt)("p",null,"When you want to create a new class, you can ",(0,i.kt)("inlineCode",{parentName:"p"},"inherit")," the properties of an existing class. For example, if you had a class ",(0,i.kt)("inlineCode",{parentName:"p"},"apple")," it may inherit properties from a ",(0,i.kt)("inlineCode",{parentName:"p"},"fruit")," class."),(0,i.kt)("p",null,"In Docassemble, you are encouraged to have every object inherit from the base object named ",(0,i.kt)("inlineCode",{parentName:"p"},"DAObject"),". You will make frequent use of the ",(0,i.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/objects.html#Individual"},(0,i.kt)("inlineCode",{parentName:"a"},"Individual"))," object in Docassemble, which collects attributes of a person together: such as a first and last name, birthdate, address, and more."),(0,i.kt)("h3",{id:"tests-and-logical-operators"},"Tests and logical operators"),(0,i.kt)("p",null,"You will use ",(0,i.kt)("inlineCode",{parentName:"p"},"Boolean")," values again and again in Docassemble. Sometimes you will get a True/False value directly from the user. Other times, you will use a logical test. Python's comparison operators should look familiar to you."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"==")," (tests for equality. ",(0,i.kt)("strong",{parentName:"li"},"Note"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"=")," is reserved as the assignment operator)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"!=")," (tests for inequality)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},">")," (greater than)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<")," (less than)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},">=")," (greater than or equal)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<=")," (less than or equal)")),(0,i.kt)("p",null,"Logical operators include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"and")," (combines two tests and will be True if both are True)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"or")," (combines two tests and will be True if either is True)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"not")," (returns True if the test is False)")),(0,i.kt)("p",null,"Operators can be grouped with round brackets ",(0,i.kt)("inlineCode",{parentName:"p"},"()"),"."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3schools.com/python/python_operators.asp"},"W3Schools")," for a more complete list."),(0,i.kt)("h3",{id:"assignment-operators"},"Assignment operators"),(0,i.kt)("p",null,"In Python, you ",(0,i.kt)("inlineCode",{parentName:"p"},"assign")," a value to a variable using an assignment operator. You can get by with just one operator: ",(0,i.kt)("inlineCode",{parentName:"p"},"="),". For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'z = 1 # Assigns the value 1 to z\nz = "Hello, World" # Assigns the text Hello, World to z.\n')),(0,i.kt)("p",null,"You may also find yourself using the shorthands ",(0,i.kt)("inlineCode",{parentName:"p"},"+="),", ",(0,i.kt)("inlineCode",{parentName:"p"},"-=")," to add a value and subtract a value in one statement. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"z = 1\nz += 1 # the value of z is now 2\nz -= 3 # the value of z is now -1.\n")),(0,i.kt)("p",null,"Python also supports basic arithmetic operators."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"+")," (addition)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-")," (subtraction)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"*")," (multiplication)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/")," (division)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"%")," (modulus, or remainder)")),(0,i.kt)("p",null,"There are many more assignment operators. See ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3schools.com/python/python_operators.asp"},"W3Schools")," for a more complete list."),(0,i.kt)("h3",{id:"control-structures"},"Control structures"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Control structures")," let you dictate the sequence of operations that your program will take in different circumstances. There are three basic types of control structures: ",(0,i.kt)("inlineCode",{parentName:"p"},"sequence"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"selection")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"repetition"),"."),(0,i.kt)("h4",{id:"sequence-ordering-instructions"},"Sequence (ordering instructions)"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Sequence")," controls the order that your instructions to the computer are executed. In Python, the order is implied, top to bottom, in the order that you write each instruction in the file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"operation1\noperation2\noperation3\n")),(0,i.kt)("h4",{id:"selection-if-then-statements"},"Selection (if then statements)"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Selection")," controls which instructions are executed, and which ones remain idle. In Python, the basic ",(0,i.kt)("inlineCode",{parentName:"p"},"selection")," statement is the ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," statement."),(0,i.kt)("p",null,"An ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," statement is composed of the keyword ",(0,i.kt)("inlineCode",{parentName:"p"},"if"),", followed by a test, and then a colon. The code that follows will execute if the test resolves to a Boolean True."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"if test1:\n  operation1\n")),(0,i.kt)("p",null,"You can add-in additional tests as part of the main ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," statement with the keywords ",(0,i.kt)("inlineCode",{parentName:"p"},"elif")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"else"),". "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"if test1:\n  operation1\nelif test2:\n  operation2\nelse:\n  operation3\n")),(0,i.kt)("p",null,"If you are familiar with other programming languages, you may be surprised that there is no ",(0,i.kt)("inlineCode",{parentName:"p"},"switch")," statement in Python. If not, just ignore it :). ",(0,i.kt)("inlineCode",{parentName:"p"},"Switch")," statements are just a series of ",(0,i.kt)("inlineCode",{parentName:"p"},"if/elseif")," statements. Python does include the ",(0,i.kt)("inlineCode",{parentName:"p"},"ternary")," operator, or one-line ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," statement:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"x = 1 if test1 else 2 # Sets x to 1 if test1 is true. Otherwise, it sets x to 2\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ternary")," operator can be hard to read so it's usually best to avoid it, but sometimes it's convenient to include in Docassemble in a place where you can only fit one line of code, or inside a Mako statement (",(0,i.kt)("inlineCode",{parentName:"p"},"${}"),")."),(0,i.kt)("h4",{id:"repetition-loops"},"Repetition (loops)"),(0,i.kt)("p",null,"Docassemble can easily give you the power to gather repeated information. You usually gather that information into a ",(0,i.kt)("inlineCode",{parentName:"p"},"list")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"dictionary"),". You will use Python's repetition control structures to work with those repeated values."),(0,i.kt)("h5",{id:"for-loops"},(0,i.kt)("inlineCode",{parentName:"h5"},"for")," Loops"),(0,i.kt)("p",null,"Suppose you have a list with following values:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"[1,2,3,4]")),(0,i.kt)("p",null,"Python makes it simple to ",(0,i.kt)("inlineCode",{parentName:"p"},"iterate"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"loop")," over each value in the list without needing to keep track of the total number of elements. If you have used ",(0,i.kt)("inlineCode",{parentName:"p"},"C"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Java")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"JavaScript"),", this is a convenient built-in feature."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"for number in [1,2,3,4]:\n  print number\n")),(0,i.kt)("p",null,"Will print "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"1\n2\n3\n4\n")),(0,i.kt)("h4",{id:"while-loops"},(0,i.kt)("inlineCode",{parentName:"h4"},"while")," Loops"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"while")," loops combine a test with repeated action. In the example below"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"i = 1\nwhile i <= 4:\n  print(i)\n  i += 1\n")),(0,i.kt)("p",null,"Will print "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"1\n2\n3\n4\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Here be dragons")," Be careful with ",(0,i.kt)("inlineCode",{parentName:"p"},"while")," loops!"),(0,i.kt)("p",{parentName:"blockquote"},"Notice that it's up to you to make sure your ",(0,i.kt)("inlineCode",{parentName:"p"},"while")," loop actually ends. It's possible (and easy while you're learning) to create a ",(0,i.kt)("inlineCode",{parentName:"p"},"while")," loop that is stuck in an infinite series of repetitions, crashing the server.")),(0,i.kt)("h4",{id:"a-note-on-the-mako-and-jinja-variations"},"A note on the Mako and Jinja variations"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/legal-tech-class/docs/mako"},"Mako")," statements let you include Python control structures right inside your interview file, as well as inside Markdown templates. When you want to use the Mako version of a control structure, just include a % symbol at the start of the line. The text underneath does ",(0,i.kt)("em",{parentName:"p"},"not")," need to be indented. But you must include the ending keyword."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},"% if statement:\nConditionally displayed text\n% endif\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/legal-tech-class/docs/jinja2"},"Jinja")," statements allow you to include something almost, but not quite entirely unlike Python inside a Docx template. There are many variations to be aware of, but usually it's best to learn about them one at a time. Jinja statements do not need to be on their own line. There is no colon ",(0,i.kt)("inlineCode",{parentName:"p"},":")," at the end of the opening keyword. They do require an ending keyword."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"{% if mytest %} Some conditionally displayed text {% endif %}\n")),(0,i.kt)("h3",{id:"functions-and-methods"},"Functions and methods"),(0,i.kt)("p",null,"Python ",(0,i.kt)("inlineCode",{parentName:"p"},"functions")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"methods"),' are an abstraction that lets you "save" a series of instructions and operations that you will want to use again and again. In some languages, these are called ',(0,i.kt)("inlineCode",{parentName:"p"},"procedures"),". You should write some of your own functions. But there is a large ",(0,i.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/functions.html"},"library of functions")," built-in to Docassemble that you should also peruse when you are about to do something that you think other developers have run into in the past."),(0,i.kt)("p",null,"You create a function in Python with the ",(0,i.kt)("inlineCode",{parentName:"p"},"def")," keyword. Functions have ",(0,i.kt)("inlineCode",{parentName:"p"},"arguments")," and a ",(0,i.kt)("inlineCode",{parentName:"p"},"return value"),". Consider the following useless example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def times(x,y):\n  return x * y\n")),(0,i.kt)("p",null,"Notice that the function's contents are indented below the ",(0,i.kt)("inlineCode",{parentName:"p"},"def")," keyword."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"methods")," are not logically distinct from ",(0,i.kt)("inlineCode",{parentName:"p"},"functions"),". A ",(0,i.kt)("inlineCode",{parentName:"p"},"method")," is a function that is part of an ",(0,i.kt)("inlineCode",{parentName:"p"},"object"),"'s blueprint, or ",(0,i.kt)("inlineCode",{parentName:"p"},"class"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"method")," typically operates on the object itself, or transforms and returns one or more attributes of the object."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"person.age_in_years() # Uses the person's birthdate attribute to calculate their current age and return it\n")),(0,i.kt)("p",null,"Docassemble has many ",(0,i.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/objects.html"},"built-in objects"),". When you are looking in the function library, you might miss a useful shortcut because you do not know that it is considered a method of a class rather than a standalone function."),(0,i.kt)("h2",{id:"learning-more-about-python"},"Learning more about Python"),(0,i.kt)("h3",{id:"books-and-tutorials"},"Books and tutorials"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wiki.python.org/moin/BeginnersGuide"},"Python Beginner's Guide")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/tutorial/"},"Python Tutorial")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://automatetheboringstuff.com/"},"Automate the Boring Stuff"))),(0,i.kt)("h3",{id:"online-python-interpreter-run-python-without-installing-it-to-your-computer"},"Online Python interpreter (run Python without installing it to your computer)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.onlinegdb.com/online_python_interpreter"},"Online runtime environment"))))}m.isMDXComponent=!0}}]);