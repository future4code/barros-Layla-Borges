import app from "./app";
import createDocente from "./endpoints/createDocente";
import getAllDocentes from "./endpoints/getAllDocentes";
import createTurma from "./endpoints/createTurma";
import getAllTurmas from "./endpoints/getAllTurmas";


app.get("/docente5", getAllDocentes);
app.post("/docente5", createDocente);

app.get("/turma", getAllTurmas);
app.post("/turma", createTurma);

