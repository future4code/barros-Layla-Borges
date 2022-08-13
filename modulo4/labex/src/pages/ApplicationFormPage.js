import React from "react";
import { useNavigate } from "react-router-dom";


function ApplicationForm() {

    const navigate = useNavigate();

    const goToLastPage = () => {
        navigate(-1)
      } 

    return (
        <section>
            <h1>Formulário de Inscrição de Viagem" </h1>
            <button onClick={goToLastPage}>Voltar</button>
        </section>
        
   
    );
}

export default ApplicationForm;