/* 
Polimorfismo quando temos dois metodos com funcionalidades diferentes. 
Assim, em POO, podemos ter varios construtores com propriedades diferentes.
*/


class Carro{

    constructor(pTipo, pEstagioTurbo){

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
        console.log("\n")
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
            console.log(`Velocidade Max.: ${this.velMax}`)
            console.log(`Turbo: ${this.turbo}`)
            console.log("\n")
        }

    }

}


const c1 = new Carro(1, 0)
const c2 = new Carro(1, 1)
const c3 = new CarroEspecial(3)


c1.info()
c2.info()
c3.info()


