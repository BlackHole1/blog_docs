"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[52561],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=s(r),p=o,m=d["".concat(c,".").concat(p)]||d[p]||f[p]||i;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[d]="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},20328:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>d});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const a={title:"DirectoryRef Element",layout:"documentation_xsd_main"},c=void 0,s={unversionedId:"xsd/wix/directoryref",id:"version-v3/xsd/wix/directoryref",title:"DirectoryRef Element",description:"Description",source:"@site/versioned_docs/version-v3/xsd/wix/directoryref.md",sourceDirName:"xsd/wix",slug:"/xsd/wix/directoryref",permalink:"/wixtoolset/docs/v3/xsd/wix/directoryref",draft:!1,editUrl:"https://github.com/wixtoolset/web/tree/master/src/Docusaurus/versioned_docs/version-v3/xsd/wix/directoryref.md",tags:[],version:"v3",frontMatter:{title:"DirectoryRef Element",layout:"documentation_xsd_main"}},u={},d=[],f={toc:d},p="wrapper";function m(e){var{components:t}=e,r=l(e,["components"]);return(0,n.kt)(p,i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},f,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("dl",null,(0,n.kt)("dt",null,"Description"),(0,n.kt)("dd",null,"Create a reference to a Directory element in another Fragment."),(0,n.kt)("dt",null,"Windows Installer references"),(0,n.kt)("dd",null,"None"),(0,n.kt)("dt",null,"Parents"),(0,n.kt)("dd",null,(0,n.kt)("a",{href:"../fragment/"},"Fragment"),", ",(0,n.kt)("a",{href:"../module/"},"Module"),", ",(0,n.kt)("a",{href:"../patchfamily/"},"PatchFamily"),", ",(0,n.kt)("a",{href:"../product/"},"Product")),(0,n.kt)("dt",null,"Inner Text"),(0,n.kt)("dd",null,"None"),(0,n.kt)("dt",null,"Children"),(0,n.kt)("dd",null,"Choice of elements (min: 0, max: unbounded)",(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("a",{href:"../component/"},"Component")," (min: 0, max: unbounded)"),(0,n.kt)("li",null,(0,n.kt)("a",{href:"../directory/"},"Directory")," (min: 0, max: unbounded)"),(0,n.kt)("li",null,(0,n.kt)("a",{href:"../merge/"},"Merge")," (min: 0, max: unbounded)"),(0,n.kt)("li",null,(0,n.kt)("span",{class:"extension"},"Any Element (namespace='##other' processContents='Lax')                          Extensibility point in the WiX XML Schema.  Schema extensions can register additional                         elements at this point in the schema.                     ")))),(0,n.kt)("dt",null,"Attributes"),(0,n.kt)("dd",null,(0,n.kt)("table",{cellspacing:"0",cellpadding:"0",class:"schema"},(0,n.kt)("tr",null,(0,n.kt)("th",{width:"15%"},"Name"),(0,n.kt)("th",{width:"15%"},"Type"),(0,n.kt)("th",{width:"65%"},"Description"),(0,n.kt)("th",{width:"15%"},"Required")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Id"),(0,n.kt)("td",null,"String"),(0,n.kt)("td",null,"The identifier of the Directory element to reference."),(0,n.kt)("td",null,"Yes")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"DiskId"),(0,n.kt)("td",null,(0,n.kt)("a",{href:"../simple_type_diskidtype/"},"DiskIdType")),(0,n.kt)("td",null,"                         Sets the default disk identifier for the files contained in this directory.                         This attribute's value may be overridden by a child Component, Directory,                         Merge or File element. See the File or Merge elements' DiskId attribute for                         more information.                     "),(0,n.kt)("td",null,"\xa0")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"FileSource"),(0,n.kt)("td",null,"String"),(0,n.kt)("td",null,"Used to set the file system source for this DirectoryRef's child elements. For more information, see ",(0,n.kt)("a",{href:"../../../howtos/general/specifying_source_files"},"Specifying source files"),"."),(0,n.kt)("td",null,"\xa0")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"src"),(0,n.kt)("td",null,"String"),(0,n.kt)("td",null,"This attribute has been deprecated; please use the FileSource attribute instead."),(0,n.kt)("td",null,"\xa0")),(0,n.kt)("tr",null,(0,n.kt)("td",{colspan:"4"},(0,n.kt)("span",{class:"extension"},"Any Attribute (namespace='##other' processContents='lax')                      Extensibility point in the WiX XML Schema.  Schema extensions can register additional                     attributes at this point in the schema.                 "))))),(0,n.kt)("dt",null,"How Tos and Examples"),(0,n.kt)("dd",null,(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("a",{href:"../../../howtos/files_and_registry/add_a_file"},"How To: Add a file to your installer")))),(0,n.kt)("dt",null,"See Also"),(0,n.kt)("dd",null,(0,n.kt)("a",{href:"../"},"Wix Schema"),", ",(0,n.kt)("a",{href:"../directory/"},"Directory"))))}m.isMDXComponent=!0}}]);