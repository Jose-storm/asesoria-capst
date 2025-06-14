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
