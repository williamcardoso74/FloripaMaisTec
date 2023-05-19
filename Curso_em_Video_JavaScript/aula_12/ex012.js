/* var agora = new Date()
var hora = agora.getHours() */
var hora = 

console.log(`Agora são exatamente ${hora} horas`)
if (hora < 12 || hora >=6 ) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa Tarde')
} else if (hora <= 0) {
    console.log('Boa Noite')
} else {
    console.log('Boa Madrugada')
}