//Exercícios de interpretação de código
/*
1. Leia o código abaixo:

    const respostaDoUsuario = prompt("Digite o número que você quer testar")
    const numero = Number(respostaDoUsuario)
    
    if (numero % 2 === 0) {
        console.log("Passou no teste.")
    } else {
        console.log("Não passou no teste.")
    }
    
    a) Explique o que o código faz. Qual o teste que ele realiza?
    
        R: O código pede uma entrada ao usuário e salva em uma variável, depois transforma essa entrada em number e salva em outra variável(numero). Logo em seguida faz uma condicional que avalia se numero divido por 2 tem resto. Se sim ele imprime algo no console, se não imprime uma string diferente.

    b) Para que tipos de números ele imprime no console "Passou no teste"? 

        R: Para números pares.
    
    c) Para que tipos de números a mensagem é "Não passou no teste"?

        R: para todas as outras entradas.

2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

    let fruta = prompt("Escolha uma fruta")
    let preco
    switch (fruta) {
        case "Laranja":
            preco = 3.5
            break;
        case "Maçã":
            preco = 2.25
            break;
        case "Uva":
            preco = 0.30
            break;
        case "Pêra":
            preco = 5.5
            break; // BREAK PARA O ITEM c.
        default:
            preco = 5
            break;
    }
    console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

    a) Para que serve o código acima?

        R: Para receber o nome de uma fruta do usuário e checar o preço.

    b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?

        R: O preço da fruta Maçã é R$ 2.25

    c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?

        R: O preço da fruta Pêra é R$ 2.25
           O preço da fruta Pêra é R$ 5

3. Leia o código abaixo:

    const numero = Number(prompt("Digite o primeiro número."))

    if(numero > 0) {
        console.log("Esse número passou no teste")
        let mensagem = "Essa mensagem é secreta!!!"
    }

    console.log(mensagem)

    a) O que a primeira linha está fazendo?

        R: está pedindo um número ao usuário com prompt e tranformando a entrando em tipo number. 

    b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?

        R: 10 Esse número passou no teste  Essa mensagem é secreta!!! // -10 undefined

    c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.

        R: se o número for menor ou igual a 0, vai aparecer um erro explicando que mensagem não foi definida, já que a váriável mensagem só é declarada dentro do bloco do if, e não pode ser acessada pelo escopo global.

*/ 

//- Exercícios de escrita de código
//1.
const idadeUsuario = Number(prompt('Digite a sua idade: '))

if(idadeUsuario >= 18){
    console.log('Você pode dirigir')
} else {
    console.log('Você não pode dirigir.')
}

//2.
const turnoEstudo = prompt('Em qual turno você estuda? M (matutino) ou V (Vespertino) ou N (Noturno)').toUpperCase()

if(turnoEstudo === 'M') {
    console.log('Bom Dia!')
} else if(turnoEstudo === 'V') {
    console.log('Boa Tarde!')
} else if(turnoEstudo === 'N') {
    console.log('Boa Noite!')
} else {
    console.log('Entrada inválida!')
}

//3.
const turnoEstudo2 = prompt('Em qual turno você estuda? M (matutino) ou V (Vespertino) ou N (Noturno)').toUpperCase()

switch(turnoEstudo2) {
    case 'M':
        console.log('Bom Dia!')
        break
    case 'V':
        console.log('Boa Tarde!')
        break
    case 'N':
        console.log('Boa Noite!')
        break
    default:
        console.log('Entrada Inválida!')
        break
}

//4.
const generoDoFilme = prompt('Qual o gênero do filme escolhido?').toLocaleLowerCase()
const precoDoIngresso = prompt('Qual o preço do ingresso?')

if(generoDoFilme === 'fantasia' && precoDoIngresso < 15) {
    const lanchinho = prompt('Qual snack você quer comprar?')//desafio 1
    console.log(`Bom filme!`)
    console.log(`Aproveite o seu ${lanchinho}`)
} else {
    console.log('Escolha outro filme :(')
}

//Desafios
//2.
const ficha = {
    nome : prompt('Digite o seu nome: '),
    tipoDeJogo : prompt('Tipo de jogo, IN (internacional) ou DO (doméstico): ').toUpperCase(),
    etapaDoJogo : prompt('Etapa do jogo, SF (semi-final), DT (terceiro lugar) ou FI (final): ').toUpperCase(),
    categoria : Number(prompt('Qual categoria?(1, 2, 3 ou 4)')),
    quantidadeDeIngressos : Number(prompt('Quantos ingressos quer comprar?'))
}

const tabelaDePrecos = {
//categoria1    2    3    4
    SF: [1320, 880, 550, 220],
    DT: [660, 440, 330, 170],
    FI: [1980, 1320, 880, 330]
}

const imprimirIngresso = (ficha) => {
    let tipoDeJogo
    let etapaDoJogo
    let valorDoIngresso = calculaValor(ficha, tabelaDePrecos)[0];
    let valorTotal = calculaValor(ficha, tabelaDePrecos)[1];
    let moedaUsada = 'R';
    //verificar o tipo de jogo escolhido e atribuir valores de acordo
    if(ficha.tipoDeJogo === 'DO') {
        tipoDeJogo = 'Nacional'
    } 
    else if(ficha.tipoDeJogo === 'IN') {
        tipoDeJogo = 'Internacional'
        valorDoIngresso = valorDoIngresso / 4.10
        valorTotal = valorTotal / 4.10
        moedaUsada = 'U'
    }
    else {
        tipoDeJogo = 'tipo inválido'
    }
    //verificar a etapa de jogo escolhida
    switch(ficha.etapaDoJogo) {
        case 'SF':
            etapaDoJogo = 'Semifinal'
            break
        case 'DT':
            etapaDoJogo = 'Decisão do 3°lugar'
            break
        case 'FI':
            etapaDoJogo = 'Final'
            break
        default: 
            etapaDoJogo = 'etapa inválida'
    }
    //retorna o bilhete preenchido coms os dados e valores desejados
    return `    ---Dados da compra--- 
    Nome do cliente:  ${ficha.nome} 
    Tipo do jogo:  ${tipoDeJogo} 
    Etapa do jogo:  ${etapaDoJogo} 
    Categoria:  ${ficha.categoria} 
    Quantidade de Ingressos:  ${ficha.quantidadeDeIngressos} ingressos 
    ---Valores--- 
    Valor do ingresso:  ${moedaUsada}$ ${valorDoIngresso.toFixed(2)}
    Valor total:  ${moedaUsada}$ ${valorTotal.toFixed(2)}
    `
}
//calcula o valor a ser pago baseado na etapa e categoria desejada, e retorna os valores do Ingresso e Total 
const calculaValor = (ficha, tabela) => {
    if(ficha.etapaDoJogo === 'SF') {
        valorDoIngresso = tabela.SF[ficha.categoria - 1]
        valorTotal = ficha.quantidadeDeIngressos * valorDoIngresso
    } else if(ficha.etapaDoJogo === 'DT') {
        valorDoIngresso = tabela.DT[ficha.categoria - 1]
        valorTotal = ficha.quantidadeDeIngressos * valorDoIngresso
    } else {
        valorDoIngresso = tabela.FI[ficha.categoria - 1]
        valorTotal = ficha.quantidadeDeIngressos * valorDoIngresso
    }

    return [valorDoIngresso, valorTotal]
}

console.log(imprimirIngresso(ficha))