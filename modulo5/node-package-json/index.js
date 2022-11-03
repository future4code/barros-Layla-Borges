// EXERCÍCIO 1 -----------------------------------------------------------------

    /* EXERCÍCIO 1A
        Para acessar os parâmetros passados na linha do Node podemos usar o seguinte comando:
        process.argv[i], onde [i] é o índice. */
    
    // EXERCÍCIO 1B 

        const nome = process.argv[2]
        const idade = Number(process.argv[3])
        console.log(`Olá, ${nome}! Você tem ${idade} anos. Em 7 anos você terá ${(idade + 7)} anos`);

    // EXERCÍCIO 1C
    
        console.log(`Olá, ${nome}! Você tem ${idade} anos. Em 7 anos você terá ${(idade + 7)} anos`);