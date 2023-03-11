const express = require('express');
const app = express();

app.get('/:nome', (req,res)=> { 
    res.send('Rota de API criada pelo(a): ' + req.params.nome)
    console.log(req.params.nome);
});

// subindo um servidor no localHost:3333
app.listen(3333, ()=>{
    console.log('Servidor para Rota de API OnLine')
})

