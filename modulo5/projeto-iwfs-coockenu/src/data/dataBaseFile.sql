CREATE TABLE cookenu_user(
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL
);

DELETE FROM cookenu_user WHERE name = "User Test";

ALTER TABLE cookenu_user CHANGE email email VARCHAR(255) UNIQUE NOT NULL; 

SELECT * FROM cookenu_user;