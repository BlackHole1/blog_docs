"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[79927],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),u=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(a.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),f=o,b=p["".concat(a,".").concat(f)]||p[f]||d[f]||i;return r?n.createElement(b,l(l({ref:t},s),{},{components:r})):n.createElement(b,l({ref:t},s))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=f;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c[p]="string"==typeof e?e:o,l[1]=c;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},86435:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>b,frontMatter:()=>c,metadata:()=>u,toc:()=>p});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const c={title:"UIRef Element",layout:"documentation_xsd_main"},a=void 0,u={unversionedId:"xsd/wix/uiref",id:"version-v3/xsd/wix/uiref",title:"UIRef Element",description:"Description",source:"@site/versioned_docs/version-v3/xsd/wix/uiref.md",sourceDirName:"xsd/wix",slug:"/xsd/wix/uiref",permalink:"/wixtoolset/docs/v3/xsd/wix/uiref",draft:!1,editUrl:"https://github.com/wixtoolset/web/tree/master/src/Docusaurus/versioned_docs/version-v3/xsd/wix/uiref.md",tags:[],version:"v3",frontMatter:{title:"UIRef Element",layout:"documentation_xsd_main"}},s={},p=[],d={toc:p},f="wrapper";function b(e){var{components:t}=e,r=l(e,["components"]);return(0,n.kt)(f,i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},d,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("dl",null,(0,n.kt)("dt",null,"Description"),(0,n.kt)("dd",null,"                 Reference to a UI element.  This will force the entire referenced Fragment's contents                 to be included in the installer database.             "),(0,n.kt)("dt",null,"Windows Installer references"),(0,n.kt)("dd",null,"None"),(0,n.kt)("dt",null,"Parents"),(0,n.kt)("dd",null,(0,n.kt)("a",{href:"../fragment/"},"Fragment"),", ",(0,n.kt)("a",{href:"../module/"},"Module"),", ",(0,n.kt)("a",{href:"../patchfamily/"},"PatchFamily"),", ",(0,n.kt)("a",{href:"../product/"},"Product"),", ",(0,n.kt)("a",{href:"../ui/"},"UI")),(0,n.kt)("dt",null,"Inner Text"),(0,n.kt)("dd",null,"None"),(0,n.kt)("dt",null,"Children"),(0,n.kt)("dd",null,"None"),(0,n.kt)("dt",null,"Attributes"),(0,n.kt)("dd",null,(0,n.kt)("table",{cellspacing:"0",cellpadding:"0",class:"schema"},(0,n.kt)("tr",null,(0,n.kt)("th",{width:"15%"},"Name"),(0,n.kt)("th",{width:"15%"},"Type"),(0,n.kt)("th",{width:"65%"},"Description"),(0,n.kt)("th",{width:"15%"},"Required")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Id"),(0,n.kt)("td",null,"String"),(0,n.kt)("td",null,"\xa0"),(0,n.kt)("td",null,"Yes")),(0,n.kt)("tr",null,(0,n.kt)("td",{colspan:"4"},(0,n.kt)("span",{class:"extension"},"Any Attribute (namespace='##other' processContents='lax')                      Extensibility point in the WiX XML Schema.  Schema extensions can register additional                     attributes at this point in the schema.                 "))))),(0,n.kt)("dt",null,"See Also"),(0,n.kt)("dd",null,(0,n.kt)("a",{href:"../"},"Wix Schema"),", ",(0,n.kt)("a",{href:"../ui/"},"UI"))))}b.isMDXComponent=!0}}]);