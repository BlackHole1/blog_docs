"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[79600],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=a,f=p["".concat(s,".").concat(b)]||p[b]||d[b]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},33971:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>p});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={title:"Building Installation Package Bundles",layout:"documentation",after:"/wixui/"},s="Building Installation Package Bundles",u={unversionedId:"bundle/index",id:"version-v3/bundle/index",title:"Building Installation Package Bundles",description:"In this section, we will cover the basics of creating a simple setup that produces a bundle using the WiX toolset.",source:"@site/versioned_docs/version-v3/bundle/index.md",sourceDirName:"bundle",slug:"/bundle/",permalink:"/wixtoolset/docs/v3/bundle/",draft:!1,editUrl:"https://github.com/wixtoolset/web/tree/master/src/Docusaurus/versioned_docs/version-v3/bundle/index.md",tags:[],version:"v3",frontMatter:{title:"Building Installation Package Bundles",layout:"documentation",after:"/wixui/"}},c={},p=[],d={toc:p},b="wrapper";function f(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)(b,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"building-installation-package-bundles"},"Building Installation Package Bundles"),(0,r.kt)("p",null,"In this section, we will cover the basics of creating a simple setup that produces a bundle using the WiX toolset."),(0,r.kt)("p",null,"A bundle is a collection of installation packages that are chained together in a single user experience. Bundles are often used to install prerequisites, such as the .NET Framework or Visual C++ runtime, before an application","'","s .MSI file. Bundles also allow very large applications or suites of applications to be broken into smaller, logical installation packages while still presenting a single product to the end-user."),(0,r.kt)("p",null,"To create a seamless setup experience across multiple installation packages, the WiX toolset provides an engine (often referred to as a bootstrapper or chainer) named Burn. The Burn engine is an executable that hosts a DLL called the ",'"',"bootstrapper application",'"',". The bootstrapper application DLL is responsible for displaying UI to the end-user and directs the Burn engine when to carry out download, install, repair and uninstall actions. Most developers will not need to interact directly with the Burn engine because the WiX toolset provides a standard bootstrapper application and the language necessary to create bundles."),(0,r.kt)("p",null,"Creating bundles with the WiX toolset is directly analogous to creating Windows Installer packages (.MSI files) using the language and standard UI extension provided by the WiX toolset."),(0,r.kt)("p",null,"This section will give you an overview of the WiX bundle language and how to use it to create a bundle."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/v3/bundle/authoring_bundle_skeleton"},"Create the Skeleton Bundle Authoring")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/v3/bundle/authoring_bundle_application"},"Author the Bootstrapper Application for a Bundle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/v3/bundle/authoring_bundle_package_manifest"},"Author a Bundle Package Manifest")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/v3/bundle/bundle_built_in_variables"},"Burn Built-In Variables")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/v3/bundle/bundle_define_searches"},"Define Searches Using Variables")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/v3/bundle/bundle_author_chain"},"Chain Packages into a Bundle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/v3/bundle/wixstdba/"},"Working with WiX Standard Bootstrapper Application")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/v3/bundle/ba/"},"Building a Bootstrapper Application"))))}f.isMDXComponent=!0}}]);