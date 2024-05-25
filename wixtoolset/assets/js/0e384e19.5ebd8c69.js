"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[59671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(r),m=o,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5831:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>c});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={sidebar_position:0},s="Get started with WiX",u={unversionedId:"intro",id:"intro",title:"Get started with WiX",description:"There are three ways to use WiX:",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/wixtoolset/docs/intro",draft:!1,editUrl:"https://github.com/wixtoolset/web/tree/master/src/Docusaurus/docs/intro.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"docsSidebar",next:{title:"About",permalink:"/wixtoolset/docs/about"}},p={},c=[{value:"Command-line .NET tool",id:"nettool",level:2},{value:"Update the WiX .NET tool",id:"update-the-wix-net-tool",level:3},{value:"See also",id:"see-also",level:3},{value:"MSBuild on the command line and CI/CD build systems",id:"msbuild",level:2},{value:"Update MSBuild projects",id:"update-msbuild-projects",level:3},{value:"See also",id:"see-also-1",level:3},{value:"Visual Studio",id:"vs",level:2},{value:"Using development builds",id:"devbuilds",level:2}],d={toc:c},m="wrapper";function f(e){var{components:t}=e,r=l(e,["components"]);return(0,n.kt)(m,a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},d,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"get-started-with-wix"},"Get started with WiX"),(0,n.kt)("p",null,"There are three ways to use WiX:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#nettool"},"Command-line .NET tool")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#msbuild"},"MSBuild on the command line and CI/CD build systems")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#vs"},"Visual Studio"))),(0,n.kt)("h2",{id:"nettool"},"Command-line .NET tool"),(0,n.kt)("p",null,"WiX is available as a ",(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/core/tools/global-tools"},".NET tool")," for your command-line pleasure."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},"wix.exe")," tool requires the .NET SDK, version 6 or later.")),(0,n.kt)("p",null,"Wix.exe supports commands to perform particular operations. For example, the ",(0,n.kt)("inlineCode",{parentName:"p"},"build")," command lets you build MSI packages, bundles, and other package types."),(0,n.kt)("p",null,"To install the Wix.exe .NET tool:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"dotnet tool install --global wix\n")),(0,n.kt)("p",null,"To verify Wix.exe was successfully installed:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"wix --version\n")),(0,n.kt)("h3",{id:"update-the-wix-net-tool"},"Update the WiX .NET tool"),(0,n.kt)("p",null,"To update your ",(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/core/tools/global-tools"},".NET tool")," installation of WiX:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"dotnet tool update --global wix\n")),(0,n.kt)("p",null,"To install WiX for the first time as a .NET tool:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"dotnet tool install --global wix\n")),(0,n.kt)("p",null,"To verify Wix.exe was successfully installed or updated:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"wix --version\n")),(0,n.kt)("h3",{id:"see-also"},"See also"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/wixtoolset/docs/tools/wixexe"},"Wix.exe command-line reference"))),(0,n.kt)("h2",{id:"msbuild"},"MSBuild on the command line and CI/CD build systems"),(0,n.kt)("p",null,"WiX is available as an MSBuild SDK for building from the command line using ",(0,n.kt)("inlineCode",{parentName:"p"},"dotnet build")," from the .NET SDK or the .NET Framework-based ",(0,n.kt)("inlineCode",{parentName:"p"},"MSBuild")," from Visual Studio. SDK-style projects have smart defaults that make for simple .wixproj project authoring. For example, here's a minimal .wixproj that builds an MSI from the .wxs source files in the project directory:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},'<Project Sdk="WixToolset.Sdk/5.0.0">\n</Project>\n')),(0,n.kt)("h3",{id:"update-msbuild-projects"},"Update MSBuild projects"),(0,n.kt)("p",null,"To update your .wixproj MSBuild projects from previous WiX releases, update the ",(0,n.kt)("inlineCode",{parentName:"p"},"Project")," element's ",(0,n.kt)("inlineCode",{parentName:"p"},"Sdk")," attribute:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},'<Project Sdk="WixToolset.Sdk/5.0.0">\n')),(0,n.kt)("p",null,"For ",(0,n.kt)("inlineCode",{parentName:"p"},"PackageReference"),"s to WiX extensions, update their ",(0,n.kt)("inlineCode",{parentName:"p"},"Version")," attribute. For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},'<PackageReference Include="WixToolset.Util.wixext" Version="5.*" />\n<PackageReference Include="WixToolset.Netfx.wixext" Version="5.*" />\n')),(0,n.kt)("p",null,"To clean up NuGet artifacts from previous releases of WiX, we recommend you delete the ",(0,n.kt)("inlineCode",{parentName:"p"},"bin")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"obj")," directories in your projects. If you're using .NET Framework MSBuild, do an explicit ",(0,n.kt)("inlineCode",{parentName:"p"},"MSBuild -Restore")," to get the latest version restored. (Using ",(0,n.kt)("inlineCode",{parentName:"p"},"dotnet build")," does that implicitly for you.)"),(0,n.kt)("h3",{id:"see-also-1"},"See also"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/wixtoolset/docs/tools/msbuild"},"MSBuild reference"))),(0,n.kt)("h2",{id:"vs"},"Visual Studio"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.firegiant.com/"},"FireGiant")," has released ",(0,n.kt)("a",{parentName:"p",href:"https://www.firegiant.com/wix/heatwave/"},"HeatWave Community Edition")," to support WiX SDK-style MSBuild projects in Visual Studio. HeatWave supports:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Conversion of WiX v3 projects and authoring"),(0,n.kt)("li",{parentName:"ul"},"Building of WiX SDK-style projects"),(0,n.kt)("li",{parentName:"ul"},"Project and item templates"),(0,n.kt)("li",{parentName:"ul"},"Property pages to control how the project builds")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.firegiant.com/wix/heatwave/"},"HeatWave Community Edition is available free of charge.")),(0,n.kt)("h2",{id:"devbuilds"},"Using development builds"),(0,n.kt)("p",null,"WiX development builds with all the latest bug fixes are available in a NuGet package feed on GitHub. To add that feed as a package source:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"dotnet nuget add source https://nuget.pkg.github.com/wixtoolset/index.json -n wixtoolset -u <username> -p <access-token>\n")),(0,n.kt)("p",null,"You need to use exact versions for those packages. For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},'<Project Sdk="WixToolset.Sdk/6.0.0-rc.1-build.42">\n</Project>\n')),(0,n.kt)("p",null,"For more detailed instructions, check out ",(0,n.kt)("a",{parentName:"p",href:"https://youtu.be/2iIjq6zt6z0"},"this video"),"."))}f.isMDXComponent=!0}}]);