import { Component, OnInit } from '@angular/core';

export interface Library {
  link: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-libraries',
  templateUrl: './libraries.component.html',
  styleUrls: ['./libraries.component.scss']
})
export class LibrariesComponent implements OnInit {

  items: Library[] = [
    {
      link: "https://www.npmjs.com/package/radix-player",
      title: "RadixPlayer",
      description: "Internet radio streamer with web interface. Originally created for raspberryPI but can be installed on any system which runs NodeJS & has audio system :)"
    },
    {
      link: "https://www.npmjs.com/package/stylelint-regex",
      title: "Stylelint Regex",
      description: "Full flexibility for stylelint rule creation using regex"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
