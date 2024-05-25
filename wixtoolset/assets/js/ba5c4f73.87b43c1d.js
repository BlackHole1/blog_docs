"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[56672],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),d=a,b=p["".concat(c,".").concat(d)]||p[d]||h[d]||o;return r?n.createElement(b,i(i({ref:t},u),{},{components:r})):n.createElement(b,i({ref:t},u))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},65527:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>b,frontMatter:()=>s,metadata:()=>l,toc:()=>p});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const s={sidebar_position:2},c="Burn system searches",l={unversionedId:"tools/burn/searches",id:"tools/burn/searches",title:"Burn system searches",description:"Searches are used to detect if the target machine meets certain conditions. The result of a search is stored into a variable. Variables are then used to construct conditions. To author Burn searches, you need to reference the WixToolset.Util.wixext WiX extension.",source:"@site/docs/tools/burn/searches.md",sourceDirName:"tools/burn",slug:"/tools/burn/searches",permalink:"/wixtoolset/docs/tools/burn/searches",draft:!1,editUrl:"https://github.com/wixtoolset/web/tree/master/src/Docusaurus/docs/tools/burn/searches.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Burn built-in variables",permalink:"/wixtoolset/docs/tools/burn/builtin-variables"},next:{title:"WixStandardBootstrapperApplication",permalink:"/wixtoolset/docs/tools/burn/wixstdba"}},u={},p=[],h={toc:p},d="wrapper";function b(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)(d,o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},h,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"burn-system-searches"},"Burn system searches"),(0,n.kt)("p",null,"Searches are used to detect if the target machine meets certain conditions. The result of a search is stored into a variable. Variables are then used to construct conditions. To author Burn searches, you need to reference the WixToolset.Util.wixext WiX extension."),(0,n.kt)("p",null,"The following searches are available:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/util/componentsearch"},"ComponentSearch")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/util/directorysearch"},"DirectorySearch")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/util/filesearch"},"FileSearch")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/util/productsearch"},"ProductSearch")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/util/registrysearch"},"RegistrySearch")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/util/windowsfeaturesearch"},"WindowsFeatureSearch"))),(0,n.kt)("p",null,"A search can be dependent on the result of another search. To order searches, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"After")," attribute to schedule a search to take place after another search, when the variable from the first search has a value with the results of that search."),(0,n.kt)("p",null,"Here are some examples:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},'<util:RegistrySearch\n    Id="RegistrySearchId64"\n    Variable="RegistrySearchVariable64"\n    Root="HKLM"\n    Key="SOFTWARE\\Microsoft\\NET Framework Setup\\NDP\\v4\\Full"\n    Value="Release"\n    Result="value"\n    Bitness="always64" />\n\n<util:ProductSearch\n    Id="ProductSearchId"\n    Variable="ProductSearchVariable"\n    UpgradeCode="{8C74C610-AB2A-4BFB-9FC6-8683A9100424}"\n    Result="version" />\n\n<util:DirectorySearch\n    Id="DirectorySearchId"\n    Variable="DirectorySearchVariable"\n    Path="[WindowsFolder]System32"\n    DisableFileRedirection="yes" />\n\n<util:FileSearch\n    Id="FileSearchId"\n    Variable="FileSearchVariable"\n    After="DirectorySearchId"\n    Path="[DirectorySearchVariable]\\mscoree.dll"\n    Result="exists" />\n\n<util:WindowsFeatureSearch\n    Id="DetectSHA2SupportId"\n    Variable="IsSHA2Supported"\n    Feature="sha2CodeSigning" />\n')))}b.isMDXComponent=!0}}]);