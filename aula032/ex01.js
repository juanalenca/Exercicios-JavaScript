const caixa1 = document.querySelector("#caixa1")
const caixa2 = document.querySelector("#caixa2")
const btnTransferir = document.querySelector("#btnTransferir")
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
btnTransferir.addEventListener("click", () => {

    const cursosSelecionados = [...document.querySelectorAll(".selecionado")]

    /*Vamos utilizar a chave :not(.selecionado) - vamos listar alguem que não possua
    a classe selecionado, de uma forma não generalizada, pois usaremos o ".curso"
    parar informar o ":not" que queremos apenas os elementos da classe curso que 
    não possuem a classse ".selecionado", assim só pegaremos os seis elementos.*/
    const cursosNaoSelecionados = [...document.querySelectorAll(".curso:not(.selecionado)")]

    //eu vou elemento por elemento fazer um appendChilpd
    cursosSelecionados.map((elemento) => {
        //o appendChild é um método que anexa o filho (elemento) ao caixa2
        caixa2.appendChild(elemento)
    })

    cursosNaoSelecionados.map((elemento) => {
        //o appendChild é um método que anexa o filho (elemento) ao caixa1
        caixa1.appendChild(elemento)
    })

})