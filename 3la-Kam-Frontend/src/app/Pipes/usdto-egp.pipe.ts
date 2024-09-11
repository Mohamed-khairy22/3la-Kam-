import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'USDtoEGP',
  standalone: true
})
export class USDtoEGPPipe implements PipeTransform {

  transform(value:number, rate:number=48.5): number {
    return value*rate;
  }

}
