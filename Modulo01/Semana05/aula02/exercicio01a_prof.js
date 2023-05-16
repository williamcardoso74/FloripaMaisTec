// Exercício 1

function trocarPosicao(inicial, final) {
    const lista = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria']
  
    const novaLista = []
  
    if(inicial < 0  final < 0){
      return console.log('Não pode enviar valores menores que zero')
    }
  
    if(inicial >= lista.length  final >= lista.length) {
      return console.log('Não pode enviar valores maiores ou iguais ao tamanho da lista')
    }
  
    if(typeof inicial !== 'number' || typeof final !== 'number') {
      return console.log('O atributo enviado não é um número')
    }
  
    for (let index = 0; index < lista.length; index++) {
      if (index === inicial) {
        novaLista.push(lista[final])
        continue
      }
      if (index === final) {
        novaLista.push(lista[inicial])
        continue
      }
      novaLista.push(lista[index])
    }
  
    console.log(novaLista)
  }
  
  trocarPosicao(0, 1)