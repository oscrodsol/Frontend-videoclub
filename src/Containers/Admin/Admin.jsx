import React, {useState, useEffect} from "react"
import "./Admin.css"
import axios from "axios"
import {useDispatch, useSelector} from 'react-redux'
import { Button } from "react-bootstrap"
import { loginUsuario, selectDatosUsuario } from "../User/userSlice"
import AlquileresCard from "../../Components/AlquileresCard/AlquileresCard"

const Admin =  (props) => {

    const token = useSelector(selectDatosUsuario);
    const [alquiler, setAlquiler] = useState({
        rent:[],
        verRent:"",
        id:""
    }) 
    console.log(alquiler.id)
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
    const verAlquiler= async () =>{
        try{
        const config = {
            headers: {
                "Authorization":`Bearer ${token.token}`
            }
        }
        axios.get('https://videoclub-backend.herokuapp.com/alquileres/veralquiler/3',config)
        .then(resp =>{
            console.log('holaquetal', resp.data)
        })
    } catch (error){
        console.log(error)
    }}
    const valorId = (event) => {
        if(event.key === "Enter") {
            setAlquiler({
                id: event
            })
        }  
    }
   
    return (
        <div className="admin">
            <Button className="adminb" variant="outline-success" onClick={()=> mostrarAlquileres()} >Alquileres</Button>
            <Button className="adminb"  variant="outline-success" onClick={()=> verAlquiler()}>Añadir Alquiler</Button>
            <input className="listInput" onKeyPress={valorId} placeholder="Titulo..." type="text" name="titulo" /> 
            
                {
                alquiler.rent.map((alquiler, index) => (
                    <AlquileresCard key={index} data={alquiler}/> 
                ))
                }

        </div>
    )
}

export default Admin