"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[86618],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=s(n),f=o,b=p["".concat(c,".").concat(f)]||p[f]||m[f]||i;return n?r.createElement(b,l(l({ref:t},u),{},{components:n})):r.createElement(b,l({ref:t},u))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},43872:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>b,frontMatter:()=>a,metadata:()=>s,toc:()=>p});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const a={custom_edit_url:null,sidebar_position:25},c="Note element (Thmutil extension)",s={unversionedId:"schema/thmutil/note",id:"schema/thmutil/note",title:"Note element (Thmutil extension)",description:"Defines note text for a command link control based on an optional condition.",source:"@site/docs/schema/thmutil/note.md",sourceDirName:"schema/thmutil",slug:"/schema/thmutil/note",permalink:"/wixtoolset/docs/schema/thmutil/note",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:25,frontMatter:{custom_edit_url:null,sidebar_position:25},sidebar:"docsSidebar",previous:{title:"ListView element (Thmutil extension)",permalink:"/wixtoolset/docs/schema/thmutil/listview"},next:{title:"Page element (Thmutil extension)",permalink:"/wixtoolset/docs/schema/thmutil/page"}},u={},p=[{value:"Parents",id:"parents",level:2},{value:"Attributes",id:"attributes",level:2}],m={toc:p},f="wrapper";function b(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)(f,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"note-element-thmutil-extension"},"Note element (Thmutil extension)"),(0,r.kt)("p",null,"Defines note text for a command link control based on an optional condition.\nIf multiple Note elements are given for one control, the conditions should be mutually exclusive (when multiple conditions are true, the behavior is undefined and may be changed at any time).\nIf none of the conditions of a control's Note elements are true, then it uses the text of the Note element without the Condition attribute."),(0,r.kt)("h2",{id:"parents"},"Parents"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/wixtoolset/docs/schema/thmutil/commandlink"},"CommandLink")),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Condition")," (String)\n: The condition that determines when the parent control will use this note text."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/wixtoolset/web/blob/master/src/xsd4/thmutil.xsd"},"Edit the schema for this page")))}b.isMDXComponent=!0}}]);