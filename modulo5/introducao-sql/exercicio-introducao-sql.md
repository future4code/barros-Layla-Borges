# Exercício 1

Começaremos pela tabela de atores. Nós vamos guardar as seguintes informações: id, nome, salário, data de nascimento e sexo
    
Abaixo está a query que cria essa tabela no MySQL

    ```
    CREATE TABLE Actor (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR (255) NOT NULL,
        salary FLOAT NOT NULL,
        birth_date DATE NOT NULL,
        gender VARCHAR(6) NOT NULL
    ); 
    ```

*a) Nesta tabela, utilizamos o `FLOAT` para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query.*

    RESPOSTA
    VARCHAR(255) PRIMARY KEY = string com no máximo 255 caracteres e é uma chave primária

    VARCHAR (255) NOT NULL = string com no máximo 255 caracteres e obrigatoriamente precisa ser preenchido
    
    DATE NOT NULL = campo de data que pode ficar vazio

    VARCHAR(6) NOT NULL = string com no máximo 6 caracteres e obrigatoriamente precisa ser preenchido
    

*b) O comando `SHOW` é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: `SHOW DATABASES` e `SHOW TABLES`. Explique os resultados.*

    SHOW DATABASE = apresenta o nome das bases de dados presentes

    SHOW TABLES = apresenta o nome das tabelas presentes, nesse caso, tabela Actor.


*c) O comando `DESCRIBE` pode ser usado para ver estrutura de uma tabela. Utilize o comando  `DESCRIBE Actor` e explique os resultados.*

    RESPOSTA
        Field       Type            Null        Key     Default
        id	        varchar(255)	NO 	        PRI	    NULL
        name	    varchar(255)	NO		            NULL
        salary	    float	        NO		            NULL
        birth_date	date	        NO		            NULL
        gender	    varchar(6)	    NO	                NULL

    Os resultados apresentam os tipos de campos de cada linha, 
    se possuem valores ou não, a chave primária
    e o padrão de ausência de valor	

# Exercício 2
    
O próximo passo é colocar dados nessa tabela. Vamos começar criando a linha de um ator brasileiro muito famoso.
    
    ```sql
    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
      "001", 
      "Tony Ramos",
      400000,
      "1948-08-25", 
      "male"
    );
    ```
    
Atente-se a 3 fatos nessa query:
    
1. A ordem dos valores (`VALUES`) é definida pela lista colocada depois do nome da tabela (`ACTOR`): `(id, name, salary, birth_date)`.
2. Os valores `VARCHAR` (strings) devem ser indicados com `"`
3. As datas seguem o padrão: `YYYY-MM-DD`
    
*a) Escreva uma query que crie a atriz `Glória Pires`, com o id `002`, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963*

    RESPOSTA
        ```
        INSERT INTO Actor (id, name, salary, birth_date, gender)
        VALUES(
        "002", 
        "Glória Pires",
        1200000,
        "1963-08-23", 
        "female"
        );
        ```


    
b) *Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior `002`. Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.*

        RESPOSTA
        
            Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'

        Código de Erro: 1062. Entrada duplicada '002' para a chave 'primária'.

        Esse erro demonstra que não é possível criar um identificador duplicado (id), 
        pois toda chave primária deve ser única justamente para que possamos identificar cada
        dado como único para não ocorrer erros de identificação.
        

    
*Tente usar as queries abaixo. Você vai reparar que elas vão gerar um erro. Anote as mensagens de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esses erros aconteceram. Por fim, corrija individualmente cada query para que funcione, teste o comando e anote-o também como resposta*

c)  
```
INSERT INTO Actor (id, name, salary)
        VALUES(
        "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```

    RESPOSTA

       Error Code: 1136. Column count doesn't match value count at row 1

    Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1

    O erro aconteceu porque não foi adicionado a data de nascimento e o gênero. Ambos estão como NOT NULL
    e portando obrigatoriamente precisam ser adicionados

    CORREÇÃO DO CÓDIGO
    ```
    INSERT INTO Actor (id, name, salary, birth_date, gender)
        VALUES(
        "003", 
        "Fernanda Montenegro",
        300000,
        "1929-10-19", 
        "female"
    );
    ```
    

d)  
```
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);
```
    RESPOSTA

    Error Code: 1364. Field 'name' doesn't have a default value

    Código de erro: 1364. O campo 'nome' não tem um valor padrão

    O erro aconteceu porque a propriedade e o valor não haviam sido colocados

    CORREÇÃO DO CÓDIGO
        INSERT INTO Actor (id, name, salary, birth_date, gender)
        VALUES(
        "004",
        "Tarcísio Meira",
        400000,
        "1949-04-18", 
        "male"
        );


e)  
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);
```

    RESPOSTA

    Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1

    Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1



f) Por fim, crie mais um ator e mais uma atriz e prossiga para os próximos exercícios.

    RESPOSTA


        INSERT INTO Actor (id, name, salary, birth_date, gender)
            VALUES(
            "006",
            "Patrícia Pilar",
            400000,
            "1970-04-18", 
            "female"
        );

        INSERT INTO Actor (id, name, salary, birth_date, gender)
            VALUES(
            "007",
            "Antônio Fagundes",
            400000,
            "1940-04-18", 
            "male"
        );

## Observação
Está faltando o restante dos exercícios, por falta de tempo, estou subindo os exercícios 1 e 2 completos com todas as alternativas.