"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[92650],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?o.createElement(f,s(s({ref:t},p),{},{components:n})):o.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:r,s[1]=a;for(var c=2;c<i;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},38960:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>u});n(67294);var o=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const a={title:"Introduction to Developing WiX Extensions",layout:"documentation"},l="Introduction to Developing WiX Extensions",c={unversionedId:"wixdev/extensions/extension_development_intro",id:"version-v3/wixdev/extensions/extension_development_intro",title:"Introduction to Developing WiX Extensions",description:"Common Requirements",source:"@site/versioned_docs/version-v3/wixdev/extensions/extension_development_intro.md",sourceDirName:"wixdev/extensions",slug:"/wixdev/extensions/extension_development_intro",permalink:"/wixtoolset/docs/v3/wixdev/extensions/extension_development_intro",draft:!1,editUrl:"https://github.com/wixtoolset/web/tree/master/src/Docusaurus/versioned_docs/version-v3/wixdev/extensions/extension_development_intro.md",tags:[],version:"v3",frontMatter:{title:"Introduction to Developing WiX Extensions",layout:"documentation"}},p={},u=[{value:"Common Requirements",id:"common-requirements",level:2},{value:"Considerations",id:"considerations",level:2}],d={toc:u},m="wrapper";function f(e){var{components:t}=e,n=s(e,["components"]);return(0,o.kt)(m,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction-to-developing-wix-extensions"},"Introduction to Developing WiX Extensions"),(0,o.kt)("h2",{id:"common-requirements"},"Common Requirements"),(0,o.kt)("p",null,"In order to understand how each of the classes of extensions work, one should start by looking at the WiX source code. All extensions have the following things in common:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Implemented using the .NET Framework 2.0. The rest of the WiX toolset currently only depends on the .NET Framework 2.0, so in order to ensure backwards compatibility, it is a best practice to develop new extensions so that they only depend on the .NET Framework 2.0 as well."),(0,o.kt)("li",{parentName:"ul"},"Build a subclass of the appropriate extension object, which gives it an easily distinguishable name."),(0,o.kt)("li",{parentName:"ul"},"Build a schema of the appropriate syntax to provide validation checking where possible."),(0,o.kt)("li",{parentName:"ul"},"Build internal table definitions and register them with the compiler."),(0,o.kt)("li",{parentName:"ul"},"Build overrides for extensible methods and virtual members which will get invoked at the approriate location during the single pass compile."),(0,o.kt)("li",{parentName:"ul"},"Compiled into a DLL."),(0,o.kt)("li",{parentName:"ul"},"Placed next to WiX EXEs along with all other WiX extension DLLs."),(0,o.kt)("li",{parentName:"ul"},"Registered with WiX by passing the path of the exension DLL as a command line argument to the compiler and/or linker.")),(0,o.kt)("h2",{id:"considerations"},"Considerations"),(0,o.kt)("p",null,"Before investing in an extension, one should evaluate whether an external tool and the ?include? syntax (from the preprocessor) will provide the needed flexibility for your technical needs."),(0,o.kt)("p",null,"Multiple extensions and extension types are supported, but there is no guarantee of the order in which a particular class of extensions will be processed. As a result, there must not be any sequencing dependencies between extensions within the same extension class."),(0,o.kt)("p",null,"Extension developers might also implement a RequiredVersion attribute on the ",(0,o.kt)("a",{parentName:"p",href:"/wixtoolset/docs/v3/xsd/wix/wix/"},"Wix")," element. This allows setup developers using your extension to require a specific version of the extension in case a new feature is introduced or a breaking change is made. You can add an attribute to the Wix element in an extension as shown in the following example."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"\n    xmlns:xse="http://schemas.microsoft.com/wix/2005/XmlSchemaExtension">\n  <xs:attribute name="RequiredVersion" type="xs:string">\n    <xs:annotation>\n      <xs:documentation>\n        The version of this extension required to compile the defining source.\n      </xs:documentation>\n      <xs:appinfo>\n        <xse:parent namespace="http://schemas.microsoft.com/wix/2006/wi" ref="Wix" />\n      </xs:appinfo>\n    </xs:annotation>\n  </xs:attribute>\n</xs:schema>\n')))}f.isMDXComponent=!0}}]);