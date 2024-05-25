"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[38375],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,b=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return n?o.createElement(b,i(i({ref:t},c),{},{components:n})):o.createElement(b,i({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7236:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>p,metadata:()=>l,toc:()=>u});n(67294);var o=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const p={},s="Out-of-process bootstrapper applications in WiX v5",l={unversionedId:"fivefour/oopbas",id:"fivefour/oopbas",title:"Out-of-process bootstrapper applications in WiX v5",description:"In WiX v5, Burn launches bootstrapper applications as separate processes rather than loading them as DLLs inside the Burn process. If using the WiX Standard Bootstrapper Application or WiX Internal UI Bootstrapper Application, the move to out-of-process bootstrapper applications is abstracted away and should not introduce any breaking changes or required authoring changes.",source:"@site/docs/fivefour/oopbas.md",sourceDirName:"fivefour",slug:"/fivefour/oopbas",permalink:"/wixtoolset/docs/fivefour/oopbas",draft:!1,editUrl:"https://github.com/wixtoolset/web/tree/master/src/Docusaurus/docs/fivefour/oopbas.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"WiX v5 for WiX v4 users",permalink:"/wixtoolset/docs/fivefour/"},next:{title:"WiX v4 for WiX v3 users",permalink:"/wixtoolset/docs/fourthree/"}},c={},u=[],m={toc:u},d="wrapper";function b(e){var{components:t}=e,n=i(e,["components"]);return(0,o.kt)(d,r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){a(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"out-of-process-bootstrapper-applications-in-wix-v5"},"Out-of-process bootstrapper applications in WiX v5"),(0,o.kt)("p",null,"In WiX v5, Burn launches bootstrapper applications as separate processes rather than loading them as DLLs inside the Burn process. If using the WiX Standard Bootstrapper Application or WiX Internal UI Bootstrapper Application, the move to out-of-process bootstrapper applications is abstracted away and should not introduce any breaking changes or required authoring changes."),(0,o.kt)("p",null,"The rest of this document details changes required to update custom bootstrapper applications to WiX v5."),(0,o.kt)("p",null,"The motivation for this change can be found in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wixtoolset/issues/issues/7916"},"#7916"),". This is obviously a significant breaking change so it was also taken as an opportunity to improve several .nupkg package names as described in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wixtoolset/issues/issues/8020"},"#8020"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wixtoolset/wix"},"WiX repo on GitHub")," contains the code to bootstrapper applications using the new model, like ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wixtoolset/wix/blob/HEAD/src/ext/Bal/stdbas/WixStandardBootstrapperApplication.cpp"},"WixStandardBootstrapperApplication")," (C++) and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wixtoolset/wix/tree/HEAD/src/test/burn/WixToolset.WixBA"},"WixBA")," (C#).")),(0,o.kt)("p",null,"First, the custom bootstrapper application project needs to change from DLL to EXE."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"exampleba.vcxproj\n-    <ConfigurationType>DynamicLibrary</ConfigurationType>\n+    <ConfigurationType>Application</ConfigurationType>\n")),(0,o.kt)("p",null,"or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"exampleba.csproj\n+   <OutputType>WinExe</OutputType>\n")),(0,o.kt)("p",null,"and reference the ",(0,o.kt)("inlineCode",{parentName:"p"},"WixToolset.BootstrapperApplicationApi")," NuGet package (this one package replaces both the ",(0,o.kt)("inlineCode",{parentName:"p"},"WixToolset.BalUtil")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"WixToolset.Mba.Core")," packages)."),(0,o.kt)("p",null,"As an executable, the bootstrapper application needs a ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," function. Bootstrapper application main functions should be minimal to connect to the parent Burn process as quickly as possible. For example,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'// exampleba.cpp\nEXTERN_C int WINAPI wWinMain(\n    __in HINSTANCE hInstance,\n    __in_opt HINSTANCE /* hPrevInstance */,\n    __in_z_opt LPWSTR /*lpCmdLine*/,\n    __in int /*nCmdShow*/\n    )\n{\n    HRESULT hr = S_OK;\n    IBootstrapperApplication* pApplication = new ExampleBootstrapperApplication();\n\n    hr = BootstrapperApplicationRun(pApplication);\n    ExitOnFailure(hr, "Failed to run bootstrapper application.");\n\nLExit:\n    ReleaseObject(pApplication);\n\n    return 0;\n}\n')),(0,o.kt)("p",null,"or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"// example.cs\nusing WixToolset.BootstrapperApplicationApi;\n\ninternal class Program\n{\n    private static int Main()\n    {\n        var application = new ExampleBootstrapperApplication();\n\n        ManagedBootstrapperApplication.Run(application);\n\n        return 0;\n    }\n}\n")),(0,o.kt)("p",null,"Notice that the bootstrapper engine and command objects are no longer passed to the creation of the bootstrapper application. Those values are not available until the application has been connected to the parent Burn process in ",(0,o.kt)("inlineCode",{parentName:"p"},"BootstrapperApplicationRun")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"ManagedBootstrapperApplication.Run"),". Therefore, there is a new ",(0,o.kt)("inlineCode",{parentName:"p"},"OnCreate")," bootstrapper application callback that provides both the bootstrapper engine and command objects. To keep the API balanced, an ",(0,o.kt)("inlineCode",{parentName:"p"},"OnDestroy")," callback was also added."),(0,o.kt)("p",null,"At this point, the bootstrapper application API is fairly compatible with only a few additional details to keep in mind."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Managed BootstrapperApplications no longer support changing "run async". BA\'s now always run their UI in a separate thread.'),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"BootstrapperApplicationFactory")," concept no longer used. Remove all classes related to it. Create the BootstrapperApplication in the ",(0,o.kt)("inlineCode",{parentName:"li"},"main")," function as shown above."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"BalBaseBootstrapperApplication.h")," was renamed to ",(0,o.kt)("inlineCode",{parentName:"li"},"BootstrapperApplicationBase.h"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"CBalBaseBootstrapperApplication")," was deprecated, use ",(0,o.kt)("inlineCode",{parentName:"li"},"CBootstrapperApplicationBase")," instead.")),(0,o.kt)("p",null,"To take advantage of the breaking change, we took the opportunity to improve the names of many NuGet packages related to custom bootstrapper applications:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"WixToolset.BalUtil")," - renamed to ",(0,o.kt)("inlineCode",{parentName:"li"},"WixToolset.BootstrapperApplicationApi")," to provide the native headers and libraries to communicate with Burn. Also, split out the ",(0,o.kt)("inlineCode",{parentName:"li"},"WixToolset.WixStandardBootstrapperApplicationFunctionApi")," for WixStdBA BAFunctions API."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"WixToolset.Mba.Core")," - merged the managed libraries into the ",(0,o.kt)("inlineCode",{parentName:"li"},"WixToolset.BootstrapperApplicationApi")," so there is a single package for custom bootstrapper applications."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"WixToolset.BextUtil")," - renamed to ",(0,o.kt)("inlineCode",{parentName:"li"},"WixToolset.BootstrapperExtensionApi"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"WixToolset.Bal.wixext")," - renamed to ",(0,o.kt)("inlineCode",{parentName:"li"},"WixToolset.BootstrapperApplications.wixext")," but also kept ",(0,o.kt)("inlineCode",{parentName:"li"},"WixToolset.Bal.wixext")," for backwards compatibility with ",(0,o.kt)("inlineCode",{parentName:"li"},"PackageReference")," in MSBuild projects. Note: When using ",(0,o.kt)("inlineCode",{parentName:"li"},"wix.exe"),", you need to use the new name ",(0,o.kt)("inlineCode",{parentName:"li"},"WixToolset.BootstrapperApplications.wixext"),".")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Set a ",(0,o.kt)("strong",{parentName:"p"},"system")," environment variable named ",(0,o.kt)("inlineCode",{parentName:"p"},"WixDebugBootstrapperApplications")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," to get a prompt to debug ",(0,o.kt)("em",{parentName:"p"},"all")," bootstrapper applications. Set a ",(0,o.kt)("strong",{parentName:"p"},"system")," environment variable named ",(0,o.kt)("inlineCode",{parentName:"p"},"WixDebugBootstrapperApplication")," to the file name of the bootstrapper application executable to get a prompt to debug that bootstrapper application.")),(0,o.kt)("p",null,"Related issues"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/wixtoolset/issues/issues/7916"},"#7916 - BootstrapperApplication Processes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/wixtoolset/issues/issues/8020"},"#8020 - Better Burn-related .nupkg names"))))}b.isMDXComponent=!0}}]);