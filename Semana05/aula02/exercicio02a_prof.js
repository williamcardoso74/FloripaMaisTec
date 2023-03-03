// Exercicio 2
// SOLUÇÃO 01

function procurarUsuario(nome) {
    const lista = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria']
  
    if(!lista.includes(nome)){
      return console.log(O valor enviado ${nome} não consta na lista)
    }
  
    const restanteDaLista = lista.filter(nomeNaLista => nomeNaLista !== nome)
  
    console.log(nome, restanteDaLista)
  }
  
  procurarUsuario("Pedro")


  // SOLUÇÃO 02

  function procurarUsuario(nome) {
    const lista = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria']
  
    const restanteDaLista = []
    let index = 0
    for(index = 0; index < lista.length; index++) {
      if(lista[index] !== nome){
        restanteDaLista.push(lista[index])
      }
    }
  
    if(index === lista.length) {
      return console.log('O valor não foi encontrado na lista')
    }
  
    console.log(nome, restanteDaLista)
  }
  
  procurarUsuario("pedro")

  