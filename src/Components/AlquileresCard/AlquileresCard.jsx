import React from "react";
import './AlquileresCard.css'

const AlquileresCard = props => {
    return (
        <div className="AlquileresCard">
            <div className="alquileresc">
                <strong className="ntitulo">Id Alquiler: {props.data.id}</strong>
                <br></br>
                <br></br>
                <strong>Precio:</strong> {props.data.precio}
                <br></br>
                <strong>Fecha de alquiler:</strong> {props.data.fecha_alquiler}<br></br> 
                <strong>Usuario:</strong> {props.data.usuarioId} 
                <strong>Pelicula:</strong> {props.data.peliculaId} 
            </div>
        </div>
    )
}

export default AlquileresCard