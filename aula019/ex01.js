/*

Parâmetros Rest: possibilita que nós criémos uma função sem número determinado de valores

*/


function soma(...valores){
    let res = 0

    /* Outra forma:
    let qtd = valores.length //length fala o comprimento do array, qtd de parâmetros
    let res = 0
    for(let i=0; i<qtd; i++){
        res += valores[i] //res recebe ele mais os valores do array
    }
    */

    //a variável v recebe os valores do array valores
    //para que a variável res some os valores desse array
    for(let v of valores){
        res += v
    }


    return res 
}

console.log(soma(10, 6, 3, 8))