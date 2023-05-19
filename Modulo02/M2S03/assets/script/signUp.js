let loginCadastro = document.getElementById("loginCadastro");
loginCadastro.addEventListener("submit", login)

function login(event) {
    event.preventDefault();

    let empresa = document.getElementById("empresa").value;
    let cnpj = document.getElementById("cnpj").value;
    let responsavel = document.getElementById("responsavel").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let senha = document.getElementById("senha").value;
    let confirmarSenha = document.getElementById("confirmarSenha").value;
    
    console.log("Empresa: ", empresa);
    console.log("Cnpj: ", cnpj);
    console.log("Responsável: ", responsavel);
    console.log("Email: ", email);
    console.log("Telefone: ", telefone);
    console.log("Senha: ", senha);
    console.log("Confirmar Senha: ", confirmarSenha);
}