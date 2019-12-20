import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newfourth',
  templateUrl: './newfourth.component.html',
  styleUrls: ['./newfourth.component.css']
})
export class NewfourthComponent implements OnInit {
  UrlItStep: string = "http://idcee.org/storage/2014/partners/itstep300.png.pagespeed.ce.zGOUDo-pHM.png";
  falseTtue: boolean = true;
  itStep: string = "https://itstep.kh.ua/uploads/page/preview_f9c266db3f486e15487348751168db8b.jpeg";

  constructor() { }

  ngOnInit() {
    setTimeout( ()=>{this.UrlItStep = "https://media.licdn.com/dms/image/C510BAQEyfKQsdWriRg/company-logo_200_200/0?e=2159024400&v=beta&t=JD1QNpVumd_8QWi1wJ1eRLA4BUWrFbKCWRNZ0Q9BF8k"}, 3000)
    setInterval(() => {this.urlItStep()
    }, 3000);
  }

  urlItStep(){
    this.falseTtue = !this.falseTtue;
    if (this.falseTtue){
      this.UrlItStep = "https://s.032.ua/section/cataloglogo/upload/images/catalog/000/000/946/lviv-logo_variant2_4ORNYI59fc4d39398ee.png";
    }else{
      this.UrlItStep = "https://media.licdn.com/dms/image/C510BAQEyfKQsdWriRg/company-logo_200_200/0?e=2159024400&v=beta&t=JD1QNpVumd_8QWi1wJ1eRLA4BUWrFbKCWRNZ0Q9BF8k";
    }
  }
}
