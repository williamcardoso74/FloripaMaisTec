console.log("Hello!")

//

class Pessoa {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  
    falar() {
      console.log("olá mundo");
    }
  }
  

  
  class Professor extends Pessoa {
    constructor(nome, idade, materia, falar) {
      super(nome, idade, falar);
      this.materia = materia;
      this.nome = 'walberson'
    }
    darAula() {
      console.log("agora vamos dar aula de " + this.materia);
    }
    falar(){
      console.log("OLA MUNDOOOOOOOO!!!!");
    }
  }

  const walberson = new Professor("william", 18, "geografia");
  console.log(walberson.nome);