//Exercícios de interpretação de código
/*
1-
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])// Imprime Matheus Nachtergaele
console.log(filme.elenco[filme.elenco.length - 1])// Imprime Virginia Cavendish
console.log(filme.transmissoesHoje[2])// Imprime {canal: "Canal Brasil", horario: "19h"}


2-
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)// Imprime {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

console.log(gato)// Imprime {
	nome: "Juba", 
	idade: 3, 
	raca: "SRD"
}

console.log(tartaruga)// Imprime {
	nome: "Jubo", 
	idade: 3, 
	raca: "SRD"
}

b) os "..." antes do objeto faz um cópia desse objeto com tudo que tem nele.


3-
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
    nome: "Caio", 
    idade: 23, 
    backender: false
}

console.log(minhaFuncao(pessoa, "backender"))// Imprime false
console.log(minhaFuncao(pessoa, "altura"))// Imprime undefined

b) no primeiro console.log a função acessa a propriedade backender do objeto pessoa e retorna seu valor false, no segundo log é retornado undefined pois a propriedade altura não foi definida e portanto não tem nenhum valor.

*/

//Exercícios de escrita de código
//1-
const pessoa = {
    nome: 'Gabrielly',
    apelidos: ['Gabi', 'Brielly', 'Bri']
}

const apresentarPessoa = pessoa => {
    return console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)
}

const novaPessoa = {
    ...pessoa,
    apelidos: ['Gab', 'Gabru', 'Ly']
}

apresentarPessoa(novaPessoa)


//2-
const ficha1 = {
    nome: 'Paulo',
    idade: 23,
    profissao: 'Médico'
}
const ficha2 = {
    nome: 'Maria',
    idade: 32,
    profissao: 'Física'
}

function mostrarDadosFicha(ficha) {
    const dadosFicha = [
        ficha.nome,
        ficha.nome.length,
        ficha.idade,
        ficha.profissao,
        ficha.profissao.length
    ]

    return console.log(dadosFicha)
}
mostrarDadosFicha(ficha1)
mostrarDadosFicha(ficha2)


//3-
const carrinho = []
const fruta1 = {
    nome: 'banana',
    disponibilidade: true
}
const fruta2 = {
    nome: 'maçã',
    disponibilidade: true
}
const fruta3 = {
    nome: 'manga',
    disponibilidade: true
}

const colocarNoCarrinho = function(fruta){
    carrinho.push(fruta)
}
colocarNoCarrinho(fruta1)
colocarNoCarrinho(fruta2)
colocarNoCarrinho(fruta3)
mudarDisponibilidade(fruta1)
mudarDisponibilidade(fruta2)
mudarDisponibilidade(fruta3)
console.log(carrinho)
//Desafio 3
function mudarDisponibilidade(fruta){
    fruta.disponibilidade = !fruta.disponibilidade
    return fruta
}

//Desafios
//1-
const perguntarDados = () => {
    const nome = prompt('Digite o seu nome: ')
    const idade = Number(prompt('Qual a sua idade?'))
    const profissao = prompt('Qual a sua profissão?')
    const dadosUsuario = {}

    dadosUsuario.nome = nome
    dadosUsuario.idade = idade
    dadosUsuario.profissao = profissao

    console.log(dadosUsuario)
    console.log(typeof dadosUsuario)
}
perguntarDados()


//2-
function avaliarFilmes(filme1, filme2){
    const anoDeLancamentoMaior = filme1.anoDeLancamento < filme2.anoDeLancamento
    const anoDeLancamentoIgual = filme1.anoDeLancamento === filme2.anoDeLancamento

    return `O primeiro filme foi lançado antes do segundo? ${anoDeLancamentoMaior}
O primeiro filme foi lançado no mesmo ano do segundo? ${anoDeLancamentoIgual}`
}

const primeiroFilme = {
    nome: 'As Branquelas',
    anoDeLancamento: 2004
}
const segundoFilme = {
    nome: 'Se Beber, Não Case!',
    anoDeLancamento: 2009
}

console.log(avaliarFilmes(primeiroFilme, segundoFilme))