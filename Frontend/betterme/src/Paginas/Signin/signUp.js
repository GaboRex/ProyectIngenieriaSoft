import './signup.css';
import {Link} from "react-router-dom";
import React, { useState } from 'react';
import Axios from 'axios'
import registro1 from './registro1.png';
import registro2 from './registro2.png';
import {useNavigate} from 'react-router-dom'

function App() {
  const navigate = useNavigate();
const [nombre, setNombre] = useState()
const [apellido, setApellido] = useState()
const [username, setUsername] = useState()
const [password, setPassword] = useState()

const register = () => {
  if(!nombre){
    return
  }
  Axios.post('http://localhost:3000/signup/register', {
    nombre: nombre,
    apellido: apellido,
    username: username,
    password: password
    
  }).then((response) => {
    navigate("/menu")
    console.log(response)
  })
}

  return (
    <div className='App'>
      <div className="parce2">
      <img className="imgr2" src={registro1}/>
      </div>
      <div className="parce1">
      <img className="imgr1" src={registro2}/>
      </div>
      <div className="parce3">
    <form> 
      <div className="containerr">
        <h1 className="header">REGISTRARSE</h1>
        <label htmlFor="name"><b>Nombre</b></label>
        <input type="text" placeholder="Ingrese su nombre" value={nombre} onChange={ (e) => { setNombre(e.target.value)}} required/>

        <label htmlFor="lname"><b>Apellido</b></label>
        <input type="text" placeholder="Ingrese su apellido" value={apellido} onChange={ (e) => { setApellido(e.target.value)}} required/>

        <label htmlFor="uname"><b>Nombre de usuario</b></label>
        <input type="text" placeholder="Ingrese su nombre de usuario" value={username} onChange={ (e) => { setUsername(e.target.value)}} required/>

        <label htmlFor="psw"><b>Contraseña</b></label>
        <input type="password" placeholder="Ingrese su contraseña" value={password} onChange={ (e) => { setPassword(e.target.value)}} required/>

        <label htmlFor="psw"><b>Confirmar contraseña</b></label>
        <input type="password" placeholder="Ingrese su contraseña nuevamente" required/>

        <div className="greenButton">
          <Link to="/menu">
        <button onClick={register}>Registrarse</button>
        </Link>
        </div>

        <div className="footer">
        <Link to = "/signin">
          <button type="button" className="cancelbtn">Cancelar</button>
        </Link>
        </div>
      </div>
    </form>
    </div>
    </div>
  );
}

export default App;
