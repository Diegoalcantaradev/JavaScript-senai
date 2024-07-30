
    //Função Declarativa
    function ExibirMedia(nota1, nota2){
    
    return (nota1+nota2) / 2

    }
    //função arrow
    let media = (nota1 , nota2) => (nota1 + nota2) / 2 
    let nota1 = Number(prompt("digite a 1° nota:"))
    let nota2 = Number(prompt("digite a 2° nota:"))
    
    confirm(ExibirMedia(nota1, nota2))  

    let notas = []

    notas.forEach((nota) => console.log((nota)))

    //Exemplos 

    /* Crie uma função que verifique se um número é par ou ímpar  */

    function resultNumber(Number){
        return ( Number % 2 == 0 ) ? "Número é PAR!" : "Número é ÍMPAR" 
    }
