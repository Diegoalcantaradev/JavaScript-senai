//Exemplos 

    /* Crie uma função que verifique se um número é par ou ímpar  */

    function resultNum(Num){
        return ( Num % 2 == 0 ) ? "Número é PAR!" : "Número é ÍMPAR" 
    }

    let Num = prompt("Digite um valor...")

    document.write(`O número ${Num} é ${resultNum(Num)}`)