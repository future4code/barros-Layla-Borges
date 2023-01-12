import app from "./app";
import createDocente from "./endpoints/createDocente";
import getAllDocentes from "./endpoints/getAllDocentes";


app.get("/docente5", getAllDocentes);
app.post("/docente5", createDocente);

