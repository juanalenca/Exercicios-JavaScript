//Array é uma colção de variáveis (quaisquer coisas). Sintaxe Var nomeArray = []
//pode iniciar os valores dentro ou fora dos []

const caixa = document.querySelector("#caixa")


let cores = ["azul", "verde", ["bege", "violeta", "orange"]]
let cursos = ["html", "css", "JS", cores]

/*
alterando o valor do indice especificado
cursos[0] = 2024


adicionando um alemento no final meu array com o push
cursos.push("Python")


adicionando um alemento no inicio do array com o unshift
cursos.unshift("React")


retira o elemento inicial do array especificado
cursos.shift()


retira sempre o ultimo elemento do array especificado
cursos.pop()


[indice]
console.log(cursos[1])
*/


//referenciando um indice de um array dentro de outro array, é uma matriz
//[3] - referencia o array que está dentro de outro array
//[2] - referencia ao indice do array que está dentro de outro array
console.log(cursos[3][2])


//adicionando elemento por elemento do array na div de id "caixa"
cursos.map((elemento) => {
    let p = document.createElement("p")
    p.innerHTML = elemento
    caixa.appendChild(p)
})


