/*O Reduce permitir reduzir o array, através do meu código especificado

Sintaxe (pode ser feito também com funções separadas):
nome_array.reduce((anterior, atual, posicao, array) => {
    bloco de comandos
})
*/

const p_array = document.querySelector("#array")
const btnReduzir = document.querySelector("#btnReduzir")
const resultado = document.querySelector("#resultado")


const elementos_array = [1,2,3,4,5]

let antes = []
let novo = []
let dobro = []

p_array.innerHTML = `[${elementos_array}]`


btnReduzir.addEventListener("click", (evento) => {

    //para a operação começar com o dobro do primeiro elemento
    dobro.push(elementos_array[0] * 2)

    //o anterior é o retorno da operação, não o valor anterior do vetor
    resultado.innerHTML = elementos_array.reduce((anterior, atual, posicao, array) => {

        //adicionar o valor do parâmetro anterior
        antes.push(anterior)
        novo.push(atual)
        dobro.push(atual * 2)

        return atual + anterior

    })

    //atual + anterior
    resultado.innerHTML += `<br/>Valor anterior: ${antes} <br/>Valor atual: ${novo} <br/>Dobro: ${dobro}`

})


