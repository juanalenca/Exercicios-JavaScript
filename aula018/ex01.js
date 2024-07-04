/* 

Funções Parametrizadas: entrada de valores para dentro da função através do ().

chamada da função (execução):

NomeDaFunção()

Obs: no (), aqui se colocam os parâmetros que vão ser utilizados na função,
caso na declaração da função tenha parâmetros

*/

//Exemplo 1
function soma(n1, n2){
    console.log(n1 + n2)
}
soma(6.66, 5.67)



//Exemplo 2
//também podemos iniciar os parâmetros com valores pré-definidos/padrões
function mult(n1=0, n2=0){
    console.log(n1 * n2)
}
mult(10)



//Exemplo 3
function sub(n1=0, n2=0){
    return n1 - n2
}
console.log(sub(1000, 7))



//Exemplo 4
let valor = 0
console.log("Antes - "+valor)

function add(v){
    //or -> valor += v
    //nesse caso, não precisa fazer que o valor receba a função depois
    return valor + v 
}

valor = add(10)
console.log("Adição1 - "+valor)

valor = add(5)
console.log("Adição2 - "+valor)




