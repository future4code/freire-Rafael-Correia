const toSplit = (str: string): string[] => {
	return str.split("")
}

describe("Exercício 2 com Jest", () => {
    test("Recebe uma string como parâmetro e retorna um array de strings onde cada item é uma letra da palavra original.", () => {
        const input = "jest"
        const result = toSplit(input)
        expect(result).toEqual(["j", "e", "s", "t"])
    } )
})