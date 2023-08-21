---
sidebar_position: 3
---

# Sub Domain Setting

Goto `/etc/nginx/sites-available/default` and add the following code

```bash
server{
    listen 80;

    server_name api.r48n34.me; # Sub domain name
    client_max_body_size 100M; 

    location / {
        proxy_pass http://localhost:8085;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```