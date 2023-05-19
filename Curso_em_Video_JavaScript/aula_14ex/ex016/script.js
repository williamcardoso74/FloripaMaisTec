function contar() {
  let numI = Number(document.getElementById("num_inicio").value);
  let numF = Number(document.getElementById("num_fim").value);
  let passo = Number(document.getElementById("passo").value);
  let res = document.getElementById("resultado");

  

  if (numI == 0 || numF == 0 || passo == 0) {
    res.innerHTML = 'Impossível Contar'
    //window.alert('[ERRO] Faltam dados!')
  }

  var incremento = passo;
  

  if (incremento <= 0 ) {
    window.alert('Passo Nulo. Considerando valor de Passo 1')
    incremento = 1
  }

  res.innerHTML = 'Contando: <br>'
  
  if(numI < numF) {
    //contagem crescente
    for (var i = numI; i <= numF; i += incremento) {
      res.innerHTML += `${i} \u{1F449} `;
    }
    
  } else {
    // contagem regressiva
    for (var i = numI; i >= numF; i -= incremento) {
      res.innerHTML += `${i} \u{1F449} `;
    }
  }

  res.innerHTML += `\u{1F3C1}`
      
}
