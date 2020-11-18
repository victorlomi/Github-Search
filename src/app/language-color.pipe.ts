import { Pipe, PipeTransform } from '@angular/core';
import colors from '../assets/colors.json';
@Pipe({
  name: 'languageColor'
})
export class LanguageColorPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {
    if (colors[value]) {
      return colors[value].color;
    }
    return 'magenta';
  }

}
