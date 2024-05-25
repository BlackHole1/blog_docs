"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[73548],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},y="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),y=u(r),d=i,h=y["".concat(l,".").concat(d)]||y[d]||p[d]||o;return r?n.createElement(h,s(s({ref:t},c),{},{components:r})):n.createElement(h,s({ref:t},c))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,s=new Array(o);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[y]="string"==typeof e?e:i,s[1]=a;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},98412:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>u,toc:()=>y});r(67294);var n=r(3905);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const a={},l="How To: Write a Registry Entry During Installation",u={unversionedId:"howtos/files_and_registry/write_a_registry_entry",id:"version-v3/howtos/files_and_registry/write_a_registry_entry",title:"How To: Write a Registry Entry During Installation",description:"Writing registry entries during installation is similar to writing files during installation. You describe the registry hierarchy you want to write into, specify the registry values to create, then add the component to your feature list.",source:"@site/versioned_docs/version-v3/howtos/files_and_registry/write_a_registry_entry.md",sourceDirName:"howtos/files_and_registry",slug:"/howtos/files_and_registry/write_a_registry_entry",permalink:"/wixtoolset/docs/v3/howtos/files_and_registry/write_a_registry_entry",draft:!1,editUrl:"https://github.com/wixtoolset/web/tree/master/src/Docusaurus/versioned_docs/version-v3/howtos/files_and_registry/write_a_registry_entry.md",tags:[],version:"v3",frontMatter:{}},c={},y=[{value:"Step 1: Describe the registry layout and values",id:"step-1-describe-the-registry-layout-and-values",level:2},{value:"Step 2: Tell Windows Installer to install the entries",id:"step-2-tell-windows-installer-to-install-the-entries",level:2}],p={toc:y},d="wrapper";function h(e){var{components:t}=e,r=s(e,["components"]);return(0,n.kt)(d,o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){i(e,t,r[t])}))}return e}({},p,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-to-write-a-registry-entry-during-installation"},"How To: Write a Registry Entry During Installation"),(0,n.kt)("p",null,"Writing registry entries during installation is similar to writing files during installation. You describe the registry hierarchy you want to write into, specify the registry values to create, then add the component to your feature list."),(0,n.kt)("h2",{id:"step-1-describe-the-registry-layout-and-values"},"Step 1: Describe the registry layout and values"),(0,n.kt)("p",null,"The following example illustrates how to write two registry entries, one to a specific value and the other to the default value."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},'<DirectoryRef Id="TARGETDIR">\n    <Component Id="RegistryEntries" Guid="PUT-GUID-HERE">\n        <RegistryKey Root="HKCU"\n                     Key="Software\\MyCompany\\MyApplicationName"\n              Action="createAndRemoveOnUninstall">\n            <RegistryValue Type="integer" Name="SomeIntegerValue" Value="1" KeyPath="yes"/>\n            <RegistryValue Type="string" Value="Default Value"/>\n        </RegistryKey>\n    </Component>\n</DirectoryRef>\n')),(0,n.kt)("p",null,"The snippet begins with a DirectoryRef that points to the ",(0,n.kt)("a",{href:"http://msdn.microsoft.com/library/aa372064.aspx",target:"_blank"},"TARGETDIR")," directory defined by Windows Installer. This effectively means the registry entries should be installed to the target user","'","s machine. Under the DirectoryRef is a Component element that groups together the registry entries to be installed. The component is given an id for reference later in the WiX project and a unique guid."),(0,n.kt)("p",null,"The registry entries are created by first using the ",(0,n.kt)("a",{parentName:"p",href:"/wixtoolset/docs/v3/xsd/wix/registrykey"},"RegistryKey")," element to specify where in the registry the values should go. In this example the key is under ",(0,n.kt)("strong",{parentName:"p"},"HKEY","_","CURRENT","_","USER\\Software\\MyCompany\\MyApplicationName"),". The optional Action attribute is used to tell Windows Installer that the key should be created (if necessary) on install, and that the key and all its sub-values should be removed on uninstall."),(0,n.kt)("p",null,"Under the RegistryKey element the ",(0,n.kt)("a",{parentName:"p",href:"/wixtoolset/docs/v3/xsd/wix/registryvalue"},"RegistryValue")," element is used to create the actual registry values. The first is the SomeIntegerValue value, which is of type integer and has a value of 1. It is also marked as the KeyPath for the component, which is used by the Windows Installer to determine whether this component is installed on the machine. The second RegistryValue element sets the default value for the key to a string value of Default Value."),(0,n.kt)("p",null,"The id attribute is omitted on the RegistryKey and RegistryValue elements because there is no need to refer to these items elsewhere in the WiX project file. WiX will auto-generate ids for the elements based on the registry key, value, and parent component name."),(0,n.kt)("h2",{id:"step-2-tell-windows-installer-to-install-the-entries"},"Step 2: Tell Windows Installer to install the entries"),(0,n.kt)("p",null,"After defining the directory structure and listing the registry entries to package into the installer, the last step is to tell Windows Installer to actually install the registry entry. The ",(0,n.kt)("a",{parentName:"p",href:"/wixtoolset/docs/v3/xsd/wix/feature"},"Feature")," element is used to do this. The following snippet adds a reference to the registry entries component, and should be inserted inside a parent Feature element."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},'<ComponentRef Id="RegistryEntries" />\n')),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"/wixtoolset/docs/v3/xsd/wix/componentref"},"ComponentRef")," element is used to reference the component created in Step 1 via the Id attribute."))}h.isMDXComponent=!0}}]);