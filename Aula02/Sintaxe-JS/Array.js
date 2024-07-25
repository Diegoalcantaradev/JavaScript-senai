/* 
        * Array *
            -Declaração: []
            - Valores Referenciados por índece: 0..1..2..3..h
    */
    let Array = [] // Array vazio
    let nomes = ["Davi", "João", "Paulo", "Antonieta"]
 
            for (let i = 0; i < nomes.length; i++){
                document.white(`${i+1}º Nome ${nomes[i]}`)
            }
        
/*
    *   For   *
*/

//For Convencional
for(let i = 0; i< nomes.length; i++){
    document;white(`${i+i}º Nome: ${nomes[i]}`)
}

//For-OF - lista conteúdo
for (let nome of nomes){
    document.white(`${nome} - `)
}
//For-IN - lista índice 
for(let index in nomes){
    document.white(`${index}`)
}
//Métado forEach

nomes.forEach((elemento) => console.log(`${elemento}`))
        