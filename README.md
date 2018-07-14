# nest

## Description

Example Webapplication build in [nest](https://nestjs.com/)

## Installation

```bash
$ npm install
```

To run the app you need to run the db with a table called user.

## Running the app for the first time

Run db for dev:
```bash
docker run  --name my_nest_db -p 3306:3306 -de MYSQL_ROOT_PASSWORD=my-secret-pw mariadb
```
Create nest db:
```bash
docker exec -it my_nest_db mysql -p
CREATE DATABASE nest;
```
Start nest
```bash
# development
$ npm run start 

# watch mode
$ npm run start:dev

# production mode
npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
## Status

User View is working but only with static html&js
-> get ts(js) in view(hbs)

## Problems:

 - [ ] DB has to work from init
 - [ ] Websocket libary has to be ready and working for frontend
 - [ ] Usermodel has to be complete
 - [ ] ACL 
 - [ ] Auth

## Ideas:
- Websocket
    - render frontend completely on server and inject websocket connections
    - preproduce js-lib on server on prod-startup and deliver it through server
    - work on ws-frontend-code seperately
    - produce js-lib for frontend when needed

## TODOs:

- General
    - implement generic model maybe as interface
- DB
    - check if DB has correct Database
- Websocket
    - produce js code on the fly with browserify for development
    - pruduce static frontend-code in production# vue-starter
