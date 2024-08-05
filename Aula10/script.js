//atividade01
let listaCompras = ["arroz", "feijão", "aveia"]

listaCompras.push("tapioca","frutas")

listaCompras.splice(listaCompras.indexOf("tapioca"),1)

console.log(listaCompras)
// atividade02
let notasAlunos = [1, 4, 2, 3, 7, 9, 5]

//maior nota
console.log(notasAlunos.sort((a,b)=> a - b)[notasAlunos.length - 1])
//menor nota
console.log(notasAlunos.sort((a,b)=> b - a)[notasAlunos.length - 1])