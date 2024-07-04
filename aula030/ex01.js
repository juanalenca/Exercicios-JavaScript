//const c1 = document.getElementById("c1")
//const c1 = document.querySelector("#c1")

/*O addEventListenertrata eventos dentro do objeto que estamos indicando.
objt.addEventListener("evento desejado", o que será executado quando esse evento ocorrer);
pode ser uma função que será chamada.
Agora mudamos o que o evente fazia e colocamos um parametro chamado "evento" que é recebido
pela "const elemento" juntamanete com o métodod ".target" (que indica qual elemento foi 
clicado durante o eveneto). Depois, a const elemento recebe uma nova adição de classe de estilo,
que é a classe destaque, que a faz mudar a cor do elemento c1 quando ele é clicado:
c1.addEventListener("click", (evento) => {
    const elemento = evento.target
    elemento.classList.add("destaque")
})
*/


const cursos = [...document.querySelectorAll(".curso")]

//vamos operar elemento por elemento da classe curso no html 
//parar que cadad um tenha sua estilização mudada
cursos.map((elemento) => {
    elemento.addEventListener("click", (evento) => {
        const elemento = evento.target
        elemento.classList.add("destaque")
        console.log(`${elemento.id} foi clicado!`)
    })
})

