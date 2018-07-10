/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/

-- create a database for grocery_list app only if it doesn't exist
DROP DATABASE IF EXISTS grocery_list;
CREATE DATABASE grocery_list;
USE grocery_list;

-- create a table to store items
-- unique id, name, quantity fields
CREATE TABLE groceries(
  id int NOT NULL AUTO_INCREMENT,
  name varchar(100) NOT NULL,
  quantity smallint NOT NULL,
  PRIMARY KEY(id)
);

-- add a test item
INSERT INTO groceries (name, quantity) VALUES('dark chocolate', 8);
