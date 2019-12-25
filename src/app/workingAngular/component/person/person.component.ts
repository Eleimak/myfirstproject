import { Component, OnInit } from '@angular/core';

import { PersonService } from '../../services/person.service';
import { Person } from '../../model/person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  response: any;
  items: any;
  asc: boolean = true;
  isClicked = false;
  personPerPage = 5;
  person: Person;


  constructor(private personService: PersonService) {
    //this.getAll();
    this.person = new Person();
    this.person.name = '';
    this.person.dateOfBirth = '';
    this.person.gender = true;
    this.getPage(1, this.personPerPage);
  }

  ngOnInit() {
  }

  getAll() {
    this.personService.getAll().subscribe((response) => {
        this.items = response;
        console.log(this.items);
      });
  }

  getPage(from: number, amount: number){
    this.personService.getPage(from,amount).subscribe((response) => {
      this.items = response;
    });
  }

  getPageService(){
    this.personPerPage += 5;
    this.getPage(1,this.personPerPage);
  }

  Revers() {
     this.personService.getAllSearch(this.asc).subscribe((response) => {
        this.items = response;
      });
    this.asc = !this.asc;
  }

  erase() {
    const ids: any = this.items.filter(value => value.checked)
      .map(value => value.id);
    if (confirm('Видалити "' + ids.length + '"?')) {
      this.personService.deleteByIds(ids).subscribe(() => {
        alert('Видалено "' + ids.length + '".');
        this.getAll();
      });
    }
  }

  switch() {
    this.isClicked = !this.isClicked;
  }

  addPerson() {
    this.personService.addPerson(this.person)
      .subscribe(() => {
        this.getAll();
      });
  }
}
