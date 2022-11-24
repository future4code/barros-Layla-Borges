import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminHome from "./AdminHomePage";
import ApplicationForm from "./ApplicationFormPage";
import CreateTrip from "./CreateTripPage";
import Home from "./HomePage";
import ListTrips from "./ListTripsPage";
import Login from "./LoginPage";
import TripDetails from "./TripDetailsPage";
import styled from "styled-components";


// <button onClick={goToApplicationFormPage}>Inscrever-se para Viagem</button>


// PASSO 1: CRIAÇÃO DAS ROTAS

// Centralização do App em um Container para todas as páginas
const OutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20 px;
`
function Router() {
    return (
        <OutContainer>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/ListTrips" element={<ListTrips />} />
                    <Route path="/Inscricao" element={<ApplicationForm />} />
                    <Route path="/TripDetails" element={<TripDetails />} />
                    <Route path="/CreateTrip" element={<CreateTrip />} />
                    <Route path="/AdminHome" element={<AdminHome />} />
                </Routes>
            </BrowserRouter>
        </OutContainer>

    );
}

export default Router;
