"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[92934],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),m=o,b=p["".concat(c,".").concat(m)]||p[m]||f[m]||i;return r?n.createElement(b,a(a({ref:t},u),{},{components:r})):n.createElement(b,a({ref:t},u))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},27873:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>b,frontMatter:()=>l,metadata:()=>s,toc:()=>p});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const l={custom_edit_url:null,sidebar_position:18},c="Group element (Util extension)",s={unversionedId:"schema/util/group",id:"schema/util/group",title:"Group element (Util extension)",description:"Finds user groups on the local machine or specified Active Directory domain. The local machine will be",source:"@site/docs/schema/util/group.md",sourceDirName:"schema/util",slug:"/schema/util/group",permalink:"/wixtoolset/docs/schema/util/group",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:18,frontMatter:{custom_edit_url:null,sidebar_position:18},sidebar:"docsSidebar",previous:{title:"FormatFile element (Util extension)",permalink:"/wixtoolset/docs/schema/util/formatfile"},next:{title:"GroupRef element (Util extension)",permalink:"/wixtoolset/docs/schema/util/groupref"}},u={},p=[{value:"Parents",id:"parents",level:2},{value:"Attributes",id:"attributes",level:2}],f={toc:p},m="wrapper";function b(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)(m,i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},f,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"group-element-util-extension"},"Group element (Util extension)"),(0,n.kt)("p",null,"Finds user groups on the local machine or specified Active Directory domain. The local machine will be\nsearched for the group first then fallback to looking in Active Directory. This element is not capable\nof creating new groups but can be used to add new or existing users to an existing group."),(0,n.kt)("h2",{id:"parents"},"Parents"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/wixtoolset/docs/schema/wxs/fragment"},"Fragment"),", ",(0,n.kt)("a",{parentName:"p",href:"/wixtoolset/docs/schema/wxs/module"},"Module"),", ",(0,n.kt)("a",{parentName:"p",href:"/wixtoolset/docs/schema/wxs/package"},"Package")),(0,n.kt)("h2",{id:"attributes"},"Attributes"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Domain")," (String)\n: An optional ",(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/msi/formatted"},"Formatted")," string that specifies the domain for the group."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Id")," (String)\n: Unique identifier in your installation package for this group."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Name")," (String, required)\n: A ",(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/msi/formatted"},"Formatted")," string that contains the name of the group to be found."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/wixtoolset/web/blob/master/src/xsd4/util.xsd"},"Edit the schema for this page")))}b.isMDXComponent=!0}}]);