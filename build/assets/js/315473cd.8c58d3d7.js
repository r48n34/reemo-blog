"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4598],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7852:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(4137));const a={sidebar_position:4},i="Sub Domain Setting",s={unversionedId:"notes/Linux/Nginx/Sub_Domain",id:"notes/Linux/Nginx/Sub_Domain",title:"Sub Domain Setting",description:"Step 0: Set up A record in AWS / Linode / Other platform",source:"@site/docs/notes/Linux/Nginx/Sub_Domain.md",sourceDirName:"notes/Linux/Nginx",slug:"/notes/Linux/Nginx/Sub_Domain",permalink:"/docs/notes/Linux/Nginx/Sub_Domain",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"notes",previous:{title:"Reverse Proxy Nodejs",permalink:"/docs/notes/Linux/Nginx/Reverse_Proxy_Nodejs"},next:{title:"[Manager] pm2",permalink:"/docs/notes/Linux/pm2_basic"}},p={},l=[{value:"Step 0: Set up A record in AWS / Linode / Other platform",id:"step-0-set-up-a-record-in-aws--linode--other-platform",level:2},{value:"Step 1: Settings",id:"step-1-settings",level:2},{value:"Step 2: Restart services",id:"step-2-restart-services",level:2}],c={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sub-domain-setting"},"Sub Domain Setting"),(0,o.kt)("h2",{id:"step-0-set-up-a-record-in-aws--linode--other-platform"},"Step 0: Set up A record in AWS / Linode / Other platform"),(0,o.kt)("p",null,"Set a ",(0,o.kt)("inlineCode",{parentName:"p"},"A/AAAA Record")," in your cloud services like the following:  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"api.r48n34.me"),"  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"blog.r48n34.me"),"  ")),(0,o.kt)("h2",{id:"step-1-settings"},"Step 1: Settings"),(0,o.kt)("p",null,"Goto ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/nginx/sites-available/default")," and add the following code in ",(0,o.kt)("inlineCode",{parentName:"p"},"default")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"server{\n    listen 80;\n\n    server_name api.r48n34.me; # Sub domain name\n    client_max_body_size 100M; # Optional for form uplaoding, can skip it\n\n    location / {\n        proxy_pass http://localhost:8085;\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection 'upgrade';\n        proxy_set_header Host $host;\n        proxy_cache_bypass $http_upgrade;\n    }\n}\n\nserver{\n    listen 80;\n\n    server_name blog.r48n34.me; # other Sub domain name\n    client_max_body_size 100M; \n\n    location / {\n        proxy_pass http://localhost:8086;\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection 'upgrade';\n        proxy_set_header Host $host;\n        proxy_cache_bypass $http_upgrade;\n    }\n}\n")),(0,o.kt)("h2",{id:"step-2-restart-services"},"Step 2: Restart services"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nginx -t\nsudo service nginx restart\n")))}d.isMDXComponent=!0}}]);