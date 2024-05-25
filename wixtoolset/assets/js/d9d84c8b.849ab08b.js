"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[96803],{3905:(e,t,n)=>{n.d(t,{Zo:()=>a,kt:()=>m});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},a=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,a=c(e,["components","mdxType","originalType","parentName"]),p=u(n),f=l,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},a),{},{components:n})):r.createElement(m,i({ref:t},a))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:l,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},85735:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>m,frontMatter:()=>c,metadata:()=>u,toc:()=>p});n(67294);var r=n(3905);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}const c={title:"HelpCollection Element (Vs Extension)",layout:"documentation_xsd_extension"},s=void 0,u={unversionedId:"xsd/vs/helpcollection",id:"version-v3/xsd/vs/helpcollection",title:"HelpCollection Element (Vs Extension)",description:"Description",source:"@site/versioned_docs/version-v3/xsd/vs/helpcollection.md",sourceDirName:"xsd/vs",slug:"/xsd/vs/helpcollection",permalink:"/wixtoolset/docs/v3/xsd/vs/helpcollection",draft:!1,editUrl:"https://github.com/wixtoolset/web/tree/master/src/Docusaurus/versioned_docs/version-v3/xsd/vs/helpcollection.md",tags:[],version:"v3",frontMatter:{title:"HelpCollection Element (Vs Extension)",layout:"documentation_xsd_extension"}},a={},p=[],d={toc:p},f="wrapper";function m(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)(f,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("dl",null,(0,r.kt)("dt",null,"Description"),(0,r.kt)("dd",null,"                 Help Namespace for a help collection.  The parent file is the key for the HxC (Collection) file.             "),(0,r.kt)("dt",null,"Windows Installer references"),(0,r.kt)("dd",null,"None"),(0,r.kt)("dt",null,"Parents"),(0,r.kt)("dd",null,(0,r.kt)("a",{href:"../../wix/file/"},"File")),(0,r.kt)("dt",null,"Inner Text"),(0,r.kt)("dd",null,"None"),(0,r.kt)("dt",null,"Children"),(0,r.kt)("dd",null,"Choice of elements (min: 0, max: unbounded)",(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("a",{href:"../../vs/helpfileref",class:"extension"},"HelpFileRef")," (min: 0, max: unbounded)"),(0,r.kt)("li",null,(0,r.kt)("a",{href:"../../vs/helpfilterref",class:"extension"},"HelpFilterRef")," (min: 0, max: unbounded)"),(0,r.kt)("li",null,(0,r.kt)("a",{href:"../../vs/plugcollectioninto",class:"extension"},"PlugCollectionInto")," (min: 0, max: unbounded)"))),(0,r.kt)("dt",null,"Attributes"),(0,r.kt)("dd",null,(0,r.kt)("table",{cellspacing:"0",cellpadding:"0",class:"schema"},(0,r.kt)("tr",null,(0,r.kt)("th",{width:"15%"},"Name"),(0,r.kt)("th",{width:"15%"},"Type"),(0,r.kt)("th",{width:"65%"},"Description"),(0,r.kt)("th",{width:"15%"},"Required")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Id"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"Primary Key for HelpNamespace."),(0,r.kt)("td",null,"Yes")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Description"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"Friendly name for Namespace."),(0,r.kt)("td",null,"\xa0")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Name"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"Internal Microsoft Help ID for this Namespace."),(0,r.kt)("td",null,"Yes")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"SuppressCustomActions"),(0,r.kt)("td",null,(0,r.kt)("a",{href:"../../vs/simple_type_yesnotype"},"YesNoType")),(0,r.kt)("td",null,"Suppress linking Help registration custom actions.  Help redistributable merge modules will be required.  Use this when building a merge module."),(0,r.kt)("td",null,"\xa0")))),(0,r.kt)("dt",null,"See Also"),(0,r.kt)("dd",null,(0,r.kt)("a",{href:"../"},"Vs Schema"))))}m.isMDXComponent=!0}}]);