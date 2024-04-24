CREATE TABLE tickets
(
    id INTEGER AUTO_INCREMENT NOT NULL,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    phonenumber INTEGER NOT NULL,
    mail VARCHAR(255) NOT NULL,
    movie VARCHAR(255) NOT NULL,
    amount SMALLINT NOT NULL,
    primary key (id)
);