#!/usr/bin/env bash
docker run  --name my_nest_db -p 3306:3306 -de MYSQL_ROOT_PASSWORD=my-secret-pw mariadb
docker exec -it my_nest_db mysql -p
CREATE DATABASE nest;
