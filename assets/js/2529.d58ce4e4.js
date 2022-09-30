"use strict";(self.webpackChunkcode=self.webpackChunkcode||[]).push([[2529],{9058:(e,t,a)=>{a.d(t,{Z:()=>Z});var n=a(7294),l=a(6010),r=a(215),s=a(7524),i=a(9960),o=a(5999);const c="sidebar_re4s",m="sidebarItemTitle_pO2u",u="sidebarItemList_Yudw",d="sidebarItem__DBe",g="sidebarItemLink_mo7H",p="sidebarItemLinkActive_I1ZP";function h(e){let{sidebar:t}=e;return n.createElement("aside",{className:"col col--3"},n.createElement("nav",{className:(0,l.Z)(c,"thin-scrollbar"),"aria-label":(0,o.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(m,"margin-bottom--md")},t.title),n.createElement("ul",{className:(0,l.Z)(u,"clean-list")},t.items.map((e=>n.createElement("li",{key:e.permalink,className:d},n.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:p},e.title)))))))}var E=a(3102);function f(e){let{sidebar:t}=e;return n.createElement("ul",{className:"menu__list"},t.items.map((e=>n.createElement("li",{key:e.permalink,className:"menu__list-item"},n.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function v(e){return n.createElement(E.Zo,{component:f,props:e})}function b(e){let{sidebar:t}=e;const a=(0,s.i)();return null!=t&&t.items.length?"mobile"===a?n.createElement(v,{sidebar:t}):n.createElement(h,{sidebar:t}):null}function Z(e){const{sidebar:t,toc:a,children:s,...i}=e,o=t&&t.items.length>0;return n.createElement(r.Z,i,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement(b,{sidebar:t}),n.createElement("main",{className:(0,l.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&n.createElement("div",{className:"col col--2"},a))))}},390:(e,t,a)=>{a.d(t,{Z:()=>R});var n=a(7294),l=a(6010),r=a(9460),s=a(4996);function i(e){let{children:t,className:a}=e;const{frontMatter:l,assets:i}=(0,r.C)(),{withBaseUrl:o}=(0,s.C)(),c=i.image??l.image;return n.createElement("article",{className:a,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},c&&n.createElement("meta",{itemProp:"image",content:o(c,{absolute:!0})}),t)}var o=a(9960);const c="title_f1Hy";function m(e){let{className:t}=e;const{metadata:a,isBlogPostPage:s}=(0,r.C)(),{permalink:i,title:m}=a,u=s?"h1":"h2";return n.createElement(u,{className:(0,l.Z)(c,t),itemProp:"headline"},s?m:n.createElement(o.Z,{itemProp:"url",to:i},m))}var u=a(5999),d=a(8824);const g="container_mt6G";function p(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,d.c)();return t=>{const a=Math.ceil(t);return e(a,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return n.createElement(n.Fragment,null,a(t))}function h(e){let{date:t,formattedDate:a}=e;return n.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function E(){return n.createElement(n.Fragment,null," \xb7 ")}function f(e){let{className:t}=e;const{metadata:a}=(0,r.C)(),{date:s,formattedDate:i,readingTime:o}=a;return n.createElement("div",{className:(0,l.Z)(g,"margin-vert--md",t)},n.createElement(h,{date:s,formattedDate:i}),void 0!==o&&n.createElement(n.Fragment,null,n.createElement(E,null),n.createElement(p,{readingTime:o})))}function v(e){return e.href?n.createElement(o.Z,e):n.createElement(n.Fragment,null,e.children)}function b(e){let{author:t,className:a}=e;const{name:r,title:s,url:i,imageURL:o,email:c}=t,m=i||c&&`mailto:${c}`||void 0;return n.createElement("div",{className:(0,l.Z)("avatar margin-bottom--sm",a)},o&&n.createElement(v,{href:m,className:"avatar__photo-link"},n.createElement("img",{className:"avatar__photo",src:o,alt:r})),r&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(v,{href:m,itemProp:"url"},n.createElement("span",{itemProp:"name"},r))),s&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},s)))}const Z="authorCol_Hf19",N="imageOnlyAuthorRow_pa_O",_="imageOnlyAuthorCol_G86a";function k(e){let{className:t}=e;const{metadata:{authors:a},assets:s}=(0,r.C)();if(0===a.length)return null;const i=a.every((e=>{let{name:t}=e;return!t}));return n.createElement("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",i?N:"row",t)},a.map(((e,t)=>n.createElement("div",{className:(0,l.Z)(!i&&"col col--6",i?_:Z),key:t},n.createElement(b,{author:{...e,imageURL:s.authorsImageUrls[t]??e.imageURL}})))))}function P(){return n.createElement("header",null,n.createElement(m,null),n.createElement(f,null),n.createElement(k,null))}var y=a(8780),T=a(76);function C(e){let{children:t,className:a}=e;const{isBlogPostPage:s}=(0,r.C)();return n.createElement("div",{id:s?y.blogPostContainerID:void 0,className:(0,l.Z)("markdown",a),itemProp:"articleBody"},n.createElement(T.Z,null,t))}var w=a(4881),x=a(1526),L=a(7462);function B(){return n.createElement("b",null,n.createElement(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function F(e){const{blogPostTitle:t,...a}=e;return n.createElement(o.Z,(0,L.Z)({"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),n.createElement(B,null))}const I="blogPostFooterDetailsFull_mRVl";function M(){const{metadata:e,isBlogPostPage:t}=(0,r.C)(),{tags:a,title:s,editUrl:i,hasTruncateMarker:o}=e,c=!t&&o,m=a.length>0;return m||c||i?n.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",t&&I)},m&&n.createElement("div",{className:(0,l.Z)("col",{"col--9":c})},n.createElement(x.Z,{tags:a})),t&&i&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(w.Z,{editUrl:i})),c&&n.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":m})},n.createElement(F,{blogPostTitle:s,to:e.permalink}))):null}function R(e){let{children:t,className:a}=e;const s=function(){const{isBlogPostPage:e}=(0,r.C)();return e?void 0:"margin-bottom--xl"}();return n.createElement(i,{className:(0,l.Z)(s,a)},n.createElement(P,null),n.createElement(C,null,t),n.createElement(M,null))}},4881:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(7294),l=a(5999),r=a(5281),s=a(7462),i=a(6010);const o="iconEdit_Z9Sw";function c(e){let{className:t,...a}=e;return n.createElement("svg",(0,s.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(o,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function m(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:r.k.common.editThisPage},n.createElement(c,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},2503:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(7462),l=a(7294),r=a(6010),s=a(5999),i=a(6668);const o="anchorWithStickyNavbar_LWe7",c="anchorWithHideOnScrollNavbar_WYt5";function m(e){let{as:t,id:a,...m}=e;const{navbar:{hideOnScroll:u}}=(0,i.L)();return"h1"!==t&&a?l.createElement(t,(0,n.Z)({},m,{className:(0,r.Z)("anchor",u?c:o),id:a}),m.children,l.createElement("a",{className:"hash-link",href:`#${a}`,title:(0,s.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l.createElement(t,(0,n.Z)({},m,{id:void 0}))}},76:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(7294),l=a(3905),r=a(7462),s=a(5742);var i=a(814);var o=a(9960);var c=a(6010),m=a(2389),u=a(6043);const d="details_lb9f",g="isBrowser_bmU9",p="collapsibleContent_i85q";function h(e){return!!e&&("SUMMARY"===e.tagName||h(e.parentElement))}function E(e,t){return!!e&&(e===t||E(e.parentElement,t))}function f(e){let{summary:t,children:a,...l}=e;const s=(0,m.Z)(),i=(0,n.useRef)(null),{collapsed:o,setCollapsed:f}=(0,u.u)({initialState:!l.open}),[v,b]=(0,n.useState)(l.open);return n.createElement("details",(0,r.Z)({},l,{ref:i,open:v,"data-collapsed":o,className:(0,c.Z)(d,s&&g,l.className),onMouseDown:e=>{h(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;h(t)&&E(t,i.current)&&(e.preventDefault(),o?(f(!1),b(!0)):f(!0))}}),t??n.createElement("summary",null,"Details"),n.createElement(u.z,{lazy:!1,collapsed:o,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{f(e),b(!e)}},n.createElement("div",{className:p},a)))}const v="details_b_Ee";function b(e){let{...t}=e;return n.createElement(f,(0,r.Z)({},t,{className:(0,c.Z)("alert alert--info",v,t.className)}))}var Z=a(2503);function N(e){return n.createElement(Z.Z,e)}const _="containsTaskList_mC6p";const k="img_ev3q";const P={head:function(e){const t=n.Children.map(e.children,(e=>n.isValidElement(e)?function(e){var t;if(null!=(t=e.props)&&t.mdxType&&e.props.originalType){const{mdxType:t,originalType:a,...l}=e.props;return n.createElement(e.props.originalType,l)}return e}(e):e));return n.createElement(s.Z,e,t)},code:function(e){const t=["a","b","big","i","span","em","strong","sup","sub","small"];return n.Children.toArray(e.children).every((e=>{var a;return"string"==typeof e&&!e.includes("\n")||(0,n.isValidElement)(e)&&t.includes(null==(a=e.props)?void 0:a.mdxType)}))?n.createElement("code",e):n.createElement(i.Z,e)},a:function(e){return n.createElement(o.Z,e)},pre:function(e){var t;return n.createElement(i.Z,(0,n.isValidElement)(e.children)&&"code"===(null==(t=e.children.props)?void 0:t.originalType)?e.children.props:{...e})},details:function(e){const t=n.Children.toArray(e.children),a=t.find((e=>{var t;return n.isValidElement(e)&&"summary"===(null==(t=e.props)?void 0:t.mdxType)})),l=n.createElement(n.Fragment,null,t.filter((e=>e!==a)));return n.createElement(b,(0,r.Z)({},e,{summary:a}),l)},ul:function(e){return n.createElement("ul",(0,r.Z)({},e,{className:(t=e.className,(0,c.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&_))}));var t},img:function(e){return n.createElement("img",(0,r.Z)({loading:"lazy"},e,{className:(t=e.className,(0,c.Z)(t,k))}));var t},h1:e=>n.createElement(N,(0,r.Z)({as:"h1"},e)),h2:e=>n.createElement(N,(0,r.Z)({as:"h2"},e)),h3:e=>n.createElement(N,(0,r.Z)({as:"h3"},e)),h4:e=>n.createElement(N,(0,r.Z)({as:"h4"},e)),h5:e=>n.createElement(N,(0,r.Z)({as:"h5"},e)),h6:e=>n.createElement(N,(0,r.Z)({as:"h6"},e)),admonition:a(3612).Z};function y(e){let{children:t}=e;return n.createElement(l.Zo,{components:P},t)}},2244:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),l=a(6010),r=a(9960);function s(e){const{permalink:t,title:a,subLabel:s,isNext:i}=e;return n.createElement(r.Z,{className:(0,l.Z)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},s&&n.createElement("div",{className:"pagination-nav__sublabel"},s),n.createElement("div",{className:"pagination-nav__label"},a))}},3008:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7294),l=a(6010),r=a(9960);const s="tag_zVej",i="tagRegular_sFm0",o="tagWithCount_h2kH";function c(e){let{permalink:t,label:a,count:c}=e;return n.createElement(r.Z,{href:t,className:(0,l.Z)(s,c?o:i)},a,c&&n.createElement("span",null,c))}},1526:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7294),l=a(6010),r=a(5999),s=a(3008);const i="tags_jXut",o="tag_QGVx";function c(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(i,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:o},n.createElement(s.Z,{label:t,permalink:a}))}))))}},9460:(e,t,a)=>{a.d(t,{C:()=>i,n:()=>s});var n=a(7294),l=a(902);const r=n.createContext(null);function s(e){let{children:t,content:a,isBlogPostPage:l=!1}=e;const s=function(e){let{content:t,isBlogPostPage:a}=e;return(0,n.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:l});return n.createElement(r.Provider,{value:s},t)}function i(){const e=(0,n.useContext)(r);if(null===e)throw new l.i6("BlogPostProvider");return e}},8824:(e,t,a)=>{a.d(t,{c:()=>c});var n=a(7294),l=a(2263);const r=["zero","one","two","few","many","other"];function s(e){return r.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,l.Z)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function c(){const e=o();return{selectMessage:(t,a)=>function(e,t,a){const n=e.split("|");if(1===n.length)return n[0];n.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const l=a.select(t),r=a.pluralForms.indexOf(l);return n[Math.min(r,n.length-1)]}(a,t,e)}}}}]);