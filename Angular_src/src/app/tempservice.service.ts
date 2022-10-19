import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class TempserviceService {

  STATSData = new EventEmitter<string>();

  constructor() { }

}