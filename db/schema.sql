/*Drop the database if it exists alreadys*/
DROP DATABASE IF EXISTS burger_db;

/*Create the database*/
CREATE DATABASE burger_db;

/*Use the database*/
USE burger_db;

/*burger*/
CREATE TABLE burger{
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(255),
    devoured boolean
}


