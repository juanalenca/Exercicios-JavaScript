/*
- Objetos são instancias da classe e são independentes um do outro.
- E classes possuem atributos(caracteríticas) e métodos(funcionalidades/ações).
- O método construtor é um método que é automáticamente chamado quando um novo 
objeto dessa classe é instanciado. Basicamente é um método padrão da classe.
- this.propriedade.
*/


class Pessoa{

    constructor(paramNome) {
        this.nome = paramNome
    }

}


/*
- Aqui temos criando um objeto p1 da classe pessoa, 
onde o parênteses aqui faz referência direta 
ao parênteses do contrutor da classe.

- Obs.: se no contrutor da classe não tiver nenhum parâmetro, 
no instanciamento dos objetos dessa mesma classe, não podemos 
passar parâmetros também. Caso contrário, você é obrigado
a passar um parâmetro no ato do intanciamento.

- Toda vez que eu uso o operador "new", eu estou instanciando um novo 
objeto da determinada classe.
*/
let p1 = new Pessoa("Juan")
let p2 = new Pessoa("Amaroka")
let p3 = new Pessoa("Vitorôna")

console.log(p1.nome)
console.log(p2.nome)
console.log(p3.nome)