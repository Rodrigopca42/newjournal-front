export interface Noticia{
  id?: number;
  titulo:string;
  noticia:string;
  image?: string;
  categoria: string[];
  datacriacao?:string;
  comentario?: [{text:string; username: string}];
}
