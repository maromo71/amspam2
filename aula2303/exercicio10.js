/*
Escreva uma função que recebe um array de strings como parâmetro e
retorna a quantidade total de caracteres em todas as strings
*/

function quantidade_caracteres(array){
    let quantidade = 0
    for(let i=0; i < array.length; i++){
        quantidade += array[i].length
    }
    return quantidade
}

palavras = ["Ola", "Turma", "Hoje"]

console.log(quantidade_caracteres(palavras)) // 12