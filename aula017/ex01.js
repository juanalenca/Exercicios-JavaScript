//só pode ser retornado um return dentro da função
//e depois de um return, a função é interrompida e retorna o valor do return
function canal(){
    let n1 = 7
    let n2 = 9
    let res = n1 * n2
    if(res%2 == 0){
        return "Par"
    }else{
        return "Impar"
    }
}

//recebe o retorno da função
let res = canal()

console.log(res)