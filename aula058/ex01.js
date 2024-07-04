/*Objetos Literais:
- Todos os objetos de uma mesma classe, todos apontam para o mesmo endereço de memória;
- A classe ou objeto sempre é único, e as suas propriedades sempre apontam pra eles.
*/


const Pessoa = {
    
    nome: "Juan",
    idade: 19, 

    getNome: function(){
        return this.nome
    }, 

    getIdade: function(){
        return this.idade
    }, 

    setNome: function(nome){
        this.nome = nome
    },

    setIdade: function(idade){
        this.idade = idade
    } 

}



const b2 = Pessoa
const b3 = Pessoa


//dois tipos de sintaxe de chamar uma propriedada do objeto literal
b3.nome = "Amaroka"
b2["nome"] = "Joseph"
Pessoa.setNome("Vitorôna")


console.log(Pessoa.nome)
console.log(b2.getNome())
console.log(b3.nome)

