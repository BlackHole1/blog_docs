"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[15015],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(b,l(l({ref:t},u),{},{components:r})):n.createElement(b,l({ref:t},u))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},65270:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>b,frontMatter:()=>o,metadata:()=>c,toc:()=>p});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const o={custom_edit_url:null,toc_max_heading_level:2},s="ILayoutServices Interface",c={unversionedId:"api/wixtoolset.extensibility.services/ilayoutservices",id:"api/wixtoolset.extensibility.services/ilayoutservices",title:"ILayoutServices Interface",description:"Interface provided to track files for use by layout later.",source:"@site/docs/api/wixtoolset.extensibility.services/ilayoutservices.md",sourceDirName:"api/wixtoolset.extensibility.services",slug:"/api/wixtoolset.extensibility.services/ilayoutservices",permalink:"/wixtoolset/docs/api/wixtoolset.extensibility.services/ilayoutservices",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{custom_edit_url:null,toc_max_heading_level:2},sidebar:"docsSidebar",previous:{title:"IFileSystem Interface",permalink:"/wixtoolset/docs/api/wixtoolset.extensibility.services/ifilesystem"},next:{title:"IMessaging Interface",permalink:"/wixtoolset/docs/api/wixtoolset.extensibility.services/imessaging"}},u={},p=[{value:"Methods",id:"methods",level:2},{value:"CreateFileTransfer(source, destination, move, sourceLineNumbers) Method",id:"createfiletransfer_source_destination_move_sourcelinenumbers",level:2},{value:"Declaration",id:"declaration",level:3},{value:"Parameters",id:"parameters",level:3},{value:"TrackFile(path, type, sourceLineNumbers) Method",id:"trackfile_path_type_sourcelinenumbers",level:2},{value:"Declaration",id:"declaration-1",level:3},{value:"Parameters",id:"parameters-1",level:3}],d={toc:p},m="wrapper";function b(e){var{components:t}=e,r=l(e,["components"]);return(0,n.kt)(m,i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},d,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"ilayoutservices-interface"},"ILayoutServices Interface"),(0,n.kt)("p",null,"Interface provided to track files for use by layout later."),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Method"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#createfiletransfer_source_destination_move_sourcelinenumbers"},"CreateFileTransfer(source, destination, move, sourceLineNumbers)")),(0,n.kt)("td",{parentName:"tr",align:null},"Creates a file transfer and marks it redundant if the source and destination are identical.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#trackfile_path_type_sourcelinenumbers"},"TrackFile(path, type, sourceLineNumbers)")),(0,n.kt)("td",{parentName:"tr",align:null},"Creates a tracked file.")))),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"WixToolset.Extensibility.dll")," version ",(0,n.kt)("inlineCode",{parentName:"p"},"5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8")),(0,n.kt)("h2",{id:"createfiletransfer_source_destination_move_sourcelinenumbers"},"CreateFileTransfer(source, destination, move, sourceLineNumbers) Method"),(0,n.kt)("p",null,"Creates a file transfer and marks it redundant if the source and destination are identical."),(0,n.kt)("h3",{id:"declaration"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public WixToolset.Extensibility.Data.IFileTransfer CreateFileTransfer(\n  string source,\n  string destination,\n  bool move,\n  WixToolset.Data.SourceLineNumber sourceLineNumbers\n)\n")),(0,n.kt)("h3",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"source"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Source for the file transfer.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"destination"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Destination for the file transfer.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"move"),(0,n.kt)("td",{parentName:"tr",align:null},"bool"),(0,n.kt)("td",{parentName:"tr",align:null},"Indicates whether to move or copy the source file.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"sourceLineNumbers"),(0,n.kt)("td",{parentName:"tr",align:null},"WixToolset.Data.SourceLineNumber"),(0,n.kt)("td",{parentName:"tr",align:null},"Optional source line numbers that requested the file transfer.")))),(0,n.kt)("h2",{id:"trackfile_path_type_sourcelinenumbers"},"TrackFile(path, type, sourceLineNumbers) Method"),(0,n.kt)("p",null,"Creates a tracked file."),(0,n.kt)("h3",{id:"declaration-1"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public WixToolset.Extensibility.Data.ITrackedFile TrackFile(\n  string path,\n  WixToolset.Extensibility.Data.TrackedFileType type,\n  WixToolset.Data.SourceLineNumber sourceLineNumbers\n)\n")),(0,n.kt)("h3",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"path"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Destination path for the build output.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"type"),(0,n.kt)("td",{parentName:"tr",align:null},"WixToolset.Extensibility.Data.TrackedFileType"),(0,n.kt)("td",{parentName:"tr",align:null},"Type of tracked file to create.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"sourceLineNumbers"),(0,n.kt)("td",{parentName:"tr",align:null},"WixToolset.Data.SourceLineNumber"),(0,n.kt)("td",{parentName:"tr",align:null},"Optional source line numbers that requested the tracked file.")))))}b.isMDXComponent=!0}}]);