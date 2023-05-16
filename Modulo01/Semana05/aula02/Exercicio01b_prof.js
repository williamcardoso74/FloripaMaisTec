// Exercício 1

function trocarPosicao(inicial, final) {
    const lista = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria']
  
    if(inicial < 0  final < 0) return console.log('Não pode enviar valores menores que zero')
  
    if(inicial >= lista.length  final >= lista.length) return console.log('Não pode enviar valores maiores ou iguais ao tamanho da lista')
  
    if(typeof inicial !== 'number' || typeof final !== 'number') return console.log('O atributo enviado não é um número')
  
    const novaLista = lista.map((_, index) => {
      if(index === inicial) return lista[final]
      if(index === final) return lista[inicial]
      return lista[index]
    })
  
    console.log(novaLista)
  }
  
  trocarPosicao(0, 1)