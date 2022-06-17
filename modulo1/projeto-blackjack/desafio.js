if(confirm(`Boas vindas ao jogo de Blackjack!
Quer iniciar uma nova rodada?`)) {
   const cartasUsuario = [
      comprarCarta(),
      comprarCarta()
   ]
   
   const cartasComputador = [
      comprarCarta(),
      comprarCarta()
   ]

   //Verifica se as cartas inicias são 2 ases
   const condicao1 = cartasUsuario[0].texto.includes('A') && cartasUsuario[1].texto.includes('A')
   const condicao2 = cartasComputador[0].texto.includes('A') && cartasComputador[1].texto.includes('A')

   while(condicao1 || condicao2){
      if(condicao1){
         cartasUsuario[0] = comprarCarta()
         cartasUsuario[1] = comprarCarta()
      } else if(condicao2){
         cartasComputador[0] = comprarCarta()
         cartasComputador[1] = comprarCarta()
      }
   }

   let pontuacaoUsuario = cartasUsuario[0].valor + cartasUsuario[1].valor
   let pontuacaoComputador = cartasComputador[0].valor + cartasComputador[1].valor
   let nomesCartasUsuario = `${cartasUsuario[0].texto} ${cartasUsuario[1].texto}`
   let nomesCartasComputador = `${cartasComputador[0].texto} ${cartasComputador[1].texto}`
   let jogoEmAndamento = true
   
   while(jogoEmAndamento && pontuacaoUsuario <= 21 && pontuacaoComputador <= 21){

      if(confirm(`Suas cartas são ${nomesCartasUsuario}. A carta revelada do computador é ${cartasComputador[0].texto}.
      Deseja comprar mais uma carta?`)){
         let novaCarta = comprarCarta()

         cartasUsuario.push(novaCarta)
         nomesCartasUsuario += ` ${novaCarta.texto}`
         pontuacaoUsuario += novaCarta.valor
      } 
      else {
         while(pontuacaoComputador < pontuacaoUsuario){
            let novaCarta = comprarCarta()

            cartasComputador.push(novaCarta)
            nomesCartasComputador += ` ${novaCarta.texto}`
            pontuacaoComputador += novaCarta.valor
         }
         jogoEmAndamento = false
      }
   }

   let mensageFimJogo = `Suas cartas são ${nomesCartasUsuario}. Sua pontuação é ${pontuacaoUsuario}.
   As cartas do computador são ${nomesCartasComputador}. A pontuação do computador é ${pontuacaoComputador}.`

   if(pontuacaoUsuario > 21){
      alert(`${mensageFimJogo}
      O Computador Ganhou!`)
   } 
   else if(pontuacaoUsuario === pontuacaoComputador){
      alert(`${mensageFimJogo}
      O Jogo Empatou!`)
   }
   else if(pontuacaoComputador > 21){
      alert(`${mensageFimJogo}
      O Usuário Ganhou!`)
   }
   else if(pontuacaoUsuario > pontuacaoComputador){
      alert(`${mensageFimJogo}
      O Usuário Ganhou!`)
   }
   else if(pontuacaoComputador > pontuacaoUsuario) {
      alert(`${mensageFimJogo}
      O Computador Ganhou!`)
   }

} else {
   alert('O jogo acabou.')
}
