
export const Modif = () => {
  return (
       <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md">
  {/* Contenedor Principal: Estética MoureDev Pro con Malla de Ingeniería */}
  <div className="relative bg-[#0f0f0f] border-2 border-zinc-800 w-full max-w-4xl max-h-[90vh] rounded-none shadow-[20px_20px_0px_0px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col" 
       style={{ backgroundImage: 'linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
    
    {/* Barra decorativa superior (Simulando ventana de sistema en modo edición) */}
    <div className="flex items-center justify-between px-4 py-2 bg-[#1a1a1a] border-b border-zinc-800 shrink-0">
      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full bg-orange-500/20 border border-orange-500/50"></div>
        <div className="w-3 h-3 rounded-full bg-zinc-800 border border-zinc-700"></div>
        <div className="w-3 h-3 rounded-full bg-zinc-800 border border-zinc-700"></div>
      </div>
      <span className="text-[10px] font-mono text-orange-500 uppercase tracking-widest text-center font-bold italic">patch_student_record.sh — sudo_edit_mode</span>
      <button className="text-zinc-500 hover:text-white transition-colors">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
    </div>

    {/* Scrollable Content Area */}
    <div className="p-8 overflow-y-auto custom-scrollbar">
      {/* Título de Edición */}
      <div className="mb-8 text-left">
        <div className="flex items-center gap-2 mb-2">
           <span className="text-[10px] bg-orange-500 text-black px-2 font-black uppercase">Edit_Mode</span>
           <span className="text-[10px] font-mono text-zinc-600">ID: RET-0042</span>
        </div>
        <h3 className="text-4xl font-black text-white tracking-tight leading-none uppercase">
          MODIFICAR <span className="text-orange-500 block md:inline">EXPEDIENTE</span>
        </h3>
        <div className="h-1 w-32 bg-accent-cyan mt-2"></div>
      </div>

      <form className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          
          {/* COLUMNA 1: IDENTIDAD */}
          <div className="space-y-6">
            <h4 className="text-[11px] font-black text-orange-500 uppercase tracking-[0.3em] border-b border-zinc-800 pb-2 flex items-center gap-2">
               <div className="w-2 h-2 bg-orange-500"></div> 01. IDENTITY_OVERRIDE
            </h4>
            
            <div className="group">
              <label className="block text-[10px] font-bold text-zinc-500 uppercase mb-1 group-focus-within:text-orange-500 transition-colors">Nombre Completo</label>
              <input type="text" className="w-full bg-[#151515] border-b-2 border-zinc-800 text-white p-2 focus:outline-none focus:border-orange-500 transition-all font-mono text-sm" defaultValue="WALTER CAMAC" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="group">
                <label className="block text-[10px] font-bold text-zinc-500 uppercase mb-1">Edad</label>
                <input type="number" className="w-full bg-[#151515] border-b-2 border-zinc-800 text-white p-2 focus:outline-none focus:border-orange-500 transition-all font-mono text-sm" defaultValue="22" />
              </div>
              <div className="group">
                <label className="block text-[10px] font-bold text-zinc-500 uppercase mb-1">Género</label>
                <select className="w-full bg-[#151515] border-b-2 border-zinc-800 text-white p-2 focus:outline-none focus:border-orange-500 transition-all font-mono text-sm">
                  <option>MASCULINO</option>
                  <option>FEMENINO</option>
                  <option>OTRO</option>
                </select>
              </div>
            </div>

            <div className="group">
              <label className="block text-[10px] font-bold text-zinc-500 uppercase mb-1">Apoderado (Responsable)</label>
              <input type="text" className="w-full bg-[#151515] border-b-2 border-zinc-800 text-white p-2 focus:outline-none focus:border-orange-500 transition-all font-mono text-sm" defaultValue="NÉSTOR CAMAC" />
            </div>

            <div className="group">
              <label className="block text-[10px] font-bold text-zinc-500 uppercase mb-1">Contacto Celular</label>
              <input type="text" className="w-full bg-[#151515] border-b-2 border-zinc-800 text-white p-2 focus:outline-none focus:border-orange-500 transition-all font-mono text-sm" defaultValue="+51 987 654 321" />
            </div>
          </div>

          {/* COLUMNA 2: ACADÉMICO */}
          <div className="space-y-6">
            <h4 className="text-[11px] font-black text-green-500 uppercase tracking-[0.3em] border-b border-zinc-800 pb-2 flex items-center gap-2">
               <div className="w-2 h-2 bg-green-500"></div> 02. ACADEMIC_PATCH
            </h4>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="group">
                <label className="block text-[10px] font-bold text-zinc-500 uppercase mb-1">Instrumento</label>
                <select className="w-full bg-[#151515] border-b-2 border-zinc-800 text-white p-2 focus:outline-none focus:border-green-500 transition-all font-mono text-sm uppercase">
                  <option>PIANO</option>
                  <option>GUITARRA</option>
                  <option>VIOLÍN</option>
                </select>
              </div>
              <div className="group">
                <label className="block text-[10px] font-bold text-zinc-500 uppercase mb-1">Modalidad</label>
                <select className="w-full bg-[#151515] border-b-2 border-zinc-800 text-white p-2 focus:outline-none focus:border-green-500 transition-all font-mono text-sm uppercase">
                  <option>PERSONALIZADO</option>
                  <option>GRUPAL</option>
                </select>
              </div>
            </div>

            <div className="group">
              <label className="block text-[10px] font-bold text-zinc-500 uppercase mb-1">Docente Asignado</label>
              <input type="text" className="w-full bg-[#151515] border-b-2 border-zinc-800 text-white p-2 focus:outline-none focus:border-green-500 transition-all font-mono text-sm uppercase" defaultValue="ROBERTO SÁNCHEZ" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="group">
                <label className="block text-[10px] font-bold text-zinc-500 uppercase mb-1">Día Clase</label>
                <input type="text" className="w-full bg-[#151515] border-b-2 border-zinc-800 text-white p-2 focus:outline-none focus:border-green-500 transition-all font-mono text-sm uppercase" defaultValue="LUNES" />
              </div>
              <div className="group">
                <label className="block text-[10px] font-bold text-zinc-500 uppercase mb-1">Hora Clase</label>
                <input type="time" className="w-full bg-[#151515] border-b-2 border-zinc-800 text-white p-2 focus:outline-none focus:border-green-500 transition-all font-mono text-sm uppercase" defaultValue="16:00" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 border-t border-zinc-800/50 pt-4">
              <div className="group">
                <label className="block text-[10px] font-bold text-zinc-500 uppercase mb-1">Fin Matrícula (Ciclo)</label>
                <input type="date" className="w-full bg-[#151515] border-b-2 border-zinc-800 text-zinc-400 p-2 focus:outline-none focus:border-purple-500 transition-all font-mono text-[10px]" defaultValue="2026-12-05" />
              </div>
              <div className="group">
                <label className="block text-[10px] font-bold text-zinc-500 uppercase mb-1">Status_System</label>
                <select className="w-full bg-[#151515] border-b-2 border-zinc-800 text-green-500 p-2 focus:outline-none focus:border-purple-500 transition-all font-mono text-sm uppercase">
                  <option>ACTIVO</option>
                  <option>EN PAUSA</option>
                  <option>RETIRADO</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* SECCIÓN 3: OBSERVACIONES (Full Width) */}
        <div className="mt-8 border-2 border-dashed border-zinc-800 p-4">
           <label className="block text-[10px] font-bold text-orange-500 uppercase mb-1 tracking-widest italic">// Update_Justification_Log</label>
           <textarea rows="2" className="w-full bg-transparent text-zinc-400 p-2 font-mono text-xs focus:outline-none" defaultValue="Se actualiza el horario a petición del apoderado por cruce escolar."></textarea>
        </div>

        {/* Botones de acción final: Estética 2D */}
        <div className="flex flex-col sm:flex-row gap-4 pt-10 border-t border-zinc-800 mt-10">
          <button 
            type="submit"
            className="flex-1 bg-orange-500 text-black font-black py-4 uppercase tracking-tighter hover:bg-white transition-all transform hover:-translate-y-1 shadow-[6px_6px_0px_0px_rgba(255,255,255,0.15)] active:translate-y-0 active:shadow-none"
          >
            Sobrescribir Registro Estudiante
          </button>
          <button 
            type="button"
            className="px-8 text-zinc-500 font-bold py-4 uppercase text-[10px] tracking-widest hover:text-white transition-colors border border-transparent hover:border-zinc-800"
          >
            [ ESC ] Descartar Cambios
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
  )
}
