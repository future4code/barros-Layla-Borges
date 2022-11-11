### Comandos SQL no Workbench para criação da tabela Movies

## Exercício 5 da Aula de Introdução ao SQL

CREATE TABLE Movie (
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR (255) NOT NULL,
    sinopse TEXT NOT NULL,
    data_lançamento DATE NOT NULL,
    avaliação INT NOT NULL
);

INSERT INTO Movie (id, nome, sinopse, data_lançamento, avaliação)
VALUES(
  "001",
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-06-01", 
  "7"
);

INSERT INTO Movie (id, nome, sinopse, data_lançamento, avaliação)
VALUES(
  "002",
  "Doce de mãe",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2012-12-27", 
  "10"
);

UPDATE Movie SET sinopse="Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela" WHERE sinopse="Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos";
SET SQL_SAFE_UPDATES = 0;

UPDATE Movie SET sinopse="Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos" WHERE id="001";

INSERT INTO Movie (id, nome, sinopse, data_lançamento, avaliação)
VALUES(
  "003",
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02", 
  "8"
);

INSERT INTO Movie (id, nome, sinopse, data_lançamento, avaliação)
VALUES(
  "004",
  "The Constant Gardener",
  "Uma ativista (Rachel Weisz) é encontrada assassinada em uma área remota do Quênia. O principal suspeito do crime é seu sócio, um médico que encontra-se atualmente foragido. Perturbado pelas infidelidades da esposa, Justin Quayle (Ralph Fiennes) decide partir para descobrir o que realmente aconteceu com sua esposa, iniciando uma viagem que o levará por três continentes.",
  "2005-10-14", 
  "10"
);