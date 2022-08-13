import React from "react";
import { useNavigate } from "react-router-dom";

function TripDetails() {

    const navigate = useNavigate();

    const goToLastPage = () => {
        navigate(-1)
      }

    return (
        <section>
            <h1>Detalhes da Viagem</h1>
            <button onClick={goToLastPage}>Voltar</button>
        </section>
        
    );
}

export default TripDetails;