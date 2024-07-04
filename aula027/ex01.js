//getElementById - obtem o elemento html através de seu id
const divc1 = document.getElementById("c1")
const divc2 = document.getElementById("c2")
const divc3 = document.getElementById("c3")
const divc4 = document.getElementById("c4")
const divc5 = document.getElementById("c5")
const divc6 = document.getElementById("c6")

const arrayElementos = [divc1, divc2, divc3, divc4, divc5, divc5, divc6]

//retorna uma array
//console.log(arrayElementos)





//getElementById - obtem uma coleção de elementos html, neste caso a div
//com o spread, eu espalho essa coleção de elementos e trnasformo em array de elementos
const colecaoHTML = [...document.getElementsByTagName("div")]


//retorna HTMLCollection
console.log(colecaoHTML)

//percorrendo e imprimi cada um dos elementos do array de elementos div
colecaoHTML.map((elemento) => {
    console.log(elemento)
})