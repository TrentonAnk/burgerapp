DROP DATABASE IF EXISTS Burger_db;
CREATE database Burger_db;

USE Burger_db;

CREATE TABLE burgerList (
 id INT AUTO_INCREMENT NOT NULL ,
 name VARCHAR(10) NOT NULL,
 devoured BOOLEAN DEFAULT FALSE,
 PRIMARY KEY (id)
);