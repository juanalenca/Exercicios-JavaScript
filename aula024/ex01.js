/*
Método Map: percorre arrays  ou outras coleções. 
Vai iterar toda a coleção, sem parar no meio.
É um método mais eficiente para isso, percorrer e iterar completamente a coleção

Sintaxe da chamada do map para com uma variável:
nameVar.map((1-elemento da coleção, 2-índice desse elemento) =>{})

Obs: para executar o map, é preciso de uma function, passando para ela
o elemento da vez e o seu indice na coleção

*/

/*Ex1

const cursos = ["HTML", "CSS", "JavaScript", "PHP", "React"]

cursos.map((elemento, indice) =>{
    console.log(`Curso: ${elemento} - Posição: ${indice}`)
})

*/


/*Ex2

const cursos2 = ["HTML", "CSS", "JavaScript", "PHP", "React"]

//recebe o retorno do método map
let c = cursos.map((elemento, indice) =>{
    //retornando e modificando todos os elementos do array
    return "<div>"+elemento+"</div>"
})

console.log(c)

*/


/*Ex3

let elem = document.getElementsByTagName("div")

elem = [...elem]

console.log(elem)

//Dá erro porque a variável elem não é iterável, 
//pois é uma coleção html. Para isso, é preciso usar o spread acima
elem.map((elemento, indice) =>{
    //mudando os elementos html de uma vez só
    elemento.innerHTML = "Boo"
    console.log(elemento.innerHTML)
})

*/


/*Ex4

const elementos = document.getElementsByTagName("div")

//call(1-array que vai operar, 
//2-{chamando a propriedade do elemento que queremos alterar}) => {retorno} 
//Como queremos operar/alterar um innerhtml, que é uma propriedade do elemento
//precisamos colocar {} no parâmetro
const valores = Array.prototype.map.call(elementos, ({innerHTML}) => innerHTML)

console.log(valores)

*/


//recebe um valor e retorna esse valor convertido para inteiro
const converterInt = (elemento) => parseInt(elemento)
//recebe um valor e retorna o dobro 
const dobrar = (elemento) => elemento*2

let num = ["1", "2", "3", "4", "5"].map(dobrar)

console.log(num)

