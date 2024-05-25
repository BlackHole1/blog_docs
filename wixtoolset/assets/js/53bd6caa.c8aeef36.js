"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[68012],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=o.createContext({}),c=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(a.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,m=p["".concat(a,".").concat(d)]||p[d]||f[d]||i;return n?o.createElement(m,s(s({ref:t},u),{},{components:n})):o.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[p]="string"==typeof e?e:r,s[1]=l;for(var c=2;c<i;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},49939:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});n(67294);var o=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const l={title:"Extensions",layout:"documentation",after:"extension_development_intro"},a="Extensions",c={unversionedId:"wixdev/extensions/extensions/index",id:"version-v3/wixdev/extensions/extensions/index",title:"Extensions",description:"WiX supports the following classes of extensions:",source:"@site/versioned_docs/version-v3/wixdev/extensions/extensions/index.md",sourceDirName:"wixdev/extensions/extensions",slug:"/wixdev/extensions/extensions/",permalink:"/wixtoolset/docs/v3/wixdev/extensions/extensions/",draft:!1,editUrl:"https://github.com/wixtoolset/web/tree/master/src/Docusaurus/versioned_docs/version-v3/wixdev/extensions/extensions/index.md",tags:[],version:"v3",frontMatter:{title:"Extensions",layout:"documentation",after:"extension_development_intro"}},u={},p=[],f={toc:p},d="wrapper";function m(e){var{components:t}=e,n=s(e,["components"]);return(0,o.kt)(d,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}({},f,n),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"extensions"},"Extensions"),(0,o.kt)("p",null,"WiX supports the following classes of extensions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("b",null,"Binder Extensions")," allow clients to modify the behavior of the Binder."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("b",null,"BinderFileManager Extensions")," allow clients to simply modify the file source resolution and file differencing features of the Binder."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("b",null,"Compiler Extensions")," allow clients to custom compile authored XML into internal table representation before it is written to binary form."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("b",null,"Decompiler Extensions")," allow clients to decompile custom tables into XML."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("b",null,"Harvester Extensions")," allow clients to modify the behavior of the Harvester."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("b",null,"Inspector Extensions")," allow clients to inspect source, intermediate, and output documents at various times during the build to validate business rules as early as possible."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("b",null,"Mutator Extensions")," allow clients to modify the behavior of the Mutator."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("b",null,"Preprocessor Extensions")," allow clients to modify authoring files before they are processed by the compiler."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("b",null,"Unbinder Extensions")," allow clients to modify the behavior of the Unbinder."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("b",null,"Validator Extensions")," allow clients to process ICE validation messages. By default, ICE validation messages are output to the console."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("b",null,"WixBinder Extensions")," allow clients to completely change the Binder to, for example, create different output formats from WiX authoring.")),(0,o.kt)("p",null,"For information on how to use WiX extensions on the command line or inside the Visual Studio IDE, please visit the ",(0,o.kt)("a",{parentName:"p",href:"/wixtoolset/docs/v3/howtos/general/extension_usage_introduction"},"Using WiX extensions")," topic."),(0,o.kt)("p",null,"For information on how to use localized WiX extensions, please visit the ",(0,o.kt)("a",{parentName:"p",href:"/wixtoolset/docs/v3/wixdev/extensions/localized_extensions"},"Localized extensions")," topic."))}m.isMDXComponent=!0}}]);