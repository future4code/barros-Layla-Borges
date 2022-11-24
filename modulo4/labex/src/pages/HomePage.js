import React from "react";
import {useNavigate} from 'react-router-dom';
import {Buttons, Titulo} from './styled';
import Typography from '@mui/material/Typography';



function Home() {

    //IMPORTE DO USENAVIGATE
    const navigate = useNavigate();

    // AÇÃO DOS BOTÕES
    const goToAdminHome = () => {
        navigate ("/Login")
    }

    const goToClientesViagens = () => {
        navigate ("/Inscricao")
    }

   

    // BOTÕES QUE DIRECIONAM PARA ÁREA ADMINISTRATIVA OU DO CLIENTE
    return (
        <section> 
            <Typography variant="h1">Home</Typography>
                <Buttons>
                    <button onClick={goToAdminHome}>Administrativo</button>
                    <button onClick={goToClientesViagens}>Cliente - Lista de Viagens</button>
                </Buttons>   
        </section>
    );
}

export default Home