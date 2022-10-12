# Running the Docker

## Pre-Requisite: Install Docker https://docs.docker.com/get-docker/


NOTE: Make sure you are in the root folder. Outside `backend` and `frontend` dir

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

## Pushing ang Pulling images to Docker Hub: https://hub.docker.com/
Make sure to register first on Docker Hub and Create a repository


1. Create image first: `docker build -t <REPOSITORY_NAME>:<TAG_NAME> .`
```
cd backend

docker build -t kingdeej/mern-redux-toolkit:backend_img_traversy .
```

2. Check if the image is created
```
docker images
```

3. Push to repository

```
docker push kingdeej/mern-redux-toolkit:backend_img_traversy
```

4. The check on the site if uploaded: https://hub.docker.com/repository/docker/kingdeej/mern-redux-toolkit

OPTIONAL: How to delete Existing Images:

```
docker images (to check the IMAGE_ID)
docker image rm <IMAGE_ID>
```

5. Pulling

```
docker pull kingdeej/mern-redux-toolkit:backend_img_traversy
```

6. Repeat steps for Frontend

### Few Notes:

Update the `frontend-ui` ports, use port `80` on `docker-compose.yml` if running NGINX

Frontend calls to backend API calls is running on the same PORT because of the `proxy` settings in `frontend/package.json`. `backend-api` is the name of the service in `docker-compose.yml`


### REFERRENCES:

https://www.bezkoder.com/docker-mern/

https://www.youtube.com/watch?v=hP77Rua1E0c

https://www.youtube.com/watch?v=31ieHmcTUOk&list=PL4cUxeGkcC9hxjeEtdHFNYMtCpjNBm3h7&index=2

