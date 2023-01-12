import app from "./app";
import createDocente from "./endpoints/createDocente";
import getAllDocentes from "./endpoints/getAllDocentes";
import getAllTurma from "./endpoints/getAllTurma";
import getAllEstudantes from "./endpoints/getAllEstudantes";
import createEstudante from "./endpoints/createEstudante";

app.get("/docente5", getAllDocentes);
app.post("/docente5", createDocente);
app.get("/turma", getAllTurma);


app.get("/estudante", getAllEstudantes);
app.put("/estudante", createEstudante);