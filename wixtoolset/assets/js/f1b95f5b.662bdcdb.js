"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[48807],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),u=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(a.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,f=d["".concat(a,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=m;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c[d]="string"==typeof e?e:i,l[1]=c;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70116:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>d});n(67294);var r=n(3905);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const c={title:"Wix Element",layout:"documentation_xsd_main"},a=void 0,u={unversionedId:"xsd/wix/wix/wix",id:"version-v3/xsd/wix/wix/wix",title:"Wix Element",description:"Description",source:"@site/versioned_docs/version-v3/xsd/wix/wix/wix.md",sourceDirName:"xsd/wix/wix",slug:"/xsd/wix/wix/",permalink:"/wixtoolset/docs/v3/xsd/wix/wix/",draft:!1,editUrl:"https://github.com/wixtoolset/web/tree/master/src/Docusaurus/versioned_docs/version-v3/xsd/wix/wix/wix.md",tags:[],version:"v3",frontMatter:{title:"Wix Element",layout:"documentation_xsd_main"}},s={},d=[],p={toc:d},m="wrapper";function f(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)(m,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},p,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("dl",null,(0,r.kt)("dt",null,"Description"),(0,r.kt)("dd",null,"             This is the top-level container element for every wxs file.  Among the possible children,             the Bundle, Product, Module, Patch, and PatchCreation elements are analogous to the main function in a C program.             There can only be one of these present when linking occurs.  Product compiles into an msi file,             Module compiles into an msm file, PatchCreation compiles into a pcp file.  The Fragment element             is an atomic unit which ultimately links into either a Product, Module, or PatchCreation.  The             Fragment can either be completely included or excluded during linking.         "),(0,r.kt)("dt",null,"Windows Installer references"),(0,r.kt)("dd",null,"None"),(0,r.kt)("dt",null,"Parents"),(0,r.kt)("dd",null,"None"),(0,r.kt)("dt",null,"Inner Text"),(0,r.kt)("dd",null,"None"),(0,r.kt)("dt",null,"Children"),(0,r.kt)("dd",null,"Choice of elements (min: 0, max: 1)",(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("a",{href:"../patchcreation"},"PatchCreation")," (min: 0, max: 1)"),(0,r.kt)("li",null,"Sequence (min: 1, max: 1)",(0,r.kt)("ol",null,(0,r.kt)("li",null,"Choice of elements (min: 0, max: 1)",(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("a",{href:"../bundle"},"Bundle")," (min: 0, max: 1)"),(0,r.kt)("li",null,(0,r.kt)("a",{href:"../module"},"Module")," (min: 0, max: 1)"),(0,r.kt)("li",null,(0,r.kt)("a",{href:"../patch"},"Patch")," (min: 0, max: 1)"),(0,r.kt)("li",null,(0,r.kt)("a",{href:"../product"},"Product")," (min: 0, max: 1)"))),(0,r.kt)("li",null,(0,r.kt)("a",{href:"../fragment"},"Fragment")," (min: 0, max: unbounded)"))))),(0,r.kt)("dt",null,"Attributes"),(0,r.kt)("dd",null,(0,r.kt)("table",{cellspacing:"0",cellpadding:"0",class:"schema"},(0,r.kt)("tr",null,(0,r.kt)("th",{width:"15%"},"Name"),(0,r.kt)("th",{width:"15%"},"Type"),(0,r.kt)("th",{width:"65%"},"Description"),(0,r.kt)("th",{width:"15%"},"Required")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"RequiredVersion"),(0,r.kt)("td",null,(0,r.kt)("a",{href:"../simple_type_versiontype"},"VersionType")),(0,r.kt)("td",null,"Required version of the WiX toolset to compile this input file."),(0,r.kt)("td",null,"\xa0")),(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"4"},(0,r.kt)("span",{class:"extension"},"Any Attribute (namespace='##other' processContents='lax')                      Extensibility point in the WiX XML Schema. Schema extensions can register additional attributes at this point in the schema.                 "),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("span",{class:"extension"},"RequiredVersion")),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"         The version of this extension required to compile the defining source.        (http://schemas.microsoft.com/wix/PSExtension)"),(0,r.kt)("td",null,"\xa0")))))),(0,r.kt)("dt",null,"See Also"),(0,r.kt)("dd",null,(0,r.kt)("a",{href:"../"},"Wix Schema"))))}f.isMDXComponent=!0}}]);