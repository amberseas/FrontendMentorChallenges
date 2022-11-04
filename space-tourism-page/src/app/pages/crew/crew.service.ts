import { Injectable } from '@angular/core';
import Crew from 'src/app/shared/models/crew.model';

const data = require('../../shared/data.json').crew;

@Injectable({
  providedIn: 'root',
})
export default class CrewService {
  crew: Crew[] = data;

  getCrew() {
    return this.crew.slice();
  }
}
