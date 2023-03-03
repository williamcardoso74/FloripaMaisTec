const express = require('express')
const application = express()
application.use(express.json())

application.get('/listagem/:nome', (requisicao, resposta) => {
  //body, path, query
  const { nome } = requisicao.params
  const { idade, telefone } = requisicao.query
  console.log(nome, telefone)
  resposta.status(400).json({"nome": nome})
})

application.get('/rotadopedro', (requisicao, resposta) => {
  resposta.send("Hello World")
})

application.listen(3333)