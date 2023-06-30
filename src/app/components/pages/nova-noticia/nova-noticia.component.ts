import { Component, OnInit } from '@angular/core';

import { Noticia } from 'src/app/Noticia';

import { NoticiaService } from 'src/app/services/noticia.service';

@Component({
  selector: 'app-nova-noticia',
  templateUrl: './nova-noticia.component.html',
  styleUrls: ['./nova-noticia.component.css']
})
export class NovaNoticiaComponent {
btnText = 'Cadastrar'

constructor(private noticiaService: NoticiaService){}

ngOnInit(): void {}

async createHandler(noticia: Noticia){

  const formData = new FormData()

  formData.append("titulo", noticia.titulo);
  formData.append("description", noticia.noticia);

  //todo

  await this.noticiaService.createNoticia(formData).subscribe();

  //exibir msg

  //redirect



}


}
