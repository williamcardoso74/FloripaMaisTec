// SOLUÇÃO PROFESSOR

function trocarPosicao(inicial, final) {
    const lista =  ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria']
  
    const novaLista = []
  
    for(let index = 0; index < lista.length; index++){
      if(index === inicial) {
        novaLista.push(lista[final])
        continue
      }
      if(index === final){
        novaLista.push(lista[inicial])
        continue
      }
      novaLista.push(lista[index])
    }
  
    console.log(novaLista)
  }
  
  trocarPosicao(0, 2)




// SOLUÇÃO WILLIAM

/* function trocarPosicao() {

    let lista = ['Pedro', 'José', 'Aderbal' , 'Danilo', 'Luisa', 'Vitória'];

    let pI = Number(prompt("Informe a posição inicial: "));
    let pF = Number(prompt ("Informe a posição final: "));

    if (pI <= lista.length && pF <= lista.length) {
        
        let conteudoPI = lista[pI];
        let conteudoPF = lista[pF];
        lista.splice(pI, 1, conteudoPF);
        lista.splice(pF, 1, conteudoPI);
    }

    console.log(lista);

}

trocarPosicao(); */


// SOLUÇAO RODOLFO

/* const lista = ['Pedro','José','Aderbal','Danilo','Luisa','Vitoria']

function troca(index1, index2) {
    if(index1 > lista.length || index2 > lista.length) {
        throw new Error('indice maior que o tamanho do array.')
    }

    let novoIndex1 = lista[index1]
    let novoIndex2 = lista[index2]

    lista.splice(index1, 1)
    lista.splice(index1, 0 ,novoIndex2)
    lista.splice(index2, 1, novoIndex1 )

    return lista
}

console.log(troca(2, 0)) */

