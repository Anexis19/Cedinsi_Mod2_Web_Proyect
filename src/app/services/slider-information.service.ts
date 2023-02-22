import { EventEmitter, Injectable, Output } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SliderInformationService {
  // CREACION DE EVENTO DE EMICION
  @Output() disparadorTitulo: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }
}
