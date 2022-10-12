# Running the Docker

REFERRENCES:

https://www.bezkoder.com/docker-mern/

https://www.youtube.com/watch?v=hP77Rua1E0c

https://www.youtube.com/watch?v=31ieHmcTUOk&list=PL4cUxeGkcC9hxjeEtdHFNYMtCpjNBm3h7&index=2

## Pre-Requisite: Install Docker https://docs.docker.com/get-docker/


### Check if there is running containers

```
docker ps -a
```

### Check if there is active images

```
docker images
```

### Run and activate images using docker compose. `d` for detach

```
docker-compose up -d
```

### Stop images using docker compose

```
docker-compose down
```

### Remove/Delete images, containers and volumes using docker compose

```
docker-compose down --rmi all -v
```

### Few Notes:

Update the `frontend-ui` ports, use port `80` on `docker-compose.yml` if running NGINX

Frontend calls to backend API calls is running on the same PORT because of the `proxy` settings in `frontend/package.json`. `backend-api` is the name of the service in `docker-compose.yml`

