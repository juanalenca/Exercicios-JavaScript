/*

Funções Anônimas: 
Não possuem um nome associado ao seu conteúdo, porqueela está associada a alguém.
São chamada sem tempo de execução, ou seja, são é criada no momento da sua execução.
Não está na memória como as funções normais.

*/

//Exemplo 1
const soma = function (...valores) {
    
    let res = 0 

    for(v of valores){
        res += v
    }
    
    return res

}

console.log(soma(10, 5))



/*

Exemplo 2
função construtor e Anônima: servem para operações simples

Sintaxe:
tipoVar nome = new Function ("argumento1", "arg.2", "...", "funcionalidade/corpo da função") 

*/
const soma2 = new Function ("v1", "v2", "v3", "return v1+v2+v3")

console.log(soma(10, 5, 6))