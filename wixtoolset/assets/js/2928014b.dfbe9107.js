"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[71875],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),f=o,d=u["".concat(l,".").concat(f)]||u[f]||y[f]||i;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},92476:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>u});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const s={},l="How To: Read a Registry Entry During Installation",c={unversionedId:"howtos/files_and_registry/read_a_registry_entry",id:"version-v3/howtos/files_and_registry/read_a_registry_entry",title:"How To: Read a Registry Entry During Installation",description:"Installers often need to look up the value of a registry entry during the installation process. The resulting registry value is often used in a conditional statement later in install, such as to install a specific component if a registry entry is not found. This how to demonstrates reading an integer value from the registry and verifying that it exists in a launch condition.",source:"@site/versioned_docs/version-v3/howtos/files_and_registry/read_a_registry_entry.md",sourceDirName:"howtos/files_and_registry",slug:"/howtos/files_and_registry/read_a_registry_entry",permalink:"/wixtoolset/docs/v3/howtos/files_and_registry/read_a_registry_entry",draft:!1,editUrl:"https://github.com/wixtoolset/web/tree/master/src/Docusaurus/versioned_docs/version-v3/howtos/files_and_registry/read_a_registry_entry.md",tags:[],version:"v3",frontMatter:{}},p={},u=[{value:"Step 1: Read the registry entry into a property",id:"step-1-read-the-registry-entry-into-a-property",level:2},{value:"Step 2: Use the property in a condition",id:"step-2-use-the-property-in-a-condition",level:2}],y={toc:u},f="wrapper";function d(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)(f,i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},y,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-to-read-a-registry-entry-during-installation"},"How To: Read a Registry Entry During Installation"),(0,n.kt)("p",null,"Installers often need to look up the value of a registry entry during the installation process. The resulting registry value is often used in a conditional statement later in install, such as to install a specific component if a registry entry is not found. This how to demonstrates reading an integer value from the registry and verifying that it exists in a ",(0,n.kt)("a",{href:"http://msdn.microsoft.com/library/aa369752.aspx",target:"_blank"},"launch condition"),"."),(0,n.kt)("h2",{id:"step-1-read-the-registry-entry-into-a-property"},"Step 1: Read the registry entry into a property"),(0,n.kt)("p",null,"Registry entries are read using the ",(0,n.kt)("a",{parentName:"p",href:"/wixtoolset/docs/v3/xsd/wix/registrysearch"},"RegistrySearch")," element. The following snippet looks for the the presence of the key that identifies the installation of .NET Framework 2.0 on the target machine*."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},'<Property Id="NETFRAMEWORK20">\n    <RegistrySearch Id="NetFramework20"\n                    Root="HKLM"\n                    Key="Software\\Microsoft\\NET Framework Setup\\NDP\\v2.0.50727"\n                    Name="Install"\n                    Type="raw" />\n</Property>\n')),(0,n.kt)("p",null,"The RegistrySearch element specifies a unique id, the root in the registry to search, and the key to look under. The name attribute specifies the specific value to query. The type attribute specifies how the value should be treated. Raw indicates that the value should be prefixed according to the data type of the value. In this case, since Install is a DWORD, the resulting value will be prepended with a #."),(0,n.kt)("p",null,"The above sample will set the NETFRAMEWORK20 property to ",'"',"#1",'"'," if the registry key was found, and to nothing if it wasn","'","t."),(0,n.kt)("h2",{id:"step-2-use-the-property-in-a-condition"},"Step 2: Use the property in a condition"),(0,n.kt)("p",null,"After the property is set you can use it in a condition anywhere in your WiX project. The following snippet demonstrates how to use it to block installation if .NET Framework 2.0 is not installed."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},'<Condition Message="This application requires .NET Framework 2.0. Please install the .NET Framework then run this installer again.">\n    <![CDATA[Installed OR NETFRAMEWORK20]]>\n</Condition>\n')),(0,n.kt)("a",{href:"http://msdn.microsoft.com/library/aa369297.aspx",target:"_blank"},"Installed")," is a Windows Installer property that ensures the check is only done when the user is installing the application, rather than on a repair or remove. The NETFRAMEWORK20 part of the condition will pass if the property was set. If it is not set the installer will display the error message then abort the installation process.",(0,n.kt)("p",null,"*"," This registry entry is used for sample purposes only. If you want to detect the installed version of .NET Framework you can use the built-in WiX support. For more information see ",(0,n.kt)("a",{parentName:"p",href:"/wixtoolset/docs/v3/howtos/redistributables_and_install_checks/check_for_dotnet"},"How To: Check for .NET Framework Versions"),"."))}d.isMDXComponent=!0}}]);