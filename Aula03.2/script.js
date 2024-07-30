
    let num = [] 
    let qtd = prompt("quantos numeros deseja digitar?")
    for(let i = 0; i < qtd; i++){
        let digitos = prompt("Digite " + qtd +" numeros")
        num[i] = digitos
    }
    alert("numeros "+ num[2] + num[1] + num[0])
