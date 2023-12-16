---
sidebar_position: 3
---

# Reverse Proxy Nodejs

## Step 1: Open file
Enter the default file
```bash
sudo nano /etc/nginx/sites-available/default
```

## Step 2: Replace content
Replace the content with:
```bash title="default"
server {
    listen 80 default_server;
    listen [::]:80 default_server;

    root /var/www/html;
    index index.html index.htm index.nginx-debian.html;

    server_name _;
    client_max_body_size 100M; 

    location / {
        proxy_pass http://localhost:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

}
```

## Step 3: Restart services
```bash
sudo nginx -t
sudo service nginx restart
```