"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[35423],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=l.createContext({}),s=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return l.createElement(u.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},p=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),c=s(n),p=r,k=c["".concat(u,".").concat(p)]||c[p]||f[p]||o;return n?l.createElement(k,i(i({ref:t},d),{},{components:n})):l.createElement(k,i({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[c]="string"==typeof e?e:r,i[1]=a;for(var s=2;s<o;s++)i[s]=n[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},86270:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>k,frontMatter:()=>a,metadata:()=>s,toc:()=>c});n(67294);var l=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const a={title:"FirewallException Element (Firewall Extension)",layout:"documentation_xsd_extension"},u=void 0,s={unversionedId:"xsd/firewall/firewallexception",id:"version-v3/xsd/firewall/firewallexception",title:"FirewallException Element (Firewall Extension)",description:"Description",source:"@site/versioned_docs/version-v3/xsd/firewall/firewallexception.md",sourceDirName:"xsd/firewall",slug:"/xsd/firewall/firewallexception",permalink:"/wixtoolset/docs/v3/xsd/firewall/firewallexception",draft:!1,editUrl:"https://github.com/wixtoolset/web/tree/master/src/Docusaurus/versioned_docs/version-v3/xsd/firewall/firewallexception.md",tags:[],version:"v3",frontMatter:{title:"FirewallException Element (Firewall Extension)",layout:"documentation_xsd_extension"}},d={},c=[],f={toc:c},p="wrapper";function k(e){var{components:t}=e,n=i(e,["components"]);return(0,l.kt)(p,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},l=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(l=l.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),l.forEach((function(t){r(e,t,n[t])}))}return e}({},f,n),{components:t,mdxType:"MDXLayout"}),(0,l.kt)("dl",null,(0,l.kt)("dt",null,"Description"),(0,l.kt)("dd",null,"                 Registers an exception for a program or a specific port and protocol in the Windows Firewall                 on Windows XP SP2, Windows Server 2003 SP1, and later. For more information about the Windows                 Firewall, see ",(0,l.kt)("a",{href:"http://msdn.microsoft.com/en-us/library/aa364679.aspx"},"                 About Windows Firewall API"),".             "),(0,l.kt)("dt",null,"Windows Installer references"),(0,l.kt)("dd",null,"None"),(0,l.kt)("dt",null,"Parents"),(0,l.kt)("dd",null,(0,l.kt)("a",{href:"../../wix/component/"},"Component"),", ",(0,l.kt)("a",{href:"../../wix/file/"},"File")),(0,l.kt)("dt",null,"Inner Text"),(0,l.kt)("dd",null,"None"),(0,l.kt)("dt",null,"Children"),(0,l.kt)("dd",null,"Choice of elements (min: 0, max: unbounded)",(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("a",{href:"../../firewall/remoteaddress",class:"extension"},"RemoteAddress")," (min: 0, max: unbounded)"))),(0,l.kt)("dt",null,"Attributes"),(0,l.kt)("dd",null,(0,l.kt)("table",{cellspacing:"0",cellpadding:"0",class:"schema"},(0,l.kt)("tr",null,(0,l.kt)("th",{width:"15%"},"Name"),(0,l.kt)("th",{width:"15%"},"Type"),(0,l.kt)("th",{width:"65%"},"Description"),(0,l.kt)("th",{width:"15%"},"Required")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Id"),(0,l.kt)("td",null,"String"),(0,l.kt)("td",null,"                         Unique ID of this firewall exception.                     "),(0,l.kt)("td",null,"Yes")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Description"),(0,l.kt)("td",null,"String"),(0,l.kt)("td",null,"                       Description for this firewall rule displayed in Windows Firewall manager in                        Windows Vista and later.                     "),(0,l.kt)("td",null,"\xa0")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"File"),(0,l.kt)("td",null,"String"),(0,l.kt)("td",null,"                         Identifier of a file to be granted access to all incoming ports and                          protocols. If you use File, you cannot also use Program.",(0,l.kt)("br",null),(0,l.kt)("br",null),'                        If you use File and also Port or Protocol in the same                          FirewallException element, the exception will fail to install on                          Windows XP and Windows Server 2003. IgnoreFailure="yes" can be used to                         ignore the resulting failure, but the exception will not be added.                     '),(0,l.kt)("td",null,"\xa0")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"IgnoreFailure"),(0,l.kt)("td",null,(0,l.kt)("a",{href:"../../firewall/simple_type_yesnotype"},"YesNoType")),(0,l.kt)("td",null,'                         If "yes," failures to register this firewall exception will be silently                          ignored. If "no" (the default), failures will cause rollback.                     '),(0,l.kt)("td",null,"\xa0")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Name"),(0,l.kt)("td",null,"String"),(0,l.kt)("td",null,"                         Name of this firewall exception, visible to the user in the firewall                          control panel.                     "),(0,l.kt)("td",null,"Yes")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Port"),(0,l.kt)("td",null,"String"),(0,l.kt)("td",null,"                         Port to allow through the firewall for this exception. ",(0,l.kt)("br",null),(0,l.kt)("br",null),'                        If you use Port and also File or Program in the same                          FirewallException element, the exception will fail to install on                          Windows XP and Windows Server 2003. IgnoreFailure="yes" can be used to                         ignore the resulting failure, but the exception will not be added.                     '),(0,l.kt)("td",null,"\xa0")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Profile"),(0,l.kt)("td",null,"Enumeration"),(0,l.kt)("td",null,'                   Profile type for this firewall exception. Default is "all".                   This attribute\'s value must be one of the following:',(0,l.kt)("dl",null,(0,l.kt)("dt",{class:"enumerationValue"},(0,l.kt)("dfn",null,"domain")),(0,l.kt)("dd",null),(0,l.kt)("dt",{class:"enumerationValue"},(0,l.kt)("dfn",null,"private")),(0,l.kt)("dd",null),(0,l.kt)("dt",{class:"enumerationValue"},(0,l.kt)("dfn",null,"public")),(0,l.kt)("dd",null),(0,l.kt)("dt",{class:"enumerationValue"},(0,l.kt)("dfn",null,"all")),(0,l.kt)("dd",null))),(0,l.kt)("td",null,"\xa0")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Program"),(0,l.kt)("td",null,"String"),(0,l.kt)("td",null,"                         Path to a target program to be granted access to all incoming ports and                          protocols. Note that this is a formatted field, so you can use [#fileId]                          syntax to refer to a file being installed. If you use Program, you cannot                          also use File.",(0,l.kt)("br",null),(0,l.kt)("br",null),'                        If you use Program and also Port or Protocol in the same                          FirewallException element, the exception will fail to install on                          Windows XP and Windows Server 2003. IgnoreFailure="yes" can be used to                         ignore the resulting failure, but the exception will not be added.                     '),(0,l.kt)("td",null,"\xa0")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Protocol"),(0,l.kt)("td",null,"Enumeration"),(0,l.kt)("td",null,'                         IP protocol used for this firewall exception. If Port is defined,                          "tcp" is assumed if the protocol is not specified. ',(0,l.kt)("br",null),(0,l.kt)("br",null),'                        If you use Protocol and also File or Program in the same                          FirewallException element, the exception will fail to install on                          Windows XP and Windows Server 2003. IgnoreFailure="yes" can be used to                         ignore the resulting failure, but the exception will not be added.                       This attribute\'s value must be one of the following:',(0,l.kt)("dl",null,(0,l.kt)("dt",{class:"enumerationValue"},(0,l.kt)("dfn",null,"tcp")),(0,l.kt)("dd",null),(0,l.kt)("dt",{class:"enumerationValue"},(0,l.kt)("dfn",null,"udp")),(0,l.kt)("dd",null))),(0,l.kt)("td",null,"\xa0")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Scope"),(0,l.kt)("td",null,"Enumeration"),(0,l.kt)("td",null,"                         The scope of this firewall exception, which indicates whether incoming                         connections can come from any computer including those on the Internet                         or only those on the local network subnet. To more precisely specify                         allowed remote address, specify a custom scope using RemoteAddress                          child elements.                       This attribute's value must be one of the following:",(0,l.kt)("dl",null,(0,l.kt)("dt",{class:"enumerationValue"},(0,l.kt)("dfn",null,"any")),(0,l.kt)("dd",null),(0,l.kt)("dt",{class:"enumerationValue"},(0,l.kt)("dfn",null,"localSubnet")),(0,l.kt)("dd",null))),(0,l.kt)("td",null,"\xa0")))),(0,l.kt)("dt",null,"See Also"),(0,l.kt)("dd",null,(0,l.kt)("a",{href:"../"},"Firewall Schema"))))}k.isMDXComponent=!0}}]);