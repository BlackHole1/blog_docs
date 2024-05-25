"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[6909],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(r),f=o,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||i;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[u]="string"==typeof e?e:o,l[1]=a;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},45570:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>u});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const a={wip:6075,type:"Bug",by:"Rob Mensching (rob at firegiant.com)",title:'DTF vulnerable to "Zip Slip"'},s=void 0,p={unversionedId:"development/wips/dtf-zip-slip",id:"development/wips/dtf-zip-slip",title:'DTF vulnerable to "Zip Slip"',description:"User stories",source:"@site/docs/development/wips/6075-dtf-zip-slip.md",sourceDirName:"development/wips",slug:"/development/wips/dtf-zip-slip",permalink:"/wixtoolset/docs/development/wips/dtf-zip-slip",draft:!1,editUrl:"https://github.com/wixtoolset/web/tree/master/src/Docusaurus/docs/development/wips/6075-dtf-zip-slip.md",tags:[],version:"current",sidebarPosition:6075,frontMatter:{wip:6075,type:"Bug",by:"Rob Mensching (rob at firegiant.com)",title:'DTF vulnerable to "Zip Slip"'},sidebar:"docsSidebar",previous:{title:"BA Configurable REINSTALLMODE",permalink:"/wixtoolset/docs/development/wips/ba-configurable-reinstallmode"},next:{title:".NET Core BA",permalink:"/wixtoolset/docs/development/wips/dotnet-core-scd-ba"}},c={},u=[{value:"User stories",id:"user-stories",level:2},{value:"Proposal",id:"proposal",level:2},{value:"Considerations",id:"considerations",level:2},{value:"See Also",id:"see-also",level:2}],d={toc:u},f="wrapper";function m(e){var{components:t}=e,r=l(e,["components"]);return(0,n.kt)(f,i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},d,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"user-stories"},"User stories"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"As a setup developer I can use DTF to extract user provided archives to\nisk without concern of overwriting files outside the target folder.")),(0,n.kt)("h2",{id:"proposal"},"Proposal"),(0,n.kt)("p",null,"A security vulnerability was reported where a malicious archive (.cab or .zip)\nfile crafted to include traversal paths in the filenames of the archived\nfiles processed by DTF could overwrite files unexpectedly. Consider the following\ncode using DTF:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'new CabInfo(@"path\\to\\bad.cab").Unpack(@"C:\\unpack");\n')),(0,n.kt)("p",null,"This could attempt to overwrite a Windows system file if ",(0,n.kt)("inlineCode",{parentName:"p"},"bad.cab")," contained\nan archived file with the name ",(0,n.kt)("inlineCode",{parentName:"p"},"..\\Windows\\System32\\kernel32.dll"),". This\nattack vector is known as ",(0,n.kt)("a",{parentName:"p",href:"https://cwe.mitre.org/data/definitions/29.html"},"Zip Slip"),"."),(0,n.kt)("p",null,"The fix is to ensure that files being decompressed to disk never write\nto a folder outside of the specified target folder. An ",(0,n.kt)("inlineCode",{parentName:"p"},"InvalidDataException"),"\nexception will be thrown when a malicious file is encountered."),(0,n.kt)("h2",{id:"considerations"},"Considerations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"This is a breaking change to DTF methods that decompress files to\ndisk.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"There are methods in DTF to decompress archived files into memory.\nThese methods will not be impacted by the fix to minimize the\nbackwards compatibility impact."))),(0,n.kt)("h2",{id:"see-also"},"See Also"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/wixtoolset/issues/issues/6075"},'WIXBUG:6075 - DTF vulnerable to "Zip Slip"'))))}m.isMDXComponent=!0}}]);