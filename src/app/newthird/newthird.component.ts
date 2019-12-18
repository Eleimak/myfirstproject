import { Component, OnInit } from '@angular/core';
import { MyFirstService } from '../service/my-first.service';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-newthird',
  templateUrl: './newthird.component.html',
  styleUrls: ['./newthird.component.css']
})
export class NewthirdComponent implements OnInit {
  response: any;
  items: any;

  constructor(private service: MyFirstService,
              private http: HttpClient) {
    this.searchList();
  }

  ngOnInit() {
  }

  // search(){
  //   this.response = this.service.search();
  //   console.log(this.service.search());
  //   console.log("flag");
  //   console.log(this.response);
  //   console.log("No");
  // }

  search() {
    this.http.get('http://localhost:8080/get/john')
      .subscribe((response) => {
        this.response = response;
      });
  }

  searchList() {
    this.http.get('http://localhost:8080/get/john')
      .subscribe((response) => {
        this.items = response;
      });
  }
}
