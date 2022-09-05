-- MySQL Script generated by MySQL Workbench
-- Mon Sep  5 12:31:16 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `mydb` ;

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Schema ejemplo_producto
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `ejemplo_producto` ;

-- -----------------------------------------------------
-- Schema ejemplo_producto
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ejemplo_producto` ;
-- -----------------------------------------------------
-- Schema new_schema1
-- -----------------------------------------------------
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`CLIENTE`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`CLIENTE` ;

CREATE TABLE IF NOT EXISTS `mydb`.`CLIENTE` (
  `dni` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellidos` VARCHAR(20) NOT NULL,
  `fechaNac` VARCHAR(45) NOT NULL,
  `tlfn` VARCHAR(45) NULL,
  PRIMARY KEY (`dni`))
ENGINE = InnoDB;

USE `ejemplo_producto` ;

-- -----------------------------------------------------
-- Table `ejemplo_producto`.`CLIENTE`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ejemplo_producto`.`CLIENTE` ;

CREATE TABLE IF NOT EXISTS `ejemplo_producto`.`CLIENTE` (
  `dni` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `apellidos` VARCHAR(45) NOT NULL,
  `fechaNac` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`dni`))
ENGINE = InnoDB;


-- -----------------------------------------------------


-- -----------------------------------------------------
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Table `ejemplo_producto`.`PROVEEDOR`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ejemplo_producto`.`PROVEEDOR` ;

CREATE TABLE IF NOT EXISTS `ejemplo_producto`.`PROVEEDOR` (
  `nif` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `dirección` TEXT(61) NOT NULL,
  PRIMARY KEY (`nif`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ejemplo_producto`.`PRODUCTO`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ejemplo_producto`.`PRODUCTO` ;

CREATE TABLE IF NOT EXISTS `ejemplo_producto`.`PRODUCTO` (
  `codigo` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL DEFAULT 'ninguno',
  `precio` FLOAT NOT NULL,
  `PROVEEDOR_nif` INT NOT NULL,
  PRIMARY KEY (`codigo`),
  INDEX `fk_PRODUCTO_PROVEEDOR1_idx` (`PROVEEDOR_nif` ASC) VISIBLE,
  CONSTRAINT `fk_PRODUCTO_PROVEEDOR1`
    FOREIGN KEY (`PROVEEDOR_nif`)
    REFERENCES `ejemplo_producto`.`PROVEEDOR` (`nif`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ejemplo_producto`.`COMPRA`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ejemplo_producto`.`COMPRA` ;

CREATE TABLE IF NOT EXISTS `ejemplo_producto`.`COMPRA` (
  `CLIENTE_dni` INT NOT NULL,
  `PRODUCTO_codigo` INT NOT NULL,
  PRIMARY KEY (`CLIENTE_dni`, `PRODUCTO_codigo`),
  INDEX `fk_CLIENTE_has_PRODUCTO_PRODUCTO1_idx` (`PRODUCTO_codigo` ASC) VISIBLE,
  INDEX `fk_CLIENTE_has_PRODUCTO_CLIENTE_idx` (`CLIENTE_dni` ASC) VISIBLE,
  CONSTRAINT `fk_CLIENTE_has_PRODUCTO_CLIENTE`
    FOREIGN KEY (`CLIENTE_dni`)
    REFERENCES `ejemplo_producto`.`CLIENTE` (`dni`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_CLIENTE_has_PRODUCTO_PRODUCTO1`
    FOREIGN KEY (`PRODUCTO_codigo`)
    REFERENCES `ejemplo_producto`.`PRODUCTO` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
