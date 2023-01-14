import { Request, Response } from "express"
import connection from "../connection"
import { turma } from "../types"


export default async function getAllTurmas(
    req:Request,
    res:Response
):Promise <any> {

    try {

        const name = req.query

        const turma: turma[] = await connection("turma")

        res.send(turma)
    } catch (error) {
        res.status(500).send("Unexpected server error")
    }

}