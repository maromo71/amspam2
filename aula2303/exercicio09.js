/*
 Crie uma função que recebe um número inteiro positivo como parâmetro
e retorna o reverso desse número (por exemplo, 12345 se torna 54321).
*/

function reverso(num){
    let reverso = 0
    while(num > 0){
        reverso = reverso * 10 + num % 10
        num = Math.floor(num / 10)
    }
    return reverso
}

console.log(reverso(1345))
