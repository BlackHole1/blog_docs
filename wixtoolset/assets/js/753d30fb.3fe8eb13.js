"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[79659],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,f=u["".concat(s,".").concat(m)]||u[m]||h[m]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},87653:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>u});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const l={custom_edit_url:null,sidebar_position:217},s="RemoveFile element",c={unversionedId:"schema/wxs/removefile",id:"schema/wxs/removefile",title:"RemoveFile element",description:"Remove a file(s) if the parent component is selected for installation or removal. Multiple files can be removed",source:"@site/docs/schema/wxs/removefile.md",sourceDirName:"schema/wxs",slug:"/schema/wxs/removefile",permalink:"/wixtoolset/docs/schema/wxs/removefile",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:217,frontMatter:{custom_edit_url:null,sidebar_position:217},sidebar:"docsSidebar",previous:{title:"RemoveExistingProducts element",permalink:"/wixtoolset/docs/schema/wxs/removeexistingproducts"},next:{title:"RemoveFiles element",permalink:"/wixtoolset/docs/schema/wxs/removefiles"}},p={},u=[{value:"Windows Installer references",id:"windows-installer-references",level:2},{value:"Parents",id:"parents",level:2},{value:"Attributes",id:"attributes",level:2},{value:"See also",id:"see-also",level:2}],h={toc:u},m="wrapper";function f(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)(m,i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},h,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"removefile-element"},"RemoveFile element"),(0,n.kt)("p",null,"Remove a file(s) if the parent component is selected for installation or removal. Multiple files can be removed\nby specifying a wildcard for the value of the Name attribute. By default, the source\ndirectory of the file is the directory of the parent component. This can be overridden by specifying the\nDirectory attribute with a value corresponding to the Id of the source directory, or by specifying the Property\nattribute with a value corresponding to a property that will have a value that resolves to the full path\nto the source directory."),(0,n.kt)("h2",{id:"windows-installer-references"},"Windows Installer references"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/win32/msi/removefile-table"},"RemoveFile Table")),(0,n.kt)("h2",{id:"parents"},"Parents"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/wixtoolset/docs/schema/wxs/component"},"Component")),(0,n.kt)("h2",{id:"attributes"},"Attributes"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Directory")," (String)\n: Overrides the directory of the parent component with a specific Directory. This Directory must exist in the\ninstaller database at creation time. This attribute cannot be specified in conjunction with the Property attribute."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Id")," (String)\n: Primary key used to identify this particular entry."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Name")," (",(0,n.kt)("a",{parentName:"p",href:"/wixtoolset/docs/schema/wxs/wildcardlongfilenametype",title:"Values of this type will look like: \"Long File N?me.extension*\". Legal long names contain no more than 260 characters and must contain at least one non-period character. The following characters are not allowed: \\ | {'>'} : / \" or {'<'}. The name must be shorter than 260 characters. The value could also be a localization variable with the format !(loc.VARIABLE)."},"WildCardLongFileNameType"),', required)\n: This value should be set to the localizable name of the file(s) to be removed. All of the files that\nmatch the wild card will be removed from the specified directory. The value is a filename that may also\ncontain the wild card characters "?" for any single character or "*" for zero or more occurrences of any character.\nIn prior versions of the WiX toolset, this attribute specified the short file name.\nThis attribute\'s value may now be either a short or long file name.\nIf a short file name is specified, the ShortName attribute may not be specified.\nAlso, if this value is a long file name, the ShortName attribute may be omitted to\nallow WiX to attempt to generate a unique short file name.\nHowever, if you wish to manually specify the short file name, then the ShortName attribute may be specified.'),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"On")," (enumeration, required)\n: This value determines the time at which the file(s) may be removed. For 'install', the file will\nbe removed only when the parent component is being installed (msiInstallStateLocal or\nmsiInstallStateSource); for 'uninstall', the file will be removed only when the parent component\nis being removed (msiInstallStateAbsent); for 'both', the file will be removed in both cases. This attribute's value must be one of the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"install"),": The action should happen during install (msiInstallStateLocal or msiInstallStateSource)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"uninstall"),": The action should happen during uninstall (msiInstallStateAbsent)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"both"),": The action should happen during both install and uninstall.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Property")," (String)\n: Overrides the directory of the parent component with the value of the specified property. The property\nshould have a value that resolves to the full path of the source directory. The property does not have\nto exist in the installer database at creation time; it could be created at installation time by a custom\naction, on the command line, etc. This attribute cannot be specified in conjunction with the Directory attribute."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"ShortName")," (",(0,n.kt)("a",{parentName:"p",href:"/wixtoolset/docs/schema/wxs/wildcardshortfilenametype",title:"Values of this type will look like: \"File?.*\". Only one period is allowed. The following characters are not allowed: \\ | {'>'} : / \" + , ; = [ ] {'<'}, or whitespace. The name cannot be longer than 8 characters and the extension cannot exceed 3 characters. The value could also be a localization variable with the format !(loc.VARIABLE)."},"WildCardShortFileNameType"),")\n: The short file name of the file in 8.3 format.\nThis attribute should only be set if you want to manually specify the short file name."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Subdirectory")," (String)\n: This attribute defines one or more directories below the directory referenced by the Directory attribute or parent\nDirectory reference for the file to be removed."),(0,n.kt)("h2",{id:"see-also"},"See also"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/wixtoolset/docs/schema/wxs/copyfile"},"CopyFile")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/wixtoolset/web/blob/master/src/xsd4/wix.xsd"},"Edit the schema for this page")))}f.isMDXComponent=!0}}]);