"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[85077],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>f});var r=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var c=r.createContext({}),u=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},s=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},d="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,o=t.originalType,c=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),d=u(n),m=l,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,a(a({ref:e},s),{},{components:n})):r.createElement(f,a({ref:e},s))}));function f(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var o=n.length,a=new Array(o);a[0]=m;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i[d]="string"==typeof t?t:l,a[1]=i;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},38773:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>d});n(67294);var r=n(3905);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function a(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}const i={title:"PatchCreation Element",layout:"documentation_xsd_main"},c=void 0,u={unversionedId:"xsd/wix/patchcreation",id:"version-v3/xsd/wix/patchcreation",title:"PatchCreation Element",description:"Description",source:"@site/versioned_docs/version-v3/xsd/wix/patchcreation.md",sourceDirName:"xsd/wix",slug:"/xsd/wix/patchcreation",permalink:"/wixtoolset/docs/v3/xsd/wix/patchcreation",draft:!1,editUrl:"https://github.com/wixtoolset/web/tree/master/src/Docusaurus/versioned_docs/version-v3/xsd/wix/patchcreation.md",tags:[],version:"v3",frontMatter:{title:"PatchCreation Element",layout:"documentation_xsd_main"}},s={},d=[],p={toc:d},m="wrapper";function f(t){var{components:e}=t,n=a(t,["components"]);return(0,r.kt)(m,o(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){l(t,e,n[e])}))}return t}({},p,n),{components:e,mdxType:"MDXLayout"}),(0,r.kt)("dl",null,(0,r.kt)("dt",null,"Description"),(0,r.kt)("dd",null,"             The PatchCreation element is analogous to the main function in a C program.  When linking, only one PatchCreation section             can be given to the linker to produce a successful result.  Using this element creates a pcp file.             "),(0,r.kt)("dt",null,"Windows Installer references"),(0,r.kt)("dd",null,"None"),(0,r.kt)("dt",null,"Parents"),(0,r.kt)("dd",null,(0,r.kt)("a",{href:"../wix/"},"Wix")),(0,r.kt)("dt",null,"Inner Text"),(0,r.kt)("dd",null,"None"),(0,r.kt)("dt",null,"Children"),(0,r.kt)("dd",null,"Sequence (min: 1, max: 1)",(0,r.kt)("ol",null,(0,r.kt)("li",null,(0,r.kt)("a",{href:"../patchinformation/"},"PatchInformation")," (min: 1, max: 1)"),(0,r.kt)("li",null,(0,r.kt)("a",{href:"../patchmetadata/"},"PatchMetadata")," (min: 0, max: 1)"),(0,r.kt)("li",null,(0,r.kt)("a",{href:"../family/"},"Family")," (min: 1, max: unbounded)"),(0,r.kt)("li",null,"Choice of elements (min: 0, max: unbounded)",(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("a",{href:"../patchproperty/"},"PatchProperty")," (min: 0, max: unbounded)"),(0,r.kt)("li",null,(0,r.kt)("a",{href:"../patchsequence/"},"PatchSequence")," (min: 0, max: unbounded)"),(0,r.kt)("li",null,(0,r.kt)("a",{href:"../replacepatch/"},"ReplacePatch")," (min: 0, max: unbounded)"),(0,r.kt)("li",null,(0,r.kt)("a",{href:"../targetproductcode/"},"TargetProductCode")," (min: 0, max: unbounded)"))))),(0,r.kt)("dt",null,"Attributes"),(0,r.kt)("dd",null,(0,r.kt)("table",{cellspacing:"0",cellpadding:"0",class:"schema"},(0,r.kt)("tr",null,(0,r.kt)("th",{width:"15%"},"Name"),(0,r.kt)("th",{width:"15%"},"Type"),(0,r.kt)("th",{width:"65%"},"Description"),(0,r.kt)("th",{width:"15%"},"Required")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Id"),(0,r.kt)("td",null,(0,r.kt)("a",{href:"../simple_type_guid/"},"Guid")),(0,r.kt)("td",null,"PatchCreation identifier; this is the primary key for identifying patches."),(0,r.kt)("td",null,"Yes")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"AllowMajorVersionMismatches"),(0,r.kt)("td",null,(0,r.kt)("a",{href:"../simple_type_yesnotype/"},"YesNoType")),(0,r.kt)("td",null,"Use this to set whether the major versions between the upgrade and target images match. See ",(0,r.kt)("a",{href:"http://msdn.microsoft.com/library/aa370890.aspx",target:"_blank"},"AllowProductVersionMajorMismatches")," for more information."),(0,r.kt)("td",null,"\xa0")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"AllowProductCodeMismatches"),(0,r.kt)("td",null,(0,r.kt)("a",{href:"../simple_type_yesnotype/"},"YesNoType")),(0,r.kt)("td",null,"Use this to set whether the product code between the upgrade and target images match. See ",(0,r.kt)("a",{href:"http://msdn.microsoft.com/library/aa370890.aspx",target:"_blank"},"AllowProductCodeMismatches")," for more information."),(0,r.kt)("td",null,"\xa0")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"CleanWorkingFolder"),(0,r.kt)("td",null,(0,r.kt)("a",{href:"../simple_type_yesnotype/"},"YesNoType")),(0,r.kt)("td",null,"Use this to set whether Patchwiz should clean the temp folder when finished. See ",(0,r.kt)("a",{href:"http://msdn.microsoft.com/library/aa370890.aspx",target:"_blank"},"DontRemoveTempFolderWhenFinished")," for more information."),(0,r.kt)("td",null,"\xa0")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Codepage"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"The code page integer value or web name for the resulting PCP. See remarks for more information."),(0,r.kt)("td",null,"\xa0")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"OutputPath"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"The full path, including file name, of the patch package file that is to be generated. See ",(0,r.kt)("a",{href:"http://msdn.microsoft.com/library/aa370890.aspx",target:"_blank"},"PatchOutputPath")," for more information."),(0,r.kt)("td",null,"\xa0")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"SourceList"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"Used to locate the .msp file for the patch if the cached copy is unavailable. See ",(0,r.kt)("a",{href:"http://msdn.microsoft.com/library/aa370890.aspx",target:"_blank"},"PatchSourceList")," for more information."),(0,r.kt)("td",null,"\xa0")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"SymbolFlags"),(0,r.kt)("td",null,"Int"),(0,r.kt)("td",null,"An 8-digit hex integer representing the combination of patch symbol usage flags to use when creating a binary file patch. See ",(0,r.kt)("a",{href:"http://msdn.microsoft.com/library/aa370890.aspx",target:"_blank"},"ApiPatchingSymbolFlags")," for more information."),(0,r.kt)("td",null,"\xa0")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"WholeFilesOnly"),(0,r.kt)("td",null,(0,r.kt)("a",{href:"../simple_type_yesnotype/"},"YesNoType")),(0,r.kt)("td",null,"Use this to set whether changing files should be included in their entirety. See ",(0,r.kt)("a",{href:"http://msdn.microsoft.com/library/aa370890.aspx",target:"_blank"},"IncludeWholeFilesOnly")," for more information."),(0,r.kt)("td",null,"\xa0")))),(0,r.kt)("dt",null,"Remarks"),(0,r.kt)("dd",null,(0,r.kt)("p",null,"You can specify any valid Windows code by by integer like 1252, or by web name like Windows-1252. See ",(0,r.kt)("a",{href:"../../../overview/codepage"},"Code Pages")," for more information.")),(0,r.kt)("dt",null,"See Also"),(0,r.kt)("dd",null,(0,r.kt)("a",{href:"../"},"Wix Schema"))))}f.isMDXComponent=!0}}]);