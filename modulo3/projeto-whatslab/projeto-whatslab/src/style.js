import styled from 'styled-components'

export const Titulo = styled.h1`
color: black;
text-align: center;
`

export const Formulario = styled.form `
width: 100%;
display: inline-block;
position: fixed;
bottom:0;
left:0;
`

export const Remetente = styled.form`
display: inline-flex;
flex-direction: column;
box-sizing: border-box;
width: 200px;
`
export const Mensagem = styled.form `
display: inline-flex;
flex-direction: column;
padding: 0.5rem;
box-sizing: border-box;
border: 1px solid red;
width: 500px;
`

export const Enviar = styled.button `
display: inline-flex;
flex-direction: column;
padding: 0.5rem;
box-sizing: border-box;
border: 1px solid red;
width: 100px;

`