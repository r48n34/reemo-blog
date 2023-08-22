---
sidebar_position: 1
---

# Basic

## Links

Download the git from https://git-scm.com/downloads

## Config

### SSH

Set the ssh from Github:  
https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent  

```bash
ssh-keygen

cat .ssh/id_rsa.pub
```

### Local config

For windows, install the nano from `choco` is the easiest way. Install `choco` with `node.js` first.

```bash
choco install -y nano
```

```bash
git config --global core.editor "nano"
git config --global user.name "Peter"
git config --global user.email "peter123@gmail.com"
```

## Command

```bash
git add . # git add -A
git commit -m "message"

git pull
git push
```

## branches

### Create a new branch
```bash
git checkout -b <brance_name>

git checkout -b development
```

### Goto exist branch
```bash
git checkout <brance_name>

git checkout development
```