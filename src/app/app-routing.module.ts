import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {NewmainComponent} from './education/newmain/newmain.component';
import {NewoneComponent} from './education/newone/newone.component';
import {NewtwoComponent} from './education/newtwo/newtwo.component';
import {NewthirdComponent} from './education/newthird/newthird.component';
import {FailureComponent} from './education/failure/failure.component';
import {NewfourthComponent} from './education/newfourth/newfourth.component';
import {HomeComponent} from './workingAngular/component/home/home.component';
import {PersonComponent} from './workingAngular/component/person/person.component';
import {WorkerComponent} from './workingAngular/component/worker/worker.component';


const routes: Routes = [
  {path: '', component: NewmainComponent },
  {path: 'one', component: NewoneComponent },
  {path: 'two', component: NewtwoComponent },
  {path: 'three', component: NewthirdComponent },
  {path: 'four', component: NewfourthComponent },
  {path: 'home', component: HomeComponent },
  {path: 'person', component: PersonComponent },
  {path: 'worker', component: WorkerComponent },
  {path: '**', component: FailureComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
