"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1510],{4137:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),c=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),b=n,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||l;return a?r.createElement(m,s(s({ref:t},p),{},{components:a})):r.createElement(m,s({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=b;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<l;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}b.displayName="MDXCreateElement"},8653:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=a(7462),n=(a(7294),a(4137));const l={},s="PostgreSql",i={unversionedId:"notes/Security/DB Services/postgres",id:"notes/Security/DB Services/postgres",title:"PostgreSql",description:"Connect to PostgreSql",source:"@site/docs/notes/Security/DB Services/postgres.mdx",sourceDirName:"notes/Security/DB Services",slug:"/notes/Security/DB Services/postgres",permalink:"/docs/notes/Security/DB Services/postgres",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"notes",previous:{title:"MySql / MariaDB",permalink:"/docs/notes/Security/DB Services/mysql"},next:{title:"Redis",permalink:"/docs/notes/Security/DB Services/redis"}},o={},c=[{value:"Connect to PostgreSql",id:"connect-to-postgresql",level:2},{value:"Basic usage",id:"basic-usage",level:2},{value:"List all database",id:"list-all-database",level:3},{value:"Connect to specific database",id:"connect-to-specific-database",level:3},{value:"List all tables in database",id:"list-all-tables-in-database",level:3},{value:"List all details with the tables",id:"list-all-details-with-the-tables",level:3},{value:"Delete stuff",id:"delete-stuff",level:3},{value:"Delete database",id:"delete-database",level:4},{value:"Delete tables",id:"delete-tables",level:4},{value:"Create user",id:"create-user",level:2},{value:"Exit",id:"exit",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"postgresql"},"PostgreSql"),(0,n.kt)("h2",{id:"connect-to-postgresql"},"Connect to PostgreSql"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"psql -h <hostname> -p <port> -U <username> -d <database>\npsql -h myhost -p 5432 -U myapplicationuser -d applicationdb\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"With host")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"postgresql://<username>:<password>@<hostname>:<port>/<database>\npsql postgresql://myapplicationuser:mypass@myhost:1234/applicationdb\n")),(0,n.kt)("h2",{id:"basic-usage"},"Basic usage"),(0,n.kt)("h3",{id:"list-all-database"},"List all database"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\\l\n")),(0,n.kt)("h3",{id:"connect-to-specific-database"},"Connect to specific database"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\\c <db_name>\n\\c users\n")),(0,n.kt)("h3",{id:"list-all-tables-in-database"},"List all tables in database"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\\d\n")),(0,n.kt)("h3",{id:"list-all-details-with-the-tables"},"List all details with the tables"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\\d+ <table_name>\n")),(0,n.kt)("h3",{id:"delete-stuff"},"Delete stuff"),(0,n.kt)("h4",{id:"delete-database"},"Delete database"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"DROP DATABASE <database_name>;\n")),(0,n.kt)("h4",{id:"delete-tables"},"Delete tables"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"DROP TABLE <table_name>;\n")),(0,n.kt)("h2",{id:"create-user"},"Create user"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"CREATE USER <user_name> WITH PASSWORD '<user_password>' SUPERUSER;\nALTER ROLE <user_name> WITH LOGIN;\n")),(0,n.kt)("h2",{id:"exit"},"Exit"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"quit  \n")))}d.isMDXComponent=!0}}]);