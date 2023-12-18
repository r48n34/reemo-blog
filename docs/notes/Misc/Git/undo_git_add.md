---
sidebar_position: 2
---

# [Basic] Undo git add
The following command is used to revoke a `git add .` in CLI.  

## Undo all
Assume you have `git add` couple times.
```bash
git reset
```

## Undo one
undo one `git add`
```bash
git reset <file>
```

## Undo one commit only
Used to revoke one `git commit` with soft reset.  
```bash
git reset --soft HEAD~1
```
