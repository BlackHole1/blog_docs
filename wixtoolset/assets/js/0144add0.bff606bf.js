"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[65224],{3905:(e,t,n)=>{n.d(t,{Zo:()=>a,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},a=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,a=i(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,d=p["".concat(c,".").concat(f)]||p[f]||m[f]||l;return n?o.createElement(d,s(s({ref:t},a),{},{components:n})):o.createElement(d,s({ref:t},a))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var u=2;u<l;u++)s[u]=n[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},45572:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>p});n(67294);var o=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={title:"Complus Schema",layout:"documentation_xsd_extension"},c=void 0,u={unversionedId:"xsd/complus/index",id:"version-v3/xsd/complus/index",title:"Complus Schema",description:"The source code schema for the Windows Installer XML Toolset COM+ Extension.",source:"@site/versioned_docs/version-v3/xsd/complus/index.md",sourceDirName:"xsd/complus",slug:"/xsd/complus/",permalink:"/wixtoolset/docs/v3/xsd/complus/",draft:!1,editUrl:"https://github.com/wixtoolset/web/tree/master/src/Docusaurus/versioned_docs/version-v3/xsd/complus/index.md",tags:[],version:"v3",frontMatter:{title:"Complus Schema",layout:"documentation_xsd_extension"}},a={},p=[],m={toc:p},f="wrapper";function d(e){var{components:t}=e,n=s(e,["components"]);return(0,o.kt)(f,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"       The source code schema for the Windows Installer XML Toolset COM+ Extension.     "),(0,o.kt)("dl",null,(0,o.kt)("dt",null,"Target Namespace"),(0,o.kt)("dd",null,"http://schemas.microsoft.com/wix/ComPlusExtension"),(0,o.kt)("dt",null,"Child Elements"),(0,o.kt)("dd",null,(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("a",{href:"./complusapplication",class:"extension"},"ComPlusApplication")),(0,o.kt)("li",null,(0,o.kt)("a",{href:"./complusapplicationrole",class:"extension"},"ComPlusApplicationRole")),(0,o.kt)("li",null,(0,o.kt)("a",{href:"./complusassembly",class:"extension"},"ComPlusAssembly")),(0,o.kt)("li",null,(0,o.kt)("a",{href:"./complusassemblydependency",class:"extension"},"ComPlusAssemblyDependency")),(0,o.kt)("li",null,(0,o.kt)("a",{href:"./compluscomponent",class:"extension"},"ComPlusComponent")),(0,o.kt)("li",null,(0,o.kt)("a",{href:"./complusgroupinapplicationrole",class:"extension"},"ComPlusGroupInApplicationRole")),(0,o.kt)("li",null,(0,o.kt)("a",{href:"./complusgroupinpartitionrole",class:"extension"},"ComPlusGroupInPartitionRole")),(0,o.kt)("li",null,(0,o.kt)("a",{href:"./complusinterface",class:"extension"},"ComPlusInterface")),(0,o.kt)("li",null,(0,o.kt)("a",{href:"./complusmethod",class:"extension"},"ComPlusMethod")),(0,o.kt)("li",null,(0,o.kt)("a",{href:"./compluspartition",class:"extension"},"ComPlusPartition")),(0,o.kt)("li",null,(0,o.kt)("a",{href:"./compluspartitionrole",class:"extension"},"ComPlusPartitionRole")),(0,o.kt)("li",null,(0,o.kt)("a",{href:"./compluspartitionuser",class:"extension"},"ComPlusPartitionUser")),(0,o.kt)("li",null,(0,o.kt)("a",{href:"./complusroleforcomponent",class:"extension"},"ComPlusRoleForComponent")),(0,o.kt)("li",null,(0,o.kt)("a",{href:"./complusroleforinterface",class:"extension"},"ComPlusRoleForInterface")),(0,o.kt)("li",null,(0,o.kt)("a",{href:"./complusroleformethod",class:"extension"},"ComPlusRoleForMethod")),(0,o.kt)("li",null,(0,o.kt)("a",{href:"./complussubscription",class:"extension"},"ComPlusSubscription")),(0,o.kt)("li",null,(0,o.kt)("a",{href:"./complususerinapplicationrole",class:"extension"},"ComPlusUserInApplicationRole")),(0,o.kt)("li",null,(0,o.kt)("a",{href:"./complususerinpartitionrole",class:"extension"},"ComPlusUserInPartitionRole"))))))}d.isMDXComponent=!0}}]);