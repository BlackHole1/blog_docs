"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[75339],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>p});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),h=s(r),f=o,p=h["".concat(c,".").concat(f)]||h[f]||d[f]||l;return r?n.createElement(p,i(i({ref:t},u),{},{components:r})):n.createElement(p,i({ref:t},u))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,i=new Array(l);i[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[h]="string"==typeof e?e:o,i[1]=a;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},34422:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>h});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const a={title:"DirectorySearch Element",layout:"documentation_xsd_main"},c=void 0,s={unversionedId:"xsd/wix/directorysearch",id:"version-v3/xsd/wix/directorysearch",title:"DirectorySearch Element",description:"Description",source:"@site/versioned_docs/version-v3/xsd/wix/directorysearch.md",sourceDirName:"xsd/wix",slug:"/xsd/wix/directorysearch",permalink:"/wixtoolset/docs/v3/xsd/wix/directorysearch",draft:!1,editUrl:"https://github.com/wixtoolset/web/tree/master/src/Docusaurus/versioned_docs/version-v3/xsd/wix/directorysearch.md",tags:[],version:"v3",frontMatter:{title:"DirectorySearch Element",layout:"documentation_xsd_main"}},u={},h=[],d={toc:h},f="wrapper";function p(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)(f,l(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},d,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("dl",null,(0,n.kt)("dt",null,"Description"),(0,n.kt)("dd",null,"Searches for directory and assigns to value of parent Property."),(0,n.kt)("dt",null,"Windows Installer references"),(0,n.kt)("dd",null,(0,n.kt)("a",{href:"http://msdn.microsoft.com/library/aa368331.aspx",target:"_blank"},"DrLocator Table"),", ",(0,n.kt)("a",{href:"http://msdn.microsoft.com/library/aa371853.aspx",target:"_blank"},"Signature Table")),(0,n.kt)("dt",null,"Parents"),(0,n.kt)("dd",null,(0,n.kt)("a",{href:"../compliancecheck/"},"ComplianceCheck"),", ",(0,n.kt)("a",{href:"../compliancedrive/"},"ComplianceDrive"),", ",(0,n.kt)("a",{href:"../componentsearch/"},"ComponentSearch"),", ",(0,n.kt)("a",{href:"../directorysearch/"},"DirectorySearch"),", ",(0,n.kt)("a",{href:"../directorysearchref/"},"DirectorySearchRef"),", ",(0,n.kt)("a",{href:"../inifilesearch/"},"IniFileSearch"),", ",(0,n.kt)("a",{href:"../property/"},"Property"),", ",(0,n.kt)("a",{href:"../registrysearch/"},"RegistrySearch")),(0,n.kt)("dt",null,"Inner Text"),(0,n.kt)("dd",null,"None"),(0,n.kt)("dt",null,"Children"),(0,n.kt)("dd",null,"Choice of elements (min: 0, max: 1)",(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("a",{href:"../directorysearch/"},"DirectorySearch")," (min: 0, max: 1)"),(0,n.kt)("li",null,(0,n.kt)("a",{href:"../directorysearchref/"},"DirectorySearchRef")," (min: 0, max: 1)"),(0,n.kt)("li",null,(0,n.kt)("a",{href:"../filesearch/"},"FileSearch")," (min: 0, max: 1)"),(0,n.kt)("li",null,(0,n.kt)("a",{href:"../filesearchref/"},"FileSearchRef")," (min: 0, max: 1)"))),(0,n.kt)("dt",null,"Attributes"),(0,n.kt)("dd",null,(0,n.kt)("table",{cellspacing:"0",cellpadding:"0",class:"schema"},(0,n.kt)("tr",null,(0,n.kt)("th",{width:"15%"},"Name"),(0,n.kt)("th",{width:"15%"},"Type"),(0,n.kt)("th",{width:"65%"},"Description"),(0,n.kt)("th",{width:"15%"},"Required")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Id"),(0,n.kt)("td",null,"String"),(0,n.kt)("td",null,"Unique identifier for the directory search."),(0,n.kt)("td",null,"Yes")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"AssignToProperty"),(0,n.kt)("td",null,(0,n.kt)("a",{href:"../simple_type_yesnotype/"},"YesNoType")),(0,n.kt)("td",null,"Set the value of the outer Property to the result of this search. See remarks for more information."),(0,n.kt)("td",null,"\xa0")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Depth"),(0,n.kt)("td",null,"Integer"),(0,n.kt)("td",null,"                         Depth below the path that the installer searches for the file or directory specified by the search. See remarks for more information.                     "),(0,n.kt)("td",null,"\xa0")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Path"),(0,n.kt)("td",null,"String"),(0,n.kt)("td",null,"Path on the user's system. Either absolute, or relative to containing directories."),(0,n.kt)("td",null,"\xa0")))),(0,n.kt)("dt",null,"Remarks"),(0,n.kt)("dd",null,(0,n.kt)("p",null,"Use the AssignToProperty attribute to search for a file but set the outer property to the directory containing the file. When this attribute is set to 'yes', you may only nest a FileSearch element with a unique Id or define no child element."),(0,n.kt)("a",null,"When the parent DirectorySearch/@Depth attribute is greater than 0, the FileSearch/@Id attribute must be absent or the same as the parent DirectorySearch/@Id attribute value, unless the parent DirectorySearch/@AssignToProperty attribute value is 'yes'.")),(0,n.kt)("dt",null,"How Tos and Examples"),(0,n.kt)("dd",null,(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("a",{href:"../../../howtos/files_and_registry/check_the_version_number"},"How To: Check the version number of a file during installation")),(0,n.kt)("li",null,(0,n.kt)("a",{href:"../../../howtos/files_and_registry/directorysearchref"},"How To: Reference another DirectorySearch element")),(0,n.kt)("li",null,(0,n.kt)("a",{href:"../../../howtos/files_and_registry/parentdirectorysearch"},"How To: Get the parent directory of a file search")))),(0,n.kt)("dt",null,"See Also"),(0,n.kt)("dd",null,(0,n.kt)("a",{href:"../"},"Wix Schema"),", ",(0,n.kt)("a",{href:"../componentsearch/"},"ComponentSearch"),", ",(0,n.kt)("a",{href:"../inifilesearch/"},"IniFileSearch"),", ",(0,n.kt)("a",{href:"../registrysearch/"},"RegistrySearch"))))}p.isMDXComponent=!0}}]);