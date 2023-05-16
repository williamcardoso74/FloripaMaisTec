const express = require('express');
const app = express();

app.use(express.json());

app.post('/enviarObjeto', (req,res) => {
    const objeto = req.body;
    res.json(objeto);
    console.log(`Arquivo Json enviado ${JSON.stringify(objeto)}`);
});

// subindo um servidor no localHost:3333
app.listen(3333, ()=>{
    console.log('Servidor online!!!')
})

