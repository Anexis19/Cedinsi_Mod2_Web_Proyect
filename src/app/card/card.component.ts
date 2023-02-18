import { Component } from '@angular/core';
import { CardInformationService } from '../services/card-information.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  // CREACION DE INSTANCIACION
  vehiculos: any;
  // INYECCION DEL SERVICIO EN EL CONSTRUCTOR PARA ACCEDER A LOS METODOS DEL MISMO
  constructor(private infoVehiculo: CardInformationService){
    // Almacenamiento proveniente del servicio
    this.vehiculos = infoVehiculo.getVehiculos();
  }
}
