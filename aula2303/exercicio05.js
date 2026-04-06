/*
Crie uma função que recebe um número inteiro positivo como parâmetro
e retorna a sequência de Fibonacci correspondente a esse número (sem
utilizar recursão).
*/

function Fibonacci(num){
    let pri =0, seg=1, ter=0
    for(let i=3; i<=num; i++){
        ter = pri + seg
        pri = seg
        seg = ter 
    }
    return ter
}

console.log(Fibonacci(12)) // 89