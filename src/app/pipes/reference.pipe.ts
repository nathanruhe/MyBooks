import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reference'
})
export class ReferencePipe implements PipeTransform {
  
  transform(value: number): string {
    return `Ref-${value}`;
  }
}
