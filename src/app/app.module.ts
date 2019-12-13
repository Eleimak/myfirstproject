import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewoneComponent } from './newone/newone.component';
import { DataComponent } from './data/data.component';
import {FormsModule} from '@angular/forms';
import { NewtwoComponent } from './newtwo/newtwo.component';
import { NewthirdComponent } from './newthird/newthird.component';
import { NewmainComponent } from './newmain/newmain.component';
import { FailureComponent } from './failure/failure.component';

@NgModule({
  declarations: [
    AppComponent,
    NewoneComponent,
    DataComponent,
    NewtwoComponent,
    NewthirdComponent,
    NewmainComponent,
    FailureComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
