/*
Break - encerra o loop

Continue - quando executado dentro de um loop, 
ele para somente a interação anterior a ele
e continua a próxima interação. Só não executa a 
interação que ele está

*/


/*Exemplo de break

while(n<max){
    console.log(`Creceu -> ${n}`)

    if(n > 65){
        break //para e sai do bloco de loop
    }

    n++
}

console.log("Fim do programa.")

*/

let n = 0
let max = 100
let pares = 0

for (let i=n; i<max; i++){

    console.log(`Creceu -> ${i}`)

    if (i%2==0) { //quando não for igual a zero
        //não executa o resto da interação e repete o loop novamente
        //só executa a próxima ordem da interação se a condição for true
        continue
    }

    pares++

}

console.log("Fim do programa.")
console.log(`Quantidade de pares = ${pares}`)