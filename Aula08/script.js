/*
    MÉTODOS DE ARRAY
*/

// (1) - PUSH: Inserir elementos ao final de um array
let alunos = ["Fábio", "Toin"]
alunos.push("Joaquim")

//Resultado: ["Fábio", "Toin", "Joaquim"]

// (2) - POP: Remover o último elemento do array

alunos.pop() // excluído o aluno 'Joaquim'

//Resultado; ["Fábio", "Toin"]

// (3) - SHIFT: Remover o primeiro elemento do array

alunos.shift()

//Resultado: ["Toin"]

// (4) - UNSHIFT: Adicionar um elemento no começo do array

alunos.unshift("Diego")

//Resultado: ["Diego", "Toin"]

// (5) - INDEXOF: Retorna o índice do primeiro elemento encontrado

let numbers = [2, 10, 2, 5, 7]

numbers.indexOF(5) // resultado 3
numbers.indexOF(2) // resultado 0
numbers.indexOF(1) // resultado -1

// (6) - LASTINDEXOF: Retorna o índece da última ocorrência do elemento

numbers.lastIndexOf(2) // Resultado: 2 

// (7) - SPLICE: alterar o conteúdo de um array seja adicionado ou remover

numbers.splice(3,1,4) // Resultado : [2, 10, 2, 4,7]

// (8) - SORT(): ordena o conteúdo de um array

numbers.sort()