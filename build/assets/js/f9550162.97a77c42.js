"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1944],{4137:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),p=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),d=o,m=u["".concat(i,".").concat(d)]||u[d]||f[d]||c;return t?n.createElement(m,a(a({ref:r},l),{},{components:t})):n.createElement(m,a({ref:r},l))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=d;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<c;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1985:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>a,default:()=>f,frontMatter:()=>c,metadata:()=>s,toc:()=>p});var n=t(7462),o=(t(7294),t(4137));const c={},a="[PDF] pdfcrack",s={unversionedId:"notes/Security/Buster/[PDF]_pdfcrack",id:"notes/Security/Buster/[PDF]_pdfcrack",title:"[PDF] pdfcrack",description:"PDFCrack is a simple tool for recovering passwords from pdf-documents.",source:"@site/docs/notes/Security/Buster/[PDF]_pdfcrack.mdx",sourceDirName:"notes/Security/Buster",slug:"/notes/Security/Buster/[PDF]_pdfcrack",permalink:"/docs/notes/Security/Buster/[PDF]_pdfcrack",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"notes",previous:{title:"[Hash] john",permalink:"/docs/notes/Security/Buster/[Hash]_john"},next:{title:"[Services] hydra",permalink:"/docs/notes/Security/Buster/[Services]_hydra"}},i={},p=[],l={toc:p},u="wrapper";function f(e){let{components:r,...t}=e;return(0,o.kt)(u,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pdf-pdfcrack"},"[PDF]"," pdfcrack"),(0,o.kt)("p",null,"PDFCrack is a simple tool for recovering passwords from pdf-documents."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pdfcrack -f <file_name>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pdfcrack -f <file_name> -w <location_of_wordlist_file>\npdfcrack -f <file_name> -w /usr/share/wordlists/rockyou.txt\n")))}f.isMDXComponent=!0}}]);