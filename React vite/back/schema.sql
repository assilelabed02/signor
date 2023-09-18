-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema jwt
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema jwt
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `jwt` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `jwt` ;

-- -----------------------------------------------------
-- Table `jwt`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jwt`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 13
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `jwt`.`blog`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `jwt`.`blog` (
  `user_name` VARCHAR(45) NOT NULL,
  `blog_title` VARCHAR(45) NOT NULL,
  `blog_description` LONGTEXT NOT NULL,
  `blog_ilmage` VARCHAR(255) NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`user_name`, `user_id`),
  INDEX `fk_blog_user_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_blog_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `jwt`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
