let p = 1
let s = 1
let prox;
for(let i=3; i<=12; i++){
    prox = p + s
    p = s
    s = prox
}
console.log(prox)