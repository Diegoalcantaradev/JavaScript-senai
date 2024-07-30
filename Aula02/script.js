//salvar os palpites do usuario em uma array

let nomeJogador = prompt("Insira o seu nome")
let valores = []
let valorPremiado = math.floor(math.random() * 10)
   for(let i = 0; i < 3; i++){
    let palpite = prompt("Digite um número de 0 á 10")
    valores[i] = palpite
    if(palpite == valorPremiado){
        alert(`Parabéns ${nomeJogador}! Você ganhou R$1.00,00.`)
        break
    }else{
        alert("Tente novamente!")
    }
    }
        alert(`valores tentando: ${valores}`)

        