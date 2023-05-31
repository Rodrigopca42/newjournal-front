export interface Noticia{
  id?: number;
  titulo:string;
  noticia:string;
  imagem: string;
  categoria: string[];
  datacriacao?:string;
  comentario?: [{text:string; username: string}];
}
