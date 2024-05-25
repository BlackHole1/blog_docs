"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[22294],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>m});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var u=r.createContext({}),s=function(e){var t=r.useContext(u),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(i),f=n,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return i?r.createElement(m,a(a({ref:t},c),{},{components:i})):r.createElement(m,a({ref:t},c))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,a=new Array(o);a[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[d]="string"==typeof e?e:n,a[1]=l;for(var s=2;s<o;s++)a[s]=i[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}f.displayName="MDXCreateElement"},74522:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>d});i(67294);var r=i(3905);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))})),e}function a(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}const l={title:"Using Built-in WixUI Dialog Sets",layout:"documentation"},u="Using Built-in WixUI Dialog Sets",s={unversionedId:"wixui/wixui_dialog_library",id:"version-v3/wixui/wixui_dialog_library",title:"Using Built-in WixUI Dialog Sets",description:"The WixUI dialog library contains the following built-in dialog sets that provide a familiar wizard-style setup user interface.",source:"@site/versioned_docs/version-v3/wixui/wixui_dialog_library.md",sourceDirName:"wixui",slug:"/wixui/wixui_dialog_library",permalink:"/wixtoolset/docs/v3/wixui/wixui_dialog_library",draft:!1,editUrl:"https://github.com/wixtoolset/web/tree/master/src/Docusaurus/versioned_docs/version-v3/wixui/wixui_dialog_library.md",tags:[],version:"v3",frontMatter:{title:"Using Built-in WixUI Dialog Sets",layout:"documentation"}},c={},d=[{value:"How to add a built-in WixUI dialog set to a product installer",id:"how-to-add-a-built-in-wixui-dialog-set-to-a-product-installer",level:2}],p={toc:d},f="wrapper";function m(e){var{components:t}=e,i=a(e,["components"]);return(0,r.kt)(f,o(function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},r=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),r.forEach((function(t){n(e,t,i[t])}))}return e}({},p,i),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-built-in-wixui-dialog-sets"},"Using Built-in WixUI Dialog Sets"),(0,r.kt)("p",null,"The WixUI dialog library contains the following built-in dialog sets that provide a familiar wizard-style setup user interface."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/v3/wixui/dialog_reference/wixui_advanced"},"WixUI_Advanced")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/v3/wixui/dialog_reference/wixui_featuretree"},"WixUI_FeatureTree")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/v3/wixui/dialog_reference/wixui_installdir"},"WixUI_InstallDir")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/v3/wixui/dialog_reference/wixui_minimal"},"WixUI_Minimal")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/v3/wixui/dialog_reference/wixui_mondo"},"WixUI_Mondo"))),(0,r.kt)("p",null,"The built-in WixUI dialog sets are also customizable, from the bitmaps shown in the UI to adding and removing custom dialogs. See ",(0,r.kt)("a",{parentName:"p",href:"/wixtoolset/docs/v3/wixui/wixui_customizations"},"Customizing the WixUI Dialog Sets")," for additional information."),(0,r.kt)("h2",{id:"how-to-add-a-built-in-wixui-dialog-set-to-a-product-installer"},"How to add a built-in WixUI dialog set to a product installer"),(0,r.kt)("p",null,"Assuming you have an existing installer that is functional but is just lacking a user interface, here are the steps you need to follow to include a built-in WixUI dialog set:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Add a UIRef element to your setup authoring that has an Id that matches the name of one of the dialog sets described above. For example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<Product ...>\n    <UIRef Id="WixUI_InstallDir" />\n</Product>\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Pass the -ext and -cultures switches to ",(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/v3/overview/light"},"light.exe")," to reference the WixUIExtension. For example:")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"light -ext WixUIExtension -cultures:en-us Product.wixobj -out Product.msi")),(0,r.kt)("p",null,"Note - If you are using WiX in Visual Studio you can add the WixUIExtension using the Add Reference dialog and the necessary command lines will automatically be added when linking your .msi. To do this, use the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open your WiX project in Visual Studio"),(0,r.kt)("li",{parentName:"ol"},"Right click on your project in Solution Explorer and select Add Reference..."),(0,r.kt)("li",{parentName:"ol"},"Select the ",(0,r.kt)("strong",{parentName:"li"},"WixUIExtension.dll")," assembly from the list and click Add"),(0,r.kt)("li",{parentName:"ol"},"Close the Add Reference dialog")))}m.isMDXComponent=!0}}]);