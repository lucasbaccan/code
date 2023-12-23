(self.webpackChunkcode=self.webpackChunkcode||[]).push([[4468],{9047:(e,t,n)=>{"use strict";n.d(t,{Z:()=>I});var o=n(7294),s=n(5893);function c(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=o.Children.toArray(e),n=t.find((e=>o.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),c=t.filter((e=>e!==n)),a=n?.props.children;return{mdxAdmonitionTitle:a,rest:c.length>0?(0,s.jsx)(s.Fragment,{children:c}):null}}(e.children),c=e.title??t;return{...e,...c&&{title:c},children:n}}var a=n(512),i=n(5999),r=n(5281);const l={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function d(e){let{type:t,className:n,children:o}=e;return(0,s.jsx)("div",{className:(0,a.Z)(r.k.common.admonition,r.k.common.admonitionType(t),l.admonition,n),children:o})}function u(e){let{icon:t,title:n}=e;return(0,s.jsxs)("div",{className:l.admonitionHeading,children:[(0,s.jsx)("span",{className:l.admonitionIcon,children:t}),n]})}function m(e){let{children:t}=e;return t?(0,s.jsx)("div",{className:l.admonitionContent,children:t}):null}function h(e){const{type:t,icon:n,title:o,children:c,className:a}=e;return(0,s.jsxs)(d,{type:t,className:a,children:[(0,s.jsx)(u,{title:o,icon:n}),(0,s.jsx)(m,{children:c})]})}function p(e){return(0,s.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const f={icon:(0,s.jsx)(p,{}),title:(0,s.jsx)(i.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function g(e){return(0,s.jsx)(h,{...f,...e,className:(0,a.Z)("alert alert--secondary",e.className),children:e.children})}function x(e){return(0,s.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const b={icon:(0,s.jsx)(x,{}),title:(0,s.jsx)(i.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function j(e){return(0,s.jsx)(h,{...b,...e,className:(0,a.Z)("alert alert--success",e.className),children:e.children})}function v(e){return(0,s.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const k={icon:(0,s.jsx)(v,{}),title:(0,s.jsx)(i.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function N(e){return(0,s.jsx)(h,{...k,...e,className:(0,a.Z)("alert alert--info",e.className),children:e.children})}function y(e){return(0,s.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const B={icon:(0,s.jsx)(y,{}),title:(0,s.jsx)(i.Z,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function C(e){return(0,s.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const w={icon:(0,s.jsx)(C,{}),title:(0,s.jsx)(i.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const L={icon:(0,s.jsx)(y,{}),title:(0,s.jsx)(i.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const E={...{note:g,tip:j,info:N,warning:function(e){return(0,s.jsx)(h,{...B,...e,className:(0,a.Z)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,s.jsx)(h,{...w,...e,className:(0,a.Z)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,s.jsx)(g,{title:"secondary",...e}),important:e=>(0,s.jsx)(N,{title:"important",...e}),success:e=>(0,s.jsx)(j,{title:"success",...e}),caution:function(e){return(0,s.jsx)(h,{...L,...e,className:(0,a.Z)("alert alert--warning",e.className),children:e.children})}}};function I(e){const t=c(e),n=(o=t.type,E[o]||(console.warn(`No admonition component found for admonition type "${o}". Using Info as fallback.`),E.info));var o;return(0,s.jsx)(n,{...t})}},9286:(e,t,n)=>{"use strict";n.d(t,{Z:()=>M});var o=n(7294),s=n(2389),c=n(512),a=n(2949),i=n(6668);function r(){const{prism:e}=(0,i.L)(),{colorMode:t}=(0,a.I)(),n=e.theme,o=e.darkTheme||n;return"dark"===t?o:n}var l=n(5281),d=n(7594),u=n.n(d);const m=/title=(?<quote>["'])(?<title>.*?)\1/,h=/\{(?<range>[\d,-]+)\}/,p={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"},lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""}};function f(e,t){const n=e.map((e=>{const{start:n,end:o}=p[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${o})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function g(e,t){let n=e.replace(/\n$/,"");const{language:o,magicComments:s,metastring:c}=t;if(c&&h.test(c)){const e=c.match(h).groups.range;if(0===s.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${c}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=s[0].className,o=u()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(o),code:n}}if(void 0===o)return{lineClassNames:{},code:n};const a=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return f(["js","jsBlock"],t);case"jsx":case"tsx":return f(["js","jsBlock","jsx"],t);case"html":return f(["js","jsBlock","html"],t);case"python":case"py":case"bash":return f(["bash"],t);case"markdown":case"md":return f(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return f(["tex"],t);case"lua":case"haskell":case"sql":return f(["lua"],t);case"wasm":return f(["wasm"],t);default:return f(Object.keys(p).filter((e=>!["lua","wasm","tex","latex","matlab"].includes(e))),t)}}(o,s),i=n.split("\n"),r=Object.fromEntries(s.map((e=>[e.className,{start:0,range:""}]))),l=Object.fromEntries(s.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),d=Object.fromEntries(s.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),m=Object.fromEntries(s.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let u=0;u<i.length;){const e=i[u].match(a);if(!e){u+=1;continue}const t=e.slice(1).find((e=>void 0!==e));l[t]?r[l[t]].range+=`${u},`:d[t]?r[d[t]].start=u:m[t]&&(r[m[t]].range+=`${r[m[t]].start}-${u-1},`),i.splice(u,1)}n=i.join("\n");const g={};return Object.entries(r).forEach((e=>{let[t,{range:n}]=e;u()(n).forEach((e=>{g[e]??=[],g[e].push(t)}))})),{lineClassNames:g,code:n}}const x={codeBlockContainer:"codeBlockContainer_Ckt0"};var b=n(5893);function j(e){let{as:t,...n}=e;const o=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[o,s]=e;const c=t[o];c&&"string"==typeof s&&(n[c]=s)})),n}(r());return(0,b.jsx)(t,{...n,style:o,className:(0,c.Z)(n.className,x.codeBlockContainer,l.k.common.codeBlock)})}const v={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function k(e){let{children:t,className:n}=e;return(0,b.jsx)(j,{as:"pre",tabIndex:0,className:(0,c.Z)(v.codeBlockStandalone,"thin-scrollbar",n),children:(0,b.jsx)("code",{className:v.codeBlockLines,children:t})})}var N=n(902);const y={attributes:!0,characterData:!0,childList:!0,subtree:!0};function B(e,t){const[n,s]=(0,o.useState)(),c=(0,o.useCallback)((()=>{s(e.current?.closest("[role=tabpanel][hidden]"))}),[e,s]);(0,o.useEffect)((()=>{c()}),[c]),function(e,t,n){void 0===n&&(n=y);const s=(0,N.zX)(t),c=(0,N.Ql)(n);(0,o.useEffect)((()=>{const t=new MutationObserver(s);return e&&t.observe(e,c),()=>t.disconnect()}),[e,s,c])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),c())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var C=n(2573);const w={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function L(e){let{line:t,classNames:n,showLineNumbers:o,getLineProps:s,getTokenProps:a}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const i=s({line:t,className:(0,c.Z)(n,o&&w.codeLine)}),r=t.map(((e,t)=>(0,b.jsx)("span",{...a({token:e,key:t})},t)));return(0,b.jsxs)("span",{...i,children:[o?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("span",{className:w.codeLineNumber}),(0,b.jsx)("span",{className:w.codeLineContent,children:r})]}):r,(0,b.jsx)("br",{})]})}var E=n(5999);function I(e){return(0,b.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,b.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function T(e){return(0,b.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,b.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}const Z={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function A(e){let{code:t,className:n}=e;const[s,a]=(0,o.useState)(!1),i=(0,o.useRef)(void 0),r=(0,o.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const o=document.createElement("textarea"),s=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";const c=document.getSelection(),a=c.rangeCount>0&&c.getRangeAt(0);n.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;let i=!1;try{i=document.execCommand("copy")}catch{}o.remove(),a&&(c.removeAllRanges(),c.addRange(a)),s&&s.focus()}(t),a(!0),i.current=window.setTimeout((()=>{a(!1)}),1e3)}),[t]);return(0,o.useEffect)((()=>()=>window.clearTimeout(i.current)),[]),(0,b.jsx)("button",{type:"button","aria-label":s?(0,E.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,E.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,E.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,c.Z)("clean-btn",n,Z.copyButton,s&&Z.copyButtonCopied),onClick:r,children:(0,b.jsxs)("span",{className:Z.copyButtonIcons,"aria-hidden":"true",children:[(0,b.jsx)(I,{className:Z.copyButtonIcon}),(0,b.jsx)(T,{className:Z.copyButtonSuccessIcon})]})})}function S(e){return(0,b.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,b.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}const _={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function z(e){let{className:t,onClick:n,isEnabled:o}=e;const s=(0,E.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,b.jsx)("button",{type:"button",onClick:n,className:(0,c.Z)("clean-btn",t,o&&_.wordWrapButtonEnabled),"aria-label":s,title:s,children:(0,b.jsx)(S,{className:_.wordWrapButtonIcon,"aria-hidden":"true"})})}function H(e){let{children:t,className:n="",metastring:s,title:a,showLineNumbers:l,language:d}=e;const{prism:{defaultLanguage:u,magicComments:h}}=(0,i.L)(),p=function(e){return e?.toLowerCase()}(d??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??u),f=r(),x=function(){const[e,t]=(0,o.useState)(!1),[n,s]=(0,o.useState)(!1),c=(0,o.useRef)(null),a=(0,o.useCallback)((()=>{const n=c.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[c,e]),i=(0,o.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=c.current,n=e>t||c.current.querySelector("code").hasAttribute("style");s(n)}),[c]);return B(c,i),(0,o.useEffect)((()=>{i()}),[e,i]),(0,o.useEffect)((()=>(window.addEventListener("resize",i,{passive:!0}),()=>{window.removeEventListener("resize",i)})),[i]),{codeBlockRef:c,isEnabled:e,isCodeScrollable:n,toggle:a}}(),k=function(e){return e?.match(m)?.groups.title??""}(s)||a,{lineClassNames:N,code:y}=g(t,{metastring:s,language:p,magicComments:h}),w=l??function(e){return Boolean(e?.includes("showLineNumbers"))}(s);return(0,b.jsxs)(j,{as:"div",className:(0,c.Z)(n,p&&!n.includes(`language-${p}`)&&`language-${p}`),children:[k&&(0,b.jsx)("div",{className:v.codeBlockTitle,children:k}),(0,b.jsxs)("div",{className:v.codeBlockContent,children:[(0,b.jsx)(C.y$,{theme:f,code:y,language:p??"text",children:e=>{let{className:t,style:n,tokens:o,getLineProps:s,getTokenProps:a}=e;return(0,b.jsx)("pre",{tabIndex:0,ref:x.codeBlockRef,className:(0,c.Z)(t,v.codeBlock,"thin-scrollbar"),style:n,children:(0,b.jsx)("code",{className:(0,c.Z)(v.codeBlockLines,w&&v.codeBlockLinesWithNumbering),children:o.map(((e,t)=>(0,b.jsx)(L,{line:e,getLineProps:s,getTokenProps:a,classNames:N[t],showLineNumbers:w},t)))})})}}),(0,b.jsxs)("div",{className:v.buttonGroup,children:[(x.isEnabled||x.isCodeScrollable)&&(0,b.jsx)(z,{className:v.codeButton,onClick:()=>x.toggle(),isEnabled:x.isEnabled}),(0,b.jsx)(A,{className:v.codeButton,code:y})]})]})]})}function M(e){let{children:t,...n}=e;const c=(0,s.Z)(),a=function(e){return o.Children.toArray(e).some((e=>(0,o.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),i="string"==typeof a?H:k;return(0,b.jsx)(i,{...n,children:a},String(c))}},7594:(e,t)=>{function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,s,c]=t;if(o&&c){o=parseInt(o),c=parseInt(c);const e=o<c?1:-1;"-"!==s&&".."!==s&&"\u2025"!==s||(c+=e);for(let t=o;t!==c;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},1151:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i,a:()=>a});var o=n(7294);const s={},c=o.createContext(s);function a(e){const t=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(c.Provider,{value:t},e.children)}}}]);