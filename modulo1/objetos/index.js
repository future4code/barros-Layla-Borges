// EXERCÍCIO DE CÓDIGO ----------

//Exercício 01A
/*1. Resolva os passos a seguir: 
    
    a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente **três apelidos**). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 

        // Exemplo de entrada
        const pessoa = {
        nome: "Amanda", 
        apelidos: ["Amandinha", "Mandinha", "Mandi"]
        }

        // Exemplo de saída
        "Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"
*/

const pessoa = {
    nome: "Layla",
    apelido: ["Laylita", " Lay", " Milton"]
}

function nomes(pessoa) {
    console.log("Eu sou a " + pessoa.nome + " mas pode me chamar de: " + pessoa.apelido);
}

nomes(pessoa) // chamei a função

//Exercício 01B
/* b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos.Depois, chame a função feita no item anterior passando como argumento o novo objeto*/

const novaPessoa = {
    ...pessoa,
    nome: "Layla",
    apelido: ["Luna", " Kaká", " Bebel"]
}

function nomes(pessoa) {
    console.log("Eu sou a " + pessoa.nome + " mas pode me chamar de: " + pessoa.apelido);
}

nomes(novaPessoa) // chamei a função

// Exercício 02
/*
2. Resolva os passos a seguir: 
    
    a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão.*/

    const objeto1 = {
        nome: "Aline",
        idade: 25
        profissao:customer experience
    }

    const objeto2 = {
        nome: "Brendon",
        idade: 26
        profissao:cx
    }

    /* 
    b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:

    1. O valor de `nome`
    2. O numero de caracteres do valor `nome`
    3. O valor de `idade`
    4. O valor de `profissão`
    5. O numero de caracteres do valor `profissão`
    
    Exemplo:
            const pessoa = {
            nome: "Bruno", 
        idade: 23, 
            profissao: "Instrutor"
        }

        minhaFuncao(pessoa)

        //// Retorno: ["Bruno", 5, 23, "Instrutor", 9] */

        function objetos (objeto1, objeto2) 

        return 
