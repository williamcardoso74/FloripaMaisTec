let num = [3,7,2,6,1,8,4,9,0]

//num.sort()
//num.push(4)
num.length

console.log(`nosso vetor é o ${num} e o vetor tem ${num.length} posições`)

console.log(`O primeiro valor do vetor é ${num[0]}`)

for (let i=0 ; i <num.length ; i++) {
    console.log(`O valor do vetor ${i} é ${num[i]}`)
}

let pos = num.indexOf(9)
if (pos == -1) {
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`O valor 9 está na posição ${pos}`)
}
