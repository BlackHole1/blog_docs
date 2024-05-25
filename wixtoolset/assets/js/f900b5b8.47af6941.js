"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[15031],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),f=o,b=u["".concat(l,".").concat(f)]||u[f]||m[f]||a;return r?n.createElement(b,i(i({ref:t},p),{},{components:r})):n.createElement(b,i({ref:t},p))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5540:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>b,frontMatter:()=>s,metadata:()=>c,toc:()=>u});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const s={custom_edit_url:null,sidebar_position:263},l="SummaryInformation element",c={unversionedId:"schema/wxs/summaryinformation",id:"schema/wxs/summaryinformation",title:"SummaryInformation element",description:"Properties about the package to be placed in the Summary Information Stream. These are",source:"@site/docs/schema/wxs/summaryinformation.md",sourceDirName:"schema/wxs",slug:"/schema/wxs/summaryinformation",permalink:"/wixtoolset/docs/schema/wxs/summaryinformation",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:263,frontMatter:{custom_edit_url:null,sidebar_position:263},sidebar:"docsSidebar",previous:{title:"Substitution element",permalink:"/wixtoolset/docs/schema/wxs/substitution"},next:{title:"SymbolPath element",permalink:"/wixtoolset/docs/schema/wxs/symbolpath"}},p={},u=[{value:"Parents",id:"parents",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Attributes",id:"attributes",level:2}],m={toc:u},f="wrapper";function b(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)(f,a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},m,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"summaryinformation-element"},"SummaryInformation element"),(0,n.kt)("p",null,"Properties about the package to be placed in the Summary Information Stream. These are\nvisible from COM through the IStream interface, and these properties can be seen on the package in Explorer."),(0,n.kt)("h2",{id:"parents"},"Parents"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/wixtoolset/docs/schema/wxs/package"},"Package"),", ",(0,n.kt)("a",{parentName:"p",href:"/wixtoolset/docs/schema/wxs/module"},"Module")),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"You can specify any valid Windows code by by integer like 1252, or by web name like Windows-1252. See ",(0,n.kt)("a",{parentName:"p",href:"/wixtoolset/docs/tools/codepage"},"Code pages")," for more information."),(0,n.kt)("h2",{id:"attributes"},"Attributes"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Codepage")," (String)\n: The code page integer value or web name for summary info strings only. See remarks for more information."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Comments")," (String)\n: Optional comments for browsing. ",(0,n.kt)("em",{parentName:"p"},"New in WiX v5: WiX v5 adds this attribute to the ",(0,n.kt)("inlineCode",{parentName:"em"},"SummaryInformation")," element.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Description")," (String)\n: The product full name or description."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Keywords")," (String)\n: Optional keywords for browsing."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Manufacturer")," (String)\n: The vendor releasing the package. Defaults to the Package/@Manufacturer attribute's value."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/wixtoolset/web/blob/master/src/xsd4/wix.xsd"},"Edit the schema for this page")))}b.isMDXComponent=!0}}]);