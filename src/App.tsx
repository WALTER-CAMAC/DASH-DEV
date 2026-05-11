
import { useEffect, useState, type ChangeEvent } from 'react'
import { GestionAlumnos } from './components/GestionAlumnos'
import { Navbar } from './components/NavBar'
import service from './services/service'
import type { Alumno } from '../src/types' ;
import { FichaTecnica } from './components/FichaTecnica';
import axios from 'axios';


const datos = {
  nombre: '',
  edad: '',
  genero: '',
  apoderado: '',
  celular: '',
  instrumento: '',
  modalidad: '',
  docente: '',
  diaPersonalizado: '',
  horaClase: '',
  diaDeClaseGrupal: '',
  horaDeClaseGrupal: '',
  inicioMatricula: '',
  vencimientoMatricula:'', 
  tipoMatricula: '',
  observaciones: '',
  matricula: 0,
  mensualidad: 0,
  bonos: '',
  montoFaltante: 0,
  metodoDePago: '',
  estado: false,
  }




function App() {
  const [alumnos, setAlumnos] = useState<Alumno[]>([])
  const [newAlumno, setNewAlumno] = useState(datos)
  const [fichaTecnica, setFichaTecnica] = useState<Alumno | null>(null)

const [onClosed, setOpenModal] = useState(false)
useEffect(() => {
 service.getAll().then((response )=> {
  setAlumnos(response)
 } ).catch(error => { console.log(`Hubo problemas en ${error}`);} )
  
}, [])




const handleInputChange = (event:ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>)=> {
  const { name, value } = event.target;
  setNewAlumno({...newAlumno,
    [name]:value
  })
  console.log(event.target.value);
}
   
 const addNewAlumn = (event:React.FormEvent<HTMLFormElement>)=> {
   event.preventDefault()
   const {nombre,celular,docente,inicioMatricula} =newAlumno
   if( !nombre.trim() || !celular.trim()||!docente.trim()|| !inicioMatricula.trim()) {
    alert('Completar todos los campos de registro')
   

    return 
   }
   const newAdd ={...newAlumno}
  
   service.post(newAdd).then(response=> {
    setAlumnos(alumnos.concat(response))
    setNewAlumno({...newAlumno,
     ...datos

    })
    setOpenModal(false)
   console.log("Respuesta del servidor:", response)
   })
}

  return (
    <>
      <Navbar/>
      <div className='flex flex-col items-center h-full p-10'>
      <section className='container'>
      <GestionAlumnos 
      onClosed={onClosed} 
      handleClosed={ ()=>setOpenModal(!onClosed)} 
      data={alumnos}
      value={newAlumno}
      onSubmit={addNewAlumn}
      onChange={handleInputChange}      
      />
      </section>
      </div>
      
     
   
    </>
  )
}

export default App
