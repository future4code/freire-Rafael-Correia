//Exercícios de interpretação de código
//1-
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) //false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) //false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) //true

console.log("d. ", typeof resultado) //Boolean

//2&&3-
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)//o prompt vai receber os valores como string e ao usar "+" as strings vão ser concatenadas e o resultado será um número seguido do outro, sem realizar a operação desejada. Para funcionar correntamente é necessário antes converter os valores recebidos para number.Ex: Number(primeiroNumero) + Number(segundoNumero).

//Exercícios de escrita de código
//1-
const idadeUsuario = prompt('Qual a sua idade?')
const idadeDoMelhorAmige = prompt('Qual a idade do seu melhor amigo ou melhor amiga?')

let comparacaoIdade = idadeUsuario > idadeDoMelhorAmige
let comparacaoIdadeNumero = idadeUsuario - idadeDoMelhorAmige;

console.log('Sua idade é maior do que a do seu melhor amigo(a)? ', comparacaoIdade)
console.log('Diferença de idade entre vocês: ', comparacaoIdadeNumero)

//2-
let numeroUsuario = prompt('Digite um número par: ')
let restoDaDivisão = numeroUsuario % 2
console.log(restoDaDivisão)// o resto da divisão "%" de número pares por 2 sempre será "0"//Se o usuário digitar um número ímpar o resto sempre será "1"

//3-
const idadeEmAnos = prompt('Qual a sua idade em anos?')
const idadeEmMeses = idadeEmAnos * 12
const idadeEmDias = idadeEmMeses * 30
const idadeEmHoras = idadeEmDias * 24

console.log('a. A sua idade em meses é ', idadeEmMeses)
console.log('a. A sua idade em dias é ', idadeEmDias)
console.log('a. A sua idade em horas é ', idadeEmHoras)

//4- 
const primeiroNum = Number(prompt('Digite um número: '))
const segundoNum = Number(prompt('Digite outro número: '))

console.log('O primeiro número é maior que o segundo?', primeiroNum > segundoNum)
console.log('O primeiro número é igual ao segundo?', primeiroNum === segundoNum)
console.log('O primeiro número é divisível pelo segundo?', (primeiroNum % segundoNum) === 0)
console.log('O segundo número é divisível pelo primeiro?', (segundoNum % primeiroNum) === 0)


//Desafios
//1-
let grausFahrenheit = 77
let grausCelsius = 80

let grausKelvin = (grausFahrenheit - 32)*(5/9) + 273.15
console.log('77 °F = ', grausKelvin, '°K')

grausFahrenheit =  (grausCelsius)*(9/5) + 32
console.log('80 °C = ', grausFahrenheit, '°F')

grausCelsius = 30
grausFahrenheit =  (grausCelsius)*(9/5) + 32
grausKelvin = (grausFahrenheit - 32)*(5/9) + 273.15
console.log('30 °C = ', grausFahrenheit, '°F', grausKelvin, '°k')

grausCelsius = prompt('Digige o valor em Celsius que deseja converter: ')
grausFahrenheit =  (grausCelsius)*(9/5) + 32
grausKelvin = (grausFahrenheit - 32)*(5/9) + 273.15
console.log(grausCelsius, '°C = ', grausFahrenheit, '°F', grausKelvin, '°k')

//2-
let quillowattsHoraConsumidos = 280;
let valorDoConsumo = 280 * 0.05
let valorASerPago = valorDoConsumo - (valorDoConsumo * 0.15)

console.log('Valor consumido: R$ ', valorDoConsumo)
console.log('Valor com desconto: R$ ', valorASerPago)

//3- 
//a-
let pesoEmLibras = 21
let pesoEmKg = pesoEmLibras * 0.45359237
console.log(pesoEmLibras + 'lb equivalem a ' + pesoEmKg + ' kg')

//b-
let pesoEmOz = 10.5
let pesoEmKg2 = pesoEmOz * 0.02834952
console.log(pesoEmOz + 'oz equivalem a ' + pesoEmKg2 + ' kg')

//c-
let distanciaEmMi = 100
let distanciaEmMetros = distanciaEmMi * 1609.344
console.log(distanciaEmMi + 'mi equivalem a ' + distanciaEmMetros + ' m')

//d-
let distanciaEmFt = 50
let distanciaEmMetros2 = distanciaEmFt / 3.2808
console.log(distanciaEmFt + 'ft equivalem a ' + distanciaEmMetros2 + ' m')

//e-
let volumeEmGal = 103.56
let volumeEmL = volumeEmGal / 0.26417
console.log(volumeEmGal + 'gal equivalem a ' + volumeEmL + ' l')

//-f
let volumeEmXic = 450
let volumeEmL2 = volumeEmXic / 4.227
console.log(volumeEmXic + 'xic equivalem a ' + volumeEmL2 + ' l')

//g-
distanciaEmMi = prompt('Digite a distância em milhas: ')
distanciaEmMetros = distanciaEmMi * 1609.344
console.log(distanciaEmMi + 'mi equivalem a ' + distanciaEmMetros + ' m')