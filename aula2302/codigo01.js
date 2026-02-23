let numero = 10
let outro_numero = 15.5
let instituicao = "Etec"
let verdadeiro = true
let numeros = [1, 2, 3, 4, 5]
//objeto json (Javascript Object Notation)
let pessoa = {
    "nome": "Maria das Dores",
    "idade": 23
}
//Vamos exibir o valor de cada uma delas
console.log("Variavel numero: " + numero)
console.log("Variavel outro_numero: " + outro_numero)
console.log("Variavel instituicao: " + instituicao)
console.log("Variavel verdadeiro: " + verdadeiro)
console.log("Variavel numeros: " + numeros)
console.log("Variavel pessoa: " + pessoa)
//Para exibir o nome e a idade da pessoa
console.log("Nome: " + pessoa.nome)
console.log("Idade: " + pessoa.idade)
//Outra forma de exibir o nome e a idade da pessoa
console.log("Nome: " + pessoa["nome"])
console.log("Idade: " + pessoa["idade"])
//Interpolar o nome e a idade da pessoa
console.log(`Nome: ${pessoa.nome} Idade: ${pessoa.idade}`)

