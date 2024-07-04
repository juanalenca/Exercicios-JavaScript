const caixa1 = document.querySelector("#caixa1")
const btnC1 = document.querySelector("#c1")
const cursos = [...document.querySelectorAll(".curso")]

caixa1.addEventListener("click", (eventoCaixa) => {
    console.log("Clicou!")
    console.log(eventoCaixa)
})

//em cada elemento dessa coleção eu vou adicionar o evento de click 
//para parar a propagação do evento anterior
cursos.map((elemento) => {
    //Método stopPropagation - para parar a propagação do evento
    elemento.addEventListener("click", (eventoBtn) => {
        eventoBtn.stopPropagation()
    }) 
})