
// arrow functions

/* console.log("Hello Arrow Function");

function imprime () {
    console.log("Brasil")
}


const impressora = () => {return "Argentina"};
impressora(); */


/* const impressorona = () => "Bolívia";

imprime();
console.log(impressora());
console.log(impressorona());
 */





// default parameteres

/* function soma ( numero1 = 2, numero2 = 2, numero3 = 2) {
    return numero1 + numero2 + numero3;
}
console.log(soma(3,3,3)); */



/* function soma (nome, dinheiro = 0) {
    return {
        nome:nome,
        dinheiro:dinheiro
}
};
console.log(soma("Gabriel",50)); */


// desestruturação de objetos no JSON

/* const { nome } = {
    nome:"William",
    idade:0,
};
console.log(nome); */


// desestruturação de ARRAY
// com REST

/* const [numero1, numero2, ...resto] = [1,2,3,4,5,6,7,8];
console.log(resto);
 */

/* const {[4]:numero} = [1,2,3,4,5,6,7,8];
console.log(numero);
 */


// desestruturação de ARRAY
// com SPREAD

/* var pioresAlunos = [
    "Tales",
    "Gabriel",
    "Ursula",
    "Fernanda"
];

var melhoresAlunos = [];
var alunosMaisOuMenos = ["Reinaldo", "Andrei"]

var melhoresAlunos = [
    ...pioresAlunos,
    ...alunosMaisOuMenos,
    "Glauco",
    "Karine"
];
console.log(melhoresAlunos);
 */


//

/* const identidade = {
    nome:"Rodolfo",
    rg:656565
};

const contaBancaria = {
    agencia:"12",
    conta:"1234"
};

const dadosAgrupados = {
    ...identidade,
    ...contaBancaria,
};

console.log (dadosAgrupados);
 */

// TEMPLATE LITERALS


// SINTAXE CURTA DE OBJETOS
/* var nome = "Thais";
var user = {
    nome
};
console.log(nome);
 */

//
// SETS
// 

/* const numeros = [1,2,2,3,3,4,4,4,6,6,6,7,8,8,9,9,9,9];
let conjunto = new Set(numeros);
//console.log(conjunto); */

//

/* const pergunta = conjunto.has(4);
console.log(pergunta);

conjunto.add(5);
conjunto.delete(1);
console.log(conjunto); */