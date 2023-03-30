const express = require('express');

const app = express();

app.use(express.json());

const port = 3333;

app.listen(port,()=>{
    console.log(`Servidor ${port} Trindade Places OnLine`)
});

app.post('/places', (req,res)=>{
    res.json(req.body);
});