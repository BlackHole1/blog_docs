"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[42259],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>b});var n=o(67294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var u=n.createContext({}),d=function(e){var t=n.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},s=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),c=d(o),f=i,b=c["".concat(u,".").concat(f)]||c[f]||p[f]||r;return o?n.createElement(b,l(l({ref:t},s),{},{components:o})):n.createElement(b,l({ref:t},s))}));function b(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=o.length,l=new Array(r);l[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[c]="string"==typeof e?e:i,l[1]=a;for(var d=2;d<r;d++)l[d]=o[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}f.displayName="MDXCreateElement"},48222:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>b,frontMatter:()=>a,metadata:()=>d,toc:()=>c});o(67294);var n=o(3905);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))})),e}function l(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}const a={title:"Building WiX Projects In Team Foundation Build",layout:"documentation",after:"daily_builds"},u="Building WiX Projects In Team Foundation Build",d={unversionedId:"msbuild/wix_with_team_build",id:"version-v3/msbuild/wix_with_team_build",title:"Building WiX Projects In Team Foundation Build",description:"Once you have created a WiX project file, you need to perform some additional steps in order to successfully build the WiX project in Team Foundation Build. Without these additional steps, the WiX project will be ignored by default by Team Foundation Build even though it is an MSBuild-compatible project.",source:"@site/versioned_docs/version-v3/msbuild/wix_with_team_build.md",sourceDirName:"msbuild",slug:"/msbuild/wix_with_team_build",permalink:"/wixtoolset/docs/v3/msbuild/wix_with_team_build",draft:!1,editUrl:"https://github.com/wixtoolset/web/tree/master/src/Docusaurus/versioned_docs/version-v3/msbuild/wix_with_team_build.md",tags:[],version:"v3",frontMatter:{title:"Building WiX Projects In Team Foundation Build",layout:"documentation",after:"daily_builds"}},s={},c=[{value:"Step 1: Update the Solution Build Configuration",id:"step-1-update-the-solution-build-configuration",level:2},{value:"Step 2: Add the Build Configurations to TFSBuild.proj",id:"step-2-add-the-build-configurations-to-tfsbuildproj",level:2}],p={toc:c},f="wrapper";function b(e){var{components:t}=e,o=l(e,["components"]);return(0,n.kt)(f,r(function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},n=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),n.forEach((function(t){i(e,t,o[t])}))}return e}({},p,o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"building-wix-projects-in-team-foundation-build"},"Building WiX Projects In Team Foundation Build"),(0,n.kt)("p",null,"Once you have created a ",(0,n.kt)("a",{parentName:"p",href:"/wixtoolset/docs/v3/msbuild/authoring_first_msbuild_project"},"WiX project file"),", you need to perform some additional steps in order to successfully build the WiX project in Team Foundation Build. Without these additional steps, the WiX project will be ignored by default by Team Foundation Build even though it is an MSBuild-compatible project."),(0,n.kt)("h2",{id:"step-1-update-the-solution-build-configuration"},"Step 1: Update the Solution Build Configuration"),(0,n.kt)("p",null,"By default, WiX projects will not be built when building the ","'","Any CPU","'"," platform because Windows Installer packages are CPU-specific. As a result, you need to use the following steps to update the solution build configuration to include your WiX project and its dependencies as part of a Team Foundation Build."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"In the solution, open Configuration Manager (Build | Configuration Manager)."),(0,n.kt)("li",{parentName:"ol"},"Set the ","'","Debug","'"," configuration as the active configuration."),(0,n.kt)("li",{parentName:"ol"},"Select the ","'","x86","'"," platform that you plan to build from the drop-down list."),(0,n.kt)("li",{parentName:"ol"},"Ensure that the WiX project is checked in the ","'","Build","'"," column."),(0,n.kt)("li",{parentName:"ol"},"Ensure that any project references that the WiX project uses are also checked in the ","'","Build","'"," column."),(0,n.kt)("li",{parentName:"ol"},"Set the ","'","Release","'"," configuration as the active configuration."),(0,n.kt)("li",{parentName:"ol"},"Repeat steps 3-5 to ensure that the WiX project and its dependencies will build for the ","'","Release","'"," configuration."),(0,n.kt)("li",{parentName:"ol"},"If you plan to build the ","'","x64","'"," platform, repeat steps 3-7 for the ","'","x64","'"," platform."),(0,n.kt)("li",{parentName:"ol"},"Close Configuration Manager and save the solution.")),(0,n.kt)("h2",{id:"step-2-add-the-build-configurations-to-tfsbuildproj"},"Step 2: Add the Build Configurations to TFSBuild.proj"),(0,n.kt)("p",null,"Now that you have added the WiX project and its dependent projects to the ","'","x86","'"," and/or ","'","x64","'"," build configurations, Team Foundation Build will build your WiX project in these build configurations. However, these build configurations may not be specified in your Team Foundation Build Definition (TFSBuild.proj)."),(0,n.kt)("p",null,"When you create a new Build Definition, you can select the ","'","Debug/Mixed Platforms","'"," and ","'","Release/Mixed Platforms","'"," build configurations to build all projects in your solution, including WiX projects."),(0,n.kt)("p",null,"If you have an existing Build Definition, you need to use the following steps to modify it so it will build WiX projects along with the other projects in your solution."),(0,n.kt)("ol",null,(0,n.kt)("li",null,"Right-click on the Build Definition and select View Configuration Folder."),(0,n.kt)("li",null,"Check out and open the file named TFSBuild.proj."),(0,n.kt)("li",null,"Add the following build configurations to the <ConfigurationToBuild> section if they do not already exist there, or update them if they do already exist:",(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},'<ConfigurationToBuild Include="Debug|Mixed Platforms">\n   <FlavorToBuild>Debug</FlavorToBuild>\n   <PlatformToBuild>Mixed Platforms</PlatformToBuild>\n</ConfigurationToBuild>\n<ConfigurationToBuild Include="Release|Mixed Platforms">\n  <FlavorToBuild>Release</FlavorToBuild>\n  <PlatformToBuild>Mixed Platforms</PlatformToBuild>\n</ConfigurationToBuild>\n'))),(0,n.kt)("li",null,"Close, save and check in the changes to TFSBuild.proj.")),(0,n.kt)("p",null,"After making the above changes and queuing the build, you will see folders named ","'","Debug","'"," and ","'","Release","'"," in the build output. Each of these folders will contain a sub-folder named ","'","en-us","'"," (or another culture depending on the settings in the WiX project) that contains the built Windows Installer package."))}b.isMDXComponent=!0}}]);