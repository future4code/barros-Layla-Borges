import app from "./app";
import createDocente from "./endpoints/createDocente";
import getAllDocentes from "./endpoints/getAllDocentes";
import createTurma from "./endpoints/createTurma";
import getAllTurmas from "./endpoints/getAllTurmas";


// -------- ENDPOINTS E ROTAS ---------------------------------------
   
// REQUISIÇÕES QUANTO AO DOCENTE  -----------------------------------
app.get("/docente5", getAllDocentes);   // OBTER TODOS OS DOCENTES
app.post("/docente5", createDocente);   // CRIAR NOVO DOCENTE



// REQUISIÇÕES QUANTO A TURMA ----------------------------------------
app.get("/turma", getAllTurmas);    //OBTER TODAS AS TURMAS
app.post("/turma", createTurma);   // CRIAR NOVA TURMA

