import { Injectable } from '@angular/core';
import { Curso } from '../model/curso';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/internal/operators/tap';
import { first } from 'rxjs/internal/operators/first';
import { delay } from 'rxjs/internal/operators/delay';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API = 'api/cursos';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Curso[]>(this.API)
    .pipe(
      first(),
      //delay(5000),
      //tap(cursos => console.log(cursos))
    );
  }

  loadById(id: string) {
    return this.httpClient.get<Curso>(`${this.API}/${id}`);
  }

  save(record: Partial<Curso>) {
    //console.log(record);
    if(record._id) {
      //console.log('update');
      return this.update(record);
    }
    //console.log('create');
    return this.create(record);
  }

  private create(record: Partial<Curso>) {
    return this.httpClient.post<Curso>(this.API, record).pipe(first());
  }

  private update(record: Partial<Curso>) {
    return this.httpClient.put<Curso>(`${this.API}/${record._id}`, record).pipe(first());
  }

    remove(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }
  
}
