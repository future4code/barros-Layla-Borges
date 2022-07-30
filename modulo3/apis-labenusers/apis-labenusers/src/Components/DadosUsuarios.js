import axios from "axios";
import React, {useEffect, useState} from "react";

function DadosUsuarios() {
     // PASSO 1: CRIAR OS ESTADOS DO DadosUsuarios
    const [DadosUsuarios, setDadosUsuarios] = useState([]);

}

   // PASSO 3: CRIAÇÃO DAS VARIÁVEIS DA MINHA API
        // QUE ESTARÃO PRESENTES EM TODAS AS REQUISIÇÕES

        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
        const constanteHeaders = {
            headers: {
                Autorization: 'nome-sobrenome-turma'
            }
        }    
      
// PASSO 4: CRIAÇÃO DA REQUISIÇÃO POST (CREATEUSER PQ QUERO CRIAR UM NOVO USUÁRIO)


const body = {
    "name": input , //CRIAR COMPONENTE
    "email": input //CRIAR COMPONENTE
}

const createUser = (e) => {
    e.preventDefault();

    axios.post(url, body, constanteHeaders)
    .then((response) => {
        alert("Usuário criado com Sucesso!")
        getAllUsers() // acho q vou ter q add
    }).catch((error) => {
        alert("Erro ao criar usuário")
    })

    setInput("") // criar o estado do input
}





export default DadosUsuarios;