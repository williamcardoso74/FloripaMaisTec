
// usar reduce em array - Aula 01 - Semana 03

var ePreco;
var eSoma;
var total;

let preco = document.getElementById("preco").value;
let somar = document.getElementById("somar").value;

/* const changePreco = (event) => {ePreco.value=event.target.value}
const changeSoma = (event) => {eSoma.value=event.target.value}
    
somar.addEventListener('click',calcular)
preco.addEventListener('change',changePreco) */

function calcular () {

    // fluxo que se repete
    // teste se acabou de somar itens
    // se não acabou o fluxo continua
    // se acabou o fluxo acaba
    // no final digita o dinheiro
    // subtrai o soma do caixa com o dinheiro
    // e da o troco

    // usar fluxo while


    /* if ( preco.value == 0) {
      
    } else {
      

    } */


    while ( preco.value != 0) {
        
        console.log("preço " + preco);
        total =+ preco;
    };

    let pagamento = Number(window.prompt("Valor do Pagamento? "));
    let troco = pagamento - total;
    console.log('O seu troco é ' + troco);

    

}

