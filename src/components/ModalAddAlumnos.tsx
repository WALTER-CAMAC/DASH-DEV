import type { ChangeEvent, FormEvent } from 'react';
import type { Alumno } from '../types';
import { Ticket } from 'lucide-react';

export interface ModalHandleProps {
  handle: () => void;      // Función para cerrar
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  value: Alumno           // Valor del input (Nombre completo)
}
export const ModalAddAlumnos = ({ handle, value, onChange, onSubmit }: ModalHandleProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md  ">
      {/* Contenedor Principal con Malla de Fondo */}
      <div className="relative bg-[#0f0f0f] border-2  border-zinc-800 w-full max-w-7xl max-h-[95vh] rounded-none shadow-[0_20px_50px_rgba(0,0,0,1)] overflow-auto
      group/table
          [&::-webkit-scrollbar]:w-2
          [&::-webkit-scrollbar-track]:bg-zinc-500
          [&::-webkit-scrollbar-thumb]:bg-primary
          [&::-webkit-scrollbar-thumb]:rounded-full
      "
        style={{ backgroundImage: 'linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)', backgroundSize: '40px 40px' }}>

        {/* Barra decorativa superior */}
        <div className="flex items-center justify-between px-4 py-2 bg-[#1a1a1a] border-b border-zinc-800 shrink-0">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
          </div>
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest text-center">create_new_student_entry.sh</span>
          <button onClick={handle} className="text-zinc-500 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        {/* Content Area - Reducción de padding para ganar espacio vertical */}
        <div className="p-8 
          ">
          {/* Título - Tamaño reducido ligeramente */}
          <div className="mb-6 text-left">
            <h3 className="text-4xl font-black text-white tracking-tight leading-none mb-2 uppercase">
              NUEVO <span className="text-accent-cyan block md:inline">REGISTRO</span>
            </h3>
            <div className="h-1 w-20 bg-orange-500"></div>
          </div>

          <form onSubmit={onSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-4">

              {/* COLUMNA 1: IDENTIDAD */}
              <div className="space-y-4">
                <h4 className="text-[11px] font-black text-accent-cyan uppercase tracking-[0.3em] border-b border-zinc-800 pb-2">01. IDENTIDAD_LOG</h4>
                <div className="group">
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase mb-1 group-focus-within:text-accent-cyan transition-colors">Nombre Completo</label>
                  <input name='nombre' value={value.nombre} onChange={onChange} type="text" className="w-full  ease-in-out duration-500 bg-[#151515] border-b-2 border-zinc-800 text-white p-2 focus:outline-none focus:border-accent-cyan transition-all font-mono text-sm" placeholder="ESTUDIANTE..." />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="group">
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase mb-1 group-focus-within:text-accent-cyan transition-colors">Edad</label>
                    <input name='edad' value={value.edad} onChange={onChange} type="number" className="w-full  ease-in-out duration-500 bg-[#151515] border-b-2 border-zinc-800 text-white p-2 focus:outline-none focus:border-accent-cyan transition-all font-mono text-sm" placeholder="20" />
                  </div>
                  <div className="group">
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase mb-1 group-focus-within:text-accent-cyan">Género</label>
                    <select name='genero' value={value.genero} onChange={onChange} className="w-full  ease-in-out duration-500 bg-[#151515] border-b-2 border-zinc-800 text-white p-2 focus:outline-none focus:border-accent-cyan transition-all font-mono text-sm">
                      <option value="" disabled hidden>SELECCIONAR ...</option>
                      <option>MASCULINO</option>
                      <option>FEMENINO</option>
                      <option>THERIAN</option>
                      <option>PREFIERO NO RESPONDER</option>
                      <option>OTRO</option>
                    </select>
                  </div>
                </div>

                <div className="group">
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase mb-1 group-focus-within:text-accent-cyan">Apoderado (Responsable)</label>
                  <input name='apoderado' value={value.apoderado} onChange={onChange} type="text" className="w-full  ease-in-out duration-500 bg-[#151515] border-b-2 border-zinc-800 text-white p-2 focus:outline-none focus:border-accent-cyan transition-all font-mono text-sm" placeholder="NOMBRE COMPLETO..." />
                </div>

                <div className="group">
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase mb-1 group-focus-within:text-accent-cyan">Contacto Celular</label>
                  <input name='celular' value={value.celular} onChange={onChange} type="text" className="w-full  ease-in-out duration-500 bg-[#151515] border-b-2 border-zinc-800 text-white p-2 focus:outline-none focus:border-accent-cyan transition-all font-mono text-sm" placeholder="+51 900..." />
                </div>
                 <div className="grid grid-cols-2 gap-4">
                  <div className="group">
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase mb-1 group-focus-within:text-accent-cyan">Instrumento</label>
                    <select name='instrumento' value={value.instrumento} onChange={onChange} className="w-full  ease-in-out duration-500 bg-[#151515] border-b-2 border-zinc-800 text-white p-2 focus:outline-none focus:border-accent-cyan transition-all font-mono text-sm">
                      <option value="" disabled hidden>SELECCIONAR ...</option>
                      <option>PIANO</option>
                      <option>GUITARRA</option>
                      <option>BAJO</option>
                      <option>VIOLÍN</option>
                      <option>CANTO</option>
                      <option>BATERIA</option>
                      <option>ESTIMULACIÓN</option>
                      <option>SAXOFÓN</option>
                      <option>FLAUTA TRAVERZA</option>
                      <option>QUENA</option>
                      <option>OTROS</option>
                    </select>
                  </div>
                  <div className="group">
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase mb-1 group-focus-within:text-accent-cyan">Modalidad</label>
                    <select name='modalidad' value={value.modalidad} onChange={onChange} className="w-full  bg-[#151515] border-b-2 border-zinc-800 text-white p-2 ease-in-out duration-500 focus:outline-none focus:border-accent-cyan transition-all font-mono text-sm">
                      <option value="" disabled hidden>SELECCIONAR ...</option>
                      <option>8 X MES PRESENCIAL</option>
                      <option>12 X MES PRESENCIAL</option>
                      <option>8 X MES VIRTUAL</option>
                      <option>12 X MES VIRTUAL</option>
                      <option>PRESENCIAL</option>
                      <option>GRUPAL</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* COLUMNA 2: ACADÉMICO */}
              <div className="space-y-4">
                <h4 className="text-[11px] font-black text-green-500 uppercase tracking-[0.3em] border-b border-zinc-800 pb-2">02. ACADEMIC_CONFIG</h4>

                <div className="group">
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase mb-1 group-focus-within:text-green-500 transition-colors">Docente Asignado</label>
                   <select name='docente' value={value.docente} onChange={onChange} className="w-full bg-[#151515] border-b-2 border-zinc-800 text-white p-2 ease-in-out duration-500 focus:outline-none focus:border-green-500 transition-all font-mono text-sm uppercase">
                      <option value="" disabled hidden>SELECCIONAR ...</option>
                      <option>ALBERT</option>
                      <option>WALTER CAMAC</option>
                      <option>MARISOL GALINDO</option>
                      <option>MELISA DE LA CRUZ</option>
                      <option>ADELAYDA</option>
                      <option>SAMUEL YUPANQUI</option>
                    </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="group">
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase mb-1 group-focus-within:text-green-500 transition-colors">Día Personalizado</label>
                    <select name='diaPersonalizado' value={value.diaPersonalizado} onChange={onChange} className="w-full bg-[#151515] border-b-2 border-zinc-800 text-white p-2 ease-in-out duration-500 focus:outline-none focus:border-green-500 transition-all font-mono text-sm uppercase">
                      <option value="" disabled hidden>SELECCIONAR ...</option>
                      <option>LUN - MIER </option>
                      <option>MAR - JUE</option>
                      <option>LUN - MIER - VIERNES</option>
                      <option>OTROS...</option>
                    </select>
                  </div>
                  <div className="group">
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase mb-1 group-focus-within:text-green-500 transition-colors">Hora Clase</label>
                    <input name='horaClase' value={value.horaClase} onChange={onChange} type="time" className="w-full [&::-webkit-calendar-picker-indicator]:invert-[0.5] bg-[#151515] border-b-2 border-zinc-800 text-white p-2 ease-in-out duration-500 focus:outline-none focus:border-green-500 transition-all font-mono text-sm uppercase 
                    
                    " />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="group">
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase mb-1 group-focus-within:text-green-500 transition-colors">Día de Clase Grupal</label>
                    <select name='diaDeClaseGrupal' value={value.diaDeClaseGrupal} onChange={onChange} className="w-full bg-[#151515] border-b-2 border-zinc-800 text-white p-2 ease-in-out duration-500 focus:outline-none focus:border-green-500 transition-all font-mono text-sm uppercase">
                      <option value="" disabled hidden>SELECCIONAR ...</option>
                      <option>VIERNES</option>
                      <option>SABADO</option> 
                      <option>LUNES</option> 
                      <option>MARTES</option> 
                      <option>MIERCOLES</option> 
                      <option>JUEVES</option> 
                    </select>
                  </div>
                  <div className="group">
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase mb-1 group-focus-within:text-green-500 transition-colors">Hora Clase Grupal</label>
                    <input name='horaDeClaseGrupal' value={value.horaDeClaseGrupal} onChange={onChange} type="time" className="w-full [&::-webkit-calendar-picker-indicator]:invert-[0.5] bg-[#151515] border-b-2 border-zinc-800 text-white p-2 ease-in-out duration-500 focus:outline-none focus:border-green-500 transition-all font-mono text-sm uppercase 
                    
                    " />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 border-t border-zinc-800/50 pt-4">
                  <div className="group">
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase mb-1 group-focus-within:text-green-500 transition-colors">Inicio Mensualidad</label>
                    <input name='inicioMatricula' value={value.inicioMatricula} onChange={onChange} type="date" className="w-full bg-[#151515] border-b-2 border-zinc-800 text-zinc-400 [&::-webkit-calendar-picker-indicator]:invert-[0.5] p-2 ease-in-out duration-500 focus:outline-none focus:border-green-500 transition-all font-mono text-sm" />
                  </div>
                  <div className="group">
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase mb-1 group-focus-within:text-green-500 transition-colors">Vencimiento de la Mensualidad</label>
                    <input name='vencimientoMatricula' value={value.vencimientoMatricula} onChange={onChange} type="date" className="w-full bg-[#151515] border-b-2 border-zinc-800 text-zinc-400 [&::-webkit-calendar-picker-indicator]:invert-[0.5] p-2 ease-in-out duration-500 focus:outline-none focus:border-green-500 transition-all font-mono text-sm" />
                  </div>
                
                </div>
              </div>
              {/* SECCIÓN 3: FINANCIAL_LOG - Ocupando todo el ancho del contenedor */}
              <div className="space-y-5">
                <h4 className="text-[11px] font-black text-purple-500  uppercase tracking-[0.3em] border-b border-zinc-800 pb-2">03. FINANCIAL_LOG</h4>
                  <div className="group">
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase mb-1 group-focus-within:text-purple-500 transition-colors">Tipo Matrícula</label>
                    <select name='tipoMatricula' value={value.tipoMatricula} onChange={onChange} className="w-full bg-[#151515] border-b-2 border-zinc-800 text-white p-2 ease-in-out duration-500 focus:outline-none focus:border-purple-500 transition-all text-sm uppercase">
                      <option value="" disabled hidden>SELECCIONAR ...</option>
                      <option>REGULAR</option>
                      <option>BECADO</option>
                      <option>PROMO</option>
                      <option>REFERIDO</option>
                      <option>EX ALUMNO</option>
                    </select>
                  </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="group">
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase mb-1 group-focus-within:text-purple-500 transition-colors">Matrícula</label>
                    <div className="relative">
                      <span className="absolute left-2 top-2 text-zinc-600 font-mono text-xs">S/</span>
                      <input name='matricula' value={value.matricula} onChange={onChange} type="number" className="w-full bg-[#151515] border-b-2 border-zinc-800 text-white p-2 pl-6 ease-in-out duration-500 focus:outline-none focus:border-purple-500 transition-all font-mono text-sm" placeholder="0.00" />
                    </div>  
                  </div>
                  <div className="group">
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase mb-1 group-focus-within:text-purple-500 transition-colors">Mensualidad</label>
                    <div className="relative">
                      <span className="absolute left-2 top-2 text-zinc-600 font-mono text-xs">S/</span>
                      <input name='mensualidad' value={value.mensualidad} onChange={onChange} type="number" className="w-full bg-[#151515] border-b-2 border-zinc-800 text-white p-2 pl-6ease-in-out duration-500 focus:outline-none focus:border-purple-500 transition-all font-mono text-sm" placeholder="0.00" />
                    </div>
                  </div>
                </div>
                
                {/* SECCIÓN BONOS ESTÉTICA */}
                <div className="p-3 bg-zinc-900/30 border border-zinc-800 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-1 opacity-10">
                    <Ticket size={40} />
                  </div>
                  <label className="flex items-center gap-2 text-[10px] font-black text-yellow-500 uppercase mb-2 tracking-widest">
                    <span className="w-2 h-2 bg-yellow-500 animate-pulse"></span>
                    Bonos_Aplicados
                  </label>
                  <input 
                    name='bonos' 
                    value={value.bonos} 
                    onChange={onChange} 
                    type="text" 
                    className="w-full bg-black/40 border border-zinc-700 text-yellow-500/90 p-2 font-mono text-sm focus:outline-none focus:border-yellow-500/50 transition-all" 
                    placeholder="EJ: PROMO_VERANO_2024..." 
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="group">
                    <label className="block text-[9px] font-bold text-red-500 uppercase mb-1">Monto Faltante</label>
                    <div className="relative">
                      <span className="absolute left-2 top-2 text-red-900 font-mono text-xs">S/</span>
                      <input name='montoFaltante' value={value.montoFaltante} onChange={onChange} type="number" className="w-full bg-red-500/5 border-b-2 border-red-500 ease-in-out duration-500 focus:outline-none focus:border-red-700 transition-all  text-red-500 p-2 pl-6 font-mono text-sm" placeholder="0.00" />
                    </div>
                  </div>
                  <div className="group">
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase mb-1 group-focus-within:text-purple-500 transition-colors">Método</label>
                    <select name='metodoDePago' value={value.metodoDePago} onChange={onChange} className="w-full bg-[#151515] border-b-2 border-zinc-800 text-white p-2 ease-in-out duration-500 focus:outline-none focus:border-purple-500 transition-all font-mono text-sm uppercase">
                     <option value="" disabled hidden>SELECCIONAR ...</option>
                      <option>YAPE</option>
                      <option>PLIN</option>
                      <option>EFECTIVO</option>
                    </select>
                  </div>
                </div>
              </div>

            </div>
            {/* SECCIÓN 3: OBSERVACIONES - Reducción de margen superior */}
            <div className="mt-4">
              <label className="block text-[10px] font-bold text-orange-500 uppercase mb-1 tracking-widest">Observations_Textarea</label>
              <textarea name='observaciones' value={value.observaciones} onChange={onChange} className="w-4xl bg-[#151515] border-2 border-zinc-800 text-zinc-400 p-6 font-mono text-xs focus:outline-none focus:border-orange-500 transition-all" placeholder="NOTAS ADICIONALES DEL ALUMNO..."></textarea>
            </div>

            {/* Botones Finales - Reducción de padding superior */}
            <div className="flex items-center justify-center sm:flex-row gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 max-w-sm bg-green-500 text-black font-black py-3 uppercase tracking-tighter hover:bg-white transition-all transform hover:-translate-y-1 shadow-[6px_6px_0px_0px_rgba(255,255,255,0.15)] active:translate-y-0 active:shadow-none"
              >
                Confirmar Registro Estudiante
              </button>
              <button
                type="button"
                onClick={handle}
                className="px-8 text-zinc-500 font-bold py-3 uppercase text-[10px] tracking-widest hover:text-white transition-colors border border-transparent hover:border-zinc-800"
              >
                [ ESC ] Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}