function calcularQuadrado(){
    let base = document.getElementById("base").value
    let altura = document.getElementById("altura").value

    if(base == "" || altura == ""){
        document.getElementById("resultadoinvalido").innerHTML = `Preencha os campos de base e altura!`    
        return
    }

    document.getElementById("resultado").innerHTML = `A àrea do quadrado é ${base * altura}`
}