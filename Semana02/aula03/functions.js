console.log("Hello World");

// JSON
/*
const student = {
  name: "Tales",
  age: 22,
  money: 500000,
};
console.log(student);

const stringJSON = JSON.stringify(student);
console.log(stringJSON);
console.log(typeof stringJSON);

const newStudent = JSON.parse(stringJSON)
console.log(newStudent);
console.log(typeof newStudent); */




// localStorage

/* let name = document.getElementById("name");
name.innerHTML = "Hello";
console.log(name.innerHTML);

name.innerText = localStorage.getItem("name","william")

localStorage.removeItem("name")

localStorage.clear() */




//Atraso e Intervalo
// setTimeout

/* function manoiti () {
    console.log("Manoiti")
};
setTimeout(manoite,2000);
 */


// setInterval

let tempo = 11;
function manoiti () {
    if (tempo == 0) {
        console.log("acabou")
        clearTimeout(time)    
    }else{
        tempo--;
        console.log(tempo)
    }
};
const time = setInterval(manoiti,1000)


//minha tentativa
/* if(tempo == 0){
    
}
for (i=0;i<11;i++){
    console.log ("contando " + i + " s")
    setInterval(manoiti,1000)
}
alert("Tempo acabou!");
 */





// Cronometro
/* let number = 0;
function manoiti () {
    number++;
    console.log("Manoiti");
};
setInterval(manoiti,1000)
 */





// Contador regressivo
/* let number = 10;
function manoiti () {
    if (number == 0) {
        console.log("acabou");
    }else{
        number--
        console.log(number)
    }
}
 */
