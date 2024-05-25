"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[23573],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(r),f=o,b=u["".concat(i,".").concat(f)]||u[f]||m[f]||a;return r?n.createElement(b,p(p({ref:t},l),{},{components:r})):n.createElement(b,p({ref:t},l))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:o,p[1]=s;for(var c=2;c<a;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},92369:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>b,frontMatter:()=>s,metadata:()=>c,toc:()=>u});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const s={custom_edit_url:null,sidebar_position:42},i="ComponentGroupRef element",c={unversionedId:"schema/wxs/componentgroupref",id:"schema/wxs/componentgroupref",title:"ComponentGroupRef element",description:"Create a reference to a ComponentGroup in another Fragment.",source:"@site/docs/schema/wxs/componentgroupref.md",sourceDirName:"schema/wxs",slug:"/schema/wxs/componentgroupref",permalink:"/wixtoolset/docs/schema/wxs/componentgroupref",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:42,frontMatter:{custom_edit_url:null,sidebar_position:42},sidebar:"docsSidebar",previous:{title:"ComponentGroup element",permalink:"/wixtoolset/docs/schema/wxs/componentgroup"},next:{title:"ComponentRef element",permalink:"/wixtoolset/docs/schema/wxs/componentref"}},l={},u=[{value:"Parents",id:"parents",level:2},{value:"Attributes",id:"attributes",level:2},{value:"See also",id:"see-also",level:2}],m={toc:u},f="wrapper";function b(e){var{components:t}=e,r=p(e,["components"]);return(0,n.kt)(f,a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},m,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"componentgroupref-element"},"ComponentGroupRef element"),(0,n.kt)("p",null,"Create a reference to a ComponentGroup in another Fragment.\n",(0,n.kt)("em",{parentName:"p"},"New in WiX v5: Can be a child of the ",(0,n.kt)("inlineCode",{parentName:"em"},"Package")," element.")),(0,n.kt)("h2",{id:"parents"},"Parents"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/wixtoolset/docs/schema/wxs/package"},"Package"),", ",(0,n.kt)("a",{parentName:"p",href:"/wixtoolset/docs/schema/wxs/module"},"Module"),", ",(0,n.kt)("a",{parentName:"p",href:"/wixtoolset/docs/schema/wxs/componentgroup"},"ComponentGroup"),", ",(0,n.kt)("a",{parentName:"p",href:"/wixtoolset/docs/schema/wxs/feature"},"Feature"),", ",(0,n.kt)("a",{parentName:"p",href:"/wixtoolset/docs/schema/wxs/featuregroup"},"FeatureGroup"),", ",(0,n.kt)("a",{parentName:"p",href:"/wixtoolset/docs/schema/wxs/featureref"},"FeatureRef")),(0,n.kt)("h2",{id:"attributes"},"Attributes"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Id")," (String, required)\n: The identifier of the ComponentGroup to reference."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Primary")," (",(0,n.kt)("a",{parentName:"p",href:"/wixtoolset/docs/schema/wxs/yesnotype",title:'Values of this type will either be "yes"/"true" or "no"/"false".'},"YesNoTypeUnion"),")\n: Set this attribute to 'yes' in order to make the parent feature of this component\nthe primary feature for this component. Components may belong to multiple features.\nBy designating a feature as the primary feature of a component, you ensure that\nwhenever a component is selected for install-on-demand (IOD), the primary feature\nwill be the one to install it. This attribute should only be set if a component\nactually nests under multiple features. If a component nests under only one feature,\nthat feature is the primary feature for the component. You cannot set more than one\nfeature as the primary feature of a given component."),(0,n.kt)("h2",{id:"see-also"},"See also"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/wixtoolset/docs/schema/wxs/componentgroup"},"ComponentGroup")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/wixtoolset/web/blob/master/src/xsd4/wix.xsd"},"Edit the schema for this page")))}b.isMDXComponent=!0}}]);