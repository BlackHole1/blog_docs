"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[94589],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),h=a,m=d["".concat(p,".").concat(h)]||d[h]||c[h]||l;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=h;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},46582:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>d});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={wip:6297,type:"Feature",by:"Sean Hall (r sean hall at gmail.com)",title:"Cleanup Bundle After Quit",draft:!1},p=void 0,s={unversionedId:"development/wips/cleanup-bundle-after-quit",id:"development/wips/cleanup-bundle-after-quit",title:"Cleanup Bundle After Quit",description:"User stories",source:"@site/docs/development/wips/6297-cleanup-bundle-after-quit.md",sourceDirName:"development/wips",slug:"/development/wips/cleanup-bundle-after-quit",permalink:"/wixtoolset/docs/development/wips/cleanup-bundle-after-quit",draft:!1,editUrl:"https://github.com/wixtoolset/web/tree/master/src/Docusaurus/docs/development/wips/6297-cleanup-bundle-after-quit.md",tags:[],version:"current",sidebarPosition:6297,frontMatter:{wip:6297,type:"Feature",by:"Sean Hall (r sean hall at gmail.com)",title:"Cleanup Bundle After Quit",draft:!1},sidebar:"docsSidebar",previous:{title:"In-Progress ARP DisplayName",permalink:"/wixtoolset/docs/development/wips/in-progress-arp-entry"},next:{title:"Source patch files from MSIs",permalink:"/wixtoolset/docs/development/wips/source-patch-files-from-msi"}},u={},d=[{value:"User stories",id:"user-stories",level:2},{value:"Scenario",id:"scenario",level:2},{value:"Proposal",id:"proposal",level:2},{value:"OnUnregisterBegin",id:"onunregisterbegin",level:2},{value:"Considerations",id:"considerations",level:2},{value:"See Also",id:"see-also",level:2}],c={toc:d},h="wrapper";function m(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)(h,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},c,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"user-stories"},"User stories"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"As a Setup developer I can create a bundle such that the default behavior is to uninstall the bundle when no non-permanent packages are installed.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"As a WiX developer I can provide a bootstrapper/chainer such that system administrators can trust that it will not leave traces on the machine once uninstalled."))),(0,r.kt)("h2",{id:"scenario"},"Scenario"),(0,r.kt)("p",null,"The most common scenario is for bundles with a managed BA, where the prereq BA installs .NET and then has to reboot in order to load the MBA.\nSee ",(0,r.kt)("a",{parentName:"p",href:"https://wixtoolset.org/development/wips/4822-dont-write-arp-entry/"},"WIP 4822")," for why the ARP entry is required."),(0,r.kt)("h2",{id:"proposal"},"Proposal"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"During Plan, Burn needs to pay attention to whether any non-permanent packages will be present at the end. If not, then the ARP entry should be removed and the bundle uncached on success.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"During Plan, Burn needs to pay attention to whether any non-permanent packages are already present. If not, then the ARP entry should be removed and the bundle uncached on failure (given that there are still no non-permanent packages present).")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The package is considered present if it is installed or cached.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After the BA has called ",(0,r.kt)("inlineCode",{parentName:"p"},"Quit")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"BOOTSTRAPPER_SHUTDOWN_ACTION_NONE")," and been unloaded, Burn will try to see if the bundle should be uninstalled:"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Apply")," was never called (1 and 2 above should have taken care of it already) and"),(0,r.kt)("li",{parentName:"ul"},"The bundle is installed and"),(0,r.kt)("li",{parentName:"ul"},"The bundle is per-user or has already elevated and"),(0,r.kt)("li",{parentName:"ul"},"There are no non-permanent packages installed and"),(0,r.kt)("li",{parentName:"ul"},"No related bundles that would run during ",(0,r.kt)("inlineCode",{parentName:"li"},"Apply"))),(0,r.kt)("p",null,"There are some caveats:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It will run ",(0,r.kt)("inlineCode",{parentName:"li"},"Detect")," if it hasn't already happened."),(0,r.kt)("li",{parentName:"ul"},"Calling ",(0,r.kt)("inlineCode",{parentName:"li"},"Detect")," will reset the condition on whether ",(0,r.kt)("inlineCode",{parentName:"li"},"Apply")," has been called."),(0,r.kt)("li",{parentName:"ul"},"Calling ",(0,r.kt)("inlineCode",{parentName:"li"},"Apply")," with some of the special actions like ",(0,r.kt)("inlineCode",{parentName:"li"},"Layout")," will be treated as if it had never been called because it wouldn't have had a chance to remove the registration.")),(0,r.kt)("p",null,"If it should be uninstalled, then it will go through ",(0,r.kt)("inlineCode",{parentName:"p"},"Plan")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Apply")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"Uninstall"),".\nSince the BA has shutdown, all of this is done without interaction with the BA."),(0,r.kt)("p",null,"To allow the BA to opt out of this behavior, add a new ",(0,r.kt)("inlineCode",{parentName:"p"},"BOOTSTRAPPER_SHUTDOWN_ACTION"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// Opts out of the engine behavior of trying to uninstall itself\n// when no non-permanent packages are installed.\nBOOTSTRAPPER_SHUTDOWN_ACTION_SKIP_CLEANUP,\n")),(0,r.kt)("p",null,"To allow the BA to know whether this will happen, add ",(0,r.kt)("inlineCode",{parentName:"p"},"fEligibleForCleanup")," as a parameter to ",(0,r.kt)("inlineCode",{parentName:"p"},"OnDetectComplete"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// Indicates whether the engine will uninstall the bundle if shutdown without running Apply.\nBOOL fEligibleForCleanup;\n")),(0,r.kt)("h2",{id:"onunregisterbegin"},"OnUnregisterBegin"),(0,r.kt)("p",null,"The BA will no longer be able to cancel from ",(0,r.kt)("inlineCode",{parentName:"p"},"OnUnregisterBegin"),".\nTo allow the BA to stay installed despite not having any non-permanent packages present, add ",(0,r.kt)("inlineCode",{parentName:"p"},"fKeepRegistration")," (read-only for the BA) and ",(0,r.kt)("inlineCode",{parentName:"p"},"fForceKeepRegistration")," (writable by the BA) to ",(0,r.kt)("inlineCode",{parentName:"p"},"OnUnregisterBegin"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// Indicates whether the engine will uninstall the bundle.\nBOOL fKeepRegistration;\n\n// If fKeepRegistration is FALSE, then this can be set to TRUE to make the engine keep the bundle installed.\nBOOL fForceKeepRegistration;\n")),(0,r.kt)("h2",{id:"considerations"},"Considerations"),(0,r.kt)("p",null,"Some bundles may want to stay installed despite not having any non-permanent packages present.\nThis is considered an advanced scenario where the BA will need to use ",(0,r.kt)("inlineCode",{parentName:"p"},"fForceKeepRegistration")," and/or ",(0,r.kt)("inlineCode",{parentName:"p"},"BOOTSTRAPPER_SHUTDOWN_ACTION_SKIP_CLEANUP")," if it wants to stay installed."),(0,r.kt)("h2",{id:"see-also"},"See Also"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/wixtoolset/issues/issues/6297"},"WIXFEAT:6297")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/wixtoolset/issues/issues/4822"},"WIXFEAT:4822"))))}m.isMDXComponent=!0}}]);