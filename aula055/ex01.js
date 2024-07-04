/*
- Objetos são instancias da classe e são independentes um do outro.
- E classes possuem atributos(caracteríticas) e métodos(funcionalidades/ações).
- O método construtor é um método que é automáticamente chamado quando um novo 
objeto dessa classe é instanciado. Basicamente é um método padrão da classe.
- this.propriedade.
*/


class Carro{

    //Propriedade padrão da classe, que fica fora do construtor
    concessionaria = "Laputa"

    constructor(paramNome, paramTipo) {

        this.nome = paramNome

        if(paramTipo == 1){

            this.tipo = "Esportivo"
            this.kmMax = 340

        }else if(paramTipo == 2){

            this.tipo = "Utilitário"
            this.kmMax = 180

        }else if(paramTipo == 3){

            this.tipo = "Passeio"
            this.kmMax = 199

        }else{

            this.tipo = "Peace of shit, like a Kwid"
            this.kmMax = 100

        }

    }

    //étodos de obtenção e de atribuição
    getNome(){
        return this.nome
    }

    getTipo(){
        return this.tipo
    }

    getKmMax(){
        return this.kmMax
    }

    getInfo(){
        return [this.nome, this.tipo, this.kmMax]
    }

    //setandano um novo valor
    setNome(nome){
        this.nome = nome
    }

    setTipo(tipo){
        this.tipo = tipo
    }

    setKmMax(kmMax){
        this.kmMax = kmMax
    }

    //criando um método para impressão de propriedades
    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log(`Velocidade Max.: ${this.kmMax}`)
        console.log(`Concessionária: ${this.concessionaria}`)
        console.log("\n")
    }

}



/*
- Aqui temos criando um objeto c1 da classe Carro, 
onde o parênteses aqui faz referência direta 
ao parênteses do contrutor da classe.

- Obs.: se no contrutor da classe não tiver nenhum parâmetro, 
no instanciamento dos objetos dessa mesma classe, não podemos 
passar parâmetros também. Caso contrário, você é obrigado
a passar um parâmetro no ato do intanciamento.

- Toda vez que eu uso o operador "new", eu estou instanciando um novo 
objeto da determinada classe.
*/
//Declarações:
let c1 = new Carro("Ferrari", 1)
let c2 = new Carro("Hilux", 2)
let c3 = new Carro("Corolla", 3)
let c4 = new Carro("Onix", 4)



//Impressões:
c1.info()

c2.setNome("Intankável")

c2.info()

console.log(c3.getInfo())
console.log(c3.getNome())
console.log(c3.getTipo())
console.log(c3.getKmMax())

