import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './containers/cursos/cursos.component';
import { CourseFormComponent } from './containers/course-form/course-form.component';

const routes: Routes = [
  {path: '', component: CursosComponent},
  {path: 'new', component: CourseFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
