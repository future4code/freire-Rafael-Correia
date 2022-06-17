// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    let contadorReverso = array.length - 1
    let elementosSalvos = []
    for(let i = 0; i < (array.length / 2); i++){
        elementosSalvos.push(array[contadorReverso])
        array[contadorReverso] = array[i]
        contadorReverso--;
    }
    for(let l = 0; l < (array.length / 2); l++){
        array[l] = elementosSalvos[l]
    }
    return array
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort(function(a, b){
        return a - b
    })
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let novaArray = []
    array.forEach(element => {
        if(element % 2 === 0){
            novaArray.push(element)
        }
    })

    return novaArray
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let numerosPares = array.filter(numero => {
        return numero % 2 === 0
    })
    return numerosPares.map(numero => {
        return numero * numero
    })
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = 0;
    for (let index = 0; index < array.length; index++) {
        if(array[index] > maiorNumero){
            maiorNumero = array[index]
        }
    }
    return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero
    let maiorDivisivelPorMenor
    let diferenca 
    
    if(num1 >= num2){
        maiorNumero = num1
        maiorDivisivelPorMenor = num1 % num2 === 0
        diferenca = num1 - num2
    } else {
        maiorNumero = num2
        maiorDivisivelPorMenor = num2 % num1 === 0
        diferenca = num2 - num1
    }

    return {
        maiorNumero: maiorNumero,
        maiorDivisivelPorMenor: maiorDivisivelPorMenor,
        diferenca: diferenca
    }
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let array = []
    for (let i = 0; i < n; i++) {
        array.push(i * 2)
    }
    return array
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA === ladoB && ladoA === ladoC){
        return "Equilátero"
    }
    else if(ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC){
        return "Escaleno"
    }
    else {
        return "Isósceles"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    const arrayOrdenada = array.sort((a,b) => a - b)
    return [arrayOrdenada[arrayOrdenada.length - 2], arrayOrdenada[1]]
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    let elenco = filme.atores[0]
    for(let i = 1; i < filme.atores.length; i++){
        elenco += `, ${filme.atores[i]}`
    }

    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${elenco}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    pessoa.nome = 'ANÔNIMO'
    return pessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    let pessoasAutorizadas = []

    for(individuo of pessoas){
        if(individuo.idade > 14 && individuo.idade < 60 && individuo.altura >= 1.5){
            pessoasAutorizadas.push(individuo)
        }
    }

    return pessoasAutorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let pessoasNaoAutorizadas = []

    for(individuo of pessoas){
        if(!(individuo.idade > 14 && individuo.idade < 60 && individuo.altura >= 1.5)){
            pessoasNaoAutorizadas.push(individuo)
        }
    }

    return pessoasNaoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    for(cliente of contas){
        
        let totalCompras = 0
        for(let i = 0; i < cliente.compras.length; i++){
            totalCompras += cliente.compras[i]
        }

        cliente.saldoTotal -= totalCompras
        cliente.compras = []
    }
    return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    consultas.sort((a, b) => {
        if(a.nome > b.nome){
            return 1
        } else if(b.nome > a.nome){
            return -1;
        }
    })

    return consultas
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    consultas.sort((a, b) => {
        dataMesA = Number(a.dataDaConsulta[3] + a.dataDaConsulta[4])
        dataMesB = Number(b.dataDaConsulta[3] + b.dataDaConsulta[4])
        dataDiaA = Number(a.dataDaConsulta[0] + a.dataDaConsulta[1])
        dataDiaB = Number(b.dataDaConsulta[0] + b.dataDaConsulta[1])
        
        if(dataMesA < dataMesB){
            return -1
        }
        else if(dataMesA === dataMesB) {
            if(dataDiaA < dataDiaB){
                return -1
            } else if(dataDiaB < dataDiaA){
                return 1
            }
        } 
        else{
            return 1
        }
    })
    return consultas
}