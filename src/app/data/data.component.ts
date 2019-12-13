import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

hello: string;
currentDate: string;
currentTime: string;

  constructor() {
    this.hello = 'Hello ITStep';
    this.currentDate = new Date().toDateString();
    this.currentTime = new Date().toLocaleTimeString();
   }

  ngOnInit() {
    setInterval(() => {
      this.currentTime = new Date().toLocaleTimeString();
      }, 1000);
  }
}
