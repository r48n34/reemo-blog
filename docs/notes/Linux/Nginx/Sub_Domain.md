---
sidebar_position: 3
---

# Sub Domain Setting

## Step 0: Set up A record in AWS / Linode / Other platform

Set a `A/AAAA Record` in your cloud services like the following:  

- `api.r48n34.me`  
- `blog.r48n34.me`  

## Step 1: Settings
Goto `/etc/nginx/sites-available/default` and add the following code in `default`

```bash
server{
    listen 80;

    server_name api.r48n34.me; # Sub domain name
    client_max_body_size 100M; # Optional for form uplaoding, can skip it

    location / {
        proxy_pass http://localhost:8085;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

server{
    listen 80;

    server_name blog.r48n34.me; # other Sub domain name
    client_max_body_size 100M; 

    location / {
        proxy_pass http://localhost:8086;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Step 2: Restart services
```bash
sudo nginx -t
sudo service nginx restart
```