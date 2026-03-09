let texto = document.querySelector("h1").innerText
console.log(texto)

let inicio = document.querySelector("h2").innerText
inicio = parseInt(inicio)

let soma = 0
for(let i=inicio; i<=10; i++){
    soma = soma + i
    console.log(soma)
}

let resultado = document.querySelector("h3").innerText
resultado.innerText = `Soma Resultante = ${soma}`
console.log(resultado)

