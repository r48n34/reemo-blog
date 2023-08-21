"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9446],{4137:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=l(t),m=o,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return t?r.createElement(f,s(s({ref:n},d),{},{components:t})):r.createElement(f,s({ref:n},d))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=m;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[u]="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1502:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=t(7462),o=(t(7294),t(4137));const i={sidebar_position:2},s="Nodejs dockerfile",a={unversionedId:"notes/Docker/nodejs",id:"notes/Docker/nodejs",title:"Nodejs dockerfile",description:"dockerfile",source:"@site/docs/notes/Docker/nodejs.md",sourceDirName:"notes/Docker",slug:"/notes/Docker/nodejs",permalink:"/docs/notes/Docker/nodejs",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"notes",previous:{title:"Basic",permalink:"/docs/notes/Docker/basic"},next:{title:"Basic",permalink:"/docs/notes/Git/basic"}},c={},l=[{value:"dockerfile",id:"dockerfile",level:2},{value:"Run file",id:"run-file",level:2},{value:"With postgresql images",id:"with-postgresql-images",level:2},{value:"With Github Action and Docker Hub",id:"with-github-action-and-docker-hub",level:2}],d={toc:l},u="wrapper";function p(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"nodejs-dockerfile"},"Nodejs dockerfile"),(0,o.kt)("h2",{id:"dockerfile"},"dockerfile"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dockerfile",metastring:'title="dockerfile"',title:'"dockerfile"'},"FROM node:lts\nWORKDIR /usr/src/app\nCOPY . .\nEXPOSE 8080\nCMD yarn install && \\\n    node index.js\n")),(0,o.kt)("h2",{id:"run-file"},"Run file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Terminal"',title:'"Terminal"'},"docker build -t <your-image-tag> .\n")),(0,o.kt)("h2",{id:"with-postgresql-images"},"With postgresql images"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="docker-compose.yml"',title:'"docker-compose.yml"'},"version: '3'\n\nservices:\n  nodeserver:\n    environment:\n      POSTGRES_USER: postgres\n      POSTGRES_PASSWORD: postgres\n      POSTGRES_DB: dummy_db\n      POSTGRES_HOST: db\n      NODE_ENV: production\n      PORT: 8080\n    depends_on:\n      - db\n    build:\n      context: ./\n      dockerfile: ./Dockerfile\n    image: 'nodeserver:latest'\n    ports:\n      - '8080:8080'\n  db:\n    image: postgres:15.1-alpine3.16\n    environment:\n      POSTGRES_USER: postgres\n      POSTGRES_PASSWORD: postgres\n      POSTGRES_DB: dummy_db\n    ports:\n      - '25432:5432'\n    volumes:\n      - ./pgdata:/var/lib/postgresql/data\n")),(0,o.kt)("h2",{id:"with-github-action-and-docker-hub"},"With Github Action and Docker Hub"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="Github repo"',title:'"Github','repo"':!0},".\n\u251c\u2500\u2500.github\n\u2502   \u2514\u2500\u2500 workflows\n\u2502       \u2514\u2500\u2500 ci.yml\n\u251c\u2500\u2500 backend\n\u2502   \u251c\u2500\u2500 Dockerfile\n\u2502   \u2514\u2500\u2500 Other stuff...\n\u251c\u2500\u2500 frontend\n\u2502   \u2514\u2500\u2500 Other stuff...\n\u2514\u2500\u2500 docker-compose.yml\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"{{ secrets.DOCKERHUB_USERNAME }}")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"{{ secrets.DOCKERHUB_TOKEN }}")," shoule be setup in the repo first."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="ci.yml"',title:'"ci.yml"'},'name: docker-build\n\non:\n  push:\n    branches:\n      - "main"\n  workflow_dispatch:\n\nenv:\n  DOCKER_CONTAINER_NAME: <your-container-name>       # server-mvc:latest\n  DOCKER_REPO_NAME: <your_username>/<your-repo-name> # reemo/server-mvc:latest\n\njobs:\n  test-server:\n    runs-on: ubuntu-latest\n    container: node:lts-alpine\n    steps:\n      - uses: actions/checkout@v3\n      - name: Install npm deps\n        working-directory: backend\n        run: |\n          yarn install\n          yarn test\n          rm -rf node_modules\n      - name: archive built files\n        uses: actions/upload-artifact@v3\n        with:\n          name: server_code\n          path: backend\n\n  build-server:\n    needs: test-server\n    runs-on: ubuntu-latest\n    container: docker:20.10.21-alpine3.16\n    steps:\n      - uses: actions/checkout@v3\n      - name: restore built files server\n        uses: actions/download-artifact@v3\n        with:\n          name: server_code\n          path: backend\n      - name: Login to Docker Hub\n        uses: docker/login-action@v2\n        with:\n          username: ${{ secrets.DOCKERHUB_USERNAME }}\n          password: ${{ secrets.DOCKERHUB_TOKEN }}\n      - name: Do Docker tag and push\n        working-directory: backend\n        run: |\n          docker build -t ${{ env.DOCKER_CONTAINER_NAME }} .\n          docker tag ${{ env.DOCKER_CONTAINER_NAME }} ${{ env.DOCKER_REPO_NAME }}\n          docker push ${{ env.DOCKER_REPO_NAME }}\n')))}p.isMDXComponent=!0}}]);