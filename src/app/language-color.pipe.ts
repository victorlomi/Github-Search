import { Pipe, PipeTransform } from '@angular/core';
import colors from '../assets/colors.json';
@Pipe({
  name: 'languageColor'
})
export class LanguageColorPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (colors[value]) {
      return colors[value].color;
    }
    return 'magenta';
  }

}
