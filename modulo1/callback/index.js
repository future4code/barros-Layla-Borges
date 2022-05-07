//  **Exercícios de escrita de código** --------------------------

/*QUESTÃO 01

1. Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array **map** e **filter:** 


const pets = [
   { nome: "Lupin", raca: "Salsicha"},
   { nome: "Polly", raca: "Lhasa Apso"},
   { nome: "Madame", raca: "Poodle"},
   { nome: "Quentinho", raca: "Salsicha"},
   { nome: "Fluffy", raca: "Poodle"},
   { nome: "Caramelo", raca: "Vira-lata"},
]
*/

// RESPOSTAS -----------------------------------------------------

//a) Crie um novo array que contenha apenas o nome dos doguinhos

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

    const nomeDosDoguinhos = pets.map((pets) => {
    console.log(`"${pets.nome}"`)
    })

    
//b) Crie um novo array apenas com os [cachorros salsicha](https://www.youtube.com/watch?v=YQ404vwjzus)


const petsFiltrados = pets.filter((pets) => {
    if(pets.raca === "Salsicha"){
        console.log(`nome: "${pets.nome}", raca: "${pets.raca}"`)
    }
})



//c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"

/* - 💡  Dica
    
    <aside>
    ⭐ Você pode encadear o uso do map e do filter
    
    </aside>
    */

    const petsFiltrados = pets.filter((pets) => {
        if(pets.raca === "Poodle"){
            console.log(`"Você ganhou um cupom de desconto de 10% para tosar a "${pets.nome}"`)
        }
    })



// --------------- QUESTÃO 02 -----------------

/*QUESTÃO 02
Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:
*/


const produtos = [
   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
   { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]


//a) Crie um novo array que contenha apenas o nome de cada item

const nomeDeCadaItem = produtos.map((produtos) => {
    console.log(`"${produtos.nome}"`)
    })





//b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

const produtosComDesconto = produtos.filter((produtos) => {
    console.log(`nome: "${produtos.nome}", preço: "${produtos.preco}"`)
    }
)






//c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

const produtosBebidas = produtos.filter((produtos) => {
    if(produtos.categoria === "Bebidas"){
        console.log(`{"nome: "${produtos.nome}", categoria: "${produtos.categoria}", preço: "${produtos.preco}"},`)
    }
})





//d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
/*
 - 💡  Dica
    
    <aside>
    ⭐ Para te ajudar, você pode usar o método de stirngs chamado includes() que verifica se os caracteres escolhidos fazem parte da sua string
    
    E caso não se lembre como fazer isso, não tenha medo de pesquisar no google!
    
    </aside> 
*/

//FALTA



    

/* e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

- 💡  Dica
    
    <aside>
    ⭐ Você pode encadear o uso do map e do filter
    
    </aside>
*/
//FALTA