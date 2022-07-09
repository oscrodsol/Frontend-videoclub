import React, {useEffect, useState} from "react"
import "./Admin.css"
import axios from "axios"
import {useNavigate} from 'react-router-dom'
import { useSelector} from 'react-redux'
import { Button } from "react-bootstrap"
import { selectDatosUsuario } from "../User/userSlice"
import AlquileresCard from "../../Components/AlquileresCard/AlquileresCard"


const Admin =  (props) => {
    const navigate = useNavigate();
    const token = useSelector(selectDatosUsuario);
    const [alquiler, setAlquiler] = useState({
        rent:[]
    })
    const mostrarAlquileres = async () =>{
        try{
        const config = {
            headers: {
                "Authorization":`Bearer ${token.token}`
            }
        }
        axios.get('https://videoclub-backend.herokuapp.com/alquileres',config)
        .then(resp =>{
            setAlquiler({
                rent: resp.data
            })
        })
    } catch (error){
        console.log(error)
    }}
    
    return (
        <div className="admin">
                <div className="adminb"><Button className="adminb" variant="outline-success" onClick={()=> mostrarAlquileres()}>Alquileres</Button>
                {/* <Button className="adminb" variant="outline-success" onClick={()=> navigate("/filtraralquilerid")}>Alquiler id</Button> */}
                </div>
            
                <div className="info">{
                    alquiler.rent.map((alquiler, index) => (
                        <AlquileresCard key={index} data={alquiler}/> 
                    ))
                    }
                </div>  
        </div>
    )
}


export default Admin