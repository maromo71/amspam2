let limite = 500

let valor = Math.random() * limite
valor = parseInt(valor)
console.log(valor)

let x = 0
//Repita de dois em dois até o limite.
while(x < valor){
    console.log(x)
    x = x + 2  
}
console.log("Limite: " + valor)