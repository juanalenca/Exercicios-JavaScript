let num = 6

if (num < 10) {

    console.log(`${num} é menor 10.`)

    if (num == 6) {
        console.log("E também é o meu número da sorte!")
    }

}else if (num >= 10 && num <= 99) {

    console.log(`${num} está entre 10 e 99.`)

}else {

    console.log(`${num} é maior ou igual a 100.`)

}

console.log("Fim do programa.")


//Exemplo 2

let energia = 100
let clima = "chovendo"

if (energia > 70 && clima == "Sol da desgráça") {
    console.log("Vou para o cinema!")
} else {
    console.log("Vou estudar!")
}

console.log("Fim do programa 2.")