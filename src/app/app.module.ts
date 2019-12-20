import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewoneComponent } from './education/newone/newone.component';
import { DataComponent } from './education/data/data.component';
import {FormsModule} from '@angular/forms';
import { NewtwoComponent } from './education/newtwo/newtwo.component';
import { NewthirdComponent } from './education/newthird/newthird.component';
import { NewmainComponent } from './education/newmain/newmain.component';
import { FailureComponent } from './education/failure/failure.component';
import { MyFirstService } from './education/service/my-first.service';
import { NewfourthComponent } from './education/newfourth/newfourth.component';
import { HomeComponent } from './workingAngular/component/home/home.component';
import { PersonComponent } from './workingAngular/component/person/person.component';
import { WorkerComponent } from './workingAngular/component/worker/worker.component';

@NgModule({
  declarations: [
    AppComponent,
    NewoneComponent,
    DataComponent,
    NewtwoComponent,
    NewthirdComponent,
    NewmainComponent,
    FailureComponent,
    NewfourthComponent,
    HomeComponent,
    PersonComponent,
    WorkerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MyFirstService],
  bootstrap: [AppComponent]
})
export class AppModule { }
