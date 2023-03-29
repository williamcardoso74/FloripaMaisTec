const express = require('express');
const connection = require('./src/database');

const app = express();

const tarefas = [];

connection.authenticate();
console.log('Connection has been established successfully.');


app.use(express.json());  //prepara a API para receber arquivos JSON
// e é obrigatório

app.get('/', (request,response)=>{
    console.log('Entrei aqui!')
    response.json({message: "Bem Vindo!"})
});

app.post('/tarefas', (request,response)=>{

    const tarefa = {
        nome: request.body.nome,
        descricao: request.body.descricao
    };

    tarefas.push(tarefa);

    console.log("Entrei de novo!");
    console.log(request.body);
    //response.json(tarefa, 201);
    response.status(201).json(tarefa)

});

app.get('/tarefas',(request,response)=>{
    response.json(request.body.tarefas);

})

app.listen(3333, ()=> console.log('Aplicação Online'));

