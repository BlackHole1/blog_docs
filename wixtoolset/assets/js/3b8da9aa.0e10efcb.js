"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[35908],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||s;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,i=new Array(s);i[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:o,i[1]=a;for(var p=2;p<s;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},20268:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>p,toc:()=>u});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const a={custom_edit_url:null,sidebar_position:2},l="SnapIn element (Powershell extension)",p={unversionedId:"schema/powershell/snapin",id:"schema/powershell/snapin",title:"SnapIn element (Powershell extension)",description:"Identifies the parent File as a PowerShell snap-in to be registered on the system.",source:"@site/docs/schema/powershell/snapin.md",sourceDirName:"schema/powershell",slug:"/schema/powershell/snapin",permalink:"/wixtoolset/docs/schema/powershell/snapin",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:2,frontMatter:{custom_edit_url:null,sidebar_position:2},sidebar:"docsSidebar",previous:{title:"FormatsFile element (Powershell extension)",permalink:"/wixtoolset/docs/schema/powershell/formatsfile"},next:{title:"TypesFile element (Powershell extension)",permalink:"/wixtoolset/docs/schema/powershell/typesfile"}},c={},u=[{value:"Parents",id:"parents",level:2},{value:"Children",id:"children",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Attributes",id:"attributes",level:2}],m={toc:u},d="wrapper";function h(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)(d,s(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},m,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"snapin-element-powershell-extension"},"SnapIn element (Powershell extension)"),(0,n.kt)("p",null,"Identifies the parent File as a PowerShell snap-in to be registered on the system."),(0,n.kt)("h2",{id:"parents"},"Parents"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/wixtoolset/docs/schema/wxs/file"},"File")),(0,n.kt)("h2",{id:"children"},"Children"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/powershell/formatsfile"},"FormatsFile")," "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/powershell/typesfile"},"TypesFile")," ")),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"http://www.microsoft.com/powershell"},"PowerShell")," snap-ins allow developers to\nextend the functionality of of the PowerShell engine. Add this element to identify\nthe parent File as a PowerShell snap-in that will get registered on the system."),(0,n.kt)("h2",{id:"attributes"},"Attributes"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"CustomSnapInType")," (String)\n: The full type name of a class that is used to register a list of cmdlets and providers."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Description")," (String)\n: A brief description of the snap-in."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"DescriptionIndirect")," (","[EmbeddedResource]","(/wixtoolset/docs/schema/powershell/embeddedresource 'Values should be in the format ",(0,n.kt)("em",{parentName:"p"},"ResourceName,StringName"),", where ",(0,n.kt)("em",{parentName:"p"},"ResourceName"),'\nis the name of the embedded resource in your assembly sans the ".resources" extension, and ',(0,n.kt)("em",{parentName:"p"},"StringName"),"\nis the name of the string resource in the embedded resource."),(0,n.kt)("p",null,"Example: UtilityMshSnapInResources,Description"),(0,n.kt)("p",null,"'))\n: An embedded resource that contains a brief description of the snap-in.\nThis resource must be embedded in the current snap-in assembly."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Id")," (String, required)\n: The identifier for this PowerShell snap-in."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"RequiredPowerShellVersion"),' (wxs:VersionType)\n: The required version of PowerShell that must be installed and is associated with the\nsnap-in registration. The default value is "1.0".'),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Vendor")," (String)\n: The name of the snap-in vendor."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"VendorIndirect")," (","[EmbeddedResource]","(/wixtoolset/docs/schema/powershell/embeddedresource 'Values should be in the format ",(0,n.kt)("em",{parentName:"p"},"ResourceName,StringName"),", where ",(0,n.kt)("em",{parentName:"p"},"ResourceName"),'\nis the name of the embedded resource in your assembly sans the ".resources" extension, and ',(0,n.kt)("em",{parentName:"p"},"StringName"),"\nis the name of the string resource in the embedded resource."),(0,n.kt)("p",null,"Example: UtilityMshSnapInResources,Description"),(0,n.kt)("p",null,"'))\n: An embedded resource that contains the name of the snap-in vendor.\nThis resource must be embedded in the current snap-in assembly."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Version")," (wxs:VersionType)\n: The version of the snapin. If not specified, this is taken from the assembly name."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/wixtoolset/web/blob/master/src/xsd4/ps.xsd"},"Edit the schema for this page")))}h.isMDXComponent=!0}}]);