"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[96027],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(a),m=r,b=p["".concat(d,".").concat(m)]||p[m]||u[m]||l;return a?n.createElement(b,i(i({ref:t},c),{},{components:a})):n.createElement(b,i({ref:t},c))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},14063:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>b,frontMatter:()=>o,metadata:()=>s,toc:()=>p});a(67294);var n=a(3905);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const o={custom_edit_url:null,toc_max_heading_level:2},d="IWindowsInstallerBackendBinderExtension Interface",s={unversionedId:"api/wixtoolset.extensibility/iwindowsinstallerbackendbinderextension",id:"api/wixtoolset.extensibility/iwindowsinstallerbackendbinderextension",title:"IWindowsInstallerBackendBinderExtension Interface",description:"Interface all binder extensions implement.",source:"@site/docs/api/wixtoolset.extensibility/iwindowsinstallerbackendbinderextension.md",sourceDirName:"api/wixtoolset.extensibility",slug:"/api/wixtoolset.extensibility/iwindowsinstallerbackendbinderextension",permalink:"/wixtoolset/docs/api/wixtoolset.extensibility/iwindowsinstallerbackendbinderextension",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{custom_edit_url:null,toc_max_heading_level:2},sidebar:"docsSidebar",previous:{title:"IResolverExtension Interface",permalink:"/wixtoolset/docs/api/wixtoolset.extensibility/iresolverextension"},next:{title:"IWindowsInstallerDecompilerExtension Interface",permalink:"/wixtoolset/docs/api/wixtoolset.extensibility/iwindowsinstallerdecompilerextension"}},c={},p=[{value:"Methods",id:"methods",level:2},{value:"Properties",id:"properties",level:2},{value:"PostBackendBind(result) Method",id:"postbackendbind_result",level:2},{value:"Declaration",id:"declaration",level:3},{value:"Parameters",id:"parameters",level:3},{value:"PreBackendBind() Method",id:"prebackendbind_nop",level:2},{value:"Declaration",id:"declaration-1",level:3},{value:"ResolveMedia(mediaSymbol, mediaLayoutDirectory, layoutDirectory) Method",id:"resolvemedia_mediasymbol_medialayoutdirectory_layoutdirectory",level:2},{value:"Declaration",id:"declaration-2",level:3},{value:"Parameters",id:"parameters-1",level:3},{value:"Return value",id:"return-value",level:3},{value:"SymbolsFinalized(section) Method",id:"symbolsfinalized_section",level:2},{value:"Declaration",id:"declaration-3",level:3},{value:"Parameters",id:"parameters-2",level:3},{value:"TryProcessSymbol(section, symbol, data, tableDefinitions) Method",id:"tryprocesssymbol_section_symbol_data_tabledefinitions",level:2},{value:"Declaration",id:"declaration-4",level:3},{value:"Parameters",id:"parameters-3",level:3},{value:"Return value",id:"return-value-1",level:3},{value:"TableDefinitions Property",id:"tabledefinitions",level:2},{value:"Declaration",id:"declaration-5",level:3}],u={toc:p},m="wrapper";function b(e){var{components:t}=e,a=i(e,["components"]);return(0,n.kt)(m,l(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){r(e,t,a[t])}))}return e}({},u,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"iwindowsinstallerbackendbinderextension-interface"},"IWindowsInstallerBackendBinderExtension Interface"),(0,n.kt)("p",null,"Interface all binder extensions implement."),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Method"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#postbackendbind_result"},"PostBackendBind(result)")),(0,n.kt)("td",{parentName:"tr",align:null},"Called after all output changes occur and right before the output is bound into its final format.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#prebackendbind_nop"},"PreBackendBind()")),(0,n.kt)("td",{parentName:"tr",align:null},"Called before binding occurs.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#resolvemedia_mediasymbol_medialayoutdirectory_layoutdirectory"},"ResolveMedia(mediaSymbol, mediaLayoutDirectory, layoutDirectory)")),(0,n.kt)("td",{parentName:"tr",align:null},"Override layout location for a media.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#symbolsfinalized_section"},"SymbolsFinalized(section)")),(0,n.kt)("td",{parentName:"tr",align:null},"Extension can process the intermediate before the Windows Installer data is created.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#tryprocesssymbol_section_symbol_data_tabledefinitions"},"TryProcessSymbol(section, symbol, data, tableDefinitions)")),(0,n.kt)("td",{parentName:"tr",align:null},"Called for each extension symbol that hasn't been handled yet.")))),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#tabledefinitions"},"TableDefinitions")),(0,n.kt)("td",{parentName:"tr",align:null},"Table definitions provided by the extension.")))),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"WixToolset.Extensibility.dll")," version ",(0,n.kt)("inlineCode",{parentName:"p"},"5.0.0+41e11442b2ca93e444b60213b5ae99dcbab787d8")),(0,n.kt)("h2",{id:"postbackendbind_result"},"PostBackendBind(result) Method"),(0,n.kt)("p",null,"Called after all output changes occur and right before the output is bound into its final format."),(0,n.kt)("h3",{id:"declaration"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public void PostBackendBind(\n  Data.IBindResult result\n)\n")),(0,n.kt)("h3",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"result"),(0,n.kt)("td",{parentName:"tr",align:null},"Data.IBindResult"),(0,n.kt)("td",{parentName:"tr",align:null},"Bind result to process.")))),(0,n.kt)("h2",{id:"prebackendbind_nop"},"PreBackendBind() Method"),(0,n.kt)("p",null,"Called before binding occurs."),(0,n.kt)("h3",{id:"declaration-1"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public void PreBackendBind()\n")),(0,n.kt)("h2",{id:"resolvemedia_mediasymbol_medialayoutdirectory_layoutdirectory"},"ResolveMedia(mediaSymbol, mediaLayoutDirectory, layoutDirectory) Method"),(0,n.kt)("p",null,"Override layout location for a media."),(0,n.kt)("h3",{id:"declaration-2"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public string ResolveMedia(\n  WixToolset.Data.Symbols.MediaSymbol mediaSymbol,\n  string mediaLayoutDirectory,\n  string layoutDirectory\n)\n")),(0,n.kt)("h3",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mediaSymbol"),(0,n.kt)("td",{parentName:"tr",align:null},"WixToolset.Data.Symbols.MediaSymbol"),(0,n.kt)("td",{parentName:"tr",align:null},"Media symbol.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mediaLayoutDirectory"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Default media specific layout directory.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"layoutDirectory"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Default overall layout directory.")))),(0,n.kt)("h3",{id:"return-value"},"Return value"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"string")," Layout location or null to use the default processing."),(0,n.kt)("h2",{id:"symbolsfinalized_section"},"SymbolsFinalized(section) Method"),(0,n.kt)("p",null,"Extension can process the intermediate before the Windows Installer data is created."),(0,n.kt)("h3",{id:"declaration-3"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public void SymbolsFinalized(\n  WixToolset.Data.IntermediateSection section\n)\n")),(0,n.kt)("h3",{id:"parameters-2"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"section"),(0,n.kt)("td",{parentName:"tr",align:null},"WixToolset.Data.IntermediateSection"),(0,n.kt)("td",{parentName:"tr",align:null},"The finalized intermediate section.")))),(0,n.kt)("h2",{id:"tryprocesssymbol_section_symbol_data_tabledefinitions"},"TryProcessSymbol(section, symbol, data, tableDefinitions) Method"),(0,n.kt)("p",null,"Called for each extension symbol that hasn't been handled yet."),(0,n.kt)("h3",{id:"declaration-4"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public bool TryProcessSymbol(\n  WixToolset.Data.IntermediateSection section,\n  WixToolset.Data.IntermediateSymbol symbol,\n  WixToolset.Data.WindowsInstaller.WindowsInstallerData data,\n  WixToolset.Data.WindowsInstaller.TableDefinitionCollection tableDefinitions\n)\n")),(0,n.kt)("h3",{id:"parameters-3"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"section"),(0,n.kt)("td",{parentName:"tr",align:null},"WixToolset.Data.IntermediateSection"),(0,n.kt)("td",{parentName:"tr",align:null},"The linked section.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"symbol"),(0,n.kt)("td",{parentName:"tr",align:null},"WixToolset.Data.IntermediateSymbol"),(0,n.kt)("td",{parentName:"tr",align:null},"The current symbol.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"data"),(0,n.kt)("td",{parentName:"tr",align:null},"WixToolset.Data.WindowsInstaller.WindowsInstallerData"),(0,n.kt)("td",{parentName:"tr",align:null},"Windows Installer data")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"tableDefinitions"),(0,n.kt)("td",{parentName:"tr",align:null},"WixToolset.Data.WindowsInstaller.TableDefinitionCollection"),(0,n.kt)("td",{parentName:"tr",align:null},"Collection of table definitions available for the output.")))),(0,n.kt)("h3",{id:"return-value-1"},"Return value"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"bool")," True if the symbol was handled, or false if not."),(0,n.kt)("h2",{id:"tabledefinitions"},"TableDefinitions Property"),(0,n.kt)("p",null,"Table definitions provided by the extension."),(0,n.kt)("h3",{id:"declaration-5"},"Declaration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public System.Collections.Generic.IReadOnlyCollection<WixToolset.Data.WindowsInstaller.TableDefinition> TableDefinitions { get; set; } \n")))}b.isMDXComponent=!0}}]);