import { Component, Input } from '@angular/core';
import { Howl } from 'howler';
import { Library } from '../library.model';

@Component({
  selector: 'app-library-item',
  templateUrl: './library-item.component.html',
  styleUrls: ['./library-item.component.scss']
})
export class LibraryItemComponent {
  @Input()
  data: Library;

  private sound = new Howl({
    src: ['assets/sounds/ui_tap-variant-01.wav']
  });

  onHover(): void {
    this.sound.play();
  }

}
