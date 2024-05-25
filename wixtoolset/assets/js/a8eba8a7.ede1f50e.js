"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[29143],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return n?o.createElement(f,a(a({ref:t},l),{},{components:n})):o.createElement(f,a({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[d]="string"==typeof e?e:i,a[1]=u;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3604:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>u,metadata:()=>c,toc:()=>d});n(67294);var o=n(3905);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const u={title:"WixWaitForEvent Custom Action",layout:"documentation",after:"using_standard_customactions"},s="WixWaitForEvent Custom Action",c={unversionedId:"customactions/wixwaitforevent",id:"version-v3/customactions/wixwaitforevent",title:"WixWaitForEvent Custom Action",description:"If you have scenarios you want to test where a package or bundle takes a while to",source:"@site/versioned_docs/version-v3/customactions/wixwaitforevent.md",sourceDirName:"customactions",slug:"/customactions/wixwaitforevent",permalink:"/wixtoolset/docs/v3/customactions/wixwaitforevent",draft:!1,editUrl:"https://github.com/wixtoolset/web/tree/master/src/Docusaurus/versioned_docs/version-v3/customactions/wixwaitforevent.md",tags:[],version:"v3",frontMatter:{title:"WixWaitForEvent Custom Action",layout:"documentation",after:"using_standard_customactions"}},l={},d=[{value:"Step 1: Add the WiX utilities extensions library to your project",id:"step-1-add-the-wix-utilities-extensions-library-to-your-project",level:2},{value:"Step 2: Add a reference to the WixWaitForEvent custom action",id:"step-2-add-a-reference-to-the-wixwaitforevent-custom-action",level:2},{value:"Step 3: Build your MSI and test various scenarios",id:"step-3-build-your-msi-and-test-various-scenarios",level:2}],p={toc:d},m="wrapper";function f(e){var{components:t}=e,n=a(e,["components"]);return(0,o.kt)(m,r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){i(e,t,n[t])}))}return e}({},p,n),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"wixwaitforevent-custom-action"},"WixWaitForEvent Custom Action"),(0,o.kt)("p",null,"If you have scenarios you want to test where a package or bundle takes a while to\ninstall, you can write a simple MSI package that includes the WixWaitForEvent custom\naction to simulate this behavior. This custom action waits for either of the globally\nnamed automatic reset events documented below and will either return ERROR","_","INSTALL","_","FAILURE\nor ERROR","_","SUCCESS depending on which event you signal."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Global\\WixWaitForEventFail - when signaled, the custom action returns ERROR","_","INSTALL","_","FAILURE."),(0,o.kt)("li",{parentName:"ul"},"Global\\WixWaitForEventSucceed - when signaled, the custom action returns ERROR","_","SUCCESS.")),(0,o.kt)("p",null,"This is especially useful in test cases when you don","'","t want or need to build\nyour entire product and only want small test packages."),(0,o.kt)("p",null,"You can also test MSP packages using this custom action. If the WixWaitForEvent\ncustom action is authored into the target MSI, depending on what condition you author\nthe custom actions will still run. You can also add this custom action to your upgrade\nMSI package used for building your MSP package, but then the custom actions will\nnot run during MSP uninstall unless you explicitly author them as patch uninstall\ncustom actions."),(0,o.kt)("p",null,"Follow the steps below to include this custom action in your MSI package and schedule\nit whenever in your sequence you prefer. You can use the WixWaitForEvent\nimmediate custom action or the WixWaitForEventDeferred deferred custom action. If you want to author the custom action\nin additional places throughout your sequence, you will have to author the\nCustomAction elements yourself using different CustomAction/@Id attribute\nvalues. The binary is WixCA and the entry point is WixWaitForEvent."),(0,o.kt)("h2",{id:"step-1-add-the-wix-utilities-extensions-library-to-your-project"},"Step 1: Add the WiX utilities extensions library to your project"),(0,o.kt)("p",null,"The WiX support for WixWaitForEvent is included in a WiX extension library that\nmust be added to your project prior to use. If you are using WiX on the command\nline you need to add the following to your light command line:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"light.exe myproject.wixobj -ext WixUtilExtension")),(0,o.kt)("p",null,"If you are using Votive you can add the extension using the Add Reference dialog:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open your Votive project in Visual Studio"),(0,o.kt)("li",{parentName:"ol"},"Right click on your project in Solution Explorer and select Add Reference..."),(0,o.kt)("li",{parentName:"ol"},"Select the ",(0,o.kt)("strong",{parentName:"li"},"WixUtilExtension.dll")," assembly from the list and click Add"),(0,o.kt)("li",{parentName:"ol"},"Close the Add Reference dialog")),(0,o.kt)("h2",{id:"step-2-add-a-reference-to-the-wixwaitforevent-custom-action"},"Step 2: Add a reference to the WixWaitForEvent custom action"),(0,o.kt)("p",null,"To add a reference to the WixWaitForEvent\nimmediate custom action, include the following in\nyour WiX setup authoring:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'    <CustomActionRef Id="WixWaitForEvent" />\n')),(0,o.kt)("p",null,"This will cause WiX to add the WaitWaitForEvent custom action to your MSI\nas an immediate custom action scheduled immediately before InstallFinalize. This\nwill block the installation after script generation. You can\nschedule it anywhere else in your sequence."),(0,o.kt)("p",null,"To add a reference to the WixWaitForEventDeferred deferred custom action,\ninclude the following in your WiX setup authoring:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'    <CustomActionRef Id="WixWaitForEventDeferred" />\n')),(0,o.kt)("p",null,"This deferred custom action is scheduled immediately after InstallInitialize so\nit will block after starting script execution. You can schedule this custom\naction anywhere else in your sequence as well."),(0,o.kt)("p",null,"You can schedule both custom actions in the same package, but you will need to\nsignal either of the named automatic reset events documented above both times."),(0,o.kt)("h2",{id:"step-3-build-your-msi-and-test-various-scenarios"},"Step 3: Build your MSI and test various scenarios"),(0,o.kt)("p",null,"Once you've built your MSI package you can install it using msiexec.exe, Burn,\nor by any other means you wish. When Windows Installer executes your custom action,\nWindows Installer will wait for you to signal either the event documented above.\nDepending on the named event you signal, the custom action will fail or succeed\ncausing the MSI or MSP package to fail or succeed."))}f.isMDXComponent=!0}}]);