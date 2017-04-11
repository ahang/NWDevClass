CREATE DATABASE animals;

CREATE DATABASE people;

USE animals;

CREATE TABLE zebras (
	# auto increment id for each new table and NOT NULL means the ID is required
	id INTEGER(11) AUTO_INCREMENT NOT NULL,
    # stuff
    name VARCHAR(30) NOT NULL,
    # Primary Key is ID column
    PRIMARY KEY (id)
);

INSERT INTO zebras (name) VALUES ("Bob");
INSERT INTO zebras (name) VALUES ("Jack");
INSERT INTO zebras (name) VALUES ("Jill");

SELECT * FROM zebras WHERE id > 1;

CREATE TABLE cats (
	id INTEGER(11) AUTO_INCREMENT NOT NULL,
    name VARCHAR(30) NOT NULL,
    cat_type VARCHAR(20),
    age INTEGER(11),
    PRIMARY KEY (id)
);

INSERT INTO cats (
    name,
    cat_type,
    age
) VALUES (
	"Bob",
    "calico",
    2
);

INSERT INTO cats (
    name,
    cat_type,
    age
) VALUES (
	"Janet",
    "tabby",
    4
);

SELECT
  *
FROM
  cats
;

UPDATE cats SET name = "Theo" WHERE id = 2;
