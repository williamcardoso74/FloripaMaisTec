function deletarDuplicados() {

    const lista = ["Pedro", "José", "Aderbal", "Danilo", "Luisa", "Vitória", "Luis", "Danilo", "José"];
  
    let nomeDuplicado = [];
    let novaLista = [];
    let nome;

    for (let i=0; i < lista.length ; i++) {

        let nome = lista[i]
        if(novaLista.includes(nome)) {
            nomeDuplicado.push(nome)
        } else {
            novaLista.push(nome);
        }
    }
    console.log(nomeDuplicado)
    console.log(novaLista);
}

deletarDuplicados();