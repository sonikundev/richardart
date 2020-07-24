import { Component, OnInit, ViewChild } from '@angular/core';
import { NumberFormatStyle } from '@angular/common';
//import { $ } from 'protractor';
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public autor: any;
  
  @ViewChild('textos',{static:true}) textos;

  constructor() { 
  }

  ngOnInit() {
    var opcion_clasica = document.querySelector('#texto').innerHTML;
    console.log(opcion_clasica);
  
    var opcion_child = this.textos.nativeElement.textContent;
    console.log(opcion_child);
  }

  getAutor(event) {
    this.autor = event;
    console.log(event);
  }

}
