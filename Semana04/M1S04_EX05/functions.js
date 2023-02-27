console.log("Hello");

class Person {

    _nome;
    _idade;
    _altura;

    constructor(nome,idade,altura) {
        this._nome = nome;
        this._idade = idade;
        this._altura = altura;
    };

    apresentar (nome,idade,altura) {
        console.log(`Olá, me chamo ${this._nome}, \n tenho ${this._idade} anos e ${this._altura}m de altura`);
  ;  }   
};

class Profissao extends Person {
    
    _profissão;
    constructor(nome,idade,altura,profissao) {
        super(nome,idade,altura);
        this._profissao = profissao;

    };

    apresentar (nome,idade,altura,profissao) {
        console.log(`Olá, me chamo ${this._nome}, \n tenho ${this._idade} anos e ${this._altura}m de altura e sou ${this._profissao}`);

    };
};

let william = new Person("William", 49, 1.74);
let profissao = new Profissao("William", 49, 1.74, "engenheiro");

console.log(william.apresentar());
console.log(profissao.apresentar());