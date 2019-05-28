import { Component } from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent {

  examples = [
    {
      link: "https://stackblitz.com/edit/angular-maps-custom-markers-pointers",
      title: "Custom markers for maps",
      img: "assets/maps.jpg"
    },
    {
      link: "https://github.com/ivanblazevic/cv",
      title: "This CV as code example",
      img: "assets/cv_as.jpg"
    },
    {
      link: "https://codepen.io/ivanblazevic/pen/geByqq",
      title: "Star rating using SVG & CSS",
      img: "assets/star.png"
    }
  ]

}
