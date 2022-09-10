import logo from './logo.svg';
import './App.css';
import {Routes , Route} from 'react-router-dom'
import Init from './Paginas/Inicio/inicio.js';
import Login from './Paginas/Login/signin';
import Signup from './Paginas/Signin/signUp.js';
import Menu from './Paginas/Menu/menu';
import Ejercicios from './Paginas/Ejercicios/ejercicios';
import Brazos from './Paginas/Brazos/brazos';
import Mostrar from './Paginas/MostrarEjercicio/mostrarEjercicio';
import Piernas from './Paginas/Piernas/piernas';
import Abdomen from './Paginas/Abdomen/abdomen';
import Hombros from './Paginas/Hombros/hombros';
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
        <Route path='/brazos' element={<Brazos/>} />
        <Route path='/mostrarEjercicio/:id' element={<Mostrar/>} />
        <Route path='/piernas' element={<Piernas/>} />
        <Route path='/abdomen' element={<Abdomen/>} />
        <Route path='/hombros' element={<Hombros/>} />
      </Routes>
    </div>
    );
}

export default App;