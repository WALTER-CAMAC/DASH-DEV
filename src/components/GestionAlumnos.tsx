import { Eye, DollarSign, Pencil, Trash2 } from "lucide-react";
import { ModalAddAlumnos } from "./ModalAddAlumnos";
import type { Alumno } from "../types";
import type { ChangeEvent, FormEvent } from 'react';


export interface GestionAlumnosProps {
  onClosed: boolean;
  handleClosed: () => void;
  data: Alumno[];              // La lista completa para la tabla
  value: Alumno;          // El estado del formulario actual ✍️
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}
export const GestionAlumnos = ({ onClosed, handleClosed, data,onSubmit,value,onChange }: GestionAlumnosProps) => {
  return (
    <div className="text-center h-screen p-4 md:p-6 overflow-hidden bg-[#0a0a0a] text-white font-sans selection:bg-accent-cyan selection:text-black">

      {/* Grid Principal */}
      <div className="grid grid-cols-5 grid-rows-12 gap-6 h-full w-full max-w-[1800px] mx-auto">

        {/* div1: Header / Hero Section (3 filas) */}
        <div className="col-span-5 row-span-3 relative">
          <div className="grid grid-cols-5 grid-rows-3 gap-6 h-full p-4 items-center">

            {/* Branding y Título Estilo Pro */}
            <div className="col-span-2 row-span-3 flex flex-col justify-center text-left">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-white flex items-center justify-center rounded-sm">
                  <span className="text-black font-black text-xs">M</span>
                </div>
                <span className="text-[10px] font-bold tracking-[0.3em] text-zinc-500 uppercase">Gestión de Campus</span>
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-7xl font-black uppercase tracking-tighter leading-[0.85]">
                PANEL DE <br />
                <span className="text-accent-cyan">ALUMNOS</span>
              </h1>
              <div className="flex items-center gap-3 mt-4">
                <div className="h-[2px] w-12 bg-orange-500"></div>
                <h2 className="text-xs md:text-sm font-bold text-zinc-400 tracking-widest uppercase italic">
                  Escuela de música Retama
                </h2>
              </div>
            </div>

            <div className="hidden md:block"></div>

            {/* Métricas con efecto de profundidad 2D (Sombra Sólida) */}
            <div className="col-start-3 row-start-2 row-span-2 bg-[#ff9800] border-2 border-black flex flex-col items-center justify-center p-3 rounded-none shadow-[6px_6px_0px_0px_rgba(255,255,255,0.1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.15)] transition-all cursor-default">
              <span className="text-[10px] font-black text-black uppercase tracking-tighter opacity-80">Registrados</span>
              <span className="text-3xl font-black text-black">120</span>
            </div>

            <div className="col-start-4 row-start-2 row-span-2 bg-green-500 border-2 border-black flex flex-col items-center justify-center p-3 rounded-none shadow-[6px_6px_0px_0px_rgba(255,255,255,0.1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.15)] transition-all cursor-default">
              <span className="text-[10px] font-black text-black uppercase tracking-tighter opacity-80">Cursos</span>
              <span className="text-3xl font-black text-black">12</span>
            </div>

            <div className="col-start-5 row-start-2 row-span-2 bg-accent-cyan border-2 border-black flex flex-col items-center justify-center p-3 rounded-none shadow-[6px_6px_0px_0px_rgba(255,255,255,0.1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.15)] transition-all cursor-default">
              <span className="text-[10px] font-black text-black uppercase tracking-tighter opacity-80">Deuda</span>
              <span className="text-3xl font-black text-black">05</span>
            </div>
          </div>
        </div>

        {/* div2: Contenido Principal (9 filas) */}
        <div className="col-span-5 bg-[#0f0f0f] border-2 border-zinc-800/50 row-span-9 rounded-none p-8 flex flex-col overflow-hidden relative shadow-inner">

          {/* Malla de ingeniería de fondo (Grid lines) */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
          </div>

          {/* Toolbar Superior */}
          <div className="relative flex flex-col md:flex-row gap-6 mb-8 items-center border-b border-zinc-800/50 pb-6">
            <div className="relative w-full max-w-xl group">
              <div className="absolute -inset-0.5 bg-accent-cyan/20 rounded-none blur opacity-0 group-focus-within:opacity-100 transition duration-500"></div>
              <input
                type="text"
                className="relative w-full bg-black border-2 border-zinc-800 text-white pl-4 pr-4 py-4 rounded-none font-mono text-xs focus:outline-none focus:border-accent-cyan transition-all placeholder:text-zinc-700"
                placeholder="root@retama:~/buscar_alumno --input"
              />
            </div>

            {
              onClosed ? <ModalAddAlumnos
                handle={handleClosed}
                onSubmit={onSubmit}
                onChange={onChange}
                value={value}


              /> : (
                <button onClick={handleClosed} className="w-full md:w-auto bg-white text-black px-10 py-4 rounded-none font-black uppercase tracking-tighter text-sm hover:bg-green-500 transition-all shadow-[4px_4px_0px_0px_rgba(0,255,255,0.3)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]">
                  + ADD_STUDENT
                </button>
              )
            }

            <div className="flex gap-6 items-center ml-auto">
              <button className="flex items-center gap-2 text-zinc-500 font-bold text-[10px] uppercase tracking-[0.2em] hover:text-accent-cyan transition-colors">
                <span className="w-2 h-2 bg-zinc-800 rounded-full"></span>
                Filtrar_Lista
              </button>
              <button className="flex items-center gap-2 text-zinc-500 font-bold text-[10px] uppercase tracking-[0.2em] hover:text-orange-500 transition-colors">
                <span className="w-2 h-2 bg-zinc-800 rounded-full"></span>
                Exportar_DB
              </button>
            </div>
          </div>


          {/* Área de Tabla con Scroll Estilizado */}
          <div className="relative z-10 flex-1 overflow-auto border-2 border-zinc-800 bg-black/60 rounded-none group/table
          [&::-webkit-scrollbar]:w-2
          [&::-webkit-scrollbar-track]:bg-zinc-500
          [&::-webkit-scrollbar-thumb]:bg-primary
          [&::-webkit-scrollbar-thumb]:rounded-full
          ">
            {/* Aquí va el componente <TablaAlumnos /> */}
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
                  {data.map((prev) => (
                    <tr key={prev.id} className="hover:bg-zinc-900/40 transition-colors group">
                      <td className="p-4 font-mono text-xs text-orange-500">#{prev.id}</td>
                      <td className="p-4 font-bold text-white text-sm">{prev.nombre}</td>
                      <td className="p-4 text-zinc-400 text-sm font-mono">{prev.celular}</td>
                      <td className="p-4">
                        <span className="text-accent-cyan bg-accent-cyan/10 px-2 py-1 rounded-none text-[11px] font-bold uppercase border border-accent-cyan/20">
                          {prev.instrumento}
                        </span>
                      </td>
                      <td className="p-4 text-zinc-500 text-xs">{prev.inicioMatricula}</td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          {/* El círculo indicador (Dot) con efecto Glow */}
                          <div
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${prev.estado
                                ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]'
                                : 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]'
                              }`}
                          ></div>

                          {/* El texto descriptivo en Mayúsculas */}
                          <span className={`text-[11px] font-bold uppercase tracking-wider ${prev.estado ? 'text-green-500' : 'text-red-500'
                            }`}>
                            {prev.estado ? 'Al día' : 'Pendiente'}
                          </span>
                        </div>
                      </td>

                      {/* Acciones Completas */}
                      <td className="p-4">
                        <div className="flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">

                          {/* Botón Ver Ficha (Nuevo) */}
                          
                          <button  className="p-2 hover:bg-zinc-800 border border-zinc-700 text-white transition-all" title="Ver Ficha Técnica">
                            <Eye size={16} /> {prev.id === '001'}
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
            
          </div>
        </div>

      </div>
    </div>
  );
};