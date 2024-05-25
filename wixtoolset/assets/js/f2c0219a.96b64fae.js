"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[24997],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,d=u["".concat(l,".").concat(m)]||u[m]||f[m]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},144:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>u});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const s={custom_edit_url:null,sidebar_position:153},l="MsuPackagePayload element",p={unversionedId:"schema/wxs/msupackagepayload",id:"schema/wxs/msupackagepayload",title:"MsuPackagePayload element",description:"Describes information about the MsuPackage payload.",source:"@site/docs/schema/wxs/msupackagepayload.md",sourceDirName:"schema/wxs",slug:"/schema/wxs/msupackagepayload",permalink:"/wixtoolset/docs/schema/wxs/msupackagepayload",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:153,frontMatter:{custom_edit_url:null,sidebar_position:153},sidebar:"docsSidebar",previous:{title:"MsuPackage element",permalink:"/wixtoolset/docs/schema/wxs/msupackage"},next:{title:"MultiString element",permalink:"/wixtoolset/docs/schema/wxs/multistring"}},c={},u=[{value:"Parents",id:"parents",level:2},{value:"Attributes",id:"attributes",level:2}],f={toc:u},m="wrapper";function d(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)(m,o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},f,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"msupackagepayload-element"},"MsuPackagePayload element"),(0,n.kt)("p",null,"Describes information about the MsuPackage payload.\nCannot be specified if the owning MsuPackage specified any of SourceFile, Name, DownloadUrl, or Compressed."),(0,n.kt)("h2",{id:"parents"},"Parents"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/wixtoolset/docs/schema/wxs/msupackage"},"MsuPackage"),", ",(0,n.kt)("a",{parentName:"p",href:"/wixtoolset/docs/schema/wxs/payloadgroup"},"PayloadGroup")),(0,n.kt)("h2",{id:"attributes"},"Attributes"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"CertificatePublicKey")," (String)\n: Optional public key of the certificate used to sign the payload. It is not recommended to use this attribute and rely on the Hash alone."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"CertificateThumbprint")," (String)\n: Optional thumbprint of the certificate used to sign the payload. It is not recommended to use this attribute and rely on the Hash alone."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Compressed")," (",(0,n.kt)("a",{parentName:"p",href:"/wixtoolset/docs/schema/wxs/yesnodefaulttype",title:'Values of this type will either be "default", "yes", or "no".'},"YesNoDefaultTypeUnion"),")\n: Whether the package payload should be embedded in a container or left as an external payload."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Description")," (String)\n: Description of the file from version resources.\nIf Hash is not specified, must not be specified."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"DownloadUrl")," (String)\n: The URL to use to download the package. The following substitutions are supported:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"{0} is replaced by the package Id."),(0,n.kt)("li",{parentName:"ul"},"{1} is replaced by the payload Id."),(0,n.kt)("li",{parentName:"ul"},"{2} is replaced by the payload file name.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Hash")," (",(0,n.kt)("a",{parentName:"p",href:"/wixtoolset/docs/schema/wxs/hextype",title:'This type supports any hexadecimal number. Both upper and lower case are supported for letters appearing in the number. This type also includes the empty string: "".'},"HexType"),")\n: SHA-512 hash of the RemotePayload.\nIf SourceFile is specified, must not be specified.\nIf specified then Name, DownloadUrl, and Size are required."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Id")," (String)\n: The identifier of the package payload element."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Name")," (String)\n: The destination path and file name for this chain payload.\nUse this attribute to rename the chain entry point or extract it into a subfolder.\nThe default value is the file name from the SourceFile attribute.\nAt a minimum, the Name or SourceFile attribute must be specified.\nThis must be a relative path ('\\foo' or 'C:\\foo' is not allowed)."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"ProductName")," (String)\n: Product name of the file from version resouces.\nIf Hash is not specified, must not be specified."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Size")," (",(0,n.kt)("a",{parentName:"p",href:"/wixtoolset/docs/schema/wxs/integer",title:"Values of this type must be a non-negative integer or a preprocessor variable with the format `$(Variable)` or `$(var.Variable)`."},"Integer"),")\n: Size of the remote file in bytes.\nRequired if Hash is specified, otherwise must not be specified."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"SourceFile")," (String)\n: Location of the package to add to the bundle.\nThe default value is the Name attribute, if provided.\nIf Hash is specified, must not be specified."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Version")," (",(0,n.kt)("a",{parentName:"p",href:"/wixtoolset/docs/schema/wxs/wixversiontype",title:"Values of this type will be a 1-part, 2-part, 3-part or 4-part version number or a semantic version."},"WixVersionType"),")\n: Version of the remote file.\nIf Hash is not specified, must not be specified."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/wixtoolset/web/blob/master/src/xsd4/wix.xsd"},"Edit the schema for this page")))}d.isMDXComponent=!0}}]);