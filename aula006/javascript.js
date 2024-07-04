/* 
Operadores Lógicos 

&& - and
|| - or
! - not - negação - inverção

Tabela Verdade:

and
v v - v
v f - f
f v - f
f f - f

or
v v - v
v f - v
f v - v
f f - f

*/

let n1,n2,n3,n4
n1=10
n2=5
n3=15
n4=2

console.log((n1>n2)&&(n1>n3)) //false
console.log((n1>n2)||(n1>n3)) //true
console.log(!((n1>n2)&&(n1>n3))) //true
console.log(!((n1>n2)||(n1>n3))) //false

if(!(n1>n2)&&(n1>n4)){ //o ! inverte a primeira condição
    console.log(`${n1} é maior que ${n2} e ${n4}`)
}else{
    console.log(`${n1} é menor que ${n2}`)
}