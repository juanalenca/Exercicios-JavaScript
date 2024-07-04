/* 
Um membro static pode ser definido tanto em uma atributo (propriedade) 
quanto um metodo (função). Quando criado, conseguimos envocá-lo sem ter que 
instanciar a classe, como se os membros statics pertencessem as classe e não 
as instancias das mesmas. Ou seja, se definimos um valor de um atributo static 
na classe, todas as instancias vão conseguir ler este valor.
Um atributo ou métodod static é da classe, e não das suas instancias.
*/


class Npc {

    //propriedade static da classe
    static alerta = false

    constructor(ParamEnergia){

        this.energia = ParamEnergia

    }

    info = function(){

        console.log(`Energia: ${this.energia}`)
        console.log(`Alerta: ${(Npc.alerta ? "Sim" : "Não")}\n\n`)

    }

    //função static da classe
    static alertar = function(){

        Npc.alerta = true

    }

}



const npc1 = new Npc(100)
const npc2 = new Npc(300)
const npc3 = new Npc(600)


//mudando o atributo static da classe, o que muda para todas as instancias
Npc.alerta = true

//chamando a fuction static alertar
Npc.alertar()


npc1.info()
npc2.info()
npc3.info()






