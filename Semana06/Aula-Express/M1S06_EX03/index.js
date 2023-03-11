const express = require('express');
const app = express();

// subindo um servidor no localHost:3333
app.listen(3333, ()=>{
    console.log('Meu primeiro Servidor Node Local está online!!!')
});

