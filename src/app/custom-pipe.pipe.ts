import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: any, exponent: string): number {
    let exp=parseFloat(exponent);

    return Math.pow(value, isNaN(exp) ? 1 :exp);
  }

}
