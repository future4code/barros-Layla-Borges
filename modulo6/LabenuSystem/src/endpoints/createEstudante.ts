import { Request, Response } from "express";
import connection from "../connection";



export default async function createEstudante(
    req: Request,
    res: Response
): Promise <void> {

    try{
        const{ id, nome, email, data_nasc, turma_id} = req.body

        console.log(req.headers ["content-type"])

        await connection ("ESTUDANTE")
        .insert({ id, nome, email, data_nasc, turma_id})

        res.status(201).end()
    } catch (error) {
        res.status(500).end("Unexpected server error")
    }
}