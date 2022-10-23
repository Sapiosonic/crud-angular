import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from '../../model/curso';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss']
})
export class CursosListaComponent implements OnInit {

  @Input() cursos: Curso[] = [];
  @Output() add = new EventEmitter(false);
   readonly displayedColumns = ['nome', 'categoria', 'actions'];

  constructor() { }

  ngOnInit(): void {
  }

   onAdd() {
    
    this.add.emit(true);
  }

}
