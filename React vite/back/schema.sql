-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema vite_schema
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema vite_schema
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `vite_schema` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `vite_schema` ;

-- -----------------------------------------------------
-- Table `vite_schema`.`blog_model`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vite_schema`.`blog_model` (
  `blog_id` INT NOT NULL AUTO_INCREMENT,
  `blog_user_name` VARCHAR(45) NOT NULL,
  `blog_description` LONGTEXT NOT NULL,
  `blog_title` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`blog_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `vite_schema`.`user_model`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vite_schema`.`user_model` (
  `user_id` INT NOT NULL,
  `user_name` VARCHAR(45) NULL DEFAULT NULL,
  `user_pseudoName` VARCHAR(45) NULL DEFAULT NULL,
  `user_age` INT NULL DEFAULT NULL,
  `user_gender` VARCHAR(45) NULL DEFAULT NULL,
  `user_profilePicture` LONGTEXT NULL DEFAULT NULL,
  PRIMARY KEY (`user_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
