"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[44779],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),a=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=a(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=a(n),f=o,y=p["".concat(c,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(y,l(l({ref:t},u),{},{components:n})):r.createElement(y,l({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,l[1]=s;for(var a=2;a<i;a++)l[a]=n[a];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},58118:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>y,frontMatter:()=>s,metadata:()=>a,toc:()=>p});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={title:"RegisterFonts Element",layout:"documentation_xsd_main"},c=void 0,a={unversionedId:"xsd/wix/registerfonts",id:"version-v3/xsd/wix/registerfonts",title:"RegisterFonts Element",description:"Description",source:"@site/versioned_docs/version-v3/xsd/wix/registerfonts.md",sourceDirName:"xsd/wix",slug:"/xsd/wix/registerfonts",permalink:"/wixtoolset/docs/v3/xsd/wix/registerfonts",draft:!1,editUrl:"https://github.com/wixtoolset/web/tree/master/src/Docusaurus/versioned_docs/version-v3/xsd/wix/registerfonts.md",tags:[],version:"v3",frontMatter:{title:"RegisterFonts Element",layout:"documentation_xsd_main"}},u={},p=[],d={toc:p},f="wrapper";function y(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)(f,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("dl",null,(0,r.kt)("dt",null,"Description"),(0,r.kt)("dd",null,"Registers installed fonts with the system.  The condition for this action may be specified in the element's inner text."),(0,r.kt)("dt",null,"Windows Installer references"),(0,r.kt)("dd",null,(0,r.kt)("a",{href:"http://msdn.microsoft.com/library/aa371158.aspx",target:"_blank"},"RegisterFonts Action")),(0,r.kt)("dt",null,"Parents"),(0,r.kt)("dd",null,(0,r.kt)("a",{href:"../installexecutesequence/"},"InstallExecuteSequence")),(0,r.kt)("dt",null,"Inner Text (xs:string)"),(0,r.kt)("dd",null,"This element may have inner text."),(0,r.kt)("dt",null,"Children"),(0,r.kt)("dd",null,"None"),(0,r.kt)("dt",null,"Attributes"),(0,r.kt)("dd",null,(0,r.kt)("table",{cellspacing:"0",cellpadding:"0",class:"schema"},(0,r.kt)("tr",null,(0,r.kt)("th",{width:"15%"},"Name"),(0,r.kt)("th",{width:"15%"},"Type"),(0,r.kt)("th",{width:"65%"},"Description"),(0,r.kt)("th",{width:"15%"},"Required")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Sequence"),(0,r.kt)("td",null,"Integer"),(0,r.kt)("td",null,"A value used to indicate the position of this action in a sequence."),(0,r.kt)("td",null,"\xa0")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Suppress"),(0,r.kt)("td",null,(0,r.kt)("a",{href:"../simple_type_yesnotype/"},"YesNoType")),(0,r.kt)("td",null,"If yes, this action will not occur."),(0,r.kt)("td",null,"\xa0")))),(0,r.kt)("dt",null,"See Also"),(0,r.kt)("dd",null,(0,r.kt)("a",{href:"../"},"Wix Schema"))))}y.isMDXComponent=!0}}]);