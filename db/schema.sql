DROP DATABASE IF EXISTS listmaker_db; 
CREATE DATABASE listmaker_db;

USE listmaker_db;

create table lists (
    list_id INT NOT NULL,
    list_title VARCHAR(30) NOT NULL,
    list_type VARCHAR(30) NOT NULL,
    list_owner VARCHAR(30) NOT NULL,
    list_contents TEXT[],
    list_comments TEXT[],
    list_date VARCHAR(30) NOT NULL
)