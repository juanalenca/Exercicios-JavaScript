let colocacao = 6

switch (colocacao) {
    case 1:
        console.log("1° lugar")
        break;
        
    case 2:
        console.log("2° lugar")
        break;

    case 3:
        console.log("3° lugar")
        break;
    
    //caso seja 4,5 ou 6, ele executa o comando
    case 4: case 5: case 6:
        console.log("Premio de participação")
        break

    default:
        console.log("Não subiu ao pódio")
        break;
}