"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[13446],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),y=a,h=d["".concat(l,".").concat(y)]||d[y]||u[y]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},5892:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={},l="How To: Block Bootstrapper Installation Based on Registry Key",c={unversionedId:"howtos/redistributables_and_install_checks/block_stdba_install_on_reg",id:"version-v3/howtos/redistributables_and_install_checks/block_stdba_install_on_reg",title:"How To: Block Bootstrapper Installation Based on Registry Key",description:"In this example, the bootstrapper will install .NET Framework 4.0, if necessary, and then the specific application.",source:"@site/versioned_docs/version-v3/howtos/redistributables_and_install_checks/block_stdba_install_on_reg.md",sourceDirName:"howtos/redistributables_and_install_checks",slug:"/howtos/redistributables_and_install_checks/block_stdba_install_on_reg",permalink:"/wixtoolset/docs/v3/howtos/redistributables_and_install_checks/block_stdba_install_on_reg",draft:!1,editUrl:"https://github.com/wixtoolset/web/tree/master/src/Docusaurus/versioned_docs/version-v3/howtos/redistributables_and_install_checks/block_stdba_install_on_reg.md",tags:[],version:"v3",frontMatter:{}},p={},d=[],u={toc:d},y="wrapper";function h(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)(y,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},u,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-block-bootstrapper-installation-based-on-registry-key"},"How To: Block Bootstrapper Installation Based on Registry Key"),(0,r.kt)("p",null,"In this example, the bootstrapper will install .NET Framework 4.0, if necessary, and then the specific application.\nHowever, the application depends on a previous installation of third-party software. Ideally, the user wants to abort\nthe installation and avoid a time-consuming .NET Framework install if the software can't be used.  An existence check\nfor a registry key, in this example, allows the install to abort if it's not found.  Here's how it's done:"),(0,r.kt)("p",null,"The process requires both the WiX Util and the WiX Bal extensions.  Reference the extensions from the bootstrapper\nproject, and add the schema to the Wix element. (The .NET Framework extension is included merely as part of the example.)\nThe Wix element should look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'    <Wix xmlns="http://schemas.microsoft.com/wix/2006/wi" \n         xmlns:util="http://schemas.microsoft.com/wix/UtilExtension" \n         xmlns:netfx="http://schemas.microsoft.com/wix/NetFxExtension" \n         xmlns:bal="http://schemas.microsoft.com/wix/BalExtension">\n')),(0,r.kt)("p",null,"The util:RegistrySearch element defines a WiX variable, ThirdPartyCOMLibraryInstalled, that will be True when\nthe key exists."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'    <util:RegistrySearch\n          Id=\'SearchForThirdParty\' \n          Variable="ThirdPartyCOMLibraryInstalled" \n          Result="exists"\n          Root="HKLM"\n          Key="SOFTWARE\\Classes\\ThirdPartyId.Server\\CLSID" />\n')),(0,r.kt)("p",null,"The WiX variable, ThirdPartyCOMLibraryInstalled, is used as the bal:Condition check expression.  If False,\nthe value of the 'Message' attribute is displayed, and the installation is aborted."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'    <bal:Condition Message="ThirdParty Application COM Library Required.">\n        ThirdPartyCOMLibraryInstalled\n    </bal:Condition>\n')),(0,r.kt)("p",null,"If the code is organized in a Fragment, as in this example, an element must be referenced from the\nBundle to include it. The util:RegistrySearch element is referenced:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"    <util:RegistrySearchRef Id='SearchForThirdParty' />\n")),(0,r.kt)("p",null,"The complete Bundle illustrates the required elements in context."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'    <?xml version="1.0" encoding="UTF-8"?>\n    <Wix xmlns="http://schemas.microsoft.com/wix/2006/wi" \n         xmlns:util="http://schemas.microsoft.com/wix/UtilExtension" \n         xmlns:netfx="http://schemas.microsoft.com/wix/NetFxExtension" \n         xmlns:bal="http://schemas.microsoft.com/wix/BalExtension">\n      <Bundle Name="!(bind.packageName.MyApp)" \n              Version="!(bind.packageVersion.MyApp)" \n              Manufacturer="!(bind.packageManufacturer.MyApp)" \n              UpgradeCode="a07ce1d5-a7ed-4d89-a7ee-fb13a5dd69ba" \n              Copyright="Copyright (c) 2013 [Bundle/@Manufacturer]. All rights reserved."\n              IconSourceFile="$(var.My_Application1.ProjectDir)MyCo.ico">\n        <Variable Name="InstallFolder" \n            Type="string" \n            Value="[ProgramFilesFolder]MyCo Systems\\My_Application\\"\n        /> \n        <util:RegistrySearchRef Id=\'SearchForThirdParty\' />\n        <BootstrapperApplicationRef \n          Id="WixStandardBootstrapperApplication.HyperlinkLicense" >\n          <bal:WixStandardBootstrapperApplication \n            LaunchTarget="[InstallFolder]My_Application.exe" \n            SuppressRepair="yes" \n            SuppressOptionsUI="yes"\n            LicenseUrl=""\n            LogoFile="Resources/MyCoLogoWt64.png"\n          />\n        </BootstrapperApplicationRef>\n        <Chain>\n          <PackageGroupRef Id="NetFx40Redist"/>\n          <MsiPackage Id ="MyApp" \n            Vital="yes" \n            Name="My Application" \n            SourceFile="$(var.MyApp_Install.TargetDir)MyApp_Install.msi">\n            <MsiProperty Name="INSTALLLOCATION" Value="[InstallFolder]" />\n          </MsiPackage>\n        </Chain>\n      </Bundle>\n      <Fragment>\n        <util:RegistrySearch\n              Id=\'SearchForThirdParty\' \n              Variable="ThirdPartyCOMLibraryInstalled" \n              Result="exists"\n              Root="HKLM"\n              Key="SOFTWARE\\Classes\\ThirdPartyId.Server\\CLSID" />\n        <bal:Condition \n          Message="ThirdParty Application COM Library Required.">\n          ThirdPartyCOMLibraryInstalled\n        </bal:Condition>\n      </Fragment>\n    </Wix>\n')))}h.isMDXComponent=!0}}]);