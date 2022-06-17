//Exercícios de interpretação de código
/*
1. O que o código abaixo está fazendo? Qual o resultado impresso no console?
    let valor = 0
    for(let i = 0; i < 5; i++) {
        valor += i
    }
    console.log(valor)// Imprime 10

        R: O código incrementa a váriavel 'valor' usando 'i' por meio de um loop que rodará enquanto i for menor que 5, e 'i' será incrementado toda vez que rodar.


2. Leia o código abaixo:
    const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
    for (let numero of lista) {
        if (numero > 18) {
            console.log(numero)
        }
    }

    a) O que vai ser impresso no console?

        R: 19 21 23 25 27 30

    b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?

        R: Podemos usar o método entries() na array 'lista', ou definir uma varável que será incrementada toda vez que o for... of passar por um loop, essa variável ficará dentro do for e fora do if.
    
3.Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?

    const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
    let quantidadeAtual = 0
    while(quantidadeAtual < quantidadeTotal){
        let linha = ""
        for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
        linha += "*"
        }
        console.log(linha)
        quantidadeAtual++
    }

        R: *
           **
           ***
           ****

*/

//Exercícios de escrita de código
//1.
// const quantidadeDePets = Number(prompt('Digite o número de pets que você tem:'))
// const nomesDosPets = []

// if(quantidadeDePets === 0) {
//     console.log('Que pena! Você pode adotar um pet!')
// } else {
//     for(let i = 0; i < quantidadeDePets; i++){
//         const nomeDoPet = prompt(`Qual o nome do seu ${i + 1}° bichinho?`)
//         nomesDosPets.push(nomeDoPet)
//     }
// }

// console.log(nomesDosPets)

//2.
// console.log('////////////////A)///////////////')

// for(let i = 0; i < array.length; i++){
//     console.log(array[i])
// }

// console.log('////////////////B)///////////////')
// for(let i = 0; i < array.length; i++){
//     console.log(array[i] / 10)
// }

// console.log('////////////////C)///////////////')
// const novoArray = []
// for(let i = 0; i < array.length; i++){
//     if(array[i] % 2 === 0){
//         novoArray.push(array[i])
//     }
// }
// console.log(novoArray)

// console.log('////////////////D)///////////////')
// const arrayDeStrings = []

// for(let i = 0; i < array.length; i++){
//     const novaString = `O elemento do índex ${i} é: ${array[i]}`
//     arrayDeStrings.push(novaString)
// }
// console.log(arrayDeStrings)

// console.log('////////////////E)///////////////')
// let maiorNumero = array[0];
// let menorNumero = array[0];

// for(let i = 0; i < array.length; i++){

//     if(array[i] > maiorNumero){
//         maiorNumero = array[i]
//     } else if(array[i] < menorNumero){
//         menorNumero = array[i]
//     }
// }
// console.log(`O maior número é ${maiorNumero} e o menor é ${menorNumero}`)

//Desafios
//1.
const numeroSecreto = Number(prompt('Escolha um número: '))
console.log('Vamos Jogar!')

let numeroChutado
let numeroDeTentativas = 0

while(numeroChutado !== numeroSecreto){
    numeroChutado = Number(prompt('Chute um número: '))
    console.log(`O número chutado foi: ${numeroChutado}`)

    if(numeroChutado > numeroSecreto){
        console.log('Errou!!! Chutou muito alto.')
    } else if(numeroChutado < numeroSecreto){
        console.log('Errou!!! Chute baixo demais.')
    }

    numeroDeTentativas++
}

console.log('Acertou!!!')
console.log(`Número de tentativas: ${numeroDeTentativas}`)

//2.
const numeroSecreto2 = Math.floor(Math.random() * 100)
console.log('Vamos Jogar!')

let numeroChutado2
let numeroDeTentativas2 = 0

while(numeroChutado2 !== numeroSecreto2){
    numeroChutado2 = Number(prompt('Chute um número(0 - 100): '))
    console.log(`O número chutado foi: ${numeroChutado2}`)

    if(numeroChutado2 > numeroSecreto2){
        console.log('Errou!!! Chutou muito alto.')
    } else if(numeroChutado2 < numeroSecreto2){
        console.log('Errou!!! Chute baixo demais.')
    }

    numeroDeTentativas2++
}

console.log('Acertou!!!')
console.log(`Número de tentativas: ${numeroDeTentativas2}`)
// não foi difícil fazer a alteração pois já conhecia a sintaxe para conseguir um número aleatório para este tipo de lógica.