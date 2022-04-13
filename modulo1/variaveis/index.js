
/*---- Exercicio de codigo escrito (obs nao terminei a tempo tudo, mas vou add o restante) ----

let nomeCompleto
let idadeAtual
console.log(typeof nomeCompleto, idadeAtual)*/


/* 
1d) typeof retorno a variável como undefined,
isso porque não há valor atribuído */

//f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.
let nomeCompleto = prompt("Qual seu nome?")
let idadeAtual = prompt("Qual sua idade?")
console.log(typeof(nomeCompleto),typeof(idadeAtual))

/*o tipo impresso foi string, string porque tudo
que e resposta pelo prompt e uma string*/




//g) Para finalizar, imprima na tela a mensagem: "Olá nome,  você tem idade anos". Onde nome e idade são os valores que o usuário inseriu

console.log(nomeCompleto, idadeAtual)
console.log("Olá", nomeCompleto, "você tem", idadeAtual, "anos")

