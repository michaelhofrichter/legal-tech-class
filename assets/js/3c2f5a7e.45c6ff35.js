"use strict";(self.webpackChunkopen_class=self.webpackChunkopen_class||[]).push([[5547],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(t),m=i,b=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return t?r.createElement(b,a(a({ref:n},d),{},{components:t})):r.createElement(b,a({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6455:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),a=["components"],l={slug:"editing-docusaurus",title:"Editing",sidebar_label:"Editing"},s=void 0,u={unversionedId:"appendices/editing-docusaurus",id:"appendices/editing-docusaurus",title:"Editing",description:"Recommend enable Windows feature Windows Subsystem for Linux and then the Ubuntu image from Microsoft Store.",source:"@site/docs/appendices/editing-docusaurus.md",sourceDirName:"appendices",slug:"/appendices/editing-docusaurus",permalink:"/legal-tech-class/docs/appendices/editing-docusaurus",editUrl:"https://github.com/suffolklitlab/legal-tech-class/edit/master/class/docs/appendices/editing-docusaurus.md",tags:[],version:"current",frontMatter:{slug:"editing-docusaurus",title:"Editing",sidebar_label:"Editing"},sidebar:"someSidebar",previous:{title:"Working with Docx",permalink:"/legal-tech-class/docs/classes/docacon-2020/working-with-docx"}},d=[{value:"Quick start",id:"quick-start",children:[],level:2},{value:"Installing the remark-mermaid plugin",id:"installing-the-remark-mermaid-plugin",children:[{value:"How I enabled the mermaid plugin (don&#39;t need to re-do this step)",id:"how-i-enabled-the-mermaid-plugin-dont-need-to-re-do-this-step",children:[],level:3}],level:2}],c={toc:d};function p(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Recommend enable Windows feature Windows Subsystem for Linux and then the Ubuntu image from Microsoft Store."),(0,o.kt)("p",null,"In VS Code, you can install the plugins:"),(0,o.kt)("p",null,"Remote - WSL\nMarkdown Preview Enhanced\nMarkdown Preview Mermaid"),(0,o.kt)("p",null,"To see what you are doing as you work."),(0,o.kt)("h2",{id:"quick-start"},"Quick start"),(0,o.kt)("p",null,"git clone"),(0,o.kt)("p",null,"install yarn, node and npm"),(0,o.kt)("p",null,"run ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn")," inside the git repository to download all Node dependencies."),(0,o.kt)("h2",{id:"installing-the-remark-mermaid-plugin"},"Installing the remark-mermaid plugin"),(0,o.kt)("p",null,"You don't need to re-do this. But here are my configuration notes:"),(0,o.kt)("p",null,"to create mermaid graphs, use remark-mermaid plugin. This should install when you run ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn")),(0,o.kt)("p",null,"To build on your environment, you need to install dependencies for chrome-headless"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo apt-get install gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget\n")),(0,o.kt)("h3",{id:"how-i-enabled-the-mermaid-plugin-dont-need-to-re-do-this-step"},"How I enabled the mermaid plugin (don't need to re-do this step)"),(0,o.kt)("p",null,"edit docusaurus.config.js\nAt top of file, add\n",(0,o.kt)("inlineCode",{parentName:"p"},"const mermaid = require('remark-mermaid')")),(0,o.kt)("p",null,'In the "docs" block, add ',(0,o.kt)("inlineCode",{parentName:"p"},"remarkPlugins: [mermaid],"),"\nSee ",(0,o.kt)("a",{parentName:"p",href:"https://mdxjs.com/advanced/plugins"},"https://mdxjs.com/advanced/plugins")," which explains how remark plugins work. Not explained in Docusaurus documentation."))}p.isMDXComponent=!0}}]);