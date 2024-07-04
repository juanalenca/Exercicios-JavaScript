/* 
Abstract Class: quando temos uma classe abstrata ele não pode ser instanciada, 
só podendo ser extendida por outras classe.
*/


class CarroPadrao{

    constructor(){

        //tornando esta classe abstrata
        if(this.constructor == CarroPadrao){
            throw new TypeError("Esta classe não pode ser instanciada!")
        }

        if(this.ligar == undefined){
            throw new TypeError("É obrigatório implementar o método ligar")
        }

        if(this.desligar == undefined){
            throw new TypeError("É obrigatório implementar o método desligar")
        }

        this.rodas = 4
        this.portas = 4
        this.ligado = false

    }

}


class Carro extends CarroPadrao{

    constructor(pTipo, pEstagioTurbo){

        super()
        this.turbo = new Turbo(pEstagioTurbo)
        if(pTipo == 1){
            this.velMax = 120
            this.nome = "Normal"
        }else if(pTipo == 2){
            this.velMax = 160
            this.nome = "Intermediário"
        }else if(pTipo == 3){
            this.velMax = 200
            this.nome = "Esportivo"
        }
        this.velMax = this.turbo.potencia
        
    }

    info(){
        console.log(this.nome)
        console.log(this.velMax)
        console.log(this.turbo)
        console.log(this.portas)
        console.log(this.rodas)
        console.log(this.ligado)
        console.log("\n")
    }

    ligar(){
        this.ligado = true
    }

    desligar(){
        this.ligado = false
    }

}


class Turbo{

    constructor(pE){

        if(pE == 1){
            this.potencia = 50
        }else if(pE == 2){
            this.potencia = 75
        }else if(pE == 3){
            this.potencia = 100
        }else if(pE == 0){
            this.potencia = 0
        }

    }

}


class CarroEspecial extends Carro{

    constructor(pEstagioturbo){
        
        //chamando o construtor da outra calsse (Carro) e setando automaticamente o pTipo == 4
        super(4, pEstagioturbo)
        this.tipoInfo = false
        this.velMax = 300 + this.turbo.potencia
        this.nome = "Carro Especial"

    }

    /*chamando o métodod da classe pai dentro de outra função
    info(){
        super.info()
    }
    */

    //subistituindo o info da classe pai
    info(){

        if(this.tipoInfo == true){
            super.info()
        }else{
            console.log(`Nome: ${this.nome}`)
            console.log(`Num. Portas: ${this.portas}`)
            console.log(`Num. Rodas: ${this.rodas}`)
            console.log(`Estado: ${this.ligado}`)
            console.log(`Velocidade Max.: ${this.velMax}`)
            console.log(`Turbo: ${this.turbo}`)
            console.log("\n")
        }

    }

}


const c1 = new Carro(1, 0)
const c2 = new Carro(1, 1)
const c3 = new CarroEspecial(3)
//const c4 = new CarroPadrao()


c1.info()
c2.info()
c3.info()



