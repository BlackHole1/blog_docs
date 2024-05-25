"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[25940],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>E});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var _=r.createContext({}),p=function(e){var n=r.useContext(_),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(_.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},A=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,_=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(t),A=a,E=c["".concat(_,".").concat(A)]||c[A]||u[A]||i;return t?r.createElement(E,o(o({ref:n},s),{},{components:t})):r.createElement(E,o({ref:n},s))}));function E(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=A;var l={};for(var _ in n)hasOwnProperty.call(n,_)&&(l[_]=n[_]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}A.displayName="MDXCreateElement"},64694:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>_,default:()=>E,frontMatter:()=>l,metadata:()=>p,toc:()=>c});t(67294);var r=t(3905);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const l={wip:4552,type:"Feature",by:"Sean Hall (rseanhall at gmail.com)",title:"Variable Abstraction",draft:!1},_=void 0,p={unversionedId:"development/wips/variable-abstraction",id:"development/wips/variable-abstraction",title:"Variable Abstraction",description:"User stories",source:"@site/docs/development/wips/4552-variable-abstraction.md",sourceDirName:"development/wips",slug:"/development/wips/variable-abstraction",permalink:"/wixtoolset/docs/development/wips/variable-abstraction",draft:!1,editUrl:"https://github.com/wixtoolset/web/tree/master/src/Docusaurus/docs/development/wips/4552-variable-abstraction.md",tags:[],version:"current",sidebarPosition:4552,frontMatter:{wip:4552,type:"Feature",by:"Sean Hall (rseanhall at gmail.com)",title:"Variable Abstraction",draft:!1},sidebar:"docsSidebar",previous:{title:"WiX v4.x features should be planned",permalink:"/wixtoolset/docs/development/wips/wix-v4.x-features-should-be-planned"},next:{title:"Migrate v3 Source Code to v4.",permalink:"/wixtoolset/docs/development/wips/migrate-v3-source-code-to-v4"}},s={},c=[{value:"User stories",id:"user-stories",level:2},{value:"Proposal",id:"proposal",level:2},{value:"Considerations",id:"considerations",level:2},{value:"See Also",id:"see-also",level:2}],u={toc:c},A="wrapper";function E(e){var{components:n}=e,t=o(e,["components"]);return(0,r.kt)(A,i(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){a(e,n,t[n])}))}return e}({},u,t),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"user-stories"},"User stories"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"As a dutil consumer I can have access to WiX's variable and condition system.")),(0,r.kt)("h2",{id:"proposal"},"Proposal"),(0,r.kt)("p",null,"Implement the following variable API:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"typedef void* VARIABLE_ENUM_HANDLE;\ntypedef void* VARIABLES_HANDLE;\ntypedef const void* C_VARIABLES_HANDLE;\n\nextern const int VARIABLE_ENUM_HANDLE_BYTES;\nextern const int VARIABLES_HANDLE_BYTES;\n\ntypedef void(*PFN_FREEVARIABLECONTEXT)(\n    __in LPVOID pvContext\n    );\n\ntypedef enum VARIABLE_VALUE_TYPE\n{\n    VARIABLE_VALUE_TYPE_NONE,\n    VARIABLE_VALUE_TYPE_NUMERIC,\n    VARIABLE_VALUE_TYPE_STRING,\n    VARIABLE_VALUE_TYPE_VERSION,\n} VARIABLE_VALUE_TYPE;\n\ntypedef struct _VARIABLE_VALUE\n{\n    VARIABLE_VALUE_TYPE type;\n    union\n    {\n        LONGLONG llValue;\n        DWORD64 qwValue;\n        LPWSTR sczValue;\n    };\n    BOOL fHidden;\n    LPVOID pvContext;\n} VARIABLE_VALUE;\n\nHRESULT DAPI VarCreate(\n    __out_bcount(VARIABLES_HANDLE_BYTES) VARIABLES_HANDLE* ppVariables\n    );\nvoid DAPI VarDestroy(\n    __in_bcount(VARIABLES_HANDLE_BYTES) VARIABLES_HANDLE pVariables,\n    __in_opt PFN_FREEVARIABLECONTEXT vpfFreeVariableContext\n    );\nvoid DAPI VarFreeValue(\n    __in VARIABLE_VALUE* pValue\n    );\nHRESULT DAPI VarEscapeString(\n    __in_z LPCWSTR wzIn,\n    __out_z LPWSTR* psczOut\n    );\nHRESULT DAPI VarFormatString(\n    __in C_VARIABLES_HANDLE pVariables,\n    __in_z LPCWSTR wzIn,\n    __out_z_opt LPWSTR* psczOut,\n    __out_opt DWORD* pcchOut\n    );\nHRESULT DAPI VarGetFormatted(\n    __in C_VARIABLES_HANDLE pVariables,\n    __in_z LPCWSTR wzVariable,\n    __out_z LPWSTR* psczValue\n    );\nHRESULT DAPI VarGetNumeric(\n    __in C_VARIABLES_HANDLE pVariables,\n    __in_z LPCWSTR wzVariable,\n    __out LONGLONG* pllValue\n    );\nHRESULT DAPI VarGetString(\n    __in C_VARIABLES_HANDLE pVariables,\n    __in_z LPCWSTR wzVariable,\n    __out_z LPWSTR* psczValue\n    );\nHRESULT DAPI VarGetVersion(\n    __in C_VARIABLES_HANDLE pVariables,\n    __in_z LPCWSTR wzVariable,\n    __in DWORD64* pqwValue\n    );\nHRESULT DAPI VarGetValue(\n    __in C_VARIABLES_HANDLE pVariables,\n    __in_z LPCWSTR wzVariable,\n    __out VARIABLE_VALUE** ppValue\n    );\nHRESULT DAPI VarSetNumeric(\n    __in VARIABLES_HANDLE pVariables,\n    __in_z LPCWSTR wzVariable,\n    __in LONGLONG llValue\n    );\nHRESULT DAPI VarSetString(\n    __in VARIABLES_HANDLE pVariables,\n    __in_z LPCWSTR wzVariable,\n    __in_z_opt LPCWSTR wzValue\n    );\nHRESULT DAPI VarSetVersion(\n    __in VARIABLES_HANDLE pVariables,\n    __in_z LPCWSTR wzVariable,\n    __in DWORD64 qwValue\n    );\nHRESULT DAPI VarSetValue(\n    __in VARIABLES_HANDLE pVariables,\n    __in_z LPCWSTR wzVariable,\n    __in VARIABLE_VALUE* pValue\n    );\nHRESULT DAPI VarStartEnum(\n    __in VARIABLES_HANDLE pVariables,\n    __out_bcount(VARIABLE_ENUM_HANDLE_BYTES) VARIABLE_ENUM_HANDLE* ppEnum,\n    __out VARIABLE_VALUE** ppValue\n    );\nHRESULT DAPI VarNextVariable(\n    __in_bcount(VARIABLE_ENUM_HANDLE_BYTES) VARIABLE_ENUM_HANDLE pEnum,\n    __out VARIABLE_VALUE** ppValue\n    );\nvoid DAPI VarFinishEnum(\n    __in_bcount(VARIABLE_ENUM_HANDLE_BYTES) VARIABLE_ENUM_HANDLE pEnum\n    );\n")),(0,r.kt)("p",null,"Implement the following condition API:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"HRESULT DAPI CondEvaluate(\n    __in VARIABLES_HANDLE pVariables,\n    __in_z LPCWSTR wzCondition,\n    __out BOOL* pf\n    );\n")),(0,r.kt)("h2",{id:"considerations"},"Considerations"),(0,r.kt)("p",null,"The initial proposal called for a COM interface.\nThe feedback was that Burn's COM interfaces were very hard to change in 3.x,\nand that a handle based approach is more consistent with the rest of dutil."),(0,r.kt)("h2",{id:"see-also"},"See Also"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://wixtoolset.org/issues/4552/"},"WIXFEAT:4552")))}E.isMDXComponent=!0}}]);