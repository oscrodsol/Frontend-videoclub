import React from "react"
import "./Home.css"
import axios from "axios"
import PeliculasCard from '../../Components/PeliculasCard/PeliculasCard'
import {useState, useEffect} from 'react'


const Home = (props) => {


    let [cartelera, setCartelera] = useState([])

     useEffect(() => {
         axios.get('https://api.themoviedb.org/3/movie/popular?language=en-US&api_key=cac61624997edd865edf5c5c8caec2a2')
         .then(resp => {
            console.log(resp)
            setCartelera(
               resp.data.results
            )
        })
    },[])

    return (
        <div className="home">
                {
                cartelera.map((pelis) => (
                    <PeliculasCard data={pelis}/>
                ))
                }
        </div>
    )
}

export default Home


