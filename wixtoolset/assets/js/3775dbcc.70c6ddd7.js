"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[57479],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var m=r.createContext({}),s=function(e){var t=r.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(m.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,o=e.originalType,m=e.parentName,c=n(e,["components","mdxType","originalType","parentName"]),u=s(a),h=l,f=u["".concat(m,".").concat(h)]||u[h]||p[h]||o;return a?r.createElement(f,i(i({ref:t},c),{},{components:a})):r.createElement(f,i({ref:t},c))}));function f(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=a.length,i=new Array(o);i[0]=h;var n={};for(var m in t)hasOwnProperty.call(t,m)&&(n[m]=t[m]);n.originalType=e,n[u]="string"==typeof e?e:l,i[1]=n;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},85256:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>m,default:()=>f,frontMatter:()=>n,metadata:()=>s,toc:()=>u});a(67294);var r=a(3905);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function i(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}const n={custom_edit_url:null,sidebar_position:15},m="Thmutil schema",s={unversionedId:"schema/thmutil/index",id:"schema/thmutil/index",title:"Thmutil schema",description:"Schema for describing Theme files processed by thmutil.",source:"@site/docs/schema/thmutil/index.md",sourceDirName:"schema/thmutil",slug:"/schema/thmutil/",permalink:"/wixtoolset/docs/schema/thmutil/",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:15,frontMatter:{custom_edit_url:null,sidebar_position:15},sidebar:"docsSidebar",previous:{title:"SqlString element (Sql extension)",permalink:"/wixtoolset/docs/schema/sql/sqlstring"},next:{title:"AlternateResolution element (Thmutil extension)",permalink:"/wixtoolset/docs/schema/thmutil/alternateresolution"}},c={},u=[{value:"Target namespace",id:"target-namespace",level:2},{value:"Elements",id:"elements",level:2},{value:"Types",id:"types",level:2}],p={toc:u},h="wrapper";function f(e){var{components:t}=e,a=i(e,["components"]);return(0,r.kt)(h,o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),r.forEach((function(t){l(e,t,a[t])}))}return e}({},p,a),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"thmutil-schema"},"Thmutil schema"),(0,r.kt)("p",null,"Schema for describing Theme files processed by thmutil."),(0,r.kt)("h2",{id:"target-namespace"},"Target namespace"),(0,r.kt)("p",null,"http",":","//wixtoolset.org/schemas/v4/thmutil"),(0,r.kt)("h2",{id:"elements"},"Elements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/thmutil/alternateresolution"},"AlternateResolution")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/thmutil/billboard"},"Billboard")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/thmutil/browsedirectoryaction"},"BrowseDirectoryAction")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/thmutil/button"},"Button")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/thmutil/buttonfocusimage"},"ButtonFocusImage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/thmutil/buttonhoverimage"},"ButtonHoverImage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/thmutil/buttonimage"},"ButtonImage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/thmutil/buttonselectedimage"},"ButtonSelectedImage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/thmutil/changepageaction"},"ChangePageAction")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/thmutil/checkbox"},"Checkbox")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/thmutil/closewindowaction"},"CloseWindowAction")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/thmutil/column"},"Column")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/thmutil/combobox"},"Combobox")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/thmutil/commandlink"},"CommandLink")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/thmutil/editbox"},"Editbox")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/thmutil/font"},"Font")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/thmutil/hyperlink"},"Hyperlink")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/thmutil/hypertext"},"Hypertext")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/thmutil/image"},"Image")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/thmutil/imagecontrol"},"ImageControl")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/thmutil/imagelist"},"ImageList")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/thmutil/imagelistitem"},"ImageListItem")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/thmutil/label"},"Label")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/thmutil/listview"},"ListView")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/thmutil/note"},"Note")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/thmutil/page"},"Page")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/thmutil/panel"},"Panel")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/thmutil/progressbar"},"Progressbar")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/thmutil/progressbarimage"},"ProgressbarImage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/thmutil/radiobutton"},"RadioButton")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/thmutil/radiobuttons"},"RadioButtons")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/thmutil/richedit"},"Richedit")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/thmutil/static"},"Static")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/thmutil/tab"},"Tab")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/thmutil/tabs"},"Tabs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/thmutil/text"},"Text")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/thmutil/theme"},"Theme")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/thmutil/tooltip"},"Tooltip")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/thmutil/treeview"},"TreeView")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/thmutil/window"},"Window"))),(0,r.kt)("h2",{id:"types"},"Types"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/thmutil/fontcolortype"},"FontColorType")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/thmutil/systemcolortype"},"SystemColorType")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/wixtoolset/docs/schema/thmutil/yesnotype"},"YesNoType"))))}f.isMDXComponent=!0}}]);