# nest

## Description

description

## Installation

```bash
$ npm install
```

To run the app you need to run the db with a table called user.

## Running the app

Run db for dev:

```bash
docker run -p 3306:3306 -t -e MYSQL_ROOT_PASSWORD=my-secret-pw mysql
docker run -p 3306:3306 -t -e MYSQL_ROOT_PASSWORD=my-secret-pw mariadb
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
Goals:

 - [ ] Init correct dev DB with Migration-Options
 - [ ] Come up with a proper websocket concept
 - [ ] Better User Model
 - [ ] ACL
 - [ ] Auth
