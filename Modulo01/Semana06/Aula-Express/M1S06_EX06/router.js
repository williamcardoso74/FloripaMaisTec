const express = require('express');

const router = express.Router();

router.get('/', (req,res) => {
    res.status(200).send('O arquivo router está funcionando!')
});

router.post('/incluirUser/:nome', (req,res) => {
    res.send('Usuário ' + req.params.nome + ' incluído com sucesso!')
});


router.delete('/deletarUser/:nome', (req, res)=> {

    let users = [
        { id: 1, nome: "João"},
        { id: 2, nome: "Gabriel"},
        { id: 3, nome: "Pedro"}
    ];
 
    //res.json(users);

    // buscando se o usuario existe no banco de dados
    let achou = users.filter((usuario) => {
        return usuario.nome == req.params.nome;
    })

    if(achou.length) {
        res.status(200).send("Usuário deletado")
    } else {
        res.status(404).send("Id não encontrado!")
    }

});

module.exports = router;