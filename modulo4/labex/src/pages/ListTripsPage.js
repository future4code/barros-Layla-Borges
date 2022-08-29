import React from "react";
import { Link, useNavigate} from 'react-router-dom';


function ListTrips() {

    // IMPORTE DO USENAVIGATE
    const navigate = useNavigate();

    //AÇÃO DOS BOTÕES   
    const goToApplicationFormPage = () => {
        navigate ("/Inscricao")
    }

    const goToCreateTripPage = () => {
        navigate ("/CreateTrip")
    }

    const goToLastPage = () => {
        navigate(-1)
      }

    return (
// BOTÕES QUE DIRECIONAM O CLIENTE PARA O FORMULÁRIO DE INSCRIÇÃO EM VIAJENS
        <section>
            <h1>Lista de Viagens - ListTrip</h1>
            <li>
                <Link to={'/TripDetails'}>
                    <p>"Viagem 1"</p>
                    <p>"Viagem 2"</p>
                    <p>"Viagem 3"</p>
                    
                </Link>
                
            </li>
                
            <button onClick={goToCreateTripPage}>Criar Viagem</button>
            <button onClick={goToLastPage}>Voltar</button>
        </section>
        
    );
}

export default ListTrips;