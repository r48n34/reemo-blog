---
sidebar_position: 1
---

# [Basic] Basic

## Links

Download the git from:
https://www.docker.com/

## Commands


### - build
```bash
docker build -t <tag_name> .
docker build -t docker-example .
```

### - run
Care `hostPort:containerPort` => `map_to_target_port:my_current_port`

```bash
docker run -d -it -p 8080:8080 <tag_name>
docker run -d -it -p 8080:8080 docker-example
```

### - Docker Compose
```bash
docker-compose up

# pull the images that the `docker-compose` will use
docker-compose pull

# Run in background
docker-compose up -d

docker-compose stop
docker-compose rm -rf <name> # Delete
```

### - List container
```bash
docker ps
docker ps -a # With hidden / stopped container

docker logs <CONTAINER_ID / IMAGE_NAME> 
docker logs 841851bc7e31 
```

### - Go inside the images
```bash
docker exec -it <CONTAINER_ID / IMAGE_NAME> bash 
```
