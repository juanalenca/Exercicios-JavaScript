/*
Coleções iteráveis (retorna um iterador):
Array
String
Map
Sets
*/


const valores = [10,8,9,2]
//criando um iterador para o array "valores"
const itValores = valores[Symbol.iterator]()


const texto = "Youtube"
//criando um iterador para o array "valores"
const iteratorexto = texto[Symbol.iterator]()

console.log(texto)
console.log(iteratorexto.next().value) //.value obtem somente o valor
console.log(iteratorexto.next().value)
console.log(iteratorexto.next().value)
console.log(iteratorexto.next().value)
console.log(iteratorexto.next().value)
console.log(iteratorexto.next().value)
console.log(iteratorexto.next().value)
console.log(iteratorexto.next().value)
//se "done" for false significa que ele não chegou no final da função
//se for true, chegou no final da coleção







