console.log("Hello World");

let estoque = [
  { codigoBarra: 1111, preco: 2, produto: "arroz" },

  { codigoBarra: 2222, preco: 4, produto: "feijao" },

  { codigoBarra: 3333, preco: 3, produto: "açucar" },

  { codigoBarra: 4444, preco: 5, produto: "leite" },
];



function addProdutos() {
  const addItemEstoque = prompt(
    "Deseja adicionar um produto ao Estoque 1.Sim 2.Não"
  );

  if (addItemEstoque == 1) {
    //alert("Adicione o produto que deseja");
    const addCodigoBarra = prompt("Qual é o código do produto?");
    const addPreco = prompt("Qual é o preço do produto?");
    const addProduto = prompt("Qual é o nome do produto?");

    const itemEstoque = {
      codigoBarra: addCodigoBarra,
      preco: Number(addPreco),
      produto: addProduto,
    };
    estoque.push(itemEstoque);
  } else {
    console.log(estoque);
  }
}

class CaixaRegistradora {
  _codigo = Number;
  _quantidade = Number;
  _cliente = String;

  constructor(codigo, quantidade, cliente) {
    this._codigo = codigo;
    this._quantidade = quantidade;
    this._cliente = cliente;
  }

  informaCliente() {
    const cliente_a = prompt("Qual é o nome do cliente?");
    this._cliente = cliente_a;

    if (cliente_a != "") {
      //console.log(cliente_a);
      return cliente_a;
    } else {
      alert("Digite o nome de um cliente!");
      return;
    }
  }

  compraCliente() {

    let compraFinal = [];
    let subTotal = 0;
    var total = 0;
    
    alert(`${this._cliente}, vamos começar a compra!`);
    let addProduto = true;

    while(addProduto) {

      let codigoBarraItem = prompt(
        "Digite o código para comprar ou 0 para terminar:"
      );
      //console.log(codigoBarraItem);

      let existeCodigo = estoque.find((p) => {
        return p.codigoBarra === Number(codigoBarraItem);
      });

      //console.log(existeCodigo);
      

      if (existeCodigo) {
        
        let precoItem = existeCodigo.preco;

        /* precoItem = estoque.find((prod) => {
          return prod.preco;
        });
 */
        //console.log(precoItem);
        
        const quantidadeItem = Number(prompt("Qual é a quantidade?"));
        const compraItem = {
          itemCodigoBarra: Number(codigoBarraItem),
          itemQuantidade: quantidadeItem,
          subTotal: (quantidadeItem * precoItem),
        };

        compraFinal.push(compraItem);
        //console.log(compraFinal);

      } else if (Number(codigoBarraItem) == 0) {

        compraFinal.forEach((item) => {
          return total = total + item.subTotal;
        });

        alert("Fim da compra, vamos pagar!");
        addProduto = false;
        
      } else {
        console.log("produto não existe, digite de novo!");
        break;
        //existeCodigo = true;
      };
      
    };
    console.log(`Total da compra DE ${this._cliente} foi ${total}`);
    
    let troco = 0;
    const pagamento = Number(prompt("Informe o valor do pagamento:"));
    
    if (total <= pagamento) {
      troco = pagamento - total;
      console.log(`Seu troco é de ${troco}`)
      //return troco;

    } else {
      console.log('Seu pagamento não é suficiente!')
    }

  }
  
 /*  fecharConta() {
    
    const total = compraFinal.forEach((item) => {return total = total + item.subTotal});

    const troco = 0;
    const pagamento = Number(prompt("Informe o valor do pagamento:"));
    
    if (total <= pagamento) {
      troco = pagamento - total;
      alert(`Seu troco é de ${troco}`)
      return troco;

    } else {
      alert('Seu pagamento não é suficiente!')
    }

  }
 */
};

let atendimento1 = new CaixaRegistradora(1111, 10, "José");
console.log(atendimento1.informaCliente());

let compra1 = atendimento1.compraCliente();
console.log(compra1);

/* let troco1 = atendimento1.fecharConta();
console.log(troco1); */