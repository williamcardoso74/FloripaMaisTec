const express = require('express');
const app = express();

app.use(express.json());

app.get('/:nome', (req, res)=> {
    console.log(req.params);
    res.send('Olá, meu nome é ' + req.params.nome);
})


app.post('/enviaObjeto', (req,res)=>{
    const objeto = req.body;
    res.json(objeto);
    console.log(`Arquivo Json enviado com sucesso ${JSON.stringify(objeto)}`);
})

/* { 
    "nome": "William",
    "idade": 19
} */

app.post('/create',
// aqui está a implementação de um middleware
(req, res, next)=> {
    if(req.body.idade >= 18) {
        next();
    }else{
        res.status(403).json({mensagem: 'Usuário menor de idade'})
    }
},
(req, res)=>{
    // toda a implementação da rota
    res.send('Usuário Criado!')
});


//retornando um arquivo HTML
const path = require('path');

app.get('/list', (req,res)=>{
    res.sendFile(path.join(__dirname, '/teste.txt'))
    console.log(path);
});

// subindo um servidor no localHost:3333
app.listen(3333, ()=>{
    console.log('Servidor online!!!')
})
