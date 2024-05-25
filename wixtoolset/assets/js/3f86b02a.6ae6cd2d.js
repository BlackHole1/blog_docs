"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[39386],{3905:(t,e,l)=>{l.d(e,{Zo:()=>c,kt:()=>b});var n=l(67294);function r(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function u(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function o(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?u(Object(l),!0).forEach((function(e){r(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):u(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function i(t,e){if(null==t)return{};var l,n,r=function(t,e){if(null==t)return{};var l,n,r={},u=Object.keys(t);for(n=0;n<u.length;n++)l=u[n],e.indexOf(l)>=0||(r[l]=t[l]);return r}(t,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(n=0;n<u.length;n++)l=u[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(r[l]=t[l])}return r}var a=n.createContext({}),d=function(t){var e=n.useContext(a),l=e;return t&&(l="function"==typeof t?t(e):o(o({},e),t)),l},c=function(t){var e=d(t.components);return n.createElement(a.Provider,{value:e},t.children)},s="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var l=t.components,r=t.mdxType,u=t.originalType,a=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),s=d(l),k=r,b=s["".concat(a,".").concat(k)]||s[k]||p[k]||u;return l?n.createElement(b,o(o({ref:e},c),{},{components:l})):n.createElement(b,o({ref:e},c))}));function b(t,e){var l=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var u=l.length,o=new Array(u);o[0]=k;var i={};for(var a in e)hasOwnProperty.call(e,a)&&(i[a]=e[a]);i.originalType=t,i[s]="string"==typeof t?t:r,o[1]=i;for(var d=2;d<u;d++)o[d]=l[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,l)}k.displayName="MDXCreateElement"},42120:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>b,frontMatter:()=>i,metadata:()=>d,toc:()=>s});l(67294);var n=l(3905);function r(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function u(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}(Object(e)).forEach((function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(e,l))})),t}function o(t,e){if(null==t)return{};var l,n,r=function(t,e){if(null==t)return{};var l,n,r={},u=Object.keys(t);for(n=0;n<u.length;n++)l=u[n],e.indexOf(l)>=0||(r[l]=t[l]);return r}(t,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(n=0;n<u.length;n++)l=u[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(r[l]=t[l])}return r}const i={title:"AppId Element",layout:"documentation_xsd_main"},a=void 0,d={unversionedId:"xsd/wix/appid",id:"version-v3/xsd/wix/appid",title:"AppId Element",description:"Description",source:"@site/versioned_docs/version-v3/xsd/wix/appid.md",sourceDirName:"xsd/wix",slug:"/xsd/wix/appid",permalink:"/wixtoolset/docs/v3/xsd/wix/appid",draft:!1,editUrl:"https://github.com/wixtoolset/web/tree/master/src/Docusaurus/versioned_docs/version-v3/xsd/wix/appid.md",tags:[],version:"v3",frontMatter:{title:"AppId Element",layout:"documentation_xsd_main"}},c={},s=[],p={toc:s},k="wrapper";function b(t){var{components:e}=t,l=o(t,["components"]);return(0,n.kt)(k,u(function(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{},n=Object.keys(l);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(l).filter((function(t){return Object.getOwnPropertyDescriptor(l,t).enumerable})))),n.forEach((function(e){r(t,e,l[e])}))}return t}({},p,l),{components:e,mdxType:"MDXLayout"}),(0,n.kt)("dl",null,(0,n.kt)("dt",null,"Description"),(0,n.kt)("dd",null,"                 Application ID containing DCOM information for the associated application GUID.                 If this element is nested under a Fragment, Module, or Product element, it must be                 advertised.             "),(0,n.kt)("dt",null,"Windows Installer references"),(0,n.kt)("dd",null,(0,n.kt)("a",{href:"http://msdn.microsoft.com/library/aa367566.aspx",target:"_blank"},"AppId Table"),", ",(0,n.kt)("a",{href:"http://msdn.microsoft.com/library/aa371168.aspx",target:"_blank"},"Registry Table")),(0,n.kt)("dt",null,"Parents"),(0,n.kt)("dd",null,(0,n.kt)("a",{href:"../component/"},"Component"),", ",(0,n.kt)("a",{href:"../file/"},"File"),", ",(0,n.kt)("a",{href:"../fragment/"},"Fragment"),", ",(0,n.kt)("a",{href:"../module/"},"Module"),", ",(0,n.kt)("a",{href:"../product/"},"Product"),", ",(0,n.kt)("a",{href:"../typelib/"},"TypeLib")),(0,n.kt)("dt",null,"Inner Text"),(0,n.kt)("dd",null,"None"),(0,n.kt)("dt",null,"Children"),(0,n.kt)("dd",null,"Choice of elements (min: 0, max: unbounded)",(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("a",{href:"../class/"},"Class")," (min: 0, max: unbounded)"))),(0,n.kt)("dt",null,"Attributes"),(0,n.kt)("dd",null,(0,n.kt)("table",{cellspacing:"0",cellpadding:"0",class:"schema"},(0,n.kt)("tr",null,(0,n.kt)("th",{width:"15%"},"Name"),(0,n.kt)("th",{width:"15%"},"Type"),(0,n.kt)("th",{width:"65%"},"Description"),(0,n.kt)("th",{width:"15%"},"Required")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Id"),(0,n.kt)("td",null,(0,n.kt)("a",{href:"../simple_type_guid/"},"Guid")),(0,n.kt)("td",null,"                     Set this value to the AppID GUID that corresponds to the named executable.                 "),(0,n.kt)("td",null,"Yes")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"ActivateAtStorage"),(0,n.kt)("td",null,(0,n.kt)("a",{href:"../simple_type_yesnotype/"},"YesNoType")),(0,n.kt)("td",null,"                     Set this value to 'yes' to configure the client to activate on the same system as persistent storage.                 "),(0,n.kt)("td",null,"\xa0")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Advertise"),(0,n.kt)("td",null,(0,n.kt)("a",{href:"../simple_type_yesnotype/"},"YesNoType")),(0,n.kt)("td",null,"                     Set this value to 'yes' in order to create a normal AppId table row.  Set this value to 'no' in order to                     generate Registry rows that perform similar registration (without the often problematic Windows Installer                     advertising behavior).                 "),(0,n.kt)("td",null,"\xa0")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Description"),(0,n.kt)("td",null,"String"),(0,n.kt)("td",null,"                     Set this value to the description of the AppId.  It can only be specified when the AppId is not being advertised.                 "),(0,n.kt)("td",null,"\xa0")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"DllSurrogate"),(0,n.kt)("td",null,"String"),(0,n.kt)("td",null,"                     Set this value to specify that the class is a DLL that is to be activated in a surrogate EXE                     process, and the surrogate process to be used is the path of a surrogate EXE file specified by the value.                 "),(0,n.kt)("td",null,"\xa0")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"LocalService"),(0,n.kt)("td",null,"String"),(0,n.kt)("td",null,"                     Set this value to the name of a service to allow the object to be installed as a Win32 service.                 "),(0,n.kt)("td",null,"\xa0")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"RemoteServerName"),(0,n.kt)("td",null,"String"),(0,n.kt)("td",null,"                     Set this value to the name of the remote server to configure the client to request the object                     be run at a particular machine whenever an activation function is called for which a COSERVERINFO                     structure is not specified.                 "),(0,n.kt)("td",null,"\xa0")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"RunAsInteractiveUser"),(0,n.kt)("td",null,(0,n.kt)("a",{href:"../simple_type_yesnotype/"},"YesNoType")),(0,n.kt)("td",null,"                     Set this value to 'yes' to configure a class to run under the identity of the user currently                     logged on and connected to the interactive desktop when activated by a remote client without                     being written as a Win32 service.                 "),(0,n.kt)("td",null,"\xa0")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"ServiceParameters"),(0,n.kt)("td",null,"String"),(0,n.kt)("td",null,"                     Set this value to the parameters to be passed to a LocalService on invocation.                 "),(0,n.kt)("td",null,"\xa0")))),(0,n.kt)("dt",null,"Remarks"),(0,n.kt)("dd",null,"When being used in unadvertised mode, the attributes in the AppId element correspond to registry keys                     as follows (values that can be specified in authoring are in bold):                     ",(0,n.kt)("dl",null,(0,n.kt)("dt",null,"Id"),(0,n.kt)("dd",null,(0,n.kt)("dl",null,(0,n.kt)("dt",null,"In General"),(0,n.kt)("dd",null,"                                     [HKCR\\AppID\\",(0,n.kt)("b",null,"Id"),"]",(0,n.kt)("br",null)),(0,n.kt)("dt",null,"Specific Example"),(0,n.kt)("dd",null,"                                     [HKCR\\AppID\\",(0,n.kt)("b",null,"01234567-89AB-CDEF-0123-456789ABCDEF"),"]",(0,n.kt)("br",null)))),(0,n.kt)("dt",null,"ActivateAtStorage"),(0,n.kt)("dd",null,(0,n.kt)("dl",null,(0,n.kt)("dt",null,"In General"),(0,n.kt)("dd",null,"                                     [HKCR\\AppID\\",(0,n.kt)("b",null,"Id"),"]",(0,n.kt)("br",null),'                                     ActivateAtStorage="',(0,n.kt)("b",null,"ActivateAtStorage"),'"                                 '),(0,n.kt)("dt",null,"Specific Example"),(0,n.kt)("dd",null,"                                     [HKCR\\AppID\\",(0,n.kt)("b",null,"01234567-89AB-CDEF-0123-456789ABCDEF"),"]",(0,n.kt)("br",null),'                                     ActivateAtStorage="',(0,n.kt)("b",null,"Y"),'"                                 '))),(0,n.kt)("dt",null,"Description"),(0,n.kt)("dd",null,(0,n.kt)("dl",null,(0,n.kt)("dt",null,"In General"),(0,n.kt)("dd",null,"                                     [HKCR\\AppID\\",(0,n.kt)("b",null,"Id"),"]",(0,n.kt)("br",null),'                                     @="',(0,n.kt)("b",null,"Description"),'"                                 '),(0,n.kt)("dt",null,"Specific Example"),(0,n.kt)("dd",null,"                                     [HKCR\\AppID\\",(0,n.kt)("b",null,"01234567-89AB-CDEF-0123-456789ABCDEF"),"]",(0,n.kt)("br",null),'                                     @="',(0,n.kt)("b",null,"My AppId Description"),'"                                 '))),(0,n.kt)("dt",null,"DllSurrogate"),(0,n.kt)("dd",null,(0,n.kt)("dl",null,(0,n.kt)("dt",null,"In General"),(0,n.kt)("dd",null,"                                     [HKCR\\AppID\\",(0,n.kt)("b",null,"Id"),"]",(0,n.kt)("br",null),'                                     DllSurrogate="',(0,n.kt)("b",null,"DllSurrogate"),'"                                 '),(0,n.kt)("dt",null,"Specific Example"),(0,n.kt)("dd",null,"                                     [HKCR\\AppID\\",(0,n.kt)("b",null,"01234567-89AB-CDEF-0123-456789ABCDEF"),"]",(0,n.kt)("br",null),'                                     DllSurrogate="',(0,n.kt)("b",null,"C:\\surrogate.exe"),'"                                 '))),(0,n.kt)("dt",null,"LocalService"),(0,n.kt)("dd",null,(0,n.kt)("dl",null,(0,n.kt)("dt",null,"In General"),(0,n.kt)("dd",null,"                                     [HKCR\\AppID\\",(0,n.kt)("b",null,"Id"),"]",(0,n.kt)("br",null),'                                     LocalService="',(0,n.kt)("b",null,"LocalService"),'"                                 '),(0,n.kt)("dt",null,"Specific Example"),(0,n.kt)("dd",null,"                                     [HKCR\\AppID\\",(0,n.kt)("b",null,"01234567-89AB-CDEF-0123-456789ABCDEF"),"]",(0,n.kt)("br",null),'                                     LocalService="',(0,n.kt)("b",null,"MyServiceName"),'"                                 '))),(0,n.kt)("dt",null,"RemoteServerName"),(0,n.kt)("dd",null,(0,n.kt)("dl",null,(0,n.kt)("dt",null,"In General"),(0,n.kt)("dd",null,"                                     [HKCR\\AppID\\",(0,n.kt)("b",null,"Id"),"]",(0,n.kt)("br",null),'                                     RemoteServerName="',(0,n.kt)("b",null,"RemoteServerName"),'"                                 '),(0,n.kt)("dt",null,"Specific Example"),(0,n.kt)("dd",null,"                                     [HKCR\\AppID\\",(0,n.kt)("b",null,"01234567-89AB-CDEF-0123-456789ABCDEF"),"]",(0,n.kt)("br",null),'                                     RemoteServerName="',(0,n.kt)("b",null,"MyRemoteServer"),'"                                 '))),(0,n.kt)("dt",null,"RunAsInteractiveUser"),(0,n.kt)("dd",null,(0,n.kt)("dl",null,(0,n.kt)("dt",null,"In General"),(0,n.kt)("dd",null,"                                     [HKCR\\AppID\\",(0,n.kt)("b",null,"Id"),"]",(0,n.kt)("br",null),'                                     RunAs="',(0,n.kt)("b",null,"RunAsInteractiveUser"),'"                                 '),(0,n.kt)("dt",null,"Specific Example"),(0,n.kt)("dd",null,"                                     [HKCR\\AppID\\",(0,n.kt)("b",null,"01234567-89AB-CDEF-0123-456789ABCDEF"),"]",(0,n.kt)("br",null),'                                     RunAs="',(0,n.kt)("b",null,"Interactive User"),'"                                 '))),(0,n.kt)("dt",null,"ServiceParameters"),(0,n.kt)("dd",null,(0,n.kt)("dl",null,(0,n.kt)("dt",null,"In General"),(0,n.kt)("dd",null,"                                     [HKCR\\AppID\\",(0,n.kt)("b",null,"Id"),"]",(0,n.kt)("br",null),'                                     ServiceParameters="',(0,n.kt)("b",null,"ServiceParameters"),'"                                 '),(0,n.kt)("dt",null,"Specific Example"),(0,n.kt)("dd",null,"                                     [HKCR\\AppID\\",(0,n.kt)("b",null,"01234567-89AB-CDEF-0123-456789ABCDEF"),"]",(0,n.kt)("br",null),'                                     ServiceParameters="',(0,n.kt)("b",null,"-param"),'"                                 '))))),(0,n.kt)("dt",null,"See Also"),(0,n.kt)("dd",null,(0,n.kt)("a",{href:"../"},"Wix Schema"))))}b.isMDXComponent=!0}}]);