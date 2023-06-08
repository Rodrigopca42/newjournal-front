import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Noticia } from 'src/app/Noticia';

@Component({
  selector: 'app-noticia-form',
  templateUrl: './noticia-form.component.html',
  styleUrls: ['./noticia-form.component.css']
})
export class NoticiaFormComponent {
@Output() onSubmit = new EventEmitter<Noticia>
@Input() btnText!:string;

noticiaForm!: FormGroup;

constructor() {}

ngOnInit(): void {
  this.noticiaForm = new FormGroup({
    id: new FormControl(''),
    titulo: new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required]),
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
  console.log(this.noticiaForm.value);

  this.onSubmit.emit(this.noticiaForm.value);
}

}
