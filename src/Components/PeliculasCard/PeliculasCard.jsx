import React from "react";
import './PeliculasCard.css'

const PeliculasCard = props => {
    
    return (
        <div className="PeliculasCard">
            <div className="film">
                <strong className="ntitulo">{props.data.titulo}</strong><br></br>
                <br></br><img className="portadas" src={props.data.url}></img><br></br>
                <strong>Duracion:</strong> {props.data.duracion}<br></br> 
                <strong>Rating:</strong> {props.data.rating} 
                
            </div>
        </div>
    )
}

export default PeliculasCard