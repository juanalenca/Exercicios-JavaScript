/*

Funções são blocos de comando que podemos executar em momentos oportunos,
quando quisermos utilizar, basta chamar.

Sintaxe (declaração):

function NomeDaFunção(parâmentros, podem ter ou não){
    bloco de comandos
}

chamada da função (execução):

NomeDaFunção()

Obs: no (), aqui se colocam os parâmetros que vão ser utilizados,
caso na declaração da função tenha parâmetros

*/

// Exemplo 1
function soma(n1, n2){
    let soma = n1+n2
    console.log(`${n1} + ${n2} = ${soma}`)
}

for(let i=0; i<10; i++){
    soma(6, 6)
}


//Exemplo 2
function mudarTexto(){

    let d1 = document.getElementById("d1")
    let d2 = document.getElementById("d2")
    let d3 = document.getElementById("d3")

    d1.innerHTML = "Olá"
    d2.innerHTML = "Mundo!"
    d3.innerHTML = "As vezes não quero estar aqui"

}
