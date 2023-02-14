console.log('Hello PadariaTech')

function calcula() {
    const preco = document.getElementById("preco").value;
    console.log('O preço do pão é:')
    for(i=1; i<=50; i++) {
        console.log('R$ '+ (preco*i) +' para '+i+' unidade(s)' )
    }
}