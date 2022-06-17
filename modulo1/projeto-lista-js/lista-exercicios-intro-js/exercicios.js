// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = prompt('Digite a altura do retângulo: ')
  const largura = prompt('DIgite a largura do retângulo: ')
  const areaRetangulo = altura * largura
  console.log(areaRetangulo)
}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = prompt('Digite a altura do retângulo: ')
  const anoNascimento = prompt('DIgite a largura do retângulo: ')

  console.log(anoAtual - anoNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  let imc = peso / (altura * altura)
  return imc 
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt('Digite seu nome: ')
  const idade = prompt('Digite sua idade: ')
  const email = prompt('Digite seu e-mail: ')
  
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const corFavorita1 = prompt('Digite o nome da sua cor favorita: ')
  const corFavorita2 = prompt('Digite o nome da sua 2° cor favorita: ')
  const corFavorita3 = prompt('Digite o nome da sua 3° cor favorita: ')

  const listaCoresFavoritas = [corFavorita1, corFavorita2, corFavorita3]
  console.log(listaCoresFavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length === string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length - 1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const guardaElemento = array[0]
  array[0] = array[array.length -1]
  array[array.length - 1] = guardaElemento
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toUpperCase() == string2.toUpperCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = prompt('Digite o ano atual: ')
  const anoDeNascimento = prompt('Digite seu ano de Nascimento: ')
  const anoDeEmissaoCarteira = prompt('Digite o ano que sua carteira de identidade foi emitida: ')

  let idade = anoAtual - anoDeNascimento
  let prazo = anoAtual - anoDeEmissaoCarteira

  let deveRenovar = (idade <= 20 && prazo >= 5) || (idade > 20 && idade <=50 && prazo >= 10) || (idade > 50 && prazo >= 15)
  console.log(deveRenovar)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const bissexto = (ano % 400 === 0) || ((ano % 4 === 0) && !(ano % 100 === 0 && !ano % 400 === 0))
  return bissexto
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const idade = prompt('Você tem mais de 18 anos?')
  const ensinoMedio = prompt('Você possui ensino médio completo?')
  const disponibilidadeE = prompt('Você possui disponibilidade exclusiva durante os horários do curso?')

  console.log((idade === 'sim') && (ensinoMedio === 'sim') && (disponibilidadeE === 'sim'))
}