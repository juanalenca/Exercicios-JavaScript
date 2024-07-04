/* 

O operador Spread (espalhar): quebra arrays, HTML collection e outras coleções, ou seja, 
quebrar um conjunto de elementos (coleções) e devolve elemento a elemento.

*/

/* Exemplo 1
?arrays
let n1 = [10,20,30]
let n2 = [11,22,33,44,55]

*mesma coisa de: let n3 = [n1,n2],
*pois realiza a mesma concateção de arrays
let n3 = [...n1,...n2]

console.log(`n1: ${n1}`)
console.log(`n2: ${n2}`)
console.log(`n3: ${n3}`)

*/


/* Exemplo 2

?objetos
const player1 = {nome: "Juan", energia: 100, vida: 6}
const player2 = {nome: "Cillian", energia: 100, vida: 5}
const player3 = {...player1, ...player2}

*só vai imprimir as informações do player2 
*porque as informações de player1 e 2 são as mesmas
*então ele usa os valores do player2 
console.log(player3)


!A não ser que você diferencie alguns valores dos objetos
*Assim ele receb as informações comuns e incomuns, concatenando-as

const agente1 = {nome: "006", energia: 100, magia: "Não"}
const agente2 = {nome: "007", energia: 100, cabelo: "Possue"}
const agente3 = {...agente1, ...agente2}

console.log(agente3)

*/


/* Exemplo 3

const soma = (v1,v2,v3) => {
    return v1+v2+v3
}

let valores = [1, 10, 5, 20]

!Sem o spread (...) dá erro, 
*porque o spread espalha os valores
*para suas respectivas propriedades antes de imprimir
console.log(soma(...valores))

*/


// Exemplo 4 

//A variável obj recebe uma coleção de elementos HTML, neste caso são elementos da tag div
//Isso é diferente de coleção de array
//O HTML Collection são recebe elementos HTML
const obj = document.getElementsByTagName("div")


//O spread transforma a coleção de elementos HTML em um array de lementos hTML
//Dando a possibilidade de adicionar outros tipos de elementos, não só elementos HTML
//As função e propriedades de maipulação também são diferentes e mais amplas
const obj2 = [...document.getElementsByTagName("div")]


//função para percorrer e também interar valores nos elementos de um array
//algo que não funciona em HTML Collection
obj2.forEach(element => {
    element.innerHTML = "Hello"
    console.log(element) 
});


console.log(obj)
console.log(obj2)

