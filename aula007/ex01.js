let n1=10
let n2=11 

/*

calculo de equivalência de and (&) prevalece o bit 0
1010 == 10
1011 == 11
1010 == 10

calculo de equivalência de or (|) - prevalece o bit 1
1010 == 10
1011 == 11
1011 == 11

calculo de equivalência de psor (^) - retorna 0 em toda equivalência e retorna um se só tiver um
1010 == 10
1011 == 11
0001 == 1

*/

let rel1 = n1 & n2 //10
let rel2 = n1 | n2 //11
let rel3 = n1 ^ n2 //1

console.log(rel1)
console.log(rel2)
console.log(rel3)