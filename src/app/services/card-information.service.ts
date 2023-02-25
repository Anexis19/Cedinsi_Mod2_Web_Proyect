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
      precio: "513'690.000 COP",
      kilometraje:"0 Kilometros",
      descripcion:"Tesla modelo S, vehiculo eléctrico modelo 2021. Destaca por tener una autonomia con bateria cargada de 650 km",
    },
    {
      imagen:"0x0-Roadster_02.jpg",
      titulo: "Tesla Modelo Roadster",
      precio: "967'480.000",
      kilometraje:"0 Kilometros",
      descripcion:"Tesla modelo Roadster, vehiculo eléctrico modelo 2023. Es un deportivo descapotable que pasa de 0 a 100km/h en 1.9 segundos",
    },
    {
      imagen:"0x0-Cybertruck_13.jpg",
      titulo: "Tesla Modelo CyberTruck",
      precio: "338'600.000",
      kilometraje:"0 Kilometros",
      descripcion:"Tesla modelo Cybertruck, camioneta eléctrica modelo 2023. Camioneta con tracción en las 4 ruedas y una capacidad util de 1500 kilogramos",
    },
    {
      imagen:"0x0-Model3_01.jpg",
      titulo: "Tesla Modelo 3",
      precio: "233'170.000",
      kilometraje:"0 Kilometros",
      descripcion:"Tesla modelo 3, vehiculo eléctrico modelo 2019. Vehiculo tipo Sedan, hace parte de la gama de entrada en el catalogo de Tesla Motors",
    },
    {
      imagen:"0x0-ModelX_02.jpg",
      titulo: "Tesla Modelo X",
      precio: "591'150.000",
      kilometraje:"0 Kilometros",
      descripcion:"Tesla modelo X, vehiculo  eléctrico modelo 2016. Vehiculo SUV que destaca por la apertura de sus puertas hacia arriba",
    },
    {
      imagen:"0x0-Semi_05.jpg",
      titulo: "Tesla Modelo Semi Truck",
      precio: "725'600.000",
      kilometraje:"0 Kilometros",
      descripcion:"Tesla modelo Semi Truck, vehiculo eléctrico modelo 2025. Contará con un alto diseño en aerodinamica.",
    },
    {
      imagen:"0x0-ModelY_07.jpg",
      titulo: "Tesla Modelo Y",
      precio: "325'070.000",
      kilometraje:"0 Kilometros",
      descripcion:"Tesla modelo Y, vehiculo eléctrico modelo 2021. Caracterizado por hacer competencia en el rango de precio de su hermano Tesla Modelo 3. Ademas, cuenta con una capacidad de 7 pasajeros en su interior",
    },
    {
      imagen:"0x0-Supercharger_11.jpg",
      titulo: "Estación de carga",
      precio: "80'230.000",
      kilometraje:"0 Kilometros",
      descripcion:"Estacion de carga modelo Tesla. Permite la carga rapida de vehiculos electricos, especialmente de la compañia Tesla, con una capacidad de carga de 50kW  ",
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
