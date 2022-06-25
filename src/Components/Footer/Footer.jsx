import React from "react"
import "./Footer.css"
import img from "../../assets/logopelicula.png"

const Footer = props => {

    return (
       
        <div className="footer">
            <div>
                <img className="logo" src={img}/>
            </div>
            <div>
            HOLA PA TI MI COLA
            </div>
            
        </div>
    )
}

export default Footer