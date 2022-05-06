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


    console.log('Boas vindas ao jogo BlackJack!')

    const carta = comprarCarta()
    
    

    if (confirm('Quer iniciar uma nova rodada?')) {
      comprarCarta(confirm)
      console.log(carta.texto)
      console.log(carta.valor)
      console.log('Usuário - cartas:', carta.texto, 'pontuação - ', carta.valor )
      comprarCarta()
      console.log(carta.texto)
      console.log(carta.valor)
      console.log('Usuário - cartas:', carta.texto, 'pontuação - ', carta.valor )
      
      
    } else { 
       console.log('O jogo acabou')
    }

    
      comprarCarta(confirm)
      console.log(carta.texto)
      console.log(carta.valor)
      console.log('Computador - cartas:', carta.texto, 'pontuação - ', carta.valor )

   
   /* console.log('Usuário - cartas:', carta , pontuacao)
    
    if (confirm('Quer comprar uma segunda carta?')) {
      comprarCarta(confirm)
      console.log(carta.texto)
      console.log(carta.valor)
    } else { 
       console.log('O jogo acabou')

    }*/
   
