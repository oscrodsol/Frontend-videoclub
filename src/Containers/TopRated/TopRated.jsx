import React, {useState, useEffect} from "react"
import "./TopRated.css"
import axios from "axios"
import PeliculasCard from "../../Components/PeliculasCard/PeliculasCard"

import { Button } from "react-bootstrap"


const TopRated = (props) => {

    let [cartelera, setCartelera] = useState([

    ])

     useEffect(() => {
         axios.get('https://videoclub-backend.herokuapp.com/peliculas/toprated')
         .then(resp => {
            console.log(resp)
            setCartelera(
               resp.data
            )
        })
    },[])
     

    return (
        <div className="toprated">

                {
                cartelera.map((pelis, index) => (
                    <PeliculasCard key={index} data={pelis}/>
                ))
                }
      
        </div>
    )
}

export default TopRated
