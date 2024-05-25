"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[2278],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=l.createContext({}),s=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return l.createElement(u.Provider,{value:t},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,p=d["".concat(u,".").concat(m)]||d[m]||k[m]||i;return n?l.createElement(p,a(a({ref:t},c),{},{components:n})):l.createElement(p,a({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[d]="string"==typeof e?e:r,a[1]=o;for(var s=2;s<i;s++)a[s]=n[s];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81168:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});n(67294);var l=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const o={title:"Product Element",layout:"documentation_xsd_main"},u=void 0,s={unversionedId:"xsd/wix/product",id:"version-v3/xsd/wix/product",title:"Product Element",description:"Description",source:"@site/versioned_docs/version-v3/xsd/wix/product.md",sourceDirName:"xsd/wix",slug:"/xsd/wix/product",permalink:"/wixtoolset/docs/v3/xsd/wix/product",draft:!1,editUrl:"https://github.com/wixtoolset/web/tree/master/src/Docusaurus/versioned_docs/version-v3/xsd/wix/product.md",tags:[],version:"v3",frontMatter:{title:"Product Element",layout:"documentation_xsd_main"}},c={},d=[],k={toc:d},m="wrapper";function p(e){var{components:t}=e,n=a(e,["components"]);return(0,l.kt)(m,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},l=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(l=l.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),l.forEach((function(t){r(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,l.kt)("dl",null,(0,l.kt)("dt",null,"Description"),(0,l.kt)("dd",null,"         The Product element is analogous to the main function in a C program.  When linking, only one Product section         can be given to the linker to produce a successful result.  Using this element creates an msi file.       "),(0,l.kt)("dt",null,"Windows Installer references"),(0,l.kt)("dd",null,"None"),(0,l.kt)("dt",null,"Parents"),(0,l.kt)("dd",null,(0,l.kt)("a",{href:"../wix/"},"Wix")),(0,l.kt)("dt",null,"Inner Text"),(0,l.kt)("dd",null,"None"),(0,l.kt)("dt",null,"Children"),(0,l.kt)("dd",null,"Sequence (min: 1, max: 1)",(0,l.kt)("ol",null,(0,l.kt)("li",null,(0,l.kt)("a",{href:"../package/"},"Package")," (min: 1, max: 1)"),(0,l.kt)("li",null,"Choice of elements (min: 0, max: unbounded)",(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("a",{href:"../appid/"},"AppId")," (min: 0, max: unbounded)"),(0,l.kt)("li",null,(0,l.kt)("a",{href:"../binary/"},"Binary")," (min: 0, max: unbounded)"),(0,l.kt)("li",null,(0,l.kt)("a",{href:"../compliancecheck/"},"ComplianceCheck")," (min: 0, max: unbounded)"),(0,l.kt)("li",null,(0,l.kt)("a",{href:"../component/"},"Component")," (min: 0, max: unbounded)"),(0,l.kt)("li",null,(0,l.kt)("a",{href:"../componentgroup/"},"ComponentGroup")," (min: 0, max: unbounded)"),(0,l.kt)("li",null,(0,l.kt)("a",{href:"../condition/"},"Condition")," (min: 0, max: unbounded)"),(0,l.kt)("li",null,(0,l.kt)("a",{href:"../customaction/"},"CustomAction")," (min: 0, max: unbounded)"),(0,l.kt)("li",null,(0,l.kt)("a",{href:"../customactionref/"},"CustomActionRef")," (min: 0, max: unbounded)"),(0,l.kt)("li",null,(0,l.kt)("a",{href:"../customtable/"},"CustomTable")," (min: 0, max: unbounded)"),(0,l.kt)("li",null,(0,l.kt)("a",{href:"../directory/"},"Directory")," (min: 0, max: unbounded)"),(0,l.kt)("li",null,(0,l.kt)("a",{href:"../directoryref/"},"DirectoryRef")," (min: 0, max: unbounded)"),(0,l.kt)("li",null,(0,l.kt)("a",{href:"../embeddedchainer/"},"EmbeddedChainer")," (min: 0, max: unbounded)"),(0,l.kt)("li",null,(0,l.kt)("a",{href:"../embeddedchainerref/"},"EmbeddedChainerRef")," (min: 0, max: unbounded)"),(0,l.kt)("li",null,(0,l.kt)("a",{href:"../ensuretable/"},"EnsureTable")," (min: 0, max: unbounded)"),(0,l.kt)("li",null,(0,l.kt)("a",{href:"../feature/"},"Feature")," (min: 0, max: unbounded)"),(0,l.kt)("li",null,(0,l.kt)("a",{href:"../featuregroupref/"},"FeatureGroupRef")," (min: 0, max: unbounded)"),(0,l.kt)("li",null,(0,l.kt)("a",{href:"../featureref/"},"FeatureRef")," (min: 0, max: unbounded)"),(0,l.kt)("li",null,(0,l.kt)("a",{href:"../icon/"},"Icon")," (min: 0, max: unbounded)"),(0,l.kt)("li",null,(0,l.kt)("a",{href:"../instancetransforms/"},"InstanceTransforms")," (min: 0, max: unbounded)"),(0,l.kt)("li",null,(0,l.kt)("a",{href:"../majorupgrade/"},"MajorUpgrade")," (min: 0, max: unbounded)"),(0,l.kt)("li",null,(0,l.kt)("a",{href:"../media/"},"Media")," (min: 0, max: unbounded)"),(0,l.kt)("li",null,(0,l.kt)("a",{href:"../mediatemplate/"},"MediaTemplate")," (min: 0, max: unbounded)"),(0,l.kt)("li",null,(0,l.kt)("a",{href:"../packagecertificates/"},"PackageCertificates")," (min: 0, max: unbounded)"),(0,l.kt)("li",null,(0,l.kt)("a",{href:"../patchcertificates/"},"PatchCertificates")," (min: 0, max: unbounded)"),(0,l.kt)("li",null,(0,l.kt)("a",{href:"../property/"},"Property")," (min: 0, max: unbounded)"),(0,l.kt)("li",null,(0,l.kt)("a",{href:"../propertyref/"},"PropertyRef")," (min: 0, max: unbounded)"),(0,l.kt)("li",null,(0,l.kt)("a",{href:"../setdirectory/"},"SetDirectory")," (min: 0, max: unbounded)"),(0,l.kt)("li",null,(0,l.kt)("a",{href:"../setproperty/"},"SetProperty")," (min: 0, max: unbounded)"),(0,l.kt)("li",null,(0,l.kt)("a",{href:"../sfpcatalog/"},"SFPCatalog")," (min: 0, max: unbounded)"),(0,l.kt)("li",null,(0,l.kt)("a",{href:"../symbolpath/"},"SymbolPath")," (min: 0, max: unbounded)"),(0,l.kt)("li",null,(0,l.kt)("a",{href:"../ui/"},"UI")," (min: 0, max: unbounded)"),(0,l.kt)("li",null,(0,l.kt)("a",{href:"../uiref/"},"UIRef")," (min: 0, max: unbounded)"),(0,l.kt)("li",null,(0,l.kt)("a",{href:"../upgrade/"},"Upgrade")," (min: 0, max: unbounded)"),(0,l.kt)("li",null,(0,l.kt)("a",{href:"../wixvariable/"},"WixVariable")," (min: 0, max: unbounded)"),(0,l.kt)("li",null,"Sequence (min: 1, max: 1)",(0,l.kt)("ol",null,(0,l.kt)("li",null,(0,l.kt)("a",{href:"../installexecutesequence/"},"InstallExecuteSequence")," (min: 0, max: 1)"),(0,l.kt)("li",null,(0,l.kt)("a",{href:"../installuisequence/"},"InstallUISequence")," (min: 0, max: 1)"),(0,l.kt)("li",null,(0,l.kt)("a",{href:"../adminexecutesequence/"},"AdminExecuteSequence")," (min: 0, max: 1)"),(0,l.kt)("li",null,(0,l.kt)("a",{href:"../adminuisequence/"},"AdminUISequence")," (min: 0, max: 1)"),(0,l.kt)("li",null,(0,l.kt)("a",{href:"../advertiseexecutesequence/"},"AdvertiseExecuteSequence")," (min: 0, max: 1)"))),(0,l.kt)("li",null,(0,l.kt)("span",{class:"extension"},"Any Element (namespace='##other' processContents='Lax')                              Extensibility point in the WiX XML Schema.  Schema extensions can register additional                             elements at this point in the schema.                         "),(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("a",{href:"../../util/closeapplication",class:"extension"},"CloseApplication")),(0,l.kt)("li",null,(0,l.kt)("a",{href:"../../complus/complusapplication",class:"extension"},"ComPlusApplication")),(0,l.kt)("li",null,(0,l.kt)("a",{href:"../../complus/complusapplicationrole",class:"extension"},"ComPlusApplicationRole")),(0,l.kt)("li",null,(0,l.kt)("a",{href:"../../complus/compluspartition",class:"extension"},"ComPlusPartition")),(0,l.kt)("li",null,(0,l.kt)("a",{href:"../../complus/compluspartitionrole",class:"extension"},"ComPlusPartitionRole")),(0,l.kt)("li",null,(0,l.kt)("a",{href:"../../util/group",class:"extension"},"Group")),(0,l.kt)("li",null,(0,l.kt)("a",{href:"../../vs/helpcollectionref",class:"extension"},"HelpCollectionRef")),(0,l.kt)("li",null,(0,l.kt)("a",{href:"../../vs/helpfilter",class:"extension"},"HelpFilter")),(0,l.kt)("li",null,(0,l.kt)("a",{href:"../majorupgrade/"},"MajorUpgrade")),(0,l.kt)("li",null,(0,l.kt)("a",{href:"../../dependency/requires",class:"extension"},"Requires")),(0,l.kt)("li",null,(0,l.kt)("a",{href:"../../util/restartresource",class:"extension"},"RestartResource")),(0,l.kt)("li",null,(0,l.kt)("a",{href:"../../sql/sqldatabase",class:"extension"},"SqlDatabase")),(0,l.kt)("li",null,(0,l.kt)("a",{href:"../../tag/tag",class:"extension"},"Tag")),(0,l.kt)("li",null,(0,l.kt)("a",{href:"../../lux/unittestref",class:"extension"},"UnitTestRef")),(0,l.kt)("li",null,(0,l.kt)("a",{href:"../../util/user",class:"extension"},"User")),(0,l.kt)("li",null,(0,l.kt)("a",{href:"../../iis/webapplication",class:"extension"},"WebApplication")),(0,l.kt)("li",null,(0,l.kt)("a",{href:"../../iis/webapppool",class:"extension"},"WebAppPool")),(0,l.kt)("li",null,(0,l.kt)("a",{href:"../../iis/webdirproperties",class:"extension"},"WebDirProperties")),(0,l.kt)("li",null,(0,l.kt)("a",{href:"../../iis/weblog",class:"extension"},"WebLog")),(0,l.kt)("li",null,(0,l.kt)("a",{href:"../../iis/website",class:"extension"},"WebSite")))))))),(0,l.kt)("dt",null,"Attributes"),(0,l.kt)("dd",null,(0,l.kt)("table",{cellspacing:"0",cellpadding:"0",class:"schema"},(0,l.kt)("tr",null,(0,l.kt)("th",{width:"15%"},"Name"),(0,l.kt)("th",{width:"15%"},"Type"),(0,l.kt)("th",{width:"65%"},"Description"),(0,l.kt)("th",{width:"15%"},"Required")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Id"),(0,l.kt)("td",null,(0,l.kt)("a",{href:"../simple_type_autogenguid/"},"AutogenGuid")),(0,l.kt)("td",null,"The product code GUID for the product."),(0,l.kt)("td",null,"Yes")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Codepage"),(0,l.kt)("td",null,"String"),(0,l.kt)("td",null,"The code page integer value or web name for the resulting MSI. See remarks for more information."),(0,l.kt)("td",null,"\xa0")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Language"),(0,l.kt)("td",null,(0,l.kt)("a",{href:"../simple_type_localizableinteger/"},"LocalizableInteger")),(0,l.kt)("td",null,"The decimal language ID (LCID) for the product."),(0,l.kt)("td",null,"Yes")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Manufacturer"),(0,l.kt)("td",null,"String"),(0,l.kt)("td",null,"The manufacturer of the product."),(0,l.kt)("td",null,"Yes")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Name"),(0,l.kt)("td",null,"String"),(0,l.kt)("td",null,"The descriptive name of the product."),(0,l.kt)("td",null,"Yes")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"UpgradeCode"),(0,l.kt)("td",null,(0,l.kt)("a",{href:"../simple_type_guid/"},"Guid")),(0,l.kt)("td",null,"The upgrade code GUID for the product."),(0,l.kt)("td",null,"\xa0")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Version"),(0,l.kt)("td",null,"String"),(0,l.kt)("td",null,"The product's version string."),(0,l.kt)("td",null,"Yes")),(0,l.kt)("tr",null,(0,l.kt)("td",{colspan:"4"},(0,l.kt)("span",{class:"extension"},"Any Attribute (namespace='##other' processContents='lax')                      Extensibility point in the WiX XML Schema.  Schema extensions can register additional                     attributes at this point in the schema.                 "))))),(0,l.kt)("dt",null,"Remarks"),(0,l.kt)("dd",null,(0,l.kt)("p",null,"You can specify any valid Windows code page by integer like 1252, or by web name like Windows-1252. See ",(0,l.kt)("a",{href:"../../../overview/codepage"},"Code Pages")," for more information.")),(0,l.kt)("dt",null,"See Also"),(0,l.kt)("dd",null,(0,l.kt)("a",{href:"../"},"Wix Schema"))))}p.isMDXComponent=!0}}]);