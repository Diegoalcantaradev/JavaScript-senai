/*
MÉTADOS AVANÇADOS DE ARRAY
*/

// (1) - FOREACH(): executa uma data função em cada elemento do array

let array = [10,5,8,15]

array.forEach((elemento) => console.log(elemento))

// Resultado: exibir cada elemento do array no terminal [10,5,8,15]

// (2) - Map(): criar um novo array com os resultados da função de callback passada por argumento

let arrayDobro = array.map((elemento) => elemento * 2)

console.log(arrayDobro) //Resultado: [20,10,16,30]

// (3) - FILTER(): criar um novo array com todos os elementos que passam por um teste implementa

array.filter((elemento)=> elemento > 5) //Resultado: [10,8,15]

// (4) - concat(): retornar um array que é a concatenação de arrays passados como argumento

console.log(array.concat(arrayDobro))