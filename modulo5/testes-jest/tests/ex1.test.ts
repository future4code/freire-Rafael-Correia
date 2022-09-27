const transformToUpperCase = (str: string): string => {
	return str.toUpperCase()
}

describe("Exercício 1 com Jest", () => {
    test("Recebe uma string como parâmetro e retorna a mesma em caixa alta", () => {
        const input = "Hello World!"
        const result = transformToUpperCase(input)
        expect(result).toBe("HELLO WORLD!")
    } )
})