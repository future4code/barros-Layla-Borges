/* POPULANDO A TABELA TURMA */

INSERT INTO TURMA (id, nome)
VALUES ("01", "A");

INSERT INTO TURMA (id, nome)
VALUES ("02", "B");

SELECT * FROM TURMA;

/* POPULANDO A TABELA ESTUDANTE */

INSERT INTO ESTUDANTE (id, nome, email, data_nasc, turma_id)
VALUES ("01", "Carlos Alberto", "carlos_alberto@uorak.com", "1980-10-25", "01"),
	   ("02", "Valentina Vich", "valentina_vich@uorak.com", "2000-09-02", "02");
       
SELECT * FROM ESTUDANTE; 

/* POPULANDO A TABELA HOBBY */

INSERT INTO HOBBY (id, nome)
VALUES ("01", "Natação"),
	   ("02", "Ciclismo");

SELECT * FROM HOBBY; 

/* POPULANDO A TABELA ESPECIALIDADE */

INSERT INTO ESPECIALIDADE (id, nome)
VALUES ("01", "JS"),
	   ("02", "Typescript");

SELECT * FROM ESPECIALIDADE; 

/* POPULANDO A TABELA DOCENTE */

INSERT INTO DOCENTE (id, nome, email, data_nasc, turma_id)
VALUES ("01", "Beatriz Timóia", "beatriz_timoia@uorak.com", "1972-04-05", "01"),
	   ("02", "Felipe de Oliveira", "felipe_oliveira@uorak.com", "1974-02-12", "02");
       
SELECT * FROM DOCENTE;

/* POPULANDO A TABELA ESTUDANTE_HOBBY */

INSERT INTO ESTUDANTE_HOBBY (id, estudante_id, hobby_id)
VALUES ("01", "01", "01" ),
	   ("02", "02", "02" );
       
SELECT * FROM ESTUDANTE_HOBBY;

/* POPULANDO A TABELA DOCENTE_ESPECIALIDADE */

INSERT INTO DOCENTE_ESPECIALIDADE (id, docente_id, especialidade_id)
VALUES ("01", "01", "01" ),
	   ("02", "02", "02" );
       
SELECT * FROM DOCENTE_ESPECIALIDADE;