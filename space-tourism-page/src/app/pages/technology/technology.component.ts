import { Component, OnInit } from '@angular/core';
import Technology from 'src/app/shared/models/technology.model';
import TechnologyService from './technology.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss', '../../shared/typography.scss'],
})
export default class TechnologyComponent implements OnInit {
  technologyData: Technology[];

  technology: Technology;

  constructor(private techService: TechnologyService) {
    this.technologyData = this.techService.getTechnologyData();
  }

  ngOnInit(): void {
    this.technology = { ...this.technologyData[0] };
  }

  onSelectTechnology(id: number) {
    this.technology = this.technologyData[id];
  }
}
