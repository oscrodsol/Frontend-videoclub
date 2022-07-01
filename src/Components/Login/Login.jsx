import React, { useState, useEffect } from 'react';
import Navigator from '../../components/Navigator/Navigator';
import './Login.css';


const Login = () => {

    //Hooks (equivalen a las propiedades del estado)
    const [usuario, setUsuario] = useState({
        email : "", 
        password : ""
    })

    //Funcion handler o manejadora
    const manejadorFormulario = (e) => {
        //Funcion handler que setea los datos en el hook...[e.target.name] obtiene 
        //el nombre de la propiedad a cambiar, e.target.value tiene el valor..ambos
        //obtienen los datos del evento, que es el hecho de escribir en un input en concreto
        setUsuario({ 
            ...usuario, 
            [e.target.name]: e.target.value 
        })
      };

      const funcionLogin = async () => {
        //En este paso es donde llamaríamos a axios
        //dirigiendonos al endpoint del backend que usamos para logearnos
        //le enviaríamos por body los datos... pondré un ejemplo comentado a continuación
        let datos = usuario;
        try {
        let resultado = await axios.post("urldelbackenddelendpointdelogin", datos);
        } catch ( error) {
        console.log(error)
        }
        console.log("los datos de login que enviariamos al backend serían....",usuario);
        
    }
        useEffect(() => {
        //UseEffect equivalente a componentDidMount (montado)

        }, [])

return (
     <div className='loginComponent'>
    
        {/* Auténtico truco del almendruco. 
        Consiste en usar el elemento html5 pre, para que mientravayamos cambiando
        el estado y el manejador vaya actualizando los hooks, podemover a tiempo real que valor tienen,
        naturalmente cuando la aplicación vaya a funcionar en sus fasefinales esta porción de código
        la comentaríamos. */}
    
        <pre>{JSON.stringify(userData, null,2)}</pre>
    
        LOGIN USER:
    
        <div className="inputsDesign">
            <input type="text"
            label="Email"
            name="email"
            placeholder="Escribe tu correo"
            onChange={(e) => { manejadorFormulario(e) }}
            />
            <input type="password"
            label="Password"
            name="password"
            placeholder="Escribe tu password"
            onChange={(e) => { manejadorFormulario(e) }}
            />
    
            </div>
    
                <div className="botonLogin" onClick={()=>funcionLogin()}>Logeame!</div>
    
                <Navigator destino="Register" link="/register" />
            </div>
        )
    }
    
export default Login;
