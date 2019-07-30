BEGIN;
DROP TABLE IF EXISTS user CASCADE;
DROP TABLE IF EXISTS school CASCADE;

CREATE TABLE user (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    password VARCHAR NOT NULL

);


CREATE TABLE school (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    lacation TEXT 

);
INSERT INTO user (name,password) VALUES ('yaqoot','yaqoot123'),('someya','someya123')
INSERT INTO school (name,lacation) VALUES  ('Alhussain Ben Ali Secondary School
',' Ain Sarah, Hebron'),('wedad naser eldeen','hebron');




COMMIT;