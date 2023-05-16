
// exemplo de programação funcional

/* let altura = 50;
let largura = 60;

function calcularArea (alt,lar) {
    return alt * lar;
};
console.log(calcularArea(50,60)); */




// METODO ORIENTADO A OBJETOS

class Poligono {
    constructor (altura,largura) {
        this.altura = altura
        this.largura = largura
    }
}

get area () {
    return this.#this.calcularArea()
}

#calcularArea () {
    return this.altura * this.largura
}

let poligono = new Poligono(50,60)
console.log(poligono.area)



