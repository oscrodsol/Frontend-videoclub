import React, {useState, useEffect} from "react"
import "./Admin.css"
import axios from "axios"
import {useDispatch, useSelector} from 'react-redux'
import { Button } from "react-bootstrap"
import { loginUsuario, selectDatosUsuario } from "../User/userSlice"


const Admin =  (props) => {

    const token = useSelector(selectDatosUsuario);
    
    
    console.log(token.token)
    const mostrarAlquileres = async () =>{
        try{
        const config = {
            headers: {
                "Authorization":`Bearer ${token.token}`
            }
        }
        axios.get('https://videoclub-backend.herokuapp.com/alquileres',config)
        .then(resp =>{
            console.log(resp)
        })
    } catch (error){
        console.log(error)
    }}

    useEffect(()=>{
        
    },[])
    
     useEffect(() => {

    },[])
     

    return (
        <div className="admin">
            <Button className="adminb" variant="outline-success" onClick={()=> mostrarAlquileres()} >Alquileres</Button>
            <Button className="adminb"  variant="outline-success">Usuarios</Button>
            

        </div>
    )
}


export default Admin