/*getElementByClassName - métodod que permique que obtenhamos 
os elementos do DOM que utilizam uma classe específica,
ou seja, ele obtem uma coleção de leementos html através da
especificação da classe.*/


//transformando de html collection para array através do spread
//agora podemos utilizar os métodos do array

//todas as classes com nome curso
const cursosTodos = [...document.getElementsByClassName("curso")]
//só as classes com nome c1
const cursosC1 = [...document.getElementsByClassName("c1")]
//só as classes com nome c2
const cursosC2 = [...document.getElementsByClassName("c2")]

//forma de dizer que só quer obter um tipo de elemento
const cursoEspecial = document.getElementsByClassName("curso")[4]

console.log(cursosTodos)
console.log(cursosC1)
console.log(cursosC2)
console.log(cursoEspecial)

cursosC2.map((elemento)=>{
    //adicionando uma classe aos elementos do array cursosC2, atraves do métodod classList
    elemento.classList.add("destaque")
})