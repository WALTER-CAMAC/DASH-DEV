import { Terminal, Users, GraduationCap, BarChart3, LogOut, Menu, X } from "lucide-react"
import React, { useState } from "react"

const nav = [
  { title: 'DASHBOARD', icon: <Terminal size={18} className="text-orange-500" /> },
  { title: 'ALUMNOS', icon: <GraduationCap size={18} className="text-green-500" /> },
  { title: 'PROFESORES', icon: <Users size={18} className="text-accent-cyan" /> },
  { title: 'VENTAS', icon: <BarChart3 size={18} className="text-purple-500" /> },
]

export const Navbar = () => {
  // Lógica de estado para el menú móvil
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="flex items-center justify-between p-4 md:p-6 mx-2 md:mx-8 ">
      
      {/* Branding */}
      <div className="flex items-center gap-3 group cursor-pointer">
        <div className="w-8 h-8 md:w-9 md:h-9 bg-white flex items-center justify-center rounded-sm transition-transform group-hover:-rotate-6">
          <span className="text-black font-black text-sm">R</span>
        </div>
        <div className="text-xl md:text-2xl font-black text-white tracking-tighter">
          RETAMA<span className="text-accent-cyan">.DEV</span>
        </div>
      </div>

      <div className="flex items-center gap-10">
        {/* Navegación Desktop */}
        <ul className="hidden lg:flex items-center list-none gap-10 text-sm font-black tracking-[0.15em] text-zinc-400">
          {nav.map((val) => (
            <li key={val.title} className="flex items-center gap-3 cursor-pointer hover:text-white transition-all duration-300 group">
              <span className="opacity-70 group-hover:opacity-100 group-hover:text-accent-cyan group-hover:scale-110 transition-all">
                {React.cloneElement(val.icon, { size: 20 })}
              </span>
              <span className="relative">
                {val.title}
                <span className="absolute -bottom-2 left-0 w-0 h-[3px] bg-accent-cyan transition-all group-hover:w-full"></span>
              </span>
            </li>
          ))}
        </ul>

        {/* Botón Logout Desktop */}
        <button className="hidden sm:flex relative items-center gap-2 border-2 border-white bg-white text-black px-6 py-2 font-black uppercase text-[11px] tracking-tighter hover:bg-accent-cyan hover:border-accent-cyan transition-all active:translate-x-[3px] active:translate-y-[3px] shadow-[5px_5px_0px_0px_rgba(255,255,255,0.15)]">
          <LogOut size={14} strokeWidth={3} />
          LOGOUT
        </button>

        {/* Botón Hamburguesa Móvil */}
        <button 
          onClick={toggleMenu}
          className="lg:hidden p-2 text-white border border-zinc-800 hover:border-accent-cyan transition-colors active:bg-zinc-900"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* OVERLAY MÓVIL FUNCIONAL */}
      <div className={`
        fixed inset-0 z-[60] bg-black/98 backdrop-blur-xl lg:hidden flex flex-col p-8 transition-all duration-300 ease-in-out
        ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}
      `}>
        {/* Header del menú móvil */}
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white flex items-center justify-center">
              <span className="text-black font-black text-[10px]">R</span>
            </div>
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Mobile_Terminal</span>
          </div>
          <button 
            onClick={toggleMenu}
            className="p-2 border border-zinc-800 text-zinc-500 font-mono text-[10px] flex items-center gap-2 hover:text-white"
          >
            CLOSE_SESSION <X size={18} />
          </button>
        </div>

        {/* Links Móviles */}
        <ul className="space-y-6">
          {nav.map((val) => (
            <li 
              key={val.title} 
              onClick={toggleMenu}
              className="flex items-center gap-6 text-3xl font-black tracking-tighter text-zinc-500 hover:text-white transition-all border-b border-zinc-900 pb-4 active:pl-4"
            >
              <span className="p-3 bg-zinc-900 border border-zinc-800">{val.icon}</span>
              {val.title}
            </li>
          ))}
        </ul>

        {/* Footer del menú móvil */}
        <div className="mt-auto space-y-6">
          <button className="w-full bg-accent-cyan text-black font-black py-5 uppercase text-sm shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all">
            LOGOUT_SYSTEM
          </button>
          <div className="flex justify-between items-center font-mono text-[9px] text-zinc-700 uppercase tracking-[0.3em]">
            <span>Retama.Dev v2.0</span>
            <span className="text-green-500">Secure_Connection</span>
          </div>
        </div>
      </div>
    </nav>
  )
}