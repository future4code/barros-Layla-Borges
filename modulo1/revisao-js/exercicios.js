// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!!
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01 
let array = [1, 2, 5, 8, 9]
function retornaTamanhoArray(array) {
    return array.length;
}

// EXERCÍCIO 02
let array = [1, 2, 5, 8, 9]
function retornaArrayInvertido(array) {
    return array.reverse();
}

// EXERCÍCIO 03 
let array = [8, 2, 9, 4, 1]
function retornaArrayOrdenado(array) {
    return array.sort((a, b) => a - b);
}

// EXERCÍCIO 04 
function retornaNumerosPares(array) {

    let arrayDeNumerosPares = function (n) {
        return (n % 2 === 0);
    }
    let nPares = array.filter(arrayDeNumerosPares);
    return nPares
}

// ------ DESAFIO 4  --------------
function retornaNumerosPares(array) {

    let arrayDeNumerosPares = []
    for (const numeroPar of array) {
        if (numeroPar % 2 === 0) {
            arrayDeNumerosPares.push(numeroPar)
        }
    }
    return arrayDeNumerosPares
}

//EXERCÍCIO 05 
function retornaNumerosParesElevadosADois(array) {

    let arrayParElevado = []

    for (const numeroPar of array) {
        if (numeroPar % 2 === 0) {
            arrayParElevado.push(numeroPar * numeroPar)

        }
    }
    return arrayParElevado
}

// EXERCÍCIO 06 
function retornaMaiorNumero(array) {
    return array.reduce(function (a, b) {
        return Math.max(a, b);
    }, -Infinity);
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08 
function retornaNPrimeirosPares(n) {

    const arrayPar = []
    for (let i = 0; arrayPar.length < n; i++) {
        if (i % 2 === 0) {
            arrayPar.push(i);
        }

    }
    return arrayPar
}

// EXERCÍCIO 09 
function classificaTriangulo(ladoA, ladoB, ladoC) {

    if (ladoA == ladoB && ladoB == ladoC) {
        return "Equilátero";
    } else if (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC) {
        return "Escaleno";
    } else if (ladoA == ladoB || ladoA == ladoC || ladoC == ladoB) {
        return "Isósceles";
    }

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

}

// EXERCÍCIO 11 
function retornaChamadaDeFilme(filme) {

    const filmeVestePrada = {
        nome: 'O Diabo Veste Prada',
        ano: 2006,
        diretor: 'David Frankel',
        atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
    }

    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`

}

// EXERCÍCIO 12 
function retornaPessoaAnonimizada(pessoa) {

    const cadastroAnonimo = {
        ...pessoa,
        nome: "ANÔNIMO"
    }
    return cadastroAnonimo
}


// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}
