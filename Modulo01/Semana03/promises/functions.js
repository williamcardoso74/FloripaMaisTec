console.log("Hello World");

// FUNÇÃO PROMISE

/* console.log("executando uma promessa");
const somaDoisNumeros = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a + b == 4) {
        resolve(a + b);
      } else {
        reject("a soma deu errado");
      }
    }, 2000);
  });
};

somaDoisNumeros(5, 1)
  .then(
    (soma) => {
      if (soma < 5) {
        console.log("é menor");
      }
    },
    () => {
      console.log("deu errado");
    }
  )
  .then((soma) => {
    if (soma != 5) {
      console.log("é menor");
    }
  })
  .then((soma) => {
    if (soma > 0) {
      console.log("é menor");
    }
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("terminou");
  }); */




  // FUNÇÃO ASYNC

  async function login (user, password) {
    try{
      const verificaUser = new Promise(() => {})
    }
    catch{

    }

  }