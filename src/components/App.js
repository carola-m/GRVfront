import { Route, Routes } from 'react-router-dom';
import '../estilos/App.css';
import Home from './Home/Home';
import Servicios from './Servicios/Servicios';
import Contacto from './Contacto/Contacto';
import Login from './Login/Login';
import NavBar from './NavBar/NavBar';

function App() {
  return (
    <div>
<NavBar/>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/servicios" element={<Servicios/>}/>
<Route path="/contacto" element={<Contacto/>}/>
<Route path="/login" element={<Login/>}/>
</Routes>
</div>
  );
}
export default App;
