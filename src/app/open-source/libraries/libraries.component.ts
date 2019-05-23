import { Component } from '@angular/core';
import { LIBRARIES } from './data';
import { Library } from './library.model';

@Component({
  selector: 'app-libraries',
  templateUrl: './libraries.component.html',
  styleUrls: ['./libraries.component.scss']
})
export class LibrariesComponent {
  items: Library[] = LIBRARIES;
}
