import { docente5, estudante, turma } from "./types";

export const docentes5: docente5[] = [
    {
        id: "1",
        nome: "Beatriz Timóia",
        email: "beatriz_timoia@uorak.com",
        data_nasc: 1972-0o4-0o5,
        turma_id: 1
    }, {
        id: "2",
        nome: "Felipe de Oliveira",
        email: "felipe_oliveira@uorak.com",
        data_nasc: 1974-0o2-12,
        turma_id: 2
      }, {
        id: "3",
        nome: "Alice Medeiros",
        email: "alice_medeiros@uorak.com",
        data_nasc: 1980-0o3-0o7,
        turma_id: 3
    }
]
    
    
export const turmas: turma[]= [
    {
        id: 0o1,
        nome: "A",
        docentes:0o1,
        estudantes: 0o1,
        modulo: 1,
    }, {
        id: 0o2,
        nome: "B",
        docentes: 0o2,
        estudantes: 0o2,
        modulo: 2,
    }
]    

export const estudantes: estudante[] = [
    {
        id: 0o1,
        nome:"Carlos Alberto",
        email:"carlos_alberto@uorak.com",
        data_nasc:1980-10-25,
        turma_id:0o1,
    }, {
        id: 0o2,
        nome:"Valentina Vich",
        email:",valentina_vich@uorak.com",
        data_nasc: 2000-09-0o2,
        turma_id:0o2,
    }
]