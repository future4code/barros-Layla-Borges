import { Request, Response } from "express"
import connection from "../connection"
import { docente5 } from "../types"


export default async function getAllDocentes(
    req:Request,
    res:Response
):Promise <void> {

    try {

        const name = req.query

        const docentes: docente5[] = await connection("docente5")

        res.send(docentes)
    } catch (error) {
        res.status(500).send("Unexpected server error")
    }

}