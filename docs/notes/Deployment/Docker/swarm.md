---
sidebar_position: 3
---

# [Adv] Docker swarm

AKA the build-in load balancing for docker

```bash
docker swarm init

$ docker swarm init
Swarm initialized: current node (jijr57zap1bxuo6xo7f4i9uig) is now a manager.

To add a worker to this swarm, run the following command:

    docker swarm join --token xxxxxxxxxxxxxx 192.168.65.3:2377  

To add a manager to this swarm, run 'docker swarm join-token manager' and follow the instructions.
```

## Usgae

```bash
# Create a swarm
# docker service create --replicas <number> --name=<you_name_it_a_name> <image_name>
docker service create --replicas 3 --name=mvc-test mvc-test:latest
docker service create --replicas 3 --name=my_nginx nginx --publish 8123:80

# View services
docker service ls
docker service rm my_nginx

# Update
# docker service update [OPTIONS] SERVICE
docker service update --publish-add 80 my_nginx
```
