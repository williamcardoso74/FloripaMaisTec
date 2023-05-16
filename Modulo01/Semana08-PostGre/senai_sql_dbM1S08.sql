CREATE TABLE membros (
	id serial primary key,
	nome varchar(35) not null,
	celular char(12) not null,
	nascimento date not null
);

INSERT INTO membros(nome,celular,nascimento)
VALUES ('João','048999998888', DATE '1970-08-01');

INSERT INTO membros(nome,celular,nascimento)
VALUES ('José','048988887777', DATE '1974-06-25');

INSERT INTO membros(nome,celular,nascimento)
VALUES ('Maria','048977776666', DATE '1980-11-19');

INSERT INTO membros(nome,celular,nascimento) 
VALUES ('Pedro', '048988885555', DATE '1990-06-21');

SELECT * FROM membros;


ALTER TABLE membros ADD email varchar(20);

UPDATE membros SET email='assim@assim.com.br' where id=1;
UPDATE membros SET email='depois@depois.com.br' where id=2;
UPDATE membros SET email='agora@agora.com.br' where id=3;
UPDATE membros SET email='futuro@futuro.com.br' where id=4;



ALTER TABLE membros DROP COLUMN nascimento;

SELECT id,nome,celular FROM membros;


