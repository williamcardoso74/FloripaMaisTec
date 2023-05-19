
let loginForm = document.getElementById("loginForm");
//let btnEntrar = document.getElementById("btnEntrar");

console.log(loginForm)

loginForm.addEventListener("submit", login)
//btnEntrar.addEventListener("click", login);

function login(event) {
    event.preventDefault();
    let email = document.getElementById("email");
    let senha = document.getElementById("senha");
    console.log(email.value);
    console.log(senha.value);
};