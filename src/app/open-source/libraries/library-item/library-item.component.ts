import { Component, Input } from '@angular/core';
import { Library } from '../libraries.component';

@Component({
  selector: 'app-library-item',
  templateUrl: './library-item.component.html',
  styleUrls: ['./library-item.component.scss']
})
export class LibraryItemComponent {
  @Input()
  data: Library;
}
