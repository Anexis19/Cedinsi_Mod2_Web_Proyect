import { Component, OnInit } from '@angular/core';
import { SliderInformationService } from '../services/slider-information.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  // CREACION DE VARIABLES PARA SU USO
  pruebaTitulo:string="Recepcion de datos"

  // INYECCION DE SERVICIO SLIDER INFORMATION PARA ACCEDER A LOS METODOS DEL MISMO
  constructor(private sliderInformation: SliderInformationService){

  }
  ngOnInit(): void {
    this.sliderInformation.disparadorTitulo.subscribe((data:string)=>{
      this.pruebaTitulo = data;;
    });

  }
  prueba(){
    console.log("IMPRESION:",this.pruebaTitulo)
  }
}
