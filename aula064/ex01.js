/* 
PROTOTYPE serve para adicionar uma propriedade ou um método 
a um objeto depois da criação da classe.
*/


//classe Nave
const Nave = function(ParamEnergia){

    this.energia = ParamEnergia
    this.disparos = 100

}


const n1 = new Nave(100)


//usando o prototype para dicionar um novo atributo a classe
Nave.prototype.vidas = 3

//usando o prototype para dicionar uma nova função a classe
Nave.prototype.disparar = function(){
    if(this.disparos > 0){
        this.disparos--
    }
}


//chamando a função para o object n1
n1.disparar()


console.log(Nave)
console.log(n1)
console.log(n1.vidas)
console.log(n1.disparos)
