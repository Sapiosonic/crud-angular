import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Curso } from '../../model/curso';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  form = this.formBuilder.group({
      _id: [''],
      nome: [''],
      categoria: ['']
    });
  
  constructor(
      private formBuilder: NonNullableFormBuilder,
      private service: CursosService,
      private snackBar: MatSnackBar,
      private location: Location,
      private route: ActivatedRoute) { 
    //this.form 
  }

  ngOnInit(): void {
    const curso: Curso = this.route.snapshot.data['curso'];
    this.form.setValue({
      _id: curso._id,
      nome: curso.nome,
      categoria: curso.categoria
    })
  }

  onSubmit(){
    this.service.save(this.form.value)
    .subscribe(result => this.onSucess(),
    error => this.onError());
  }

  onCancel() {
    this.location.back();
  }

  private onSucess(){
    this.snackBar.open('Curso salvo com sucesso.', '', {duration: 5000})
    this.onCancel();
  }

  private onError(){
    this.snackBar.open('Erro ao salvar curso.', '', {duration: 5000})
  }
  
}
