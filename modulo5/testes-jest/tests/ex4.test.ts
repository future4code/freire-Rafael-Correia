const getLength = (str: string): number => {
	return str.length
}

describe("Exercício 4 com Jest", () => {
    test("Recebe uma string e retorna um number representando a quantidade de caracteres da mesma.", () => {
        const input = "Marana"
        const result = getLength(input)
        expect(result).toBe(6)
    } )
})