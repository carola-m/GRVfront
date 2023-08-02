import React from 'react'
import { Link } from 'react-router-dom'



const HomeAdmin = () => {
  return (
    <>

    <div className='flex flex-col items-center' >
        <Link to='/registroCliente'><button className='border-2 p-2 my-2' >Registrar nuevo cliente</button> </Link>
        <input  className='border-2 px-6 py-2 my-2' placeholder='Buscar...'></input>
    </div>

    <div className='p-2 flex flex-col items-center'>
        <ul>
            <li className='flex gap-5 border p-6'>
                <p>Nombre</p>
                <p>Apellido</p>
                <p>Matricula</p>
                <Link to='/detalle'> <button className='border-2 px-4'>Ver más</button> </Link>
            </li>
        </ul>
    </div>



    </>
  )
}

export default HomeAdmin