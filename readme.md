# Goalsetter MERN app by Traversy Media

Check `dockerized` branch for dockerized code version

This is the goalsetter app from the [Learn the MERN Stack](https://www.youtube.com/watch?v=-0exw-9YJBo) series on YouTube.

These includes:

BACKEND
 - mongoose
 - bcryptjs (for password encryption/decryptions)
 - json webtokens
 - concurrently for running both backend and frontend
 
 FRONTEND
 - react-redux
 - reduxjs-toolkit
 - react-icons
 - react-toastify
 - axios

## Usage

Setup the .env and add your MONGO_URI

### Install dependencies

```
# Backend deps: on root folder
npm install

# Frontend deps
cd frontend
npm install
```

### Run Server

```
npm run server
```

### Or Run Backend and Front End Concurrently

```
npm run dev
```
