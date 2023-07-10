import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {
  transform(value: number): string {
    const years = Math.floor(value);
    const months = Math.floor((value - years) * 11); 
    let result = '';
    
    if (years > 0) {
      result += years + (years === 1 ? ' Ano ' : ' Anos ');
    }
    
    if (months > 0) {
      result += months + (months === 1 ? ' Mês' : ' Meses');
    }

    return result.trim();
  }
}
