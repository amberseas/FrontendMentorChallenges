import { Injectable } from '@angular/core';
import { Crew } from 'src/app/shared/models/crew.model';

const data = require('../../shared/data.json').crew;

@Injectable({
  providedIn: 'root'
})
export class CrewService {
  crew: Crew[] = data;

  constructor() { }

  getCrew() {
    return this.crew.slice();
  }
}
