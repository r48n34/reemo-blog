"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4883],{4137:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,b=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(b,s(s({ref:t},c),{},{components:r})):n.createElement(b,s({ref:t},c))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[d]="string"==typeof e?e:o,s[1]=a;for(var u=2;u<i;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9981:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var n=r(7462),o=(r(7294),r(4137));const i={},s="[Web] gobuster",a={unversionedId:"notes/Security/Buster/[Web]_gobuster",id:"notes/Security/Buster/[Web]_gobuster",title:"[Web] gobuster",description:"https://cybersecbits.com/gobuster-finding-web-files-and-directories",source:"@site/docs/notes/Security/Buster/[Web]_gobuster.mdx",sourceDirName:"notes/Security/Buster",slug:"/notes/Security/Buster/[Web]_gobuster",permalink:"/docs/notes/Security/Buster/[Web]_gobuster",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"notes",previous:{title:"[Web] ffuf",permalink:"/docs/notes/Security/Buster/[Web]_ffuf"},next:{title:"[Web] wfuzz",permalink:"/docs/notes/Security/Buster/[Web]_wfuzz"}},l={},u=[{value:"Mode options",id:"mode-options",level:2},{value:"Dir mode",id:"dir-mode",level:2},{value:"Basic usage",id:"basic-usage",level:3},{value:"With Cookies",id:"with-cookies",level:3},{value:"Specific <code>.html</code> and <code>.php</code>",id:"specific-html-and-php",level:3},{value:"DNS mode",id:"dns-mode",level:2},{value:"Basic usage",id:"basic-usage-1",level:3},{value:"Shows ip",id:"shows-ip",level:3},{value:"Vhost mode",id:"vhost-mode",level:2},{value:"Basic usage",id:"basic-usage-2",level:3},{value:"Fuzz Mode",id:"fuzz-mode",level:2},{value:"Basic usage",id:"basic-usage-3",level:3}],c={toc:u},d="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"web-gobuster"},"[Web]"," gobuster"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://cybersecbits.com/gobuster-finding-web-files-and-directories"},"https://cybersecbits.com/gobuster-finding-web-files-and-directories"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OJ/gobuster"},"https://github.com/OJ/gobuster")),(0,o.kt)("p",null,"For finding:   "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Files  "),(0,o.kt)("li",{parentName:"ul"},"Directories  "),(0,o.kt)("li",{parentName:"ul"},"Subdomains ")),(0,o.kt)("h2",{id:"mode-options"},"Mode options"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"dir: Directory / File enumeration mode (For finding ",(0,o.kt)("inlineCode",{parentName:"li"},"html")," / ",(0,o.kt)("inlineCode",{parentName:"li"},"php")," / ",(0,o.kt)("inlineCode",{parentName:"li"},"static content")," ...)"),(0,o.kt)("li",{parentName:"ul"},"dns: DNS subdomain enumeration mode (For subdomain e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"www.example.com"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"mail.example.com"),")"),(0,o.kt)("li",{parentName:"ul"},"vhost: VHOST enumeration mode (For vhost e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"www.example.com"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"mail.example.com"),")"),(0,o.kt)("li",{parentName:"ul"},"fuzz: fuzzing mode for parameter (For test parameter e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"https://example.com?FUZZ=test"),")"),(0,o.kt)("li",{parentName:"ul"},"s3: fuzzing aws bucket enumeration mode (For destination)")),(0,o.kt)("h2",{id:"dir-mode"},"Dir mode"),(0,o.kt)("h3",{id:"basic-usage"},"Basic usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gobuster dir -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -u 10.10.103.116 \n\ngobuster dir -w ~/wordlists/shortlist.txt -u https://buffered.io\n")),(0,o.kt)("h3",{id:"with-cookies"},"With Cookies"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gobuster dir -w ~/wordlists/shortlist.txt -u https://buffered.io -c 'session=123456'\n")),(0,o.kt)("h3",{id:"specific-html-and-php"},"Specific ",(0,o.kt)("inlineCode",{parentName:"h3"},".html")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},".php")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gobuster dir -w ~/wordlists/shortlist.txt -u https://buffered.io -x .php,.html\n")),(0,o.kt)("h2",{id:"dns-mode"},"DNS mode"),(0,o.kt)("p",null,"You may set up the ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/hosts")," with e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"103.43.132.43 hello.io")," before buste the DNS"),(0,o.kt)("h3",{id:"basic-usage-1"},"Basic usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gobuster dns -d thetoppers.htb -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt\n\ngobuster dns -d google.com -w /usr/share/wordlists/dirbuster/subdomains.txt\n")),(0,o.kt)("h3",{id:"shows-ip"},"Shows ip"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gobuster dns -d google.com -w ~/wordlists/subdomains.txt -i\n")),(0,o.kt)("h2",{id:"vhost-mode"},"Vhost mode"),(0,o.kt)("h3",{id:"basic-usage-2"},"Basic usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gobuster vhost -u https://mysite.com -w common-vhosts.txt\n")),(0,o.kt)("h2",{id:"fuzz-mode"},"Fuzz Mode"),(0,o.kt)("h3",{id:"basic-usage-3"},"Basic usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gobuster fuzz -u https://example.com?FUZZ=test -w parameter-names.txt\n")))}p.isMDXComponent=!0}}]);