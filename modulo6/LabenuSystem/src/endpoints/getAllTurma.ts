import { Request,Response } from "express";
import connection from "../connection";
import { turma } from "../types";


export default async function getAllTurma(
    req:Request,
    res:Response
):Promise <void> {

    try {

        const name = req.query

        const turma : turma[] = await connection("Turma")

        res.send(turma)
    } catch (error) {
        res.status(500).send("Unexpected server error")
    }

}