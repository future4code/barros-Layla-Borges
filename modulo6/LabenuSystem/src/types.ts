export type docente5 = {
    id: string,
    nome: string,
    email: string,
    data_nasc: number,
    turma_id: string
};

export type turma = {
    id: number,
    nome: string,
    docentes: number,
    estudantes: number,
    modulo: number
};

export type estudante = {
    id: number,
    nome: string,
    email: string,
    data_nasc: number,
    turma_id:number

};