"use strict";(self.webpackChunkcode=self.webpackChunkcode||[]).push([[3085],{591:(e,n,t)=>{t.d(n,{Z:()=>H});var s=t(7294),a=t(1151),i=t(5742),l=t(9286),r=t(5893);var c=t(9960);var o=t(512),d=t(2389),u=t(6043);const m={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function f(e){return!!e&&("SUMMARY"===e.tagName||f(e.parentElement))}function h(e,n){return!!e&&(e===n||h(e.parentElement,n))}function x(e){let{summary:n,children:t,...a}=e;const i=(0,d.Z)(),l=(0,s.useRef)(null),{collapsed:c,setCollapsed:x}=(0,u.u)({initialState:!a.open}),[v,g]=(0,s.useState)(a.open),p=s.isValidElement(n)?n:(0,r.jsx)("summary",{children:n??"Details"});return(0,r.jsxs)("details",{...a,ref:l,open:v,"data-collapsed":c,className:(0,o.Z)(m.details,i&&m.isBrowser,a.className),onMouseDown:e=>{f(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const n=e.target;f(n)&&h(n,l.current)&&(e.preventDefault(),c?(x(!1),g(!0)):x(!0))},children:[p,(0,r.jsx)(u.z,{lazy:!1,collapsed:c,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{x(e),g(!e)},children:(0,r.jsx)("div",{className:m.collapsibleContent,children:t})})]})}const v={details:"details_b_Ee"},g="alert alert--info";function p(e){let{...n}=e;return(0,r.jsx)(x,{...n,className:(0,o.Z)(g,v.details,n.className)})}function j(e){const n=s.Children.toArray(e.children),t=n.find((e=>s.isValidElement(e)&&"summary"===e.type)),a=(0,r.jsx)(r.Fragment,{children:n.filter((e=>e!==t))});return(0,r.jsx)(p,{...e,summary:t,children:a})}var N=t(2503);function C(e){return(0,r.jsx)(N.Z,{...e})}const L={containsTaskList:"containsTaskList_mC6p"};function b(e){if(void 0!==e)return(0,o.Z)(e,e?.includes("contains-task-list")&&L.containsTaskList)}const Z={img:"img_ev3q"};var k=t(9047);const _={Head:i.Z,details:j,Details:j,code:function(e){return s.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))?(0,r.jsx)("code",{...e}):(0,r.jsx)(l.Z,{...e})},a:function(e){return(0,r.jsx)(c.Z,{...e})},pre:function(e){return(0,r.jsx)(r.Fragment,{children:e.children})},ul:function(e){return(0,r.jsx)("ul",{...e,className:b(e.className)})},img:function(e){return(0,r.jsx)("img",{loading:"lazy",...e,className:(n=e.className,(0,o.Z)(n,Z.img))});var n},h1:e=>(0,r.jsx)(C,{as:"h1",...e}),h2:e=>(0,r.jsx)(C,{as:"h2",...e}),h3:e=>(0,r.jsx)(C,{as:"h3",...e}),h4:e=>(0,r.jsx)(C,{as:"h4",...e}),h5:e=>(0,r.jsx)(C,{as:"h5",...e}),h6:e=>(0,r.jsx)(C,{as:"h6",...e}),admonition:k.Z,mermaid:()=>null};function H(e){let{children:n}=e;return(0,r.jsx)(a.Z,{components:_,children:n})}},4247:(e,n,t)=>{t.r(n),t.d(n,{default:()=>m});t(7294);var s=t(512),a=t(1944),i=t(5281),l=t(8862),r=t(591),c=t(9407),o=t(2212);const d={mdxPageWrapper:"mdxPageWrapper_j9I6"};var u=t(5893);function m(e){const{content:n}=e,{metadata:{title:t,description:m,frontMatter:f,unlisted:h},assets:x}=n,{keywords:v,wrapperClassName:g,hide_table_of_contents:p}=f,j=x.image??f.image;return(0,u.jsx)(a.FG,{className:(0,s.Z)(g??i.k.wrapper.mdxPages,i.k.page.mdxPage),children:(0,u.jsxs)(l.Z,{children:[(0,u.jsx)(a.d,{title:t,description:m,keywords:v,image:j}),(0,u.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,u.jsxs)("div",{className:(0,s.Z)("row",d.mdxPageWrapper),children:[(0,u.jsxs)("div",{className:(0,s.Z)("col",!p&&"col--8"),children:[h&&(0,u.jsx)(o.Z,{}),(0,u.jsx)("article",{children:(0,u.jsx)(r.Z,{children:(0,u.jsx)(n,{})})})]}),!p&&n.toc.length>0&&(0,u.jsx)("div",{className:"col col--2",children:(0,u.jsx)(c.Z,{toc:n.toc,minHeadingLevel:f.toc_min_heading_level,maxHeadingLevel:f.toc_max_heading_level})})]})})]})})}},9407:(e,n,t)=>{t.d(n,{Z:()=>o});t(7294);var s=t(512),a=t(3743);const i={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var l=t(5893);const r="table-of-contents__link toc-highlight",c="table-of-contents__link--active";function o(e){let{className:n,...t}=e;return(0,l.jsx)("div",{className:(0,s.Z)(i.tableOfContents,"thin-scrollbar",n),children:(0,l.jsx)(a.Z,{...t,linkClassName:r,linkActiveClassName:c})})}},3743:(e,n,t)=>{t.d(n,{Z:()=>x});var s=t(7294),a=t(6668);function i(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const s=t.slice(2,e.level);e.parentIndex=Math.max(...s),t[e.level]=n}));const s=[];return n.forEach((e=>{const{parentIndex:t,...a}=e;t>=0?n[t].children.push(a):s.push(a)})),s}function l(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:s}=e;return n.flatMap((e=>{const n=l({toc:e.children,minHeadingLevel:t,maxHeadingLevel:s});return function(e){return e.level>=t&&e.level<=s}(e)?[{...e,children:n}]:n}))}function r(e){const n=e.getBoundingClientRect();return n.top===n.bottom?r(e.parentNode):n}function c(e,n){let{anchorTopOffset:t}=n;const s=e.find((e=>r(e).top>=t));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(r(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function o(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:n}}=(0,a.L)();return(0,s.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,s.useRef)(void 0),t=o();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:a,minHeadingLevel:i,maxHeadingLevel:l}=e;function r(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),r=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const s=[];for(let a=n;a<=t;a+=1)s.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:i,maxHeadingLevel:l}),o=c(r,{anchorTopOffset:t.current}),d=e.find((e=>o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(a),e.classList.add(a),n.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,t])}var u=t(9960),m=t(5893);function f(e){let{toc:n,className:t,linkClassName:s,isChild:a}=e;return n.length?(0,m.jsx)("ul",{className:a?void 0:t,children:n.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.Z,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(f,{isChild:!0,toc:e.children,className:t,linkClassName:s})]},e.id)))}):null}const h=s.memo(f);function x(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:o,maxHeadingLevel:u,...f}=e;const x=(0,a.L)(),v=o??x.tableOfContents.minHeadingLevel,g=u??x.tableOfContents.maxHeadingLevel,p=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return(0,s.useMemo)((()=>l({toc:i(n),minHeadingLevel:t,maxHeadingLevel:a})),[n,t,a])}({toc:n,minHeadingLevel:v,maxHeadingLevel:g});return d((0,s.useMemo)((()=>{if(r&&c)return{linkClassName:r,linkActiveClassName:c,minHeadingLevel:v,maxHeadingLevel:g}}),[r,c,v,g])),(0,m.jsx)(h,{toc:p,className:t,linkClassName:r,...f})}},2212:(e,n,t)=>{t.d(n,{Z:()=>f});t(7294);var s=t(512),a=t(5999),i=t(5742),l=t(5893);function r(){return(0,l.jsx)(a.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function c(){return(0,l.jsx)(a.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,l.jsx)(i.Z,{children:(0,l.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=t(5281),u=t(9047);function m(e){let{className:n}=e;return(0,l.jsx)(u.Z,{type:"caution",title:(0,l.jsx)(r,{}),className:(0,s.Z)(n,d.k.common.unlistedBanner),children:(0,l.jsx)(c,{})})}function f(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{}),(0,l.jsx)(m,{...e})]})}}}]);