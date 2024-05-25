"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[42220],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,b=c["".concat(p,".").concat(d)]||c[d]||u[d]||l;return n?r.createElement(b,o(o({ref:t},m),{},{components:n})):r.createElement(b,o({ref:t},m))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},52091:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>b,frontMatter:()=>i,metadata:()=>s,toc:()=>c});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={custom_edit_url:null,toc_max_heading_level:2},p="IExtensionCommandLine Interface",s={unversionedId:"api/wixtoolset.extensibility/iextensioncommandline",id:"api/wixtoolset.extensibility/iextensioncommandline",title:"IExtensionCommandLine Interface",description:"Interface extensions implement to be able to parse the command-line.",source:"@site/docs/api/wixtoolset.extensibility/iextensioncommandline.md",sourceDirName:"api/wixtoolset.extensibility",slug:"/api/wixtoolset.extensibility/iextensioncommandline",permalink:"/wixtoolset/docs/api/wixtoolset.extensibility/iextensioncommandline",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{custom_edit_url:null,toc_max_heading_level:2},sidebar:"docsSidebar",previous:{title:"ICompilerExtension Interface",permalink:"/wixtoolset/docs/api/wixtoolset.extensibility/icompilerextension"},next:{title:"IExtensionData Interface",permalink:"/wixtoolset/docs/api/wixtoolset.extensibility/iextensiondata"}},m={},c=[{value:"Methods",id:"methods",level:2},{value:"GetCommandLineHelp() Method",id:"getcommandlinehelp_nop",level:2},{value:"Declaration",id:"declaration",level:3},{value:"PostParse() Method",id:"postparse_nop",level:2},{value:"Declaration",id:"declaration-1",level:3},{value:"PreParse(context) Method",id:"preparse_context",level:2},{value:"Declaration",id:"declaration-2",level:3},{value:"Parameters",id:"parameters",level:3},{value:"TryParseArgument(parser, argument) Method",id:"tryparseargument_parser_argument",level:2},{value:"Declaration",id:"declaration-3",level:3},{value:"Parameters",id:"parameters-1",level:3},{value:"Return value",id:"return-value",level:3}],u={toc:c},d="wrapper";function b(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)(d,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},u,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"iextensioncommandline-interface"},"IExtensionCommandLine Interface"),(0,r.kt)("p",null,"Interface extensions implement to be able to parse the command-line."),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#getcommandlinehelp_nop"},"GetCommandLineHelp()")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets the help for this extension.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#postparse_nop"},"PostParse()")),(0,r.kt)("td",{parentName:"tr",align:null},"Called after the command-line is parsed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#preparse_context"},"PreParse(context)")),(0,r.kt)("td",{parentName:"tr",align:null},"Called before the command-line is parsed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#tryparseargument_parser_argument"},"TryParseArgument(parser, argument)")),(0,r.kt)("td",{parentName:"tr",align:null},"Gives the extension an opportunity pass a command-line argument for another command.")))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"WixToolset.Extensibility.dll")," version ",(0,r.kt)("inlineCode",{parentName:"p"},"5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8")),(0,r.kt)("h2",{id:"getcommandlinehelp_nop"},"GetCommandLineHelp() Method"),(0,r.kt)("p",null,"Gets the help for this extension."),(0,r.kt)("h3",{id:"declaration"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public Data.CommandLineHelp GetCommandLineHelp()\n")),(0,r.kt)("h2",{id:"postparse_nop"},"PostParse() Method"),(0,r.kt)("p",null,"Called after the command-line is parsed."),(0,r.kt)("h3",{id:"declaration-1"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public void PostParse()\n")),(0,r.kt)("h2",{id:"preparse_context"},"PreParse(context) Method"),(0,r.kt)("p",null,"Called before the command-line is parsed."),(0,r.kt)("h3",{id:"declaration-2"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public void PreParse(\n  Data.ICommandLineContext context\n)\n")),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"context"),(0,r.kt)("td",{parentName:"tr",align:null},"Data.ICommandLineContext"),(0,r.kt)("td",{parentName:"tr",align:null},"Information about the command-line to be parsed.")))),(0,r.kt)("h2",{id:"tryparseargument_parser_argument"},"TryParseArgument(parser, argument) Method"),(0,r.kt)("p",null,"Gives the extension an opportunity pass a command-line argument for another command."),(0,r.kt)("h3",{id:"declaration-3"},"Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public bool TryParseArgument(\n  Services.ICommandLineParser parser,\n  string argument\n)\n")),(0,r.kt)("h3",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"parser"),(0,r.kt)("td",{parentName:"tr",align:null},"Services.ICommandLineParser"),(0,r.kt)("td",{parentName:"tr",align:null},"Parser to help parse the argument and additional arguments.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"argument"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Argument to parse.")))),(0,r.kt)("h3",{id:"return-value"},"Return value"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"bool")," True if the argument is recognized; otherwise false to allow another extension to process it."))}b.isMDXComponent=!0}}]);