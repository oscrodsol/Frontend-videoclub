
import './List.css'
import PeliculasCard from '../../Components/PeliculasCard/PeliculasCard'
import { useSelector, useDispatch } from 'react-redux';
import { selectLetraPelicula } from "../Home/homeSlice"

const List = props => {
    //Inicializamos el State con un objeto que incluya todos los datos que queremos mostrar en el component
    /*     let [movies, setMovie] = useState({
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
        ) */

    /* let [cartelera, setCartelera] = useState(letraPelicula) */

    const mostrar = useSelector(selectLetraPelicula)
    
    /*     useEffect(() => {
            axios.post('https://videoclub-backend.herokuapp.com/peliculas/')
                .then(resp => {
                    console.log(resp)
                    setCartelera(
                        resp.data
                    )
                })
        }, []) */
        console.log(mostrar)
    return (
        <div className="home">
            {
                
                /*                 cartelera.map((pelis, index) => (
                                    <PeliculasCard key={index} data={mostrar} />
                                )) */
                <div className="tarjeta">
                    <PeliculasCard data={mostrar} />
                    {mostrar.sinopsis}
                </div>
            }
            
        </div>
    )
}

export default List
