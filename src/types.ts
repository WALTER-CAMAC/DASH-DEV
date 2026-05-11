export interface Alumno {
  id?: string;
  nombre: string;
  edad: string;
  genero: string;
  apoderado: string;
  celular: string;
  instrumento: string;
  modalidad: string;
  docente: string;
  diaPersonalizado: string;
  horaClase: string; // Formato "HH:mm"
  diaDeClaseGrupal: string;
  horaDeClaseGrupal: string; // Formato "HH:mm"
  inicioMatricula: string; // Formato "DD-MM-YYYY"
   vencimientoMatricula:string
  tipoMatricula: string;
  observaciones: string;
  matricula: number;
  mensualidad: number;
  bonos: string;
  montoFaltante: number;
  metodoDePago: string;
  estado: boolean;
}

export interface AlumnosResponse {
  alumnos: Alumno[];
}