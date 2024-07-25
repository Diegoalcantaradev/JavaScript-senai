/* * Estrutura de Repetição *
            - While
            - For
*/
let nome = prompt("Insira o seu nome")
   while(true){

    let palpite = prompt("Digite um número de 0 á 10")

    if(palpite == 5){
        alert(`Parabéns ${nome}! Você ganhou R$1.00,00.`);
    }else{
        alert("Tente novamente!")
    }
   }
   
   let nomeJogador = prompt("Insira o seu nome")

   for(let i = 0; i < 3; i++){
    
    let palpite = prompt("Digite um número de 0 á 10")

    if(palpite == 5){
        alert(`Parabéns ${nomeJogador}! Você ganhou R$1.00,00.`)
    }else{
        alert("Tente novamente!")
    }
    
}
   