import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SliderInformationService {




  // METODO QUE PERMITE EL ENVIO DE INFORMACION MEDIANTE UN OBSERVABLE
  private _ModelStream = new BehaviorSubject("");
  constructor() {
  }

  getDataStream(){
    return this._ModelStream.asObservable();
  }
  putDataToStream(data:string){
    this._ModelStream.next(data)
  }


}
