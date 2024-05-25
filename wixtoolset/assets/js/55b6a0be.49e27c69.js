"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[99405],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,b=m["".concat(i,".").concat(f)]||m[f]||p[f]||s;return r?n.createElement(b,c(c({ref:t},u),{},{components:r})):n.createElement(b,c({ref:t},u))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,c=new Array(s);c[0]=f;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a[m]="string"==typeof e?e:o,c[1]=a;for(var l=2;l<s;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},54570:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>b,frontMatter:()=>a,metadata:()=>l,toc:()=>m});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const a={custom_edit_url:null,sidebar_position:11},i="Msmq schema",l={unversionedId:"schema/msmq/index",id:"schema/msmq/index",title:"Msmq schema",description:"The source code schema for the WiX Toolset MSMQ Extension.",source:"@site/docs/schema/msmq/index.md",sourceDirName:"schema/msmq",slug:"/schema/msmq/",permalink:"/wixtoolset/docs/schema/msmq/",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:11,frontMatter:{custom_edit_url:null,sidebar_position:11},sidebar:"docsSidebar",previous:{title:"PercentType type (Iis extension)",permalink:"/wixtoolset/docs/schema/iis/percenttype"},next:{title:"MessageQueue element (Msmq extension)",permalink:"/wixtoolset/docs/schema/msmq/messagequeue"}},u={},m=[{value:"Target namespace",id:"target-namespace",level:2},{value:"Elements",id:"elements",level:2}],p={toc:m},f="wrapper";function b(e){var{components:t}=e,r=c(e,["components"]);return(0,n.kt)(f,s(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},p,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"msmq-schema"},"Msmq schema"),(0,n.kt)("p",null,"The source code schema for the WiX Toolset MSMQ Extension."),(0,n.kt)("h2",{id:"target-namespace"},"Target namespace"),(0,n.kt)("p",null,"http",":","//wixtoolset.org/schemas/v4/wxs/msmq"),(0,n.kt)("h2",{id:"elements"},"Elements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/msmq/messagequeue"},"MessageQueue")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/msmq/messagequeuepermission"},"MessageQueuePermission"))))}b.isMDXComponent=!0}}]);