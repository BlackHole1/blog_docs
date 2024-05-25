"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[91990],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),f=o,d=p["".concat(c,".").concat(f)]||p[f]||m[f]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},43396:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const l={title:"Project Templates",layout:"documentation"},c="Project Templates",s={unversionedId:"votive/votive_project_templates",id:"version-v3/votive/votive_project_templates",title:"Project Templates",description:"The WiX Visual Studio package provides the following Visual Studio project templates:",source:"@site/versioned_docs/version-v3/votive/votive_project_templates.md",sourceDirName:"votive",slug:"/votive/votive_project_templates",permalink:"/wixtoolset/docs/v3/votive/votive_project_templates",draft:!1,editUrl:"https://github.com/wixtoolset/web/tree/master/src/Docusaurus/versioned_docs/version-v3/votive/votive_project_templates.md",tags:[],version:"v3",frontMatter:{title:"Project Templates",layout:"documentation"}},u={},p=[],m={toc:p},f="wrapper";function d(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)(f,a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},m,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"project-templates"},"Project Templates"),(0,n.kt)("p",null,"The WiX Visual Studio package provides the following Visual Studio project templates:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"WiX Project")," - used to create a new Windows Installer package (.msi) file. Each new WiX project includes a .wxs file that consists of a ","<","Product",">"," element that contains a skeleton with the WiX authoring required to create a fully functional Windows Installer package. The ","<","Product",">"," element includes ","<","Package",">",", ","<","Media",">",", ","<","Directory",">",", ","<","Component",">"," and ","<","Feature",">"," elements."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"WiX Library Project")," - used to create a new WiX library (.wixlib) file. A .wixlib file is a library of setup functionality that can be easily shared across different WiX-based packages by including it when linking the setup package. Each new WiX library project includes a .wxs file that consists of an empty ","<","Fragment",">"," element that can be populated with WiX authoring that can be shared by multiple packages."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"WiX Merge Module Project")," - used to create a new Windows Installer merge module (.msm) file. A merge module contains a set of Windows Installer resources that can be shared by multiple Windows Installer installation packages by merging the contents of the module into the .msi package. Each new WiX merge module project includes a .wxs file that consists of a ","<","Module",">"," element that contains a skeleton with the WiX authoring required to create a fully functional merge module. The ","<","Module",">"," element includes ","<","Package",">",", ","<","Directory",">"," and ","<","Component",">"," elements.")),(0,n.kt)("p",null,"To create a new project:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click on File | New | Project","\xa0"," on the Visual Studio menu."),(0,n.kt)("li",{parentName:"ol"},"Navigate to the Windows Installer XML node."),(0,n.kt)("li",{parentName:"ol"},"Select the project template and press OK.")))}d.isMDXComponent=!0}}]);