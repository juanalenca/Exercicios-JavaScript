let n1=10
let n2=30

/*

BITWaze 

- deslocamento dos bits para esquerda <<,
ou seja, você está retirando o primeiro bit
da esquerda e colocando um zerp na direita 

- delocamento ddos bits para direita >>,
ou seja, você está retirando o primeiro bit
da direita e colocando um zero na esquerda

exs: 
Com <<

10 << 1
1010 == 10
10100 == 20


Com >>

30 << 1
11110 == 30
1111 == 15

*/


//delocando um bit da variável n1 para a esquerda,
//que é a mesma coisa de dobrar o valor da variável
let res1 = n1 << 1

//delocando um bit da variável n1 para a direita,
//que é a mesma coisa de reduzir pela metade o valor da variável
let res2 = n2 >> 1

console.log(res1)
console.log(res2)