-- creacion de la base de datos
CREATE DATABASE botanicos;
USE botanicos;
SELECT * FROM categoria;


-- creacion de las tablas
CREATE TABLE cliente(
id_cliente  INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
nombre VARCHAR(250) NOT NULL,
correo VARCHAR(250) NOT NULL, 
telefono VARCHAR(250) NOT NULL,
tipo_cliente VARCHAR(250) NOT NULL
);

CREATE TABLE categoria(
id_categoria INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nivel_de_luz VARCHAR(255) NOT NULL,
tipo_de_cuidado VARCHAR(255) NOT NULL,
tipo_de_riego VARCHAR(255) NOT NULL
);

CREATE TABLE productos(
id_producto INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre_producto VARCHAR(255) NOT NULL,
precio DECIMAL(5,2) NOT NULL,
id_categoria INT NOT NULL,
stock INT NOT NULL,
foreign key(id_categoria)
REFERENCES categoria(id_categoria)
);

CREATE TABLE orden_compra(
id_compra INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
id_cliente  INT NOT NULL, 
id_producto  INT NOT NULL, 
direccion VARCHAR(250) NOT NULL,
fecha_compra DATE NOT NULL,
fecha_entrega DATE NOT NULL,
total DECIMAL(5,2) NOT NULL,
foreign key(id_cliente)
REFERENCES cliente(id_cliente)
);

CREATE TABLE proveedor(
 id_proveedor INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
id_producto INT NOT NULL,
nombre_proveedor VARCHAR(255) NOT NULL,
direccion VARCHAR(255) NOT NULL,
rfc VARCHAR(20) NOT NULL,
telefono VARCHAR(20) NOT NULL,
foreign key(id_producto)
REFERENCES productos(id_producto)
);

CREATE TABLE producto_orden_compra (
  `productos_id_producto` INT NOT NULL,
  `orden_compra_id_compra` INT NOT NULL,
  PRIMARY KEY (`productos_id_producto`, `orden_compra_id_compra`),
  INDEX `fk_productos_has_orden_compra_orden_compra1_idx` (`orden_compra_id_compra` ASC) VISIBLE,
  INDEX `fk_productos_has_orden_compra_productos1_idx` (`productos_id_producto` ASC) VISIBLE,
  CONSTRAINT `fk_productos_has_orden_compra_productos1`
    FOREIGN KEY (`productos_id_producto`)
    REFERENCES `botanicos`.`productos` (`id_producto`),    
  CONSTRAINT `fk_productos_has_orden_compra_orden_compra1`
    FOREIGN KEY (`orden_compra_id_compra`)
    REFERENCES `botanicos`.`orden_compra` (`id_compra`)
    );
-- valores tabla categoría
INSERT INTO categoria(nivel_de_luz, tipo_de_cuidado, tipo_de_riego)
VALUES ('Sombra', 'Cuidado complejo', 'riego moderado');

INSERT INTO categoria(nivel_de_luz, tipo_de_cuidado, tipo_de_riego)
VALUES ('Luz indirecta', 'Fácil de usar', 'riego frecuente');

INSERT INTO categoria(nivel_de_luz, tipo_de_cuidado, tipo_de_riego)
VALUES ('Luz directa', 'Requiere cuidado', 'riego ocasional');

INSERT INTO categoria(nivel_de_luz, tipo_de_cuidado, tipo_de_riego)
VALUES ('Luz directa', 'Fácil de usar', 'riego frecuente');

INSERT INTO categoria(nivel_de_luz, tipo_de_cuidado, tipo_de_riego)
VALUES ('Sombra', 'Cuidado complejo', 'riego ocasional');

SELECT * FROM categoria;

-- valores tabla productos
INSERT INTO productos(nombre_producto, precio, id_categoria, stock)
VALUES ('Monstera Deliciosa', 450, 1, 10);

INSERT INTO productos(nombre_producto, precio, id_categoria, stock)
VALUES ('Amoena', 400, 2, 7);

INSERT INTO productos(nombre_producto, precio, id_categoria, stock)
VALUES ('Dracena Piña', 120, 3, 5);

INSERT INTO productos(nombre_producto, precio, id_categoria, stock)
VALUES ('Cactus Órgano Chico', 200, 4, 2);

INSERT INTO productos(nombre_producto, precio, id_categoria, stock)
VALUES ('Sansevieria', 200, 5, 6);

SELECT * FROM productos;

-- valores tabla proveedor
INSERT INTO proveedor(id_proveedor, id_producto, nombre_proveedor, direccion, rfc, telefono)
VALUES (1, 1, 'Cristina Rivera', 'Calle Pirules, No. 560, Colonia, Centro. CDMX. CP. 8790', 'CRKU897612', '5567890123');

INSERT INTO proveedor(id_proveedor, id_producto, nombre_proveedor, direccion, rfc, telefono)
VALUES (2, 2, 'Elena Garro', 'Calle Sur, No. 78, Colonia, Cibeles. Guadalajara, Guadalajara. CP. 98070', 'EGUT908715', '5516189234');

INSERT INTO proveedor(id_proveedor, id_producto, nombre_proveedor, direccion, rfc, telefono)
VALUES (3, 3, 'Valeria Luiselli', 'Calle Mónaco, No. 752, Colonia, Paseo del Ejido. Morelia, Michoacán. CP. 8790', 'VLTR934567', '5587761265');

INSERT INTO proveedor(id_proveedor, id_producto, nombre_proveedor, direccion, rfc, telefono)
VALUES (4, 4, 'Susan Sontag', 'Calle República del Norte, No. 87, Colonia, Centro. CDMX. CP. 98765', 'STGK896513', '5598076514');

INSERT INTO proveedor(id_proveedor, id_producto, nombre_proveedor, direccion, rfc, telefono)
VALUES (5, 5, 'Andrea Chapela', 'Calle Pino, No. 56, Colonia, Colonia, Del Carmen. Tuxtla Gutiérrez, Chiapas. CP. 765433', 'ACHO951234', '5555908716');

SELECT * FROM proveedor;


