let paragrafo = document.getElementById("meu_paragrafo")
let botao = document.querySelector("button")

botao.addEventListener("click", () => {
    console.log("Botao foi clicado")
    paragrafo.innerText = "Olha aqui"
})
console.log(paragrafo.textContent)

