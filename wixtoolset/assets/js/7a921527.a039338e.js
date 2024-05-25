"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[59057],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71409:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>u});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={wip:5184,type:"Feature",by:"Rob Mensching (rob at firegiant.com)",title:"Prevent DLL Hijacking Burn with Clean Room"},s=void 0,c={unversionedId:"development/wips/burn-clean-room",id:"development/wips/burn-clean-room",title:"Prevent DLL Hijacking Burn with Clean Room",description:"User stories",source:"@site/docs/development/wips/5184-burn-clean-room.md",sourceDirName:"development/wips",slug:"/development/wips/burn-clean-room",permalink:"/wixtoolset/docs/development/wips/burn-clean-room",draft:!1,editUrl:"https://github.com/wixtoolset/web/tree/master/src/Docusaurus/docs/development/wips/5184-burn-clean-room.md",tags:[],version:"current",sidebarPosition:5184,frontMatter:{wip:5184,type:"Feature",by:"Rob Mensching (rob at firegiant.com)",title:"Prevent DLL Hijacking Burn with Clean Room"},sidebar:"docsSidebar",previous:{title:"Handling of related bundles missing from cache",permalink:"/wixtoolset/docs/development/wips/handling-of-related-bundles-missing-from-cache"},next:{title:"New WixBA UI, v4",permalink:"/wixtoolset/docs/development/wips/new-wixba-ui-v4-wix-improvement-proposal"}},p={},u=[{value:"User stories",id:"user-stories",level:2},{value:"Proposal",id:"proposal",level:2},{value:"Considerations",id:"considerations",level:2},{value:"See Also",id:"see-also",level:2}],d={toc:u},m="wrapper";function h(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)(m,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"user-stories"},"User stories"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"As a WiX User I am confident my bundle executes securely.")),(0,r.kt)("h2",{id:"proposal"},"Proposal"),(0,r.kt)("p",null,"To fully protect Burn from ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Dynamic-link_library#DLL_hijacking"},"DLL hijacking"),", several defenses must be implemented."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Randomized working folder - today the working folder is a fixed folder based on the Bundle Id. A randomized working folder is not vulnerable to static attacks against well-known bundles.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Delay load dependencies - all DLLs that are not loaded by Windows and not on the ",(0,r.kt)("a",{parentName:"p",href:"https://support.microsoft.com/en-us/kb/164501"},"KnownDlls list")," must be marked for delay load in Burn to avoid DLL hijacking via the Import Address Table. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"cabinet.dll"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"msi.dll"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"wininet.dll")," all must be delay loaded.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://msdn.microsoft.com/en-us/library/windows/desktop/hh310515(v=vs.85).aspx"},"::SetDefaultDllDirectories()")," - this function can remove the application folder and current working directory from the default DLL search order. This function is available on Windows 8+ and available by ",(0,r.kt)("a",{parentName:"p",href:"https://support.microsoft.com/en-us/kb/2533623"},"patch")," for Vista and Windows 7."),(0,r.kt)("p",{parentName:"li"},"Note: Due to a bug in GDI+, ",(0,r.kt)("inlineCode",{parentName:"p"},"::SetDefaultDllDirectories()")," will not be called when the bundle loads a BA. In other words, ",(0,r.kt)("inlineCode",{parentName:"p"},"::SetDefaultDllDirectories()")," will not be called when running from the clean room (see below) nor from package cache. Or said another way, ",(0,r.kt)("inlineCode",{parentName:"p"},"::SetDefaultDllDirectories()")," will only be called when the process is running from an untrusted folder. See the Considerations below for more details.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Explicitly load system DLLs - since ",(0,r.kt)("inlineCode",{parentName:"p"},"::SetDefaultDllDirectories()"),' is not available for Windows XP, Burn will explicitly load a fixed set of DLLs from the system folder. Explicit loading is error prone because updates to Windows can change DLL dependencies and render the explicit load order in Burn irrelevant. For this reason, explicit loading will only be used for Windows XP because a) it is a "dead platform" (no updates from Microsoft) thus unchanging and b) there is no other alternative.'),(0,r.kt)("p",{parentName:"li"},"When explicitly loading system DLLs, ",(0,r.kt)("a",{parentName:"p",href:"https://msdn.microsoft.com/en-us/library/windows/desktop/ms686203(v=vs.85).aspx"},"::SetDllDirectory()")," will be also be used to remove the current working directory from the search path.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Clean room the Burn engine - when executed from outside the package cache, Burn will copy its engine (the stub and UX container) to an empty working folder--called the "clean room"--and launch the engine again from there. Running the engine in the clean room ensures it is not possible to hijack the unknown set of DLLs a BA may load.'),(0,r.kt)("p",{parentName:"li"},'Note: In WiX v3.11.0 and earlier, the "clean room" can still be DLL hijacked if malicious software is executing on the user\'s machine watching for a Burn bundle to launch elevated. Burn does not normally launch elevated so this attack requires the user to either manually launch the bundle elevated (i.e. Right click -> "Run as administrator") or some elevated software running as the user to launch the bundle elevated. This is not normal execution for Burn but releases after WiX v3.11.0 resolved this potential attack vector anyway.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Prevent naming bundle "setup.exe" - all executables named "setup.exe" are shimmed by Windows application compatibility to load additional DLLs, such as ',(0,r.kt)("inlineCode",{parentName:"p"},"version.dll"),'. The DLLs added by the app-compat shim can be hijacked. The only solution is to not name bundles "setup.exe".'))),(0,r.kt)("h2",{id:"considerations"},"Considerations"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Unmaintained Vista and Windows 7 machines are vulnerable. The required patch was released mid-2011, so any machine without the patch is likely vulnerable to other issues as well.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"BAs using ",(0,r.kt)("inlineCode",{parentName:"p"},"::GetModuleFileName(NULL, ...)")," will get a path in the clean room, not the untrusted source process path. To mitigate this, a ",(0,r.kt)("inlineCode",{parentName:"p"},"WixBundleSourceProcessPath")," variable can be set by Burn when running in the clean room.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If not for the following Microsoft bugs, it would only be necessary to call ",(0,r.kt)("inlineCode",{parentName:"p"},"::SetDefaultDllDirectories()")," and the complex mitigation steps 4 and 5 would be unnecessary. Unfortunately, Microsoft expressed little interest in fixing the following security vulnerabilities so we implemented the work arounds:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The CLR somehow ignores ",(0,r.kt)("inlineCode",{parentName:"p"},"::SetDefaultDllDirectories()")," when loading its system DLLs. As a result, managed BAs are always be vulnerable. The clean room protects against this vulnerability in the CLR.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"GDI+ fails in some cases when ",(0,r.kt)("inlineCode",{parentName:"p"},"::SetDefaultDllDirectories()")," is used. As a result, a process that uses GDI+ must remain vulnerable to DLL hijacking. For example, BAs that use WinForms always hit the GDI+ bug. Again the clean room protects against the GDI+ vulnerability. However because the clean room process and package cache processes load the BA they ",(0,r.kt)("em",{parentName:"p"},"cannot")," be protected by ",(0,r.kt)("inlineCode",{parentName:"p"},"::SetDefaultDllDirectories()"),". Fortunately, clean room and package cache packages cannot be DLL hijacked."))))),(0,r.kt)("h2",{id:"see-also"},"See Also"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://wixtoolset.org/issues/5184/"},"Issue 5184")))}h.isMDXComponent=!0}}]);