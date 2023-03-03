


function buscarLista(nome) {

    const lista = ['Pedro', 'José', 'Aderbal' , 'Danilo', 'Luisa', 'Vitória'];
    let novaLista = [];
    console.log(lista);
    
    let nomeAchado = lista.find((pessoa) => {
        return pessoa === nome})

    console.log(nomeAchado);
    
    if (nomeAchado) {

        let i=0;
        for (i=0; i < lista.length ; i++) {

            if (lista[i] !== nomeAchado ) {
                novaLista.push(lista[i])
        }
        
        }
       
    } else {
        console.log("Nome não encontrado na lista!")
    };

    console.log(nome);
    console.log(novaLista)
};
    
buscarLista("José");


    