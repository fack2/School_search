BEGIN;
DROP TABLE IF EXISTS users, school CASCADE;

CREATE TABLE users (
  id            serial        PRIMARY KEY,
  name    varchar(100)  NOT NULL,
  email  VARCHAR(100) NOT NULL UNIQUE, 
  password       varchar(100)  NOT NULL
);

CREATE TABLE school (
    id serial PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    location TEXT 

);
INSERT INTO users (name,email,password) VALUES ('yaqoot','yaqoot@gmail.com','yaqoot123'), 
('saja','saja@gmail.com','saja123'),
('nadeen','nadeen@gmail.com','nadeen123'),
('someya','someya@gmail.com','someya123');


INSERT INTO school (name,location) VALUES ('widad-Nasser-Aldin','Hebron'),('Al-Hussien','Hebron'),('Al-Khansaa','Hebron'),('Al-Ukhowwa','Hebron');

COMMIT;