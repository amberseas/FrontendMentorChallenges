import { Component, OnInit } from '@angular/core';
import { Crew } from 'src/app/shared/models/crew.model';
import { CrewService } from './crew.service';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss', '../../shared/typography.scss']
})
export class CrewComponent implements OnInit {
  crew: Crew[];
  crewMember: Crew;
  index: number = 0;

  constructor(private crewService: CrewService) { 
    this.crew = this.crewService.getCrew();
  }

  ngOnInit(): void {
    this.crewMember = this.crew[0];
  }

  onSelectMember(id: number) {
    this.crewMember = this.crew[id];
    this.index = id;
  }

}
