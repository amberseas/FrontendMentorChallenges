import { Injectable } from '@angular/core';
import Technology from 'src/app/shared/models/technology.model';

const data = require('../../shared/data.json').technology;

@Injectable({
  providedIn: 'root',
})
export default class TechnologyService {
  technology: Technology[] = data;

  getTechnologyData() {
    return this.technology.slice();
  }
}
