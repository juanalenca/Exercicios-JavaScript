/* 

Funções Geradoras: possuem o seu retorno adiado 
até o momento que precisarmos desse retorno. 
A própria função tem o controle do retorno, 
isso possibiita que ela retorne coisas
diferentes ao logo de sua chamada no programa.
Assim, qaundo chamamos a função geradora pela primeira vez
ele irá retornar um iterador e a partir da segnda vez
ela vai entrar na sua execução, retornando sempre que houver um
comando ou iteração yeld (retorno acrescentado), retorno esse
que, quanod chamado novamente, vai sempre utilizando o retorno anterior

Sintaxe:
function* nomeFunction() {}

retorno:
const/var/let nome = nomeFunction()

*/


/*Exemplo 1

function* cores() {
    yield "Red"
    yield "Green"
    yield "Blue"
}

//1° chamada da função
//como não tem mais valores para serem retornados é preciso chamar a função novamente
let iterador = cores()

//2° chamada da função - de entrada na função e execução
//.next() é um metodo que retorna a próxima execução da função
//.value pega o valor retornado desta execução
//assim, ele para depois dessa primeira execução e nas próximas ele continua
console.log(iterador.next().value)

//3° chamada da função
console.log(iterador.next().value)

//4° chamada da função
console.log(iterador.next().value)

*/


/*Exemplo 2

function* perguntas(){
    const name = yield "What's your name?"
    const sport = yield "What's your favorite sport?"
    return `Your name is ${name} and your favorite sport is the ${sport}!`
}

let iterPerguntas = perguntas()

console.log(iterPerguntas.next().value)

console.log(iterPerguntas.next("Juan").value)

console.log(iterPerguntas.next("Boxe").value)

*/


function* contador(){
    let i = 0
    while(true){
        yield i++
        if(i>20){
            break
        }
    }
}

const iterador = contador()

for(let i=0; i<5; i++){
    console.log(iterador.next().value)
}

//or:

for(let c of iterador){
    console.log(c)
}
