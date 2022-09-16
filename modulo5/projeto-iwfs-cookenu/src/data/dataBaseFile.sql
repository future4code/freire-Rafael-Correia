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

CREATE TABLE cookenu_recipe(
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) UNIQUE NOT NULL,
	description VARCHAR(255) NOT NULL,
    creation_date DATE NOT NULL
);

CREATE TABLE cookenu_link_recipe_user(
	user_id VARCHAR(255) NOT NULL,
    recipe_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES cookenu_user(id),
    FOREIGN KEY (recipe_id) REFERENCES cookenu_recipe(id)
);