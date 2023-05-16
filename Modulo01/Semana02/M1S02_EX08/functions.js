// usar reduce em array - Aula 01 - Semana 03
// SOLUÇÃO DO DANIEL


/* var ePreco;
var eSoma;
var total;

function calcular() {

    let preco = document.getElementById("preco");
    let somar = document.getElementById("somar");
    
    const changePreco = (event) => {
      ePreco = event.target.value;
    };
    const changeSoma = (event) => {
      eSoma = event.target.value;
    };
    
    somar.addEventListener("click", calcular);
    preco.addEventListener("change", changePreco);

    if (preco.value > 0) {

      console.log("preço " + preco.value);
      total = +preco.value;
      
    } else {

      var pagamento = prompt("Valor do Pagamento? ");
      var troco = pagamento - total;

      console.log(`O total foi de ${total}`);
      console.log(`Seu pagamento foi de ${pagamento}`);
      console.log(`Seu troco é de ${troco}`);

    };
  
}; */



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

// SOLUÇÃO 

    alert("seja bem vindo ao padariaTech");
    let start = true;
    let produtos = [];
    let total = 0;
    while (start) {
      const addProduct = prompt("você quer adicionar um produto? - sim:1, nao:2");
      if (addProduct == 1) {
        const nome = prompt("Digite o nome do produto");
        const preco = prompt("Digite o preço do produto");
        const quantidade = prompt("Digite a quantidade do produto");
        const produto = {
          nome: nome,
          preco: Number(preco),
          quantidade: Number(quantidade),
        };
        produtos.push(produto);
      } else {
        produtos.forEach((produto) => {
          total = total + produto.preco * produto.quantidade;
        });
        start = false;
        alert(O valor total do seu pedido é:${total});
        let dinheiro = Number(prompt("Digite o dinheiro"));
        alert("Seu troco é "+(dinheiro-total));
        alert("Obrigado por comprar na padariaTech");
        console.log(produtos);
      }
    }
    
