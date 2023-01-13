import { Request, Response } from "express";
import connection from "../connection";

export default async function createTurma(
    req:Request,
    res:Response
):Promise <any> {

  try{  

    const {id, nome, docente, estudante, modulo} = req.body
    
    await connection("turma")
        .insert(
            {
                id,
                nome,
                docente,
                estudante,
                modulo
            })

    res.status(201).end()
} catch (error) {
    res.status(500).end("Unexpected server error")

}}