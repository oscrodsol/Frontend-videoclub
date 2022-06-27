import React from "react"
import { NavLink } from 'react-router-dom'
import "./Header.css"
import img from "../../assets/logopelicula.png"
import img2 from "../../assets/login.png"


const Header = props => {

    return (
        <div className="header">
            <img className="logo" src={img} />
            <div className="menu_header">
                <NavLink className="navlink" to="/">Inicio</NavLink>
                <NavLink className="navlink" to="/movies">Categorias</NavLink>
                <NavLink className="navlink" to="/contact">Contacto</NavLink>
                <input className="busqueda" placeholder="Titulo, director..." type="text"/>
            </div>
            <div className="registrarse">
                <NavLink className="login" to="/register" ><img src={img2}/></NavLink>
            </div>
        </div>
    )
}

export default Header
