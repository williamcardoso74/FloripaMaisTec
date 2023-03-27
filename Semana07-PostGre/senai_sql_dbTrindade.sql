CREATE TABLE produto (
	id serial primary key,
	descricao varchar(100) not null
);

-- produto, com o varchar de até 20 caracteres



--SELECT * FROM produto;
-- seleciona tudo da tabela produto


CREATE TABLE setor (
	id serial primary key,
	nome varchar(40) not null
);


CREATE TABLE funcionario (
	id serial primary key,
	nome varchar(50) not null,
	cpf char(11) not null,
	rg char(11) not null,
	id_funcionario_setor INTEGER,
	foreign key(id_funcionario_setor) references setor(id)
);

-- altera o atributo CPF para UNIQUE
ALTER TABLE funcionario ADD CONSTRAINT unique_cpf UNIQUE (cpf);

ALTER TABLE funcionario ADD COLUMN salario decimal(11,2);

-- inserção da dados na tabela funcionario

INSERT INTO funcionario(nome,cpf,rg,id_funcionario_setor)
VALUES('Gabriel','11111111111','22222222222',5);

INSERT INTO funcionario(nome,cpf,rg,id_funcionario_setor,salario)
VALUES('William','33333333333','44444444444',1,10000.50);

INSERT INTO funcionario(nome,cpf,rg,id_funcionario_setor,salario)
VALUES('Fatima','12121212121','21212121212',2,5000.30);

INSERT INTO funcionario(nome,cpf,rg,id_funcionario_setor,salario)
VALUES ('Thamyres','13131313131','31313131313',6,8000.70);

INSERT INTO funcionario(nome,cpf,rg,id_funcionario_setor,salario)
VALUES ('Herbert','14141414141','41414141414',3,3000.80);

INSERT INTO funcionario(nome,cpf,rg,id_funcionario_setor,salario)
VALUES ('Wendel','24141414141','51414141414',5,4000.90);

INSERT INTO funcionario(nome,cpf,rg,id_funcionario_setor,salario)
VALUES('Fatima','32121212121','41212121212',2,5000.30);

-- consulta de todos os dados da tabela funcionario
SELECT * FROM funcionario;

-- UPDATE
-- atualiza o nome do funcionario para Rodolfo onde o id é 1.

UPDATE funcionario SET nome='Rodolfo' where id=1;

UPDATE funcionario SET cpf='24141414141' where id=6;


-- Usando o UPDATE atualizar todos os salários da tabela funcionario

UPDATE funcionario SET salario=3000.99 where id=1;

UPDATE funcionario SET salario=4000.11 where id=2;

UPDATE funcionario SET salario=5000.22 where id=3;

UPDATE funcionario SET SALARIO=2000.44 where id=4;

UPDATE funcionario SET salario=1000.55 where id=5;

UPDATE funcionario SET salario=6000.77 where id=6;


-- Deletar toda a linha da tabela funcionario onde o id=5

DELETE FROM funcionario WHERE id=5;
-- o delete sem a condição where, faz um drop na tabela toda


-- consulta de todos os dados da tabela funcionario
SELECT * FROM funcionario;
SELECT id,nome,cpf FROM funcionario;


-- como remover apenas uma coluna (inteira) de uma tabela
ALTER TABLE itens DROP COLUMN preco;


SELECT * FROM itens;




-- Criando a tabela pedido
CREATE TABLE pedido (
	id serial primary key,
	data DATE not null,
	descricao VARCHAR(50),
	valor FLOAT(2),
	quant INT not null,
	valor_total FLOAT(2),
	id_pedido_produto INTEGER,
	foreign key(id_pedido_produto) references produto(id)
);


CREATE TABLE IF NOT EXISTS cliente (
	id serial primary key,
	nome varchar(50) not null,
	cpf char(11) not null,
	rg char(11) not null
);


CREATE TABLE item (
	id serial primary key,
	nome varchar(70) not null,
	preco numeric(5,2)
);


CREATE TABLE dependente (
	id serial primary key,
	id_funcionario_dependente INTEGER,
	foreign key (id_funcionario_dependente) references funcionario(id),
	nome varchar(50) not null,
	cpf char(11) not null,
	rg char(11) not null
);

-- cria e deleta um banco de dados
-- CREATE DATABASE SENAI2023;
-- DROP DATABASE SENAI2023 WITH (FORCE);


-- inserir dados na tabela setor
INSERT INTO setor(nome) VALUES('Vendas');

-- consulta todos os dados da tabela setor;
SELECT * FROM setor;

INSERT INTO setor(nome) VALUES('Compras');

INSERT INTO setor(nome) VALUES('Almoxarifado');

INSERT INTO setor(nome) VALUES('Marketing'),
                              ('Manutenção'),
							  ('Financeiro');


-- Exercício
-- Criar uma tabela, inserir 3 conjuntos de dados,
-- através do alter inserir uma nova coluna,
-- atualizar e deletar alguma coluna da tabela

CREATE TABLE membros (
	id serial primary key,
	nome varchar(35) not null,
	celular char(12) not null,
	nascimento date not null
);

INSERT INTO membros(nome,celular,nascimento) VALUES ('João','048999998888', DATE '1970-08-01');
INSERT INTO membros(nome,celular,nascimento) VALUES ('José','048988887777', DATE '1974-06-25');
INSERT INTO membros(nome,celular,nascimento) VALUES ('Maria','048977776666', DATE '1980-11-19');

ALTER TABLE membros ADD COLUMN email varchar(20);

UPDATE membros SET email='assim@assim.com.br' where id=1;
UPDATE membros SET email='depois@depois.com.br' where id=2;
UPDATE membros SET email='agora@agora.com.br' where id=3;

ALTER TABLE membros DROP COLUMN nascimento;

SELECT * FROM membros;


-- UTILIZANDO MAIS OPÇÕES DO SELECT

SELECT DISTINCT nome,cpf FROM funcionario;


ALTER TABLE funcionario ADD comissao decimal(11,2);

SELECT * FROM funcionario;

UPDATE funcionario SET comissao=3000.99 where id=8;

UPDATE funcionario SET comissao=4000.11 where id=9;

UPDATE funcionario SET comissao=5000.22 where id=3;

UPDATE funcionario SET comissao=2000.44 where id=4;

UPDATE funcionario SET comissao=1000.55 where id=5;

UPDATE funcionario SET comissao=6000.77 where id=6;

UPDATE funcionario SET comissao=6000.77 where id=7;


-- select com operações aritméticas
SELECT salario+comissao FROM funcionario;

SELECT salario*1.1 FROM funcionario;

SELECT salario FROM funcionario WHERE salario>2000;

SELECT nome,salario,cpf FROM funcionario WHERE salario=6000.77;

SELECT nome,salario,cpf FROM funcionario WHERE salario<>6000.77;

SELECT nome,salario FROM funcionario WHERE salario>=1000;

SELECT nome,salario FROM funcionario WHERE salario <=3000;

SELECT nome,salario FROM funcionario WHERE comissao<3000;

SELECT nome,salario FROM funcionario WHERE comissao<>1000.55;


-- select todos os nomes que iniciam com 'A'
SELECT nome,salario FROM funcionario where NOME like 'W%';

-- select todos os nomes que terminam com 'am'
SELECT nome,salario,comissao FROM funcionario WHERE nome LIKE '%am';


-- select todos os nomes que tem a segunda letra com 'a'
SELECT nome,comissao FROM funcionario WHERE nome LIKE '_a%';


-- select com AND
select nome FROM funcionario WHERE salario<2000 AND comissao=1000.55;

-- select com AND e OR
select nome,salario,comissao FROM funcionario WHERE salario>1000 OR comissao<2000;

-- select com ORDER BY (ascendente)
select nome,cpf from funcionario order by nome;
-- ou
select nome,cpf from funcionario order by nome ASC;


-- select com ORDER BY (descendente)
select nome,cpf from funcionario order by nome DESC;

select id,nome,cpf from funcionario order by id;


-- select para saber quais salarios estão NULL
select NOME,CPF from funcionario WHERE salario IS NULL;

SELECT NOME,CPF FROM FUNCIONARIO where nome is 'Herbert';

SELECT nome,salario,cpf,id FROM funcionario WHERE NOT(salario>2000 AND id=2);

-- select passando os nomes para upper case
SELECT UPPER(NOME) from funcionario;

-- select passando os nomes para lower case
SELECT LOWER(NOME) FROM funcionario;

-- select os tres primeiros caracteres do atributo nome
SELECT SUBSTRING(NOME,1,3) FROM funcionario;

SELECT LENGTH(nome) FROM funcionario;


-- FUNÇÕES DE GRUPO

-- conta quantos registros tem na tabela funcionario
SELECT COUNT(*) FROM funcionario;

-- quantos nomes tem na tabela funcionario
SELECT COUNT(nome) FROM funcionario;

-- soma todos os salários na tabela funcionario
SELECT SUM(salario) FROM funcionario;

-- faz a média dos salários da tabela funcionario
-- AVERAGE

SELECT AVG(salario) FROM funcionario;

-- retorna o nome de acordo com a ordem alfabética
--retorna nome com o mais proximo do inicio do alfabeto "a"
SELECT MIN(nome) FROM funcionario;
--ordem alfabetica, ultima letra
SELECT MAX(nome) FROM funcionario;

--formata o retorno da consulta para 2 casas decimais
SELECT ROUND(AVG(salario),2) from funcionario;


-- JOIN, 

SELECT funcionario.nome, setor.nome FROM funcionario
JOIN setor ON funcionario.id_funcionario_setor = setor.id;

-- LEFT JOIN,
SELECT funcionario.nome, setor.nome FROM funcionario
LEFT JOIN setor ON funcionario.id_funcionario_setor = setor.id;

-- right join,
SELECT funcionario.nome, setor.nome FROM funcionario
RIGHT JOIN setor ON funcionario.id_funcionario_setor = setor.id;



SELECT f.nome, f.salario, s.nome FROM funcionario f JOIN setor s ON f.id_funcionario_setor=s.id

SELECT f.nome, s.nome FROM funcionario f LEFT JOIN setor s ON f.id_funcionario_setor=s.id
--dps do from fica definido o left

SELECT f.nome, s.nome FROM funcionario f RIGHT JOIN setor s ON f.id_funcionario_setor=s.id

SELECT funcionario.nome, setor.nome FROM funcionario LEFT OUTER JOIN setor ON funcionario.id_funcionario_setor=setor.id

INSERT INTO dependentes(nome,idade,cpf,rg) VALUES ('branca',5,'12345678999','98765432111')
INSERT INTO dependentes(nome,idade,cpf,rg,id_funcionario_dependente) VALUES ('thunder',8,'55345678999','66765432111',3)
SELECT f.nome, d.nome FROM funcionario f LEFT JOIN dependentes d ON f.id= d.id_funcionario_dependente
SELECT f.nome, d.nome FROM funcionario f RIGHT JOIN dependentes d ON f.id= d.id_funcionario_dependente
