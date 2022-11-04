import { Injectable } from '@angular/core';
import Planet from 'src/app/shared/models/planet.model';

const data = require('../../shared/data.json').destinations;

@Injectable({
  providedIn: 'root',
})
export default class DestinationService {
  destinations: Planet[] = data;

  getDestinations() {
    return this.destinations.slice();
  }
}
