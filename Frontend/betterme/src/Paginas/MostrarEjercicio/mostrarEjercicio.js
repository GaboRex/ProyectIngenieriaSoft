import React, { useState } from 'react'
import {Link, useParams} from "react-router-dom";
import './mostrarEjercicio.css';
import API from '../../config/api';

function Mostrar(){
    const [exercise, setExercise]=useState({
    
    })
    const params = useParams();
    debugger
    const getEjercicio = async () => {
        const respuesta = await API.get(`/ejercicio/${params.id}`);
        const { data } = respuesta;
        const { success, message, ejercicio } = data;
        console.log(ejercicio[0].nombre);
        setExercise(ejercicio[0]);
      };
      React.useEffect(() => {
        getEjercicio();
      }, []);
    return(
        <div className="Mostrar">
            <div className="imagenE">
            <img className='imagenEjercicio' src={exercise.video}/>
            </div>
            <div className="descripcionE">
                <div className='tituloE'>
                    <h1 className="nombreDE">{exercise.nombre}</h1>                    
                </div>
                <div className='informacionE'>
                <p className="descripcionME">{exercise.descripcion}
                    </p>
                </div>
                <div className='btn_atras'>
                <Link to="/ejercicios">
                    <button className='btnAtras'>Atras</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Mostrar