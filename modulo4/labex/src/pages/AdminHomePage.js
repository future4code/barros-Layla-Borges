import React from "react";
import { useNavigate } from "react-router-dom";

function AdminHome() {

    const navigate = useNavigate();

    //AÇÃO DOS BOTÕES   
    const goToCreateTrip = () => {
        navigate ("/CriarViagem")
    }

    const goToTripDetails = () => {
        navigate ("/DetalhesDaViagem")
    }

    const goToLastPage = () => {
        navigate(-1)
      }

    return (
        <section>
            <h1>Área administrativa</h1>
            <button onClick={goToCreateTrip}>Criar Viagem</button>
            <button onClick={goToTripDetails}>Detalhes da Viagem</button>
            <button onClick={goToLastPage}>Voltar</button>
        </section>
        
    );
}

export default AdminHome;