import React from "react";
import { useNavigate } from "react-router-dom";
import {Titulo} from './styled';
import {Form} from './styled';


import axios from "axios";

const CreateTripPage=() => {

    const navigate = useNavigate();

    const goToLastPage = () => {
        navigate(-1)
      }

    return( 
     
   <Form>
      <Titulo>Criar Viagem</Titulo>
      
      <input
          placeholder="Nome"
          type="name"
      />

<input
          placeholder="E-mail"
          type="email"
      />

<input
          placeholder="Planeta"
          type="text"
      />

<input
          placeholder="Data"
          type="date"
      />

<input
          placeholder="Descrição"
          type="text"
      />

<input
          placeholder="Duração em dias"
          type="number"
      />

<input
          placeholder="País"
          type="select"
      />

<input type="submit" value="Enviar" />
            
   </Form>
    
       
             
              
    
            
    )
}

export default CreateTripPage