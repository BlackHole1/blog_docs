"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[44599],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,m=u["".concat(p,".").concat(d)]||u[d]||b[d]||o;return r?n.createElement(m,l(l({ref:t},s),{},{components:r})):n.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},81962:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={custom_edit_url:null,toc_max_heading_level:2},p="IBootstrapperApplicationFactory Interface",c={unversionedId:"api/wixtoolset.mba.core/ibootstrapperapplicationfactory",id:"api/wixtoolset.mba.core/ibootstrapperapplicationfactory",title:"IBootstrapperApplicationFactory Interface",description:"Interface used by the native host to dynamically load the BA.",source:"@site/docs/api/wixtoolset.mba.core/ibootstrapperapplicationfactory.md",sourceDirName:"api/wixtoolset.mba.core",slug:"/api/wixtoolset.mba.core/ibootstrapperapplicationfactory",permalink:"/wixtoolset/docs/api/wixtoolset.mba.core/ibootstrapperapplicationfactory",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{custom_edit_url:null,toc_max_heading_level:2},sidebar:"docsSidebar",previous:{title:"IBootstrapperApplicationData Interface",permalink:"/wixtoolset/docs/api/wixtoolset.mba.core/ibootstrapperapplicationdata"},next:{title:"IBootstrapperCommand Interface",permalink:"/wixtoolset/docs/api/wixtoolset.mba.core/ibootstrappercommand"}},s={},u=[{value:"Methods",id:"methods",level:2},{value:"Create(pArgs, pResults) Method",id:"create_pargs_presults",level:2},{value:"Declaration",id:"declaration",level:3},{value:"Parameters",id:"parameters",level:3}],b={toc:u},d="wrapper";function m(e){var{components:t}=e,r=l(e,["components"]);return(0,n.kt)(d,o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},b,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"ibootstrapperapplicationfactory-interface"},"IBootstrapperApplicationFactory Interface"),(0,n.kt)("p",null,"Interface used by the native host to dynamically load the BA."),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Method"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#create_pargs_presults"},"Create(pArgs, pResults)")),(0,n.kt)("td",{parentName:"tr",align:null},"Low level method called by the native host.")))),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"WixToolset.Mba.Core.dll")," version ",(0,n.kt)("inlineCode",{parentName:"p"},"4.0.5+b9b2f1b4c69a1b509d487dc950b30b4ec9b0d040")),(0,n.kt)("h2",{id:"create_pargs_presults"},"Create(pArgs, pResults) Method"),(0,n.kt)("p",null,"Low level method called by the native host."),(0,n.kt)("h3",{id:"declaration"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public void Create(\n  IntPtr pArgs,\n  IntPtr pResults\n)\n")),(0,n.kt)("h3",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pArgs"),(0,n.kt)("td",{parentName:"tr",align:null},"IntPtr"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pResults"),(0,n.kt)("td",{parentName:"tr",align:null},"IntPtr"),(0,n.kt)("td",{parentName:"tr",align:null})))))}m.isMDXComponent=!0}}]);