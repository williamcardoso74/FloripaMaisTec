//Utilizando a lista: ['Pedro', ‘José', ‘Aderbal', ‘Danilo', 'Luisa', 'Vitoria']

//Através de lógica de programação, adicione um ou mais nomes na lista,
// porém não é possível receber um nome igual.

//Regra 1: É necessário enviar um ou mais nomes;

//Regra 2: Caso um ou mais nomes já exista na lista retorne uma mensagem de erro;

//Regra 3: Se entre os nomes enviados,
// receber um valor diferente de uma string, retornar uma mensagem de erro;

//Regra 4: Caso se enquadre, nas primeiras 3 regras,
// retornar um log da nova lista com os nomes adicionados junto aos anteriores



function addNomes() {

    let lista = ["Pedro", "José", "Aderbal", "Danilo", "Luisa", "Vitoria"];
    let novaLista = lista;

    var nomes = [].slice.call(arguments,0);
    console.log(nomes);

    for (let i=0; i < nomes.length; i++ ) {

        if(typeof nomes[i] !== "string") {
            console.log(`O ${nomes[i]} precisa ser uma String!`)
        } else if (lista.find(n => n === nomes[i]) ) {
            console.log(`Este ${nomes[i]} já existe na lista!`)
        } else {
            novaLista.push(nomes[i])
        }

    }
     
console.log(novaLista);

}

addNomes(123,456,"Wendel");