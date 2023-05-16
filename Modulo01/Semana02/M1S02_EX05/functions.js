console.log("Hello Cronômetro!");

let tempo = 0;
let time;

function acabou() {
    if (tempo <= 10) {
        console.log("Contando " + tempo);
        time = setTimeout(acabou,1000);
        tempo++;
    }else{
        alert("Seu tempo acabou! Tente novamente!!");
        clearTimeout(time)  
    }
};

//const time = setTimeout(acabou,1000)


/* setTimeout(function acabou() {
  alert("Seu tempo acabou!! Tente novamente!!")
}, 10000); */

// atraso e intervalo
// timeout e interval