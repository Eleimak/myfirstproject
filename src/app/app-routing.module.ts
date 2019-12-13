import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewmainComponent} from './newmain/newmain.component';
import {NewoneComponent} from './newone/newone.component';
import {NewtwoComponent} from './newtwo/newtwo.component';
import {NewthirdComponent} from './newthird/newthird.component';
import {FailureComponent} from './failure/failure.component';


const routes: Routes = [
  {path: '', component: NewmainComponent },
  {path: 'one', component: NewoneComponent },
  {path: 'two', component: NewtwoComponent },
  {path: 'three', component: NewthirdComponent },
  {path: '**', component: FailureComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
