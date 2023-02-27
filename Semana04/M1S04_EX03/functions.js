console.log("Hello");

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




    verificaSenha(senha) {
        
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

};

class ContaPoupanca extends Conta {

        constructor(saldo,senha,indice,verificaSenha,deposito,retirada) {

        super(saldo,senha,verificaSenha,deposito,retirada);
        this._indice = indice;
        };
    
        atualizarJuros(indice) {
            this._indice = indice;
            let ganho = Number(this._saldo * (this._indice/100));
            return this._saldo = this._saldo + ganho; 
        }
};


const teste = new ContaPoupanca(100, 1234);
//teste.atualizarJuros(0.7);


//console.log("O saldo é " + teste._saldo);

console.log(teste.atualizarJuros(0.7));