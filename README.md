# Node Queue Poc
Node Prove of concept using redis and bull

## How to run

1. Install dependencies using `yarn` or `npm install`
2. Install redis on your machine (I recommend use [docker](https://hub.docker.com/_/redis))
3. Run your docker container on port 6379
4. Run server: you can run separeted using scripts `start:server` and `start:queue` or just start together using `start`