"use strict"
 
/*Formas de criar uma variável
var - pode ser acessado em qualquer bloco do código
let - não pode ser acessada fora do bloco em que foi declarada
const - nunca muda
*/

const fato = "vai a merda"
//dá erro!
//fato = "não"


//Com var
if(true){
    var nome1 = "Julia"
}

//antes 
console.log(nome1)

nome1 = "Ketelyn"

//depois
console.log(nome1)


//Com let
if(true){
    let nome2 = "Maria"
}
//não é possível chamá-la nem mudá-la
//console.log(nome2)


/* Exemplos dos dois casos */


//com let - 1
function teste(){

    let pessoa = "Fulano"

    if(true){
        //1° a ser impresso
        console.log(`Dentro do if está ${pessoa}`)
    }

    //2° a ser impresso
    console.log(`Dentro do teste está ${pessoa}`)

}

//executando função teste
teste()

//não é impresso pois está fora do escopo
//console.log(`Fora do teste está ${pessoa}`)



//Com let - 2
function teste(){

    if(true){
        //Único a ser impresso
        let pessoa2 = "Fulano"
        console.log(`Dentro do if está ${pessoa2}`)
    }

    ////não é impresso pois está fora do escopo
    console.log(`Dentro do teste está ${pessoa2}`)

}

teste()

//fora do escopo também
console.log(`Fora do teste está ${pessoa2}`)



//Com var - 1
function teste(){

    var pessoa2 = "Fulano"

    if(true){
        //1° a ser impresso
        console.log(`Dentro do if está ${pessoa2}`)
    }

    //2° a ser impresso
    console.log(`Dentro do teste está ${pessoa2}`)

}

teste()

//não é impresso pois está fora do escopo também
console.log(`Fora do teste está ${pessoa2}`)



//Com var - 2
function teste(){

    if(true){
        //1° a ser impresso
        var pessoa2 = "Fulano"
        console.log(`Dentro do if está ${pessoa2}`)
    }

    //2° a ser impresso
    console.log(`Dentro do teste está ${pessoa2}`)

}

teste()

//não é impresso pois está fora do escopo também
console.log(`Fora do teste está ${pessoa2}`)
