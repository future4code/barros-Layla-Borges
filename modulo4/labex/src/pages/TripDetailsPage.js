import React from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import {TripList} from './styled';
import {TripListContainer} from './styled';
import {Titulo} from './styled';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { ListItem } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import ListItem from '@mui/material/ListItem';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { ThumbDown } from "@mui/icons-material";

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
                <List dense={true}>
              
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <ThumbDown />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                  
                      <FolderIcon />
                    
                  </ListItemAvatar>
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>,
                </List>
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