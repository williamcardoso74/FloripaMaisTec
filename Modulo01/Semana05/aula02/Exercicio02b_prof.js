// Exercicio 2

function procurarUsuario(nome) {
    const lista = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria']
  
    if(!lista.includes(nome)){
      return console.log(O valor enviado ${nome} não consta na lista)
    }
  
    const restanteDaLista = lista.filter(nomeNaLista => nomeNaLista !== nome)
  
    console.log(nome, restanteDaLista)
  }
  
  procurarUsuario("Pedro")