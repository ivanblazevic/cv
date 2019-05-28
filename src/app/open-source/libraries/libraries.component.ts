import { Component } from '@angular/core';
import { LIBRARIES } from './data';
import { Library } from './library.model';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-libraries',
  templateUrl: './libraries.component.html',
  styleUrls: ['./libraries.component.scss']
})
export class LibrariesComponent {

  isTabSwitched: boolean = false;

  items: Library[] = LIBRARIES;

  constructor(private router: Router) {
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(e => {
      this.isTabSwitched = e["url"] != '/open-source';
    });
  }

}
