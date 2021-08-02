"use strict";(self.webpackChunkopen_class=self.webpackChunkopen_class||[]).push([[5697],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=p(a),h=i,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return a?n.createElement(m,l(l({ref:t},c),{},{components:a})):n.createElement(m,l({ref:t},c))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,l=new Array(o);l[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6601:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var n=a(2122),i=a(9756),o=(a(7294),a(3905)),l=["components"],r={slug:"installing-production-app",title:"Installing a docassemble app on your production server",sidebar_label:"Installing a docassemble app on your production server"},s=void 0,p={unversionedId:"practical-guide-docassemble/installing-production-app",id:"practical-guide-docassemble/installing-production-app",isDocsHomePage:!1,title:"Installing a docassemble app on your production server",description:"Installing your app involves three basic steps:",source:"@site/docs/practical-guide-docassemble/installing-production-app.md",sourceDirName:"practical-guide-docassemble",slug:"/practical-guide-docassemble/installing-production-app",permalink:"/legal-tech-class/docs/practical-guide-docassemble/installing-production-app",editUrl:"https://github.com/suffolklitlab/legal-tech-class/edit/master/class/docs/practical-guide-docassemble/installing-production-app.md",version:"current",frontMatter:{slug:"installing-production-app",title:"Installing a docassemble app on your production server",sidebar_label:"Installing a docassemble app on your production server"},sidebar:"someSidebar",previous:{title:"Overview of Jinja2",permalink:"/legal-tech-class/docs/jinja2"},next:{title:"Installing a docassemble server",permalink:"/legal-tech-class/docs/practical-guide-docassemble/setup-server"}},c=[{value:"Quick start",id:"quick-start",children:[]},{value:"Installing the app system-wide",id:"installing-the-app-system-wide",children:[]},{value:"Running the installed package",id:"running-the-installed-package",children:[]},{value:"Creating a permanent shortcut link to the package",id:"creating-a-permanent-shortcut-link-to-the-package",children:[]},{value:"Updating an app that is already installed",id:"updating-an-app-that-is-already-installed",children:[]}],u={toc:c};function d(e){var t=e.components,a=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Installing your app involves three basic steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://docassemble.org/docs/packages.html#playground"},"Putting the app into a\npackage."),". It's best\nto store the package on Github."),(0,o.kt)("li",{parentName:"ol"},"Installing the app system-wide."),(0,o.kt)("li",{parentName:"ol"},"Creating a shortcut ",(0,o.kt)("inlineCode",{parentName:"li"},"alias"),' to the app so that you can view it on the\n"Available interviews" /list menu and run it via /start/',(0,o.kt)("inlineCode",{parentName:"li"},"alias"),".")),(0,o.kt)("h2",{id:"quick-start"},"Quick start"),(0,o.kt)("p",null,"Before installing the package, you will need:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The URL to the package on GitHub."),(0,o.kt)("li",{parentName:"ol"},"The name of the interview YAML file."),(0,o.kt)("li",{parentName:"ol"},'The desired "alias" or shortcut name for the package.')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The interview author should be able to provide all three pieces of information\nto the server administrator before asking for the app to be installed.")),(0,o.kt)("h2",{id:"installing-the-app-system-wide"},"Installing the app system-wide"),(0,o.kt)("p",null,'To install a package, visit the "Package Management" page on your docassemble\nserver (you can reach it via Menu | Package Management, or the /updatepackage\npage on your server.\n)'),(0,o.kt)("p",null,'Copy the Github link to your package into the "Github URL" input. It should look\nsomething like this: ',(0,o.kt)("inlineCode",{parentName:"p"},"https://github.com/gbls/docassemble-MAEvictionDefense"),"\n(without any trailing ",(0,o.kt)("inlineCode",{parentName:"p"},"/"),")."),(0,o.kt)("p",null,'Now, scroll down and click on the large "Update" button. Although this is marked\n"Update," it also serves to install a package for the first time.'),(0,o.kt)("h2",{id:"running-the-installed-package"},"Running the installed package"),(0,o.kt)("p",null,"Now that you've installed the package, how do you run it? You will need to\nidentify two things:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The internal/Python name of the package that corresponds to your package from\nGitHub."),(0,o.kt)("li",{parentName:"ol"},"The name of the YAML file(s) that contains the runnable logic of the package.")),(0,o.kt)("p",null,"The internal name of the package is very similar to the name of the GitHub\nrepository, except that you replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"-")," with a ",(0,o.kt)("inlineCode",{parentName:"p"},"."),". For example, the package\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gbls/docassemble-MAEvictionDefense"},"https://github.com/gbls/docassemble-MAEvictionDefense")," becomes\n",(0,o.kt)("inlineCode",{parentName:"p"},"docassemble.MAEvictionDefense"),'. Package names are case sensitive. If you used\nthe docassemble playground to create your package, it will always start with\n"docassemble" as the beginning of the package name.'),(0,o.kt)("p",null,"The YAML file name is simply the name that the file has in your playground.\nIf this is someone else's package, you will need to do a small amount of dective\nwork. "),(0,o.kt)("p",null,'Visit the GitHub page for the package. Each docassemble package has the same\nfolder structure. Navigate by clicking through the folders as follows, replacing\n"PackageName" with the name of your package.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docassemble\n  +---[PackageName]\n    +----data\n      +---questions\n")),(0,o.kt)("p",null,"For example, for the MAEvictionDefense package, the folder contents\nlook like this:\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/GBLS/docassemble-MAEvictionDefense/tree/master/docassemble/MAEvictionDefense/data/questions"},"https://github.com/GBLS/docassemble-MAEvictionDefense/tree/master/docassemble/MAEvictionDefense/data/questions")),(0,o.kt)("p",null,'For some packages, there is only one YAML file. If there is more than one, you\ncan either ask the package author which one should be run, or click through a\nfew and pick the likeliest candidate. For the MAEvictionDefense package, the\nmain interview file is named "eviction.yml".'),(0,o.kt)("p",null,"For a package named ",(0,o.kt)("inlineCode",{parentName:"p"},"docassemble.MAEvictionDefense")," and a YAML file named\n",(0,o.kt)("inlineCode",{parentName:"p"},"eviction.yml"),", the link to run the interview is\n",(0,o.kt)("inlineCode",{parentName:"p"},"https://[docassemble.example.com]/run/MAEvictionDefense/eviction"),"."),(0,o.kt)("h2",{id:"creating-a-permanent-shortcut-link-to-the-package"},"Creating a permanent shortcut link to the package"),(0,o.kt)("p",null,"If you want, you can add a ",(0,o.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/config.html#dispatch"},"customizable, short\nalias")," for the interview."),(0,o.kt)("p",null,'This adds the interview to the /list URL on the server, the "Available\ninterviews" menu option, and allows you to advertise a nicer URL, like\n',(0,o.kt)("inlineCode",{parentName:"p"},"https://docassemble.example.com/start/alias"),"."),(0,o.kt)("p",null,"This gives you a lot of flexibility to repackage your app later, which\nmakes it a good idea if you ever want to share the link on a different\nwebsite."),(0,o.kt)("p",null,"You will use the same information needed above: the ",(0,o.kt)("strong",{parentName:"p"},"package name"),"\nand the ",(0,o.kt)("strong",{parentName:"p"},"YAML filename"),"."),(0,o.kt)("p",null,"Visit the docassemble configuration page (/config) on your server."),(0,o.kt)("p",null,"Scroll down and look for an existing ",(0,o.kt)("inlineCode",{parentName:"p"},"dispatch")," section in your\nconfiguration file. If you don't see one, create a new one that looks\nlike this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"dispatch:\n  alias: docassemble.MyPackageName:data/questions/interview_name.yml\n")),(0,o.kt)("p",null,'Replace "MyPackageName" and "interview_name.yml" with the package name\nand the YAML filename for your package, respectively. Now, when someone\nvisits "',(0,o.kt)("a",{parentName:"p",href:"https://docassemble.example.com/start/alias%22"},'https://docassemble.example.com/start/alias"'),' they will be redirected to the\n"interview_name.yml" interview.'),(0,o.kt)("p",null,"For example, for the MAEvictionDefense package, the configuration looks like\nthis:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"dispatch:\n  eviction: docassemble.MAEvictionDefense:data/questions/eviction.yml\n")),(0,o.kt)("p",null,"And the interview can be run via ",(0,o.kt)("inlineCode",{parentName:"p"},"https://interviews.gbls.org/start/eviction"),"."),(0,o.kt)("h2",{id:"updating-an-app-that-is-already-installed"},"Updating an app that is already installed"),(0,o.kt)("p",null,'If the app has already been installed on the server, you do not need to get the\nGitHub URL again. Just scroll down the /updatepackage page until you see the\nname of the package (remember, it will be docassemble.PackageName). Then click the\n"update" button next to the package.'),(0,o.kt)("p",null,'If you do not see the "update" button but the package is listed, then use the\nGitHub URL as described above.'))}d.isMDXComponent=!0}}]);