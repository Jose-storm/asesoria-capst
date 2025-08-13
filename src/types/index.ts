export interface Article {
  id: number;
  titulo: string;
  contenido: string;
  extracto: string;
  imagen: string;
  autor_nombre: string;
  creado_en?: string;
}

export interface Contacto {
    id: number;
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
  docente_id: number;          
  docente_nombre?: string;     
  carrera?: string;            
  fecha_inicio: string;        
  hora_inicio: string;         
  hora_fin: string;            
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

