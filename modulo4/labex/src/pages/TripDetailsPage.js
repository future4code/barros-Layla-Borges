import React from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import {TripList} from './styled';
import {TripListContainer} from './styled';
import {Titulo} from './styled';


function TripDetails() {

    const navigate = useNavigate();

    const goToLastPage = () => {
        navigate(-1)
      }




    return (
        <section>
            <Titulo>Detalhes da Viagem</Titulo>

            <TripListContainer>
            
          
         
          <TripList>
          Lista de Viagens
                <p> Nome: Viagem pata Marte</p>
                <p>Planeta: Marte</p>
                <p> Data: ....</p>
                <p> Descrição: ....</p>
                <p> Duração em dias: ....</p>
                
            </TripList>

            
            <TripList>
            <ul> Lista de Clientes </ul>
               Carlos
          
            </TripList>
            </TripListContainer>
            <button onClick={goToLastPage}>Voltar</button>
        </section>
        
    );
}

export default TripDetails;