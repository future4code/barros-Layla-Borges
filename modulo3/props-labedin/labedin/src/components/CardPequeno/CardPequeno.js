import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="email-endereço-layla-container">
            <img src={props.imagem}/>
            <div>
                <p>{props.email}</p>
                <p>{props.endereço}</p>
            </div>
        </div>        
    )
}

export default CardPequeno;