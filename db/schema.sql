DROP DATABASE IF EXISTS listmaker_db; 
CREATE DATABASE listmaker_db;

USE listmaker_db;

CREATE TABLE lists (
    list_id INT NOT NULL,
    list_title VARCHAR(30) NOT NULL,
    list_type VARCHAR(30) NOT NULL,
    list_owner VARCHAR(30) NOT NULL,
    list_contents VARCHAR(255),  
    list_comments VARCHAR(255),  
    list_date VARCHAR(30) NOT NULL
)