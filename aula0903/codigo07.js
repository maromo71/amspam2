let palavras = "lorem, ipsum, dolor, sit, amet, consectetur, adipiscing, elit, sed, do, eiusmod, tempor, incididunt, ut, labore, et, dolore, magna, aliqua"
let todas = palavras.split(", ") // fatiei em um vetor
console.log(todas) //vetor fatiado
let procurado = "dolore" //palavra procurada no vetor todas

for(posicao in todas){
    if(todas[posicao] === procurado){
        console.log(`Achei ${procurado} na posicao ${posicao} da lista `)
    }
}