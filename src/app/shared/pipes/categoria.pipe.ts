import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoria'
})
export class CategoriaPipe implements PipeTransform {

  transform(value: string): string {
    switch(value) {
      case 'Relações Internacionais': return 'public';
    }
    return 'public';
  }

}
