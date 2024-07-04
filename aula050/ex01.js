let valores = [1,2]
const operacao = [

    (val) => {
        let res = 0
        for(v of val){
            res += v
        }
        return res
    },

    (val) => {
        let res = 1
        for(v of val){
            res *= v
        }
        return res
    },

    (val) => {
        for(v of val){
            console.log(v)
        }
    }

]

/*chamando  o array "operacao" que contém três funções, 
onde posso especificar qual função quero chamar através do []
e também passar outro array como parâmetro das funções que estão dentro de outro array através do ()
*/
console.log(operacao[2](valores))