"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[87726],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),p=r,m=u["".concat(c,".").concat(p)]||u[p]||g[p]||o;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},95268:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>u});n(67294);var a=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={title:"WixBroadcastSettingChange and WixBroadcastEnvironmentChange Custom Actions",layout:"documentation",after:"using_standard_customactions"},c="WixBroadcastSettingChange and WixBroadcastEnvironmentChange Custom Actions",l={unversionedId:"customactions/wixsettingchange",id:"version-v3/customactions/wixsettingchange",title:"WixBroadcastSettingChange and WixBroadcastEnvironmentChange Custom Actions",description:"The WixBroadcastSettingChange and WixBroadcastEnvironmentChange custom actions are immediate custom actions that send a WM\\_SETTINGCHANGE message to all top-level windows indicating that settings have changed. WixBroadcastSettingChange indicates that unspecified settings have changed. WixBroadcastEnvironmentChange indicates that environment variables have changed.",source:"@site/versioned_docs/version-v3/customactions/wixsettingchange.md",sourceDirName:"customactions",slug:"/customactions/wixsettingchange",permalink:"/wixtoolset/docs/v3/customactions/wixsettingchange",draft:!1,editUrl:"https://github.com/wixtoolset/web/tree/master/src/Docusaurus/versioned_docs/version-v3/customactions/wixsettingchange.md",tags:[],version:"v3",frontMatter:{title:"WixBroadcastSettingChange and WixBroadcastEnvironmentChange Custom Actions",layout:"documentation",after:"using_standard_customactions"}},d={},u=[{value:"Step 1: Add the WiX utilities extensions library to your project",id:"step-1-add-the-wix-utilities-extensions-library-to-your-project",level:2},{value:"Step 2: Add a reference to the WixBroadcastSettingChange or WixBroadcastEnvironmentChange custom actions",id:"step-2-add-a-reference-to-the-wixbroadcastsettingchange-or-wixbroadcastenvironmentchange-custom-actions",level:2}],g={toc:u},p="wrapper";function m(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)(p,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"wixbroadcastsettingchange-and-wixbroadcastenvironmentchange-custom-actions"},"WixBroadcastSettingChange and WixBroadcastEnvironmentChange Custom Actions"),(0,a.kt)("p",null,"The WixBroadcastSettingChange and WixBroadcastEnvironmentChange custom actions are immediate custom actions that send a WM","_","SETTINGCHANGE message to all top-level windows indicating that settings have changed. WixBroadcastSettingChange indicates that unspecified settings have changed. WixBroadcastEnvironmentChange indicates that environment variables have changed."),(0,a.kt)("p",null,"Other programs can listen for WM","_","SETTINGCHANGE and update any internal state with the new setting."),(0,a.kt)("p",null,"Windows Installer itself sends the WM","_","SETTINGCHANGE message for settings it changes while processing an MSI package but cannot do so for changes a package makes via custom action. Also, Windows Installer does not send WM","_","SETTINGCHANGE for environment variable changes when a reboot is pending."),(0,a.kt)("p",null,"There are two steps you need to take to use the WixBroadcastSettingChange or WixBroadcastEnvironmentChange custom actions in your MSI package:"),(0,a.kt)("h2",{id:"step-1-add-the-wix-utilities-extensions-library-to-your-project"},"Step 1: Add the WiX utilities extensions library to your project"),(0,a.kt)("p",null,"WixBroadcastSettingChange and WixBroadcastEnvironmentChange are included in a WiX extension library that must be added to your project prior to use. If you are using WiX on the command line you need to add the following to your light command line:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"light.exe myproject.wixobj -ext WixUtilExtension")),(0,a.kt)("p",null,"If you are using Votive you can add the extension using the Add Reference dialog:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open your Votive project in Visual Studio"),(0,a.kt)("li",{parentName:"ol"},"Right click on your project in Solution Explorer and select Add Reference..."),(0,a.kt)("li",{parentName:"ol"},"Select the ",(0,a.kt)("strong",{parentName:"li"},"WixUtilExtension.dll")," assembly from the list and click Add"),(0,a.kt)("li",{parentName:"ol"},"Close the Add Reference dialog")),(0,a.kt)("h2",{id:"step-2-add-a-reference-to-the-wixbroadcastsettingchange-or-wixbroadcastenvironmentchange-custom-actions"},"Step 2: Add a reference to the WixBroadcastSettingChange or WixBroadcastEnvironmentChange custom actions"),(0,a.kt)("p",null,"To add a reference to the WixBroadcastSettingChange or WixBroadcastEnvironmentChange custom actions, include one of the following elements in your WiX setup authoring:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'    <CustomActionRef Id="WixBroadcastSettingChange" />\n    <CustomActionRef Id="WixBroadcastEnvironmentChange" />\n')),(0,a.kt)("p",null,"This will cause WiX to add the custom action to your MSI and schedule it immediately after the ",(0,a.kt)("a",{href:"http://msdn.microsoft.com/library/aa369505.aspx",target:"_blank"},"InstallFinalize")," standard action."))}m.isMDXComponent=!0}}]);