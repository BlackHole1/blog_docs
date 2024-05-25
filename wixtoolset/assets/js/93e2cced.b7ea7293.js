"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[11166],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81458:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>d});n(67294);var a=n(3905);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const l={sidebar_position:50},s="WiX v5 for WiX v4 users",u={unversionedId:"fivefour/index",id:"fivefour/index",title:"WiX v5 for WiX v4 users",description:"WiX v5 is highly compatible with WiX v4. WiX v5 continues in the traditions of WiX v4 and is available as both a .NET tool and an MSBuild SDK. The WiX v5 language uses the same XML namespace as WiX v4 and -- with a couple of exceptions -- is backward compatible with the WiX v4 language. That means that you don't need to translate your WiX v4 projects to use WiX v5.",source:"@site/docs/fivefour/index.md",sourceDirName:"fivefour",slug:"/fivefour/",permalink:"/wixtoolset/docs/fivefour/",draft:!1,editUrl:"https://github.com/wixtoolset/web/tree/master/src/Docusaurus/docs/fivefour/index.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50},sidebar:"docsSidebar",previous:{title:"Get help",permalink:"/wixtoolset/docs/gethelp"},next:{title:"Out-of-process bootstrapper applications in WiX v5",permalink:"/wixtoolset/docs/fivefour/oopbas"}},p={},d=[{value:"WiX v5 language changes",id:"wix-v5-language-changes",level:2},{value:"Virtual and overridable symbols",id:"virtual-and-overridable-symbols",level:3},{value:"New WiX v5 language features",id:"new-wix-v5-language-features",level:2},{value:"File harvesting",id:"file-harvesting",level:3},{value:"Naked files",id:"naked-files",level:3},{value:"Default major upgrades",id:"default-major-upgrades",level:3},{value:"Default installation folder",id:"default-installation-folder",level:3},{value:"Default feature",id:"default-feature",level:3},{value:"Burn",id:"burn",level:2},{value:"Extension changes",id:"extension-changes",level:2}],c={toc:d},m="wrapper";function h(e){var{components:t}=e,n=r(e,["components"]);return(0,a.kt)(m,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},c,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"wix-v5-for-wix-v4-users"},"WiX v5 for WiX v4 users"),(0,a.kt)("p",null,"WiX v5 is ",(0,a.kt)("strong",{parentName:"p"},"highly")," compatible with WiX v4. WiX v5 continues in the traditions of WiX v4 and is available as both a .NET tool and an MSBuild SDK. The WiX v5 language uses the same XML namespace as WiX v4 and -- with a couple of exceptions -- is backward compatible with the WiX v4 language. That means that you don't need to translate your WiX v4 projects to use WiX v5."),(0,a.kt)("h2",{id:"wix-v5-language-changes"},"WiX v5 language changes"),(0,a.kt)("h3",{id:"virtual-and-overridable-symbols"},"Virtual and overridable symbols"),(0,a.kt)("p",null,"WiX has supported letting setup developers override the defaults provided by WiX or its extensions for things like when custom actions are scheduled. (Technically, overridability was available for everyone everywhere but the canonical example is overriding scheduling for custom actions in WiX extensions, so let's go with that.) It worked by letting you specify that something was ",(0,a.kt)("inlineCode",{parentName:"p"},'Overridable="yes"')," so that ",(0,a.kt)("em",{parentName:"p"},"your")," version took precedence over the overridable one. For example, here's how the ",(0,a.kt)("inlineCode",{parentName:"p"},"CloseApplications")," custom action is defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"WixToolset.Util.wixext")," in WiX v4:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<InstallExecuteSequence>\n    <Custom\n        Action="$(var.Prefix)CloseApplications$(var.Suffix)"\n        Before="InstallFiles"\n        Overridable="yes"\n        Condition="VersionNT &gt; 400" />\n</InstallExecuteSequence>\n')),(0,a.kt)("p",null,"To reschedule the custom action, you'd use the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<InstallExecuteSequence>\n    <Custom\n        Action="Wix4CloseApplications_$(sys.BUILDARCHSHORT)"\n        After="InstallInitialize" />\n</InstallExecuteSequence>\n')),(0,a.kt)("p",null,"WiX v5 introduces the concept of ",(0,a.kt)("inlineCode",{parentName:"p"},"virtual")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"override")," access modifiers for symbol identifiers, which are very similar to the same keywords you find in languages like C# and C++:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"virtual")," declares that the identifier can be overridden."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"override")," declares that the identifier overrides the corresponding ",(0,a.kt)("inlineCode",{parentName:"li"},"virtual")," identifier.")),(0,a.kt)("p",null,"So now, WiX extensions define custom action scheduling with the ",(0,a.kt)("inlineCode",{parentName:"p"},"virtual")," access modifier:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<InstallExecuteSequence>\n    <Custom\n        Action="virtual $(var.Prefix)CloseApplications$(var.Suffix)"\n        Before="InstallFiles"\n        Condition="VersionNT &gt; 400" />\n</InstallExecuteSequence>\n')),(0,a.kt)("p",null,"And to reschedule it, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"override")," access modifier to override the scheduling provided by the ",(0,a.kt)("inlineCode",{parentName:"p"},"virtual")," symbol:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<InstallExecuteSequence>\n    <Custom\n        Action="override Wix4CloseApplications_$(sys.BUILDARCHSHORT)"\n        After="InstallInitialize" />\n</InstallExecuteSequence>\n')),(0,a.kt)("p",null,"For more information, see the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/wixtoolset/issues/issues/7913"},(0,a.kt)("em",{parentName:"a"},"Virtual Symbols")," WIP")," and the associated ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/wixtoolset/wix/pull/475"},"pull request"),"."),(0,a.kt)("h2",{id:"new-wix-v5-language-features"},"New WiX v5 language features"),(0,a.kt)("h3",{id:"file-harvesting"},"File harvesting"),(0,a.kt)("p",null,"An all-too-common question on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/wixtoolset/issues/discussions"},"GitHub discussions")," and ",(0,a.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/tagged/wix?sort=newest"},"Stack Overflow"),' is of the form "how do I install all the files in a directory?" In WiX v4 and prior, the answer was typically "use Heat and some arcane XSLT." In WiX v5, use ',(0,a.kt)("inlineCode",{parentName:"p"},"Files"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Files")," takes wildcarded paths to include ",(0,a.kt)("em",{parentName:"p"},"and exclude")," files, traverses the specified directories, and generates components and files for each file."),(0,a.kt)("p",null,"Combined with other features in this list, you can now build a package with potentially thousands of files with some impressively compact WiX authoring:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<Wix xmlns="http://wixtoolset.org/schemas/v4/wxs">\n    <Package Name="MyProduct" Version="1.0.0.0" Manufacturer="Example Corporation" UpgradeCode="B0B15C00-1DC4-0374-A1D1-E902240936D5">\n        <Files Include="path\\to\\files\\**" />\n    </Package>\n</Wix>\n')),(0,a.kt)("p",null,"With exclusions, you can exclude files that require special handling, like services:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<Wix xmlns="http://wixtoolset.org/schemas/v4/wxs">\n    <Package Name="MyService" ...>\n        <Files Include="!(bindpath.bin)**">\n            \x3c!--\n            Don\'t harvest the service because it needs manual authoring (below).\n            --\x3e\n            <Exclude Files="!(bindpath.bin)foo.exe" />\n        </Files>\n\n        \x3c!--\n        This file is a service and therefore needs lovingly hand-crafted authoring.\n        --\x3e\n        <Component>\n            <File Source="!(bindpath.bin)foo.exe" />\n            <ServiceInstall ... />\n            <ServiceControl ... />\n        <Component>\n    </Package>\n</Wix>\n')),(0,a.kt)("p",null,"For more information, see the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/wixtoolset/issues/issues/7857"},(0,a.kt)("inlineCode",{parentName:"a"},"Files")," WIP"),", the associated ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/wixtoolset/wix/pull/489"},"pull request"),", and the ",(0,a.kt)("a",{parentName:"p",href:"/wixtoolset/docs/schema/wxs/files"},(0,a.kt)("inlineCode",{parentName:"a"},"Files")," element schema documentation"),"."),(0,a.kt)("h3",{id:"naked-files"},"Naked files"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://joyofsetup.com/2009/12/31/simplifying-wix-component-authoring/"},"For a little while now"),", WiX has supported simplified authoring for the simple scenario of one file in a component:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<Component>\n    <File Source="foo.exe" />\n</Component>\n')),(0,a.kt)("p",null,"But add a few dozen of them and you start to wonder about the need for the mostly-empty ",(0,a.kt)("inlineCode",{parentName:"p"},"Component"),' elements. Wonder no longer. WiX v5 adds support for so-called "naked" files, which are files without the XML overhead of enclosing ',(0,a.kt)("inlineCode",{parentName:"p"},"Component")," elements. Wherever ",(0,a.kt)("inlineCode",{parentName:"p"},"Component")," elements can appear, so can ",(0,a.kt)("inlineCode",{parentName:"p"},"File")," elements. In the compiler, WiX conjures appropriate components for each file. Simple authoring is now simpler."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<ComponentGroup Id="Files" Directory="MyFolder" Subdirectory="bin">\n  <File Source="foo.exe" />\n  <File Source="bar.dll" />\n  <File Source="baz.db" />\n</ComponentGroup>\n')),(0,a.kt)("p",null,"For more information, see the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/wixtoolset/issues/issues/7696"},(0,a.kt)("em",{parentName:"a"},"Naked File")," WIP")," and the associated ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/wixtoolset/wix/pull/479"},"pull request"),"."),(0,a.kt)("h3",{id:"default-major-upgrades"},"Default major upgrades"),(0,a.kt)("p",null,'Welcome to the first of three "provide reasonable defaults so setup developers don\'t need to specify boring stuff over and over" features.'),(0,a.kt)("p",null,"Authoring major upgrades has been straightforward since 2010 but, like with naked files, it sometimes feels silly to have to author unchanging content. But as I said ",(0,a.kt)("a",{parentName:"p",href:"https://joyofsetup.com/2010/01/16/major-upgrades-now-easier-than-ever/"},"back then"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Downgrades are blocked by default, which requires you to specify a message for the launch condition message.")),(0,a.kt)("p",null,"However, part of the impetus behind ",(0,a.kt)("inlineCode",{parentName:"p"},"virtual")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"override")," access modifiers was the idea that WiX could now include a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/wixtoolset/issues/issues/7914"},(0,a.kt)("em",{parentName:"a"},"WiX Standard Library")),', which coincidentally could include a set of default localization strings. That lets us address the need for the "downgrade blocked" message -- well, at least for speakers of US English.'),(0,a.kt)("p",null,"So now in WiX v5, if your package doesn't have a major upgrade (via ",(0,a.kt)("inlineCode",{parentName:"p"},"MajorUpgrade")," or old-school ",(0,a.kt)("inlineCode",{parentName:"p"},"Upgrade")," elements), WiX will give you one for free. It uses a US English string, so if you need another language, override the localization string with a localization file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8"?>\n<WixLocalization xmlns="http://wixtoolset.org/schemas/v4/wxl" Culture="en-US">\n    <String Id="WixDowngradePreventedMessage" Value="[ProductName] does not support downgrading." />\n</WixLocalization>\n')),(0,a.kt)("p",null,"For more information, see the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/wixtoolset/issues/issues/7605"},(0,a.kt)("em",{parentName:"a"},"Default major upgrade behavior and localized error message")," WIP")," and the associated ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/wixtoolset/wix/pull/478"},"pull request"),"."),(0,a.kt)("h3",{id:"default-installation-folder"},"Default installation folder"),(0,a.kt)("p",null,'Welcome to the second "provide reasonable defaults so setup developers don\'t need to specify boring stuff over and over" feature.'),(0,a.kt)("p",null,"WiX v4 eliminated a lot of the verbosity required to author directories in a WiX project -- eliminating ",(0,a.kt)("inlineCode",{parentName:"p"},"TARGETDIR"),", adding ",(0,a.kt)("inlineCode",{parentName:"p"},"StandardDirectory")," elements and the awesome ",(0,a.kt)("inlineCode",{parentName:"p"},"Subdirectory")," attribute. WiX v5 takes advantage of that and adds one more: If you reference a directory with an id of ",(0,a.kt)("inlineCode",{parentName:"p"},"INSTALLFOLDER")," but don't define one, WiX gives you one. That default ",(0,a.kt)("inlineCode",{parentName:"p"},"INSTALLFOLDER")," is the equivalent of the following WiX authoring:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<StandardDirectory Id="ProgramFiles6432Folder">\n    <Directory\n        Id="INSTALLFOLDER"\n        Name="!(bind.Property.Manufacturer) !(bind.Property.ProductName)"\n    />\n</StandardDirectory>\n')),(0,a.kt)("p",null,"The directory gets its name from the ",(0,a.kt)("inlineCode",{parentName:"p"},"Package/@Manufacturer")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Package/@Name")," attribute values."),(0,a.kt)("p",null,"And don't worry -- if you already have such an ",(0,a.kt)("inlineCode",{parentName:"p"},"INSTALLFOLDER")," or never reference a directory with that id, WiX respects your beliefs and won't try to force its own ",(0,a.kt)("inlineCode",{parentName:"p"},"INSTALLFOLDER")," on you or your package."),(0,a.kt)("p",null,"For more information, see the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/wixtoolset/issues/issues/7588"},(0,a.kt)("em",{parentName:"a"},"Default root directory")," WIP")," and the associated ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/wixtoolset/wix/pull/435"},"pull request"),"."),(0,a.kt)("h3",{id:"default-feature"},"Default feature"),(0,a.kt)("p",null,'Welcome to the final "provide reasonable defaults so setup developers don\'t need to specify boring stuff over and over" feature.'),(0,a.kt)("p",null,"Fancy, complicated feature trees are pass\xe9 but MSI requires at least one feature. So if you don't need multiple features, let's let WiX create one for you and automatically assign components to it."),(0,a.kt)("p",null,"Meet the default feature feature."),(0,a.kt)("p",null,"Again, if you have a set of ",(0,a.kt)("inlineCode",{parentName:"p"},"Feature")," elements, WiX lets them be. This feature kicks in ",(0,a.kt)("em",{parentName:"p"},"only")," if you haven't authored any features in your package."),(0,a.kt)("p",null,"For more information, see the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/wixtoolset/issues/issues/7581"},(0,a.kt)("em",{parentName:"a"},"Default feature")," WIP")," and the associated ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/wixtoolset/wix/pull/424"},"pull request"),"."),(0,a.kt)("h2",{id:"burn"},"Burn"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/wxs/arpentry"},(0,a.kt)("inlineCode",{parentName:"a"},"ArpEntry"))," supports the ",(0,a.kt)("inlineCode",{parentName:"li"},"AdditionalUninstallArguments")," attribute to add arguments to the uninstall command line and ",(0,a.kt)("inlineCode",{parentName:"li"},"UseUninstallString")," to tell Burn to use the ",(0,a.kt)("inlineCode",{parentName:"li"},"UninstallString")," value instead of the default ",(0,a.kt)("inlineCode",{parentName:"li"},"QuietUninstallString"),". Thanks to ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/nirbar"},"@nirbar")," for the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/wixtoolset/wix/pull/471"},"pull request"),"."),(0,a.kt)("li",{parentName:"ul"},"Bootstrapper applications are now separate processes rather than hosted by the Burn engine, to increase reliability and security. Being out-of-process also increases compatibility, as Burn no longer needs special support to host .NET or any other language/runtime, for that matter. Want to write a BA in COBOL? You do you. ",(0,a.kt)("a",{parentName:"li",href:"/wixtoolset/docs/fivefour/oopbas"},"See more information about out-of-proc BAs."))),(0,a.kt)("h2",{id:"extension-changes"},"Extension changes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"WixToolset.DifxApp.wixext was deprecated in WiX v4 and was removed in WiX v5. (Microsoft deprecated the underlying DifxApp several years ago.)"),(0,a.kt)("li",{parentName:"ul"},"WixToolset.Firewall.wixext now supports the capabilities of the modern Windows Firewall. See ",(0,a.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/firewall/firewallexception"},"the documentation")," for all the new goodness. Thanks to ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/chrisbednarski"},"@chrisbednarski")," for all ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/wixtoolset/wix/pulls?q=is%3Apr+author%3Achrisbednarski"},"the work"),"."),(0,a.kt)("li",{parentName:"ul"},"WixToolset.Netfx.wixext's ",(0,a.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/netfx/dotnetcompatibilitycheck"},"DotNetCompatibilityCheck")," now sets the specified property to 13 when the requested platform is not compatible with the platform the installer is running on. Thanks to ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apacker1"},"@apacker1")," for the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/wixtoolset/wix/pull/459"},"pull request"),"."),(0,a.kt)("li",{parentName:"ul"},"WixToolset.Util.wixext now has the following ",(0,a.kt)("inlineCode",{parentName:"li"},"_NODOMAIN")," properties from ",(0,a.kt)("a",{parentName:"li",href:"/wixtoolset/docs/tools/wixext/wininfo#querywindowswellknownsids"},"WixQueryOsWellKnownSID"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"WIX_ACCOUNT_ADMINISTRATORS_NODOMAIN"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"WIX_ACCOUNT_GUESTS_NODOMAIN"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"WIX_ACCOUNT_LOCALSERVICE_NODOMAIN"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"WIX_ACCOUNT_LOCALSYSTEM_NODOMAIN"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"WIX_ACCOUNT_NETWORKSERVICE_NODOMAIN"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"WIX_ACCOUNT_USERS_NODOMAIN"),". Thanks to ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/mistoll"},"@mistoll")," for the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/wixtoolset/wix/pull/407"},"pull request"),".")),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/wixtoolset/docs/fivefour/oopbas"},"Out-of-process bootstrapper applications")," for additional extension changes related to building bundles."))}h.isMDXComponent=!0}}]);