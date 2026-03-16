function fat(n){
    fatorial = 1
    for(let i=1; i<=n; i++){
        fatorial *= i
    }
    return fatorial
}

let numero = 6
let resultado = fat(numero)
console.log("Fatorial de " + numero + " = " + resultado)