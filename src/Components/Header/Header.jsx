import React from "react"
import { NavLink } from 'react-router-dom'
import "./Header.css"
import img from "../../assets/logopelicula.png"

const Header = props => {

    return (
        <div className="header">
            <img className="logo" src={img} />
            <div className="menu_header">
                <NavLink className="navlink" to="/">Inicio</NavLink>
                <NavLink className="navlink" to="/movies">Categorias</NavLink>
                <NavLink className="navlink" to="/contact">Contacto</NavLink>
            </div>
            <div className="input_header">
                <input className="busqueda" placeholder="Buscar..." type="text"/>
            </div>
        </div>
    )
}

export default Header
