import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})




export class CardInformationService {

  // ARREGLO DE INFORMACION DE CARTAS DE VEHICULO
  vehiculos = [
    {
      titulo: "Tesla Modelo 3",
      precio: "270'000.000",
      kilometraje:"0 Kilometros",
      descripcion:"Tesla modelo 3, vehiculo de eléctrico de última generación",
    },
    {
      titulo: "Tesla Modelo S",
      precio: "370'000.000",
      kilometraje:"0 Kilometros",
      descripcion:"Tesla modelo S, vehiculo de eléctrico de última generación",
    },
    {
      titulo: "Tesla Modelo X",
      precio: "120'000.000",
      kilometraje:"0 Kilometros",
      descripcion:"Tesla modelo X, vehiculo de eléctrico de última generación",
    },

  ];

  constructor() { }

  // METODO GET QUE PERMITE EL LLAMADO DE ARRREGLO DE VEHICULOS
  getVehiculos(){

    // RETORNO DE ARREGLO
    return this.vehiculos;
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
