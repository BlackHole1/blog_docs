"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[56165],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},m=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(a),h=i,d=p["".concat(s,".").concat(h)]||p[h]||u[h]||o;return a?r.createElement(d,n(n({ref:t},m),{},{components:a})):r.createElement(d,n({ref:t},m))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,n=new Array(o);n[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,n[1]=l;for(var c=2;c<o;c++)n[c]=a[c];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},92730:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>p});a(67294);var r=a(3905);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function n(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}const l={custom_edit_url:null,sidebar_position:105},s="Fragment element",c={unversionedId:"schema/wxs/fragment",id:"schema/wxs/fragment",title:"Fragment element",description:"The Fragment element is the building block of creating an installer database in WiX. Once defined,",source:"@site/docs/schema/wxs/fragment.md",sourceDirName:"schema/wxs",slug:"/schema/wxs/fragment",permalink:"/wixtoolset/docs/schema/wxs/fragment",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:105,frontMatter:{custom_edit_url:null,sidebar_position:105},sidebar:"docsSidebar",previous:{title:"ForceReboot element",permalink:"/wixtoolset/docs/schema/wxs/forcereboot"},next:{title:"Icon element",permalink:"/wixtoolset/docs/schema/wxs/icon"}},m={},p=[{value:"Parents",id:"parents",level:2},{value:"Children",id:"children",level:2},{value:"Attributes",id:"attributes",level:2}],u={toc:p},h="wrapper";function d(e){var{components:t}=e,a=n(e,["components"]);return(0,r.kt)(h,o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),r.forEach((function(t){i(e,t,a[t])}))}return e}({},u,a),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"fragment-element"},"Fragment element"),(0,r.kt)("p",null,"The Fragment element is the building block of creating an installer database in WiX. Once defined,\nthe Fragment becomes an immutable, atomic unit which can either be completely included or excluded\nfrom a product. The contents of a Fragment element can be linked into a product by utilizing one\nof the many *Ref elements. When linking in a Fragment, it will be necessary to link in all of its\nindividual units. For instance, if a given Fragment contains two Component elements, you must link\nboth under features using ComponentRef for each linked Component. Otherwise, you will get a linker\nwarning and have a floating Component that does not appear under any Feature."),(0,r.kt)("h2",{id:"parents"},"Parents"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/wixtoolset/docs/schema/wxs/wix"},"Wix")),(0,r.kt)("h2",{id:"children"},"Children"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/wxs/adminexecutesequence"},"AdminExecuteSequence")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/wxs/adminuisequence"},"AdminUISequence")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/wxs/advertiseexecutesequence"},"AdvertiseExecuteSequence")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/wxs/appid"},"AppId")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/wxs/binary"},"Binary")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/wxs/bootstrapperapplication"},"BootstrapperApplication")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/bal/bootstrapperapplicationprerequisiteinformation"},"BootstrapperApplicationPrerequisiteInformation (Bal extension)")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/wxs/bootstrapperapplicationref"},"BootstrapperApplicationRef")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/wxs/bootstrapperextension"},"BootstrapperExtension")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/wxs/bootstrapperextensionref"},"BootstrapperExtensionRef")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/util/broadcastenvironmentchange"},"BroadcastEnvironmentChange (Util extension)")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/util/broadcastsettingchange"},"BroadcastSettingChange (Util extension)")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/wxs/bundlecustomdata"},"BundleCustomData")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/wxs/bundlecustomdataref"},"BundleCustomDataRef")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/wxs/bundleextension"},"BundleExtension")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/wxs/bundleextensionref"},"BundleExtensionRef")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/util/checkrebootrequired"},"CheckRebootRequired (Util extension)")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/util/closeapplication"},"CloseApplication (Util extension)")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/wxs/compliancecheck"},"ComplianceCheck")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/complus/complusapplication"},"ComPlusApplication (Complus extension)")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/complus/complusapplicationrole"},"ComPlusApplicationRole (Complus extension)")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/complus/compluspartition"},"ComPlusPartition (Complus extension)")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/complus/compluspartitionrole"},"ComPlusPartitionRole (Complus extension)")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/wxs/component"},"Component")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/wxs/componentgroup"},"ComponentGroup")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/util/componentsearch"},"ComponentSearch (Util extension)")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/util/componentsearchref"},"ComponentSearchRef (Util extension)")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/bal/condition"},"Condition (Bal extension)")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/wxs/container"},"Container")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/wxs/customaction"},"CustomAction")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/wxs/customactionref"},"CustomActionRef")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/wxs/customtable"},"CustomTable")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/wxs/customtableref"},"CustomTableRef")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/wxs/directory"},"Directory")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/wxs/directoryref"},"DirectoryRef")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/util/directorysearch"},"DirectorySearch (Util extension)")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/util/directorysearchref"},"DirectorySearchRef (Util extension)")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/netfx/dotnetcoresdkfeaturebandsearch"},"DotNetCoreSdkFeatureBandSearch (Netfx extension)")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/netfx/dotnetcoresdkfeaturebandsearchref"},"DotNetCoreSdkFeatureBandSearchRef (Netfx extension)")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/netfx/dotnetcoresdksearch"},"DotNetCoreSdkSearch (Netfx extension)")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/netfx/dotnetcoresdksearchref"},"DotNetCoreSdkSearchRef (Netfx extension)")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/netfx/dotnetcoresearch"},"DotNetCoreSearch (Netfx extension)")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/netfx/dotnetcoresearchref"},"DotNetCoreSearchRef (Netfx extension)")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/wxs/embeddedchainer"},"EmbeddedChainer")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/wxs/embeddedchainerref"},"EmbeddedChainerRef")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/wxs/ensuretable"},"EnsureTable")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/util/exitearlywithsuccess"},"ExitEarlyWithSuccess (Util extension)")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/util/failwhendeferred"},"FailWhenDeferred (Util extension)")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/wxs/feature"},"Feature")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/wxs/featuregroup"},"FeatureGroup")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/wxs/featureref"},"FeatureRef")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/wxs/file"},"File")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/wxs/files"},"Files")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/util/filesearch"},"FileSearch (Util extension)")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/util/filesearchref"},"FileSearchRef (Util extension)")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/vs/findvisualstudio"},"FindVisualStudio (Vs extension)")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/directx/getcapabilities"},"GetCapabilities (Directx extension)")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/util/group"},"Group (Util extension)")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/wxs/icon"},"Icon")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/wxs/installexecutesequence"},"InstallExecuteSequence")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/wxs/installuisequence"},"InstallUISequence")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/wxs/launch"},"Launch")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/bal/managedbootstrapperapplicationprereqinformation"},"ManagedBootstrapperApplicationPrereqInformation (Bal extension)")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/wxs/media"},"Media")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/wxs/mediatemplate"},"MediaTemplate")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/wxs/packagecertificates"},"PackageCertificates")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/wxs/packagegroup"},"PackageGroup")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/wxs/patchcertificates"},"PatchCertificates")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/wxs/patchfamily"},"PatchFamily")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/wxs/patchfamilygroup"},"PatchFamilyGroup")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/wxs/patchfamilygroupref"},"PatchFamilyGroupRef")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/wxs/payloadgroup"},"PayloadGroup")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/util/productsearch"},"ProductSearch (Util extension)")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/util/productsearchref"},"ProductSearchRef (Util extension)")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/wxs/property"},"Property")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/wxs/propertyref"},"PropertyRef")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/util/querynativemachine"},"QueryNativeMachine (Util extension)")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/util/querywindowsdirectories"},"QueryWindowsDirectories (Util extension)")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/util/querywindowsdriverinfo"},"QueryWindowsDriverInfo (Util extension)")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/util/querywindowssuiteinfo"},"QueryWindowsSuiteInfo (Util extension)")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/util/querywindowswellknownsids"},"QueryWindowsWellKnownSIDs (Util extension)")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/util/registrysearch"},"RegistrySearch (Util extension)")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/util/registrysearchref"},"RegistrySearchRef (Util extension)")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/wxs/relatedbundle"},"RelatedBundle")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/wxs/requires"},"Requires")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/util/restartresource"},"RestartResource (Util extension)")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/wxs/setdirectory"},"SetDirectory")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/wxs/setproperty"},"SetProperty")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/wxs/setvariable"},"SetVariable")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/wxs/setvariableref"},"SetVariableRef")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/wxs/sfpcatalog"},"SFPCatalog")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/sql/sqldatabase"},"SqlDatabase (Sql extension)")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/wxs/standarddirectory"},"StandardDirectory")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/wxs/ui"},"UI")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/wxs/uiref"},"UIRef")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/wxs/upgrade"},"Upgrade")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/util/user"},"User (Util extension)")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/wxs/variable"},"Variable")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/util/waitforevent"},"WaitForEvent (Util extension)")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/util/waitforeventdeferred"},"WaitForEventDeferred (Util extension)")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/iis/webapplication"},"WebApplication (Iis extension)")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/iis/webapppool"},"WebAppPool (Iis extension)")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/iis/webdirproperties"},"WebDirProperties (Iis extension)")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/iis/weblog"},"WebLog (Iis extension)")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/iis/website"},"WebSite (Iis extension)")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/util/windowsfeaturesearch"},"WindowsFeatureSearch (Util extension)")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/util/windowsfeaturesearchref"},"WindowsFeatureSearchRef (Util extension)")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/ui/wixui"},"WixUI (Ui extension)")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/wxs/wixvariable"},"WixVariable")," ")),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Id")," (String)\n: Optional identifier for a Fragment. Should only be set by advanced users to tag sections."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/wixtoolset/web/blob/master/src/xsd4/wix.xsd"},"Edit the schema for this page")))}d.isMDXComponent=!0}}]);