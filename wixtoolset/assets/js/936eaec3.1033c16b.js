"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[62925],{3905:(e,t,r)=>{r.d(t,{Zo:()=>a,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},a=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,a=c(e,["components","mdxType","originalType","parentName"]),p=u(r),f=o,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return r?n.createElement(m,l(l({ref:t},a),{},{components:r})):n.createElement(m,l({ref:t},a))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:o,l[1]=c;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},49665:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>m,frontMatter:()=>c,metadata:()=>u,toc:()=>p});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const c={title:"RegisterMIMEInfo Element",layout:"documentation_xsd_main"},s=void 0,u={unversionedId:"xsd/wix/registermimeinfo",id:"version-v3/xsd/wix/registermimeinfo",title:"RegisterMIMEInfo Element",description:"Description",source:"@site/versioned_docs/version-v3/xsd/wix/registermimeinfo.md",sourceDirName:"xsd/wix",slug:"/xsd/wix/registermimeinfo",permalink:"/wixtoolset/docs/v3/xsd/wix/registermimeinfo",draft:!1,editUrl:"https://github.com/wixtoolset/web/tree/master/src/Docusaurus/versioned_docs/version-v3/xsd/wix/registermimeinfo.md",tags:[],version:"v3",frontMatter:{title:"RegisterMIMEInfo Element",layout:"documentation_xsd_main"}},a={},p=[],d={toc:p},f="wrapper";function m(e){var{components:t}=e,r=l(e,["components"]);return(0,n.kt)(f,i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},d,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("dl",null,(0,n.kt)("dt",null,"Description"),(0,n.kt)("dd",null,"Registers MIME-related registry information with the system.  The condition for this action may be specified in the element's inner text."),(0,n.kt)("dt",null,"Windows Installer references"),(0,n.kt)("dd",null,(0,n.kt)("a",{href:"http://msdn.microsoft.com/library/aa371160.aspx",target:"_blank"},"RegisterMIMEInfo Action")),(0,n.kt)("dt",null,"Parents"),(0,n.kt)("dd",null,(0,n.kt)("a",{href:"../advertiseexecutesequence/"},"AdvertiseExecuteSequence"),", ",(0,n.kt)("a",{href:"../installexecutesequence/"},"InstallExecuteSequence")),(0,n.kt)("dt",null,"Inner Text (xs:string)"),(0,n.kt)("dd",null,"This element may have inner text."),(0,n.kt)("dt",null,"Children"),(0,n.kt)("dd",null,"None"),(0,n.kt)("dt",null,"Attributes"),(0,n.kt)("dd",null,(0,n.kt)("table",{cellspacing:"0",cellpadding:"0",class:"schema"},(0,n.kt)("tr",null,(0,n.kt)("th",{width:"15%"},"Name"),(0,n.kt)("th",{width:"15%"},"Type"),(0,n.kt)("th",{width:"65%"},"Description"),(0,n.kt)("th",{width:"15%"},"Required")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Sequence"),(0,n.kt)("td",null,"Integer"),(0,n.kt)("td",null,"A value used to indicate the position of this action in a sequence."),(0,n.kt)("td",null,"\xa0")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Suppress"),(0,n.kt)("td",null,(0,n.kt)("a",{href:"../simple_type_yesnotype/"},"YesNoType")),(0,n.kt)("td",null,"If yes, this action will not occur."),(0,n.kt)("td",null,"\xa0")))),(0,n.kt)("dt",null,"See Also"),(0,n.kt)("dd",null,(0,n.kt)("a",{href:"../"},"Wix Schema"))))}m.isMDXComponent=!0}}]);