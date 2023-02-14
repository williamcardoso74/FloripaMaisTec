console.log("Hello LocalStorage");

var user = {
  username: 'William',
  password: '1234'
}

/* const handleChangeUsername = (event) => {user.username=event.target.value}
const handleChangePassword = (event) => {user.password =event.target.value}

login.addEventListener('click',clicou)
username.addEventListener('change',handleChangeUsername)
password.addEventListener('change',handleChangePassword) */


function clicou() {

  const login = document.getElementById('login');
  const username = document.getElementById("user");
  const password = document.getElementById("senha");

  if (username.value == user.username && password.value == user.password) {
        
      localStorage.setItem("userLocal", username.value);
      localStorage.setItem("senhaLocal", password.value);
      localStorage.estaLogado = true;
      alert("Usuário autenticado e dados salvos no LocalStorage!")
      // isLogged();
      location.href = "./logout.html";
          
    } else {
        
        alert("Usuário não existe! Faça o login novamente!")

        //localStorage.setItem("estaLogado",false);
        // isLogged();
        
  }
}

function isLogged() {

  if (localStorage.estaLogado) {

    alert("Usuário Deslogado com sucesso!");
    localStorage.removeItem("userLocal","senhaLocal");
    localStorage.setItem("estaLogado",false);
    location.href = "./index.html"

  } else {

    alert("Usuário não existe! Faça o login novamente!")
    // como limpar as variavéis usuario e senha?
    location.href = "./login.html";

  }
}