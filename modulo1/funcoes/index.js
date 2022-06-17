//Exercícios de interpretação de código

/*1-
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))//  a) Imprime 10
console.log(minhaFuncao(10))//  Imprime 50

b) Se fossem retirados os consoles a função retornaria os valores, mas nada seria impresso no console.


2-
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

a) a função "outraFuncao" recebe um texto, deixa todas as letras minúsculas e verifica se a palavra "cenoura" esta contida no texto, retornando um booleano.

b)  I- true
    II- false
    III- true
*/

//Exercícios de escrita de código

//1-a)
function descreverUsuario(){
    console.log(`Eu sou Rafael, tenho 22 anos, moro em Sergipe e sou estudante.`)
}

//b)
function descreverPessoa(nome, idade, cidade, profissao){
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)
}


//2-a)
const somarNumeros = (num1, num2) => {
    return num1 + num2
}
const numerosSomados = somarNumeros(2, 4)
console.log(numerosSomados)

//b)
const verificarSeEMaiorOuIgual = (n1, n2) => {
    return n1 >= n2
}
console.log(verificarSeEMaiorOuIgual(4, 10))

//c)
const verificarParidade = (numero) => numero % 2 === 0
console.log(verificarParidade(32))

//d)
function tamanhoDoTexto(mensagem){
    const mensagemMaiuscula = mensagem.toUpperCase();
    console.log(`${mensagemMaiuscula} /Tamanho: ${mensagem.length}`)
}
tamanhoDoTexto("Testando funcionamento da função")


//3-
const somar = (numero1, numero2) => {
    return numero1 + numero2
}
const subtrair = (numero1, numero2) => {
    return numero1 - numero2
}
const multiplicar = (numero1, numero2) => {
    return numero1 * numero2
}
const dividir = (numero1, numero2) => {
    return numero1 / numero2
}

const numero1Usuario = Number(prompt('Digite um número: '))
const numero2Usuario = Number(prompt('Digite outro número: '))

function exibirResultados(n1, n2){
    console.log(`Números inseridos: ${n1} e ${n2}`)

    const operacao1 = somar(n1, n2)
    console.log(`Soma: ${operacao1}`)
    const operacao2 = subtrair(n1, n2)
    console.log(`Diferença: ${operacao2}`)
    const operacao3 = multiplicar(n1, n2)
    console.log(`Multiplicação: ${operacao3}`)
    const operacao4 = dividir(n1, n2)
    console.log(`Divisão: ${operacao4}`)
}

exibirResultados(numero1Usuario, numero2Usuario)


//Desafios
//1-
const imprimirParametro = (n) => {
    console.log(n)
}

const segundaFuncao = (par1, par2) => {
    const somaParametros = par1 + par2
    imprimirParametro(somaParametros)
}
segundaFuncao('Olá, ', 'Mundo!')


//2-
function pitagoras(cateto1, cateto2) {
    const resultado = Math.sqrt((cateto1*cateto1) + (cateto2*cateto2))
    return resultado
}
const testePitagoras = pitagoras(3, 4)
console.log(testePitagoras)