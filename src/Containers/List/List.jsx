import { useEffect, useState} from "react"
import axios from "axios"
import './List.css'

const List = props => {
    //Inicializamos el State con un objeto que incluya todos los datos que queremos mostrar en el component
    let [movies, setMovie] = useState({
        pelis: [],
    })

    useEffect(()=> {
        axios.get('https://api.chucknorris.io/jokes/random')
        .then((resp) => {
            setMovie({
                //usamos ... (spread) para coger todos los atributos del objeto, en este caso, para no pisarlos
                pelis: resp.data
            })
        })
    },[])

    return (
        <div className="list">

            <p>{movies.pelis.value}</p>

        </div>
    )
}

export default List
