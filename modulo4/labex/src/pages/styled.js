import styled from 'styled-components'



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
padding:10px;
padding-left:50px;
cursor: pointer;
width: 100%;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.3);
   
    padding: 10px 8px 170px;
    border-radius: 4px;
    margin: 10px 10px 0px 05px;
    max-width: 500px;
    width: 100%;

`


export const TripListContainer = styled.div`
  
  width: 100vw; 
  height: 100vh;
  background-size: cover;
  margin: 0;
  padding: 0;
  display: grid;
  grid-auto-flow: column;
  gap: 25px;
  background-color: whitesmoke;
  `