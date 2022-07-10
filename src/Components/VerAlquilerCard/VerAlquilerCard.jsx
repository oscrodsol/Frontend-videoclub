import React from "react";
import './VerAlquilerCard.css'

const VerAlquilerCard = props => {
    
    return (
        <div className="VerAlquilerCard">
            <div className="verA">
                <div><strong className="ntitulo">Cliente: {props.data.NombreCliente}</strong>
                <br></br>
                <br></br>
                <div><strong>{props.data.NombrePelicula}</strong></div>
                <br></br>
                <strong>Precio:</strong> {props.data.PrecioPelicula}€<br></br> 
                <strong>Fecha de alquiler:</strong> {props.data.FechaAlquiler}
                <br></br>
                <strong>Fecha devolución alquiler:</strong> {props.data.FechaDevolucion}  
                </div>
            </div>
        </div>
    )
}

export default VerAlquilerCard