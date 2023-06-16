---
sidebar_position: 1
---

# Basic

## Config

```bash
git config --global core.editor "nano"
git config --global user.name "Reemo"
git config --global user.email "reemo@gmail.com"
```

## Command

```bash
git add .
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