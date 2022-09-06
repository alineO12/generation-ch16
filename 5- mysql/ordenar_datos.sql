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