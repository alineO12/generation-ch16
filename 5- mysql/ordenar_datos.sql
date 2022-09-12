USE world;

SELECT * FROM country;

SELECT Name, Population FROM country ORDER BY Population DESC; 

SELECT Name, Population FROM country WHERE Name = 'México';

SELECT * FROM country WHERE Name = 'México';

SELECT 5 + 5;

-- Alias
SELECT Name AS Nombre_de_pais, Population AS 'Población del país' FROM country ORDER BY Nombre_de_pais DESC;

SELECT DISTINCT Continent FROM country; -- Filtra los datos repetidos

SELECT * FROM country WHERE LifeExpectancy < 50 ORDER BY LifeExpectancy DESC;

SELECT * FROM country WHERE Continent != 'North America' ORDER BY Continent ASC;

SELECT * FROM country WHERE Population BETWEEN 50000000 AND 70000000 ORDER BY Population DESC;

SELECT * FROM country WHERE Population NOT BETWEEN 50000000 AND 70000000 ORDER BY Population DESC;

-- operadores lógicos
-- OR
SELECT * FROM country WHERE Continent  = 'Asia' OR Continent = 'Europe' OR Continent = 'North America';

-- operador IN 
SELECT * FROM country WHERE Continent IN ('Asia', 'Europe', 'North America') ORDER BY Continent;
SELECT * FROM country WHERE Continent NOT IN ('Asia', 'Europe', 'North America') ORDER BY Continent;

-- like sirve para buscar un patrón en específico
-- '%' buscar cualquier cantidad de caracteres
-- '_' especificamos un carácter

SELECT Name FROM country WHERE Name LIKE '%as%';
SELECT Name FROM country WHERE Name LIKE '%e__a';
SELECT Name FROM country WHERE Name LIKE '%i_o%';