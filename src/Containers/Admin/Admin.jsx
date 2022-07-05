import React, {useState, useEffect} from "react"
import "./Admin.css"
import axios from "axios"

import { Button } from "react-bootstrap"


const Admin = (props) => {

    let [cartelera, setCartelera] = useState([

    ])

     useEffect(() => {
         axios.get('https://videoclub-backend.herokuapp.com/alquileres/')
         .then(resp => {
            console.log(resp)
            setCartelera(
               resp.data
            )
        })
    },[])
     

    return (
        <div className="admin">
            <Button className="adminb" variant="outline-success" >Alquileres</Button>
            <Button className="adminb"  variant="outline-success">Usuarios</Button>
            

        </div>
    )
}

export default Admin