import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyFirstService {
  response: any;

  constructor(/*private http: HttpClient*/) {
  }

  toConsole(arg){
    console.log(arg);
  }

  // search() {
  //   this.http.get('http://localhost:8080/get/john')
  //     .subscribe((response) => {
  //       this.response = response;
  //       return this.response;
  //     });
  // }
}
