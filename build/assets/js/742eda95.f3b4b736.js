"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4984],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(r),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||c;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var l=2;l<c;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2915:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var n=r(7462),o=(r(7294),r(4137));const c={},i="[HTTP] curl",a={unversionedId:"notes/Security/Others/[HTTP]_curl",id:"notes/Security/Others/[HTTP]_curl",title:"[HTTP] curl",description:"to get HTTP responds",source:"@site/docs/notes/Security/Others/[HTTP]_curl.mdx",sourceDirName:"notes/Security/Others",slug:"/notes/Security/Others/[HTTP]_curl",permalink:"/docs/notes/Security/Others/[HTTP]_curl",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"notes",previous:{title:"[Services] General Services",permalink:"/docs/notes/Security/Networking/[Services]_general_services"},next:{title:"[Sec] Privilege Escalation",permalink:"/docs/notes/Security/Others/[Sec]_privilege_escalation"}},s={},l=[{value:"Using <code>HEAD</code> method",id:"using-head-method",level:2}],u={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"http-curl"},"[HTTP]"," ",(0,o.kt)("inlineCode",{parentName:"h1"},"curl")),(0,o.kt)("p",null,"to get HTTP responds"),(0,o.kt)("h2",{id:"using-head-method"},"Using ",(0,o.kt)("inlineCode",{parentName:"h2"},"HEAD")," method"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -I HEAD -i http://www.somewebsite.com\n")))}d.isMDXComponent=!0}}]);