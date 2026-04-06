/*
Escreva uma função que recebe um array de palavras como parâmetro e
retorna um novo array contendo somente as palavras que começam com a
letra "A"
*/

function palavras_comecam_com_a(palavras){
    novo = []
    for(let i =0; i < palavras.length; i++){
        if(palavras[i][0] === "A"|| palavras[i][0] === "a"){
            novo.push(palavras[i])
        }
    }
    return novo;
}

palavras = []
palavras.push("Bola")
palavras.push("Amora")
palavras.push("Ameixa")

arrayNovo = palavras_comecam_com_a(palavras)

console.log("Palavras que comecam com A: ")
for(let i =0; i < arrayNovo.length; i++){
    console.log(arrayNovo[i])
}

