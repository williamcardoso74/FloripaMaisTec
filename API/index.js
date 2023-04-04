const express = require("express");
const connection = require("./src/database");

const Task = require("./src/models/task");
const User = require("./src/models/user");

const app = express();

const tarefas = [];

connection.authenticate();
connection.sync({ alter: true });
console.log("Connection has been established successfully.");

app.use(express.json()); //prepara a API para receber arquivos JSON
// e é obrigatório

app.get("/", (request, response) => {
  console.log("Entrei aqui!");
  response.json({ message: "Bem Vindo!" });
});

app.post("/tarefas", async (request, response) => {
  try {
    const tarefa = {
      name: request.body.name,
      description: request.body.description,
    };

    // um variável com
    // "" é false
    // 0 é false
    // false é false
    // null é false
    // undefined é false

    if (!tarefa.name || !tarefa.description) {
      return response
        .status(400)
        .json({ message: "Nome/descrição são obrigatórios" });
    }

    /* if(!tarefa.description) {
            return response
                .status(400)
                .json({"message" : "Descrição é obrigatória"})
          }; */

    // fazer o tratamento se o nome já existe na tabela
    // desafio para a aula

    const findTask = await Task.findOne({
      where: { name: tarefa.name },
    });

    if (findTask) {
      return response
        .status(400)
        .json({ message: "Tarefa já existente, crie uma nova" });
    }

    // igual ao INSERT INTO task
    // e retorna o dado que foi criado no banco de dados
    const newTask = await Task.create(tarefa);

    //tarefas.push(tarefa);

    response.status(201).json(newTask);
  } catch (error) {
    response
      .status(500)
      .json({ message: "Não conseguimos processar a sua solicitação" });
    console.log(error);
    console.log("Deu ruim");
  }
});

app.get("/tarefas", async (_request, response) => {
  try {
    const tasks = await Task.findAll(); // select * from tasks
    response.json(tasks);
    //response.json(request.body.tarefas);
  } catch (error) {
    response.status(500).json({ message: "Não foi possível processar" });
  }
});

// operação DELETE
// igual DELETE FROM TASKS WHERE ID = id que recebi

app.delete("/tarefas/:id", async (request, response) => {
  try {
    await Task.destroy({
      where: { id: request.params.id },
      force: true,
    });
    response
      .status(204)
      .json({ message: `tarefa com id ${request.params.id} deletada` });
  } catch (error) {
    response.status(400);
  }
});

// METODO PUT - atualizar dados no banco de dados

app.put("/tarefas/:id", async (request, response) => {
  //console.log(request.params.id);
  //console.log(request.body);

  try {
    // pesquisar se o id já existe na tabela
    //Task.findOne({where: {id: request.params.id}})
    // ou pode escrever da forma abaixo, que é mais simples
    const taskInDatabase = await Task.findByPk(request.params.id);

    if (!taskInDatabase) {
      return response.status(404).json({ message: "Tarefa não encontrada!" });
    }

    // altera os dados da tabela com os dados do request.body
    taskInDatabase.name = request.body.name || taskInDatabase.name;
    taskInDatabase.description = request.body.description;

    // salva os dados na tabela
    await taskInDatabase.save();

    response.json(taskInDatabase);
  } catch (error) {}
});

// POST - Cadastro de novo usuário

app.post("/users", async (request, response) => {
  // no post eu recebo os dados via body
  try {
    const newUser = {
      name: request.body.name,
      cpf: request.body.cpf,
      password: request.body.password,
    };

    const user = await User.create(newUser);

    response.status(201).json({ user });
  } catch (error) {}
});

app.listen(3333, () => console.log("Aplicação Online"));
