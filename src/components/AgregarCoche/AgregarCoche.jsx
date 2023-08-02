import React from 'react'
import { Link } from 'react-router-dom'

const AgregarCoche = () => {
  return (
    <>
    <h1 className='text-lg p-6 font-bold'>INGRESE LOS DATOS DEL COCHE:</h1>
<form className='flex flex-col p-5'>
  <label htmlFor="matricula:">Matricula:</label>
  <input className=' mb-4 border-2 w-96' type="text" id="matricula" name="matricula" />

  <label htmlFor="marca:">Marca:</label>
  <input className=' mb-4 border-2 w-96' type="text" id="marca" name="marca"/>

  <label htmlFor="modelo:">Modelo:</label>
  <input  className=' mb-4 border-2 w-96' type="text" id="modelo" name="modelo"/>

  <label htmlFor="año:">Año:</label>
  <input className=' mb-4 border-2 w-96' type="number" id="año" name="año"/>

  <label htmlFor="motor:">Motor/Combustible:</label>
  <input className=' mb-4 border-2 w-96' type="text" id="motor" name="motor"/>

  <label htmlFor="fichaTecnica:">Ficha técnica:</label>
  <input className=' mb-4 border-2 w-96' type="file" id="fichaTecnica" name="fichaTecnica"/>

    <div className='flex' >
    <Link to='/AgregarServicio'><button className='w-auto p-2 border mr-5'>Agregar servicio</button></Link>
    <Link to='/RegistroCliente'><button className='w-20 p-2 border'>Atrás</button></Link>
    </div>
  
  </form>
    </>
  )
}

export default AgregarCoche