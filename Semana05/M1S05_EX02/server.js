
let usuarios = ["Pedro", "José", "Aderbal", "Danilo", "Luisa", "Vitoria"]

let frutas = ["Banana", "Morango", "Maçã", "Uva", "Pêra" , "Laranja"]

let nFrutas = frutas.reverse();
console.log(usuarios);
console.log(nFrutas);

let usuariosEfrutas = [];

for (let i=0 ; i < usuarios.length ; i++) {
    
    let uf = usuarios[i] + " - " + nFrutas[i];
    usuariosEfrutas.push(uf);

}

console.log(usuariosEfrutas);

