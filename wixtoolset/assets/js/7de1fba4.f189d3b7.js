"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[36054],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(t),d=o,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||s;return t?r.createElement(f,a(a({ref:n},c),{},{components:t})):r.createElement(f,a({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85812:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>p,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>u});t(67294);var r=t(3905);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const i={title:"Creating a Preprocessor Extension",layout:"documentation",after:"extension_development_simple_example"},p="Creating a Preprocessor Extension",l={unversionedId:"wixdev/extensions/extension_development_preprocessor",id:"version-v3/wixdev/extensions/extension_development_preprocessor",title:"Creating a Preprocessor Extension",description:"The preprocessor in WiX allows extensibilty at a few levels. This sample will demonstrate how to add a PreprocessorExtension to your WixExtension that will handle variables and functions you define in your own namespace.",source:"@site/versioned_docs/version-v3/wixdev/extensions/extension_development_preprocessor.md",sourceDirName:"wixdev/extensions",slug:"/wixdev/extensions/extension_development_preprocessor",permalink:"/wixtoolset/docs/v3/wixdev/extensions/extension_development_preprocessor",draft:!1,editUrl:"https://github.com/wixtoolset/web/tree/master/src/Docusaurus/versioned_docs/version-v3/wixdev/extensions/extension_development_preprocessor.md",tags:[],version:"v3",frontMatter:{title:"Creating a Preprocessor Extension",layout:"documentation",after:"extension_development_simple_example"}},c={},u=[],m={toc:u},d="wrapper";function f(e){var{components:n}=e,t=a(e,["components"]);return(0,r.kt)(d,s(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}({},m,t),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"creating-a-preprocessor-extension"},"Creating a Preprocessor Extension"),(0,r.kt)("p",null,"The preprocessor in WiX allows extensibilty at a few levels. This sample will demonstrate how to add a PreprocessorExtension to your WixExtension that will handle variables and functions you define in your own namespace."),(0,r.kt)("p",null,"This sample assumes you have already reviewed the ",(0,r.kt)("a",{parentName:"p",href:"/wixtoolset/docs/v3/wixdev/extensions/extension_development_simple_example"},"Creating a Skeleton Extension")," topic."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add a new class to your project called SamplePreprocessorExtension.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you added a new file for this class, add a using statement that refers to the Microsoft.Tools.WindowsInstallerXml namespace."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"using Microsoft.Tools.WindowsInstallerXml;\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make your SamplePreprocessorExtension class implement PreprocessorExtension."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"public class SamplePreprocessorExtension : PreprocessorExtension\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add your SamplePreprocessorExtension to your ",(0,r.kt)("a",{parentName:"p",href:"/wixtoolset/docs/v3/wixdev/extensions/extension_development_simple_example"},"previously created SampleWixExtension class")," and override the PreprocessorExtension property from the base class. This will cause your extension to know what to do when WiX asks your extension for its preprocessor extension."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"private SamplePreprocessorExtension preprocessorExtension; \n\npublic override PreprocessorExtension PreprocessorExtension \n{ \n    get\n    { \n        if (this.preprocessorExtension == null) \n        { \n            this.preprocessorExtension = new SamplePreprocessorExtension();\n        } \n        return this.preprocessorExtension; \n\n    } \n}\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In your SamplePreprocessorExtension class, specify the prefixes or namespaces that your extension will handle. For example, if you want to be able to define a variable named $(sample.ReplaceMe), then you need to specify that your extension will handle the ",'"',"sample",'"'," prefix."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'private static string[] prefixes = { "sample" }; \npublic override string[] Prefixes { get { return prefixes; } }\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now that you have specified the prefixes that your extension will handle, you need to handle variables and functions that are passed to you from WiX. You do this by overriding the GetVariable and EvaluateFunction methods from the PreprocessorExtension base class."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'public override string GetVariableValue(string prefix, string name) \n{ \n     string result = null; \n    // Based on the namespace and name, define the resulting string. \n    switch (prefix) \n    { \n        case "sample": \n            switch (name) \n            { \n                case "ReplaceMe": \n                   // This could be looked up from anywhere you can access from your code. \n                   result = "replaced"; \n                   break; \n            } \n            break; \n    }  \n    return result; \n}  \n   \npublic override string EvaluateFunction(string prefix, string function, string[] args) \n{ \n    string result = null; \n    switch (prefix) \n    { \n        case "sample": \n            switch (function)  \n            { \n                case "ToUpper": \n                    if (0 < args.Length)  \n                    { \n                        result = args[0].ToUpper(); \n                    } \n                    else \n                    { \n                        result = String.Empty;  \n                    } \n                    break;  \n            }  \n            break;  \n    }  \n    return result; \n}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Build the project."))),(0,r.kt)("p",null,"You can now pass your extension on the command line to Candle and expect variables and functions in your namespace to be passed to your extension and be evaluated. To demonstrate this, try adding the following properties to your WiX source file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<Property Id="VARIABLETEST" Value="$(sample.ReplaceMe)" />\n<Property Id="FUNCTIONTEST" Value="$(sample.ToUpper(uppercase))" />\n')),(0,r.kt)("p",null,"The resulting .msi file will have entries in the Property table with the values ",'"',"replaced",'"'," and ",'"',"UPPERCASE",'"'," in the Property table."))}f.isMDXComponent=!0}}]);