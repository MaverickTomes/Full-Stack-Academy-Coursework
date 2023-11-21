
/*
  PSQL COMMANDS

    \c [db name] - moves to that database
    \dt - displays the tables in the database
    \i [file-name] - runs a sql file
    \q - quit psql

*/

/* 
  PETs
    id - PRIMARY KEY
    name - VARCHAR(50)
    breed - VARCHAR(50)
    species - VARCHAR(50)
    age - INTEGER
    size - VARCHAR(10)

*/

DROP TABLE IF EXISTS pets;
DROP TABLE IF EXISTS owners;

CREATE TABLE IF NOT EXISTS owners (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  email VARCHAR(50),
  phone VARCHAR(20),
  address TEXT
);

CREATE TABLE IF NOT EXISTS pets (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  breed VARCHAR(50),
  species VARCHAR(50),
  age INTEGER,
  size VARCHAR(10),
  ownerId INTEGER REFERENCES owners(id)
);

/* 
  Relationships:
    One to One
    One to Many
      (These two require a foreign key reference)

    Many to Many
      (Requires a third table to link them)
*/


-- INSERT INTO _____ VALUES ____;
INSERT INTO owners(name, email, phone, address)
VALUES ('Travis', 'tstrat@email.com', '555-5555', '123 Cool Dr.'),
       ('Austin', 'austin@email.com', '555-5555', '124 Cool Dr.'),
       ('Elissa', 'elissa@email.com', '555-5555', '5432 Postgres St.');


INSERT INTO pets(name, breed, species, age, size, ownerId)
VALUES ('Murpy', 'Golden Retreiver', 'Dog', 7, 'large', 1),
       ('Kai', 'Brown Mustang', 'Horse', 23, 'large', 1),
       ('Gulper', 'Guppy', 'Fish', 3, 'small', 1),
       ('Mr. Whiskers', 'Black', 'Cat', 13, 'small', 3);

INSERT INTO pets(name, breed, species, age, size)
VALUES ('Anabelle', 'Terrier', 'Dog', 13, 'small');


SELECT * FROM owners; -- Select ALL entries show all columns of owners table

SELECT name FROM owners; -- Selects only the name column of all owners

SELECT name, email FROM owners; -- Selects both columns of owners

SELECT * FROM pets
WHERE species = 'Dog'; -- All columns in pets but only ones with species 'Dog'


-- JOIN statement
--    Combining two tables together

SELECT pets.name, breed, species, address, phone 
FROM pets JOIN owners
ON pets.ownerId = owners.id;

-- If two tables have a column with the same name, you need to specify which table you want in the select

-- Without knowing the id, grab all pets that belong to 'Travis'

SELECT pets.name, owners.name
FROM owners JOIN pets
ON owners.id = pets.ownerId
WHERE owners.name = 'Travis';

-- If you know the id, you might not need to do a join unless you need values from the owners table
SELECT pets.name
FROM pets
WHERE ownerId = 1;