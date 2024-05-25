"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[59623],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=c(n),d=o,m=f["".concat(u,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[f]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6565:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>f});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={title:"FeatureRef Element",layout:"documentation_xsd_main"},u=void 0,c={unversionedId:"xsd/wix/featureref",id:"version-v3/xsd/wix/featureref",title:"FeatureRef Element",description:"Description",source:"@site/versioned_docs/version-v3/xsd/wix/featureref.md",sourceDirName:"xsd/wix",slug:"/xsd/wix/featureref",permalink:"/wixtoolset/docs/v3/xsd/wix/featureref",draft:!1,editUrl:"https://github.com/wixtoolset/web/tree/master/src/Docusaurus/versioned_docs/version-v3/xsd/wix/featureref.md",tags:[],version:"v3",frontMatter:{title:"FeatureRef Element",layout:"documentation_xsd_main"}},s={},f=[],p={toc:f},d="wrapper";function m(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)(d,a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},p,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("dl",null,(0,r.kt)("dt",null,"Description"),(0,r.kt)("dd",null,"Create a reference to a Feature element in another Fragment."),(0,r.kt)("dt",null,"Windows Installer references"),(0,r.kt)("dd",null,"None"),(0,r.kt)("dt",null,"Parents"),(0,r.kt)("dd",null,(0,r.kt)("a",{href:"../feature/"},"Feature"),", ",(0,r.kt)("a",{href:"../featuregroup/"},"FeatureGroup"),", ",(0,r.kt)("a",{href:"../featureref/"},"FeatureRef"),", ",(0,r.kt)("a",{href:"../fragment/"},"Fragment"),", ",(0,r.kt)("a",{href:"../patchfamily/"},"PatchFamily"),", ",(0,r.kt)("a",{href:"../product/"},"Product")),(0,r.kt)("dt",null,"Inner Text"),(0,r.kt)("dd",null,"None"),(0,r.kt)("dt",null,"Children"),(0,r.kt)("dd",null,"Choice of elements (min: 0, max: unbounded)",(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("a",{href:"../component/"},"Component")," (min: 0, max: unbounded)"),(0,r.kt)("li",null,(0,r.kt)("a",{href:"../componentgroupref/"},"ComponentGroupRef")," (min: 0, max: unbounded)"),(0,r.kt)("li",null,(0,r.kt)("a",{href:"../componentref/"},"ComponentRef")," (min: 0, max: unbounded)"),(0,r.kt)("li",null,(0,r.kt)("a",{href:"../feature/"},"Feature")," (min: 0, max: unbounded)"),(0,r.kt)("li",null,(0,r.kt)("a",{href:"../featuregroup/"},"FeatureGroup")," (min: 0, max: unbounded)"),(0,r.kt)("li",null,(0,r.kt)("a",{href:"../featuregroupref/"},"FeatureGroupRef")," (min: 0, max: unbounded)"),(0,r.kt)("li",null,(0,r.kt)("a",{href:"../featureref/"},"FeatureRef")," (min: 0, max: unbounded)"),(0,r.kt)("li",null,(0,r.kt)("a",{href:"../mergeref/"},"MergeRef")," (min: 0, max: unbounded)"),(0,r.kt)("li",null,(0,r.kt)("span",{class:"extension"},"Any Element (namespace='##other' processContents='Lax')                          Extensibility point in the WiX XML Schema.  Schema extensions can register additional                         elements at this point in the schema.                     ")))),(0,r.kt)("dt",null,"Attributes"),(0,r.kt)("dd",null,(0,r.kt)("table",{cellspacing:"0",cellpadding:"0",class:"schema"},(0,r.kt)("tr",null,(0,r.kt)("th",{width:"15%"},"Name"),(0,r.kt)("th",{width:"15%"},"Type"),(0,r.kt)("th",{width:"65%"},"Description"),(0,r.kt)("th",{width:"15%"},"Required")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Id"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"The identifier of the Feature element to reference."),(0,r.kt)("td",null,"Yes")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"IgnoreParent"),(0,r.kt)("td",null,(0,r.kt)("a",{href:"../simple_type_yesnotype/"},"YesNoType")),(0,r.kt)("td",null,"                     Normally feature references that are nested under a parent element create a connection to that                     parent. This behavior is undesirable when trying to simply reference a Feature in a different                     Fragment.  Specify 'yes' to have this feature reference not create a connection to its parent.                     The default is 'no'.                 "),(0,r.kt)("td",null,"\xa0")),(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"4"},(0,r.kt)("span",{class:"extension"},"Any Attribute (namespace='##other' processContents='lax')                      Extensibility point in the WiX XML Schema.  Schema extensions can register additional                     attributes at this point in the schema.                 "))))),(0,r.kt)("dt",null,"See Also"),(0,r.kt)("dd",null,(0,r.kt)("a",{href:"../"},"Wix Schema"),", ",(0,r.kt)("a",{href:"../feature/"},"Feature"))))}m.isMDXComponent=!0}}]);