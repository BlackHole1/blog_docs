"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[8828],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},A="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),A=c(n),p=i,m=A["".concat(l,".").concat(p)]||A[p]||d[p]||o;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[A]="string"==typeof e?e:i,s[1]=a;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},36163:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>A});n(67294);var r=n(3905);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const a={title:"Writing WiX Tests",layout:"documentation"},l="Writing WiX Tests",c={unversionedId:"wixdev/tests/tests_writingtests",id:"version-v3/wixdev/tests/tests_writingtests",title:"Writing WiX Tests",description:"This document describes how to write tests for WiX.",source:"@site/versioned_docs/version-v3/wixdev/tests/tests_writingtests.md",sourceDirName:"wixdev/tests",slug:"/wixdev/tests/tests_writingtests",permalink:"/wixtoolset/docs/v3/wixdev/tests/tests_writingtests",draft:!1,editUrl:"https://github.com/wixtoolset/web/tree/master/src/Docusaurus/versioned_docs/version-v3/wixdev/tests/tests_writingtests.md",tags:[],version:"v3",frontMatter:{title:"Writing WiX Tests",layout:"documentation"}},u={},A=[{value:"Location of the Tests",id:"location-of-the-tests",level:2},{value:"WixTests Solution",id:"wixtests-solution",level:2},{value:"Example Tests",id:"example-tests",level:2},{value:"Example: Build and Verify an MSI",id:"example-build-and-verify-an-msi",level:3},{value:"Example: Check for a Warning and Query an MSI",id:"example-check-for-a-warning-and-query-an-msi",level:3},{value:"Example: ICE Validation with Smoke",id:"example-ice-validation-with-smoke",level:3}],d={toc:A},p="wrapper";function m(e){var{components:t}=e,a=s(e,["components"]);return(0,r.kt)(p,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},d,a),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"writing-wix-tests"},"Writing WiX Tests"),(0,r.kt)("p",null,"This document describes how to write tests for WiX."),(0,r.kt)("h2",{id:"location-of-the-tests"},"Location of the Tests"),(0,r.kt)("p",null,"The root directory for the tests is %WIX_ROOT%\\test. There are three main subdirectories:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"data: contains test data, eg wxs files"),(0,r.kt)("li",{parentName:"ul"},"src: contains source code for the tests"),(0,r.kt)("li",{parentName:"ul"},"WixTestTools: contains source code for the WixTestTools library")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Test Directory Tree",src:n(42091).Z,width:"174",height:"248"})),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"data")," and ",(0,r.kt)("em",{parentName:"p"},"src")," directories are further organized by feature area:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Examples: Example tests"),(0,r.kt)("li",{parentName:"ul"},"Extensions: Tests for WiX extensions"),(0,r.kt)("li",{parentName:"ul"},"Integration: Tests for integration of two or more tools. Eg. Building an MSI from source with Candle and Light."),(0,r.kt)("li",{parentName:"ul"},"QTests: Tests migrated from the previous test infrastructure"),(0,r.kt)("li",{parentName:"ul"},"SharedData: Test data that is shared across multiple tests"),(0,r.kt)("li",{parentName:"ul"},"Tools: Tests for a particular tool","'","s command line options"),(0,r.kt)("li",{parentName:"ul"},"Wixproj: Tests for building .wixproj","'","s with MSBuild")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Test Directory Tree",src:n(6792).Z,width:"169",height:"323"})),(0,r.kt)("h2",{id:"wixtests-solution"},"WixTests Solution"),(0,r.kt)("p",null,"The test solution file, WixTests.sln, is located in %WIX_ROOT%\\test\\WixTests.sln. The WixTests solution currently contains two projects:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"WixTests: Contains all of the tests"),(0,r.kt)("li",{parentName:"ul"},"WixTestsTools: A library of wrapper classes and verification methods used by the tests")),(0,r.kt)("p",null,"The solution should be opened from the WiX command window to ensure that the %WIX_ROOT% environment variable is set."),(0,r.kt)("h2",{id:"example-tests"},"Example Tests"),(0,r.kt)("h3",{id:"example-build-and-verify-an-msi"},"Example: Build and Verify an MSI"),(0,r.kt)("p",null,"The following example shows how to test building an MSI from WiX source."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'[TestMethod]\n[Description("An example test that verifies an MSI is built correctly")]\n[Priority(3)]\npublic void ExampleTest1()\n{\n    // Use the BuildPackage method to build an MSI from source\n    string actualMSI = Builder.BuildPackage(@"%WIX_ROOT%\\test\\data\\SharedData\\Authoring\\BasicProduct.wxs");\n    \n    // The expected MSI to compare against\n    string expectedMSI = @"%WIX_ROOT%\\test\\data\\SharedData\\Baselines\\MSIs\\BasicProduct.msi";\n    \n    // Use the VerifyResults method to compare the actual and expected MSIs\n    Verifier.VerifyResults(expectedMSI, actualMSI);\n}\n')),(0,r.kt)("h3",{id:"example-check-for-a-warning-and-query-an-msi"},"Example: Check for a Warning and Query an MSI"),(0,r.kt)("p",null,"The following example shows how to build an MSI using the Candle and Light wrapper classes. It also demonstrates how to check for a warning from Light and query the resuling MSI."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'[TestMethod]\n[Description("An example test that checks for a Light warning and queries the resulting MSI")]\n[Priority(3)]\npublic void ExampleTest2()\n{\n    // Compile a wxs file\n    Candle candle = new Candle();\n    candle.SourceFiles.Add(@"%WIX_ROOT%\\test\\data\\Examples\\ExampleTest2\\product.wxs");\n    candle.Run();\n    \n    // Create a Light object that uses some properties of the Candle object\n    Light light = new Light(candle);\n    \n    // Define the Light warning that we expect to see\n    WixMessage LGHT1079 = new WixMessage(1079, WixMessage.MessageTypeEnum.Warning);\n    light.ExpectedWixMessages.Add(LGHT1079);\n    \n    // Link\n    light.Run();\n    \n    // Query the resulting MSI for verification\n    string query = "SELECT `Value` FROM `Property` WHERE `Property` = \'Manufacturer\'";\n    Verifier.VerifyQuery(light.OutputFile, query, ".NET Foundation");\n}\n')),(0,r.kt)("h3",{id:"example-ice-validation-with-smoke"},"Example: ICE Validation with Smoke"),(0,r.kt)("p",null,"The following example shows how to verify that Smoke catches a particular ICE violation and how to use the Result object to perform further verification."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'[TestMethod]\n[Description("An example test that verifies an ICE violation is caught by smoke")]\n[Priority(3)]\npublic void ExampleTest3()\n{\n    string testDirectory = Environment.ExpandEnvironmentVariables(@"%WIX_ROOT%\\test\\data\\Examples\\ExampleTest3");\n    \n    // Build the MSI that will be run against Smoke. Pass the -sval argument to delay validation until Smoke is run\n    string msi = Builder.BuildPackage(testDirectory, "product.wxs", "product.msi", null, "-sval");\n    \n    // Create a new Smoke object\n    Smoke smoke = new Smoke();\n    smoke.DatabaseFiles.Add(msi);\n    smoke.CubFiles.Add(@"%WIX_ROOT%\\test\\data\\Examples\\ExampleTest3\\test.cub");\n    \n    // Define the expected ICE error\n    WixMessage LGHT1076 = new WixMessage(1076, "ICE1000: Component \'ExtraICE.0.ProductComponent\' installs into directory \'TARGETDIR\', which will get installed into the volume with the most free space unless explicitly set.", WixMessage.MessageTypeEnum.Warning);\n    smoke.ExpectedWixMessages.Add(LGHT1076);\n    \n    // Run Smoke and keep a reference to the Result object that is returned by the Run() method\n    Result result = smoke.Run();\n    \n    // Use the Result object to verify the exit code\n    // Note: checking for an exit code of 0 is done implicitly in the Run() method but\n    // this is just for demonstration purposes.\n    Assert.AreEqual(0, result.ExitCode, "Actual exit code did not match expected exit code");\n}\n')))}m.isMDXComponent=!0},42091:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/jpeg;base64,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"},6792:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/tests_writingtests_directorytree2-cfa60500792115c93e5a2fcb1e60e1cf.jpg"}}]);