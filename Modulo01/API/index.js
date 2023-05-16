require('dotenv').config();

const express = require("express");
const connection = require("./src/database");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Task = require("./src/models/task");
const User = require("./src/models/user");

const createTasks = require('./src/controllers/tasks/createTask');

const log = require('./src/middlewares/log');
const validateNewUser = require('./src/middlewares/validate-new-user');
const validateToken = require('./src/middlewares/validate-token');

const app = express();

app.use(express.json()); //prepara a API para receber arquivos JSON
// e é obrigatório

app.use(log); // tem que vir depois do app.use(express.json())

const tarefas = [];

connection.authenticate();
connection.sync({ alter: true });
console.log("Connection has been established successfully.");



app.get("/", (request, response) => {
  console.log("Entrei aqui!");
  response.json({ message: "Bem Vindo!" });
});

//rota para cadastrar nova tarefa
app.post("/tarefas", validateToken, createTasks);


//rota para achar as tarefas
app.get("/tarefas", validateToken, async (_request, response) => {
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

app.delete("/tarefas/:id", validateToken, async (request, response) => {
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

app.put("/tarefas/:id", validateToken, async (request, response) => {
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

// POST - Cadastro de novo usuário com criptografia da senha

app.post("/users", validateNewUser, async (request, response) => {
  // no post eu recebo os dados via body
  try {

    const userInDatabase = await User.findOne({where: {cpf: request.body.cpf}})

    if(userInDatabase) {
      return response
      .status(403)
      .json({message: "Já existe um usuário com este CPF"})
    };

    const hash = await bcrypt.hash(request.body.password, 10);

    const newUser = {
      name: request.body.name,
      cpf: request.body.cpf,
      password: hash,
    };

    const user = await User.create(newUser);

    response.status(201).json({ user });

  } catch (error) {

    response.json({message: "Não foi possível atender sua solicitação!"});

  }
});

// POST para fazer a autenticação de um login
app.post('/users/login', async (request, response) => {
  
  try {
    
    const userInDatabase = await User.findOne({
      where: {
        cpf: request.body.cpf,
      }
    })
    
    //verifica CPF
    if(!userInDatabase) {
      return response
      .status(404)
      .json({message: "CPF incorreto!"});
    };
  
    //compara as credenciais e o cpf passados pelo body com o da tabela
    const passwordIsValid = await bcrypt.compare( request.body.password, userInDatabase.password );
  
    if(!passwordIsValid) {
      response
      .status(404)
      .json({message: "CPF ou Senha incorretos!"})
    };
    
    // cria um token de segurança
    const token = jwt.sign(
      {
        id: userInDatabase.id
      },
      //'MINHA_CHAVE_SECRETA',
      process.env.CHAVE_DO_TOKEN,
      {
        expiresIn: '2h'
      }
    );

    response
    .json({
      name: userInDatabase.name,
      message: 'Login realizado com sucesso!',
      token: token
    });
  
  } catch (error) {
    response.json({message: "Não foi possível atender sua solicitação!"});
  };
    
})

app.listen(3333, () => console.log("Aplicação Online"));
