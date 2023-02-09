console.log("Hello FloripaMaisTec");

var userDataCorreto = {
    nome: "William",
    senha: "123456",
};

let login = document.getElementById('login');
let username = document.getElementById('usuario');
let password = document.getElementById('senha');


function clicou () {
    let checkNome = username.value == userDataCorreto.nome;
    let checkSenha = password.value == userDataCorreto.senha;

    if (checkNome && checkSenha){
        
        alert("Usuário Correto e logado!")
    }
    else {alert("Credenciais incorretas!")
    };
};