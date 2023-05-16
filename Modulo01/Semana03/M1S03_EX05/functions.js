console.log("Hello World");

async function buscarCard () {
    const resposta = await fetch("https://api.github.com/users/williamcardoso74");
    const dados = await resposta.json();

    console.log(dados);

    document.getElementById("name").innerHTML = dados?.name;
    document.getElementById("avatar_url").src = dados?.avatar_url;
    document.getElementById("html_url").innerHTML = dados?.html_url;

};

buscarCard();