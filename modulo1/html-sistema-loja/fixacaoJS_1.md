```
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
  let salarioFinalDoFuncionario = 2000
  let valorDeCadaCarro = valorTotalVendas / qtdeCarrosVendidos
  let comissao = ((valorDeCadaCarro * 0.05) + 100) * qtdeCarrosVendidos
  if(qtdeCarrosVendidos > 0){
    salarioFinalDoFuncionario += comissao
  }
  
  
  return salarioFinalDoFuncionario
}
```