# Running the Docker

REF - https://www.bezkoder.com/docker-mern/

## Pre-Requisite: Install Docker https://docs.docker.com/get-docker/


### Check if there is running containers

```
docker ps -a
```

### Check if there is active images

```
docker images
```

### Run and activate images using docker compose

```
docker-compose up -d
```

### Stop images using docker compose

```
docker-compose down
```

### Remove/Delete images, containers and volumes using docker compose

```
docker-compose down --rmi all
```

## Update the `frontend-ui` ports, use port `80` on `docker-compose.yml` if running NGINX

