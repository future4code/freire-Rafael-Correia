/*
Exercícios de interpretação de código
1- 
let a = 10
let b = 10

console.log(b)//imprime "10" no console

b = 5
console.log(a, b)//imprime "10" e "5" no console

2-
let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)//imprime "10", "10" e "10" no console

3-
let p = prompt("Quantas horas você trabalha por dia?")// let horasTrabalhadasDiariamente
let t = prompt("Quanto você recebe por dia?")// let ganhosDiarios
alert(`Voce recebe ${t/p} por hora`)
*/

//Exercícios de escrita de código
//1-
let nome
let idade
console.log(typeof nome, typeof idade)//undefined undefined(isso acontece porque nada foi atribuído as variáveis, portanto elas não tem um tipo ainda)

nome = prompt('Qual o seu nome?')
idade = prompt('Qual a sua idade?')
console.log(typeof nome, typeof idade)// string string(os valores não são mais undefined já que as variáveis receberam atribuição, agora passaram a ser string, isso acontece porquê é padrão do js receber valores do prompt como string, pode ser necessário ter que converte-los)

console.log("Olá ", nome, ", você tem ", idade, " anos")

//2-
let acai = prompt('Você gosta de Açaí?')
let coxinha = prompt('Você gosta de coxinha?')
let batataDoce = prompt('Você gosta de batata doce?')

console.log('Você gosta de Açaí? ', acai)
console.log('Você gosta de coxinha? ', coxinha)
console.log('Você gosta de batata doce? ', batataDoce)

//3-
let a = 10
let b = 25

// Aqui faremos uma lógica para trocar os valores
let guardaValor = a
a = b
b = guardaValor
// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10

//DESAFIO
let primeiroNumero = prompt('Digite um número: ')
let segundoNumero = prompt('Digige o segundo número: ')

let soma = Number(primeiroNumero) + Number(segundoNumero)
let multiplicacao = primeiroNumero * segundoNumero

console.log('O primeiro número somado ao segundo número resulta em: ', soma, '.')
console.log('O primeiro número multiplicado pelo segundo número resulta em: ', multiplicacao, '.')