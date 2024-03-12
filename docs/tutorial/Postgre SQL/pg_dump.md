---
sidebar_position: 2
---

# [Adv] pg_dump

Used to backup whole databases / tables

## Basic usage

```bash

# Backup with data
          <username> <db_name>               <back_dist>
pg_dump -U postgres   weak_db > C:\Users\r48n3\Documents\dumm.sql

# Backup only with schema
          <username>             <db_name>               <back_dist>
pg_dump -U postgres --schema-only weak_db > C:\Users\r48n3\Documents\dumm.sql
```