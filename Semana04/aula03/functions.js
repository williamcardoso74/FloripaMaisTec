class Parafuso {
    constructor(){
      this.name = 'tales'
      if(this.constructor === Parafuso){
        throw new Error('Classe abstrata, não pode ser instanciada')
      }
    }
    get tipo() {
      throw new Error ('Método abstrato, precisa ser implementado')
    }
  }
  
  class Fenda extends Parafuso {
    constructor() {
      super()
    }
    get tipo(){
      return 'fenda'
    }
  }
  
  class Philips extends Parafuso {
    constructor() {
      super()
    }
    get tipo(){
      return 'philips'
    }
  }
  class Allen extends Paraf
  class Allen extends Parafuso {
      
  }
  let parafuso = new Parafuso()
  console.log(parafuso)
  let allen = new Allen()
  
  console.log(allen.tipo)




  // METODO STATIC

  class Tipo {
    constructor (altura,largura){
      this.altura = altura
      this.largura = largura
    }
    static multiply (altura=this.altura,largura=this.largura){
      this.altura = altura
      this.largura = largura
      return this.altura * this.largura
    }
  }
  
  const multi = new Tipo(2,2)
  //console.log(multi.multiply(2,2))
  console.log(Tipo.multiply(2,2))