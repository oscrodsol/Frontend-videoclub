import React from "react"
import { NavLink, useNavigate } from 'react-router-dom'
import "./Header.css"
import {useSelector} from 'react-redux'
import {selectDatosUsuario, logOut} from '../../Containers/User/userSlice'
import img from "../../assets/logopelicula.png"
import img2 from "../../assets/login.png"
import { Button } from 'react-bootstrap';


const Header = props => {

    const credenciales = useSelector(selectDatosUsuario);
    let navegador = useNavigate();

    const cambiarPagina = (destino) =>{
        navegador(destino)
    }

    if(!credenciales?.token){

    return (
        <div className="header">
            <img className="logo" src={img} />
            <div className="menu_header">
                <NavLink className="navlink" to="/">Inicio</NavLink>
                <NavLink className="navlink" to="/movies">Categorias</NavLink>
                <NavLink className="navlink" to="/contact">Contacto</NavLink>
                <input className="busqueda" placeholder="Titulo, director..." type="text"/>
            </div>
            <div>
                <NavLink className="ilogin" to="/login"><img src={img2}/></NavLink>
            </div>
        </div>
    )
    }else{
        return (
            <div className="header">
                <img className="logo" src={img} />
                <div className="menu_header">
                    <NavLink className="navlink" to="/">Inicio</NavLink>
                    <NavLink className="navlink" to="/movies">Categorias</NavLink>
                    <NavLink className="navlink" to="/contact">Contacto</NavLink>
                    <input className="busqueda" placeholder="Titulo, director..." type="text"/>
                </div>
                <div>
                    <NavLink className="navlink" to="/Profile">Bienvenido,{credenciales.user.nombre} </NavLink>
                </div>
            </div>
        )
    }
}

export default Header
