import React from 'react'
import { Link } from 'react-router-dom'

const RegistroCliente = () => {
  return (
    <>
    <h1 className='text-lg p-6 font-bold'>INGRESE LOS DATOS DEL CLIENTE:</h1>
<form className='flex flex-col p-5'>
  <label htmlFor="nombre:">Nombre:</label>
  <input className=' mb-4 border-2 w-96' type="text" id="nombre" name="nombre" />

  <label htmlFor="apellido:">Apellido:</label>
  <input className=' mb-4 border-2 w-96' type="text" id="apellido" name="apellido"/>

  <label htmlFor="telefono:">Numero de telefono:</label>
  <input  className=' mb-4 border-2 w-96' type="number" id="telefono" name="telefono"/>

  <label htmlFor="domicilio:">Domicilio:</label>
  <input className=' mb-4 border-2 w-96' type="text" id="domicilio" name="domicilio"/>

  <label htmlFor="localidad:">Localidad:</label>
  <input className=' mb-4 border-2 w-96' type="text" id="localidad" name="localidad"/>

  <label htmlFor="codigoPostal:">Código postal:</label>
  <input className=' mb-4 border-2 w-96' type="number" id="codigoPostal" name="codigoPostal"/>

  <label htmlFor="email:">Email:</label>
  <input className='mb-4 border-2 w-96' type="email" id="email" name="email"/>

  <label htmlFor="password:">Contraseña:</label>
  <input className='mb-4 border-2 w-96' type="password" id="password" name="password"/>
    <div className='flex' >
    <Link to='/AgregarCoche'><button className='w-auto p-2 border mr-5'>Agregar coche</button></Link>
    <Link to='/'><button className='w-20 p-2 border'>Cancelar</button></Link>
    </div>
  
  </form>
    </>
  )
}

export default RegistroCliente