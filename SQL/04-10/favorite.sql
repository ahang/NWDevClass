CREATE DATABASE favorite_db;

-- Make it so all of the following code will affect favorite_db --
USE favorite_db;

-- Creates the table "favorite_foods" within favorite_db --
CREATE TABLE favorite_foods (
  -- Make a string column called "food" which cannot contain null --
  -- Make an numeric column called "score" --
	food VARCHAR(50) NOT NULL,
    score INTEGER(10)
    
);

CREATE TABLE favorite_songs (
	song VARCHAR(100) NOT NULL,
  -- Make a string column called "song" which cannot contain null --
  -- Make a string column called "artist" --
	artist VARCHAR(50),
  -- Make an integer column called "score" --
  score INTEGER(10)
);

CREATE TABLE favorite_movies (
	id INTEGER(11) AUTO_INCREMENT NOT NULL,
    movie VARCHAR(100) NOT NULL,
    five_times BOOLEAN DEFAULT FALSE,
    score INTEGER(10),
    PRIMARY KEY (id)
  -- Create a numeric column called "id" which automatically increments and cannot be null --
  -- Create a string column called "movie" which cannot be null --
  -- Create a boolean column called "five_times" that sets the default value to FALSE if nothing is entered --
  -- Make an integer column called "score" --
  -- Set the primary key of the table to id --
);