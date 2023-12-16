---
sidebar_position: 2
---

# [Manager] pm2

## Install

```bash title="npm"
npm install pm2 -g
```

## Command

```bash
$ pm2 start app.js
$ pm2 start --name my_app app.js # Giving a name for it

$ pm2 list

$ pm2 stop     <app_name|namespace|id|'all'|json_conf>
$ pm2 restart  <app_name|namespace|id|'all'|json_conf>
$ pm2 delete   <app_name|namespace|id|'all'|json_conf>

# Zero Downtime Reload
$ pm2 reload all

$ pm2 logs <app_name|namespace|id|'all'|json_conf>
```