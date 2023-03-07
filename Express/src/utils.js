const sistemaDeArquivos = require('fs') //fileSystem

function criarPasta(nomeDaPasta){
  if(sistemaDeArquivos.existsSync(nomeDaPasta)) {
    return true
  }
  sistemaDeArquivos.mkdirSync(nomeDaPasta)
  return false
}

function criarArquivo (caminhoRelativo, nomeDoArquivo, dados) {
  
  sistemaDeArquivos.writeFileSync(caminhoRelativo + nomeDoArquivo, JSON.stringify(dados))
  return false

}

module.exports = {
  criarPasta,
  criarArquivo
}