import { Request, Response } from "express";
import connection from "../connection";
import { estudante } from "../types";

export default async function getAllEstudantes(
    req:Request,
    res:Response
):Promise <void> {

    try {

        const name = req.query

        const estudantes: estudante[] = await connection("ESTUDANTE")

        res.send(estudantes)
    } catch (error) {
        res.status(500).send("Unexpected server error")
    }

}