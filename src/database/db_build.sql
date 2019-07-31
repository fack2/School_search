BEGIN;
DROP TABLE IF EXISTS users, school CASCADE;

CREATE TABLE users (
  id            serial        PRIMARY KEY,
  name    varchar(100)  NOT NULL,
  password       varchar(100)  NOT NULL
);

CREATE TABLE school (
    id serial PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    location TEXT 

);
INSERT INTO users (name,password) VALUES ('yaqoot','yaqoot123');

INSERT INTO school (name,location) VALUES ('yaqoot','gaza');

COMMIT;