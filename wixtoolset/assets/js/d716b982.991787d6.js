"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[49106],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(r),g=n,k=m["".concat(p,".").concat(g)]||m[g]||u[g]||o;return r?a.createElement(k,i(i({ref:t},d),{},{components:r})):a.createElement(k,i({ref:t},d))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},64411:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>k,frontMatter:()=>l,metadata:()=>s,toc:()=>m});r(67294);var a=r(3905);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const l={sidebar_position:100},p="Heat harvesting",s={unversionedId:"tools/heat",id:"tools/heat",title:"Heat harvesting",description:"In WiX v4, Heat is available in a WiX extension NuGet Package. To use Heat to harvest directories, files, or projects:",source:"@site/docs/tools/heat.md",sourceDirName:"tools",slug:"/tools/heat",permalink:"/wixtoolset/docs/tools/heat",draft:!1,editUrl:"https://github.com/wixtoolset/web/tree/master/src/Docusaurus/docs/tools/heat.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100},sidebar:"docsSidebar",previous:{title:"Validation",permalink:"/wixtoolset/docs/tools/validation"},next:{title:"WiX managed SDK",permalink:"/wixtoolset/docs/api/"}},d={},m=[{value:"Using <code>HarvestDirectory</code> to harvest files from a directory",id:"using-harvestdirectory-to-harvest-files-from-a-directory",level:2},{value:"Using <code>HarvestFile</code> to harvest data from a file",id:"using-harvestfile-to-harvest-data-from-a-file",level:2},{value:"Using <code>HarvestProject</code> to harvest output from a project",id:"using-harvestproject-to-harvest-output-from-a-project",level:2}],u={toc:m},g="wrapper";function k(e){var{components:t}=e,r=i(e,["components"]);return(0,a.kt)(g,o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){n(e,t,r[t])}))}return e}({},u,r),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"heat-harvesting"},"Heat harvesting"),(0,a.kt)("p",null,"In WiX v4, Heat is available in a WiX extension NuGet Package. To use Heat to harvest directories, files, or projects:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Add a reference to the ",(0,a.kt)("a",{parentName:"li",href:"https://www.nuget.org/packages/WixToolset.Heat/"},"WixToolset.Heat NuGet package"),"."),(0,a.kt)("li",{parentName:"ol"},"Add an item group based on the kind of harvesting you want to do in your project:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"HarvestDirectory")," to harvest files from a directory"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"HarvestFile")," to harvest data from a file"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"HarvestProject")," to harvest output from a project")))),(0,a.kt)("h2",{id:"using-harvestdirectory-to-harvest-files-from-a-directory"},"Using ",(0,a.kt)("inlineCode",{parentName:"h2"},"HarvestDirectory")," to harvest files from a directory"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"HarvestDirectory")," items can contain the following metadata to control harvesting:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Metadata"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ComponentGroupName")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional string metadata. When harvesting multiple directories in a project, specify this metadata to create unique file names for the generated authoring. The name of the ComponentGroup to create for all the generated authoring.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"DirectoryRefId")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional string metadata. The ID of the directory to reference instead of TARGETDIR.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"KeepEmptyDirectories")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional boolean metadata. Whether to create Directory entries for empty directories. The default is ",(0,a.kt)("strong",{parentName:"td"},"false"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"PreprocessorVariable")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional string metadata. Substitute ",(0,a.kt)("inlineCode",{parentName:"td"},"SourceDir")," for another a preprocessor variable name. For example, specify ",(0,a.kt)("inlineCode",{parentName:"td"},"MyDir")," to have Heat use ",(0,a.kt)("inlineCode",{parentName:"td"},"$(MyDir)")," instead of ",(0,a.kt)("inlineCode",{parentName:"td"},"SourceDir"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"SuppressCom")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional boolean metadata. Suppress generation of COM registry elements. The default is ",(0,a.kt)("strong",{parentName:"td"},"false"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"SuppressRegistry")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional boolean metadata. Suppress generation of any registry elements. The default is ",(0,a.kt)("strong",{parentName:"td"},"false"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"SuppressRootDirectory")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional boolean metadata. Suppress generation of a Directory element for the parent directory of the file. The default is ",(0,a.kt)("strong",{parentName:"td"},"false"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Transforms")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional string metadata. Semicolon-delimited list of paths to XSL transforms to apply to the generated authoring.")))),(0,a.kt)("p",null,"The following properties control harvesting:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HarvestDirectoryAutogenerateGuids")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional boolean property. Whether to generate authoring that relies on auto-generation of component GUIDs. The default is ",(0,a.kt)("inlineCode",{parentName:"td"},"$(HarvestAutogenerateGuids)")," if specified; otherwise, ",(0,a.kt)("strong",{parentName:"td"},"true"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HarvestDirectoryComponentGroupName")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional string property. When harvesting multiple directories in a project, specify this metadata to create unique file names for the generated authoring. The component group name that will contain all generated authoring.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HarvestDirectoryDirectoryRefId")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional string property. The identifier of the Directory element that will contain all generated authoring.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HarvestDirectoryGenerateGuidsNow")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional boolean property. Whether to generate authoring that generates durable GUIDs when harvesting. The default is ",(0,a.kt)("inlineCode",{parentName:"td"},"$(HarvestGenerateGuidsNow)")," if specified; otherwise, ",(0,a.kt)("strong",{parentName:"td"},"false"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HarvestDirectoryKeepEmptyDirectories")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional boolean property. Whether to create Directory entries for empty directories when harvesting. The default is ",(0,a.kt)("strong",{parentName:"td"},"false"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HarvestDirectoryNoLogo")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional boolean property. Whether to show the logo for heat.exe. The default is ",(0,a.kt)("inlineCode",{parentName:"td"},"$(NoLogo)")," if specified; otherwise, ",(0,a.kt)("strong",{parentName:"td"},"false"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HarvestDirectoryPreprocessorVariable")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional string property. Substitute ",(0,a.kt)("inlineCode",{parentName:"td"},"SourceDir")," for another a preprocessor variable name. For example, specify ",(0,a.kt)("inlineCode",{parentName:"td"},"MyDir")," to have Heat use ",(0,a.kt)("inlineCode",{parentName:"td"},"$(MyDir)")," instead of ",(0,a.kt)("inlineCode",{parentName:"td"},"SourceDir"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HarvestDirectorySuppressAllWarnings")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional boolean parameter. Specifies that all warnings should be suppressed. The default is ",(0,a.kt)("inlineCode",{parentName:"td"},"$(HarvestSuppressAllWarnings)")," if specified; otherwise, ",(0,a.kt)("strong",{parentName:"td"},"false"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HarvestDirectorySuppressCom")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional boolean property. Whether to suppress generation of COM registry elements when harvesting files in directories. The default is ",(0,a.kt)("strong",{parentName:"td"},"false"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HarvestDirectorySuppressFragments")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional boolean property. Whether to suppress generation of separate fragments when harvesting. The default is ",(0,a.kt)("inlineCode",{parentName:"td"},"$(HarvestSuppressFragments)")," if specified; otherwise, ",(0,a.kt)("strong",{parentName:"td"},"true"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HarvestDirectorySuppressRegistry")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional boolean property. Whether to suppress generation of all registry elements when harvesting files in directories. The default is ",(0,a.kt)("strong",{parentName:"td"},"false"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HarvestDirectorySuppressRootDirectory")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional boolean property. Whether to suppress generation of a Directory element for all authoring when harvesting. The default is ",(0,a.kt)("strong",{parentName:"td"},"false"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HarvestDirectorySuppressSpecificWarnings")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional string parameter. Specifies that certain warnings should be suppressed. The default is ",(0,a.kt)("inlineCode",{parentName:"td"},"$(HarvestSuppressSpecificWarnings)")," if specified.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HarvestDirectorySuppressUniqueIds")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional boolean property. Whether to suppress generation of unique component IDs. The default is ",(0,a.kt)("inlineCode",{parentName:"td"},"$(HarvestSuppressUniqueIds)")," if specified; otherwise, ",(0,a.kt)("strong",{parentName:"td"},"false"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HarvestDirectoryTransforms")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional string property. Semicolon-delimited list of paths to XSL transforms to apply to the generated authoring. The default is ",(0,a.kt)("inlineCode",{parentName:"td"},"$(HarvestTransforms)")," if specified.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HarvestDirectoryTreatSpecificWarningsAsErrors")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional string parameter. Specifies that certain warnings should be treated as errors. The default is ",(0,a.kt)("inlineCode",{parentName:"td"},"$(HarvestTreatSpecificWarningsAsErrors)")," if specified.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HarvestDirectoryTreatWarningsAsErrors")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional boolean parameter. Specifies that all warnings should be treated as errors. The default is ",(0,a.kt)("inlineCode",{parentName:"td"},"$(HarvestTreatWarningsAsErrors)")," if specified; otherwise, ",(0,a.kt)("strong",{parentName:"td"},"false"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HarvestDirectoryVerboseOutput")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional boolean parameter. Specifies that the tool should provide verbose output. The default is ",(0,a.kt)("inlineCode",{parentName:"td"},"$(HarvestVerboseOutput)")," if specified; otherwise, ",(0,a.kt)("strong",{parentName:"td"},"false"),".")))),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<Project Sdk="WixToolset.Sdk">\n  <ItemGroup>\n    <HarvestDirectory Include="FilesDir">\n      <ComponentGroupName>HarvestedComponents</ComponentGroupName>\n      <DirectoryRefId>ApplicationFolder</DirectoryRefId>\n      <SuppressRootDirectory>true</SuppressRootDirectory>\n    </HarvestDirectory>\n\n    <BindPath Include="FilesDir" />\n  </ItemGroup>\n\n  <ItemGroup>\n    <PackageReference Include="WixToolset.Heat" />\n  </ItemGroup>\n</Project>\n')),(0,a.kt)("h2",{id:"using-harvestfile-to-harvest-data-from-a-file"},"Using ",(0,a.kt)("inlineCode",{parentName:"h2"},"HarvestFile")," to harvest data from a file"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"HarvestFile")," items can contain the following metadata to control harvesting:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Metadata"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ComponentGroupName")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional string metadata. The name of the ComponentGroup to create for all the generated authoring.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"DirectoryRefId")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional string metadata. The ID of the directory to reference instead of TARGETDIR.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"PreprocessorVariable")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional string metadata. Substitute ",(0,a.kt)("inlineCode",{parentName:"td"},"SourceDir")," for another a preprocessor variable name. For example, specify ",(0,a.kt)("inlineCode",{parentName:"td"},"MyDir")," to have Heat use ",(0,a.kt)("inlineCode",{parentName:"td"},"$(MyDir)")," instead of ",(0,a.kt)("inlineCode",{parentName:"td"},"SourceDir"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"SuppressCom")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional boolean metadata. Suppress generation of COM registry elements. The default is ",(0,a.kt)("strong",{parentName:"td"},"false"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"SuppressRegistry")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional boolean metadata. Suppress generation of any registry elements. The default is ",(0,a.kt)("strong",{parentName:"td"},"false"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"SuppressRootDirectory")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional boolean metadata. Suppress generation of a Directory element for the parent directory of the file. The default is ",(0,a.kt)("strong",{parentName:"td"},"false"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Transforms")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional string metadata. Semicolon-delimited list of paths to XSL transforms to apply to the generated authoring.")))),(0,a.kt)("p",null,"The following properties control harvesting:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HarvestFileAutogenerateGuids")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional boolean property. Whether to generate authoring that relies on auto-generation of component GUIDs. The default is ",(0,a.kt)("inlineCode",{parentName:"td"},"$(HarvestAutogenerateGuids)")," if specified; otherwise, ",(0,a.kt)("strong",{parentName:"td"},"true"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HarvestFileComponentGroupName")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional string property. When harvesting multiple directories in a project, specify this metadata to create unique file names for the generated authoring. The component group name that will contain all generated authoring.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HarvestFileDirectoryRefId")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional string property. The identifier of the Directory element that will contain all generated authoring.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HarvestFileGenerateGuidsNow")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional boolean property. Whether to generate authoring that generates durable GUIDs when harvesting. The default is ",(0,a.kt)("inlineCode",{parentName:"td"},"$(HarvestGenerateGuidsNow)")," if specified; otherwise, ",(0,a.kt)("strong",{parentName:"td"},"false"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HarvestFileNoLogo")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional boolean property. Whether to show the logo for heat.exe. The default is ",(0,a.kt)("inlineCode",{parentName:"td"},"$(NoLogo)")," if specified; otherwise, ",(0,a.kt)("strong",{parentName:"td"},"false"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HarvestFilePreprocessorVariable")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional string property. Substitute ",(0,a.kt)("inlineCode",{parentName:"td"},"SourceDir")," for another a preprocessor variable name. For example, specify ",(0,a.kt)("inlineCode",{parentName:"td"},"MyDir")," to have Heat use ",(0,a.kt)("inlineCode",{parentName:"td"},"$(MyDir)")," instead of ",(0,a.kt)("inlineCode",{parentName:"td"},"SourceDir"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HarvestFileSuppressAllWarnings")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional boolean parameter. Specifies that all warnings should be suppressed. The default is ",(0,a.kt)("inlineCode",{parentName:"td"},"$(HarvestSuppressAllWarnings)")," if specified; otherwise, ",(0,a.kt)("strong",{parentName:"td"},"false"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HarvestFileSuppressCom")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional boolean property. Whether to suppress generation of COM registry elements when harvesting files in directories. The default is ",(0,a.kt)("strong",{parentName:"td"},"false"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HarvestFileSuppressFragments")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional boolean property. Whether to suppress generation of separate fragments when harvesting. The default is ",(0,a.kt)("inlineCode",{parentName:"td"},"$(HarvestSuppressFragments)")," if specified; otherwise, ",(0,a.kt)("strong",{parentName:"td"},"true"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HarvestFileSuppressRegistry")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional boolean property. Whether to suppress generation of all registry elements when harvesting files in directories. The default is ",(0,a.kt)("strong",{parentName:"td"},"false"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HarvestFileSuppressRootDirectory")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional boolean property. Whether to suppress generation of a Directory element for all authoring when harvesting. The default is ",(0,a.kt)("strong",{parentName:"td"},"false"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HarvestFileSuppressSpecificWarnings")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional string parameter. Specifies that certain warnings should be suppressed. The default is ",(0,a.kt)("inlineCode",{parentName:"td"},"$(HarvestSuppressSpecificWarnings)")," if specified.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HarvestFileSuppressUniqueIds")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional boolean property. Whether to suppress generation of unique component IDs. The default is ",(0,a.kt)("inlineCode",{parentName:"td"},"$(HarvestSuppressUniqueIds)")," if specified; otherwise, ",(0,a.kt)("strong",{parentName:"td"},"false"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HarvestFileTransforms")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional string property. Semicolon-delimited list of paths to XSL transforms to apply to the generated authoring. The default is ",(0,a.kt)("inlineCode",{parentName:"td"},"$(HarvestTransforms)")," if specified.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HarvestFileTreatSpecificWarningsAsErrors")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional string parameter. Specifies that certain warnings should be treated as errors. The default is ",(0,a.kt)("inlineCode",{parentName:"td"},"$(HarvestTreatSpecificWarningsAsErrors)")," if specified.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HarvestFileTreatWarningsAsErrors")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional boolean parameter. Specifies that all warnings should be treated as errors. The default is ",(0,a.kt)("inlineCode",{parentName:"td"},"$(HarvestTreatWarningsAsErrors)")," if specified; otherwise, ",(0,a.kt)("strong",{parentName:"td"},"false"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HarvestFileVerboseOutput")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional boolean parameter. Specifies that the tool should provide verbose output. The default is ",(0,a.kt)("inlineCode",{parentName:"td"},"$(HarvestVerboseOutput)")," if specified; otherwise, ",(0,a.kt)("strong",{parentName:"td"},"false"),".")))),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<Project Sdk="WixToolset.Sdk">\n  <PropertyGroup>\n    <HarvestFileSuppressUniqueIds>true</HarvestFileSuppressUniqueIds>\n  </PropertyGroup>\n\n  <ItemGroup>\n    <HarvestFile Include="MyProgram.txt">\n      <ComponentGroupName>TxtProductComponents</ComponentGroupName>\n      <DirectoryRefId>INSTALLFOLDER</DirectoryRefId>\n      <SuppressRootDirectory>true</SuppressRootDirectory>\n    </HarvestFile>\n\n    <HarvestFile Include="MyProgram.json">\n      <ComponentGroupName>JsonProductComponents</ComponentGroupName>\n      <DirectoryRefId>INSTALLFOLDER</DirectoryRefId>\n      <SuppressRootDirectory>true</SuppressRootDirectory>\n    </HarvestFile>\n  </ItemGroup>\n\n  <ItemGroup>\n    <PackageReference Include="WixToolset.Heat" />\n  </ItemGroup>\n</Project>\n')),(0,a.kt)("h2",{id:"using-harvestproject-to-harvest-output-from-a-project"},"Using ",(0,a.kt)("inlineCode",{parentName:"h2"},"HarvestProject")," to harvest output from a project"),(0,a.kt)("p",null,"Harvesting projects is disabled by default because it may not always work correctly. To enable it, set ",(0,a.kt)("inlineCode",{parentName:"p"},"EnableProjectHarvesting")," to ",(0,a.kt)("strong",{parentName:"p"},"true")," in your project file."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"HarvestProject")," items can contain the following metadata to control harvesting:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Metadata"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ProjectOutputGroups")),(0,a.kt)("td",{parentName:"tr",align:null},"Semicolon-delimited list of project output groups to harvest. Examples include ",(0,a.kt)("inlineCode",{parentName:"td"},"Binaries")," and ",(0,a.kt)("inlineCode",{parentName:"td"},"Source"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Transforms")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional string metadata. Semicolon-delimited list of paths to XSL transforms to apply to the generated authoring.")))),(0,a.kt)("p",null,"The following properties control harvesting:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HarvestProjectsAutogenerateGuids")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional boolean property. Whether to generate authoring that relies on auto-generation of component GUIDs. The default is ",(0,a.kt)("inlineCode",{parentName:"td"},"$(HarvestAutogenerateGuids)")," if specified; otherwise, ",(0,a.kt)("strong",{parentName:"td"},"true"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HarvestProjectsGenerateGuidsNow")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional boolean property. Whether to generate authoring that generates durable GUIDs when harvesting. The default is ",(0,a.kt)("inlineCode",{parentName:"td"},"$(HarvestGenerateGuidsNow)")," if specified; otherwise, ",(0,a.kt)("strong",{parentName:"td"},"false"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HarvestProjectsNoLogo")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional boolean property. Whether to show the logo for heat.exe. The default is ",(0,a.kt)("inlineCode",{parentName:"td"},"$(NoLogo)")," if specified; otherwise, ",(0,a.kt)("strong",{parentName:"td"},"false"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HarvestProjectsProjectOutputGroups")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional string property. Semicolon-delimited list of project output groups to harvest. Possible Values: ",(0,a.kt)("inlineCode",{parentName:"td"},"Binaries"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"Symbols"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"Documents"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"Satellites"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"Sources")," & ",(0,a.kt)("inlineCode",{parentName:"td"},"Content"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HarvestProjectsSuppressAllWarnings")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional boolean parameter. Specifies that all warnings should be suppressed. The default is ",(0,a.kt)("inlineCode",{parentName:"td"},"$(HarvestSuppressAllWarnings)")," if specified; otherwise, ",(0,a.kt)("strong",{parentName:"td"},"false"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HarvestProjectsSuppressFragments")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional boolean property. Whether to suppress generation of separate fragments when harvesting. The default is ",(0,a.kt)("inlineCode",{parentName:"td"},"$(HarvestSuppressFragments)")," if specified; otherwise, ",(0,a.kt)("strong",{parentName:"td"},"true"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HarvestProjectsSuppressSpecificWarnings")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional string parameter. Specifies that certain warnings should be suppressed. The default is ",(0,a.kt)("inlineCode",{parentName:"td"},"$(HarvestSuppressSpecificWarnings)")," if specified.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HarvestProjectsSuppressUniqueIds")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional boolean property. Whether to suppress generation of unique component IDs. The default is ",(0,a.kt)("inlineCode",{parentName:"td"},"$(HarvestSuppressUniqueIds)")," if specified; otherwise, ",(0,a.kt)("strong",{parentName:"td"},"false"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HarvestProjectsTransforms")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional string property. Semicolon-delimited list of paths to XSL transforms to apply to the generated authoring. The default is ",(0,a.kt)("inlineCode",{parentName:"td"},"$(HarvestTransforms)")," if specified.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HarvestProjectsTreatSpecificWarningsAsErrors")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional string parameter. Specifies that certain warnings should be treated as errors. The default is ",(0,a.kt)("inlineCode",{parentName:"td"},"$(HarvestTreatSpecificWarningsAsErrors)")," if specified.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HarvestProjectsTreatWarningsAsErrors")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional boolean parameter. Specifies that all warnings should be treated as errors. The default is ",(0,a.kt)("inlineCode",{parentName:"td"},"$(HarvestTreatWarningsAsErrors)")," if specified; otherwise, ",(0,a.kt)("strong",{parentName:"td"},"false"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"HarvestProjectsVerboseOutput")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional boolean parameter. Specifies that the tool should provide verbose output. The default is ",(0,a.kt)("inlineCode",{parentName:"td"},"$(HarvestVerboseOutput)")," if specified; otherwise, ",(0,a.kt)("strong",{parentName:"td"},"false"),".")))),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<Project Sdk="WixToolset.Sdk">\n  <PropertyGroup>\n    <EnableProjectHarvesting>true</EnableProjectHarvesting>\n    <HarvestProjectsSuppressUniqueIds>true</HarvestProjectsSuppressUniqueIds>\n  </PropertyGroup>\n\n  <ItemGroup>\n    <HarvestProject Include="..\\MyProgram\\MyProgram.csproj" ProjectOutputGroups="Binaries;Content;" />\n  </ItemGroup>\n\n  \x3c!-- As soon as EnableProjectHarvesting set to true, Heat will try to Harvest all referenced projects. Notice the DoNotHarvest flag, this tells Heat not to do that. --\x3e\n  <ItemGroup>\n    <ProjectReference Include="..\\MyProgram\\MyProgram.csproj" DoNotHarvest="true" />\n  </ItemGroup>\n\n  <ItemGroup>\n    <PackageReference Include="WixToolset.Heat" />\n  </ItemGroup>\n</Project>\n')),(0,a.kt)("p",null,"Once harvested, you can use these ouput groups in your wxs file as with a ComponentGroupRef."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<ComponentGroupRef Id="MyProgram.Binaries" />\n<ComponentGroupRef Id="MyProgram.Content" />\n')))}k.isMDXComponent=!0}}]);