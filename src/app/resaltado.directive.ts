import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(public el: ElementRef) {
   
   }
    
  ngOnInit(){
   //console.log(el.nativeElement);
   var element = this.el.nativeElement;
    element.style.background = "white";
    element.style.color = "gray";
    element.style.padding = "20px";
    
    element.innerText = element.innerText.toUpperCase().replace("user","Richard Littlefield");
  }
  
}
