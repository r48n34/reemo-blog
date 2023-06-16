---
sidebar_position: 1
---
# Set HTTPS

## Step 0: Domain setup
Make sure you have register a domain and have set `server_name` in `/etc/nginx/sites-available/default`
```bash title="/etc/nginx/sites-available/default"
server_name api.hello.io;
```

## Step 1: Install stuff
```bash
sudo apt-get update
sudo apt-get install software-properties-common
sudo add-apt-repository universe
sudo apt-get update
sudo apt-get install python3-certbot-nginx
```

## Step 2: Run certbot
```bash
sudo certbot --nginx
```

