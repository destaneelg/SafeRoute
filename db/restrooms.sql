CREATE DATABASE IF NOT EXISTS restrooms_db;

USE restrooms_db;

CREATE TABLE IF NOT EXISTS restrooms (
  id INT NOT NULL AUTO_INCREMENT,
  restroom_name VARCHAR(45) NOT NULL,
  restroom_street VARCHAR(45) NOT NULL,
  restroom_city VARCHAR(45) NOT NULL,
  restroom_state VARCHAR(45) NOT NULL,

  approved BOOLEAN,
  unisex BOOLEAN,
  PRIMARY KEY (id)
  );
