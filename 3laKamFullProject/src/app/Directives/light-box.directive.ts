import { Directive, ElementRef, HostListener, Input, input } from '@angular/core';

@Directive({
  selector: '[LightBox]',
  standalone:true,
})
export class LightBoxDirective {
  @Input('LightBox2') defultColor:string="darkblue"
 @Input('LightBox') highLightColor:string="yellow"

  constructor(private elemRef:ElementRef) { 
    elemRef.nativeElement.style.border=`2px solid ${this.defultColor}`;
  }

  @HostListener('mouseover') onMouseOver(){
    this.elemRef.nativeElement.style.border=`2px solid ${this.highLightColor}`;
  }
  @HostListener('mouseout') onMouseOut(){
    this.elemRef.nativeElement.style.border=`2px solid ${this.defultColor}`;
  }

}
