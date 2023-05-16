console.log("Hello World");

/* let copa2026 = ["brasil","franca","alemanha","italia","espanha"];
console.log(copa2026);

copa2026.push("argentina");
console.log(copa2026);

copa2026.unshift("campeche");
console.log(copa2026);

//copa2026.splice(3,0,"Equador");
copa2026.splice(3,1,'Equador');

console.log(copa2026); */

//

/* copa2026.pop();
console.log(copa2026);
 */
//

/* // FUNÇÃO FOREACH()

//! ESTOU CRIANDO UMA LISTA
let copa2026 = ["brasil","franca","alemanha","italia","espanha"];

//! ESTOU UTILIZANDO DOM PARA SETAR UMA TAG PELO ID
let list = document.getElementById("list");

//!PERCORRER LISTA JS E ADD NA LISTA HTML
//!o nome de cada item é time

copa2026.forEach( (time) => {
//crio um novo elemento chamado li (linha da lista)
    let li = document.createElement("li");
//nomeio cada elemento html com os nomes dos times
    li.innerText = time;
//adicionei na lista html cada elemento que eu criei
    list.appendChild(li);
});

console.log(copa2026); */


//


// copa2026.forEach( (time) => {console.log(time)}  )


/* // FUNÇÃO MAP (parece uma tabuada)
const numeros = [1,2,3,4,5,6,7,8,9]
const dobro = numeros.map ( (numero) => {
    return numero * 2
})
console.log(dobro) */


//

// FILTRAR ARRAY
/* const numeros = [1,2,3,4,5,6,7,8,9]
const menorQueCinco = numeros.filter( (numero) => {
    return numero < 5
})
console.log(menorQueCinco) */


//  Exercício ToDo List (M1S03 - EX03)

/* let aprovados = ["wallis","tales","william","glauton"]

let verdadeirosAprovados = aprovados.filter( (aluno) => {
    return aluno !== "wallis"
})
console.log(verdadeirosAprovados); */

//

// TESTAR ARRAY
/* const numeros = [1,2,3,4,5,6,7,8,9]

console.log(numeros.every( (num) => {
    return num < 40
})) */



//

// REDUCE ARRAY

const carteiras = [29.55,41.22,33.54,12.12];

const carteiraTotal = carteiras.reduce((acc, valorAtual, indiceAtual, array) => {
    acc += valorAtual;
    if(indiceAtual === array.length - 1) {
        return acc / array.length;
    } else {
        return acc;
    }
    }
);
console.log(carteiraTotal)








