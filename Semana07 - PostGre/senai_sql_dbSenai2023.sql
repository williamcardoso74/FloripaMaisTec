CREATE TABLE teste1 (
	id serial primary key
);

CREATE TABLE teste2 (
	id serial primary key
);

-- deleta a tabela teste1
DROP TABLE teste1;

-- deleta o banco de dados;
DROP DATABASE senai2023 WITH (FORCE);


-- altera o nome da tabela, no banco de dados Trindade
ALTER TABLE item RENAME TO itens;


-- altera a tabela funcionario adicionando o campo salário
-- com o tipo decimal.
-- no banco de dados Trindade

ALTER TABLE funcionario ADD salario decimal(11,2);