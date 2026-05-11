 <div className="relative w-full max-w-md group">
    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-500 group-focus-within:text-accent-cyan transition-colors">
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </span>
    <input 
      type="text" 
      className="w-full bg-[#151515] border-2 border-zinc-800 text-white pl-10 pr-4 py-3 rounded-none font-mono text-sm focus:outline-none focus:border-accent-cyan transition-all placeholder:text-zinc-600 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
      placeholder="SEARCH_STUDENT_BY_NAME..."
    />
  </div>



import React from 'react';
import { Eye, DollarSign, Pencil, Trash2 } from "lucide-react"; // Usamos lucide para mantener consistencia

export const TablaAlumnos = () => {
  const alumnos = [
    { id: "001", nombre: "Brais Moure", celular: "+34 600 000 000", instrumento: "Guitarra", fecha: "17-02-2026", estado: "Al día" },
    { id: "002", nombre: "Ana López", celular: "+51 900 000 000", instrumento: "Piano", fecha: "15-02-2026", estado: "Pendiente" },
    { id: "003", nombre: "Pedro Gómez", celular: "+34 611 222 333", instrumento: "Violín", fecha: "10-02-2026", estado: "Al día" },
  ];

  return (
    <div className="w-full overflow-x-auto custom-scrollbar">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-zinc-800 bg-[#1a1a1a]/50">
            <th className="p-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">ID</th>
            <th className="p-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Nombre</th>
            <th className="p-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Celular</th>
            <th className="p-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Instrumento</th>
            <th className="p-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Fecha</th>
            <th className="p-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Estado</th>
            <th className="p-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest text-center">Acciones</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-zinc-800/50">
          {alumnos.map((alumno) => (
            <tr key={alumno.id} className="hover:bg-zinc-900/40 transition-colors group">
              <td className="p-4 font-mono text-xs text-orange-500">#{alumno.id}</td>
              <td className="p-4 font-bold text-white text-sm">{alumno.nombre}</td>
              <td className="p-4 text-zinc-400 text-sm font-mono">{alumno.celular}</td>
              <td className="p-4">
                <span className="text-accent-cyan bg-accent-cyan/10 px-2 py-1 rounded-none text-[11px] font-bold uppercase border border-accent-cyan/20">
                  {alumno.instrumento}
                </span>
              </td>
              <td className="p-4 text-zinc-500 text-xs">{alumno.fecha}</td>
              <td className="p-4">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${alumno.estado === 'Al día' ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]' : 'bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.6)]'}`}></div>
                  <span className={`text-[11px] font-bold uppercase ${alumno.estado === 'Al día' ? 'text-green-500' : 'text-yellow-500'}`}>
                    {alumno.estado}
                  </span>
                </div>
              </td>

              {/* Acciones Completas */}
              <td className="p-4">
                <div className="flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  
                  {/* Botón Ver Ficha (Nuevo) */}
                  <button className="p-2 hover:bg-zinc-800 border border-zinc-700 text-white transition-all" title="Ver Ficha Técnica">
                    <Eye size={16} />
                  </button>

                  {/* Botón Pagos (Nuevo) */}
                  <button className="p-2 hover:bg-purple-500/20 border border-zinc-700 text-purple-500 transition-all" title="Gestión de Pagos">
                    <DollarSign size={16} />
                  </button>

                  {/* Botón Editar */}
                  <button className="p-2 hover:bg-orange-500/20 border border-zinc-700 text-orange-500 transition-all" title="Editar Registro">
                    <Pencil size={16} />
                  </button>

                  {/* Botón Eliminar */}
                  <button className="p-2 hover:bg-red-500/20 border border-zinc-700 text-red-500 transition-all" title="Eliminar Alumno">
                    <Trash2 size={16} />
                  </button>

                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};





//tabla

           <div className="w-full overflow-x-auto custom-scrollbar">
      <table className="w-full text-left border-collapse">
        {/* Cabecera de la Tabla */}
        <thead>
          <tr className="border-b border-zinc-800 bg-[#1a1a1a]/50">
            <th className="p-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">ID</th>
            <th className="p-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Nombre</th>
            <th className="p-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Celular</th>
            <th className="p-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Instrumento</th>
            <th className="p-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Fecha</th>
            <th className="p-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Estado</th>
            <th className="p-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest text-center">Acciones</th>
          </tr>
        </thead>

        {/* Cuerpo de la Tabla */}
        <tbody className="divide-y divide-zinc-800/50">
          {alumnos.map((alumno) => (
            <tr key={alumno.id} className="hover:bg-zinc-900/40 transition-colors group">
              {/* ID con estilo Mono */}
              <td className="p-4 font-mono text-xs text-orange-500">#{alumno.id}</td>
              
              {/* Nombre con peso visual */}
              <td className="p-4 font-bold text-white text-sm">{alumno.nombre}</td>
              
              {/* Celular */}
              <td className="p-4 text-zinc-400 text-sm font-mono">{alumno.celular}</td>
              
              {/* Instrumento con etiqueta cian */}
              <td className="p-4">
                <span className="text-accent-cyan bg-accent-cyan/10 px-2 py-1 rounded text-[11px] font-bold uppercase border border-accent-cyan/20">
                  {alumno.instrumento}
                </span>
              </td>
              
              {/* Fecha */}
              <td className="p-4 text-zinc-500 text-xs">{alumno.fecha}</td>
              
              {/* Estado Dinámico */}
              <td className="p-4">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${alumno.estado === 'Al día' ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]' : 'bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.6)]'}`}></div>
                  <span className={`text-[11px] font-bold uppercase ${alumno.estado === 'Al día' ? 'text-green-500' : 'text-yellow-500'}`}>
                    {alumno.estado}
                  </span>
                </div>
              </td>

              {/* Botones de Acción Estilo Pro */}
              <td className="p-4">
                <div className="flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 hover:bg-zinc-800 rounded border border-zinc-700 text-accent-cyan transition-all" title="Editar">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                  </button>
                  <button className="p-2 hover:bg-red-500/10 rounded border border-zinc-700 hover:border-red-500/50 text-zinc-500 hover:text-red-500 transition-all" title="Eliminar">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>



import { Calendar, Info, User, X } from 'lucide-react';
// Sub-componente visual para campos de datos
const DataField = ({ label, value, color = "text-zinc-300", isMono = false }) => (
  <div className="space-y-0.5">
    <p className="text-[9px] text-zinc-500 uppercase font-black tracking-widest leading-none">{label}</p>
    <p className={`text-sm ${color} ${isMono ? 'font-mono' : 'font-bold'} tracking-tight`}>{value}</p>
  </div>
);

// Sub-componente visual para tarjetas financieras
const FinancialCard = ({ label, amount, sub, isAlert = false, highlight = false }) => (
  <div className={`p-4 border-2 ${highlight ? 'border-purple-500/40 bg-purple-500/5' : 'border-zinc-800 bg-black'}`}>
    <p className={`text-[9px] uppercase font-black mb-1 ${isAlert ? 'text-red-500' : 'text-zinc-500'}`}>{label}</p>
    <p className={`text-xl font-mono ${isAlert ? 'text-red-500' : 'text-white'}`}>{amount}</p>
    <p className="text-[9px] text-zinc-600 font-bold uppercase mt-1">{sub}</p>
  </div>
);
//modal de informacion de alumno
 <div className="bg-black min-h-screen font-sans selection:bg-accent-cyan selection:text-black">
      {/* Navbar y Gestión de Alumnos se renderizan al fondo */}
      <div className="opacity-20 pointer-events-none">
        {/* <Navbar /> */}
        <div className='flex flex-col items-center p-10'>
          {/* <GestionAlumnos /> */}
        </div>
      </div>

      {/* MODAL: Únicamente Estético */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md">
        
        {/* Contenedor Principal: Estética de bloque sólido y sombras 2D */}
        <div className="bg-[#0c0c0c] border-2 border-zinc-800 w-full max-w-5xl h-[90vh] overflow-hidden flex flex-col rounded-none shadow-[20px_20px_0px_0px_rgba(0,0,0,0.3)]">
          
          {/* Header: Estilo Barra de Herramientas Técnica */}
          <div className="flex items-center justify-between px-6 py-4 bg-[#151515] border-b-2 border-zinc-800">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-accent-cyan/10 border border-accent-cyan/30">
                <User size={20} className="text-accent-cyan" />
              </div>
              <div>
                <h3 className="text-xl font-black text-white uppercase tracking-tighter leading-none">Student_Profile_V2.0</h3>
                <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mt-1">
                  Status: <span className="text-green-500 underline">Active_Connection</span> | ID: RET-0042
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="p-2 text-zinc-600 border border-zinc-800 cursor-not-allowed">
                <Info size={20} />
              </div>
              <div className="p-2 bg-red-500/10 text-red-500 border border-red-500/20 cursor-not-allowed">
                <X size={20} />
              </div>
            </div>
          </div>

          {/* Cuerpo: Grid de fondo y Secciones Bento */}
          <div className="flex-1 overflow-y-auto p-8 space-y-8 bg-[#0c0c0c] bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:40px_40px]">
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* COLUMNA IZQUIERDA: PERSONAL */}
              <div className="md:col-span-2 space-y-8">
                <div className="relative border-2 border-zinc-800 bg-[#0f0f0f] p-8 rounded-none shadow-[8px_8px_0px_0px_rgba(0,255,255,0.05)]">
                  <div className="absolute -top-3 left-4 bg-[#0c0c0c] px-2 text-[10px] font-black text-accent-cyan uppercase tracking-[0.2em]">Personal_Info</div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
                    <DataField label="Nombre Completo" value="Walter Camac" color="text-white text-lg" />
                    <DataField label="Género" value="Masculino" />
                    <DataField label="Edad" value="22 años" />
                    <DataField label="Fecha Nacimiento" value="12/04/2003" isMono />
                    
                    <div className="col-span-full h-[1px] bg-zinc-800/50 my-2"></div>
                    
                    <DataField label="Apoderado" value="Néstor Camac" />
                    <DataField label="Contacto" value="+51 987 654 321" isMono color="text-accent-cyan" />
                  </div>
                </div>

                <div className="border-2 border-zinc-800 bg-orange-500/5 p-6 rounded-none relative">
                   <div className="absolute -top-3 left-4 bg-[#0c0c0c] px-2 text-[10px] font-black text-orange-500 uppercase tracking-[0.2em]">Observation_Logs</div>
                   <p className="text-sm font-mono text-zinc-400 leading-relaxed italic">
                    &gt; Alumno con alto interés en composición. <br/>
                    &gt; Requiere refuerzo en lectura rítmica. <br/>
                    &gt; Puntualidad excelente.
                  </p>
                </div>
              </div>

              {/* COLUMNA DERECHA: ACADÉMICO */}
              <div className="space-y-8">
                <div className="border-2 border-zinc-800 bg-[#0f0f0f] p-8 rounded-none shadow-[8px_8px_0px_0px_rgba(34,197,94,0.05)] relative h-full">
                  <div className="absolute -top-3 left-4 bg-[#0c0c0c] px-2 text-[10px] font-black text-green-500 uppercase tracking-[0.2em]">Academic_Data</div>
                  <div className="space-y-6">
                    <div className="bg-green-500/10 border border-green-500/20 p-4">
                      <DataField label="Curso Actual" value="Piano Avanzado" color="text-green-500 text-base" />
                    </div>
                    <DataField label="Docente Asignado" value="Prof. Roberto Sánchez" />
                    <DataField label="Modalidad" value="Sesión Personalizada" />
                    
                    <div className="pt-4 border-t border-zinc-800 space-y-3">
                      <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest flex items-center gap-2"><Calendar size={12}/> Schedule_Table</p>
                      <div className="bg-black/40 p-3 font-mono text-[11px] space-y-2 border border-zinc-800 text-zinc-300">
                        <div className="flex justify-between"><span>Personal:</span> <span className="text-green-500">Lun - 16:00h</span></div>
                        <div className="flex justify-between"><span>Grupal:</span> <span className="text-green-500">Vie - 18:00h</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SECCIÓN INFERIOR: FINANCIERO */}
            <div className="border-2 border-zinc-800 bg-[#0f0f0f] p-8 rounded-none relative shadow-[8px_8px_0px_0px_rgba(168,85,247,0.05)]">
              <div className="absolute -top-3 left-4 bg-[#0c0c0c] px-2 text-[10px] font-black text-purple-500 uppercase tracking-[0.2em]">Financial_Ledger</div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <FinancialCard label="Inscripción" amount="S/ 50.00" sub="Pago: 05/01/26" />
                <FinancialCard label="Mensualidad" amount="S/ 200.00" sub="Plan: Pro_Retama" />
                <FinancialCard label="Deuda Total" amount="S/ 0.00" sub="Status: Clean" isAlert={false} />
                <FinancialCard label="Próx. Vencimiento" amount="05/03/26" sub="En 15 días" highlight={true} />
              </div>
              
              <div className="mt-8 flex flex-wrap gap-6 text-[10px] font-mono text-zinc-600 border-t border-zinc-800 pt-4">
                 <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-zinc-700"></div> [INIT_SYSTEM]: 05/01/26</span>
                 <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-zinc-700"></div> [END_CYCLE]: 05/12/26</span>
              </div>
            </div>

          </div>

          {/* Footer: Acciones Finales */}
          <div className="p-6 bg-[#151515] border-t-2 border-zinc-800 flex justify-end gap-4 items-center">
             <span className="mr-auto font-mono text-[10px] text-zinc-600 hidden sm:block italic">retama_dev_auth_v.2.0.1</span>
             <div className="px-6 py-3 text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] border border-transparent cursor-not-allowed">
               Print_Report
             </div>
             <div className="px-10 py-3 bg-white text-black font-black uppercase text-xs tracking-tighter shadow-[4px_4px_0px_0px_rgba(0,255,255,0.4)] cursor-not-allowed">
               Update_Database
             </div>
          </div>
        </div>
      </div>
    </div>




// //Aqui tenemos el loading osea cargador
// <div className="w-12 h-12 border-2 border-zinc-800 border-t-accent-cyan animate-spin"></div>
//              <p className="font-mono text-[10px] text-zinc-600 tracking-[0.3em] animate-pulse">CARGANDO_DATOS_CAMPUS_RETAMA...</p>


 <select name='docente' value={value.diaPersonalizado} onChange={onChange} className="w-full bg-[#151515] border-b-2 border-zinc-800 text-white p-2 focus:outline-none focus:border-green-500 transition-all font-mono text-sm uppercase">
                      <option value="" disabled hidden>SELECCIONAR ...</option>
                      <option>LUN - MIER </option>
                      <option>MAR - JUE</option>
                      <option>LUN - MIER - VIERNES</option>
                      <option>OTROS...</option>
                    </select>