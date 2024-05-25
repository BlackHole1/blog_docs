"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[46659],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=c(a),m=o,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,l=new Array(i);l[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[d]="string"==typeof e?e:o,l[1]=r;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},93961:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});a(67294);var n=a(3905);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}const r={sidebar_position:50},s="Deployment Tools Foundation",c={unversionedId:"tools/dtf",id:"tools/dtf",title:"Deployment Tools Foundation",description:"Deployment Tools Foundation reference documentation is available here.",source:"@site/docs/tools/dtf.md",sourceDirName:"tools",slug:"/tools/dtf",permalink:"/wixtoolset/docs/tools/dtf",draft:!1,editUrl:"https://github.com/wixtoolset/web/tree/master/src/Docusaurus/docs/tools/dtf.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50},sidebar:"docsSidebar",previous:{title:"DirectX custom action",permalink:"/wixtoolset/docs/tools/wixext/directx"},next:{title:"Preprocessor",permalink:"/wixtoolset/docs/tools/preprocessor"}},u={},d=[{value:"Working with MSI Databases",id:"working-with-msi-databases",level:2},{value:"Querying a database",id:"querying-a-database",level:3},{value:"Updating a binary",id:"updating-a-binary",level:3},{value:"About handles",id:"about-handles",level:3},{value:"Working with Cabinet Files",id:"working-with-cabinet-files",level:2},{value:"Creating a cabinet",id:"creating-a-cabinet",level:3},{value:"Listing a cabinet",id:"listing-a-cabinet",level:3},{value:"Extracting a cabinet",id:"extracting-a-cabinet",level:3},{value:"Getting progress",id:"getting-progress",level:3},{value:"Stream-based compression",id:"stream-based-compression",level:3},{value:"Working with Install Packages",id:"working-with-install-packages",level:2},{value:"Updating files in a product layout",id:"updating-files-in-a-product-layout",level:3},{value:"Managed Custom Actions",id:"managed-custom-actions",level:2},{value:"Proxy for Managed Custom Actions",id:"proxy-for-managed-custom-actions",level:3},{value:"How to",id:"how-to",level:3},{value:"Specifying the Runtime Version",id:"specifying-the-runtime-version",level:3},{value:"Supported Runtime Version",id:"supported-runtime-version",level:4},{value:"Other Configuration",id:"other-configuration",level:4},{value:"Sample C# Custom Action",id:"sample-c-custom-action",level:3},{value:"Building Managed Custom Actions",id:"building-managed-custom-actions",level:3},{value:"Compiling",id:"compiling",level:4},{value:"Wrapping",id:"wrapping",level:4},{value:"Debugging Managed Custom Actions",id:"debugging-managed-custom-actions",level:3}],p={toc:d},m="wrapper";function h(e){var{components:t}=e,a=l(e,["components"]);return(0,n.kt)(m,i(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){o(e,t,a[t])}))}return e}({},p,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"deployment-tools-foundation"},"Deployment Tools Foundation"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("a",{parentName:"p",href:"../../api/"},"Deployment Tools Foundation reference documentation is available here."))),(0,n.kt)("p",null,"Deployment Tools Foundation is a rich set of .NET class libraries and related resources that together bring the Windows deployment platform technologies into the .NET world. It is designed to greatly simplify deployment-related development tasks while still exposing the complete functionality of the underlying technology."),(0,n.kt)("p",null,"The primary focus of DTF is to provide a foundation for development of various kinds of tools to support deployment throughout the product lifecycle, including setup authoring, building, analysis, debugging, and testing tools. In addition to tools, DTF can also be useful for install-time activities such as setup bootstrappers, external UI, and custom actions, and for application run-time activities that need to access the deployment platform."),(0,n.kt)("h2",{id:"working-with-msi-databases"},"Working with MSI Databases"),(0,n.kt)("h3",{id:"querying-a-database"},"Querying a database"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},'using (Database db = new Database("product.msi", DatabaseOpenMode.ReadOnly))\n{\n    string value = (string) db.ExecuteScalar(\n        "SELECT `Value` FROM `Property` WHERE `Property` = \'{0}\'", propName);\n}\n')),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create a new Database instance referring to the location of the .msi or .msm file."),(0,n.kt)("li",{parentName:"ol"},"Execute the query:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The ExecuteScalar method is a shortcut for opening a view, executing the view, and fetching a single value."),(0,n.kt)("li",{parentName:"ul"},"The ExecuteQuery method is a shortcut for opening a view, executing the view, and fetching all values."),(0,n.kt)("li",{parentName:"ul"},"Or do it all manually with Database.OpenView, View.Execute, and View.Fetch.")),(0,n.kt)("h3",{id:"updating-a-binary"},"Updating a binary"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},'Database db = null;\nView view = null;\nRecord rec = null;\ntry\n{\n    db = new Database("product.msi", DatabaseOpenMode.Direct);\n    view = db.OpenView("UPDATE `Binary` SET `Data` = ? WHERE `Name` = \'{0}\'", binName))\n    rec = new Record(1);\n    rec.SetStream(1, binFile);\n    view.Execute(rec);\n    db.Commit();\n}\nfinally\n{\n    if (rec != null) rec.Close();\n    if (view != null) view.Close();\n    if (db != null) db.Close();\n}\n')),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create a new Database instance referring to the location of the .msi or .msm file."),(0,n.kt)("li",{parentName:"ol"},"Open a view by calling one of the Database.OpenView overloads.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Parameters can be substituted in the SQL string using the String.Format syntax.")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Create a record with one field containing the new binary value."),(0,n.kt)("li",{parentName:"ol"},"Execute the view by calling one of the View.Execute overloads.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A record can be supplied for substitution of field tokens (?) in the query.")),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"Commit the Database."),(0,n.kt)("li",{parentName:"ol"},"Close the handles.")),(0,n.kt)("h3",{id:"about-handles"},"About handles"),(0,n.kt)("p",null,"Handle objects (Database, View, Record, SummaryInfo, Session) will remain open until they are explicitly closed or until the objects are collected by the GC. So for the tightest code, handle objects should be explicitly closed when they are no longer needed, since closing them can release significant resources, and too many unnecessary open handles can degrade performance. This is especially important within a loop construct: for example when iterating over all the Records in a table, it is much cleaner and faster to close each Record after it is used."),(0,n.kt)("p",null,"The handle classes in the managed library all extend the InstallerHandle class, which implements the IDisposable interface. This makes them easily managed with C#'s using statement. Alternatively, they can be closed in a finally block."),(0,n.kt)("p",null,"As a general rule, ",(0,n.kt)("em",{parentName:"p"},"methods")," in the library return new handle objects that should be managed and closed by the calling code, while ",(0,n.kt)("em",{parentName:"p"},"properties")," only return a reference to a prexisting handle object."),(0,n.kt)("h2",{id:"working-with-cabinet-files"},"Working with Cabinet Files"),(0,n.kt)("h3",{id:"creating-a-cabinet"},"Creating a cabinet"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},'CabInfo cabInfo = new CabInfo("package.cab");\ncabInfo.Pack("D:\\\\FilesToCompress");\n')),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create a new CabInfo instance referring to the (future) location of the .cab file."),(0,n.kt)("li",{parentName:"ol"},"Compress files:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Easily compress an entire directory with the Pack method."),(0,n.kt)("li",{parentName:"ul"},"Compress a specific list of exernal and internal filenames with the PackFiles method."),(0,n.kt)("li",{parentName:"ul"},"Compress a dictionary mapping of internal to external filenames with the PackFileSet method.")),(0,n.kt)("h3",{id:"listing-a-cabinet"},"Listing a cabinet"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},'CabInfo cabInfo = new CabInfo("package.cab");\nforeach (CabFileInfo fileInfo in cabInfo.GetFiles())\n    Console.WriteLine(fileInfo.Name + "\\t" + fileInfo.Length);\n')),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create a new CabInfo instance referring to the location of the .cab file."),(0,n.kt)("li",{parentName:"ol"},"Enumerate files returned by the GetFiles method.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Each CabFileInfo instance contains metadata about one file.")),(0,n.kt)("h3",{id:"extracting-a-cabinet"},"Extracting a cabinet"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},'CabInfo cabInfo = new CabInfo("package.cab");\ncabInfo.Unpack("D:\\\\ExtractedFiles");\n')),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create a new CabInfo instance referring to the location of the .cab file."),(0,n.kt)("li",{parentName:"ol"},"Extract files:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Easily extract all files to a directory with the Unpack method."),(0,n.kt)("li",{parentName:"ul"},"Easily extract a single file with the UnpackFile method."),(0,n.kt)("li",{parentName:"ul"},"Extract a specific list of filenames with the UnpackFiles method."),(0,n.kt)("li",{parentName:"ul"},"Extract a dictionary mapping of internal to external filenames with the UnpackFileSet method.")),(0,n.kt)("h3",{id:"getting-progress"},"Getting progress"),(0,n.kt)("p",null,"Most cabinet operation methods have an overload that allows you to specify a event handler for receiving archive progress events. The XPack sample demonstrates use of the callback to report detailed progress to the console."),(0,n.kt)("h3",{id:"stream-based-compression"},"Stream-based compression"),(0,n.kt)("p",null,"The CabEngine class contains static methods for performing compression/decompression operations directly on any kind of Stream. However these methods are more difficult to use, since the caller must implement a stream context that provides the file metadata which would otherwise have been provided by the filesystem. The CabInfo class uses the CabEngine class with FileStreams to provide the more traditional file-based interface."),(0,n.kt)("h2",{id:"working-with-install-packages"},"Working with Install Packages"),(0,n.kt)("h3",{id:"updating-files-in-a-product-layout"},"Updating files in a product layout"),(0,n.kt)("p",null,"The InstallPackage class makes it easy to work with files and cabinets in the context of a compressed or uncompressed product layout."),(0,n.kt)("p",null,"This hypothetical example takes an IDictionary ",(0,n.kt)("inlineCode",{parentName:"p"},"files")," that maps file keys to file paths. Each file is to be updated in the package layout; cabinets are even recompressed if necessary to include the new files."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},'using (InstallPackage pkg = new InstallPackage(@"d:\\builds\\product.msi",\n    DatabaseOpenMode.Transact))\n{\n    pkg.WorkingDirectory = Path.Combine(Path.GetTempFolder(), "pkgtmp");\n    foreach (string fileKey in files.Keys)\n    {\n        string sourceFilePath = files[fileKey];\n        string destFilePath = pkg.Files[fileKey].SourcePath;\n        destFilePath = Path.Combine(pkg.WorkingDirectory, destFilePath);\n        File.Copy(sourceFilePath, destFilePath, true);\n    }\n    pkg.UpdateFiles(new ArrayList(files.Keys));\n    pkg.Commit();\n    Directory.Delete(pkg.WorkingDirectory, true);\n}\n')),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create a new InstallPackage instance referring to the location of the .msi. This is actually just a specialized subclass of a Database."),(0,n.kt)("li",{parentName:"ol"},"Set the WorkingDirectory. This is the root directory where the package expects to find the new source files."),(0,n.kt)("li",{parentName:"ol"},"Copy each file to its proper location in the working directory. The InstallPackage.Files property is used to look up the relative source path of each file."),(0,n.kt)("li",{parentName:"ol"},"Call InstallPackage.UpdateFiles with the list of file keys. This will re-compress and package the files if necessary, and also update the following data: File.FileSize, File.Version, File.Language, MsiFileHash.HashPart*."),(0,n.kt)("li",{parentName:"ol"},"Commit the database changes and cleanup the working directory.")),(0,n.kt)("h2",{id:"managed-custom-actions"},"Managed Custom Actions"),(0,n.kt)("p",null,"Before choosing to write a custom action in managed code instead of traditional native C++ code, you should carefully consider the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Obviously, it introduces a dependency on the .NET Framework. Your MSI package should probably have a LaunchCondition to check for the presence of the correct version of the .NET Framework before anything else happens."),(0,n.kt)("li",{parentName:"ul"},"If the custom action runs at uninstall time, then even the uninstall of your product may fail if the .NET Framework is not present. This means a user could run into a problem if they uninstall the .NET Framework before your product."),(0,n.kt)("li",{parentName:"ul"},'A managed custom action should be configured to run against a specific version of the .NET Framework, and that version should match the version your actual product runs against. Allowing the version to "float" to the latest installed .NET Framework is likely to lead to compatibility problems with future versions. The .NET Framework provides side-by-side functionality for good reason -- use it.')),(0,n.kt)("h3",{id:"proxy-for-managed-custom-actions"},"Proxy for Managed Custom Actions"),(0,n.kt)("p",null,"The custom action proxy allows an MSI developer to write custom actions in managed code, while maintaing all the advantages of type 1 DLL custom actions including full access to installer state, properties, and the session database."),(0,n.kt)("p",null,"There are generally four problems that needed to be solved in order to create a type 1 custom action in managed code:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Exporting the CA function as a native entry point callable by MSI: The Windows Installer engine expects to call a LoadLibrary and GetProcAddress on the custom action DLL, so an unmanaged DLL needs to implement the function that is initially called by MSI and ultimately returns the result. This function acts as a proxy to relay the custom action call into the managed custom action assembly, and relay the result back to the caller."),(0,n.kt)("li",{parentName:"ol"},"Providing supporting assemblies without requiring them to be installed as files: If a DLL custom action runs before the product's files are installed, then it is difficult to provide any supporting files, because of the way the CA DLL is singly extracted and executed from a temp file. (This can be a problem for unmanaged CAs as well.) With managed custom actions we have already hit that problem since both the CA assembly and the MSI wrapper assembly need to be loaded. To solve this, the proxy DLL carries an appended cab package. When invoked, it will extract all contents of the cab package to a temporary working directory. This way the cab package can carry any arbitrary dependencies the custom action may require."),(0,n.kt)("li",{parentName:"ol"},'Hosting and configuring the Common Language Runtime: In order to invoke a method in a managed assembly from a previously unmanaged process, the CLR needs to be "hosted". This involves choosing the correct version of the .NET Framework to use out of the available version(s) on the system, binding that version to the current process, and configuring it to load assemblies from the temporary working directory.'),(0,n.kt)("li",{parentName:"ol"},"Converting the integer session handle into a Session object: The Session class in the managed wrapper library has a constructor which takes an integer session handle as its parameter. So the proxy simply instantiates this object before calling the real CA function.")),(0,n.kt)("p",null,"The unmanaged CAPack module, when used in combination with the managed proxy in the Microsoft.WindowsInstaller assembly, accomplishes the tasks above to enable fully-functional managed DLL custom actions."),(0,n.kt)("h3",{id:"how-to"},"How to"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A custom action function needs to be declared as public static (aka Public Shared in VB.NET). It takes one parameter which is a Session object, and returns a ActionResult enumeration.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"[CustomAction]\npublic static ActionResult MyCustomAction(Session session)\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'The function must have a CustomActionAttribute, which enables it to be linked to a proxy function. The attribute can take an optional "name" parameter, which is the name of the entrypoint that is exported from the custom action DLL.'),(0,n.kt)("li",{parentName:"ul"},"Fill in MSI CustomAction table entries just like you would for a normal type 1 native-DLL CA. Managed CAs can also work just as well in deferred, rollback, and commit modes."),(0,n.kt)("li",{parentName:"ul"},"If the custom action function throws any kind of Exception that isn't handled internally, then it will be caught by the proxy function. The Exception message and stack trace will be printed to the MSI log if logging is enabled, and the CA will return a failure code."),(0,n.kt)("li",{parentName:"ul"},"To be technically correct, any MSI handles obtained should be closed before a custom action function exits -- otherwise a warning gets printed to the log. The handle classes in the managed library (Database, View, Record, SummaryInfo) all implement the IDisposable interface, which makes them easily managed with C#'s ",(0,n.kt)("inlineCode",{parentName:"li"},"using")," statement. Alternatively, they can be closed in a finally block. As a general rule, methods return new handle objects that should be managed and closed by the user code, while properties only return a reference to a prexisting handle object."),(0,n.kt)("li",{parentName:"ul"},"Don't forget to use a CustomAction.config file to specify what version of the .NET Framework the custom action should run against.")),(0,n.kt)("h3",{id:"specifying-the-runtime-version"},"Specifying the Runtime Version"),(0,n.kt)("p",null,"Every managed custom action package should contain a CustomAction.config file, even though it is not required by the toolset. Here is a sample:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8" ?>\n<configuration>\n    <startup>\n        <supportedRuntime version="v2.0.50727"/>\n    </startup>\n</configuration>\n')),(0,n.kt)("p",null,"The configuration file follows ",(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/framework/configure-apps/file-schema/"},"the standard schema for .NET Framework configuration files"),"."),(0,n.kt)("h4",{id:"supported-runtime-version"},"Supported Runtime Version"),(0,n.kt)("p",null,"In the startup section, use ",(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/framework/configure-apps/file-schema/startup/supportedruntime-element"},"supportedRuntime"),' tags to explicitly specify the version(s) of the .NET Framework that the custom action should run on. If no versions are specified, the chosen version of the .NET Framework will be the "best" match to what WixToolset.Dtf.WindowsInstaller.dll was built against.'),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Warning: Leaving the version unspecified is dangerous as it introduces a risk of compatibility problems with future versions of the .NET Framework. It is highly recommended that you specify only the version(s) of the .NET Framework that you have tested against.")),(0,n.kt)("h4",{id:"other-configuration"},"Other Configuration"),(0,n.kt)("p",null,"Various other kinds of configuration settings may also be added to this file, as it is a standard .NET Framework application config file for the custom action."),(0,n.kt)("h3",{id:"sample-c-custom-action"},"Sample C# Custom Action"),(0,n.kt)("p",null,"MSI custom actions are MUCH easier to write in C# than in C++!"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},'[CustomAction]\npublic static ActionResult SampleCustomAction1(Session session)\n{\n    session.Log("Hello from SampleCA1");\n\n    string testProp = session["SampleCATest"];\n    string testProp2;\n    testProp2 = (string) session.Database.ExecuteScalar(\n        "SELECT `Value` FROM `Property` WHERE `Property` = \'SampleCATest\'");\n\n    if(testProp == testProp2)\n    {\n        session.Log("Simple property test passed.");\n        return ActionResult.Success;\n    }\n    else\n        return ActionResult.Failure;\n}\n')),(0,n.kt)("p",null,"A sample CA project with two CAs is included in the Samples\\ManagedCA directory.  Running the CustomActionTest project will package the CA and insert it into a test MSI. The MSI will invoke the custom actions, but it will not install anything since the second sample CA returns ActionResult.UserExit."),(0,n.kt)("h3",{id:"building-managed-custom-actions"},"Building Managed Custom Actions"),(0,n.kt)("p",null,"The preferred way to build managed CA DLLs is to use an msbuild project (aka visual studio project). In that project, make sure that the ",(0,n.kt)("inlineCode",{parentName:"p"},"WixToolset.Dtf.CustomAction")," nuget package has been included as a package reference. The resulting package (",(0,n.kt)("inlineCode",{parentName:"p"},"SampleCAs.CA.dll")," if your project/assemblyname was ",(0,n.kt)("inlineCode",{parentName:"p"},"SampleCAs"),") is ready to be inserted into the Binary table of the MSI."),(0,n.kt)("p",null,"Otherwise, the build process for managed CA DLLs is a little complicated becuase of the proxy-wrapper and dll-export requirements. Here's an overview:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Download both the ",(0,n.kt)("inlineCode",{parentName:"li"},"WixToolset.Dtf.CustomAction")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"WixToolset.Dtf.WindowsInstaller")," nuget packages and point ",(0,n.kt)("inlineCode",{parentName:"li"},"DTFbin")," to the applicable ",(0,n.kt)("inlineCode",{parentName:"li"},"lib")," directory of ",(0,n.kt)("inlineCode",{parentName:"li"},"WixToolset.Dtf.WindowsInstaller")," and add the ",(0,n.kt)("inlineCode",{parentName:"li"},"tools")," directory of ",(0,n.kt)("inlineCode",{parentName:"li"},"WixToolset.Dtf.CustomAction")," to your ",(0,n.kt)("inlineCode",{parentName:"li"},"PATH"),"."),(0,n.kt)("li",{parentName:"ol"},"Compile your CA assembly, which references WixToolset.Dtf.WindowsInstaller.dll and marks exported custom actions with a CustomActionAttribute."),(0,n.kt)("li",{parentName:"ol"},"Package the CA assembly, CustomAction.config, WixToolset.Dtf.WindowsInstaller.dll, and any other dependencies using MakeSfxCA.exe. The filenames of CustomAction.config and WixToolset.Dtf.WindowsInstaller.dll must not be changed, since the custom action proxy specifically looks for those files.")),(0,n.kt)("h4",{id:"compiling"},"Compiling"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"csc.exe\n    /target:library\n    /r:$(DTFbin)\\WixToolset.Dtf.WindowsInstaller.dll\n    /out:SampleCAs.dll\n    *.cs\n")),(0,n.kt)("h4",{id:"wrapping"},"Wrapping"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"MakeSfxCA.exe\n    $(OutDir)\\SampleCAsPackage.dll\n    $(DTFbin)\\SfxCA.dll\n    SampleCAs.dll\n    CustomAction.config\n    $(DTFbin)\\WixToolset.Dtf.WindowsInstaller.dll\n")),(0,n.kt)("p",null,"Now the resulting package, SampleCAsPackage.dll, is ready to be inserted into the Binary table of the MSI."),(0,n.kt)("p",null,"For a working example of building a managed custom action package you can look at included sample ManagedCAs project."),(0,n.kt)("h3",{id:"debugging-managed-custom-actions"},"Debugging Managed Custom Actions"),(0,n.kt)("p",null,"There are two ways to attach a debugger to a managed custom action."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Attach to message box:")," Add some temporary code to your custom action to display a message box. Then when the message box pops up at install time, you can attch your debugger to that process (usually identifiable by the title of the message box). Once attached, you can ensure that symbols are loaded if necessary (they will be automatically loaded if PDB files were embedded in the CA assembly at build time), then set breakpoints anywhere in the custom action code."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"MMsiBreak environment variable:")," When debugging managed custom actions, you should use the MMsiBreak environment variable instead of MsiBreak. Set the MMsiBreak variable to the custom action entrypoint name. (Remember this might be different from the method name if it was overridden by the CustomActionAttribute.) When the CA proxy finds a matching name, the CLR JIT-debugging dialog will appear with text similar to \"An exception 'Launch for user' has occurred in YourCustomActionName.\" The debug break occurs after the custom action assembly has been loaded, but just before custom action method is invoked. Once attached, you can ensure that symbols are loaded if necessary, then set breakpoints anywhere in the custom action code. Note: the MMsiBreak environment variable can also accept a comma-separated list of action names, any of which will cause a break when hit.")))}h.isMDXComponent=!0}}]);