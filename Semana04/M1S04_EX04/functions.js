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

};

class ContaPoupanca extends Conta {

        constructor(saldo,senha,indice,verificaSenha,deposito,retirada) {

        super(saldo,senha,verificaSenha,deposito,retirada);
        
        this.indice = indice;
               
        }
    
        atualizarJuros() {
            
            const aplicacao = Number(prompt("Qual aplicação de Poupança: \n 1.Normal ou 2.Premium?"));

            if (aplicacao === 1) {
                this._indice = 0.7;
    
            } else if (aplicacao === 2) {
                this._indice = 1.2;
            } else {
                console.log("Aplicação não existe");
            }

            let ganho = Number(this._saldo * (this._indice/100));
            return this._saldo = this._saldo + ganho; 
        };
               
};



const aplicacao = new ContaPoupanca(100, 1234);
//aplicacao.atualizarJuros();

console.log(aplicacao.atualizarJuros());