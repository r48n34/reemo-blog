"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9429],{4137:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var o=n.createContext({}),u=function(t){var e=n.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):s(s({},e),t)),r},p=function(t){var e=u(t.components);return n.createElement(o.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,o=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),c=u(r),g=a,m=c["".concat(o,".").concat(g)]||c[g]||d[g]||i;return r?n.createElement(m,s(s({ref:e},p),{},{components:r})):n.createElement(m,s({ref:e},p))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,s=new Array(i);s[0]=g;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=t,l[c]="string"==typeof t?t:a,s[1]=l;for(var u=2;u<i;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},1541:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(4137));const i={sidebar_position:1},s="[Basic] Rust for typescript developers",l={unversionedId:"tutorial/Rust/basic",id:"tutorial/Rust/basic",title:"[Basic] Rust for typescript developers",description:"Basic start up from zero",source:"@site/docs/tutorial/Rust/basic.mdx",sourceDirName:"tutorial/Rust",slug:"/tutorial/Rust/basic",permalink:"/docs/tutorial/Rust/basic",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorial",previous:{title:"[DB] pg",permalink:"/docs/tutorial/Random JS Lib/postgres"}},o={},u=[{value:"Basic start up from zero",id:"basic-start-up-from-zero",level:2},{value:"Number, Boolean and Tuple",id:"number-boolean-and-tuple",level:2},{value:"String",id:"string",level:2},{value:"Char, String and &amp;str",id:"char-string-and-str",level:3},{value:"String add String",id:"string-add-string",level:3},{value:"&amp;str add &amp;str",id:"str-add-str",level:3},{value:"String add &amp;str",id:"string-add-str",level:3}],p={toc:u},c="wrapper";function d(t){let{components:e,...r}=t;return(0,a.kt)(c,(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"basic-rust-for-typescript-developers"},"[Basic]"," Rust for typescript developers"),(0,a.kt)("h2",{id:"basic-start-up-from-zero"},"Basic start up from zero"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Terminal"',title:'"Terminal"'},"cargo new hello_cargo\ncargo run\n\n# For build\ncargo build\n")),(0,a.kt)("h2",{id:"number-boolean-and-tuple"},"Number, Boolean and Tuple"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="number, boolean and tuple"',title:'"number,',boolean:!0,and:!0,'tuple"':!0},'fn main() {\n    let num:i32 = 5; // Default is const\n    let mut num_two:i32 = 5; // let variables in typescript\n\n    let y: f32 = 3.0; // Floating number\n\n    let f: bool = false; // Boolean\n\n    let tup: (i32, f64, u8) = (500, 6.4, 1); // Tuple\n    let (x, k, z) = tup; // Spread a Tuple\n\n    // Both printing method for variables\n    println!("The value of y is: {}", k);\n    println!("The value of y is: {k}");\n}\n')),(0,a.kt)("h2",{id:"string"},"String"),(0,a.kt)("h3",{id:"char-string-and-str"},"Char, String and &str"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="string"',title:'"string"'},'fn main() {\n    let z: char = \'z\'; // Char\n\n    let mut my_string: String = String::new(); // String\n    let greeting: &str = "Hello there."; // &str\n\n    my_string.push(\'W\'); // String add a Char\n    my_string.push_str("mate"); // String add a string\n    my_string += "Hay";         // String add a string\n\n    // Care: &str \uff08string slices\uff09 is a fixed const string,\n    //       while String is similar to a char[] in typescript\n\n    let s: String = greeting.to_string(); // `.to_string()` Convert &str to String\n}\n')),(0,a.kt)("h3",{id:"string-add-string"},"String add String"),(0,a.kt)("p",null,"By using ",(0,a.kt)("inlineCode",{parentName:"p"},'&format!("{}", String)')," or ",(0,a.kt)("inlineCode",{parentName:"p"},"String.as_str()")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    let mut str_A: String = "A".to_string();\n    let str_B: String = "B".to_string();\n\n    str_A.push_str(&format!("{}", str_B)); // Method A `&format!("{}", str_B)`\n    str_A.push_str(str_B.as_str());        // Method B `str_B.as_str()`\n    println!("{str_A}") // AB\n}\n')),(0,a.kt)("h3",{id:"str-add-str"},"&str add &str"),(0,a.kt)("p",null,"By using ",(0,a.kt)("inlineCode",{parentName:"p"},'format!("{}{}", a, b)')," or Array join ",(0,a.kt)("inlineCode",{parentName:"p"},'[a, b].join("")')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    let a = "Hello";\n    let b = "world";\n    let result_A = format!("{}{}", a, b); // Method A\n    let result_B = [a, b].join("");       // Method B\n\n    print!("{}, {}", result_A, result_B);\n}\n')),(0,a.kt)("h3",{id:"string-add-str"},"String add &str"),(0,a.kt)("p",null,"By using ",(0,a.kt)("inlineCode",{parentName:"p"},"+")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    let str_A: String = "hello ".to_owned();\n    let str_B: &str = "world";\n    \n    let new_str_A: String = str_A + str_B;\n    println!("{}", new_str_A);\n}\n')),(0,a.kt)("p",null,"Work in Progress"))}d.isMDXComponent=!0}}]);