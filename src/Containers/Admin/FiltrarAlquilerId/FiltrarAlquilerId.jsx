import React, { useEffect, useState } from "react"
import "./FiltrarAlquilerId.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Button } from "react-bootstrap"
import { selectDatosUsuario } from "../../User/userSlice"
import VerAlquilerCard from "../../../Components/VerAlquilerCard/VerAlquilerCard"

const FiltrarAlquilerId =  (props) => {
    const navigate = useNavigate();
    const token = useSelector(selectDatosUsuario);
    const [alquilerUnico, setAlquilerUnico] = useState({
        verRent:[],
        id:""
    }) 
    
    const verAlquiler= async () =>{
        try{
        const config = {
            headers: {
                "Authorization":`Bearer ${token.token}`
            }
        }
        axios.get(`https://videoclub-backend.herokuapp.com/alquileres/veralquiler/${alquilerUnico.id}`,config)
        .then(resp =>{
            setAlquilerUnico({
            verRent: resp.data
            })
        })
    } catch (error){
        console.log(error)
    }}

    const valorId = (event) => {
        if(event.key === 'Enter'){
            setAlquilerUnico({
                ...alquilerUnico,
                id: event.target.value
            });
        };
        event.target.value = "";
        setTimeout(()=>{
            verAlquiler();
        });
    };

      
return (
        <div className="filtraralquilerid">
            <Button className="filtrarb" variant="outline-success" onClick={()=> navigate("/admin")}>Atras</Button>
             
            <input className="listInput" onKeyPress={valorId}placeholder="Titulo..." type="text" name="titulo" /> 

            {alquilerUnico.verRent.map((verRentId, index) => (
            <VerAlquilerCard key={index} data={verRentId} />
            ))}
        </div>
    )
}

export default FiltrarAlquilerId