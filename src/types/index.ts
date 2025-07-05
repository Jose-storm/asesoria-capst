export interface Article {
  id: number;
  titulo: string;
  contenido: string;
  extracto: string;
  imagen: string;
  autor: string;
  creado_en?: string;
}

export interface Contacto {
    id?: number;
    nombre: string;
    email: string;
    telefono?: string;
    mensaje: string;
    enviado_en?: string;
}

export interface Taller {
  id: number;
  nombre: string;
  modalidad: 'Presencial' | 'Virtual';
  docente_id: number;          // clave foránea
  docente_nombre?: string;     // si viene con JOIN
  carrera?: string;            // si viene con JOIN
  fecha_inicio: string;        // formato YYYY-MM-DD
  hora_inicio: string;         // formato HH:mm
  hora_fin: string;            // formato HH:mm
  indice: string;
  extracto: string;
  contenido: string;
  tipo_servicio: string;
  estado: boolean;
  imagen: string;
  autor_id: number;
  creado_en?: string;
}
export interface Docente {
  id: number;
  nombre: string;
  carrera: string;
}

