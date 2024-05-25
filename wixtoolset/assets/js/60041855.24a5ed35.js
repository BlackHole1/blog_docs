"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[46297],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,h=d["".concat(c,".").concat(u)]||d[u]||m[u]||i;return n?o.createElement(h,a(a({ref:t},s),{},{components:n})):o.createElement(h,a({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},97063:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>d});n(67294);var o=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const l={title:"Adding to the WiX Documentation",layout:"documentation",after:"votive_development"},c="Adding to the WiX Documentation",p={unversionedId:"wixdev/help_development",id:"version-v3/wixdev/help_development",title:"Adding to the WiX Documentation",description:"WiX documentation is compiled into the file WiX.chm as a part of the WiX build process. The source files for help are located in the wix\\src\\chm directory. The documentation is written in markdown.",source:"@site/versioned_docs/version-v3/wixdev/help_development.md",sourceDirName:"wixdev",slug:"/wixdev/help_development",permalink:"/wixtoolset/docs/v3/wixdev/help_development",draft:!1,editUrl:"https://github.com/wixtoolset/web/tree/master/src/Docusaurus/versioned_docs/version-v3/wixdev/help_development.md",tags:[],version:"v3",frontMatter:{title:"Adding to the WiX Documentation",layout:"documentation",after:"votive_development"}},s={},d=[{value:"What the WiX help compiler does",id:"what-the-wix-help-compiler-does",level:2},{value:"How to add a new topic to WiX.chm",id:"how-to-add-a-new-topic-to-wixchm",level:2}],m={toc:d},u="wrapper";function h(e){var{components:t}=e,n=a(e,["components"]);return(0,o.kt)(u,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"adding-to-the-wix-documentation"},"Adding to the WiX Documentation"),(0,o.kt)("p",null,"WiX documentation is compiled into the file WiX.chm as a part of the WiX build process. The source files for help are located in the wix\\src\\chm directory. The documentation is written in ",(0,o.kt)("a",{parentName:"p",href:"http://daringfireball.net/projects/markdown/syntax"},"markdown"),"."),(0,o.kt)("h2",{id:"what-the-wix-help-compiler-does"},"What the WiX help compiler does"),(0,o.kt)("p",null,"The WiX help compiler does the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Parses .xsd schema files referenced in chm.helpproj and generates help topics for the attributes and elements that are annotated in the .xsd files.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Compiles all of the markdown files contained in the ",(0,o.kt)("strong",{parentName:"p"},"documents")," directory into HTML stripping the final file extension (.md)."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Each markdown document consists of a metadata header followed by the content of the topic page."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Sorts the HTML files according to the ",(0,o.kt)("strong",{parentName:"p"},"after")," metadata and includes all the HTML and content files processed in the list of documentation to build into the CHM."))),(0,o.kt)("h2",{id:"how-to-add-a-new-topic-to-wixchm"},"How to add a new topic to WiX.chm"),(0,o.kt)("p",null,"Adding a new topic to WiX.chm requires the following steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Fork the wix3 repository from ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wixtoolset/wix3"},"https://github.com/wixtoolset/wix3"),"."),(0,o.kt)("li",{parentName:"ol"},"Add a new markdown document with the contents of the new topic to the WiX source tree under src\\chm\\documents."),(0,o.kt)("li",{parentName:"ol"},"Add any relevant images to the src\\chm\\files\\content sub-directory in the WiX source tree.",(0,o.kt)("br",{parentName:"li"}),"When forming paths to internal content, the contents of the ",(0,o.kt)("em",{parentName:"li"},"documents")," and ",(0,o.kt)("em",{parentName:"li"},"files")," directories are merged into the ",(0,o.kt)("strong",{parentName:"li"},"~/")," directory."),(0,o.kt)("li",{parentName:"ol"},"Add the metadata at the top of your topic document. Set the ",(0,o.kt)("em",{parentName:"li"},"title")," metadata to the name of the topic.\nSet the ",(0,o.kt)("em",{parentName:"li"},"layout")," metadata to the ",(0,o.kt)("em",{parentName:"li"},"documentation")," layout type, and optionally set the ",(0,o.kt)("em",{parentName:"li"},"after")," metadata to the basename\n(without the .html","[.md]"," extension) of the topic this page will follow."),(0,o.kt)("li",{parentName:"ol"},"Commit, push, and make a pull request to ",(0,o.kt)("inlineCode",{parentName:"li"},"wixtoolset:develop"),".")),(0,o.kt)("p",null,"An example of the metadata header (includes the triple-dash delimiting lines):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"---\ntitle: Adding to the WiX Documentation\nlayout: documentation\nafter: votive_development\n---\n")),(0,o.kt)("p",null,"Help topics may contain links to external Web pages, and may also contain relative links to other help topics or attributes or elements defined in one of the .xsd schema files."),(0,o.kt)("p",null,"To build the new content type ",(0,o.kt)("inlineCode",{parentName:"p"},"msbuild")," from the command line in the src\\chm directory.",(0,o.kt)("br",{parentName:"p"}),"\n","It is not necessary to build the entire toolset to build the documentation, but you must first build the tools\\src directory once (using the same build command) before building the chm.\nTo build the tools, you will need to install the ",(0,o.kt)("strong",{parentName:"p"},"Desktop development with C++")," workload in Visual Studio, using the Visual Studio Installer."))}h.isMDXComponent=!0}}]);