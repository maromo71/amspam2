let a = 5
let b = 3.7
let c = "10"
 
let soma = a + b + parseInt(c) //converter para inteiro
let somaFormatada = soma.toFixed(2) // duas casas decimais (formatado)
console.log("R$ " + somaFormatada) //concatenar string