"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[77685],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),a=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=a(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=a(r),m=o,d=p["".concat(u,".").concat(m)]||p[m]||f[m]||l;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,i=new Array(l);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var a=2;a<l;a++)i[a]=r[a];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},37629:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>d,frontMatter:()=>c,metadata:()=>a,toc:()=>p});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const c={title:"Wix Schema",layout:"documentation_xsd_main"},u=void 0,a={unversionedId:"xsd/wix/index",id:"version-v3/xsd/wix/index",title:"Wix Schema",description:"Schema for describing Windows Installer database files (.msi/.msm/.pcp).",source:"@site/versioned_docs/version-v3/xsd/wix/index.md",sourceDirName:"xsd/wix",slug:"/xsd/wix/",permalink:"/wixtoolset/docs/v3/xsd/wix/",draft:!1,editUrl:"https://github.com/wixtoolset/web/tree/master/src/Docusaurus/versioned_docs/version-v3/xsd/wix/index.md",tags:[],version:"v3",frontMatter:{title:"Wix Schema",layout:"documentation_xsd_main"}},s={},p=[],f={toc:p},m="wrapper";function d(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)(m,l(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},f,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"             Schema for describing Windows Installer database files (.msi/.msm/.pcp).     "),(0,n.kt)("dl",null,(0,n.kt)("dt",null,"Root Elements"),(0,n.kt)("dd",null,(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("a",{href:"../wix/include/"},"Include")),(0,n.kt)("li",null,(0,n.kt)("a",{href:"../wix/wix/"},"Wix")))),(0,n.kt)("dt",null,"Target Namespace"),(0,n.kt)("dd",null,"http://schemas.microsoft.com/wix/2006/wi"),(0,n.kt)("dt",null,"Document Should Look Like"),(0,n.kt)("dd",null,(0,n.kt)("ul",null,(0,n.kt)("li",null,'<?xml version="1.0"?>',(0,n.kt)("br",null),"<",(0,n.kt)("a",{href:"../wix/include/"},"Include"),' xmlns="http://schemas.microsoft.com/wix/2006/wi">',(0,n.kt)("br",null),".",(0,n.kt)("br",null),".",(0,n.kt)("br",null),".",(0,n.kt)("br",null),"</Include>"),(0,n.kt)("li",null,'<?xml version="1.0"?>',(0,n.kt)("br",null),"<",(0,n.kt)("a",{href:"../wix/wix/"},"Wix"),' xmlns="http://schemas.microsoft.com/wix/2006/wi">',(0,n.kt)("br",null),".",(0,n.kt)("br",null),".",(0,n.kt)("br",null),".",(0,n.kt)("br",null),"</Wix>")))))}d.isMDXComponent=!0}}]);