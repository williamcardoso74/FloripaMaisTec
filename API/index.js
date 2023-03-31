const express = require("express");
const connection = require("./src/database");
const Task = require("./src/models/task");

const app = express();

const tarefas = [];

connection.authenticate();
connection.sync();
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
        
          if(!tarefa.name || !tarefa.description) {
            return response
                .status(400)
                .json({"message" : "Nome/descrição são obrigatórios"})
          };
        
          /* if(!tarefa.description) {
            return response
                .status(400)
                .json({"message" : "Descrição é obrigatória"})
          }; */
        
          // fazer o tratamento se o nome já existe na tabela
          // desafio para a aula
        
          // tratamento geral
        
        
        
          // igual ao INSERT INTO task
          // e retorna o dado que foi criado no banco de dados
          const newTask = await Task.create(tarefa);
        
          //tarefas.push(tarefa);
        
          //console.log("Entrei de novo!");
          //console.log(request.body);
          //response.json(tarefa, 201);
          response.status(201).json(newTask);

    } catch (error) {
        response.status(500).json({"message": "Não conseguimos processar a sua solicitação"})
        console.log(error);
        console.log("Deu ruim")
    }
   
});



app.get("/tarefas", async (_request, response) => {

    try {
        const tasks = await Task.findAll();  // select * from tasks
        response.json(tasks);
        //response.json(request.body.tarefas);
    } catch (error) {
        response.status(500).json({message: "Não foi possível processar"})
    }
   
});


app.listen(3333, () => console.log("Aplicação Online"));
