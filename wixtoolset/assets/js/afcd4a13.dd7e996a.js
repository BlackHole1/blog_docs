"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[51435],{3905:(t,e,l)=>{l.d(e,{Zo:()=>k,kt:()=>c});var n=l(67294);function r(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function u(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function o(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?u(Object(l),!0).forEach((function(e){r(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):u(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function i(t,e){if(null==t)return{};var l,n,r=function(t,e){if(null==t)return{};var l,n,r={},u=Object.keys(t);for(n=0;n<u.length;n++)l=u[n],e.indexOf(l)>=0||(r[l]=t[l]);return r}(t,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(n=0;n<u.length;n++)l=u[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(r[l]=t[l])}return r}var s=n.createContext({}),d=function(t){var e=n.useContext(s),l=e;return t&&(l="function"==typeof t?t(e):o(o({},e),t)),l},k=function(t){var e=d(t.components);return n.createElement(s.Provider,{value:e},t.children)},a="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},y=n.forwardRef((function(t,e){var l=t.components,r=t.mdxType,u=t.originalType,s=t.parentName,k=i(t,["components","mdxType","originalType","parentName"]),a=d(l),y=r,c=a["".concat(s,".").concat(y)]||a[y]||p[y]||u;return l?n.createElement(c,o(o({ref:e},k),{},{components:l})):n.createElement(c,o({ref:e},k))}));function c(t,e){var l=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var u=l.length,o=new Array(u);o[0]=y;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[a]="string"==typeof t?t:r,o[1]=i;for(var d=2;d<u;d++)o[d]=l[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,l)}y.displayName="MDXCreateElement"},53705:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>k,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>a});l(67294);var n=l(3905);function r(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function u(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}(Object(e)).forEach((function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(e,l))})),t}function o(t,e){if(null==t)return{};var l,n,r=function(t,e){if(null==t)return{};var l,n,r={},u=Object.keys(t);for(n=0;n<u.length;n++)l=u[n],e.indexOf(l)>=0||(r[l]=t[l]);return r}(t,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(n=0;n<u.length;n++)l=u[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(r[l]=t[l])}return r}const i={title:"Permission Element",layout:"documentation_xsd_main"},s=void 0,d={unversionedId:"xsd/wix/permission",id:"version-v3/xsd/wix/permission",title:"Permission Element",description:"Description",source:"@site/versioned_docs/version-v3/xsd/wix/permission.md",sourceDirName:"xsd/wix",slug:"/xsd/wix/permission",permalink:"/wixtoolset/docs/v3/xsd/wix/permission",draft:!1,editUrl:"https://github.com/wixtoolset/web/tree/master/src/Docusaurus/versioned_docs/version-v3/xsd/wix/permission.md",tags:[],version:"v3",frontMatter:{title:"Permission Element",layout:"documentation_xsd_main"}},k={},a=[],p={toc:a},y="wrapper";function c(t){var{components:e}=t,l=o(t,["components"]);return(0,n.kt)(y,u(function(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{},n=Object.keys(l);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(l).filter((function(t){return Object.getOwnPropertyDescriptor(l,t).enumerable})))),n.forEach((function(e){r(t,e,l[e])}))}return t}({},p,l),{components:e,mdxType:"MDXLayout"}),(0,n.kt)("dl",null,(0,n.kt)("dt",null,"Description"),(0,n.kt)("dd",null,"                 Sets ACLs on File, Registry, or CreateFolder.  When under a Registry element, this cannot be used                 if the Action attribute's value is remove or removeKeyOnInstall.  This element has no Id attribute.                 The table and key are taken from the parent element.             "),(0,n.kt)("dt",null,"Windows Installer references"),(0,n.kt)("dd",null,(0,n.kt)("a",{href:"http://msdn.microsoft.com/library/aa369774.aspx",target:"_blank"},"LockPermissions Table")),(0,n.kt)("dt",null,"Parents"),(0,n.kt)("dd",null,(0,n.kt)("a",{href:"../createfolder/"},"CreateFolder"),", ",(0,n.kt)("a",{href:"../file/"},"File"),", ",(0,n.kt)("a",{href:"../registry/"},"Registry"),", ",(0,n.kt)("a",{href:"../registrykey/"},"RegistryKey"),", ",(0,n.kt)("a",{href:"../registryvalue/"},"RegistryValue")),(0,n.kt)("dt",null,"Inner Text"),(0,n.kt)("dd",null,"None"),(0,n.kt)("dt",null,"Children"),(0,n.kt)("dd",null,"None"),(0,n.kt)("dt",null,"Attributes"),(0,n.kt)("dd",null,(0,n.kt)("table",{cellspacing:"0",cellpadding:"0",class:"schema"},(0,n.kt)("tr",null,(0,n.kt)("th",{width:"15%"},"Name"),(0,n.kt)("th",{width:"15%"},"Type"),(0,n.kt)("th",{width:"65%"},"Description"),(0,n.kt)("th",{width:"15%"},"Required")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Append"),(0,n.kt)("td",null,(0,n.kt)("a",{href:"../simple_type_yesnotype/"},"YesNoType")),(0,n.kt)("td",null,"\xa0"),(0,n.kt)("td",null,"\xa0")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"ChangePermission"),(0,n.kt)("td",null,(0,n.kt)("a",{href:"../simple_type_yesnotype/"},"YesNoType")),(0,n.kt)("td",null,"\xa0"),(0,n.kt)("td",null,"\xa0")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"CreateChild"),(0,n.kt)("td",null,(0,n.kt)("a",{href:"../simple_type_yesnotype/"},"YesNoType")),(0,n.kt)("td",null,"For a directory, the right to create a subdirectory.  Only valid under a 'CreateFolder' parent."),(0,n.kt)("td",null,"\xa0")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"CreateFile"),(0,n.kt)("td",null,(0,n.kt)("a",{href:"../simple_type_yesnotype/"},"YesNoType")),(0,n.kt)("td",null,"For a directory, the right to create a file in the directory.  Only valid under a 'CreateFolder' parent."),(0,n.kt)("td",null,"\xa0")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"CreateLink"),(0,n.kt)("td",null,(0,n.kt)("a",{href:"../simple_type_yesnotype/"},"YesNoType")),(0,n.kt)("td",null,"\xa0"),(0,n.kt)("td",null,"\xa0")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"CreateSubkeys"),(0,n.kt)("td",null,(0,n.kt)("a",{href:"../simple_type_yesnotype/"},"YesNoType")),(0,n.kt)("td",null,"\xa0"),(0,n.kt)("td",null,"\xa0")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Delete"),(0,n.kt)("td",null,(0,n.kt)("a",{href:"../simple_type_yesnotype/"},"YesNoType")),(0,n.kt)("td",null,"\xa0"),(0,n.kt)("td",null,"\xa0")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"DeleteChild"),(0,n.kt)("td",null,(0,n.kt)("a",{href:"../simple_type_yesnotype/"},"YesNoType")),(0,n.kt)("td",null,"For a directory, the right to delete a directory and all the files it contains, including read-only files.  Only valid under a 'CreateFolder' parent."),(0,n.kt)("td",null,"\xa0")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Domain"),(0,n.kt)("td",null,"String"),(0,n.kt)("td",null,"\xa0"),(0,n.kt)("td",null,"\xa0")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"EnumerateSubkeys"),(0,n.kt)("td",null,(0,n.kt)("a",{href:"../simple_type_yesnotype/"},"YesNoType")),(0,n.kt)("td",null,"\xa0"),(0,n.kt)("td",null,"\xa0")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Execute"),(0,n.kt)("td",null,(0,n.kt)("a",{href:"../simple_type_yesnotype/"},"YesNoType")),(0,n.kt)("td",null,"\xa0"),(0,n.kt)("td",null,"\xa0")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"FileAllRights"),(0,n.kt)("td",null,(0,n.kt)("a",{href:"../simple_type_yesnotype/"},"YesNoType")),(0,n.kt)("td",null,"Bit mask for FILE_ALL_ACCESS from WinNT.h (0x001F01FF)."),(0,n.kt)("td",null,"\xa0")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"GenericAll"),(0,n.kt)("td",null,(0,n.kt)("a",{href:"../simple_type_yesnotype/"},"YesNoType")),(0,n.kt)("td",null,"\xa0"),(0,n.kt)("td",null,"\xa0")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"GenericExecute"),(0,n.kt)("td",null,(0,n.kt)("a",{href:"../simple_type_yesnotype/"},"YesNoType")),(0,n.kt)("td",null,"\xa0"),(0,n.kt)("td",null,"\xa0")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"GenericRead"),(0,n.kt)("td",null,(0,n.kt)("a",{href:"../simple_type_yesnotype/"},"YesNoType")),(0,n.kt)("td",null,"specifying this will fail to grant read access"),(0,n.kt)("td",null,"\xa0")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"GenericWrite"),(0,n.kt)("td",null,(0,n.kt)("a",{href:"../simple_type_yesnotype/"},"YesNoType")),(0,n.kt)("td",null,"\xa0"),(0,n.kt)("td",null,"\xa0")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Notify"),(0,n.kt)("td",null,(0,n.kt)("a",{href:"../simple_type_yesnotype/"},"YesNoType")),(0,n.kt)("td",null,"\xa0"),(0,n.kt)("td",null,"\xa0")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Read"),(0,n.kt)("td",null,(0,n.kt)("a",{href:"../simple_type_yesnotype/"},"YesNoType")),(0,n.kt)("td",null,"\xa0"),(0,n.kt)("td",null,"\xa0")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"ReadAttributes"),(0,n.kt)("td",null,(0,n.kt)("a",{href:"../simple_type_yesnotype/"},"YesNoType")),(0,n.kt)("td",null,"\xa0"),(0,n.kt)("td",null,"\xa0")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"ReadExtendedAttributes"),(0,n.kt)("td",null,(0,n.kt)("a",{href:"../simple_type_yesnotype/"},"YesNoType")),(0,n.kt)("td",null,"\xa0"),(0,n.kt)("td",null,"\xa0")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"ReadPermission"),(0,n.kt)("td",null,(0,n.kt)("a",{href:"../simple_type_yesnotype/"},"YesNoType")),(0,n.kt)("td",null,"\xa0"),(0,n.kt)("td",null,"\xa0")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"SpecificRightsAll"),(0,n.kt)("td",null,(0,n.kt)("a",{href:"../simple_type_yesnotype/"},"YesNoType")),(0,n.kt)("td",null,"Bit mask for SPECIFIC_RIGHTS_ALL from WinNT.h (0x0000FFFF)."),(0,n.kt)("td",null,"\xa0")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Synchronize"),(0,n.kt)("td",null,(0,n.kt)("a",{href:"../simple_type_yesnotype/"},"YesNoType")),(0,n.kt)("td",null,"\xa0"),(0,n.kt)("td",null,"\xa0")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"TakeOwnership"),(0,n.kt)("td",null,(0,n.kt)("a",{href:"../simple_type_yesnotype/"},"YesNoType")),(0,n.kt)("td",null,"\xa0"),(0,n.kt)("td",null,"\xa0")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Traverse"),(0,n.kt)("td",null,(0,n.kt)("a",{href:"../simple_type_yesnotype/"},"YesNoType")),(0,n.kt)("td",null,"For a directory, the right to traverse the directory.  By default, users are assigned the BYPASS_TRAVERSE_CHECKING privilege, which ignores the FILE_TRAVERSE access right.  Only valid under a 'CreateFolder' parent."),(0,n.kt)("td",null,"\xa0")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"User"),(0,n.kt)("td",null,"String"),(0,n.kt)("td",null,"\xa0"),(0,n.kt)("td",null,"Yes")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Write"),(0,n.kt)("td",null,(0,n.kt)("a",{href:"../simple_type_yesnotype/"},"YesNoType")),(0,n.kt)("td",null,"\xa0"),(0,n.kt)("td",null,"\xa0")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"WriteAttributes"),(0,n.kt)("td",null,(0,n.kt)("a",{href:"../simple_type_yesnotype/"},"YesNoType")),(0,n.kt)("td",null,"\xa0"),(0,n.kt)("td",null,"\xa0")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"WriteExtendedAttributes"),(0,n.kt)("td",null,(0,n.kt)("a",{href:"../simple_type_yesnotype/"},"YesNoType")),(0,n.kt)("td",null,"\xa0"),(0,n.kt)("td",null,"\xa0")))),(0,n.kt)("dt",null,"See Also"),(0,n.kt)("dd",null,(0,n.kt)("a",{href:"../"},"Wix Schema"))))}c.isMDXComponent=!0}}]);