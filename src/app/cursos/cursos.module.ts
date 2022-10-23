import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos/cursos.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { CourseFormComponent } from './course-form/course-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CursosComponent,
    CourseFormComponent
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
