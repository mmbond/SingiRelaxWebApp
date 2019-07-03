CREATE DATABASE IF NOT EXISTS `relax`;
USE `relax`;

DROP TABLE IF EXISTS `users`;

CREATE TABLE  `users`
(
    user_id    INT AUTO_INCREMENT PRIMARY KEY KEY,
    address    VARCHAR(255) NULL,
    email      VARCHAR(255) NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    interests  VARCHAR(255) NULL,
    last_name  VARCHAR(255) NOT NULL,
    password   VARCHAR(255) NOT NULL,
    phone      VARCHAR(255) NULL,
    created_at DATETIME     NOT NULL,
    user_type  VARCHAR(255) NOT NULL
)
    ENGINE = MyISAM;


DROP TABLE IF EXISTS `events`;

-- auto-generated definition
CREATE TABLE `events`
(
    event_id    INT AUTO_INCREMENT PRIMARY KEY KEY,
    attendance  INT          NOT NULL,
    date_from   DATETIME     NOT NULL,
    date_to     DATETIME     NOT NULL,
    description VARCHAR(255) NOT NULL,
    event_type  VARCHAR(255) NOT NULL,
    location    VARCHAR(255) NOT NULL,
    name        VARCHAR(255) NOT NULL,
    rating      DOUBLE       NULL
)
    ENGINE = MyISAM;

DROP TABLE IF EXISTS `users_events`;

-- auto-generated definition
CREATE TABLE `users_events`
(
    user_id  INT NOT NULL,
    event_id INT NOT NULL
)
    ENGINE = MyISAM;

CREATE INDEX FK1
    ON `users_events` (user_id);

CREATE INDEX  FK2
    ON `users_events` (event_id);

