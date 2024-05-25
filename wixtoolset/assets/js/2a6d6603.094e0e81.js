"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[77878],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>f});var i=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=i.createContext({}),l=function(t){var e=i.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=l(t.components);return i.createElement(c.Provider,{value:e},t.children)},p="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},m=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,c=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),p=l(n),m=r,f=p["".concat(c,".").concat(m)]||p[m]||h[m]||a;return n?i.createElement(f,o(o({ref:e},u),{},{components:n})):i.createElement(f,o({ref:e},u))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s[p]="string"==typeof t?t:r,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},27047:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>p});n(67294);var i=n(3905);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function o(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const s={custom_edit_url:null,sidebar_position:57},c="CustomAction element",l={unversionedId:"schema/wxs/customaction",id:"schema/wxs/customaction",title:"CustomAction element",description:"Specifies a custom action to be added to the MSI CustomAction table. Various combinations of the attributes for this element",source:"@site/docs/schema/wxs/customaction.md",sourceDirName:"schema/wxs",slug:"/schema/wxs/customaction",permalink:"/wixtoolset/docs/schema/wxs/customaction",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:57,frontMatter:{custom_edit_url:null,sidebar_position:57},sidebar:"docsSidebar",previous:{title:"Custom element",permalink:"/wixtoolset/docs/schema/wxs/custom"},next:{title:"CustomActionRef element",permalink:"/wixtoolset/docs/schema/wxs/customactionref"}},u={},p=[{value:"Windows Installer references",id:"windows-installer-references",level:2},{value:"Parents",id:"parents",level:2},{value:"Attributes",id:"attributes",level:2},{value:"See also",id:"see-also",level:2}],h={toc:p},m="wrapper";function f(t){var{components:e}=t,n=o(t,["components"]);return(0,i.kt)(m,a(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),i.forEach((function(e){r(t,e,n[e])}))}return t}({},h,n),{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"customaction-element"},"CustomAction element"),(0,i.kt)("p",null,"Specifies a custom action to be added to the MSI CustomAction table. Various combinations of the attributes for this element\ncorrespond to different custom action types. For more information about custom actions see the ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/msi/summary-list-of-all-custom-action-types"},"\nCustom Action Types")," topic on MSDN."),(0,i.kt)("h2",{id:"windows-installer-references"},"Windows Installer references"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/win32/msi/customaction-table"},"CustomAction Table")),(0,i.kt)("h2",{id:"parents"},"Parents"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/wixtoolset/docs/schema/wxs/package"},"Package"),", ",(0,i.kt)("a",{parentName:"p",href:"/wixtoolset/docs/schema/wxs/module"},"Module"),", ",(0,i.kt)("a",{parentName:"p",href:"/wixtoolset/docs/schema/wxs/fragment"},"Fragment")),(0,i.kt)("h2",{id:"attributes"},"Attributes"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"BinaryRef")," (String)\n: This attribute is a reference to a Binary element with matching Id attribute. That binary stream contains\nthe custom action for use during install. The custom action will not be installed into a target directory. This attribute is\ntypically used with the DllEntry attribute to specify the custom action DLL to use for a type 1 custom action, with the ExeCommand\nattribute to specify a type 17 custom action that runs an embedded executable, or with the VBScriptCall or JScriptCall attributes\nto specify a type 5 or 6 custom action."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Bitness")," (",(0,i.kt)("a",{parentName:"p",href:"/wixtoolset/docs/schema/wxs/bitnesstype",title:'Values of this type will be "default", "always32" or "always64".'},"BitnessTypeUnion"),")\n: Valid only when used with the Script, VBScriptCall, and JScriptCall attributes.\nOverrides the default scripting host for script custom actions. The value ",(0,i.kt)("inlineCode",{parentName:"p"},"always64")," will force the\nscript to run in the 64-bit scripting host. Simliarly, the value ",(0,i.kt)("inlineCode",{parentName:"p"},"always32")," will force the script\nto run in the 64-bit scripting host.\nThe default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," where the script will be run in the scripting host that matches the\nsame bitness as the package."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Directory")," (String)\n: This attribute specifies a reference to a Directory element with matching Id attribute containing a directory path.\nThis attribute is typically used with the ExeCommand attribute to specify the source executable for a type 34\ncustom action, or with the Value attribute to specify a formatted string to place in the specified Directory\ntable entry in a type 35 custom action."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"DllEntry")," (String)\n: This attribute specifies the name of a function in a custom action to execute.\nThis attribute is used with the BinaryRef attribute to create a type 1 custom\naction, or with the FileRef attribute to create a type 17 custom action."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Error")," (String)\n: This attribute specifies an index in the MSI Error table to use as an error message for a\ntype 19 custom action that displays the error message and aborts a product's installation."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ExeCommand")," (String)\n: This attribute specifies the command line parameters to supply to an externally\nrun executable. This attribute is typically used with the BinaryRef attribute for a type 2 custom action,\nthe FileRef attribute for a type 18 custom action, the Property attribute for a type 50 custom action,\nor the Directory attribute for a type 34 custom action that specify the executable to run."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Execute")," (enumeration)\n: This attribute indicates the scheduling of the custom action. This attribute's value must be one of the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"commit"),": Indicates that the custom action will run after successful completion of the installation script (at the end of the installation)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"deferred"),": Indicates that the custom action runs in-script (possibly with elevated privileges)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"firstSequence"),": Indicates that the custom action will only run in the first sequence that runs it."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"immediate"),": Indicates that the custom action will run during normal processing time with user privileges. This is the default."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"oncePerProcess"),": Indicates that the custom action will only run in the first sequence that runs it in the same process."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"rollback"),": Indicates that a custom action will run in the rollback sequence when a failure\noccurs during installation, usually to undo changes made by a deferred custom action."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"secondSequence"),": Indicates that a custom action should be run a second time if it was previously run in an earlier sequence.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"FileRef")," (String)\n: This attribute specifies a reference to a File element with matching Id attribute that\nwill execute the custom action code in the file after the file is installed. This\nattribute is typically used with the ExeCommand attribute to specify a type 18 custom action\nthat runs an installed executable, with the DllEntry attribute to specify an installed custom\naction DLL to use for a type 17 custom action, or with the VBScriptCall or JScriptCall\nattributes to specify a type 21 or 22 custom action."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"HideTarget")," (",(0,i.kt)("a",{parentName:"p",href:"/wixtoolset/docs/schema/wxs/yesnotype",title:'Values of this type will either be "yes"/"true" or "no"/"false".'},"YesNoTypeUnion"),")\n: Ensures the installer does not log the CustomActionData for the deferred custom action."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Id")," (String, required)\n: The identifier of the custom action."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Impersonate")," (",(0,i.kt)("a",{parentName:"p",href:"/wixtoolset/docs/schema/wxs/yesnotype",title:'Values of this type will either be "yes"/"true" or "no"/"false".'},"YesNoTypeUnion"),")\n: This attribute specifies whether the Windows Installer, which executes as LocalSystem,\nshould impersonate the user context of the installing user when executing this custom action.\nTypically the value should be 'yes', except when the custom action needs elevated privileges\nto apply changes to the machine."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"JScriptCall")," (String)\n: This attribute specifies the name of the JScript function to execute in a script. The script must be\nprovided in a Binary element identified by the BinaryRef attribute described above. In other words, this\nattribute must be specified in conjunction with the BinaryRef attribute."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"PatchUninstall")," (",(0,i.kt)("a",{parentName:"p",href:"/wixtoolset/docs/schema/wxs/yesnotype",title:'Values of this type will either be "yes"/"true" or "no"/"false".'},"YesNoTypeUnion"),")\n: This attribute specifies that the Windows Installer, execute the custom action only when\na patch is being uninstalled. These custom actions should also be conditioned using the\nMSIPATCHREMOVE property to ensure proper down level (less than Windows Installer 4.5)\nbehavior."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Property")," (String)\n: This attribute specifies a reference to a Property element with matching Id attribute that specifies the Property\nto be used or updated on execution of this custom action. This attribute is\ntypically used with the Value attribute to create a type 51 custom action that parses\nthe text in Value and places it into the specified Property. This attribute is also used with\nthe ExeCommand attribute to create a type 50 custom action that uses the value of the\ngiven property to specify the path to the executable. Type 51 custom actions are often useful to\npass values to a deferred custom action.\nSee ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/msi/obtaining-context-information-for-deferred-execution-custom-actions"},"\nObtaining Context Information for Deferred Execution Custom Actions")," for more information."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return")," (enumeration)\n: Set this attribute to set the return behavior of the custom action. This attribute's value must be one of the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"asyncNoWait"),": Indicates that the custom action will run asyncronously and execution may continue after the installer terminates."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"asyncWait"),": Indicates that the custom action will run asynchronously but the installer will wait for the return code at sequence end."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"check"),": Indicates that the custom action will run synchronously and the return code will be checked for success. This is the default."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"ignore"),": Indicates that the custom action will run synchronously and the return code will not be checked.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Script")," (enumeration)\n: Creates a type 37 or 38 custom action. Specify a path to the script to be embedded in the package in the\n",(0,i.kt)("inlineCode",{parentName:"p"},"ScriptSourceFile")," attribute. This attribute's value must be one of the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"jscript")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"vbscript"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ScriptSourceFile")," (String)\n: Path to the external file containing the script code. Can be used only with the Script attribute."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Subdirectory")," (String)\n: This attribute defines one or more directories below the directory referenced by the Directory attribute.\nThis attribute is optional but can only be specified when the Directory attribute is also specified."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"SuppressModularization")," (",(0,i.kt)("a",{parentName:"p",href:"/wixtoolset/docs/schema/wxs/yesnotype",title:'Values of this type will either be "yes"/"true" or "no"/"false".'},"YesNoTypeUnion"),")\n: Use to suppress modularization of this custom action name in merge modules.\nThis should only be necessary for table-driven custom actions because the\ntable name which they interact with cannot be modularized, so there can only\nbe one instance of the table."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"TerminalServerAware")," (",(0,i.kt)("a",{parentName:"p",href:"/wixtoolset/docs/schema/wxs/yesnotype",title:'Values of this type will either be "yes"/"true" or "no"/"false".'},"YesNoTypeUnion"),")\n: This attribute specifies controls whether the custom action will impersonate the\ninstalling user during per-machine installs on Terminal Server machines.\nDeferred execution custom actions that do not specify this attribute, or explicitly set it 'no',\nwill run with no user impersonation on Terminal Server machines during\nper-machine installations. This attribute is only applicable when installing on the\nWindows Server 2003 family."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Value")," (String)\n: This attribute specifies a string value to use in the custom action. This attribute\nmust be used with the Property attribute to set the property as part of a\ntype 51 custom action or with the Directory attribute to set a directory path in that\ntable in a type 35 custom action. The value can be a literal value or derived from a\nProperty element using the ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/win32/msi/formatted"},"Formatted")," syntax."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"VBScriptCall")," (String)\n: This attribute specifies the name of the VBScript Subroutine to execute in a script. The script must be\nprovided in a Binary element identified by the BinaryRef attribute described above. In other words, this\nattribute must be specified in conjunction with the BinaryRef attribute."),(0,i.kt)("h2",{id:"see-also"},"See also"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/wixtoolset/docs/schema/wxs/custom"},"Custom"),", ",(0,i.kt)("a",{parentName:"p",href:"/wixtoolset/docs/schema/wxs/customactionref"},"CustomActionRef")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/wixtoolset/web/blob/master/src/xsd4/wix.xsd"},"Edit the schema for this page")))}f.isMDXComponent=!0}}]);