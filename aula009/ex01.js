let n = 10
let n2 = 5
let st = "I"

let res = n%2

if(res == 0){
    console.log("É par!")
}else{
    console.log("É Impar!")
}

//Or

//0 == false , 1 == true

/*
No operador ternário, se o valor da condição (neste caso "n%2") for
true, ele retorna o primeiro valor ("Par"), caso a codição 
seja false, ele retorna o ultimo valor ("Impar"). Como
a condição abaixo foi false, pois n%2==0, ele retornou o 
segundo valor ("Impar"), por isso temos que inerter (!) a condição,
para que a mesma seja true e seja retornado "Par".
*/
let res2 = (!(n%2) ? "Par" : "Impar") //condição ? se true : se false
console.log(res2)

let res3 = n>n2 ? "Verdadeiro, é maior!" : "Falso, é menor!"
console.log(res3)

let res4 = st == "A" ? "Status ativo!" : "Status inativo!"
console.log(res4)