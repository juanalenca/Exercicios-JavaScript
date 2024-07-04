/*
Loops indefinidos - while e do while: 
quando você não sabe a quantidade de repetições/iterações
*/


//enquanto (while) n<10 for true, rode o bloco de comandos (incremente n e imprima-o)
//quando a condição for false, ele sai do bloco de comandos

/* Exemplo 1

let n = 0

while(n<10){
    n++
    console.log(n)
}

*/

// Exemplo 2

let n = 5
let fatorial = 1

while(n>=1){
    fatorial *= n
    n--
}

console.log(fatorial)