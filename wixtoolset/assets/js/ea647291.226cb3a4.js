"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[38884],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(n),p=l,f=c["".concat(i,".").concat(p)]||c[p]||h[p]||o;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:l,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},48205:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>c});n(67294);var r=n(3905);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}const s={title:"MajorUpgrade Element",layout:"documentation_xsd_main"},i=void 0,u={unversionedId:"xsd/wix/majorupgrade",id:"version-v3/xsd/wix/majorupgrade",title:"MajorUpgrade Element",description:"Description",source:"@site/versioned_docs/version-v3/xsd/wix/majorupgrade.md",sourceDirName:"xsd/wix",slug:"/xsd/wix/majorupgrade",permalink:"/wixtoolset/docs/v3/xsd/wix/majorupgrade",draft:!1,editUrl:"https://github.com/wixtoolset/web/tree/master/src/Docusaurus/versioned_docs/version-v3/xsd/wix/majorupgrade.md",tags:[],version:"v3",frontMatter:{title:"MajorUpgrade Element",layout:"documentation_xsd_main"}},d={},c=[],h={toc:c},p="wrapper";function f(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)(p,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}({},h,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("dl",null,(0,r.kt)("dt",null,"Description"),(0,r.kt)("dd",null,"                 Simplifies authoring for major upgrades, including support for preventing downgrades.",(0,r.kt)("br",null),(0,r.kt)("br",null),"                The parent Product element must have valid UpgradeCode and Version attributes.",(0,r.kt)("br",null),(0,r.kt)("br",null),"                When the FindRelatedProducts action detects a related product installed on the system,                 it appends the product code to the property named WIX_UPGRADE_DETECTED. After the                 FindRelatedProducts action is run, the value of the WIX_UPGRADE_DETECTED property is a                 list of product codes, separated by semicolons (;), detected on the system.             "),(0,r.kt)("dt",null,"Windows Installer references"),(0,r.kt)("dd",null,"None"),(0,r.kt)("dt",null,"Parents"),(0,r.kt)("dd",null,(0,r.kt)("a",{href:"../product/"},"Product")),(0,r.kt)("dt",null,"Inner Text"),(0,r.kt)("dd",null,"None"),(0,r.kt)("dt",null,"Children"),(0,r.kt)("dd",null,"None"),(0,r.kt)("dt",null,"Attributes"),(0,r.kt)("dd",null,(0,r.kt)("table",{cellspacing:"0",cellpadding:"0",class:"schema"},(0,r.kt)("tr",null,(0,r.kt)("th",{width:"15%"},"Name"),(0,r.kt)("th",{width:"15%"},"Type"),(0,r.kt)("th",{width:"65%"},"Description"),(0,r.kt)("th",{width:"15%"},"Required")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"AllowDowngrades"),(0,r.kt)("td",null,(0,r.kt)("a",{href:"../simple_type_yesnotype/"},"YesNoType")),(0,r.kt)("td",null,"                     When set to no (the default), products with lower version numbers are blocked from                     installing when a product with a higher version is installed; the DowngradeErrorMessage                     attribute must also be specified.",(0,r.kt)("br",null),(0,r.kt)("br",null),"                    When set to yes, any version can be installed over any other version.                 "),(0,r.kt)("td",null,"\xa0")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"AllowSameVersionUpgrades"),(0,r.kt)("td",null,(0,r.kt)("a",{href:"../simple_type_yesnotype/"},"YesNoType")),(0,r.kt)("td",null,"                     When set to no (the default), installing a product with the same version and upgrade code                     (but different product code) is allowed and treated by MSI as two products. When set to yes,                     WiX sets the msidbUpgradeAttributesVersionMaxInclusive attribute, which tells MSI to treat                     a product with the same version as a major upgrade.",(0,r.kt)("br",null),(0,r.kt)("br",null),"                    This is useful when two product versions differ only in the fourth version field. MSI                     specifically ignores that field when comparing product versions, so two products that                     differ only in the fourth version field are the same product and need this attribute set to                     yes to be detected.",(0,r.kt)("br",null),(0,r.kt)("br",null),'                    Note that because MSI ignores the fourth product version field, setting this attribute to                     yes also allows downgrades when the first three product version fields are identical.                     For example, product version 1.0.0.1 will "upgrade" 1.0.0.2998 because they\'re seen as the                     same version (1.0.0). That could reintroduce serious bugs so the safest choice is to change                     the first three version fields and omit this attribute to get the default of no.',(0,r.kt)("br",null),(0,r.kt)("br",null),'                    This attribute cannot be "yes" when AllowDowngrades is also "yes" -- AllowDowngrades                     already allows two products with the same version number to upgrade each other.                 '),(0,r.kt)("td",null,"\xa0")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Disallow"),(0,r.kt)("td",null,(0,r.kt)("a",{href:"../simple_type_yesnotype/"},"YesNoType")),(0,r.kt)("td",null,"                       When set to yes, products with higer version numbers are blocked from                       installing when a product with a lower version is installed; the UpgradeErrorMessage                       attribute must also be specified.",(0,r.kt)("br",null),(0,r.kt)("br",null),"                      When set to no (the default), any version can be installed over any lower version.                   "),(0,r.kt)("td",null,"\xa0")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"DisallowUpgradeErrorMessage"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"                   The message displayed if users try to install a product with a higer version number                   when a product with a lower version is installed. Used only when Disallow                   is yes.               "),(0,r.kt)("td",null,"\xa0")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"DowngradeErrorMessage"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"                         The message displayed if users try to install a product with a lower version number                         when a product with a higher version is installed. Used only when AllowDowngrades                         is no (the default).           "),(0,r.kt)("td",null,"\xa0")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"IgnoreRemoveFailure"),(0,r.kt)("td",null,(0,r.kt)("a",{href:"../simple_type_yesnotype/"},"YesNoType")),(0,r.kt)("td",null,"                         When set to yes, failures removing the installed product during the upgrade will be                         ignored.",(0,r.kt)("br",null),(0,r.kt)("br",null),"                        When set to no (the default), failures removing the installed product during the upgrade                         will be considered a failure and, depending on the scheduling, roll back the upgrade.                     "),(0,r.kt)("td",null,"\xa0")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"MigrateFeatures"),(0,r.kt)("td",null,(0,r.kt)("a",{href:"../simple_type_yesnotype/"},"YesNoType")),(0,r.kt)("td",null,"                         When set to yes (the default), the MigrateFeatureStates standard action will set the                         feature states of the upgrade product to those of the installed product.",(0,r.kt)("br",null),(0,r.kt)("br",null),"                        When set to no, the installed features have no effect on the upgrade installation.                     "),(0,r.kt)("td",null,"\xa0")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"RemoveFeatures"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"                         A formatted string that contains the list of features to remove from the installed                         product. The default is to remove all features. Note that if you use formatted property                         values that evaluate to an empty string, no features will be removed; only omitting                         this attribute defaults to removing all features.                     "),(0,r.kt)("td",null,"\xa0")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Schedule"),(0,r.kt)("td",null,"Enumeration"),(0,r.kt)("td",null,'                         Determines the scheduling of the RemoveExistingProducts standard action, which is when                         the installed product is removed. The default is "afterInstallValidate" which removes                         the installed product entirely before installing the upgrade product. It\'s slowest but                         gives the most flexibility in changing components and features in the upgrade product.',(0,r.kt)("br",null),(0,r.kt)("br",null),"                        For more information, see ",(0,r.kt)("a",{href:"http://msdn.microsoft.com/en-us/library/aa371197.aspx",target:"_blank"},"RemoveExistingProducts"),".                       This attribute's value must be one of the following:",(0,r.kt)("dl",null,(0,r.kt)("dt",{class:"enumerationValue"},(0,r.kt)("dfn",null,"afterInstallValidate")),(0,r.kt)("dd",null,"                                     (Default) Schedules RemoveExistingProducts after the InstallValidate standard                                     action. This scheduling removes the installed product entirely before installing                                     the upgrade product. It's slowest but gives the most flexibility in changing                                     components and features in the upgrade product. Note that if the installation                                     of the upgrade product fails, the machine will have neither version installed.                                 "),(0,r.kt)("dt",{class:"enumerationValue"},(0,r.kt)("dfn",null,"afterInstallInitialize")),(0,r.kt)("dd",null,"                                     Schedules RemoveExistingProducts after the InstallInitialize standard action.                                     This is similar to the afterInstallValidate scheduling, but if the installation                                     of the upgrade product fails, Windows Installer also rolls back the removal of                                     the installed product -- in other words, reinstalls it.                                 "),(0,r.kt)("dt",{class:"enumerationValue"},(0,r.kt)("dfn",null,"afterInstallExecute")),(0,r.kt)("dd",null,'                                     Schedules RemoveExistingProducts between the InstallExecute and InstallFinalize standard actions.                                     This scheduling installs the upgrade product "on top of" the installed product then lets                                     RemoveExistingProducts uninstall any components that don\'t also exist in the upgrade product.                                     Note that this scheduling requires strict adherence to the component rules because it relies                                     on component reference counts to be accurate during installation of the upgrade product and                                     removal of the installed product. For more information, see                                     ',(0,r.kt)("a",{href:"http://www.joyofsetup.com/2008/12/30/paying-for-upgrades/",target:"_blank"},'                                         Bob Arnson\'s blog post "Paying for Upgrades"                                     ')," for details. If installation of the upgrade product fails, Windows Installer                                     also rolls back the removal of the installed product -- in other words, reinstalls it.                                 "),(0,r.kt)("dt",{class:"enumerationValue"},(0,r.kt)("dfn",null,"afterInstallExecuteAgain")),(0,r.kt)("dd",null,"                                     Schedules RemoveExistingProducts between the InstallExecuteAgain and InstallFinalize standard actions.                                     This is identical to the afterInstallExecute scheduling but after the InstallExecuteAgain standard                                     action instead of InstallExecute.                                 "),(0,r.kt)("dt",{class:"enumerationValue"},(0,r.kt)("dfn",null,"afterInstallFinalize")),(0,r.kt)("dd",null,"                                     Schedules RemoveExistingProducts after the InstallFinalize standard action. This is similar to the                                     afterInstallExecute and afterInstallExecuteAgain schedulings but takes place outside the                                     installation transaction so if installation of the upgrade product fails, Windows Installer does                                     not roll back the removal of the installed product, so the machine will have both versions                                     installed.                                 "))),(0,r.kt)("td",null,"\xa0")))),(0,r.kt)("dt",null,"See Also"),(0,r.kt)("dd",null,(0,r.kt)("a",{href:"../"},"Wix Schema"))))}f.isMDXComponent=!0}}]);