import { DollarSign, GraduationCap, User, X } from 'lucide-react';

const DataField = ({ label, value, color = "text-zinc-300", isMono = false }) => (
  <div className="space-y-1">
    <p className="text-[9px] text-zinc-500 uppercase font-black tracking-tighter leading-none">{label}</p>
    <p className={`text-sm ${color} ${isMono ? 'font-mono' : 'font-bold'} tracking-tight`}>{value}</p>
  </div>
);
export const FichaTecnica = () => {
  return (
     <div className="bg-black min-h-screen">
     

      {/* 3. Modal Condicional */}
    
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/10 backdrop-blur-md">
          {/* Contenedor Principal */}
          <div className="bg-[#0c0c0c] border-2 border-zinc-800 w-full max-w-5xl h-[90vh] overflow-hidden flex flex-col rounded-none shadow-[0_0_50px_rgba(0,0,0,1)]">
            
            {/* Header con estilo de Terminal */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#151515] border-b-2 border-zinc-800">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-accent-cyan/10 border border-accent-cyan/30">
                  <User size={20} className="text-accent-cyan" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white uppercase tracking-tighter">Ficha_Técnica_Alumno</h3>
                  {/* <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">ID: {alumno.id}</p> */}
                </div>
              </div>
              <button onClick={isOpen}  className="p-2 hover:bg-red-500/10 text-zinc-500 hover:text-red-500 transition-all border border-transparent hover:border-red-500/20">
                <X size={24} />
              </button>
            </div>

            {/* Cuerpo con Scroll Estilizado */}
            <div className="flex-1 overflow-y-auto p-8 space-y-8 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:40px_40px]">
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* SECCIÓN 1: DATOS PERSONALES */}
                <div className="md:col-span-2 space-y-6">
                  <div className="border-l-4 border-accent-cyan bg-zinc-900/50 p-6 shadow-[4px_4px_0px_0px_rgba(0,255,255,0.1)]">
                    <h4 className="flex items-center gap-2 text-xs font-black text-accent-cyan uppercase tracking-widest mb-4">
                       <User size={14} /> Información Personal
                    </h4>
                    <div className="grid grid-cols-2 gap-y-4 gap-x-6">
                      {/* <DataField label="Nombre Completo" value={alumno.nombre} color="text-white" /> */}
                      <DataField label="Género" value="Masculino" />
                      <DataField label="Edad" value="22 años" />
                      <DataField label="Fecha Nacimiento" value="12/04/2003" />
                      <div className="col-span-2 h-[1px] bg-zinc-800 my-2"></div>
                      <DataField label="Apoderado" value="Néstor Camac" />
                      <DataField label="Contacto" value="+51 987 654 321" isMono />
                    </div>
                  </div>

                  <div className="border-l-4 border-orange-500 bg-zinc-900/50 p-6 shadow-[4px_4px_0px_0px_rgba(249,115,22,0.1)]">
                    <h4 className="text-xs font-black text-orange-500 uppercase tracking-widest mb-2">Observaciones_Log</h4>
                    <p className="text-sm font-mono text-zinc-400 leading-relaxed">
                      Alumno con alto interés en composición. Requiere refuerzo en lectura rítmica. Puntualidad excelente.
                    </p>
                  </div>
                </div>

                {/* SECCIÓN 2: ACADÉMICO */}
                <div className="space-y-6">
                  <div className="border-l-4 border-green-500 bg-zinc-900/50 p-6 shadow-[4px_4px_0px_0px_rgba(34,197,94,0.1)]">
                    <h4 className="flex items-center gap-2 text-xs font-black text-green-500 uppercase tracking-widest mb-4">
                       <GraduationCap size={14} /> Académico
                    </h4>
                    <div className="space-y-4 text-sm">
                      <DataField label="Curso" value="Piano Avanzado" color="text-green-500 font-bold" />
                      <DataField label="Docente" value="Prof. Roberto Sánchez" />
                      <DataField label="Modalidad" value="Presencial" />
                      <div className="h-[1px] bg-zinc-800 my-2"></div>
                      <div className="space-y-2">
                        <p className="text-[10px] text-zinc-500 uppercase font-black tracking-tighter italic underline">Horarios_Asignados</p>
                        <p className="text-xs font-mono text-zinc-300">● Personal: Lun - 16:00h</p>
                        <p className="text-xs font-mono text-zinc-300">● Grupal: Vie - 18:00h</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* SECCIÓN 3: FINANCIERO */}
              <div className="border-l-4 border-purple-500 bg-zinc-900/50 p-6 shadow-[4px_4px_0px_0px_rgba(168,85,247,0.1)]">
                <h4 className="flex items-center gap-2 text-xs font-black text-purple-500 uppercase tracking-widest mb-6">
                   <DollarSign size={14} /> Estado Financiero_DB
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div className="p-4 bg-black border border-zinc-800">
                    <p className="text-[10px] text-zinc-500 uppercase font-black mb-1">Matrícula</p>
                    <p className="text-lg font-mono text-white">S/ 50.00</p>
                    <p className="text-[9px] text-zinc-600 italic">Pagado: 05/01/26</p>
                  </div>
                  <div className="p-4 bg-black border border-zinc-800">
                    <p className="text-[10px] text-zinc-500 uppercase font-black mb-1">Mensualidad</p>
                    <p className="text-lg font-mono text-white">S/ 200.00</p>
                    {/* <p className="text-[9px] text-zinc-600 italic">Tipo: {alumno.tipoMatricula}</p> */}
                  </div>
                  <div className="p-4 bg-black border border-zinc-800">
                    <p className="text-[10px] text-zinc-500 uppercase font-black mb-1 text-red-500">Deuda Cobrar</p>
                    <p className="text-lg font-mono text-red-500">S/ 0.00</p>
                    <p className="text-[9px] text-green-500 italic">Status: CLEAN</p>
                  </div>
                  <div className="p-4 bg-black border border-zinc-800 border-b-purple-500">
                    <p className="text-[10px] text-zinc-500 uppercase font-black mb-1">Próximo Vencimiento</p>
                    <p className="text-lg font-mono text-white">05/03/26</p>
                    <p className="text-[9px] text-purple-400 italic font-bold">Vence en 15 días</p>
                  </div>
                </div>
                
                <div className="mt-6 flex gap-4 text-xs font-mono text-zinc-500">
                   <span>[START_DATE]: 05/01/26</span>
                   <span>|</span>
                   <span>[END_DATE]: 05/12/26</span>
                </div>
              </div>

            </div>

            {/* Footer con acciones */}
            <div className="p-6 bg-[#151515] border-t-2 border-zinc-800 flex justify-end gap-4">
               <button className="px-6 py-2 text-[11px] font-black text-zinc-400 uppercase tracking-widest hover:text-white transition-colors">Imprimir_Ficha</button>
               <button className="px-8 py-3 bg-accent-cyan text-black font-black uppercase text-xs tracking-tighter shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:bg-white transition-all active:translate-y-1">Editar_Registro</button>
            </div>
          </div>
        </div>
      
    </div>
  )
}
