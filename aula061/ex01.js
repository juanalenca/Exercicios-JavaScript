const f_tipoMilitar = document.querySelector("#f_tipoMilitar")
const f_tipoNormal = document.querySelector("#f_tipoNormal")
const f_blindagem = document.querySelector("#f_blindagem")
const f_municao = document.querySelector("#f_municao")
const f_nome = document.querySelector("#f_nome")
const f_portas = document.querySelector("#f_portas")
const carros = document.querySelector("#carros")
const btn_addCarro = document.querySelector("#btn_addCarro")


let arrayCarros = []


arrayCarros.filter((elementos) => {

})


f_tipoMilitar.addEventListener("click", (evento) => {

    //resetando valores
    f_nome.value = 0
    f_portas.value = 0
    f_blindagem.value = 0
    f_municao.value = 0

    //remove a disabilitação padrão
    f_blindagem.removeAttribute("disabled")
    f_municao.removeAttribute("disabled")

})


f_tipoNormal.addEventListener("click", (evento) => {

    f_nome.value = 0
    f_portas.value = 0
    f_blindagem.value = 0
    f_municao.value = 0

    //seta a disabilitação novamente nos respectivos campos
    f_blindagem.setAttribute("disabled", "disabled")
    f_municao.setAttribute("disabled", "disabled")

})


//todas vezes que chamarmos essa constante, ele vai mostrar todos os carros que estão no arrayCarros
const gerenciarExibicaoCarros = () => {
    
    //zerando o conteúdo de "carros" no html
    carros.innerHTML = ""

    //o forEach percorre todos os elementos de um array 
    //e executar uma ação para cada um deles. Tal aplicação 
    //é feita com a inserção de uma função como um parâmetro.
    arrayCarros.forEach((car) => {

        //criando a div no html
        const div = document.createElement("div")

        const btn = document.createElement("button")
        btn.innerHTML = "Remover"
        btn.addEventListener("click", (evento) => {

            console.log(evento.target.parentNode)

        })

        div.setAttribute("class", "carro")
        div.setAttribute("data-nome", car.nome)

        //a div vai receber o nome do carro adicionado (+= para concatenar)
        div.innerHTML += `Nome: ${car.nome}<br/>`
        div.innerHTML += `Portas: ${car.portas}<br/>`
        div.innerHTML += `Blindagem: ${car.blindagem}<br/>`
        div.innerHTML += `Munição: ${car.municao}<br/>`
        div.innerHTML += `Cor: ${car.cor}<br/>`
        
        div.appendChild(btn)
        carros.appendChild(div)

    })

}


btn_addCarro.addEventListener("click", (evento) => {

    if(f_tipoNormal.checked) {

        const c = new Carro(f_nome.value, f_portas.value)
        //adicionando a const c no final do arrayCarros atraves do push
        arrayCarros.push(c)
    
    }else{
        const c = new CarroMilitar(f_nome.value, f_portas.value, f_blindagem.value, f_municao.value)
        arrayCarros.push(c)
    }

    gerenciarExibicaoCarros()

})



//Classe PAI / BASE
class Carro{

    //método que é chamado automaticamento quando a classe é instanciada
    constructor(pNome, pPortas){
        //propriedades padrão
        this.nome = pNome
        this.portas = pPortas
        this.ligado = false
        this.velocidade = 0
        this.cor = undefined
    }

    //métodos básicos
    ligar = function(){
        this.ligado = true
    }

    desligar = function(){
        this.ligado = false
    }

    setCor = function(cor){
        this.cor = cor
    }

}


//a classe CarroMilitar vai herdar(extends) a classe Carro
//altomaticamente CarroMilitar tem todos os elementos existentes na classe Carro
class CarroMilitar extends Carro{

    //precisamos criar também um constructor na classe filha
    constructor(pNome, pPortas, parmMunicao, parmBlindagem){

        //o super() invoca algo específico da classe pai
        //neste caso estamos invocando o constructor e atribuindo os seus parametros
        super(pNome, pPortas)

        //propriedadas exclusivas da classe filha
        this.blindagem = parmBlindagem
        this.municao = parmMunicao
        this.setCor("Verde")
        
    }

    atirar = function(){
        if(this.municao > 0){
            this.municao--
        }
    }

}


class CarroUtilitario extends Carro{
    
    constructor(pNome, pPortas, pTipoMotor){
        super(pNome, pPortas)
        this.tipoMotor = pTipoMotor
    }

}



const c1 = new Carro("Gol", 4)
c1.ligar()
c1.setCor("Preto")


const c2 = new CarroMilitar("M3 Lee", 6, 2000, 100)
c2.ligar()
c2.setCor("Verde Militar")



//impressão classe pai Carro
console.log(`Nome: ${c1.nome}`)
console.log(`Num. Portas: ${c1.portas}`)
console.log(`Ligado: ${(c1.ligado ? "Sim" : "Não")}`)
console.log(`Velocidade: ${c1.velocidade}`)
console.log(`Cor: ${c1.cor}`)
console.log("\n")

//impressão classe filha CarroMilitar
console.log(`Nome: ${c2.nome}`)
console.log(`Num. Portas: ${c2.portas}`)
console.log(`Nível de Blindagem: ${c2.blindagem}`)
console.log(`Num. Munição: ${c2.municao}`)
console.log(`Ligado: ${(c2.ligado ? "Sim" : "Não")}`)
console.log(`Velocidade: ${c2.velocidade}`)
console.log(`Cor: ${c2.cor}`)
console.log("\n")