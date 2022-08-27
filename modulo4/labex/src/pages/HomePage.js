import React from "react";
import {useNavigate} from 'react-router-dom';

import {Titulo} from './styled';


function Home() {

    //IMPORTE DO USENAVIGATE
    const navigate = useNavigate();

    // AÇÃO DOS BOTÕES
    const goToAdminHome = () => {
        navigate ("/AdminHome")
    }

    const goToClientesViagens = () => {
        navigate ("/AreaCliente")
    }

    const goToLogin = () => {
        navigate ("/Login")
    }

    // BOTÕES QUE DIRECIONAM PARA ÁREA ADMINISTRATIVA OU DO CLIENTE
    return (
        <section>
            <Titulo>Home</Titulo>
            <button onClick={goToAdminHome}>Administrativo</button>
            <button onClick={goToClientesViagens}>Cliente - Lista de Viagens</button>
            <button onClick={goToLogin}>Login</button>
        </section>
        
    );
}

export default Home