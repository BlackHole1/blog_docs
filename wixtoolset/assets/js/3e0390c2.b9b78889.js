"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[66038],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>h});var r=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var u=r.createContext({}),s=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},d=function(t){var e=s(t.components);return r.createElement(u.Provider,{value:e},t.children)},c="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,i=t.originalType,u=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),c=s(n),p=l,h=c["".concat(u,".").concat(p)]||c[p]||f[p]||i;return n?r.createElement(h,a(a({ref:e},d),{},{components:n})):r.createElement(h,a({ref:e},d))}));function h(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var i=n.length,a=new Array(i);a[0]=p;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o[c]="string"==typeof t?t:l,a[1]=o;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},61515:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>u,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});n(67294);var r=n(3905);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function a(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}const o={title:"Tag Element (Tag Extension)",layout:"documentation_xsd_extension"},u=void 0,s={unversionedId:"xsd/tag/tag/index",id:"version-v3/xsd/tag/tag/index",title:"Tag Element (Tag Extension)",description:"Description",source:"@site/versioned_docs/version-v3/xsd/tag/tag/index.md",sourceDirName:"xsd/tag/tag",slug:"/xsd/tag/tag/",permalink:"/wixtoolset/docs/v3/xsd/tag/tag/",draft:!1,editUrl:"https://github.com/wixtoolset/web/tree/master/src/Docusaurus/versioned_docs/version-v3/xsd/tag/tag/index.md",tags:[],version:"v3",frontMatter:{title:"Tag Element (Tag Extension)",layout:"documentation_xsd_extension"}},d={},c=[],f={toc:c},p="wrapper";function h(t){var{components:e}=t,n=a(t,["components"]);return(0,r.kt)(p,i(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){l(t,e,n[e])}))}return t}({},f,n),{components:e,mdxType:"MDXLayout"}),(0,r.kt)("dl",null,(0,r.kt)("dt",null,"Description"),(0,r.kt)("dd",null,"               This extension implements the ISO/IEC 19770-2:2015 specification. A SWID tag file               will be generated an inserted into the Product or Bundle.           "),(0,r.kt)("dt",null,"Windows Installer references"),(0,r.kt)("dd",null,"None"),(0,r.kt)("dt",null,"Parents"),(0,r.kt)("dd",null,(0,r.kt)("a",{href:"../../wix/bundle"},"Bundle"),", ",(0,r.kt)("a",{href:"../../wix/product"},"Product")),(0,r.kt)("dt",null,"Inner Text"),(0,r.kt)("dd",null,"None"),(0,r.kt)("dt",null,"Children"),(0,r.kt)("dd",null,"None"),(0,r.kt)("dt",null,"Attributes"),(0,r.kt)("dd",null,(0,r.kt)("table",{cellspacing:"0",cellpadding:"0",class:"schema"},(0,r.kt)("tr",null,(0,r.kt)("th",{width:"15%"},"Name"),(0,r.kt)("th",{width:"15%"},"Type"),(0,r.kt)("th",{width:"65%"},"Description"),(0,r.kt)("th",{width:"15%"},"Required")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Feature"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"Optional attribute to explicitly set the Feature when defining the software id tag                   in a Product. By default the software id tag will always be installed by a top-level hidden feature.                   It is recommended to ",(0,r.kt)("strong",null,"not")," set this attribute."),(0,r.kt)("td",null,"\xa0")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"InstallDirectory"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,'                     A reference to an existing Directory/@Id where the software is installed. The SWID tag file will be installed in a "swidtag" folder                     under that directory as per the specification. This attribute is required on a Tag element found under a Product element.                   '),(0,r.kt)("td",null,"\xa0")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"InstallPath"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,'                     The path where the software is installed. The SWID tag file will be installed in a "swidtag" folder.                     This is a formatted attribute so it is possible to use Variables as the InstallPath by setting                     the value to, for example, "[ProgramFilesFolder]CompanyName\\Product Name". This attribute is required                     on a Tag element found under a Bundle element.                   '),(0,r.kt)("td",null,"\xa0")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Licensed"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"This attribute has been deprecated."),(0,r.kt)("td",null,"\xa0")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Name"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,'                     Name to use in the filename for the software id tag. By default the filename                     uses the Bundle/@Name or Product/@Name. If the bundle name or product name contains                     invalid filename characters such as ":" or "?", use this attribute to provide                     a valid filename.                   '),(0,r.kt)("td",null,"\xa0")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Regid"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,'                     The regid for the software manufacturer. A regid is a URI simplified for the common                     case. Namely, if the scheme is "http://", it can be removed. Additionally, the domain                     should be minimized as much as possible (for example, remove "www." prefix if unnecessary).',(0,r.kt)("br",null),(0,r.kt)("br",null),'                    For example, the WiX toolset regid is "wixtoolset.org".                   '),(0,r.kt)("td",null,"Yes")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Type"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"This attribute has been deprecated."),(0,r.kt)("td",null,"\xa0")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Win64"),(0,r.kt)("td",null,(0,r.kt)("a",{href:"../simple_type_yesnotype"},"YesNoType")),(0,r.kt)("td",null,"                     This attribute facilitates the installation of packages that install both 32-bit and 64-bit files. Set this attribute to 'no'                     to indicate the software id tag is installed to a 32-bit location (such as \"ProgramFilesFolder\") or 'yes' when the tag is                     installed to a 64-bit location (such as \"ProgramFiles64Folder\"). The default default value is based on the platform set by                     the -arch switch to candle.exe or the InstallerPlatform property in a .wixproj MSBuild project:                     For x86 and ARM, the default value is 'no'.                     For x64 and IA64, the default value is 'yes'.",(0,r.kt)("br",null),(0,r.kt)("br",null),"                    This attribute is only allowed on a Tag element found under a Product element.                   "),(0,r.kt)("td",null,"\xa0")))),(0,r.kt)("dt",null,"See Also"),(0,r.kt)("dd",null,(0,r.kt)("a",{href:".."},"Tag Schema"))))}h.isMDXComponent=!0}}]);