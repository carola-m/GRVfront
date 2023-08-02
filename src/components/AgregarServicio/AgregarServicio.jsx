import React from 'react'
import { Link } from 'react-router-dom'

const AgregarServicio = () => {
  return (
    <>
    <h1 className='text-lg p-6 font-bold'>INGRESE EL SERVICIO REALIZADO:</h1>
  <form className='flex flex-col p-5'>
  <label htmlFor="fecha:">Fecha:</label>
  <input className=' mb-4 border-2 w-96' type="date" id="fecha" name="fecha" />

  <label htmlFor="km:">Kilómetros:</label>
  <input className=' mb-4 border-2 w-96' type="number" id="km" name="km"/>

  <label htmlFor="servicio">Tipo de servicio:</label>
  <textarea className=' mb-4 border-2 w-96' id="servicio" name="servicio"></textarea>

  <label htmlFor="nota">Notas:</label>
  <textarea className=' mb-4 border-2 w-96' id="nota" name="nota"></textarea>

  <label htmlFor="factura:">Adjuntar factura o documento:</label>
  <input className=' mb-4 border-2 w-96' type="file" id="factura" name="factura"/>

    <div className='flex' >
    <Link to='/'><button className='w-auto p-2 border mr-5'>Agregar</button></Link>
    <Link to='/AgregarCoche'><button className='w-20 p-2 border'>Atrás</button></Link>
    </div>
  
  </form>
    </>
  )
}

export default AgregarServicio