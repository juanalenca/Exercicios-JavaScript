/* querySelector: é generico, obtem o elemento que for especificado para ele, 
independente de qual for, basta especificar o elemento no parâmetro*/


const divTodos = [...document.getElementsByTagName("div")]
const cursosTodos = [...document.getElementsByClassName("curso")]
const cursosC1 = [...document.getElementsByClassName("c1")]
const cursosC2 = [...document.getElementsByClassName("c2")]
const cursoEspecial = document.getElementById("c1")


/*
Com o querySelector é obtido somente a primeira div de todos os elementos.
Com o querySelectorAll é obtido toda coleção com todas as divs.
Você pode obter masi de um elemento, basta indicar o nome e separar 
com a virgulo: ("div,p").
Também podemos especificar que queremos obter somente as divs que 
possuem uma classe, por exemplo: ("div[class]").
E, por fim, podemos pegar todos os elemento que estiverem 
dentro de uma div, por exemplo o elemento p: ("div > p")
*/
const queryDivTodas = [...document.querySelectorAll("div > p")]

/*parar indicar que queremos obter somente os elementos que utilizam a classe curso,
precisamos especificar com um ., igual no css.Assim como se quisermos indicar o id, 
usamos o #. E se quiser retornar só o elemento mesmo, especifique a posição dele 
entre colchetes ao lado da função.*/
const queryCursosTodos = [...document.querySelectorAll(".curso")]
const queryCursosC1 = [...document.querySelectorAll(".c1,p")]
const queryCursosC2 = [...document.querySelectorAll(".c2")]
const queryCursoEspecial = document.querySelectorAll("#c1")[0]

console.log(queryDivTodas)
console.log(queryCursosTodos)
console.log(queryCursosC1)
console.log(queryCursosC1)
console.log(queryCursoEspecial)






/*
console.log(divTodos)
console.log(cursosTodos)
console.log(cursosC1)
console.log(cursosC2)
console.log(cursoEspecial)
*/



/*
cursosC2.map((elemento)=>{
    //adicionando uma classe aos elementos do array cursosC2, atraves do métodod classList
    elemento.classList.add("destaque")
})
*/