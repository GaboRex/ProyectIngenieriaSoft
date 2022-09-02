import logo from './logo.svg';
import './App.css';
import {Routes , Route} from 'react-router-dom'
import Init from './Paginas/Inicio/inicio.js';
import Login from './Paginas/Login/signin';
import Signup from './Paginas/Signin/signUp.js';
import Menu from './Paginas/Menu/menu';
import Ejercicios from './Paginas/Ejercicios/ejercicios';
//import Register from './Pages/Register/register.jsx'

function App() {
  return (
    <div classname='App'>
      <Routes>
        <Route path='/' element={<Init/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/signin' element={<Login/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/ejercicios' element={<Ejercicios/>} />
      </Routes>
    </div>
    );
}

export default App;