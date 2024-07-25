/* * Estrutura condicional *
        -if..else
        -Switch..case
*/
let nome = prompt("Insira o seu nome")
let palpite = prompt("Digite um número de 0 á 10")

if(palpite == 5){
    alert(`Parabéns ${nome}! Você ganhou R$1.00,00.`);
}else{
    alert("Tente novamente!")
}

let sexo = prompt("Informe o seu Sexo")
    
switch(sexo){
    case "Masculino":
    alert("Sexo Masculino!")
    break
    case "Feminino":
    alert("Sexo Feminino!")
    break
    default: alert("Sexo indefinido!")
}
