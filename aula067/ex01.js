const teclasNum = [...document.querySelectorAll(".num")]
const teclasOp = [...document.querySelectorAll(".op")]
const teclaRes = document.querySelector(".res")
const display = document.querySelector(".display")
const ton = document.getElementById("ton")
const tlimpar = document.getElementById("tlimpar")
const tigual = document.getElementById("tigual")


let sinal = false
let decimal = false


teclasNum.forEach((elemento) => {
    
    elemento.addEventListener("click", (evento) => {

        sinal = false

        if(evento.target.innerHTML == ","){

            if(!decimal){

                decimal = true

                if(display.innerHTML =="0"){
                    display.innerHTML = "0,"
                }else{
                    display.innerHTML += evento.target.innerHTML
                }

            }

        }else{
        
            if(display.innerHTML == "0"){
                display.innerHTML = ""
            }

            display.innerHTML += evento.target.innerHTML
        
        }

    })

})

teclasOp.forEach((elemento) => {
    
    elemento.addEventListener("click", (evento) => {

        if(!sinal){

            sinal = true

            if(display.innerHTML == "0"){
                display.innerHTML = ""
            }

            if(evento.target.innerHTML == "x"){
                display.innerHTML += "*"
            }else{
                display.innerHTML += evento.target.innerHTML
            }
        }

    })

})


tlimpar.addEventListener("click", (evento) => {
    sinal = false
    decimal = false
    display.innerHTML = "0"
})

tigual.addEventListener("click", (evento) => {
    sinal = false
    decimal = false
    //a função eval avalia o parametro que ele recebeu e executa o mesmo, vamos usar par realizar calculos
    const res = eval(display.innerHTML)
    display.innerHTML = res
})


