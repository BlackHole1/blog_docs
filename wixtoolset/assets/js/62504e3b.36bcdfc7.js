"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[74093],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),a=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=a(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=a(r),m=o,d=p["".concat(c,".").concat(m)]||p[m]||f[m]||l;return r?n.createElement(d,s(s({ref:t},u),{},{components:r})):n.createElement(d,s({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,s=new Array(l);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var a=2;a<l;a++)s[a]=r[a];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},13795:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>p});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={custom_edit_url:null,sidebar_position:237},c="SelfRegModules element",a={unversionedId:"schema/wxs/selfregmodules",id:"schema/wxs/selfregmodules",title:"SelfRegModules element",description:"Processes all modules listed in the SelfReg table and registers all installed modules with the system. The condition for this action may be specified in the element's inner text.",source:"@site/docs/schema/wxs/selfregmodules.md",sourceDirName:"schema/wxs",slug:"/schema/wxs/selfregmodules",permalink:"/wixtoolset/docs/schema/wxs/selfregmodules",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:237,frontMatter:{custom_edit_url:null,sidebar_position:237},sidebar:"docsSidebar",previous:{title:"ScheduleReboot element",permalink:"/wixtoolset/docs/schema/wxs/schedulereboot"},next:{title:"SelfUnregModules element",permalink:"/wixtoolset/docs/schema/wxs/selfunregmodules"}},u={},p=[{value:"Windows Installer references",id:"windows-installer-references",level:2},{value:"Parents",id:"parents",level:2}],f={toc:p},m="wrapper";function d(e){var{components:t}=e,r=s(e,["components"]);return(0,n.kt)(m,l(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},f,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"selfregmodules-element"},"SelfRegModules element"),(0,n.kt)("p",null,"Processes all modules listed in the SelfReg table and registers all installed modules with the system. The condition for this action may be specified in the element's inner text."),(0,n.kt)("h2",{id:"windows-installer-references"},"Windows Installer references"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/win32/msi/selfregmodules-action"},"SelfRegModules Action")),(0,n.kt)("h2",{id:"parents"},"Parents"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/wixtoolset/docs/schema/wxs/installexecutesequence"},"InstallExecuteSequence")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/wixtoolset/web/blob/master/src/xsd4/wix.xsd"},"Edit the schema for this page")))}d.isMDXComponent=!0}}]);