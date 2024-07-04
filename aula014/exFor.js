/* 
A cada repetição que o loop executar é uma iteração que ele está executando.

Loops definidos - for: 
quando você sabe a quantidade de repetições/iterações exata
ex:
for (let index = 0; condição que precisa ser true, se não acaba; index++ or index--) {
    comandos iterados por esse loop
} 
*/


/* Exemplo 1 

console.log("Começo do programa.")

for (let i=0; i <= 10; i++) {
    if (i%2 == 0) {
        console.log(`${i} é par!`)
    }else {
        console.log(`${i} é impar!`)
    }
}

console.log("Fim do programa.")

*/


const objs = document.getElementsByTagName("div")


let num = [10,20,30,40]


console.log("Modo For in:\n")

//por padrão, a variável (n) tem todas as posições dos elementos do array nesta forma
for(n in num){
    console.log(`${n}° posição: ${num[n]}`)
}


console.log("\nModo For of:\n")

//por padrão, a variável (j) tem todos os valores/elementos do array, e não as suas posições 
for(j of num){
    console.log(j)
}




console.log("\n\nFor of nos objs:\n")

//mostra os valores dos elementos html
for(z of objs){
    console.log(z.innerHTML = "Troquei todos os textos!")
}


console.log("\nFor in no objs:\n\n")

//mostra a posição dos elementos html, mas também pode mostrar os valores dos elementos
for(o in objs){
    //console.log(o)
    //objs[o].innerHTML -> possibilita mostrar os valores
    console.log(`${o}° posição: ${objs[o].innerHTML}`)
}




console.log("\nAnd too the normal For:\n")

//length contabiliza a quantidade de elementos de um array
for (let i = 0; i < num.length; i++) {
    //imprime tanto a qauntidade de elementos como os valores dos elementos do array
    console.log(`${i}° posição: ${num[i]}`)
}