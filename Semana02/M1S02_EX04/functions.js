console.log("Hello Alterações")

var user = {
    nome:'',
    email:'',
    img: ''
}

var usuarioCorreto = {
    nome:'William',
    email: '1234',
    // scr img = ""
}

let login = document.getElementById('login');
let username = document.getElementById('nome');
let email = document.getElementById('email');

const handleChangeUsername = (event) => {user.nome=event.target.value}
const handleChangeEmail = (event) => {user.email=event.target.value}
// const handleChangeImg = (event) => {user.img=event.target.value}

login.addEventListener('click',clicou)
username.addEventListener('change',handleChangeUsername)
email.addEventListener('change',handleChangeEmail)

function clicou () {
    alert(`o usuário que você digitou é ${user.username} e a senha é ${user.password}`)
}





function clicou() {


}