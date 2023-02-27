console.log("Hello World");

let estoque = [

    {codigoBarra: 1111,
    preco: 2,
    produto: "arroz"},

    {codigoBarra: 2222,
    preco: 4,
    produto: "feijao"},

    {codigoBarra: 3333,
    preco: 3,
    produto: "açucar"},

    {codigoBarra: 4444,
    preco: 5,
    produto: "leite"}

];

let compraFinal = [];
let compraItem = [];
let total = 0;

function addProdutos () {

    const addItemEstoque = prompt("Deseja adicionar um produto ao Estoque 1.Sim 2.Não");
    
    if (addItemEstoque == 1) {
    alert("Adicione o produto que deseja");
    const addCodigoBarra = prompt("Qual é o código do produto?");
    const addPreco = prompt("Qual é o preço do produto?");
    const addProduto = prompt("Qual é o nome do produto?");
    
    const itemEstoque = {
        codigoBarra: addCodigoBarra,
        preco: Number(addPreco),
        produto: addProduto,
    }
    estoque.push(itemEstoque);

    } else {
        console.log(estoque);
    }

};

class CaixaRegistradora {

    constructor(codigoBarra,preco,produto,) {
        this._codigoBarra = codigoBarra;
        this._preco = preco;
        this._produto = produto;
        
    };


    verificaCliente() {
        const cliente_a = prompt("Qual é o nome do cliente?");
        if (cliente_a) {
            this._cliente = cliente_a;
            console.log(cliente_a);
            return cliente_a;

        }else{
            alert("Digite o nome de um cliente!");
        }
    }


    compraCliente() {
        const codigoBarraItem = prompt("Qual é o código?");
        const quantidadeItem = prompt("Qual é a quantidade?");

        const compraItem = {
            itemCodigoBarra: codigoBarraItem,
            itemQuantidade: quantidadeItem,
            subTotal: ()
            
        }

    }

}

addProdutos();
let atendimento = new CaixaRegistradora();


