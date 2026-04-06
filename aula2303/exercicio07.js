/*
 Implemente uma função que recebe um número inteiro como parâmetro
e verifica se ele é um número primo
*/

function numero_eh_primo(num){
    if(num <=1){
        return false
    }
    let primo = true
    for(let i=2; i<num; i++){
        if(num % i === 0){
            primo = false
            break
        }
    }
    return primo
}

if(numero_eh_primo(7)){
    console.log("É primo")
}else{
    console.log("Não é primo")
}