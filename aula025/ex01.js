/*this. - faz uma referencia a uma variavel de uma função 
que recebe um parâmetro de mesmo nome*/

function aluno(nome, nota){ 
    
    this.nome = nome
    this.nota = nota

    this.dadosAnonimos = function(){
        //gera atraso na execução dessa função
        /*e vai dar erro, porque os setTimeout sombreia
        os thises anteriores, já que ele cria novas instancias do this
        e sombreia os anteriores, só fazendo referencia as novas this*/
        setTimeout(function(){
            console.log(this.nome)
            console.log(this.nota)
        },2000)
    }    

    this.dadosArrow = function(){
        //com arrow function não tem problemas 
        //pois ele utiliza o contexto pai/aluno, não o contexto settimeout
        setTimeout( () => {
            console.log(this.nome)
            console.log(this.nota)
        },2000)
    }
    
}

const aluno1 = new aluno("Juan", 10)

aluno1.dadosAnonimos()

aluno1.dadosArrow()