"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[76100],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?o.createElement(h,r(r({ref:t},u),{},{components:n})):o.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<a;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4522:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>d});n(67294);var o=n(3905);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function r(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const l={wip:4658,type:"Feature",by:"Sean Hall (rseanhall at gmail.com)",title:"Builtin thmutil Button Functionality",draft:!1},s=void 0,p={unversionedId:"development/wips/builtin-thmutil-button-functionality",id:"development/wips/builtin-thmutil-button-functionality",title:"Builtin thmutil Button Functionality",description:"User stories",source:"@site/docs/development/wips/4658-builtin-thmutil-button-functionality.md",sourceDirName:"development/wips",slug:"/development/wips/builtin-thmutil-button-functionality",permalink:"/wixtoolset/docs/development/wips/builtin-thmutil-button-functionality",draft:!1,editUrl:"https://github.com/wixtoolset/web/tree/master/src/Docusaurus/docs/development/wips/4658-builtin-thmutil-button-functionality.md",tags:[],version:"current",sidebarPosition:4658,frontMatter:{wip:4658,type:"Feature",by:"Sean Hall (rseanhall at gmail.com)",title:"Builtin thmutil Button Functionality",draft:!1},sidebar:"docsSidebar",previous:{title:"Use ETW for Logging",permalink:"/wixtoolset/docs/development/wips/use-etw-for-logging"},next:{title:"Replace Win64 Attribute with Bitness Attribute",permalink:"/wixtoolset/docs/development/wips/replace-win64-with-intuitive-attribute"}},u={},d=[{value:"User stories",id:"user-stories",level:2},{value:"Proposal",id:"proposal",level:2},{value:"Examples",id:"examples",level:2},{value:"Considerations",id:"considerations",level:2},{value:"See Also",id:"see-also",level:2}],c={toc:d},m="wrapper";function h(e){var{components:t}=e,n=r(e,["components"]);return(0,o.kt)(m,a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){i(e,t,n[t])}))}return e}({},c,n),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"user-stories"},"User stories"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"As a Setup Developer I can use builtin button functionality such that I can write more flexible UIs for WixStdBA.")),(0,o.kt)("h2",{id:"proposal"},"Proposal"),(0,o.kt)("p",null,"1) Create a new ",(0,o.kt)("inlineCode",{parentName:"p"},"CloseWindowAction")," element."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<xs:element name="CloseWindowAction">\n    <xs:annotation>\n        <xs:documentation>\n            When the button is pressed, the WM_CLOSE message is sent to the window.\n        </xs:documentation>\n    </xs:annotation>\n    <xs:complexType>\n        <xs:attribute name="Condition" type="xs:string">\n            <xs:annotation>\n                <xs:documentation>\n                    The condition that determines if the parent control will execute this action.\n                </xs:documentation>\n            </xs:annotation>\n        </xs:attribute>\n    </xs:complexType>\n</xs:element>\n')),(0,o.kt)("p",null,"2) Create a new ",(0,o.kt)("inlineCode",{parentName:"p"},"ChangePageAction")," element."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<xs:element name="ChangePageAction">\n    <xs:annotation>\n        <xs:documentation>\n            When the button is pressed, the specified page is shown.\n        </xs:documentation>\n    </xs:annotation>\n    <xs:complexType>\n        <xs:attribute name="Cancel" type="YesNoType">\n            <xs:annotation>\n                <xs:documentation>\n                    When set to \'yes\', none of the variable changes made on the current page are saved.\n                </xs:documentation>\n            </xs:annotation>\n        </xs:attribute>\n        <xs:attribute name="Condition" type="xs:string">\n            <xs:annotation>\n                <xs:documentation>\n                    The condition that determines if the parent control will execute this action.\n                </xs:documentation>\n            </xs:annotation>\n        </xs:attribute>\n        <xs:attribute name="Page" type="xs:string" use="required">\n            <xs:annotation>\n                <xs:documentation>\n                    The Name of the Page to show.\n                </xs:documentation>\n            </xs:annotation>\n        </xs:attribute>\n    </xs:complexType>\n</xs:element>\n')),(0,o.kt)("p",null,"3) Create a new ",(0,o.kt)("inlineCode",{parentName:"p"},"BrowseDirectoryAction")," element to designate that clicking the button calls ",(0,o.kt)("inlineCode",{parentName:"p"},"SHBrowseForFolder")," and then saves the selection to a variable."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<xs:element name="BrowseDirectoryAction">\n    <xs:annotation>\n        <xs:documentation>\n            When the button is pressed, a directory browser dialog is shown.\n        </xs:documentation>\n    </xs:annotation>\n    <xs:complexType>\n        <xs:attribute name="Condition" type="xs:string">\n            <xs:annotation>\n                <xs:documentation>\n                    The condition that determines if the parent control will execute this action.\n                </xs:documentation>\n            </xs:annotation>\n        </xs:attribute>\n        <xs:attribute name="VariableName" type="xs:string" use="required">\n            <xs:annotation>\n                <xs:documentation>\n                    The name of the variable to update when the user selects a directory from the dialog.\n                </xs:documentation>\n            </xs:annotation>\n        </xs:attribute>\n    </xs:complexType>\n</xs:element>\n')),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"1) The ",(0,o.kt)("inlineCode",{parentName:"p"},"WIXSTDBA_CONTROL_WELCOME_CANCEL_BUTTON")," related code will be removed from WixStdBA.  In the theme file, it will change from"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<Button Name="WelcomeCancelButton" X="-11" Y="-11" Width="75" Height="23" TabStop="yes" FontId="0">\n    #(loc.InstallCloseButton)\n</Button>\n')),(0,o.kt)("p",null,"to"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<Button Name="WelcomeCancelButton" X="-11" Y="-11" Width="75" Height="23" TabStop="yes" FontId="0">\n    <Text>#(loc.InstallCloseButton)</Text>\n    <CloseWindowAction />\n</Button>\n')),(0,o.kt)("p",null,"2) The ",(0,o.kt)("inlineCode",{parentName:"p"},"WIXSTDBA_CONTROL_OPTIONS_BUTTON")," related code will be removed from WixStdBA.  In the theme file, it will change from"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<Button Name="OptionsButton" X="-171" Y="-11" Width="75" Height="23" TabStop="yes" FontId="0" HideWhenDisabled="yes">\n    #(loc.InstallOptionsButton)\n</Button>\n')),(0,o.kt)("p",null,"to"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<Button Name="OptionsButton" X="-171" Y="-11" Width="75" Height="23" TabStop="yes" FontId="0" HideWhenDisabled="yes">\n    <Text>#(loc.InstallOptionsButton)</Text>\n    <ChangePageAction Page="Options" />\n</Button>\n')),(0,o.kt)("p",null,"3) The ",(0,o.kt)("inlineCode",{parentName:"p"},"WIXSTDBA_CONTROL_CANCEL_BUTTON")," related code will be removed from WixStdBA.  In the theme file, it will change from"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<Button Name="OptionsCancelButton" X="-11" Y="-11" Width="75" Height="23" TabStop="yes" FontId="0">\n    #(loc.OptionsCancelButton)\n</Button>\n')),(0,o.kt)("p",null,"to"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<Button Name="OptionsCancelButton" X="-11" Y="-11" Width="75" Height="23" TabStop="yes" FontId="0">\n    <Text>#(loc.OptionsCancelButton)</Text>\n    <ChangePageAction Page="Modify" Condition="WixBundleInstalled" Cancel="yes" />\n    <ChangePageAction Page="Install" Cancel="yes" />\n</Button>\n')),(0,o.kt)("p",null,"4) ",(0,o.kt)("inlineCode",{parentName:"p"},"The WIXSTDBA_CONTROL_FOLDER_EDITBOX")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"WIXSTDBA_CONTROL_BROWSE_BUTTON")," related code will be removed from WixStdBA.  In the theme file, it will change from"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<Editbox Name="FolderEditbox" X="11" Y="143" Width="-91" Height="21" TabStop="yes" FontId="3" FileSystemAutoComplete="yes" />\n<Button Name="BrowseButton" X="-11" Y="142" Width="75" Height="23" TabStop="yes" FontId="3">\n    #(loc.OptionsBrowseButton)\n</Button>\n')),(0,o.kt)("p",null,"to"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<Editbox Name="InstallFolder" X="11" Y="143" Width="-91" Height="21" TabStop="yes" FontId="3" FileSystemAutoComplete="yes" />\n<Button Name="BrowseButton" X="-11" Y="142" Width="75" Height="23" TabStop="yes" FontId="3">\n    <Text>#(loc.OptionsBrowseButton)</Text>\n    <BrowseDirectoryAction VariableName="InstallFolder" />\n</Button>\n')),(0,o.kt)("h2",{id:"considerations"},"Considerations"),(0,o.kt)("p",null,"The original proposal had a ",(0,o.kt)("inlineCode",{parentName:"p"},"PreviousPageAction"),".\nWith the ",(0,o.kt)("inlineCode",{parentName:"p"},"Condition")," attribute added to the actions, that functionality can be done with the ",(0,o.kt)("inlineCode",{parentName:"p"},"ChangePageAction"),".\nAlso, implementing ",(0,o.kt)("inlineCode",{parentName:"p"},"PreviousPageAction")," would be tricky.\nLet's look at dialog sequences where every page has a ",(0,o.kt)("inlineCode",{parentName:"p"},"< Back")," button and a ",(0,o.kt)("inlineCode",{parentName:"p"},"Next >")," button, where the ",(0,o.kt)("inlineCode",{parentName:"p"},"< Back")," button would always performs the ",(0,o.kt)("inlineCode",{parentName:"p"},"PreviousPageAction")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"Next >")," button always performs the ",(0,o.kt)("inlineCode",{parentName:"p"},"ChangePageAction"),"."),(0,o.kt)("p",null,"The first sequence starts with a Welcome page (",(0,o.kt)("inlineCode",{parentName:"p"},"W"),") that leads to an Install page (",(0,o.kt)("inlineCode",{parentName:"p"},"I"),").\n",(0,o.kt)("inlineCode",{parentName:"p"},"I")," has an Options button that leads to the Options page (",(0,o.kt)("inlineCode",{parentName:"p"},"O"),").\nBoth buttons on ",(0,o.kt)("inlineCode",{parentName:"p"},"O")," go to ",(0,o.kt)("inlineCode",{parentName:"p"},"I"),".\nSo the desired sequence is: (",(0,o.kt)("inlineCode",{parentName:"p"},">")," is for ",(0,o.kt)("inlineCode",{parentName:"p"},"Next"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"ChangePageAction")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"<")," is for ",(0,o.kt)("inlineCode",{parentName:"p"},"Back"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"PreviousPageAction"),")"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"W > I > O < I < W\n")),(0,o.kt)("p",null,"Consider the naive implementation where every time thmutil performs a ",(0,o.kt)("inlineCode",{parentName:"p"},"ChangePageAction"),", it keeps track of the old page.\nThis would actually result in the sequence ",(0,o.kt)("inlineCode",{parentName:"p"},"W"),">",(0,o.kt)("inlineCode",{parentName:"p"},"I"),">",(0,o.kt)("inlineCode",{parentName:"p"},"O"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"I"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"O"),", not what we wanted (here the ",(0,o.kt)("inlineCode",{parentName:"p"},"< Back")," button on ",(0,o.kt)("inlineCode",{parentName:"p"},"I")," could be changed to an unconditional ",(0,o.kt)("inlineCode",{parentName:"p"},"ChangePageAction"),", but we could easily insert pages into the sequence that makes that impossible)."),(0,o.kt)("p",null,"Now consider the implementation where thmutil keeps a stack of pages, where the ",(0,o.kt)("inlineCode",{parentName:"p"},"ChangePageAction")," pushes pages onto the stack and ",(0,o.kt)("inlineCode",{parentName:"p"},"PreviousPageAction")," pops them off.\nThis stack implementation provides our desired sequence."),(0,o.kt)("p",null,"The second sequence builds on the first sequence by making the ",(0,o.kt)("inlineCode",{parentName:"p"},"Next >")," button going to a second Options page (",(0,o.kt)("inlineCode",{parentName:"p"},"S"),").\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"Next >")," button on ",(0,o.kt)("inlineCode",{parentName:"p"},"S")," leads to ",(0,o.kt)("inlineCode",{parentName:"p"},"I"),".\nSo the desired sequence is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"W > I > O > S > I < ???\n")),(0,o.kt)("p",null,"It's not clear what the desired sequence should be.\nOn one hand, the last page the user saw was ",(0,o.kt)("inlineCode",{parentName:"p"},"S"),".\nOn the other hand, the sequence ",(0,o.kt)("inlineCode",{parentName:"p"},"I"),">",(0,o.kt)("inlineCode",{parentName:"p"},"O"),">",(0,o.kt)("inlineCode",{parentName:"p"},"S"),">",(0,o.kt)("inlineCode",{parentName:"p"},"I")," was a closed loop so maybe we want the user to go through ",(0,o.kt)("inlineCode",{parentName:"p"},"O")," again to get to ",(0,o.kt)("inlineCode",{parentName:"p"},"S"),".\nFurthermore, pressing ",(0,o.kt)("inlineCode",{parentName:"p"},"< Back")," on ",(0,o.kt)("inlineCode",{parentName:"p"},"I")," leads to ",(0,o.kt)("inlineCode",{parentName:"p"},"W")," in most scenarios; some users are confused when pressing the same button in different contexts performs different actions (with no visual difference between the contexts)."),(0,o.kt)("p",null,"The actual sequence for both the naive and stack implementation would be ",(0,o.kt)("inlineCode",{parentName:"p"},"W"),">",(0,o.kt)("inlineCode",{parentName:"p"},"I"),">",(0,o.kt)("inlineCode",{parentName:"p"},"O"),">",(0,o.kt)("inlineCode",{parentName:"p"},"S"),">",(0,o.kt)("inlineCode",{parentName:"p"},"I"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"S"),", but it's pretty much guaranteed that someone would file a bug saying that the sequence should be ",(0,o.kt)("inlineCode",{parentName:"p"},"W"),">",(0,o.kt)("inlineCode",{parentName:"p"},"I"),">",(0,o.kt)("inlineCode",{parentName:"p"},"O"),">",(0,o.kt)("inlineCode",{parentName:"p"},"S"),">",(0,o.kt)("inlineCode",{parentName:"p"},"I"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"W"),"."),(0,o.kt)("h2",{id:"see-also"},"See Also"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://wixtoolset.org/issues/4658/"},"WIXFEAT:4658")))}h.isMDXComponent=!0}}]);