var user = {
    senha: 1234,
};

class Conta {

    _saldo;
    #_senha;

    constructor(saldo,senha) {
        this._saldo = saldo;
        this.#_senha = senha;

    }

    get saldo() {
        return this._saldo;
    }

    set saldoNovo(novoSaldo) {
        this._saldo = novoSaldo;
    }

    get senha() {
        return this._senha;
    }

    set senha(novaSenha) {
        this._senha = novaSenha;
    }




    verificaSenha() {

        const password = prompt("Qual é a senha?");

        if ( Number(password) === user.senha) {
            alert("Senha correta");
            this._senha = password;
            return true;

        } else {
            alert("Senha incorreta");
            return false;
        };
    };


    deposito(deposito) {
        this._saldo += deposito;
    }


    retirada(retirada) {
        this._saldo -= retirada;
    }

}

console.log("Hello");

function start () {
    
    const contaCorrente = new Conta(100 , 1234);
    
    //console.log(contaCorrente.verificaSenha());

    if (contaCorrente.verificaSenha()) {
        

        let operacao = Number(prompt("Deseja: 1.Depositar ou 2.Sacar ?"));
        console.log(Conta);

        if (operacao == 1) {

            deposito_a = Number(prompt("Quanto você quer depositar?"));
            contaCorrente.deposito(deposito_a);
            alert("Seu saldo é de R$ " + contaCorrente._saldo)
            

        } else if (operacao == 2) {

            saque_a = Number(prompt("Quanto você quer sacar?"));
            contaCorrente.retirada(saque_a);
            alert("Seu saldo é de R$ " + contaCorrente._saldo);

        } else {

            alert("Operação Inexistente!");
        }


    } else {
        
        alert("Usuário e Senha incorreto!");
        start = false;

    };

};

start();

//
