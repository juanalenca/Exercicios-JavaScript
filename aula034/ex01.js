const caixa1 = document.querySelector("#caixa1")
const btnC = document.querySelectorAll(".curso")

//Nó raiz - é o documento
console.log(btnC[0].getRootNode())
//propretário do documento é o próprio documento
console.log(btnC[0].ownerDocument)

/*propriedadas não precisam de parênteses, só métodos precisam!
console.log(caixa1.firstElementChild)
console.log(caixa1.lastElementChild)
console.log(caixa1.children)
*/