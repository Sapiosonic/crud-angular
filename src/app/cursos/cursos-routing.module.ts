import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './containers/cursos/cursos.component';
import { CourseFormComponent } from './containers/course-form/course-form.component';
import { CursoResolver } from './guards/curso.resolver';

const routes: Routes = [
  {path: '', component: CursosComponent},
  {path: 'new', component: CourseFormComponent, resolve: { curso: CursoResolver}},
  {path: 'edit/:id', component: CourseFormComponent, resolve: { curso: CursoResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
