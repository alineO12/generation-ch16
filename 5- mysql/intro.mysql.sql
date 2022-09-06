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
 
DROP TABLE compra;
DROP TABLE comrpa;

CREATE TABLE compra (
orden_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
cliente_id INT NOT NULL,
fecha_compra DATE NOT NULL,
total DECIMAL NOT NULL,
cantidad_productos INT NOT NULL
);

ALTER TABLE compra
ADD CONSTRAINT fk_cliente_compra
FOREIGN KEY (cliente_id)
REFERENCES clientes (cliente_id);

INSERT INTO compra(cliente_id, fecha_compra, total, cantidad_productos)
VALUES (1, '2022-09-06', 300.50, 2);

SELECT * FROM compra;

DROP TABLE clientes;
DROP TABLE compra;

CREATE TABLE clientes(
cliente_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre CHAR(50) NOT NULL,
apellido CHAR(50) NOT NULL,
telefono CHAR(50) NOT NULL,
direccion VARCHAR(150) NOT NULL
);

CREATE TABLE compra (
orden_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
cliente_id INT NOT NULL,
fecha_compra DATE NOT NULL,
total DECIMAL (5,2) NOT NULL,
cantidad_productos INT NOT NULL
);

DROP FOREIGN KEY fk_clientes_compra;

DROP TABLE clientes;
DROP TABLE compra;







