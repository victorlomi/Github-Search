import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commaSeparate'
})
export class CommaSeparatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

}
