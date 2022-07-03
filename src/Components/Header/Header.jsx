import React from "react"
import { NavLink, useNavigate } from 'react-router-dom'
import "./Header.css"
import {useSelector, useDispatch} from 'react-redux'
import img from "../../assets/logopelicula.png"
import img2 from "../../assets/login.png"
import { selectDatosUsuario } from "../../Containers/User/userSlice"
import { peliculasFiltradas } from "../../Containers/Home/homeSlice"


const Header = props => {

    const credenciales = useSelector(selectDatosUsuario);
    const dispatch = useDispatch();
    const navegador = useNavigate();

    const cambioPagina = (event) => {
        if(event.key === "Enter") {
            dispatch(peliculasFiltradas(event.target.value))
            navegador("/movies");
        }  
    }

    if(!credenciales?.token){

    return (
        <div className="header">
            <img className="logo" src={img} />
            <div className="menu_header">
                <NavLink className="navlink" to="/">Inicio</NavLink>
                <NavLink className="navlink" to="/movies">Categorias</NavLink>
                <NavLink className="navlink" to="/contact">Contacto</NavLink>
                <input className="listInput" onKeyPress={cambioPagina} placeholder="Titulo..." type="text" name="titulo" />
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
                    <div className="nombreUsuario">Bienvenido,{credenciales.user.nombre} </div>
                </div>
            </div>
        )
    }
}

export default Header
