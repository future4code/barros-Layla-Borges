import { Request, Response } from "express";
import connection from "../connection";





export default async function createDocente(
    req:Request,
    res:Response
):Promise <any> {

  try{  
    const {id, nome, email} = req.body

 //   console.log(req.body["content-type"])
    
    await connection("docente5")
        .insert({id, nome, email})

    res.status(201).end()
} catch (error) {
    res.status(500).end("Unexpected server error")

}}