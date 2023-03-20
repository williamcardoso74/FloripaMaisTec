CREATE TABLE cliente (
	id_cliente serial primary key,
	nome varchar(40) not null,
	email varchar(30) not null,
	rg varchar(11) not null,
	cpf char(11) not null,
	telefone-fixo varchar(11),
	telefone-celular varchar(11),
	endereco varchar(50) not null
);

CREATE TABLE pedido (
	id_pedido serial primary key,
	id_pedido_cliente INTEGER,
	foreign key (id_pedido_cliente) references cliente(id_cliente),
	data_pedido DATE not null,
	status_pedido varchar(15) not null,
	item varchar(25) not null,
	quantidade numeric(8,2) not null,
	data_entrega DATE,
	end_entrega varchar(40) not null,
	forma_pagamento varchar(10),
	total_pedido numeric(10,2)
)
