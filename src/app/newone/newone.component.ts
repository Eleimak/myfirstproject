import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newone',
  templateUrl: './newone.component.html',
  styleUrls: ['./newone.component.css']
})
export class NewoneComponent implements OnInit {
  message: string;
  students = ['john', 'Paul', 'Ringo', 'George'];
  isOk = false;
  isClicked: boolean = null;
  titleButton: string;
  text: string;

  constructor() {
    this.message = 'message from new one component';
    this.isClicked = true;
    this.titleButton = 'On';
    this.text = 'Hello buinding';
  }

  ngOnInit() {
  }

  eventHandler($event: MouseEvent) {
    console.log('Button has been cliced');
  }

  switch() {
    this.isClicked = !this.isClicked;
    if (this.isClicked) {
      this.titleButton = 'On';
    } else {
      this.titleButton = 'Off';
    }
  }
}
