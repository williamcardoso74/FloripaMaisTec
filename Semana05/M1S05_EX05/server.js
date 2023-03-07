// Criar um algoritmo que conte o total de vogais baseado na string que foi enviada.
//Regra 1: Caso não seja uma string, retorne uma mensagem de erro.
//Regra 2: Caso identifique pelo menos 1 vogal, retorne o número exato.
//Regra 3: Caso na palavra, não conste nenhuma vogal,
//retorne uma mensagem informe que não tem nenhuma vogal


function buscarVogal(texto) {

    let vogais = ["a","A","e","E","i","I","o","O","u","U"];
    let contador = 0;
    let listaVogais = [];
    
    if (typeof texto !== "string") {
        console.log("Texto não está em formato String!");
        return;
    }

    let text = texto;
    console.log(text);

    for (let i = 0; i < text.length; i++) {
        
        for ( let v=0; v < vogais.length ; v++) {
            
            if (text[i] === vogais[v]) {
                    contador++;
                    listaVogais.push(text[i]);
            }

            }
        }

    console.log(listaVogais);
    console.log(`O número total é de ${contador} vogais`);
    
}

buscarVogal("testando");