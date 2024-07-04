/*

Template Strings:

- `${<variável/const>}`

*/

const caixa = document.querySelector("#caixa")

const carros = ["Gol", "Onix", "kwid", "T-Cross"]

let ul = `<ul>`

carros.map((elemento) => {
    ul += `<li>${elemento}</li>`
})

ul + `</ul>`

caixa.innerHTML = ul