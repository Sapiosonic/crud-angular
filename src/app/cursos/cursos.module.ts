import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './containers/cursos/cursos.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { CourseFormComponent } from './containers/course-form/course-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CursosListaComponent } from './components/cursos-lista/cursos-lista.component';

@NgModule({
  declarations: [
    CursosComponent,
    CourseFormComponent,
    CursosListaComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule, 
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class CursosModule { }
