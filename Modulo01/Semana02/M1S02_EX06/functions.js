console.log("Hello Tabuada");

let num = document.getElementById("numero");

function calculo() {
    console.log("Tabuada de " + num.value)  
    for (i = 0; i <= 10; i++) {
        console.log(num.value + " x " + i + " = " + num.value * i);
  }
}
