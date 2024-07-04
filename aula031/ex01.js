const caixa1 = document.querySelector("#caixa1")
const caixa2 = document.querySelector("#caixa2")
const btn = document.querySelector("#btnCopiar")
const todosCursos = [...document.querySelectorAll(".curso")]


/*Vamos adicionar um  evento de click elemento por elemento
E para cada um desses elementos que forem clicados, vamos adicionar,
através dométodod ".togge", a classe de estilos "selecionado".
O togge sabe se a o elemento está com a classe "selecionado" ou não,
então clicando novamente no elemento, o toggle remove a classe "selecionado" do mesmo
e vice versa:*/
todosCursos.map((elemento) =>{
    elemento.addEventListener("click", (evento) => {
        const curso = evento.target
        curso.classList.toggle("selecionado")
    })
})


/*Quando eu clicar no botão eu vou pegar os elementos que 
possuem a classe "selecionado" no caixa1 e vou colocar no caixa2*/
btn.addEventListener("click", () => {

    const cursosSelecionados = [...document.querySelectorAll(".selecionado")]

    //eu vou elemento por elemento fazer um appendChilpd
    cursosSelecionados.map((elemento) => {
        //o appendChild é um método que anexa o filho (elemento) ao caixa2
        caixa2.appendChild(elemento)
    })

})