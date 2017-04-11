CREATE DATABASE programming_db;

USE programming_db;

CREATE TABLE programming_languages (
	id INTEGER(11) AUTO_INCREMENT NOT NULL,
    languages VARCHAR(100) NOT NULL,
    rating INTEGER(10),
	mastered BOOLEAN DEFAULT TRUE,
    PRIMARY KEY (id)
);

INSERT INTO programming_languages (
	languages,
    rating,
    mastered
) VALUES 
("Javascript", 8, TRUE),
("Node.js", 5, FALSE),
("HTML", 8, TRUE)
;

ALTER TABLE programming_languages
ADD awesome BOOLEAN DEFAULT TRUE;

UPDATE programming_languages SET languages = "CSS" WHERE id = 2;


SELECT * FROM programming_languages;
