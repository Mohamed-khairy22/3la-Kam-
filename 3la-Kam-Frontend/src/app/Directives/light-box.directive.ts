import { Directive, ElementRef, HostListener, Input, input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[LightBox]',
  standalone:true,
})
export class LightBoxDirective implements OnChanges {
  @Input('InitiColor') defultColor:string="darkblue"
 @Input('LightBox') highLightColor:string="yellow"

  constructor(private elemRef:ElementRef) { 
  }
  ngOnChanges(): void {
    this.elemRef.nativeElement.style.border=`3px solid ${this.defultColor}`;
  }

  @HostListener('mouseover') onMouseOver(){
    this.elemRef.nativeElement.style.border=`3px solid ${this.highLightColor}`;
  }
  @HostListener('mouseout') onMouseOut(){
    this.elemRef.nativeElement.style.border=`3px solid ${this.defultColor}`;
  }

}
