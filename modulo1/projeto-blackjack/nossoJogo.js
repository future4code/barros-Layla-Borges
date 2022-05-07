/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */



/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 
 */


// ---------- PROJETO DE FIXAÇÃO: BLACKJACK ---------------------

console.log(`"Boas vindas ao jogo do Blackjack!"`)

const cartaUsuario1 = comprarCarta()
const cartaUsuario2 = comprarCarta()
const cartaComputador1 = comprarCarta()
const cartaComputador2 = comprarCarta()
if(confirm("Quer iniciar uma nova rodada?")) {
   //console.log('Carta 1 do usuário: ', cartaUsuario1.texto, cartaUsuario1.valor)
   //console.log('Carta 2 do usuário: ', cartaUsuario2.texto,cartaUsuario2.valor)
  // console.log('Carta 1 do computador: ', cartaComputador1.texto,cartaComputador1.valor)
   //console.log('Carta 2 do computador: ', cartaComputador2.texto,cartaComputador2.valor)
   
   let resultadoUsuario = cartaUsuario1.valor + cartaUsuario2.valor 
   //console.log(resultadoUsuario)

   let resultadoComputador = cartaComputador1.valor + cartaComputador2.valor
   //console.log(resultadoComputador)

   console.log(`"Usuário - cartas: ${cartaUsuario1.texto} ${cartaUsuario2.texto} - pontuação ${resultadoUsuario}"` )

   console.log(`"Computador - cartas: ${cartaComputador1.texto} ${cartaComputador2.texto} - pontuação ${resultadoComputador}"` )

   if (resultadoUsuario === resultadoComputador){
         console.log(`"Empate!"`)
   } else if (resultadoUsuario > resultadoComputador){
         console.log(`"O usuário ganhou!"`)
   } else if (resultadoUsuario < resultadoComputador){
         console.log(`"O computador ganhou!"`)
   } 

} else {
   console.log("O jogo acabou")
}
