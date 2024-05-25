"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[17262],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(r),h=i,d=u["".concat(l,".").concat(h)]||u[h]||m[h]||s;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=r.length,o=new Array(s);o[0]=h;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:i,o[1]=a;for(var c=2;c<s;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},55831:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>u});r(67294);var n=r(3905);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const a={custom_edit_url:null,sidebar_position:244},l="ServiceInstall element",c={unversionedId:"schema/wxs/serviceinstall",id:"schema/wxs/serviceinstall",title:"ServiceInstall element",description:"Adds services for parent Component. Use the ServiceControl element to remove services.",source:"@site/docs/schema/wxs/serviceinstall.md",sourceDirName:"schema/wxs",slug:"/schema/wxs/serviceinstall",permalink:"/wixtoolset/docs/schema/wxs/serviceinstall",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:244,frontMatter:{custom_edit_url:null,sidebar_position:244},sidebar:"docsSidebar",previous:{title:"ServiceDependency element",permalink:"/wixtoolset/docs/schema/wxs/servicedependency"},next:{title:"SetDirectory element",permalink:"/wixtoolset/docs/schema/wxs/setdirectory"}},p={},u=[{value:"Windows Installer references",id:"windows-installer-references",level:2},{value:"Parents",id:"parents",level:2},{value:"Children",id:"children",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Attributes",id:"attributes",level:2}],m={toc:u},h="wrapper";function d(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)(h,s(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){i(e,t,r[t])}))}return e}({},m,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"serviceinstall-element"},"ServiceInstall element"),(0,n.kt)("p",null,"Adds services for parent Component. Use the ServiceControl element to remove services."),(0,n.kt)("h2",{id:"windows-installer-references"},"Windows Installer references"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/win32/msi/serviceinstall-table"},"ServiceInstall Table")),(0,n.kt)("h2",{id:"parents"},"Parents"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/wixtoolset/docs/schema/wxs/component"},"Component")),(0,n.kt)("h2",{id:"children"},"Children"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/util/permissionex"},"PermissionEx (Util extension)")," "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/util/serviceconfig"},"ServiceConfig (Util extension)")," "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/wxs/serviceconfigfailureactions"},"ServiceConfigFailureActions")," "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/wxs/servicedependency"},"ServiceDependency")," : Ordered list of dependencies when installing services."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/http/urlreservation"},"UrlReservation (Http extension)")," ")),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"The service executable installed will point to the KeyPath for the Component.\nTherefore, you must ensure that the correct executable is either the first child\nFile element under this Component or explicitly mark the appropriate File element\nas KeyPath='yes'."),(0,n.kt)("h2",{id:"attributes"},"Attributes"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Account"),' (String)\n: Fully qualified names must be used even for local accounts, e.g.: ".\\LOCAL_ACCOUNT". Valid only when ServiceType is ownProcess.'),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Arguments")," (String)\n: Contains any command line arguments or properties required to run the service."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Description")," (String)\n: Sets the description of the service."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"DisplayName")," (String)\n: This column is the localizable string that user interface programs use to identify the service."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"EraseDescription")," (",(0,n.kt)("a",{parentName:"p",href:"/wixtoolset/docs/schema/wxs/yesnotype",title:'Values of this type will either be "yes"/"true" or "no"/"false".'},"YesNoTypeUnion"),")\n: Determines whether the existing service description will be ignored. If 'yes', the service description will be null, even if the Description attribute is set."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"ErrorControl")," (enumeration, required)\n: Determines what action should be taken on an error. This attribute's value must be one of the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"ignore"),": Logs the error and continues with the startup operation."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"normal"),": Logs the error, displays a message box and continues the startup operation."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"critical"),": Logs the error if it is possible and the system is restarted with the last configuration known to be good. If the last-known-good configuration is being started, the startup operation fails.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Id")," (String)\n: Unique identifier for this service configuration. This value will default to the Name attribute if not\nspecified."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Interactive")," (",(0,n.kt)("a",{parentName:"p",href:"/wixtoolset/docs/schema/wxs/yesnotype",title:'Values of this type will either be "yes"/"true" or "no"/"false".'},"YesNoTypeUnion"),")\n: Whether or not the service interacts with the desktop."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"LoadOrderGroup")," (String)\n: The load ordering group that this service should be a part of."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Name")," (String, required)\n: This column is the string that gives the service name to install."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Password")," (String)\n: The password for the account. Valid only when the account has a password."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Start")," (enumeration, required)\n: Determines when the service should be started. The Windows Installer does not support boot or system. This attribute's value must be one of the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"auto"),": The service will start during startup of the system."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"demand"),": The service will start when the service control manager calls the StartService function."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"disabled"),": The service can no longer be started."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"boot"),": The service is a device driver that will be started by the operating system boot loader. This value is not currently supported by the Windows Installer."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"system"),": The service is a device driver that will be started by the IoInitSystem function. This value is not currently supported by the Windows Installer.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Type")," (enumeration, required)\n: The Windows Installer does not currently support kernelDriver or systemDriver. This attribute's value must be one of the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"ownProcess"),": A Win32 service that runs its own process."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"shareProcess"),": A Win32 service that shares a process."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"kernelDriver"),": A kernel driver service. This value is not currently supported by the Windows Installer."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"systemDriver"),": A file system driver service. This value is not currently supported by the Windows Installer.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Vital")," (",(0,n.kt)("a",{parentName:"p",href:"/wixtoolset/docs/schema/wxs/yesnotype",title:'Values of this type will either be "yes"/"true" or "no"/"false".'},"YesNoTypeUnion"),")\n: When set to 'yes' or left unspecified the overall install will fail if this service fails to install. A value of 'no' indicates failure to install the service will be ignored."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/wixtoolset/web/blob/master/src/xsd4/wix.xsd"},"Edit the schema for this page")))}d.isMDXComponent=!0}}]);