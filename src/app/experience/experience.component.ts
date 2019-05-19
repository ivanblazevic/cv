import { Component, OnInit } from '@angular/core';
import { EXPERIENCES } from './data';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  experiences = EXPERIENCES;

  constructor() { }

  ngOnInit() {

  }

}
