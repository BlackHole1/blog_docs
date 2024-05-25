"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[93566],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),c=u(n),p=l,k=c["".concat(s,".").concat(p)]||c[p]||y[p]||i;return n?r.createElement(k,o(o({ref:t},d),{},{components:n})):r.createElement(k,o({ref:t},d))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=p;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[c]="string"==typeof e?e:l,o[1]=a;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},59217:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>k,frontMatter:()=>a,metadata:()=>u,toc:()=>c});n(67294);var r=n(3905);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}const a={title:"RegistryKey Element",layout:"documentation_xsd_main"},s=void 0,u={unversionedId:"xsd/wix/registrykey",id:"version-v3/xsd/wix/registrykey",title:"RegistryKey Element",description:"Description",source:"@site/versioned_docs/version-v3/xsd/wix/registrykey.md",sourceDirName:"xsd/wix",slug:"/xsd/wix/registrykey",permalink:"/wixtoolset/docs/v3/xsd/wix/registrykey",draft:!1,editUrl:"https://github.com/wixtoolset/web/tree/master/src/Docusaurus/versioned_docs/version-v3/xsd/wix/registrykey.md",tags:[],version:"v3",frontMatter:{title:"RegistryKey Element",layout:"documentation_xsd_main"}},d={},c=[],y={toc:c},p="wrapper";function k(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)(p,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}({},y,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("dl",null,(0,r.kt)("dt",null,"Description"),(0,r.kt)("dd",null,"                 Used for organization of child RegistryValue elements or to create a registry key                 (and optionally remove it during uninstallation).             "),(0,r.kt)("dt",null,"Windows Installer references"),(0,r.kt)("dd",null,(0,r.kt)("a",{href:"http://msdn.microsoft.com/library/aa371168.aspx",target:"_blank"},"Registry Table")),(0,r.kt)("dt",null,"Parents"),(0,r.kt)("dd",null,(0,r.kt)("a",{href:"../component/"},"Component"),", ",(0,r.kt)("a",{href:"../registrykey/"},"RegistryKey")),(0,r.kt)("dt",null,"Inner Text"),(0,r.kt)("dd",null,"None"),(0,r.kt)("dt",null,"Children"),(0,r.kt)("dd",null,"Choice of elements (min: 0, max: unbounded)",(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("a",{href:"../permission/"},"Permission")," (min: 0, max: unbounded): ACL permission"),(0,r.kt)("li",null,(0,r.kt)("a",{href:"../permissionex/"},"PermissionEx")," (min: 0, max: unbounded): Can also configure the ACLs for this registry key."),(0,r.kt)("li",null,(0,r.kt)("a",{href:"../registrykey/"},"RegistryKey")," (min: 0, max: unbounded)"),(0,r.kt)("li",null,(0,r.kt)("a",{href:"../registryvalue/"},"RegistryValue")," (min: 0, max: unbounded)"),(0,r.kt)("li",null,(0,r.kt)("span",{class:"extension"},"Any Element (namespace='##other' processContents='Lax')                              Extensibility point in the WiX XML Schema.  Schema extensions can register additional                             elements at this point in the schema.                         "),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("a",{href:"../../util/permissionex",class:"extension"},"PermissionEx")))))),(0,r.kt)("dt",null,"Attributes"),(0,r.kt)("dd",null,(0,r.kt)("table",{cellspacing:"0",cellpadding:"0",class:"schema"},(0,r.kt)("tr",null,(0,r.kt)("th",{width:"15%"},"Name"),(0,r.kt)("th",{width:"15%"},"Type"),(0,r.kt)("th",{width:"65%"},"Description"),(0,r.kt)("th",{width:"15%"},"Required")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Action"),(0,r.kt)("td",null,"Enumeration"),(0,r.kt)("td",null,"                         The Action attribute has been deprecated. In most cases, you can simply omit @Action.  If you need to force Windows Installer                          to create an empty key or recursively delete the key, use the ForceCreateOnInstall or ForceDeleteOnUninstall attributes instead.                       This attribute's value must be one of the following:",(0,r.kt)("dl",null,(0,r.kt)("dt",{class:"enumerationValue"},(0,r.kt)("dfn",null,"create")),(0,r.kt)("dd",null,"                                     Creates the key, if absent, when the parent component is installed.                                 "),(0,r.kt)("dt",{class:"enumerationValue"},(0,r.kt)("dfn",null,"createAndRemoveOnUninstall")),(0,r.kt)("dd",null,"                                     Creates the key, if absent, when the parent component is installed then remove the key with all its values and subkeys when the parent component is uninstalled.                                     Note that this value is useful only if your program creates additional values or subkeys under this key and you want an uninstall to remove them. MSI already                                     removes all values and subkeys that it creates, so this option just adds additional overhead to uninstall.                                 "),(0,r.kt)("dt",{class:"enumerationValue"},(0,r.kt)("dfn",null,"none")),(0,r.kt)("dd",null,"                                     Does nothing; this element is used merely in WiX authoring for organization and does nothing to the final output.                                     This is the default value.                                 "))),(0,r.kt)("td",null,"\xa0")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"ForceCreateOnInstall"),(0,r.kt)("td",null,(0,r.kt)("a",{href:"../simple_type_yesnotype/"},"YesNoType")),(0,r.kt)("td",null,"                         Set this attribute to 'yes' to create an empty key, if absent, when the parent component is installed.                         This value is needed only to create an empty key with no subkeys or values. Windows Installer creates                         keys as needed to store subkeys and values. The default is \"no\".                     "),(0,r.kt)("td",null,"\xa0")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"ForceDeleteOnUninstall"),(0,r.kt)("td",null,(0,r.kt)("a",{href:"../simple_type_yesnotype/"},"YesNoType")),(0,r.kt)("td",null,"                         Set this attribute to 'yes' to remove the key with all its values and subkeys when the parent component is uninstalled.                         Note that this value is useful only if your program creates additional values or subkeys under this key and you want an uninstall to remove them. MSI already                         removes all values and subkeys that it creates, so this option just adds additional overhead to uninstall.                         The default is \"no\".                     "),(0,r.kt)("td",null,"\xa0")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Id"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"                         Primary key used to identify this particular entry.  If this attribute is not specified, an identifier will be                         generated by hashing the parent Component identifier, Root, Key, and Name.                     "),(0,r.kt)("td",null,"\xa0")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Key"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"                         The localizable key for the registry value.                         If the parent element is a RegistryKey, this value may be omitted to use the                         path of the parent, or if its specified it will be appended to the path of the parent.                     "),(0,r.kt)("td",null,"\xa0")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Root"),(0,r.kt)("td",null,(0,r.kt)("a",{href:"../simple_type_registryroottype/"},"RegistryRootType")),(0,r.kt)("td",null,"                         The predefined root key for the registry value.                     "),(0,r.kt)("td",null,"\xa0")))),(0,r.kt)("dt",null,"How Tos and Examples"),(0,r.kt)("dd",null,(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("a",{href:"../../../howtos/files_and_registry/read_a_registry_entry"},"How To: Read a registry entry during installation")),(0,r.kt)("li",null,(0,r.kt)("a",{href:"../../../howtos/files_and_registry/write_a_registry_entry"},"How To: Write a registry entry during installation")))),(0,r.kt)("dt",null,"See Also"),(0,r.kt)("dd",null,(0,r.kt)("a",{href:"../"},"Wix Schema"))))}k.isMDXComponent=!0}}]);