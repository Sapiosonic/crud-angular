import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Curso } from '../../model/curso';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss']
})
export class CursosListaComponent implements OnInit {

  @Input() cursos: Curso[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() remove = new EventEmitter(false);

  readonly displayedColumns = ['nome', 'categoria', 'actions'];

  constructor() { }

  ngOnInit(): void {
  }

  onAdd() {
    this.add.emit(true);
  }

  onEdit(curso: Curso){
    this.edit.emit(curso);
  }

  onDelete(curso: Curso) {
    this.remove.emit(curso);
  }

}
