import { Component, OnInit } from '@angular/core';
import { Planet } from 'src/app/shared/models/planet.model';
import  DestinationService from './destination.service';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss', '../../shared/typography.scss']
})
export class DestinationComponent implements OnInit {
  destinations: Planet[];
  planet: Planet;
  index: number = 0;

  constructor(private destinationService: DestinationService) { 
    this.destinations = this.destinationService.getDestinations();
  }

  ngOnInit(): void {
    this.planet = this.destinations[0];
  }

  onSelectDestination(id: number) {
    this.planet = this.destinations[id];
    this.index = id;
  }
}
