const caixa1 = document.querySelector("#caixa1")
const btnC = document.querySelectorAll(".curso")
const c1_2 = document.querySelector("#c1_2")
const cursos = ["HTML", "CSS", "JavaScript", "PHP", "React", "MySQL", "Python"]

//elemento - guarda o text
//chave - guarda o indice do text
cursos.map((elemento, chave) => {

    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", `c${chave}`)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = elemento

    caixa1.appendChild(novoElemento)

})



// criando um novo elemento atraves do método createElement
// const novoElemento = document.createElement("div")
// novoElemento.setAttribute("id", "c7")
// novoElemento.setAttribute("class", "curso c1")
// novoElemento.innerHTML = "Python"

//métodod de anexar filho que vamos usar parar anexar um novo elemento ao caixa1
//caixa1.appendChild(novoElemento)














