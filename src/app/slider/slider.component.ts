import { Component, OnInit } from '@angular/core';
import { SliderInformationService } from '../services/slider-information.service';
import SlidesImagesService from '../services/slides-images.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  // CREACION DE VARIABLES PARA SU USO

  // VARIABLE QUE RECIBE EL TIPO DE MODELO PROVINIENTE DEL CARDS
  serviceData:string="";
  // VARIABLE QUE ALMACENARA EL ARRAY DE IMAGENES DEL CADA MODELO
  serviceModel:any;


  // INYECCION DE SERVICIO SLIDER INFORMATION PARA ACCEDER A LOS METODOS DEL MISMO
  constructor(private sliderInformation: SliderInformationService, private modelImage:SlidesImagesService){
    const data = this.sliderInformation.getDataStream();
    data.subscribe({
      next:(data:string)=>{
        this.serviceData = data;
      },
      error:(err:any)=>{
        console.log(err)
      }
    });

    if (this.serviceData == 'Tesla Modelo S'){
      console.log("Ingreso al Tesla Modelo S")
      this.modelImage.getModeloS().subscribe(
        data =>{
          this.serviceModel = data;
      })
    }
    else if(this.serviceData == 'Tesla Modelo Roadster'){
      console.log("Ingreso al Tesla Modelo Roadster")
      this.modelImage.getModeloRoad().subscribe(
        data =>{
          this.serviceModel = data;
      })
    }
    else if(this.serviceData == 'Tesla Modelo CyberTruck'){
      console.log("Ingreso al Tesla Modelo CyberTruck")
      this.modelImage.getModeloCyber().subscribe(
        data =>{
          this.serviceModel = data;
      })
    }
    else if(this.serviceData == 'Tesla Modelo 3'){
      console.log("Ingreso al Tesla Modelo 3")
      this.modelImage.getModelo3().subscribe(
        data =>{
          this.serviceModel = data;
      })
    }
    else if(this.serviceData == 'Tesla Modelo X'){
      console.log("Ingreso al Tesla Modelo X")
      this.modelImage.getModeloX().subscribe(
        data =>{
          this.serviceModel = data;
      })
    }
    else if(this.serviceData == 'Tesla Modelo Semi Truck'){
      console.log("Ingreso al Tesla Modelo Semi Truck")
      this.modelImage.getModeloSemi().subscribe(
        data =>{
          this.serviceModel = data;
      })
    }
    else if(this.serviceData == 'Tesla Modelo Y'){
      console.log("Ingreso al Tesla Modelo Y")
      this.modelImage.getModeloY().subscribe(
        data =>{
          this.serviceModel = data;
      })
    }
    else if(this.serviceData == 'Estación de carga'){
      console.log("Ingreso a Estacion de carga")
      this.modelImage.getEstacion().subscribe(
        data =>{
          this.serviceModel = data;
      })
    }
    else{
      console.log("No se dio ingreso al if correcto")
    }
  }
  ngOnInit(): void {

  }

}
