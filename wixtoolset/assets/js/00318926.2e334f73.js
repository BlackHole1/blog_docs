"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[39780],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,h=u["".concat(l,".").concat(m)]||u[m]||f[m]||o;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:i,s[1]=a;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},24769:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>u});n(67294);var r=n(3905);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const a={custom_edit_url:null,sidebar_position:241},l="ServiceConfigFailureActions element",c={unversionedId:"schema/wxs/serviceconfigfailureactions",id:"schema/wxs/serviceconfigfailureactions",title:"ServiceConfigFailureActions element",description:"Configures the failure actions for a service being installed or one that already exists. This element's functionality is available starting with MSI 5.0.",source:"@site/docs/schema/wxs/serviceconfigfailureactions.md",sourceDirName:"schema/wxs",slug:"/schema/wxs/serviceconfigfailureactions",permalink:"/wixtoolset/docs/schema/wxs/serviceconfigfailureactions",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:241,frontMatter:{custom_edit_url:null,sidebar_position:241},sidebar:"docsSidebar",previous:{title:"ServiceConfig element",permalink:"/wixtoolset/docs/schema/wxs/serviceconfig"},next:{title:"ServiceControl element",permalink:"/wixtoolset/docs/schema/wxs/servicecontrol"}},p={},u=[{value:"Windows Installer references",id:"windows-installer-references",level:2},{value:"Parents",id:"parents",level:2},{value:"Children",id:"children",level:2},{value:"Attributes",id:"attributes",level:2}],f={toc:u},m="wrapper";function h(e){var{components:t}=e,n=s(e,["components"]);return(0,r.kt)(m,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},f,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"serviceconfigfailureactions-element"},"ServiceConfigFailureActions element"),(0,r.kt)("p",null,"Configures the failure actions for a service being installed or one that already exists. This element's functionality is available starting with MSI 5.0."),(0,r.kt)("h2",{id:"windows-installer-references"},"Windows Installer references"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/win32/msi/msiserviceconfigfailureactions-table"},"MsiServiceConfigFailureActions Table")),(0,r.kt)("h2",{id:"parents"},"Parents"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/wixtoolset/docs/schema/wxs/serviceinstall"},"ServiceInstall"),", ",(0,r.kt)("a",{parentName:"p",href:"/wixtoolset/docs/schema/wxs/component"},"Component")),(0,r.kt)("h2",{id:"children"},"Children"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/wxs/failure"},"Failure")," : Ordered list of failure actions to apply to service.")),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Command"),' (String)\n: This attribute specifies command to execute when a "runCommand" failure action hit. If an empty string is provided it clears\nthe existing command. If this attribute is not present the setting is not changed.'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Id")," (String)\n: Unique identifier for this service configuration. This value will default to the ServiceName attribute if not\nspecified."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"OnInstall")," (",(0,r.kt)("a",{parentName:"p",href:"/wixtoolset/docs/schema/wxs/yesnotype",title:'Values of this type will either be "yes"/"true" or "no"/"false".'},"YesNoTypeUnion"),")\n: Specifies whether to configure the service when the parent Component is installed. This attribute may be combined with OnReinstall\nand OnUninstall."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"OnReinstall")," (",(0,r.kt)("a",{parentName:"p",href:"/wixtoolset/docs/schema/wxs/yesnotype",title:'Values of this type will either be "yes"/"true" or "no"/"false".'},"YesNoTypeUnion"),")\n: Specifies whether to configure the service when the parent Component is reinstalled. This attribute may be combined with OnInstall\nand OnUninstall."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"OnUninstall")," (",(0,r.kt)("a",{parentName:"p",href:"/wixtoolset/docs/schema/wxs/yesnotype",title:'Values of this type will either be "yes"/"true" or "no"/"false".'},"YesNoTypeUnion"),")\n: Specifies whether to configure the service when the parent Component is uninstalled. This attribute may be combined with OnInstall\nand OnReinstall."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"RebootMessage")," (String)\n: Specifies the message to show for a reboot failure action. If an empty string is provided it clears any existing reboot message. If this\nattribute is not present the setting is not changed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ResetPeriod")," (",(0,r.kt)("a",{parentName:"p",href:"/wixtoolset/docs/schema/wxs/integer",title:"Values of this type must be a non-negative integer or a preprocessor variable with the format `$(Variable)` or `$(var.Variable)`."},"Integer"),")\n: Specifies the time in seconds to reset the failure count. If this attribute is not present the failure count will not be reset."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ServiceName")," (String)\n: Specifies the name of the service to configure. This value will default to the ServiceInstall/@Name attribute when nested under\na ServiceInstall element."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/wixtoolset/web/blob/master/src/xsd4/wix.xsd"},"Edit the schema for this page")))}h.isMDXComponent=!0}}]);