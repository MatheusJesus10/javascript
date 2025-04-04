let num = [5, 8, 9, 3, 2]

num.push(1) //coloca o número 1 no final do array
num.sort() //colocar o vetor em ordem
console.log(num)
console.log(`O vetor tem ${num.length} posições.`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(5)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}.`)
}
