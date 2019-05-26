import { Component } from '@angular/core';
import { EXPERIENCES } from './data';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {

  experiences = EXPERIENCES;

  single = [
    {
      "name": "Javascript",
      "value": 12
    },
    {
      "name": "Typescript",
      "value": 5
    },
    {
      "name": "Angular",
      "value": 7
    },
    {
      "name": "HTML/CSS",
      "value": 12
    },
    {
      "name": "JAVA",
      "value": 3
    }
  ];

  view: any[] = [700, 300];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  showGridLines = false;
  showYAxisLabel = true;
  yAxisLabel = 'Years of experience';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#0f81ff', '#AAAAAA']
  };

}
