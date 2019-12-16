import { Component, OnInit } from '@angular/core';
import { MyFirstService } from '../service/my-first.service';


@Component({
  selector: 'app-newthird',
  templateUrl: './newthird.component.html',
  styleUrls: ['./newthird.component.css']
})
export class NewthirdComponent implements OnInit {
  response: any;

  constructor(private service: MyFirstService) { }

  ngOnInit() {
  }

  search(){
    this.response = this.service.search();
    //console.log(this.service.search());
    console.log("flag");
    console.log(this.response);
    console.log("No");
  }

}
