export type docente5 = {
    id: string,
    nome: string,
    email: string,
    data_nasc: string,
    turma_id: string
};

export type turma = {
    id: string,
    nome: string,
    docente: string,
    estudante: string,
    modulo: string
};

