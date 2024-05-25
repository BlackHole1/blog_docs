"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[37655],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=i,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||r;return n?o.createElement(m,a(a({ref:t},p),{},{components:n})):o.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<r;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},54702:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>u});n(67294);var o=n(3905);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const l={},c="How To: Run the Installed Application After Setup",s={unversionedId:"howtos/ui_and_localization/run_program_after_install",id:"version-v3/howtos/ui_and_localization/run_program_after_install",title:"How To: Run the Installed Application After Setup",description:"Often when completing the installation of an application it is desirable to offer the user the option of immediately launching the installed program when setup is complete. This how to describes customizing the default WiX UI experience to include a checkbox and a WiX custom action to launch the application if the checkbox is checked.",source:"@site/versioned_docs/version-v3/howtos/ui_and_localization/run_program_after_install.md",sourceDirName:"howtos/ui_and_localization",slug:"/howtos/ui_and_localization/run_program_after_install",permalink:"/wixtoolset/docs/v3/howtos/ui_and_localization/run_program_after_install",draft:!1,editUrl:"https://github.com/wixtoolset/web/tree/master/src/Docusaurus/versioned_docs/version-v3/howtos/ui_and_localization/run_program_after_install.md",tags:[],version:"v3",frontMatter:{}},p={},u=[{value:"Step 1: Add the extension libraries to your project",id:"step-1-add-the-extension-libraries-to-your-project",level:2},{value:"Step 2: Add UI to your installer",id:"step-2-add-ui-to-your-installer",level:2},{value:"Step 3: Include the custom action",id:"step-3-include-the-custom-action",level:2},{value:"Step 4: Trigger the custom action",id:"step-4-trigger-the-custom-action",level:2},{value:"The Complete Sample",id:"the-complete-sample",level:2}],d={toc:u},h="wrapper";function m(e){var{components:t}=e,n=a(e,["components"]);return(0,o.kt)(h,r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){i(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-run-the-installed-application-after-setup"},"How To: Run the Installed Application After Setup"),(0,o.kt)("p",null,"Often when completing the installation of an application it is desirable to offer the user the option of immediately launching the installed program when setup is complete. This how to describes customizing the default WiX UI experience to include a checkbox and a WiX custom action to launch the application if the checkbox is checked."),(0,o.kt)("p",null,"This how to assumes you have already created a basic WiX project using the steps outlined in ",(0,o.kt)("a",{parentName:"p",href:"/wixtoolset/docs/v3/howtos/files_and_registry/add_a_file"},"How To: Add a file to your installer"),"."),(0,o.kt)("h2",{id:"step-1-add-the-extension-libraries-to-your-project"},"Step 1: Add the extension libraries to your project"),(0,o.kt)("p",null,"This walkthrough requires WiX extensions for UI components and custom actions. These extension libraries must must be added to your project prior to use. If you are using WiX on the command-line you need to add the following to your candle and light command lines:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"-ext WixUIExtension -ext WixUtilExtension\n")),(0,o.kt)("p",null,"If you are using Visual Studio you can add the extensions using the Add Reference dialog:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Right click on your project in Solution Explorer and select Add Reference..."),(0,o.kt)("li",{parentName:"ol"},"Select the ",(0,o.kt)("strong",{parentName:"li"},"WixUIExtension.dll")," assembly from the list and click Add"),(0,o.kt)("li",{parentName:"ol"},"Select the ",(0,o.kt)("strong",{parentName:"li"},"WixUtilExtension.dll")," assembly from the list and click Add"),(0,o.kt)("li",{parentName:"ol"},"Close the Add Reference dialog")),(0,o.kt)("h2",{id:"step-2-add-ui-to-your-installer"},"Step 2: Add UI to your installer"),(0,o.kt)("p",null,"The WiX ",(0,o.kt)("a",{parentName:"p",href:"/wixtoolset/docs/v3/wixui/wixui_dialog_library"},"Minimal UI")," sequence includes a basic set of dialogs that includes a finished dialog with optional checkbox. To include the sequence in your project add the following snippet anywhere inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"Product")," element."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<UI>\n  <UIRef Id="WixUI_Minimal" />\n</UI>\n')),(0,o.kt)("p",null,"To display the checkbox on the last screen of the installer include the following snippet anywhere inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"Product")," element:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<Property Id="WIXUI_EXITDIALOGOPTIONALCHECKBOXTEXT" Value="Launch My Application Name" />\n')),(0,o.kt)("p",null,"The WIXUI","_","EXITDIALOGOPTIONALCHECKBOXTEXT property is provided by the standard UI sequence that, when set, displays the checkbox and uses the specified value as the checkbox label."),(0,o.kt)("h2",{id:"step-3-include-the-custom-action"},"Step 3: Include the custom action"),(0,o.kt)("p",null,"Custom actions are included in a WiX project using the ",(0,o.kt)("a",{parentName:"p",href:"/wixtoolset/docs/v3/xsd/wix/customaction"},"CustomAction")," element. Running an application is accomplished with the WixShellExecTarget custom action. To tell Windows Installer about the custom action, and to set its properties, include the following in your project anywhere inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"Product")," element:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<Property Id="WixShellExecTarget" Value="[#myapplication.exe]" />\n<CustomAction Id="LaunchApplication" BinaryKey="WixCA" DllEntry="WixShellExec" Impersonate="yes" />\n')),(0,o.kt)("p",null,"The Property element sets the WixShellExecTarget to the location of the installed application. WixShellExecTarget is the property Id the WixShellExec custom action expects will be set to the location of the file to run. The Value property uses the special # character to tell WiX to look up the full installed path of the file with the id myapplication.exe."),(0,o.kt)("p",null,"The CustomAction element includes the action in the installer. It is given a unique Id, and the BinaryKey and DllEntry properties indicate the assembly and entry point for the custom action. The Impersonate property tells Windows Installer to run the custom action as the installing user."),(0,o.kt)("h2",{id:"step-4-trigger-the-custom-action"},"Step 4: Trigger the custom action"),(0,o.kt)("p",null,"Simply including the custom action, as in Step 3, isn't sufficient to cause it to run. Windows Installer must also be told when the custom action should be triggered. This is done by using the ",(0,o.kt)("a",{parentName:"p",href:"/wixtoolset/docs/v3/xsd/wix/publish"},"Publish")," element to add it to the actions run when the user clicks the Finished button on the final page of the UI dialogs. The Publish element should be included inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"UI")," element from Step 2, and looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<Publish Dialog="ExitDialog"\n         Control="Finish" \n         Event="DoAction" \n         Value="LaunchApplication">WIXUI_EXITDIALOGOPTIONALCHECKBOX = 1 and NOT Installed</Publish>\n')),(0,o.kt)("p",null,"The Dialog property specifies the dialog the Custom Action will be attached to, in this case the ExitDialog. The Control property specifies that the Finish button on the dialog triggers the custom action. The Event property indicates that a custom action should be run when the button is clicked, and the Value property specifies the custom action that was included in Step 3. The condition on the element prevents the action from running unless the checkbox from Step 2 was checked and the application was actually installed (as opposed to being removed or repaired)."),(0,o.kt)("h2",{id:"the-complete-sample"},"The Complete Sample"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<<Wix xmlns="http://schemas.microsoft.com/wix/2006/wi">\n    <Product Id="*"\n             UpgradeCode="PUT-GUID-HERE"\n             Version="1.0.0.0"\n             Language="1033"\n             Name="My Application Name"\n             Manufacturer="My Manufacturer Name">    \n    <Package InstallerVersion="300" Compressed="yes"/>\n    <Media Id="1" Cabinet="myapplication.cab" EmbedCab="yes" />\n\n    \x3c!-- The following three sections are from the How To: Add a File to Your Installer topic--\x3e\n    <Directory Id="TARGETDIR" Name="SourceDir">\n        <Directory Id="ProgramFilesFolder">\n            <Directory Id="APPLICATIONROOTDIRECTORY" Name="My Application Name"/>\n        </Directory>\n    </Directory>\n\n    <DirectoryRef Id="APPLICATIONROOTDIRECTORY">\n        <Component Id="myapplication.exe" Guid="PUT-GUID-HERE">\n            <File Id="myapplication.exe" Source="MySourceFiles\\MyApplication.exe" KeyPath="yes" Checksum="yes"/>\n        </Component>\n        <Component Id="documentation.html" Guid="PUT-GUID-HERE">\n            <File Id="documentation.html" Source="MySourceFiles\\documentation.html" KeyPath="yes"/>\n        </Component>\n    </DirectoryRef>\n\n    <Feature Id="MainApplication" Title="Main Application" Level="1">\n        <ComponentRef Id="myapplication.exe" />\n        <ComponentRef Id="documentation.html" />\n    </Feature>\n\n    \x3c!-- Step 2: Add UI to your installer / Step 4: Trigger the custom action --\x3e\n    <UI>\n        <UIRef Id="WixUI_Minimal" />\n        <Publish Dialog="ExitDialog" \n            Control="Finish" \n            Event="DoAction" \n            Value="LaunchApplication">WIXUI_EXITDIALOGOPTIONALCHECKBOX = 1 and NOT Installed</Publish>\n    </UI>\n    <Property Id="WIXUI_EXITDIALOGOPTIONALCHECKBOXTEXT" Value="Launch My Application Name" />\n\n    \x3c!-- Step 3: Include the custom action --\x3e\n    <Property Id="WixShellExecTarget" Value="[#myapplication.exe]" />\n    <CustomAction Id="LaunchApplication" \n        BinaryKey="WixCA" \n        DllEntry="WixShellExec"\n        Impersonate="yes" />\n    </Product>\n</Wix>\n')))}m.isMDXComponent=!0}}]);