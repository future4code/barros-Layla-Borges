import React from "react";
import { useNavigate } from "react-router-dom";


function Login() {

    const navigate = useNavigate();

    const goToLastPage = () => {
        navigate(-1)
      }

    return (
        <section>
            <h1>Login</h1>
            <button onClick={goToLastPage}>Voltar</button>
        </section>
        
    );
}

export default Login;