import { Component } from '@angular/core';
import {MyFirstService} from './service/my-first.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Elimak';
  param: string;

  constructor() {
  }
}

