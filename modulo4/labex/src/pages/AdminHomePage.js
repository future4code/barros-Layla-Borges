import React from "react";
import { useNavigate } from "react-router-dom";
import {Titulo} from './styled';

function AdminHome() {

    const navigate = useNavigate();

    //AÇÃO DOS BOTÕES   

    const goToLogin = () => {
        navigate ("/Login")
    }

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
            <Titulo>Área administrativa</Titulo>
            <button onClick={goToLogin}>Login</button>
           
            <button onClick={goToTripDetails}>Detalhes da Viagem</button>
            <button onClick={goToLastPage}>Voltar</button>
        </section>
        
    );
}

export default AdminHome;