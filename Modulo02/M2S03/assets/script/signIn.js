
let loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", login)

function login(event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    console.log("Email: ", email);
    console.log("Senha: ", senha)
}