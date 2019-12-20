import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newtwo',
  templateUrl: './newtwo.component.html',
  styleUrls: ['./newtwo.component.css']
})
export class NewtwoComponent implements OnInit {
  isOk: boolean=true;

  constructor() { }

  ngOnInit() {
  }

  reverse(){
    this.isOk = !this.isOk;
  }
}
