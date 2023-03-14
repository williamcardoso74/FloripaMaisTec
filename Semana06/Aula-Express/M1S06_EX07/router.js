const express = require('express');

const router = express.Router();

router.post('/incluirUser/', (req,res, next) => {

//http://localhost:3333/incluirUser?nome=William&idade=25&cargo=líder&senha=1234

    const userNome = req.query.nome;
    const userIdade = req.query.idade;
    const userCargo = req.query.cargo;
    const userSenha = req.query.senha;

    if (!userNome || !userIdade || !userCargo || !userSenha) {
        res.status(406).json({mensagem: "está faltando dados para a operação"})
    } else if (userCargo !== "líder") {
        res.status(406).json({"mensagem":"Este usuário não pode ser incluído!"});
    } else if (userIdade < 21) {
        res.status(406).json({"mensagem" : "Usuário não tem idade suficiente"});
    } else {
        next();
    };
    
},
 (req,res) => {

    const userNome = req.query.nome;
    const userIdade = req.query.idade;
    const userCargo = req.query.cargo;
    const userSenha = req.query.senha;

    const newUser = req.query;
    res.json(newUser);
    res.status(200).json({"mensagem": "Usuário inserido com sucesso", newUser});
});

router.delete('/deletarUser/', (req,res) => {

    //http://localhost:3333/deletarUser?id=1

    const userId = req.query.id;
    //const userNome = req.query.nome;
    
    let users = [
        { id: 1, nome: "João"},
        { id: 2, nome: "Gabriel"},
        { id: 3, nome: "Pedro"}
    ];

    // buscando se o Id existe no banco de dados
    let achou = users.filter((usuario) => {
        return usuario.id == userId;
    })

    if (!achou.length) {
        res.status(404).send("Id não encontrado!");

    } else {
        res
        .status(200)
        .json({"mensagem":`Usuário com Id ${userId} deletado com sucesso`})
    }
 
    //res.json(users);
   

   /*  if(achou.length) {
        res.status(200).send("Usuário deletado")
    } else {
        res.status(404).send("Id não encontrado!")
    } */

});

module.exports = router;