import React from "react";
import { useNavigate } from "react-router-dom";
import {FormApplication} from './styled';



function ApplicationForm() {

    const navigate = useNavigate();

    const goToApplicationFormPage = () => {
        navigate ("/Inscricao")
    }

    const goToLastPage = () => {
        navigate(-1)
      } 

    return (
        <FormApplication>
            <h1>Formulário de Inscrição de Viagem" </h1>

            <input
          placeholder="Nome"
          type="name"
      />

<input
          placeholder="Idade"
          type="number"
      />


<input
          placeholder="Texto de Inscrição"
          type="text"
      />

<input
          placeholder="Profissão"
          type="text"
      />


<select>efvbfd
"País"
</select>
          
          
      

<input
          placeholder="Viagem"
          type="text"
      />



            
            <button onClick={goToApplicationFormPage}>Inscrever-se para Viagem</button>
            <button onClick={goToLastPage}>Voltar</button>
            </FormApplication>
        
   
    );
}

export default ApplicationForm;