---
sidebar_position: 1
---

# [Basic] general Github Actions

## Running `jest` in action
Basic to test out the nodejs function with `Jest`

```yml title="ci.yml"
name: test-packages

on:
  push:
    branches:
      - 'main'

jobs:
  testing:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Run Jest tests
      run: |
        yarn
        yarn test
```


## Running `ec2` / `ubuntu server` in action
Basic to control the server with github action.  

**Main Action**   
- `appleboy/ssh-action@master`  

```yml
name: ci-flow

on:
  push:
    branches:
      - 'main'
  workflow_dispatch:

env:
  SERVER_DIR: /home/someWhere

jobs:
  ssh-vm:
    runs-on: ubuntu-latest
    steps:
    - name: Executing remote ssh
      uses: appleboy/ssh-action@master
      with:
        host: ${{ secrets.HOST }}
        username: ${{ secrets.SSH_USERNSME }}
        password: ${{ secrets.SSH_PASSWORD }}
        script: |
          git pull
          echo 'hello'
          yarn install
```


## Build in action, upload artifact to ubuntu server
The action will build a react project to a folder named `build`, then upload to `actions/upload-artifact@v3`.
By using `appleboy/scp-action@v0.1.4`, upload the folder to server.  

**Main Action**   
- `actions/upload-artifact@v3`  
- `appleboy/scp-action@v0.1.4`  

```yml title="ci.yml"
name: ci-flow

on:
  push:
    branches:
      - 'main'
  workflow_dispatch:

env:
  SERVER_DIR: /home/someWhere

jobs:
  build-web:
    runs-on: ubuntu-latest
    container: node:lts-alpine
    steps:
      - uses: actions/checkout@v3
      - name: Install npm deps
        run: |
          yarn 
          yarn build
      - name: Archive built files
        uses: actions/upload-artifact@v3
        with:
          name: build_web
          path: build

  upload-to-server:
    needs: build-web
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: restore built files server
        uses: actions/download-artifact@v3
        with:
          name: build_web
          path: build
      - name: copy file via ssh password
        uses: appleboy/scp-action@v0.1.4
        with:
          host: ${{ secrets.HOST }}
          username: ${{ secrets.SSH_USERNAME }}
          password: ${{ secrets.SSH_PASSWORD }}
          source: build/*
          target: ${{ env.SERVER_DIR }}
```



## Running Full build deployment

Assume the following steps

1. Build the react vite with `action runtime`.  
2. Upload the build to your server with `scp`.  
3. Run backend logics.  

```md title="Folder structure"
📂 .
├── 📂 .github/workflows/ci.yml
├─┬ 📂 backend (Express Vite)
│ ├── 📂 dist
│ ├── ...
│ └── yarn.lock
├─┬ 📂 frontend-client (React Vite)
│ ├── 📂 dist
│ ├── ...
│ └── yarn.lock
└── README.md
```


```yml title="ci.yml"
name: ci-flow

on:
  push:
    branches:
      - 'deploy'
  workflow_dispatch:

env:
  SERVER_DIR: /home/someWhere

jobs:
  build-web:
    runs-on: ubuntu-latest
    container: node:lts-alpine
    steps:
      - uses: actions/checkout@v3
      - name: Install npm deps
        working-directory: ./frontend-client
        run: |
          yarn 
          yarn build
      - name: Archive built files
        uses: actions/upload-artifact@v3
        with:
          name: build_web
          path: frontend-client/dist
  
  upload-to-server:
    needs: build-web
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: restore built files server
        uses: actions/download-artifact@v3
        with:
          name: build_web
          path: distfiles
      - name: copy file via ssh password
        uses: appleboy/scp-action@v0.1.4
        with:
          rm: true
          host: ${{ secrets.HOST }}
          username: ${{ secrets.SSH_USERNAME }}
          password: ${{ secrets.SSH_PASSWORD }}
          strip_components: 1
          source: distfiles/*
          target: /home/someWhere/backend/public_web

  ssh-vm:
    needs: upload-to-server
    runs-on: ubuntu-latest
    steps:
    - name: Executing remote ssh
      uses: appleboy/ssh-action@master
      with:
        host: ${{ secrets.HOST }}
        username: ${{ secrets.SSH_USERNAME }}
        password: ${{ secrets.SSH_PASSWORD }}
        script: |
          cd ${{ env.SERVER_DIR }}
          git pull
          cd backend
          echo 'hello'
```