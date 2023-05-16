console.log("Hello!");

/* ar numero1 = 10;
var numero2 = 5;
console.log(numero1 > numero2);

var caixinha = 10;
var conta = 5;
console.log(caixinha == conta);

var senha = 'dragonball';
var senhaServidor = 'dragonballzNaruto';
console.log(senha != senhaServidor);

var isValid = true;
console.log(!isValid);

var caixinha = 20;
var conta = '20';
console.log(caixinha === conta);

var conta = String(20); */

const joao = 20;
const alex = 16;
const show = 'iniciando';
const show2 = 'iniciado';

/* if ( joao > 18 && joao < 30) {
    console.log('Pode ir no show')
}
else {
    console.log('Não pode ir!')
} */

/* if (joao < 50) {
    if (show == 'iniciando') {
        console.log('Pode ir no show')
    } else {
        console.log('Executou')
    }
    
}
else {
    console.log('Não pode ir!')
} */





/* var fruta = 'laranja'

switch(fruta) {
    case 'farinha':
        console.log('laranja')
    break
    case 'feijao':
        console.log('feijao')
    break
    case 'arroz':
        console.log('arroz')
    break
    default:
        console.log('Fruta não encontrada')
} */

/* operador ternário
pode ser usado com qualquer operador lógico */

/* 
const a = 10;
const b = 20;

a == b ? console.log('é igual') : console.log('é diferente')
 */



/* função exemplo 1*/

/* const a = 10;
const b = 20;

function soma (numero1, numero2) {
    const total = numero1 + numero2
    return total
}
console.log('a soma é ' + soma(a,b) )
console.log('a soma é ' + soma(a**2,b**3) ) */



/* função exemplo 2*/

function rico (dinheiro) {
    if (dinheiro > 100) {
        console.log('executou e é rico')
        return 'rico'
    } else {
        console.log('executou e é pobre')
        return 'pobre'
    }
}

rico(10)