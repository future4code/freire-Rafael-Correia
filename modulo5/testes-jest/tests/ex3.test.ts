const toNumber = (str: string): number => {
	return Number(str)
}

describe("Exercício 3 com Jest", () => {
    test("Recebe um número no formato string e retorna o mesmo número, porém no formato number.", () => {
        const input = "15"
        const result = toNumber(input)
        expect(typeof result).toBe('number')
    } )
})