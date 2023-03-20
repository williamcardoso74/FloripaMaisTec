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