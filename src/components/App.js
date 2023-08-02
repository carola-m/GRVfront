import { Route, Routes } from 'react-router-dom';
import '../estilos/App.css';
import Home from './Home/Home';
import Servicios from './Servicios/Servicios';
import Contacto from './Contacto/Contacto';
import Login from './Login/Login';
import NavBar from './NavBar/NavBar';
import '../estilos/App.css'
import HomeAdmin from './HomeAdmin/HomeAdmin';
import RegistroCliente from './RegistroCliente/RegistroCliente';
import AgregarCoche from './AgregarCoche/AgregarCoche';
import AgregarServicio from './AgregarServicio/AgregarServicio';
import Detail from './Detail/Detail';


function App() {
  return (
  <div>
<NavBar/>
<Routes>
<Route path="/" element={<HomeAdmin/>}/>
<Route path="/registroCliente" element={<RegistroCliente/>}/>
<Route path="/agregarCoche" element={<AgregarCoche/>}/>
<Route path="/agregarServicio" element={<AgregarServicio/>}/>
<Route path="/detalle" element={<Detail/>}/>
<Route path="/inicio" element={<Home/>}/>
<Route path="/servicios" element={<Servicios/>}/>
<Route path="/contacto" element={<Contacto/>}/>
<Route path="/login" element={<Login/>}/>
</Routes>
</div>
  );
}
export default App;
