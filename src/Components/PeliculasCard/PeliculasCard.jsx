import React from "react";
import './PeliculasCard.css'

const PeliculasCard = props => {
    
    return (
        <div className="PeliculasCard">
            <span className="film">
            Titulo: {props.data.title}
            Foto: {props.data.backdrop_path}
            Popularidad: {props.data.popularity}
            Votacion: {props.data.vote_average}</span>
        </div>
    )
}

export default PeliculasCard