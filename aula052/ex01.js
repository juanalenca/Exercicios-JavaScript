/*
Coleção Set:
- Não permite entradas duplicadas de elementos, diferente do array.
- No set, você já pode declarar os elementos direto no contrutor -> ([])
*/

const caixa = document.querySelector("#caixa")


let musicas = new Set(["first music", "good music", "bad music"])

//método para adicionar novos elementos
musicas.add("coll music")
musicas.add("first music")
musicas.add("first music")
musicas.add("bad music")

musicas.delete("first music")
musicas.clear()


console.log(musicas)


musicas.forEach((elemento) => {
    caixa.innerHTML += `${elemento} <br/>`
})