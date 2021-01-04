CREATE DATABASE UserDatabase;

CREATE TABLE User (
  id  INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  login VARCHAR(20) NOT NULL,
  password VARCHAR(20) NOT NULL,
  create_date DATETIME NOT NULL,
  first_name    VARCHAR(20),
  saved_locations VARCHAR(40)
);