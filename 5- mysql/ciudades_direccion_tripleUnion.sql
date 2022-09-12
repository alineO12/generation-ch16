USE sakila;

SELECT * FROM sakila.address;

/*
address - city_id / address
city -    city_id / city / country_id
country - country_id / country
*/

SELECT 
address.address,
city.city,
city-country_id
FROM address
INNER JOIN city
ON address.city_id = city.city_id;

SELECT
country.country AS Pais,
city.city AS Ciudad,
address.address AS Direccion
FROM country
INNER JOIN city ON city.country_id = country.country_id
INNER JOIN address ON address.city_id = city.city_id;