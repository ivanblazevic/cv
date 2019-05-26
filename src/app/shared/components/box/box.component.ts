import { Component, Input } from '@angular/core';
import { Howl } from 'howler';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent {
  @Input()
  link: string;

  @Input()
  index: number;

  @Input()
  minHeight: number;

  private sound = new Howl({
    src: ['assets/sounds/ui_tap-variant-01.wav']
  });

  onHover(): void {
    this.sound.play();
  }
}
