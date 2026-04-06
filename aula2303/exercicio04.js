/*
Faça uma função que recebe uma string como parâmetro e retorna a
quantidade de vogais presentes nessa string
*/
function contarStrings(frase) {
    let contador = 0
    for (let i = 0; i < frase.length; i++) {
        switch (frase[i]) {
            case 'a':
            case 'A':
            case 'e':
            case 'E':
            case 'i':
            case 'I':
            case 'o':
            case 'O':
            case 'u':
            case 'U':
                contador++
                break;

        }
    }
    return contador
}

let numero = contarStrings("ola pessoa")
console.log("A frase tem ", numero, " vogais")