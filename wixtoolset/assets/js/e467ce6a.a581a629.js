"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[70326],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),a=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=a(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=a(n),f=o,y=p["".concat(s,".").concat(f)]||p[f]||d[f]||c;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var a=2;a<c;a++)i[a]=n[a];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},17115:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>y,frontMatter:()=>l,metadata:()=>a,toc:()=>p});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={title:"Dependency Schema",layout:"documentation_xsd_extension"},s=void 0,a={unversionedId:"xsd/dependency/index",id:"version-v3/xsd/dependency/index",title:"Dependency Schema",description:"The source code schema for the Windows Installer XML Toolset Dependency Extension.",source:"@site/versioned_docs/version-v3/xsd/dependency/index.md",sourceDirName:"xsd/dependency",slug:"/xsd/dependency/",permalink:"/wixtoolset/docs/v3/xsd/dependency/",draft:!1,editUrl:"https://github.com/wixtoolset/web/tree/master/src/Docusaurus/versioned_docs/version-v3/xsd/dependency/index.md",tags:[],version:"v3",frontMatter:{title:"Dependency Schema",layout:"documentation_xsd_extension"}},u={},p=[],d={toc:p},f="wrapper";function y(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)(f,c(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"             The source code schema for the Windows Installer XML Toolset Dependency Extension.         "),(0,r.kt)("dl",null,(0,r.kt)("dt",null,"Target Namespace"),(0,r.kt)("dd",null,"http://schemas.microsoft.com/wix/DependencyExtension"),(0,r.kt)("dt",null,"Child Elements"),(0,r.kt)("dd",null,(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("a",{href:"./provides",class:"extension"},"Provides")),(0,r.kt)("li",null,(0,r.kt)("a",{href:"./requires",class:"extension"},"Requires")),(0,r.kt)("li",null,(0,r.kt)("a",{href:"./requiresref",class:"extension"},"RequiresRef"))))))}y.isMDXComponent=!0}}]);