import { Injectable } from '@angular/core';
import { Technology } from 'src/app/shared/models/technology.model';

const data = require('../../shared/data.json').technology;

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {
  technology: Technology[] = data;

  constructor() { }

  getTechnologyData() {
    return this.technology.slice();
  }
}
