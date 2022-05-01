
//---------- *** EXERCÍCIO DE ESCRITA DE CÓDIGO *** ---------------------------------

// EXERCÍCIO 01 -----------------------------------------------------------------------

const idade = Number(prompt("Qual é a sua idade?"))

function podeDirigir(idade) {
    if(idade>=18){
        console.log("Você pode dirigir")
    }
}
   
console.log("Você não pode dirigir")

podeDirigir(idade)


 // EXERCÍCIO 02 -----------------------------------------------------------------------
 
//PS. Não esquecer de usar aspas nas opões M, V e N.


const periodo = prompt('Em qual turno você estuda? Digite M  para matutino, V para vespertino ou N para noturno')

    if(periodo === 'M') {
        console.log('Bom dia!')
    } else if (periodo === 'V') {
        console.log('Boa tarde!')
    } else if (periodo === 'N') {
        console.log('Boa noite!')
    } else {
    console.log('Erro!')
}


// EXERCÍCIO 03 ----------------------------------------------------------------

const periodo = prompt("Em qual turno você estuda? Digite M  para matutino, V para vespertino ou N para noturno")

switch (periodo) {
    case "M":
        console.log('Bom dia!')
        break
    case "V":
        console.log('Boa tarde!')
        break
    case "N":
        console.log('Boa noite!')
        break
    default:
        console.log("Opção informada não existe!")
}

// EXERCÍCIO 4 -----------------------------------------------------------------

const filme = prompt('Qual o gênero de filme que deseja assistir?')
const valor = Number(prompt('Qual é o valor do ingresso?'))

if (filme == 'fantasia' && valor < 15){
    console.log('Bom filme!')
} else {
    console.log('Escolha outro filme')
}


/* ----------------------------------------//--------------------------------------------
-------------------------- ENUNCIADO DOS EXERCÍCIOS ----------------------------------   



- **Exercícios de escrita de código**
    1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
        
        a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
        
        b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
        
        c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`
        
    2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar **M** (matutino) ou **V** (Vespertino) ou **N** (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco `if/else`
        - 💡 Dica
            
            <aside>
            ⭐ Se o usuário digitar "V" no prompt, você deverá imprimir no console a mensagem `"Boa Tarde!"`
            Nesse caso, temos 3 resultados diferentes (Bom dia/Tarde/Noite)
            
            </aside>
            
            Se o usuário digitar "V", a saída deve ser:
            
            ```
            "Boa Tarde!"
            ```
            
        
    3. Repita o exercício anterior, mas utilizando a estrutura de `switch case` agora.
        - 💡 Dica
            
            <aside>
            ⭐ Lembre-se que o switch case é como se fosse um if, mas ele verifica APENAS IGUALDADES ESTRITAS (`===`)
            
            </aside>
            
        
    4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia **e** se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: `"Bom filme!"`, caso contrário, imprima `"Escolha outro filme :("`
    */