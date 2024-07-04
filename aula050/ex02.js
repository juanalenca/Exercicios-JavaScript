const btn_soma = document.querySelector("#btn_soma")
const btn_subtracao = document.querySelector("#btn_subtracao")
const btn_multipicacao = document.querySelector("#btn_multipicacao")
const btn_divisao = document.querySelector("#btn_divisao")
const res = document.querySelector("#res")


const operacao = [

    () => {

        const val = [document.getElementById("valor1").value, document.getElementById("valor2").value]
        res.value = Number(val[0]) + Number(val[1])

    },

    () => {

        const val = [document.getElementById("valor1").value, document.getElementById("valor2").value]
        res.value = Number(val[0]) - Number(val[1])

    },

    () => {

        const val = [document.getElementById("valor1").value, document.getElementById("valor2").value]
        res.value = Number(val[0]) * Number(val[1])

    },

    () => {

        const val = [document.getElementById("valor1").value, document.getElementById("valor2").value]
        res.value = Number(val[0]) / Number(val[1])

    }

]


btn_soma.addEventListener("click", operacao[0])
btn_subtracao.addEventListener("click", operacao[1])
btn_multipicacao.addEventListener("click", operacao[2])
btn_divisao.addEventListener("click", operacao[3])


