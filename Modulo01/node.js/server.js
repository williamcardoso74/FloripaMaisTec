const path = require ('path')

const chaves = ["teste", "casa", "valor", "acesso"]

const dados = {
    "teste": 1,
    "casa": "Florianopolis",
    "valor": 200,
    "acesso": {
        "teste": 2
    }
}

console.log(dados [chaves[3]] [chaves[0]])

chaves.map((key) => {
    if(key === "acesso") {
        console.log(dados[key]['teste'])
        return
    }
    console.log(dados[key])
})