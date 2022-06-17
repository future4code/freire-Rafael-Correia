console.log('Boas vindas ao jogo de Blackjack!')

if(confirm('Quer iniciar uma nova rodada?')) {
   const cartasUsuario = [
      comprarCarta(),
      comprarCarta()
   ]
   
   const cartasComputador = [
      comprarCarta(),
      comprarCarta()
   ]
   
   const pontuacaoUsuario = cartasUsuario[0].valor + cartasUsuario[1].valor
   const pontuacaoComputador = cartasComputador[0].valor + cartasComputador[1].valor
   
   console.log(`    Usuário   - cartas: ${cartasUsuario[0].texto} ${cartasUsuario[1].texto}  - pontuação ${pontuacaoUsuario} 
   Computador - cartas: ${cartasComputador[0].texto} ${cartasComputador[1].texto}  - pontuação ${pontuacaoComputador}`)
   
   if(pontuacaoUsuario > pontuacaoComputador){
      console.log('O usuário ganhou!')
   } else if(pontuacaoUsuario === pontuacaoComputador){
      console.log('Empatou!')
   } else {
      console.log('O computador ganhou!')
   }

} else {
   console.log('O jogo acabou.')
}