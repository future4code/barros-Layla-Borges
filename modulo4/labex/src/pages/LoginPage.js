import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {useState} from "react";
import {useForm} from '../hook/useForm'
import styled from "styled-components";
import {Titulo, Form} from './styled';







export function Login() {
   

    const navigate = useNavigate();

    const goToLastPage = () => {
        navigate(-1)
      }

   

  const [form, onChangeInput] = useForm({
    email:'',
    password: '',
  })    
  
 
  
  const onSubmitLogin = (event) => {
    event.preventDefault()
    const body={
        email: form.email,
        password: form.password
    }
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/layla/login', body)
        .then((response) => 
        {
            window.localStorage.setItem('token', response.data.token) // Guarda o Token
            goToLastPage(navigate);
        })
        .catch((error) => console.log(error.message))
  }


    return (
        <section>
            <Titulo>Login</Titulo>


           <Form >  
            <input
                placeholder="E-mail"
                onChange={onChangeInput}
                type="email"
                value={form['email']}
                name={'email'}
                id="email"
                required
            />
            
            <input 
                placeholder="Senha"
                type={'password'}
                onChange={onChangeInput}
                value={form['password']}
                id="senha"
                name={'password'}
                required
                
            />
            <button onClick={onSubmitLogin}>Acessar</button>
            <button onClick={() => goToLastPage()}>Voltar</button>
            </Form>
        </section>
        
    )
};


export default Login;