"use strict";(self.webpackChunkopen_class=self.webpackChunkopen_class||[]).push([[8808],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=c(a),m=i,p=u["".concat(l,".").concat(m)]||u[m]||h[m]||o;return a?n.createElement(p,s(s({ref:t},d),{},{components:a})):n.createElement(p,s({ref:t},d))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,s=new Array(o);s[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5366:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var n=a(2122),i=a(9756),o=(a(7294),a(3905)),s=["components"],r={slug:"yaml",title:"The YAML file Format",sidebar_label:"Understanding YAML"},l=void 0,c={unversionedId:"yaml",id:"yaml",isDocsHomePage:!1,title:"The YAML file Format",description:"When Jonathan Pyle created Docassemble, he chose to use the YAML file format as the main way to represent the contents of an interview. When writing a Docassemble interview, it can be helpful to understand what YAML is, which conventions are Docassemble standards that overlay YAML, and how the different components of a Docassemble interview are represented in YAML.",source:"@site/docs/yaml.md",sourceDirName:".",slug:"/yaml",permalink:"/legal-tech-class/docs/yaml",editUrl:"https://github.com/suffolklitlab/legal-tech-class/edit/master/class/docs/yaml.md",version:"current",frontMatter:{slug:"yaml",title:"The YAML file Format",sidebar_label:"Understanding YAML"},sidebar:"someSidebar",previous:{title:"Repeated Information (Groups)",permalink:"/legal-tech-class/docs/repeated-information"},next:{title:"Understanding Markdown",permalink:"/legal-tech-class/docs/markdown"}},d=[{value:"The components of a YAML file",id:"the-components-of-a-yaml-file",children:[{value:"Documents",id:"documents",children:[]},{value:"Dictionaries",id:"dictionaries",children:[]},{value:"Lists",id:"lists",children:[]},{value:"Data",id:"data",children:[]},{value:"Code blocks",id:"code-blocks",children:[]},{value:"YAML Comments",id:"yaml-comments",children:[]},{value:"Nesting data structures",id:"nesting-data-structures",children:[]}]},{value:"Digging deeper: the fields specifier",id:"digging-deeper-the-fields-specifier",children:[]}],h={toc:d};function u(e){var t=e.components,a=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When Jonathan Pyle created Docassemble, he chose to use the ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/YAML"},"YAML")," file format as the main way to represent the contents of an interview. When writing a Docassemble interview, it can be helpful to understand what YAML is, which conventions are Docassemble standards that overlay YAML, and how the different components of a Docassemble interview are represented in YAML."),(0,o.kt)("p",null,"YAML, which stands for Yet Another Markup Language (or YAML Ain't a Markup Language), is a standardized way for a computer program to save information to a file. Most commonly, this is configuration data: a way to store a list of preferences and settings that relate to a program or web application. One of the goals of YAML is to be human readable. That means a minimum of clutter. YAML stands on the shoulders of previous file formats, such as ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/INI_file"},"INI"),", ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/XML"},"XML"),", and ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/JSON"},"JSON"),", all of which make different trade-offs of readability and conciseness. The structures of the different formats also each tend to represent different kinds of data better."),(0,o.kt)("p",null,"One thing you\u2019ll notice when you look at a YAML file is that there is very little \u201cpunctuation\u201d. There are no square or curly brackets such as those used in JSON, no closing/opening tags such as used in XML, and no section headings such as present in .INI files. Instead, the different kinds of data that a YAML file stores are implied by context, indentation, and two common delimiters: the colon (:) and the dash (-)."),(0,o.kt)("h2",{id:"the-components-of-a-yaml-file"},"The components of a YAML file"),(0,o.kt)("p",null,"There are four standard kinds of elements of a YAML file to keep in mind:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Documents (more usefully called blocks)"),(0,o.kt)("li",{parentName:"ul"},"Dictionaries"),(0,o.kt)("li",{parentName:"ul"},"Lists"),(0,o.kt)("li",{parentName:"ul"},"Data (which is usually text, but could be numeric)")),(0,o.kt)("h3",{id:"documents"},"Documents"),(0,o.kt)("p",null,"Documents represent different sections or blocks of a YAML file. If your interview file has only one section, you don\u2019t need any special marker. If you have more than one section (as is almost certain), each one needs to be separated by three dashes at the start of a line, like this: ---"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nBlock 1\n---\nBlock 2\n")),(0,o.kt)("p",null,"The name document is confusing when applied to a Docassemble interview\u2019s file, since each interview will contain multiple ",(0,o.kt)("inlineCode",{parentName:"p"},"documents"),", but it\u2019s part of the YAML standard. Just mentally replace the word ",(0,o.kt)("inlineCode",{parentName:"p"},"document")," with block if you need to refer to the YAML standard, and you\u2019ll be fine."),(0,o.kt)("h3",{id:"dictionaries"},"Dictionaries"),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Associative_array"},"dictionary")," is a kind of data structure in computer programming. Just like the standard definition, the point of a dictionary is that you have multiple entries (the definitions), and you can look up each entry with a keyword. One thing special about the computer kind of dictionary is that the order of entries doesn\u2019t matter. The only thing guaranteed is that the keyword (or key) retrieves the linked definition. In YAML, a dictionary entry is a key followed by a :, and then a value or definition. In the example below, the keyword is \u201cquestion\u201d and the value is \u201cWhat is your name?\u201d"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"question: What is your name?\nanswer: Jane Smith\n")),(0,o.kt)("p",null,"Throughout the documentation, Docassemble uses the term ",(0,o.kt)("inlineCode",{parentName:"p"},"specifier")," for a dictionary key that has a special meaning inside the interview format. There are many such specifiers, with question, subquestion, fields, and code being specifiers you will use right away."),(0,o.kt)("h3",{id:"lists"},"Lists"),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_(abstract_data_type)"},"list"),", which is similar to an array, is another data structure that represents one or more entries. Lists are simpler than dictionaries. Entries in a list don\u2019t have a label. Instead, each one will get a numeric index assigned automatically, starting at zero. The order does matter. YAML will preserve the order that you write the entries in a list. In YAML, you indicate a list by starting each entry with a dash (-) as in the example below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"- Item 1\n- Item 2\n- Item 3\n")),(0,o.kt)("h3",{id:"data"},"Data"),(0,o.kt)("p",null,"YAML files can also contain data: the values that are stored in a list or dictionary. The most common kind of data is text data. Optionally, text can be surrounded by quotes. This might be needed if your text contains some of the special characters, such as a colon, but more often you leave quotes off. There is one special way to represent data that you should use often inside a Docassemble-flavored YAML file, which is the line continuation indicator or vertical pipe separator (|). Inside a dictionary\u2019s value, the vertical pipe separator tells YAML that everything that follows on the next indented line is going to be text, and that the text may flow on multiple lines and can contain special characters."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nquestion: |\n  This question can contain special characters (such as accents\n  and colons) and can extend across multiple lines. Each line \n  needs to be indented to the same level underneath the dictionary key.\n")),(0,o.kt)("p",null,"Text is text, and as the saying goes, what you see is what you get. However, the text inside a Docassemble YAML file can almost always be formatted using Markdown, which is another standard."),(0,o.kt)("p",null,"I want to discuss ",(0,o.kt)("a",{parentName:"p",href:"/legal-tech-class/docs/markdown"},"Markdown")," here only to point out that an interview file can contain Markdown, but as far as YAML goes, its all plain text. Docassemble looks for Markdown tags in the text and applies the formatting where it\u2019s appropriate."),(0,o.kt)("p",null,"In addition to text blocks that may or not be formatted with Markdown, Docassemble\u2019s YAML files typically contain blocks of instructions called code blocks (which might be called scripts in a different platform)."),(0,o.kt)("h3",{id:"code-blocks"},"Code blocks"),(0,o.kt)("p",null,"Code blocks are just text data as far as the YAML file format is concerned. But Docassemble will interpret the text as Python code. Python is one of the most popular programming languages in the world due to its simple and expressive syntax and ease of learning, as well as its power and extensive library of \u201cpackages\u201d that make it easy to use functionality created by other people."),(0,o.kt)("p",null,"In Docassemble\u2019s YAML files, you can mix Python code with your interview file with the code: specifier, like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"---\ncode: |\n  # Here is a Python comment. Notice the code block must be indented\n  # And that code blocks always use the line continuation / vertical \n  # pipe\n  my_variable = 1 + 3  \n")),(0,o.kt)("p",null,"You might notice that a Python code block in Docassemble is really a special kind of dictionary, one that starts with the keyword \u201ccode\u201d. This lets Docassemble know that the text that follows will interpreted as instructions rather than another purpose. Code blocks are great for instructions and conditional logic that are related to the flow of the interview. More complex code is better contained inside a regular Python module, or .py file. Python code blocks can contain comments, but YAML itself can contain comments, too."),(0,o.kt)("h3",{id:"yaml-comments"},"YAML Comments"),(0,o.kt)("p",null,"The final type of YAML contents that you should be aware of are comments. Comments begin with a # symbol and are ignored by Docassemble. Like the other contents of a YAML file, YAML comments need to follow the same indentation rules. Here\u2019s an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nquestion: |\n  # This is a heading because Docassemble thinks it is Markdown\n# This is a comment because it is not indented as part of the question: key's data field.\n")),(0,o.kt)("p",null,"YAML, like Python, does not have multi-line comments. Each line needs to start with a #. Docassemble does have its own special ",(0,o.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/modifiers.html#comment"},"comment")," ",(0,o.kt)("inlineCode",{parentName:"p"},"specifier")," that can extend over multiple lines."),(0,o.kt)("p",null,"When writing an interview file, use comments liberally. They can make your logic easier to read, either for another developer, or more often, you in a few months or a year."),(0,o.kt)("h3",{id:"nesting-data-structures"},"Nesting data structures"),(0,o.kt)("p",null,"Unlike the INI format, but like JSON and XML, a YAML datastructure can itself contain additional datastructures. For example, each item in a list could be a dictionary, or vice versa. Nesting is done by indentation, with no true limit to the number of indentation levels. The most common indentation for Docassemble\u2019s YAML file is two spaces."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"---\ndictionary_key1:\n  - Item A\n  - Item B\n  - Item C:\n    - Item 1\n    - Item 2\n")),(0,o.kt)("p",null,"This nesting is actually quite common in Docassemble\u2019s interview files. For example, fields: is a dictionary key that contains a list of dictionaries. Sometimes Docassemble allows you to use either a dictionary or a list as the contents of a specifier. Whenever this is true, make sure you understand the major difference: a list has an order that is guaranteed, while a dictionary does not."),(0,o.kt)("h2",{id:"digging-deeper-the-fields-specifier"},"Digging deeper: the fields specifier"),(0,o.kt)("p",null,"Because Docassemble\u2019s fields specifier behaves differently to the regular YAML dictionary keys that they resemble, I wanted to take a minute to look at this specifier a bit closer."),(0,o.kt)("p",null,"Here\u2019s a typical Docassemble question block with a fields specifier:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nquestion: |\n  Information about you\nfields:\n  - First name: client.name.first\n  - Last name: client.name.last\n")),(0,o.kt)("p",null,"Let\u2019s break this down and label the different components."),(0,o.kt)("p",null,"The specifier 1) ",(0,o.kt)("inlineCode",{parentName:"p"},"question")," itself is a dictionary key, followed by text (which could have had Markdown formatting if we desired). 2) ",(0,o.kt)("inlineCode",{parentName:"p"},"fields")," is also a dictionary key. The dashes (3) and (4) represent items in a list that is indented underneath the fields specifier. (5) ",(0,o.kt)("inlineCode",{parentName:"p"},"First name")," and (6) ",(0,o.kt)("inlineCode",{parentName:"p"},"Last name")," represent dictionary keys again, while (7) ",(0,o.kt)("inlineCode",{parentName:"p"},"client.name.first")," and (8) ",(0,o.kt)("inlineCode",{parentName:"p"},"client.name.last")," are values."),(0,o.kt)("p",null,"Wait a second. Doesn\u2019t it make more sense to think of the label (First name, Last name) as a value, while the variable names (client.name.first and client.name.last) are more akin to dictionary keys? Yes, it does. That\u2019s exactly how they are used inside Docassemble itself. However, in this special case, Docassemble does the magic to allow you to write your field labels in a more natural and human-readable order. This is one example where adhering too closely to the YAML format could be a bit confusing."))}u.isMDXComponent=!0}}]);