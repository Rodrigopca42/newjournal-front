import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Noticia } from '../Noticia';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  private baseUrl = environment.baseUrl
  private apiRUrl = `${this.baseUrl}/novasnoticias`

  constructor(private http: HttpClient) { }

  createNoticia(formData: FormData): Observable<FormData>{
    return this.http.post<FormData>(this.apiRUrl, formData)
  }

}
