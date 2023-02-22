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
  pruebaEnvio(titulo:string){
    // console.log(titulo);
    // ESTA FUNCION ACCEDE AL EVENTO DISPARADORTITULO EL CUAL ESTA EN EL
    // SLIDER INFORMATION Y UTILIZA LA PROPIEDAD DE EMITIR, EN DONDE ENVIA EL TITULO
    this.sliderInformation.disparadorTitulo.emit(titulo)
  }
}
