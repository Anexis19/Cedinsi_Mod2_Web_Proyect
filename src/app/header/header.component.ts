import { Component, EventEmitter, Output } from '@angular/core';
import { CardInformationService } from '../services/card-information.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // Creacion de variable que almacena el valor ingresado
  valorIngresado:string='';

  constructor(){

  }
  // Creacion de evento de busqueda
  @Output() search : EventEmitter<string> = new  EventEmitter<string>();

}
