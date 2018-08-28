CREATE TABLE `pictures` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` varchar NOT NULL,
	`uri` varchar NOT NULL,
	`type` varchar NOT NULL,
	`date` TIME NOT NULL,
	`user_id` varchar NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `users` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`username` varchar(10000) NOT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE `pictures` ADD CONSTRAINT `pictures_fk0` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`);
