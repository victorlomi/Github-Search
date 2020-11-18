import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appMakeCircular]'
})
export class MakeCircularDirective {

  constructor(private elementRef: ElementRef) {
    elementRef.nativeElement.style.borderRadius = '50%';
  }

}
