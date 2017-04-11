CREATE DATABASE additional_favorite_db;

USE additional_favorite_db;

CREATE table favorite_foods (
	id INTEGER(11) AUTO_INCREMENT NOT NULL,  
	name VARCHAR(50) NOT NULL,
    score INTEGER(10),
    PRIMARY KEY(id)
);

CREATE table favorite_songs (
	id INTEGER(11) AUTO_INCREMENT NOT NULL,  
	name VARCHAR(50) NOT NULL,
    score INTEGER(10),
    PRIMARY KEY(id)
);

INSERT INTO favorite_foods (
	name,
    score
) VALUES
("Deep Dish Pizza", 13),
("Hot Dogs", 12),
("Falafel", 13)
;

SELECT * FROM favorite_foods;

#INSERT INTO favorite_songs (
#	name,
#    score
#) VALUES
#("In the End", 99),
#("I Believe I Can Fly", 50),
#("Hello World", 10)
#;

INSERT INTO favorite_songs (
	name,
    score
) VALUES
("Somewhere over the Rainbow", 99)
;

SELECT * FROM favorite_songs;

# start from favorite song table and connect the two tables on the id of each
SELECT
	favorite_songs.id,
 	favorite_songs.name,
    favorite_foods.id,
    favorite_foods.name
FROM
	favorite_songs
LEFT JOIN
	favorite_foods
ON favorite_foods.id = favorite_songs.id;