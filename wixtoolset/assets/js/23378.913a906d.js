"use strict";(self.webpackChunkwixweb=self.webpackChunkwixweb||[]).push([[23378],{51224:(e,t,r)=>{r.d(t,{Z:()=>f});var n=r(67294),a=r(86010),l=r(94340),o=r(64767),i=r(61596),s=r(27692);const c={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};function m({sidebar:e}){return n.createElement("aside",{className:"col col--3"},n.createElement("nav",{className:(0,a.Z)(c.sidebar,"thin-scrollbar"),"aria-label":(0,s.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,a.Z)(c.sidebarItemTitle,"margin-bottom--md")},e.title),n.createElement("ul",{className:(0,a.Z)(c.sidebarItemList,"clean-list")},e.items.map((e=>n.createElement("li",{key:e.permalink,className:c.sidebarItem},n.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:c.sidebarItemLink,activeClassName:c.sidebarItemLinkActive},e.title)))))))}var u=r(18901);function d({sidebar:e}){return n.createElement("ul",{className:"menu__list"},e.items.map((e=>n.createElement("li",{key:e.permalink,className:"menu__list-item"},n.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function g(e){return n.createElement(u.Zo,{component:d,props:e})}function p({sidebar:e}){const t=(0,o.i)();return(null==e?void 0:e.items.length)?"mobile"===t?n.createElement(g,{sidebar:e}):n.createElement(m,{sidebar:e}):null}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function f(e){const{sidebar:t,toc:r,children:o}=e,i=b(e,["sidebar","toc","children"]),s=t&&t.items.length>0;return n.createElement(l.Z,i,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement(p,{sidebar:t}),n.createElement("main",{className:(0,a.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},o),r&&n.createElement("div",{className:"col col--2"},r))))}},83766:(e,t,r)=>{r.d(t,{Z:()=>$});var n=r(67294),a=r(86010),l=r(33895),o=r(63278);function i({children:e,className:t}){const{frontMatter:r,assets:a,metadata:{description:i}}=(0,l.C)(),{withBaseUrl:s}=(0,o.C)();var c;const m=null!==(c=a.image)&&void 0!==c?c:r.image;var u;const d=null!==(u=r.keywords)&&void 0!==u?u:[];return n.createElement("article",{className:t,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},i&&n.createElement("meta",{itemProp:"description",content:i}),m&&n.createElement("link",{itemProp:"image",href:s(m,{absolute:!0})}),d.length>0&&n.createElement("meta",{itemProp:"keywords",content:d.join(",")}),e)}var s=r(61596);const c={title:"title_f1Hy"};function m({className:e}){const{metadata:t,isBlogPostPage:r}=(0,l.C)(),{permalink:o,title:i}=t,m=r?"h1":"h2";return n.createElement(m,{className:(0,a.Z)(c.title,e),itemProp:"headline"},r?i:n.createElement(s.Z,{itemProp:"url",to:o},i))}var u=r(27692),d=r(70397);const g=["zero","one","two","few","many","other"];function p(e){return g.filter((t=>e.includes(t)))}const b={locale:"en",pluralForms:p(["one","other"]),select:e=>1===e?"one":"other"};function f(){const{i18n:{currentLocale:e}}=(0,d.Z)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:p(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),b}}),[e])}function h(){const e=f();return{selectMessage:(t,r)=>function(e,t,r){const n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const a=r.select(t),l=r.pluralForms.indexOf(a);return n[Math.min(l,n.length-1)]}(r,t,e)}}const E={container:"container_mt6G"};function v({readingTime:e}){const t=function(){const{selectMessage:e}=h();return t=>{const r=Math.ceil(t);return e(r,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:r}))}}();return n.createElement(n.Fragment,null,t(e))}function P({date:e,formattedDate:t}){return n.createElement("time",{dateTime:e,itemProp:"datePublished"},t)}function y(){return n.createElement(n.Fragment,null," \xb7 ")}function O({className:e}){const{metadata:t}=(0,l.C)(),{date:r,formattedDate:o,readingTime:i}=t;return n.createElement("div",{className:(0,a.Z)(E.container,"margin-vert--md",e)},n.createElement(P,{date:r,formattedDate:o}),void 0!==i&&n.createElement(n.Fragment,null,n.createElement(y,null),n.createElement(v,{readingTime:i})))}function w(e){return e.href?n.createElement(s.Z,e):n.createElement(n.Fragment,null,e.children)}function N({author:e,className:t}){const{name:r,title:l,url:o,imageURL:i,email:s}=e,c=o||s&&`mailto:${s}`||void 0;return n.createElement("div",{className:(0,a.Z)("avatar margin-bottom--sm",t)},i&&n.createElement(w,{href:c,className:"avatar__photo-link"},n.createElement("img",{className:"avatar__photo",src:i,alt:r,itemProp:"image"})),r&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(w,{href:c,itemProp:"url"},n.createElement("span",{itemProp:"name"},r))),l&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))}const k={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function _(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){_(e,t,r[t])}))}return e}function Z(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function I({className:e}){const{metadata:{authors:t},assets:r}=(0,l.C)();if(0===t.length)return null;const o=t.every((({name:e})=>!e));var i;return n.createElement("div",{className:(0,a.Z)("margin-top--md margin-bottom--sm",o?k.imageOnlyAuthorRow:"row",e)},t.map(((e,t)=>n.createElement("div",{className:(0,a.Z)(!o&&"col col--6",o?k.imageOnlyAuthorCol:k.authorCol),key:t},n.createElement(N,{author:Z(j({},e),{imageURL:null!==(i=r.authorsImageUrls[t])&&void 0!==i?i:e.imageURL})})))))}function C(){return n.createElement("header",null,n.createElement(m,null),n.createElement(O,null),n.createElement(I,null))}var T=r(92831),F=r(99660);function L({children:e,className:t}){const{isBlogPostPage:r}=(0,l.C)();return n.createElement("div",{id:r?T.blogPostContainerID:void 0,className:(0,a.Z)("markdown",t),itemProp:"articleBody"},n.createElement(F.Z,null,e))}var x=r(53597),B=r(74347);function D(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function A(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function M(){return n.createElement("b",null,n.createElement(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function R(e){const{blogPostTitle:t}=e,r=A(e,["blogPostTitle"]);return n.createElement(s.Z,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){D(e,t,r[t])}))}return e}({"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},r),n.createElement(M,null))}const S={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_mRVl"};function U(){const{metadata:e,isBlogPostPage:t}=(0,l.C)(),{tags:r,title:o,editUrl:i,hasTruncateMarker:s}=e,c=!t&&s,m=r.length>0;return m||c||i?n.createElement("footer",{className:(0,a.Z)("row docusaurus-mt-lg",t&&S.blogPostFooterDetailsFull)},m&&n.createElement("div",{className:(0,a.Z)("col",{"col--9":c})},n.createElement(B.Z,{tags:r})),t&&i&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(x.Z,{editUrl:i})),c&&n.createElement("div",{className:(0,a.Z)("col text--right",{"col--3":m})},n.createElement(R,{blogPostTitle:o,to:e.permalink}))):null}function $({children:e,className:t}){const r=function(){const{isBlogPostPage:e}=(0,l.C)();return e?void 0:"margin-bottom--xl"}();return n.createElement(i,{className:(0,a.Z)(r,t)},n.createElement(C,null),n.createElement(L,null,e),n.createElement(U,null))}},33895:(e,t,r)=>{r.d(t,{C:()=>i,n:()=>o});var n=r(67294),a=r(9480);const l=n.createContext(null);function o({children:e,content:t,isBlogPostPage:r=!1}){const a=function({content:e,isBlogPostPage:t}){return(0,n.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,toc:e.toc,isBlogPostPage:t})),[e,t])}({content:t,isBlogPostPage:r});return n.createElement(l.Provider,{value:a},e)}function i(){const e=(0,n.useContext)(l);if(null===e)throw new a.i6("BlogPostProvider");return e}}}]);