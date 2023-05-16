console.log("Hello World");

var user = {
    telefone : '',
    mensagem : '',
}

const tel = document.getElementById("telefone");
const msg  = document.getElementById("mensagem");
const env = document.getElementById("enviar");

const changeTel = (event) => {user.telefone=event.target.value}
const changeMsg = (event) => {user.mensagem=event.target.value}

env.addEventListener('click',enviar);
tel.addEventListener('change',changeTel);
msg.addEventListener('change',changeMsg);

function enviar() {

    if (tel.value != "" && msg.value != "") {
    
        const msgTemp = msg.value.replace(" ","%20");
        const telTemp = tel.value;
        const urlTemp = "https://api.whatsapp.com/send?phone="+telTemp+"&text="+msgTemp;
        env.disabled = false;
        window.open(urlTemp);

    } else {
        alert("Preencha todos os campos!");
    }
 
}
