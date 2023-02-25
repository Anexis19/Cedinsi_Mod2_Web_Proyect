import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export default class SlidesImagesService {

  ModeloS = [
    {
      imagen1:"0x0-ModelS_01.jpg",
      imagen2:"0x0-ModelS_04.jpg",
      imagen3:"0x0-ModelS_06.jpg",
      imagen4:"0x0-ModelS_22.jpg",
      imagen5:"0x0-ModelS_23.jpg",
    }
  ];
  ModeloCyber = [
    {
      imagen1:"0x0-Cybertruck_01.jpg",
      imagen2:"0x0-Cybertruck_07.jpg",
      imagen3:"0x0-Cybertruck_14.jpg",
      imagen4:"0x0-Cybertruck_16.jpg",
      imagen5:"0x0-Cybertruck_20.jpg",
    }

  ];
  Modelo3 = [
    {
      imagen1:"0x0-Model3_03.jpg",
      imagen2:"0x0-Model3_07.jpg",
      imagen3:"0x0-Model3_10.jpg",
      imagen4:"0x0-Model3_11.jpg",
      imagen5:"0x0-Model3_16.jpg",

    }
  ];
  ModeloRoadsted = [
    {
      imagen1:"0x0-Roadster_03.jpg",
      imagen2:"0x0-Roadster_09.jpg",
      imagen3:"0x0-Roadster_05.jpg",
      imagen4:"0x0-Roadster_10.jpg",
      imagen5:"0x0-Roadster_11.jpg",

    }
  ];
  ModeloEstacion = [
    {
      imagen1:"0x0-Supercharger_04.jpg",
      imagen2:"0x0-Supercharger_05.jpg",
      imagen3:"0x0-Supercharger_06.jpg",
      imagen4:"0x0-Supercharger_11.jpg",
      imagen5:"0x0-Supercharger_14.jpg",

    },
  ];
  ModeloY = [
    {
      imagen1:"0x0-ModelY_05.jpg",
      imagen2:"0x0-ModelY_09.jpg",
      imagen3:"0x0-ModelY_14.jpg",
      imagen4:"0x0-ModelY_16.jpg",
      imagen5:"0x0-ModelY_17.jpg",

    },
  ];
  ModeloX = [
    {
      imagen1:"0x0-ModelX_02.jpg",
      imagen2:"0x0-ModelX_04.jpg",
      imagen3:"0x0-ModelX_07.jpg",
      imagen4:"0x0-ModelX_18.jpg",
      imagen5:"0x0-ModelX_20.jpg",

    },
  ];
  ModeloSemi = [
    {
      imagen1:"0x0-Semi_09.jpg",
      imagen2:"0x0-Semi_08.jpg",
      imagen3:"0x0-Semi_10.jpg",
      imagen4:"0x0-Semi_13.jpg",
      imagen5:"0x0-Semi_15.jpg",

    },
  ];

  constructor() { }
  getModeloS(){
    return of (this.ModeloS);
  }
  getModeloCyber(){
    return of (this.ModeloCyber);
  }
  getModelo3(){
    return of (this.Modelo3);
  }
  getModeloRoad(){
    return of (this.ModeloRoadsted);
  }
  getEstacion(){
    return of (this.ModeloEstacion);
  }
  getModeloY(){
    return of (this.ModeloY);
  }
  getModeloX(){
    return of (this.ModeloX);
  }
  getModeloSemi(){
    return of (this.ModeloSemi);
  }

}
