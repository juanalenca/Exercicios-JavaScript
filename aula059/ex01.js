/*
A herança acontece quando temos uma classe que herdar outra classe. 
Quando a classe pai cede os suas propriedades(atributos) e métodos para sua classse filho.
*/


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