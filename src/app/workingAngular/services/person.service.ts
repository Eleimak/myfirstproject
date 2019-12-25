import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Person } from '../model/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  param: string;
  items = [];
  urlGetAll = 'http://localhost:8080/person/get/list';

  constructor(private http: HttpClient) { }


  getAll() {
    return this.http.get(this.urlGetAll);
  }
  getAllSearch(asc: any) {
    return this.http.get('http://localhost:8080/person/list/name/' + asc);
  }

  deleteByIds(ids: any) {
    return this.http.post('http://localhost:8080/person/delete/list', ids);
  }

  getPage(from: number, amount: number){
    return this.http.get(this.urlGetAll + '/' + from + '/' + amount);
  }

  addPerson(person: Person) {
    return this.http.post('http://localhost:8080/person/create', person);
  }
}
