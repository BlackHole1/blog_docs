"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[83186],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,d=u["".concat(l,".").concat(m)]||u[m]||f[m]||i;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},35252:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>u});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const s={wip:4950,type:"Feature",by:"Sean Hall (r sean hall at gmail.com)",title:"Specify BAFunctions At Compile Time",draft:!1},l=void 0,c={unversionedId:"development/wips/specify-bafunctions-at-compile-time",id:"development/wips/specify-bafunctions-at-compile-time",title:"Specify BAFunctions At Compile Time",description:"User stories",source:"@site/docs/development/wips/4950-specify-bafunctions-at-compile-time.md",sourceDirName:"development/wips",slug:"/development/wips/specify-bafunctions-at-compile-time",permalink:"/wixtoolset/docs/development/wips/specify-bafunctions-at-compile-time",draft:!1,editUrl:"https://github.com/wixtoolset/web/tree/master/src/Docusaurus/docs/development/wips/4950-specify-bafunctions-at-compile-time.md",tags:[],version:"current",sidebarPosition:4950,frontMatter:{wip:4950,type:"Feature",by:"Sean Hall (r sean hall at gmail.com)",title:"Specify BAFunctions At Compile Time",draft:!1},sidebar:"docsSidebar",previous:{title:'Set Variable "Search"',permalink:"/wixtoolset/docs/development/wips/set-variable-search"},next:{title:"Make BAFunctions Interface Binary and Forward All BA Messages",permalink:"/wixtoolset/docs/development/wips/make-bafunctions-interface-binary"}},p={},u=[{value:"User stories",id:"user-stories",level:2},{value:"Proposal",id:"proposal",level:2},{value:"Considerations",id:"considerations",level:2},{value:"See Also",id:"see-also",level:2}],f={toc:u},m="wrapper";function d(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)(m,i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},f,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"user-stories"},"User stories"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"As a WiX User I can specify which DLL is the BAFunctions at compile time such that this feature is discoverable, the DLL can have a configurable name, and WixStdBA can know when the DLL is supposed to be there.")),(0,n.kt)("h2",{id:"proposal"},"Proposal"),(0,n.kt)("p",null,"Add a new ",(0,n.kt)("inlineCode",{parentName:"p"},"bal:IsBAFunctions")," attribute for the ",(0,n.kt)("inlineCode",{parentName:"p"},"Payload")," element.\nThis should only be specified when the ",(0,n.kt)("inlineCode",{parentName:"p"},"Payload")," element is inside a ",(0,n.kt)("inlineCode",{parentName:"p"},"BootstrapperApplicationRef")," element.\nThis attribute puts the necessary information into BootstrapperApplicationData.xml for WixStdBA to stop blindly trying to load BAFunctions.dll.\nIf loading the BAFunctions fails, WixStdBA will treat it as a fatal error and immediately exit."),(0,n.kt)("h2",{id:"considerations"},"Considerations"),(0,n.kt)("p",null,'This was a "magical" feature, so it will be hard for existing users to know about this change.'),(0,n.kt)("h2",{id:"see-also"},"See Also"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"http://wixtoolset.org/issues/4950/"},"Issue 4950")))}d.isMDXComponent=!0}}]);