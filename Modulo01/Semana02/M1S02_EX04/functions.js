console.log("Hello Alterações")

var user = {
    nome: '',
    email:'',
    img: ''
}

var usuarioCorreto = {
    nome:'William',
    email: 'w@gmail.com',
    img: 'https://imagem.jpg'
}

const login = document.getElementById('login');
const username = document.getElementById('nome');
const email = document.getElementById('email');
const img = document.getElementById('img');

const handleChangeUsername = (event) => {user.nome=event.target.value}
const handleChangeEmail = (event) => {user.email=event.target.value}
const handleChangeImg = (event) => {user.img=event.target.value}

login.addEventListener('click',clicou)
username.addEventListener('change',handleChangeUsername)
email.addEventListener('change',handleChangeEmail)
img.addEventListener('change', handleChangeImg)

function clicou () {

         if (username.value == usuarioCorreto.nome &&
         email.value == usuarioCorreto.email &&
         img.value == usuarioCorreto.img) {

            salvar();

         } else {

            console.log('Dados diferentes, você alterou!')
            alterar();

         }
}

function salvar () {
    
    localStorage.setItem('userLocal', username.value);
    localStorage.setItem('emailLocal', email.value);
    localStorage.setItem('imgLocal', img.value);


    console.log(`o usuário salvo é ${user.nome}
      o email é ${user.email} e a url da imagem é ${user.img}`)

    console.log('Dados salvos no localStorage');

}

function alterar () {
    localStorage.removeItem('userLocal');
    localStorage.removeItem('emailLocal');
    localStorage.removeItem('imgLocal');

    localStorage.setItem('userLocal', username.value);
    localStorage.setItem('emailLocal', email.value);
    localStorage.setItem('imgLocal', img.value);


    console.log(`o usuário alterado é ${user.nome}
      o email é ${user.email} e a url da imagem é ${user.img}`)

    console.log('Dados alterados!')

}

