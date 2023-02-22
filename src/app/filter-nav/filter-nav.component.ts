import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-nav',
  templateUrl: './filter-nav.component.html',
  styleUrls: ['./filter-nav.component.css']
})
export class FilterNavComponent {
   // Creacion de variable que almacena el valor ingresado
   valorIngresado:string='';

   constructor(){

   }
   // Creacion de evento de busqueda
   @Output() search : EventEmitter<string> = new  EventEmitter<string>();

}
