import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import {useState} from "react"

function Login() {

    const navigate = useNavigate();

    const goToLastPage = () => {
        navigate(-1)
      }

      const [email, setEmail] = useState("")
      const [senha, setSenha] = useState("")
  
      const EmailMudanca = (event) => {
          setEmail(event.target.value)
      }
      const SenhaMudanca = (event) => {
          setSenha(event.target.value)
      }
  
      const body = {
          "email": email,
          "password": senha
      }
  
      const fazerLogin = () => {
          //axios.post(url, body, headers) - Vou trabalhar esse ponto, não esquecer!
          console.log(body)
      }

    return (
        <section>
            <h1>Login</h1>


            <div>
            <input
                placeholder="E-mail"
                value={email}
                onChange={EmailMudanca}
                type="email"
            />
            
            <input 
                placeholder="Senha"
                value={senha}
                onChange={SenhaMudanca}
                type="password"
            />
            <button onClick={fazerLogin}>Login</button>
            <button onClick={goToLastPage}>Voltar</button>
        </div>
        </section>
        
    );
}

export default Login;