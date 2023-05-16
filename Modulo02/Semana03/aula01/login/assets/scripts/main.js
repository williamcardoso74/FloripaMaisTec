
let loginForm = document.getElementById("loginForm")
loginForm.addEventListener("btnEntrar", login)
loginForm.addEventListener("cancel")

function login(event) {
    event.preventDefaul()
    var email = document.getElementById("email")
    var senha = document.getElementById("senha")
    console.log(email)
    console.log(senha)
}