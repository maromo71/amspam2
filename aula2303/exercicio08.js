/*
Faça uma função que recebe um array de números como parâmetro e
retorna o produto de todos os elementos
*/

function produto_array(array){
    let produto = 1
    for(let i=0; i < array.length; i++){
        produto *= array[i]
    }
    return produto
}

array = [1, 2, 3, 4]

console.log(produto_array(array)) // 24