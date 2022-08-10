import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import AdminHome from "./Pages/AdminHomePage";
//import ApplicationForm from "./Pages/ApplicationFormPage";
//import CreateTrip from "./Pages/CreateTripPage";
import Home from "./HomePage";
//import ListTrips from "./Pages/ListTripsPage";
import Login from "./LoginPage";
//import TripDetails from "./Pages/TripDetailsPage";

// PASSO 1: CRIAÇÃO DAS ROTAS

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="Login" element={<Login />} />
            </Routes>
        </BrowserRouter>

    );
}

export default Router;
