"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[52861],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),h=o,d=u["".concat(p,".").concat(h)]||u[h]||f[h]||i;return r?n.createElement(d,a(a({ref:t},s),{},{components:r})):n.createElement(d,a({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},82326:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>u});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const l={title:"Creating a simple setup",layout:"documentation",after:"votive_project_template_default"},p="Creating a Simple Setup",c={unversionedId:"votive/authoring_first_votive_project",id:"version-v3/votive/authoring_first_votive_project",title:"Creating a simple setup",description:"In this tutorial, we will create a C# Windows Form Application and then use WiX to create an installer for the application.",source:"@site/versioned_docs/version-v3/votive/authoring_first_votive_project.md",sourceDirName:"votive",slug:"/votive/authoring_first_votive_project",permalink:"/wixtoolset/docs/v3/votive/authoring_first_votive_project",draft:!1,editUrl:"https://github.com/wixtoolset/web/tree/master/src/Docusaurus/versioned_docs/version-v3/votive/authoring_first_votive_project.md",tags:[],version:"v3",frontMatter:{title:"Creating a simple setup",layout:"documentation",after:"votive_project_template_default"}},s={},u=[{value:"Step 1: Create the C# Windows Form Application",id:"step-1-create-the-c-windows-form-application",level:2},{value:"Step 2: Create the installer for the application",id:"step-2-create-the-installer-for-the-application",level:2}],f={toc:u},h="wrapper";function d(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)(h,i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},f,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"creating-a-simple-setup"},"Creating a Simple Setup"),(0,n.kt)("p",null,"In this tutorial, we will create a C# Windows Form Application and then use WiX to create an installer for the application."),(0,n.kt)("h2",{id:"step-1-create-the-c-windows-form-application"},"Step 1: Create the C# Windows Form Application"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("b",null,"File"),", then select ",(0,n.kt)("b",null,"New"),", then select ",(0,n.kt)("b",null,"Project"),"."),(0,n.kt)("li",{parentName:"ol"},"Choose the ",(0,n.kt)("b",null,"Visual C#")," node in the ",(0,n.kt)("b",null,"Project Types")," tree, then select ",(0,n.kt)("b",null,"Windows Forms Application"),"."),(0,n.kt)("li",{parentName:"ol"},"Name your application ",'"',"MyApplication",'"'," and press OK.")),(0,n.kt)("h2",{id:"step-2-create-the-installer-for-the-application"},"Step 2: Create the installer for the application"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("b",null,"File"),", then click ",(0,n.kt)("b",null,"New"),", then click ",(0,n.kt)("b",null,"Project."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Choose the ",(0,n.kt)("b",null,"Windows Installer XML")," node in the ",(0,n.kt)("b",null,"Project types")," tree, then select ",(0,n.kt)("b",null,"Setup Project"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Name your project ",'"',"MySetup",'"'," and press OK.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the ",(0,n.kt)("b",null,"MySetup")," project, right-click on the ",(0,n.kt)("b",null,"References")," node and choose ",(0,n.kt)("b",null,"Add Reference..."),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Navigate to the ",(0,n.kt)("b",null,"Projects")," tab, click on the ",(0,n.kt)("b",null,"MyApplication")," project, and click the ",(0,n.kt)("b",null,"Add"),"\nbutton, and then press OK.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Find the comment that says:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"\x3c!-- TODO: Insert your files, registry keys, and other resources here. --\x3e\n")),(0,n.kt)("p",{parentName:"li"},"Delete that line and replace it with the following lines of code:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'<File Source="$(var.MyApplication.TargetPath)" />\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Build the WiX project."))),(0,n.kt)("p",null,"That","'","s it! Now you have a working installer that installs and uninstalls the\napplication."),(0,n.kt)("p",null,"If you type that code into the editor (instead of copying and pasting from this example) you will notice that IntelliSense picks up the valid elements and attributes. IntelliSense with WiX in Visual Studio can save you significant amounts of typing and time when searching for the name of the elements or attributes as you become more comfortable with the WiX language."),(0,n.kt)("p",null,"The line of code you added instructs the WiX toolset to add a file resource to the setup package. The Source attribute specifies where to find the file for packaging during the build. Rather than hard-code values for these attributes into our source code, we use the WiX preprocessor variables that are passed to the WiX compiler. More information about using preprocessor variables, including a table of all supported values, can be found in the ",(0,n.kt)("a",{parentName:"p",href:"/wixtoolset/docs/v3/votive/votive_project_references"},"Adding Project References topic"),"."))}d.isMDXComponent=!0}}]);