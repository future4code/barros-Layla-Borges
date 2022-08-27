import React from "react";
import { useNavigate} from 'react-router-dom';


function ListTrips() {

    // IMPORTE DO USENAVIGATE
    const navigate = useNavigate();

    //AÇÃO DOS BOTÕES   
    const goToApplicationFormPage = () => {
        navigate ("/Inscricao")
    }

    const goToLastPage = () => {
        navigate(-1)
      }

    return (
// BOTÕES QUE DIRECIONAM O CLIENTE PARA O FORMULÁRIO DE INSCRIÇÃO EM VIAJENS
        <section>
            <h1>Lista de Viagens - ListTrip</h1>
            <li>
                <p>"Viagem para Marte"</p>
            </li>
                
            
            <button onClick={goToApplicationFormPage}>Inscrever-se para Viagem</button>
            <button onClick={goToLastPage}>Voltar</button>
        </section>
        
    );
}

export default ListTrips;