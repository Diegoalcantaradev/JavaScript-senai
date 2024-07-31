

    function aumento(){
        let salario = document.getElementById("salario").value

        if(salario >= 0 && 280 ){
                document.getElementById("resultadosalario").innerHTML = `Seu salario atual é ${salario}
                Voce recebeu %20 de aumento Seu aumento é de R$${salario * 0.20}Seu novo Salario é ${(salario * 1.20)} `
            }else if(salario >= 280 && 700){
                document.getElementById("resultadosalario").innerHTML = `Seu salario atual é ${salario}
                Voce recebeu %15 de aumento Seu aumento é de R$${salario * 0.15}Seu novo Salario é ${(salario * 1.15)} `
            }else if(salario >= 700 && 1500){
                document.getElementById("resultadosalario").innerHTML = `Seu salario atual é ${salario} Voce recebeu %10 de aumento Seu aumento é de R$${salario * 0.10}Seu novo Salario é ${(salario * 1.10)} `
            }else if(salario >= 1500){
                document.getElementById("resultadosalario").innerHTML = `Seu salario atual é ${salario}
                Voce recebeu %5 de aumento Seu aumento é de R$${salario * 0.05}Seu novo Salario é ${(salario * 1.05)} `
            }
        }
    

