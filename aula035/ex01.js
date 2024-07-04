const caixa1 = document.querySelector("#caixa1")
const btnC = document.querySelectorAll(".curso")
const c1_2 = document.querySelector("#c1_2")

console.log(c1_2.parentNode.parentNode.parentNode.children[4])




/*
//Métodod que identifica se um elemento possui um filho ou não - true ou false
console.log(caixa1.hasChildNodes())
console.log(btnC[0].hasChildNodes())
console.log(btnC[0].childNodes)
8?

/*
if(caixa1.children.length > 0){
    console.log("Possui filhos!")
}else{
    console.log("Não possui filhos!") 
}
*/

/*
//or
console.log(btnC[0].children.length > 0 ? "Possui filhos!" : "Não possui filhos!")

//mudando o text do css
console.log(caixa1.children[1].innerHTML = "TESTE")

8?


/*propriedadas não precisam de parênteses, só métodos precisam!
console.log(caixa1.firstElementChild)
console.log(caixa1.lastElementChild)
console.log(caixa1.children)
*/