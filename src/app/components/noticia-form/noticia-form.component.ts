import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-noticia-form',
  templateUrl: './noticia-form.component.html',
  styleUrls: ['./noticia-form.component.css']
})
export class NoticiaFormComponent {
@Input() btnText!:string;

noticiaForm!: FormGroup;

constructor() {}

ngOnInit(): void{
  this.noticiaForm = new FormGroup({
    id: new FormControl(''),
    titulo: new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required]),
    image: new FormControl(''),
  })
}

get titulo(){
  return this.noticiaForm.get('titulo')!;
}

get description(){
  return this.noticiaForm.get('description')!;
}

submit(){
  if(this.noticiaForm.invalid){
    return;
  }
  console.log("Enviou o formulário")
}

}
