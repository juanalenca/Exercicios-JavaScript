const Pessoa = {

    nome: "Juan",
    curso: "S.I",
    aulas: {
        aula01: "Mobile Code",
        aula02: "Banco de Dados",
        aula03: "Arquitetura de Software"
    }

}

const str_pessoa = '{"nome":"Juan","curso":"S.I","aulas":{"aula01":"Mobile Code","aula02":"Banco de Dados","aula03":"Arquitetura de Software"}}'


//convertendo o objeto literal em uma string JSON, atraves do metodo stringify do JSON
const str_json_pessoa = JSON.stringify(Pessoa)

//convertendo uma string JSON em um objeto, atraves do metodo parse do JSON
const obj_json_pessoa = JSON.parse(str_pessoa)



console.log(Pessoa)
console.log(str_json_pessoa)
console.log(obj_json_pessoa)