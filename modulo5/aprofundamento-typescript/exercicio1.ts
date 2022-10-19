
//Exercício 1 ---------------------------------------
    
    // 1).O Typescript é uma linguagem um pouco mais criteriosa que o Javascript, então vamos conhecer um pouco desses critérios.
    
    // 1a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?
          
            // Resposta
              const minhaString:string = 7
              Aparece o seguinte erro: O tipo 'number' não pode ser atribuído ao tipo 'string' 

    // 1b) Crie uma variável **meuNumero** do tipo `number` e atribua um valor numérico. Como fazer para que essa variável também aceite strings? Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor?
        
            // Resposta
             const meuNumero:number = 7
             Podemos aplicar a tipagem any, assim poderá receber string ou number
             const meuNumero:any = 7
             const meuNumero:any = "Oi" 
             
    // 1c) Agora crie um novo objeto. 
    //Este objeto é uma pessoa, e deve possuir três propriedades:
    
        // `nome`, que é uma string;
        // `idade`, que é um número;
        // `corFavorita`, que é uma string. 
    
            //RESPOSTA
            const person: {nome: string, idade: number, corFavorita: string}
       
    // Crie mais três objetos, que também precisam ter apenas os campos definidos acima. 
    //Crie um **tipo** `Pessoa` para garantir que todos os objetos tenham os mesmos campos.
            //RESPOSTA
            type pessoa = {nome: string, idade: number, corFavorita: string}
            const usuario: pessoa = {
            nome: Layla, 
            idade: 40, 
            corFavorita: azul
            }
    
    // d) Modifique a propriedade `corFavorita` para que apenas seja possível escolher entre as cores do arco-íris. Utilize um `enum` para isso.
            //RESPOSTA
            
    