const Task = require('../../models/task');

async function createTasks (request, response) {
    try {
      const tarefa = {
        name: request.body.name,
        description: request.body.description,
        user_id: request.body.userId
      };
         
      if (!tarefa.name || !tarefa.description) {
        return response
          .status(400)
          .json({ message: "Nome/descrição são obrigatórios" });
      }
          
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
  };

  module.exports = createTasks;