SHOW DATABASES;

CREATE DATABASE tienda;

USE tienda;

DROP sys;

DROP DATABASE tienda;

DROP DATABASE sys;

DROP DATABASE mydb;

DROP DATABASE esquema;

DROP DATABASE world;
DROP DATABASE escuela;

CREATE TABLE clientes(
cliente_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre CHAR(50) NOT NULL,
apellido CHAR(50) NOT NULL,
telefono CHAR(50) NOT NULL,
direccion VARCHAR(150) NOT NULL
);

INSERT INTO clientes (nombre, apellido, telefono, direccion)
VALUES ('Pedro', 'Páramo', '5555555234', 'Comala'),
('Raul', 'Sanchez', '5555555234', 'Comala'),
('Victor', 'Fernandez', '5555555234', 'Comala'),
('Hugo', 'Zepeda', '5555555234', 'Comala');
SELECT * FROM clientes;

DELETE FROM clientes
WHERE cliente_id = 8;
