# Nest.js Live Application 
![circleci](https://circleci.com/gh/ASVBPREAUBV/nest.png?circle-token=:circle-token)
[![Coverage Status](https://coveralls.io/repos/github/ASVBPREAUBV/nest/badge.svg?branch=master)](https://coveralls.io/github/ASVBPREAUBV/nest?branch=master)
## Description

Prototype for Live-Application. 
Build in [nest](https://nestjs.com/)


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

```bash
# development
$ npm run start 

# OR watch mode
$ npm run start:dev


## Production
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

## TODOs:

- General
    - [ ] switch to travis ci 
    - [ ] add coveralls to travis ci 
    - [ ] implement generic model maybe as interface
    
- Loggin
    - [x] init winston
    - [ ] init correct file association
    - [ ] check how to implement logging levels
    
- DB
    - [ ] check if DB has correct Database
    - [x] DB has to work from init
    
- Models
    - [ ] Complete First Model CRUD Workflow
    - [ ] Complete User Model
    - [ ] ACL
    - [ ] Auth
    
- Websocket
    - [x] produce js code on the fly with browserify for development
    - [x] Websocket libary has to be ready and working for frontend
    - [ ] produce static frontend-code in production
