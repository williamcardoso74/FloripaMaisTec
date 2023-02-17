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

    location.href = "./logout.html";
    href = https://api.whatsapp.com/send?phone=SeuN%C3%BAmero&text=SuaMensagem

}