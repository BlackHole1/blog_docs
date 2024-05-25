"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[75160],{3905:(e,t,r)=>{r.d(t,{Zo:()=>a,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},a=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,a=c(e,["components","mdxType","originalType","parentName"]),u=s(r),y=o,d=u["".concat(p,".").concat(y)]||u[y]||f[y]||i;return r?n.createElement(d,l(l({ref:t},a),{},{components:r})):n.createElement(d,l({ref:t},a))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=y;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:o,l[1]=c;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},91932:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>p,default:()=>d,frontMatter:()=>c,metadata:()=>s,toc:()=>u});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const c={title:"Guid (Simple Type)",layout:"documentation_xsd_simpletype"},p=void 0,s={unversionedId:"xsd/ps/simple_type_guid",id:"version-v3/xsd/ps/simple_type_guid",title:"Guid (Simple Type)",description:"Description",source:"@site/versioned_docs/version-v3/xsd/ps/simple_type_guid.md",sourceDirName:"xsd/ps",slug:"/xsd/ps/simple_type_guid",permalink:"/wixtoolset/docs/v3/xsd/ps/simple_type_guid",draft:!1,editUrl:"https://github.com/wixtoolset/web/tree/master/src/Docusaurus/versioned_docs/version-v3/xsd/ps/simple_type_guid.md",tags:[],version:"v3",frontMatter:{title:"Guid (Simple Type)",layout:"documentation_xsd_simpletype"}},a={},u=[],f={toc:u},y="wrapper";function d(e){var{components:t}=e,r=l(e,["components"]);return(0,n.kt)(y,i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},f,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("dl",null,(0,n.kt)("dt",null,"Description"),(0,n.kt)("dd",null,"Values of this type will look like: `01234567-89AB-CDEF-0123-456789ABCDEF` or `","{","01234567-89AB-CDEF-0123-456789ABCDEF","}",'`. Also allows "PUT-GUID-HERE" for use in examples.'),(0,n.kt)("dt",null,"Pattern Type"),(0,n.kt)("dd",null,"Must match the regular expression: '[","{","(]?[0-9A-Fa-f]","{","8","}","\\-?[0-9A-Fa-f]","{","4","}","\\-?[0-9A-Fa-f]","{","4","}","\\-?[0-9A-Fa-f]","{","4","}","\\-?[0-9A-Fa-f]","{","12","}","[","}",")]?|[","{","(]?\\?","{","8","}","\\-\\?","{","4","}","\\-\\?","{","4","}","\\-\\?","{","4","}","\\-\\?","{","12","}","[","}",")]?|PUT\\-GUID\\-(\\d+\\-)?HERE|([!$])(\\(var|\\(loc|\\(wix)\\.[_A-Za-z][0-9A-Za-z_.]*\\)'."),(0,n.kt)("dt",null,"See Also"),(0,n.kt)("dd",null,(0,n.kt)("a",{href:"../"},"Ps Schema"))))}d.isMDXComponent=!0}}]);