console.log("Hello World");

let cardNumber = prompt("Digite o número de um card (de 1 a 800)");
let cardNumberEscolhido = parseFloat(cardNumber);

async function cardSearch() {
    
    const resposta = await fetch(`https://rickandmortyapi.com/api/character/${cardNumberEscolhido}`);
    const dados = await resposta.json();

    console.log(dados);

    document.getElementById("name").innerHTML=dados?.name;
    document.getElementById("image").src=dados?.image;
    document.getElementById("species").innerHTML=dados?.species;
    document.getElementById("status").innerHTML=dados?.status;
    
};

cardSearch();


/* let cardNumber = document.getElementById("personagem");
let buscar = document.getElementById("clicar");

function clicou() {

if (cardNumber != 0) {
  async function buscarCard() {
    const resposta = await fetch(
      "https://rickandmortyapi.com/api/character/"+${cardNumber}
    );
    const dados = resposta.json();
    console.log(dados);
  }
 } else {
    console.log("Digite o número de um personagem!")
};
}; */


