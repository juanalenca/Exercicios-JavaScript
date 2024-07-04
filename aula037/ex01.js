const caixa1 = document.querySelector("#caixa1")
const btnC = document.querySelectorAll(".curso")
const c1_2 = document.querySelector("#c1_2")
const cursos = ["HTML", "CSS", "JavaScript", "PHP", "React", "MySQL", "Python"]

//elemento - guarda o text
//chave - guarda o indice do text
cursos.map((elemento, chave) => {

    //criação dos elementos divs
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", `c${chave}`)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = elemento

    //crianção dos elementos imgs
    const btnLixeira = document.createElement("img")
    btnLixeira.setAttribute("src", './lixeira.png')
    btnLixeira.setAttribute("class", "btnLixeira")

    //adicionando um evento de click que realiza a remoção da div child da div principal (caixa1)
    //para removermos as divs através d img da lixeira, precisamos removê-la apartir de seu elemento pai, que é o c0
    btnLixeira.addEventListener("click", (evento) => {
        caixa1.removeChild(evento.target.parentNode)
    })

    //acrescenta as criações através do appendChild
    novoElemento.appendChild(btnLixeira)

    caixa1.appendChild(novoElemento)

})













