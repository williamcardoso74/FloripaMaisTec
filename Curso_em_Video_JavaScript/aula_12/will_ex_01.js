// operador ternário

var agora = new Date()
var nascimento = new Date(1920,01,27)
var idade = agora.getFullYear() - nascimento.getFullYear()
var res = (idade < 18) ? 'menor de idade': 'maior de idade'
console.log(`Você tem ${idade} anos e é ${res}`)