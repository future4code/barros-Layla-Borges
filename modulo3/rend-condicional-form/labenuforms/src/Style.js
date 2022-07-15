import styled from "styled-components";

export const Etapa1=styled.div`
    margin-top:20px;
    width: 40vw;
    border-radius: 3vw;
    background-color: gray;
    text-align: center;
    padding-bottom:40px;
    h1{
        margin:20px;
        color: white;
    }
    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        label{
            color: white;
            font-size: 20px;
            font-weight: bold;
            text-transform: uppercase;
        }
        input{
            margin: 10px;
            border-radius: 15px;
            font-size: 20px;
            padding: 5px 15px;
            width: 30vw;
        }
    }
`
export const ButtonLogin=styled.button`
    text-transform: uppercase;
    font-weight: bold;
    font-size: large;
    padding: 5px 50px;
    border-radius: 10px;
    :hover{
        background-color: #a0ffb0 ;
        color: red;
    }
`
export const ButtonHome=styled.button`
    text-transform: uppercase;
    font-weight: bold;
    font-size: large;
    padding: 5px 80px;
    :hover{
        background-color: lightsteelblue ;
        color: blue;
        border: 3px solid lightcyan;
        box-shadow: 1px 1px 10px;
    }
`
export const Home=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const MenuHome=styled.header`
    display:flex;
    align-items: center;
    justify-content: center;
`
export const Postagem=styled.li`
    list-style: square;
    font-size: 35px;
    font-weight: bold;
    :hover{
        font-size: 50px;
    }
`
export const Mensagem=styled.li`
    list-style: square;
    font-size: 35px;
    font-weight: bold;
    color: red;
    :hover{
        font-size: 50px;
    }
`