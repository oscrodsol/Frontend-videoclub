import React from "react"
import "./Profile.css"
import { useSelector, useDispatch } from 'react-redux';
import { selectDatosUsuario, loginUsuario } from '../User/userSlice';


const Profile = props => {

    const credenciales = useSelector(selectDatosUsuario)

console.log(credenciales.user);
    return (
        <div className="profile">
            <p>Hola perfil</p>
            <p>Nombre:{credenciales.user.nombre}</p><br></br>
            <p>DNI:{credenciales.user.dni}</p><br></br>
            <p>E-mail:{credenciales.user.email}</p><br></br>
            <p>Telefono:{credenciales.user.telefono}</p>
        </div>
    )
}

export default Profile