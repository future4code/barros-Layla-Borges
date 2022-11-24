import styled from 'styled-components'

export const Buttons = styled.div `
  display: grid;
  grid-auto-flow: column;
  gap: 15px;
`

export const Titulo= styled.h1`
  position: relative;
  color:black;
  text-align:center;
  font-size: 1.9em;
`

export const Option = styled.select`
margin-top: 20px;
border: none;
height: 50px; 
border-radius: 30px;
outline: 0;
font-size: 15px;
padding:10px;
cursor: pointer;
width: 100%;`

export const Form = styled.form`
  
  width: 100vw; 
  height: 100vh;
  background-size: cover;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;

  `

export const FormApplication = styled.form`
  
  width: 100vw; 
  height: 100vh;
  background-size: cover;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  background-color: white;

  `

export const TripList= styled.div`
margin-top: 20px;
border: none;
height: 50px; 
border-radius: 30px;
outline: 0;
font-size: 15px;
cursor: pointer;
width: 100%;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.3);
    padding: 10px 8px 170px;
    border-radius: 4px;
    align-content: center;
    align-items: center;
    max-width: 300px;
    width: 100%;
    justify-self: center;
`


export const TripListContainer = styled.div`
  
  width: 98vw; 
  height: 100vh;
  background-size: cover;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  background-color: whitesmoke;
  
  `