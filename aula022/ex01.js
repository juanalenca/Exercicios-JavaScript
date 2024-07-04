//São funções dentro de outras funções ou que chama outras funções


/*Obs: a função somar poderia ser declarada fora da função soma,
daria o mesmo resultado, só muda a forma de organizar */
const soma = (...valores) =>{
    const somar = val => {
        let res = 0
        //v contem todos os valores do parâmetro val
        for(v of val){
            //acrescentando esses valores na variavel res
            res += v
        }
        return res
    }
    //A função "soma" retorna o retorno da função somar
    //retorno esse que é espalhado pelo "valores"
    return somar(valores)
}

/*O spread vlaores (...valores) espalha os valores
do parãmetro da função anônima soma.
A função "somar", que está dentro da função "soma", 
é onde é feito a lógica e o retorno da soma dos valores armazenados em "res", 
que vai ser retornada novamente pela função soma ("return somar(valores)"), 
onde acontece o espalhamento dos valores de val, 
atraves do passamento de "valores" como parãmetro na chamada da função somar.*/
console.log(soma(10, 5, 15))