import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import {useState} from "react"
import { BASE_URL } from "../constantes/constante";


export function Login() {
    const [form, onChange, clear] = useForm({ email: "", password: "" })

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
  
      const fazerLogin = (event) => {
        event.preventDefault()

          axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/layla/login", body) 
          .then((response) => {
            console.log(response.data)
            localStorage.setItem("token",response.data.token)
            R.goToTripDetail(navigate)
        })
        .catch((error) => console.log(error.message))
          
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