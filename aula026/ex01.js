//getElementById - obtem o elemento html id

const divc1 = document.getElementById("c1")
const divc2 = document.getElementById("c2")
const divc3 = document.getElementById("c3")
const divc4 = document.getElementById("c4")
const divc5 = document.getElementById("c5")
const divc6 = document.getElementById("c6")


const arrayElementos = [divc1, divc2, divc3, divc4, divc5, divc5, divc6]

//altrerando todos os elementos de uma vez
/*for(d of arrayElementos){
    d.innerHTML = "Helloo"
}*/

//percorre e muda cada um dos elementos do array
arrayElementos.map((elemento) => {
    console.log(elemento.innerHTML = "Helloo")
})




/*
console.log(divc1) //elemento todo
console.log(divc1.id) //nome do id 
console.log(divc1.innerHTML) //texto do elemento

//alterando o texto do elemento
divc1.innerHTML = "Heloo"
*/