import React from "react";
import { useNavigate } from "react-router-dom";

function CreateTrip() {

    const navigate = useNavigate();

    const goToLastPage = () => {
        navigate(-1)
      }

    return (

         <section>
            <h1>Criar Viagem</h1>
            <button onClick={goToLastPage}>Voltar</button>
        </section>
    );
}

export default CreateTrip;