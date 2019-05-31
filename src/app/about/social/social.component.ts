import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent {

  @Input()
  icon: string;

  @Input()
  set url(value: string) {
    this._url = value;
  }

  get url() {
    return this.sanitizer.bypassSecurityTrustUrl(this._url) as string;
  }

  private _url: string;

  constructor(private sanitizer: DomSanitizer) {}

}
