    /*
    
    

    */
    function calcularQuadrado(base, altura){
        return base * altura
    }
    let base = Number(prompt("digite a base do quadrado..."))
    let altura = Number(prompt("digite a altura do quadrado..."))

    document.write(`A área do quadrado é ${calcularQuadrado(base, altura)} `)