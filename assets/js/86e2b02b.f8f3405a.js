"use strict";(self.webpackChunkopen_class=self.webpackChunkopen_class||[]).push([[666],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),p=a,f=m["".concat(c,".").concat(p)]||m[p]||d[p]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2749:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),l=["components"],i={slug:"markdown",title:"The Markdown formatting language",sidebar_label:"Understanding Markdown"},c=void 0,s={unversionedId:"markdown",id:"markdown",isDocsHomePage:!1,title:"The Markdown formatting language",description:"The Markdown formatting language",source:"@site/docs/markdown.md",sourceDirName:".",slug:"/markdown",permalink:"/legal-tech-class/docs/markdown",editUrl:"https://github.com/suffolklitlab/legal-tech-class/edit/master/class/docs/markdown.md",version:"current",frontMatter:{slug:"markdown",title:"The Markdown formatting language",sidebar_label:"Understanding Markdown"},sidebar:"someSidebar",previous:{title:"Understanding YAML",permalink:"/legal-tech-class/docs/yaml"},next:{title:"Overview of Mako",permalink:"/legal-tech-class/docs/mako"}},u=[{value:"The Markdown formatting language",id:"the-markdown-formatting-language",children:[]},{value:"Including variable text",id:"including-variable-text",children:[]}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"the-markdown-formatting-language"},"The Markdown formatting language"),(0,o.kt)("p",null,"Like YAML, ",(0,o.kt)("a",{parentName:"p",href:"https://daringfireball.net/projects/markdown/"},"Markdown")," is meant to be a concise, human readable way to represent information: in this case, it represents elements such as font size, headers, bold, italic, formatted lists, and even links to resources on the WWW. Many forums, including the popular Reddit, allow you to format your comments using Markdown. However, it is not quite as expressive as an OOXML, Word, or RTF file would be."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},"#### Heading level 4\n**Bold text**\n_italic text__\n\n1. Numbered item 1\n1. Numbered item 2\n1. Numbered item 3\n")),(0,o.kt)("p",null,"Turns into:"),(0,o.kt)("h4",{id:"heading-level-4"},"Heading level 4"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Bold text")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"italic text")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Numbered item 1"),(0,o.kt)("li",{parentName:"ol"},"Numbered item 2"),(0,o.kt)("li",{parentName:"ol"},"Numbered item 3")),(0,o.kt)("h2",{id:"including-variable-text"},"Including variable text"),(0,o.kt)("p",null,"In order to add variable text, Docassemble uses the ",(0,o.kt)("a",{parentName:"p",href:"/legal-tech-class/docs/mako"},"Mako templating language")," which\ncan be inserted directly almost anywhere Docassemble expects text, such as under a\n",(0,o.kt)("inlineCode",{parentName:"p"},"question"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"subquestion"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"content")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"template")," block."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/markup.html"},"Docassemble documentation")," covers Markdown fairly well, with examples. "),(0,o.kt)("p",null,"This section was originally posted as a blog on ",(0,o.kt)("a",{parentName:"p",href:"https://www.nonprofittechy.com/2020/01/17/understanding-docassembles-yaml-interview-format/"},"Nonprofittechy.com"),"."))}m.isMDXComponent=!0}}]);