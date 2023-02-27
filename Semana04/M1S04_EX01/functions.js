console.log("Hello World");

let estoque = [
  { codigoBarra: 1111, preco: 2, produto: "arroz" },

  { codigoBarra: 2222, preco: 4, produto: "feijao" },

  { codigoBarra: 3333, preco: 3, produto: "açucar" },

  { codigoBarra: 4444, preco: 5, produto: "leite" },
];

let compraFinal = [];
let compraItem = [];
let total = 0;

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
    estoque.push(estoque);
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
      console.log(cliente_a);
      return cliente_a;
    } else {
      alert("Digite o nome de um cliente!");
    }
  }


  
  compraCliente(codigo, quantidade) {
    alert(`${this._cliente}, vamos começar a compra!`);
    let addProduto = true;

    if (addProduto) {
      let codigoBarraItem = prompt(
        "Digite o código para comprar ou 0 para terminar:"
      );
      console.log(codigoBarraItem);

      let existeCodigo = estoque.find(p => {
        p.codigoBarra === Number(codigoBarraItem)
      });

      console.log(existeCodigo);

      if (existeCodigo && Number(codigoBarraItem)!=0) {
        console.log(existeCodigo);
        const precoItem = estoque.find((prod) => {
          return prod.preco;
          console.log(precoItem);
        });

        const quantidadeItem = Number(prompt("Qual é a quantidade?"));
        const compraItem = {
          itemCodigoBarra: Number(codigoBarraItem),
          itemQuantidade: quantidadeItem,
          total: total + Number(quantidadeItem * precoItem),
        };

        compraFinal.push(compraItem);
        console.log(compraFinal);
      } else if (Number(codigoBarraItem) == 0) {
        addProduto = false;
      } else {
        console.log("produto não existe, digite de novo!");
        //existeCodigo = true;
        addProduto = true;
      }
      alert("Fim da compra, vamos pagar!");
    }
    
  }
}

let atendimento = new CaixaRegistradora(1111, 10, "José");
console.log(atendimento.informaCliente());
console.log(atendimento.compraCliente());
