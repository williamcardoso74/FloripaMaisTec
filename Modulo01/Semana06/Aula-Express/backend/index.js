const express = require('express');
const app = express();

app.use(express.json());

const routers = require('../sources/routes/user-route');
app.use(routers);

// Verbo ou método HTTP GET

app.get('/list', (req, res)=>{
    console.log("Cheguei !")
    res.send("<div style='background-color:red;'>Requisição deu sucessso</div>");
    // res.send([{"nome":"William"},{"nome":"Wendel"}])
})

// Colocando usuario na URL
app.get('/get-user/:id/:nome', (req, res)=>{
    console.log(req.params);
    res.send(":id = " + req.params.id + "     :nome = "+ req.params.nome);
});


// Verbo ou método HTTP POST

app.post('/create', (req, res)=>{
    console.log(req.body);
    res.send({mensagem:"Usuário criado com sucesso!"});
});

// Verbo ou método HTTP DELETE

app.delete("/deletedUser/:id", (req, res)=> {

    /* let number = Number(req.params.id);

    if(typeof number == "number"){
        res.status(415).send("Não é um número!")
    } */

    // simulando um array vindo do banco de dados
    /* let users = [
        { id: 1, nome: "João"},
        { id: 2, nome: "Gabriel"},
        { id: 3, nome: "Pedro"}
    ];
    */
   res.json(users);

    // buscando se o usuario existe no banco de dados
    let achou = users.filter((usuario) => {
        return usuario.id == req.params.id;
    })

    if(achou.length) {
        res.status(200).send("Usuário deletado")
    } else {
        res.status(404).send("Id não encontrado!")
    }

});



app.listen(3333, ()=>{
    console.log("Servidor Online")
});