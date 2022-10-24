import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Curso } from '../model/curso';
import { CursosService } from '../services/cursos.service';

@Injectable({
  providedIn: 'root'
})
export class CursoResolver implements Resolve<Curso> {

  constructor(private service: CursosService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Curso> {
    if(route.params && route.params['id']){
      return this.service.loadById(route.params['id']);
    }
    return of({_id: '', nome: '', categoria: ''});
  }
}
