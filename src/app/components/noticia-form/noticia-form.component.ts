import { Component, Input, } from '@angular/core';

@Component({
  selector: 'app-noticia-form',
  templateUrl: './noticia-form.component.html',
  styleUrls: ['./noticia-form.component.css']
})
export class NoticiaFormComponent {
@Input() btnText!:string;

}
