# Core-frontend

# Installation

### Docker

You must have Docker installed. If you haven't installed Docker yet, please follow the instructions [here](https://docs.docker.com/get-docker/).

### Clone this repository using GitHub Desktop:

![](/public/installation.png)

### Or clone it using Git CLI in your working directory:

```bash
gh repo clone bootcamp2024-quantum/core-frontend
```

---

# Development

### Local Development

To start developing locally, run the following commands:

```bash
npm i
npm run dev
```

After this you have to see localhost address:

```bash
$ npm run dev

> core-frontend@0.0.0 dev
> vite

VITE v5.1.6 ready in 224 ms

➜ Local: http://localhost:7778/
➜ Network: http://000.000.0.000:7778/
➜ Network: http://000.00.000.0:7778/
```

### To start develop with docker:

```bash
docker compose up --build --no-recreate
```

After this you also have to see localhost address:

```bash
core-frontend-container | ➜ Local: http:/localhost:7777/
core-frontend-container | ➜ Network: http://000.00.00:7777/
```

---

### To stop development:

Press `Ctrl + C`

or

```bash
docker stop core-frontend-container
```

### To delete docker container:

```bash
docker rm core-frontend-container
```

### To delete docker image:

```bash
docker rmi core-frontend-image
```
