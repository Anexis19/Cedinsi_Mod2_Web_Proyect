import { Component } from '@angular/core';
import { CardInformationService } from '../services/card-information.service';
import { SliderInformationService } from '../services/slider-information.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  // CREACION DE INSTANCIACION
  datoBuscar: string = '';
  vehiculos: any;
  search:string='';
  titulo:string='';



  // INYECCION DEL SERVICIO EN EL CONSTRUCTOR PARA ACCEDER A LOS METODOS DEL MISMO
  constructor(private infoVehiculo: CardInformationService, private sliderInformation: SliderInformationService){
    // Almacenamiento proveniente del servicio
      this.infoVehiculo.getVehiculos().subscribe(data => {
      this.vehiculos = data
    })
  }
  busqueda(val :string):void{
    this.datoBuscar = val
  }
  // PRUEBA DE ENVIO
  publishData(titulo:string){
    this.sliderInformation.putDataToStream(titulo);
  }
}
