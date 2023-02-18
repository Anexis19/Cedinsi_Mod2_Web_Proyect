import { Component } from '@angular/core';
import { CardInformationService } from '../services/card-information.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // Creacion de variable que almacena el valor ingresado
  valorIngresado!:string;

  // Inyeccion de directiva del servicio
  constructor(private informacionTarjeta: CardInformationService){

  }
  busqueda(){
    // Envio del valor
    this.informacionTarjeta.serch(this.valorIngresado)
  }

}
