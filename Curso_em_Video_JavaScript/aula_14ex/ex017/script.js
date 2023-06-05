function gerar() {
  var num = document.getElementById("num");
  let tab = document.getElementById("seltab");

  if (num.value.length == 0) {
    window.alert("Por favor, digite um número");
  } else {
    let n = Number(num.value);
    let c = 1;
    tab.innerHTML = "";
    while (c <= 10) {
      let item = document.createElement("Option");
      item.text = `${n} x ${c} = ${n * c}`;
      item.value = `tab${c}`;
      tab.appendChild(item);
      c++;
    }
  }

  /* var tabuada = []
    
    for (var i=0; i <=10; i++) {
        tabuada.push(num * i)
    }
    document.getElementById('resultado').innerHTML = tabuada.join(", ")
 */
}
