//Exercícios de interpretação de código
//1-
let array
console.log('a. ', array)// a. undefined

array = null
console.log('b. ', array)// b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)// c. 11

let i = 0
console.log('d. ', array[i])// d. 3

array[i+1] = 19
console.log('e. ', array)// e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor)// f. 9

//2-
const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)//SUBI NUM ÔNIBUS EM MIRROCOS 27

//Exercícios de escrita de código
//1-
const nomeDoUsuario = prompt(`Digite seu nome: `)
const emailDoUsuario = prompt(`Digite seu email: `)

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}`)

//2-
const comidasFavoritas =  [`pizza`, `lasanha`, `coxinha`, `chocolate`, `açaí`]
console.log(comidasFavoritas)
console.log(`Essas são as minha comidas preferidas:  ${comidasFavoritas[0]}
                                        ${comidasFavoritas[1]}
                                        ${comidasFavoritas[2]}
                                        ${comidasFavoritas[3]}
                                        ${comidasFavoritas[4]}`)
const comidaUsuario = prompt(`Qual a sua comida favorita?`)
comidasFavoritas[1] = comidaUsuario

console.log(`Essas são as minha comidas preferidas:  ${comidasFavoritas[0]}
                                        ${comidasFavoritas[1]}
                                        ${comidasFavoritas[2]}
                                        ${comidasFavoritas[3]}
                                        ${comidasFavoritas[4]}`)

//3-
let listaDeTarefas = []
const tarefa1 = prompt(`Digite a primeira tarefa que voçê precisa realizar: `)
const tarefa2 = prompt(`Digite a segunda tarefa que voçê precisa realizar: `)
const tarefa3 = prompt(`Digite a última tarefa que voçê precisa realizar: `)
listaDeTarefas.push(tarefa1, tarefa2, tarefa3)

console.log(listaDeTarefas)

const tarefaConcluida = Number(prompt(`Digite o índice da tarefa concluída(0, 1 ou 2): `))
listaDeTarefas.splice(tarefaConcluida, 1)
console.log(listaDeTarefas)

//Desafios
//1- 
const fraseSepara = prompt(`Digite uma frase de sua escolha`)
const letrasDaFrase = fraseSepara.split(' ')

console.log(fraseSepara, letrasDaFrase)

//2- 
const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

const abacaxiIndice = frutas.indexOf("Abacaxi")
console.log(`Índice do abacaxi em frutas: ${abacaxiIndice} // Tamanho da array frutas: ${frutas.length}`)