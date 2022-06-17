//- **Exercícios de interpretação de código**
/*
1.Leia o código abaixo
    const usuarios = [
        { nome: "Amanda Rangel", apelido: "Mandi" },
        { nome: "Laís Petra", apelido: "Laura" },
        { nome: "Letícia Chijo", apelido: "Chijo" }
    ]

    const novoArrayA = usuarios.map((item, index, array) => {
        console.log(item, index, array)
    })

    a)O que vai ser impresso no console?

        R: Será impresso o item seguido do index e da array completa, 3 vezes que é quantidade total de items e map itera a array toda
    
2.Leia o código abaixo

    const usuarios = [
        { nome: "Amanda Rangel", apelido: "Mandi" },
        { nome: "Laís Petra", apelido: "Laura" },
        { nome: "Letícia Chijo", apelido: "Chijo" },
    ]

    const novoArrayB = usuarios.map((item, index, array) => {
        return item.nome
    })

    console.log(novoArrayB)

    a)O que vai ser impresso no console?

        R: Será impresso uma array composta pelos valores da propriedade nome de cada item da array 'usuarios': ['Amanda Rangel', 'Laís Petra', 'Letícia Chijo']

3.Leia o código abaixo

    const usuarios = [
        { nome: "Amanda Rangel", apelido: "Mandi" },
        { nome: "Laís Petra", apelido: "Laura" },
        { nome: "Letícia Chijo", apelido: "Chijo" },
    ]

    const novoArrayC = usuarios.filter((item, index, array) => {
        return item.apelido !== "Chijo"
    })

    console.log(novoArrayC)

    a) O que vai ser impresso no console?

        R: Será impresso uma array composta por todos os items que não possuem a propriedade 'apelido' igual a 'Chijo': [{ nome: "Amanda Rangel", apelido: "Mandi" },
        { nome: "Laís Petra", apelido: "Laura" }]
*/

//**Exercícios de escrita de código**

//1.
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]
//a)
const nomesPets = pets.map((pet) => {
    return pet.nome
})
console.log(nomesPets)

//b)
const cachorrosSalsicha = pets.filter((pet) => {
    return pet.raca === 'Salsicha'
})
console.log(cachorrosSalsicha)

//c)
const cachorrosPoodle = pets.filter((pet) => {
    return pet.raca === 'Poodle'
})
const poodleDesconto = cachorrosPoodle.map((pet) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}!`
})
console.log(poodleDesconto)


//2.
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]
//a)
const produtosNomes = produtos.map((produto) => {
    return produto.nome
})
console.log(produtosNomes)

//b)
const produtosNomesPrecos = produtos.map((produto) => {
    const precoComDesconto = (produto.preco * 0.95).toFixed(2)
    return {nome: produto.nome, preco: precoComDesconto}
})
console.log(produtosNomesPrecos)

//c)
const bebidas = produtos.filter((produto) => {
    return produto.categoria === 'Bebidas'
})
console.log(bebidas)

//d)
const produtosYpe = produtos.filter((produto) => {
    return produto.nome.includes('Ypê')
})
console.log((produtosYpe))

//e)
const comprarYpe = produtosYpe.map((produto) => {
    return `Compre ${produto.nome} por R$${produto.preco}`
})
console.log(comprarYpe)

//Desafios
//1.
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
]
//a)
const retornarNomes = (pokemon) => {
    return pokemon.nome
}

const pokemonsNomes = pokemons.map(retornarNomes).sort()
console.log(pokemonsNomes)

//b)
const arrayPokemonTipos = []
const pokemonsTiposRepetidos = pokemons.map((pokemon) => {
    
    if(!arrayPokemonTipos.includes(pokemon.tipo)){
        arrayPokemonTipos.push(pokemon.tipo)
    }
    
    return pokemon.tipo
})

console.log(arrayPokemonTipos)