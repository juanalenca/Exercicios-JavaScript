/*

Arrow Function: tipo de declaração de função anônima.

Sintaxe:

tipoVar nome = (parâmetros) => {
    bloco de comandos
}

*/

//Passando (=>) os parametros para dentro da função ({})
const soma = (v1, v2) => {
    let res = v1+v2
    return res
}
console.log(soma(10, 60))



//outra forma de sintaxe que é feita quando só usamos 1 parâmetro, então não precisamos do ()
const nome = n => {
    return n
}
console.log(nome("Juan"))



//outra forma mais simples, onde, sem o uso do return, não é obrigado colocar as {} 
const add = n => n + 10

console.log(add(10))

