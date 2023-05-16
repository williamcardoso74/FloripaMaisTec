class CaixaRegistradora {
    constructor() {
      this.estoque = [];
      this.itensVendidos = new Map(); // Map para armazenar os itens vendidos e suas quantidades
    }
  
    adicionarProduto(codigoBarra, preco, nome) {
      const produto = { codigoBarra, preco, nome };
      this.estoque.push(produto);
    }
  
    iniciarAtendimento(nomeCliente) {
      console.log(`Iniciando atendimento para o cliente ${nomeCliente}.`);
    }
  
    adicionarItem(codigoBarra, quantidade) {
      const produto = this.estoque.find((p) => p.codigoBarra === codigoBarra);
      if (!produto) {
        console.log(`O produto com código de barra ${codigoBarra} não existe no estoque.`);
        return;
      }
      if (this.itensVendidos.has(produto)) {
        this.itensVendidos.set(produto, this.itensVendidos.get(produto) + quantidade);
      } else {
        this.itensVendidos.set(produto, quantidade);
      }
      console.log(`Adicionado ${quantidade} unidades do produto ${produto.nome} na caixa registradora.`);
    }
  
    calcularTotal() {
      let total = 0;
      for (const [produto, quantidade] of this.itensVendidos) {
        total += produto.preco * quantidade;
      }
      console.log(`O valor total da conta é R$${total.toFixed(2)}.`);
    }
  
    fecharConta(dinheiro) {
      let total = 0;
      for (const [produto, quantidade] of this.itensVendidos) {
        total += produto.preco * quantidade;
      }
      const troco = dinheiro - total;
      if (troco < 0) {
        console.log(`Dinheiro insuficiente para pagar a conta.`);
        return;
      }
      console.log(`Pagamento efetuado. Troco: R$${troco.toFixed(2)}.`);
      this.itensVendidos.clear();
    }
  }
  