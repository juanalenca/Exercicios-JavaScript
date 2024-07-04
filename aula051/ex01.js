/*
Coleção Map:
- Coleção MAP e map são coisas diferentes. 
- É uma coleção do tipo chave valor, ou seja, temos sempre que adicionar uma chave valor.
- Cada elemento do Map possui um conjunto de chave e valor.
- Usamos a chave do valor para fazer referência ao mesmo.
- Tanto as chaves como os valores pode ser de qualquer valor.
- Os valores podem se repitir, mas as chaves não.
*/

const caixa = document.querySelector("#caixa")


//declarando uma variável que recebe uma coleção do tipo map
let mapa = new Map()


//adicionando elementos com o método .set()
//Sintaxe: .set(<chave>, <valor>)
mapa.set("curso", "JavaScript")
mapa.set(10, "Python")
mapa.set(1, 100)
mapa.set("Lucky", 6)


mapa.delete(1)


console.log(mapa)



let pes = "teste"
let res = ""

//utilizando o método .has() para especificar se tal chave existe na coleção Map ou não
if(mapa.has(pes)){
    res = `A chave existe na coleção com o valor ${mapa.get(pes)}.`

}else{
    res = "A chave não existe na coleção!"
}

res += `<br/> O tamanho da coleção é ${mapa.size}.`
caixa.innerHTML = res


//obtendo, através do .get(), a chave da coleção "mapa" e fazendo com que a div caixa o receba
//caixa.innerHTML = mapa.get("canal")



//percorrendo toda coleção Map com a função forEach
mapa.forEach((elemento) => {
    console.log(elemento)
})


