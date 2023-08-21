"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3758],{4137:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),f=i,h=p["".concat(o,".").concat(f)]||p[f]||d[f]||a;return r?n.createElement(h,l(l({ref:t},c),{},{components:r})):n.createElement(h,l({ref:t},c))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=f;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:i,l[1]=s;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6691:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=r(7462),i=(r(7294),r(4137));const a={},l="[Hash] Exam file hex",s={unversionedId:"notes/Security/Forensics/[Hash]_file_hex",id:"notes/Security/Forensics/[Hash]_file_hex",title:"[Hash] Exam file hex",description:"Online viewer",source:"@site/docs/notes/Security/Forensics/[Hash]_file_hex.mdx",sourceDirName:"notes/Security/Forensics",slug:"/notes/Security/Forensics/[Hash]_file_hex",permalink:"/docs/notes/Security/Forensics/[Hash]_file_hex",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"notes",previous:{title:"Redis",permalink:"/docs/notes/Security/DB Services/redis"},next:{title:"[Hash] Hash base Tools",permalink:"/docs/notes/Security/Forensics/[Hash]_math"}},o={},u=[{value:"Online viewer",id:"online-viewer",level:2},{value:"In linux with <code>xxd</code>",id:"in-linux-with-xxd",level:2},{value:"Basic usage",id:"basic-usage",level:3},{value:"Binary Display",id:"binary-display",level:3},{value:"Hex Upper Case",id:"hex-upper-case",level:3},{value:"File signatures",id:"file-signatures",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"hash-exam-file-hex"},"[Hash]"," Exam file hex"),(0,i.kt)("h2",{id:"online-viewer"},"Online viewer"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://hexed.it/"},"https://hexed.it/")),(0,i.kt)("h2",{id:"in-linux-with-xxd"},"In linux with ",(0,i.kt)("inlineCode",{parentName:"h2"},"xxd")),(0,i.kt)("h3",{id:"basic-usage"},"Basic usage"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Output ",(0,i.kt)("inlineCode",{parentName:"li"},"fa0c")," ect")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"xxd hello.txt\n")),(0,i.kt)("h3",{id:"binary-display"},"Binary Display"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Output ",(0,i.kt)("inlineCode",{parentName:"li"},"00101101")," ect")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"xxd -b datafile.txt\n")),(0,i.kt)("h3",{id:"hex-upper-case"},"Hex Upper Case"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Output ",(0,i.kt)("inlineCode",{parentName:"li"},"FA0C")," ect")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"xxd -u datafile.txt\n")),(0,i.kt)("h2",{id:"file-signatures"},"File signatures"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/List_of_file_signatures"},"https://en.wikipedia.org/wiki/List_of_file_signatures"),"  "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.garykessler.net/library/file_sigs.html"},"https://www.garykessler.net/library/file_sigs.html"))))}d.isMDXComponent=!0}}]);