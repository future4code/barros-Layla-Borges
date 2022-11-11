# Aprofundamento em SQL

## Exercício 1

`RESPOSTA`

a) O comando retira da tabela Actor a coluna salary. 

b) O comando altera na tabela Actor o nome da coluna gender para sex.

c) O comando altera na tabela Actor a quantidade de caracteres máximos permitidos de 6 para 255.

d) ALTER TABLE Actor MODIFY gender VARCHAR(100);

## Exercício 2

`RESPOSTA`

a) 

    UPDATE Actor
    SET 
	name = "Moacyr Franco",
	birth_date = "2020-02-10"
    WHERE id = "003";

b) 

    UPDATE Actor
    SET name = "JULIANA PÃES"
    WHERE name = "Juliana Paes";

    -------------------------------------

    UPDATE Actor
    SET name = "Juliana Paes"
    WHERE name = "JULIANA PÃES";

c)

    UPDATE Actor
    SET 
    name = "Moacyr Franco",
    salary = 600000,
    birth_date = "2020-02-10",
    gender = "male"
    WHERE id = "005";

## Exercício 3

`RESPOSTA`

a)

    DELETE FROM Actor WHERE name = "Fernanda Montenegro";

b)

    DELETE FROM Actor
    WHERE
    gender = "male" AND
    salary > 1000000;


## Exercício 4

`RESPOSTA`

a) 

    SELECT MAX(salary) FROM Actor;

b)

    SELECT MIN(salary) FROM Actor WHERE gender = "female";

c)

    SELECT COUNT(*) FROM Actor WHERE gender = "female";

d)

    SELECT SUM(salary) FROM Actor;


## Exercício 5

`RESPOSTA`

a)

    A query retornou o gênero em grupo, sendo 3 mulheres e 3 homens.

b)

    SELECT id, name FROM Actor
    ORDER BY name DESC;

c) 

    SELECT name, salary
    FROM Actor
    ORDER BY salary DESC;

d)

    SELECT * FROM Actor
    ORDER BY salary DESC
    LIMIT 3;

e)

    SELECT AVG(salary), gender 
    FROM Actor
    GROUP BY gender;

## Exercício 6

`RESPOSTA`

a) 

    ALTER TABLE Movie ADD playing_limit_date DATE;

b)

    SELECT * FROM Movie;
    ALTER TABLE Movie CHANGE avaliação 
    rating FLOAT;

c) 



d)

    DELETE FROM Movie WHERE id = "001"