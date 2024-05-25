"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[214],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),b=o,f=u["".concat(s,".").concat(b)]||u[b]||d[b]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=b;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:o,a[1]=p;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},60448:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>p,metadata:()=>l,toc:()=>u});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const p={title:"Building a Custom Bootstrapper Application",layout:"documentation",after:"../wixstdba/"},s="Building a Custom Bootstrapper Application",l={unversionedId:"bundle/ba/index",id:"version-v3/bundle/ba/index",title:"Building a Custom Bootstrapper Application",description:"Burn is a bootstrapper, downloader, chainer, and an engine. As a bootstrapper, Burn is responsible for getting the installation process started with the fewest dependencies possible. As a downloader, Burn is responsible for robustly caching files from source media (such as CD), a standalone download, or the Internet. As a chainer, Burn is responsible for installing multiple installation packages in a consistent transaction. As an engine, Burn provides all of this functionality via interfaces to the hosted bootstrapper application.",source:"@site/versioned_docs/version-v3/bundle/ba/index.md",sourceDirName:"bundle/ba",slug:"/bundle/ba/",permalink:"/wixtoolset/docs/v3/bundle/ba/",draft:!1,editUrl:"https://github.com/wixtoolset/web/tree/master/src/Docusaurus/versioned_docs/version-v3/bundle/ba/index.md",tags:[],version:"v3",frontMatter:{title:"Building a Custom Bootstrapper Application",layout:"documentation",after:"../wixstdba/"}},c={},u=[],d={toc:u},b="wrapper";function f(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)(b,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"building-a-custom-bootstrapper-application"},"Building a Custom Bootstrapper Application"),(0,r.kt)("p",null,"Burn is a bootstrapper, downloader, chainer, and an engine. As a bootstrapper, Burn is responsible for getting the installation process started with the fewest dependencies possible. As a downloader, Burn is responsible for robustly caching files from source media (such as CD), a standalone download, or the Internet. As a chainer, Burn is responsible for installing multiple installation packages in a consistent transaction. As an engine, Burn provides all of this functionality via interfaces to the hosted bootstrapper application."),(0,r.kt)("p",null,"The bootstrapper application (BA) is a DLL loaded by the Burn engine. The engine provides the BA an interface to control the engine called IBootstrapperEngine. The engine expects the BA to provide an interface called ",(0,r.kt)("a",{parentName:"p",href:"/wixtoolset/docs/v3/bundle/ba/bootstrapper_application_interface"},"IBootstrapperApplication")," so the engine can provide progress."),(0,r.kt)("p",null,"The engine retrieves the IBootstrapperApplication interface by calling the BootstrapperApplicationCreate function that must be exported by the BA DLL. This function looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'extern "C" HRESULT WINAPI BootstrapperApplicationCreate(\n    __in IBootstrapperEngine* pEngine,\n    __in const BOOTSTRAPPER_COMMAND* pCommand,\n    __out IBootstrapperApplication** ppApplication\n    )\n')),(0,r.kt)("p",null,"The BOOTSTRAPPER_COMMAND structure is provided by the engine and contains information read from the command line. On success, the BA returns its IBootstrapperApplication interface. The BA DLL is provided the IBootstrapperEngine interface when the engine calls IBootstrapperApplication::OnStartup."),(0,r.kt)("p",null,"The BA DLL can optionally provide an exported function named BootstrapperApplicationDestroy that the engine will call just before unloading the BA DLL. Most cleanup operations should take place in IBootstrapperApplication::OnShutdown but sometimes there are resources created during BootstrapperApplicationCreate that need to be cleaned up in BootstrapperApplicationDestroy. The entry point looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'extern "C" void WINAPI BootstrapperApplicationDestroy()\n')),(0,r.kt)("p",null,"Note that bootstrapper applications must be recompiled when upgrading minor versions of the WiX Toolset. Minor versions maintain source-code compatibility but do not guarantee binary compatibility."))}f.isMDXComponent=!0}}]);