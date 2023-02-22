import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})




export class CardInformationService {

  // ARREGLO DE INFORMACION DE CARTAS DE VEHICULO
  vehiculos = [
    {
      imagen:"0x0-ModelS_01.jpg",
      titulo: "Tesla Modelo S",
      precio: "270'000.000",
      kilometraje:"0 Kilometros",
      descripcion:"Tesla modelo 3, vehiculo de eléctrico de última generación",
    },
    {
      imagen:"0x0-Roadster_02.jpg",
      titulo: "Tesla Modelo Roadster",
      precio: "370'000.000",
      kilometraje:"0 Kilometros",
      descripcion:"Tesla modelo S, vehiculo de eléctrico de última generación",
    },
    {
      imagen:"0x0-Cybertruck_13.jpg",
      titulo: "Tesla Modelo CyberTruck",
      precio: "120'000.000",
      kilometraje:"0 Kilometros",
      descripcion:"Tesla modelo X, vehiculo de eléctrico de última generación",
    },
    {
      imagen:"0x0-Model3_01.jpg",
      titulo: "Tesla Modelo 3",
      precio: "120'000.000",
      kilometraje:"0 Kilometros",
      descripcion:"Tesla modelo X, vehiculo de eléctrico de última generación",
    },
    {
      imagen:"0x0-ModelX_02.jpg",
      titulo: "Tesla Modelo X",
      precio: "120'000.000",
      kilometraje:"0 Kilometros",
      descripcion:"Tesla modelo X, vehiculo de eléctrico de última generación",
    },
    {
      imagen:"0x0-Semi_05.jpg",
      titulo: "Tesla Modelo Semi Truck",
      precio: "120'000.000",
      kilometraje:"0 Kilometros",
      descripcion:"Tesla modelo X, vehiculo de eléctrico de última generación",
    },
    {
      imagen:"0x0-ModelY_07.jpg",
      titulo: "Tesla Modelo Y",
      precio: "120'000.000",
      kilometraje:"0 Kilometros",
      descripcion:"Tesla modelo X, vehiculo de eléctrico de última generación",
    },
    {
      imagen:"0x0-Supercharger_11.jpg",
      titulo: "Estación de carga",
      precio: "120'000.000",
      kilometraje:"0 Kilometros",
      descripcion:"Tesla modelo X, vehiculo de eléctrico de última generación",
    }

  ];

  constructor() { }

  // METODO GET QUE PERMITE EL LLAMADO DE ARRREGLO DE VEHICULOS
  getVehiculos(){

    // RETORNO DE ARREGLO
    return of (this.vehiculos);
  }
  // METODO QUE RECIBE UN PARAMETRO PARA LA BUSQUEDA DE ELEMENTOS
  serch(infoUsuario: string){

    console.log(infoUsuario)
    return this.vehiculos.filter(
      resultado=>{resultado.titulo.includes(infoUsuario)}).map(result =>
      {
        console.log({...result, show:true})
        return {...result, show:true}
    })

  }
}
