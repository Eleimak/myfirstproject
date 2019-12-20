import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  response: any;
  items: any;
  asc: boolean = true;

  constructor(private http: HttpClient) {
    this.search();
  }

  ngOnInit() {
  }

  search() {
    this.http.get('http://localhost:8080/person/get/list')
      .subscribe((response) => {
        this.items = response;
      });
  }

  Revers() {
    this.http.get('http://localhost:8080/person/list/name/'+ this.asc)
      .subscribe((response) => {
        this.items = response;
      });
    this.asc = !this.asc;
  }
}
