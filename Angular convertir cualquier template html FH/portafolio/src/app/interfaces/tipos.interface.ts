export interface InfoPagina {
  titulo?: string;
  email?: string;
  nombre_corto?: string;
  pagina_autor?: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
  tumblr?: string;
  equipo_trabajo?: any[];
}

export interface InfoEquipo {
  frase: string;
  nombre: string;
  subtitulo: string;
  twitter: string;
  url: string;
}

export interface ProductosIdx {
  cod: string;
  url: string;
  titulo: string;
  categoria: string;
}

export interface Productos {
  producto: string;
  categoria: string;
  subtitulo1: string;
  desc1: string;
  subtitulo2: string;
  desc2: string;
  resumen: string;
}
