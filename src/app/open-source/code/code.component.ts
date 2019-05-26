import { Component } from '@angular/core';
import { Howl } from 'howler';

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
      link: "https://stackblitz.com/edit/angular-maps-custom-markers-pointers",
      title: "Custom markers for maps",
      img: "assets/maps.jpg"
    },
    {
      link: "https://stackblitz.com/edit/angular-maps-custom-markers-pointers",
      title: "Custom markers for maps",
      img: "assets/maps.jpg"
    }
  ]

  private sound = new Howl({
    src: ['assets/sounds/ui_tap-variant-01.wav']
  });

  onHover(): void {
    this.sound.play();
  }

}
