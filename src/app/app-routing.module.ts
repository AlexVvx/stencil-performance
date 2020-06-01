import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuxButtonsComponent} from './aux-buttons/aux-buttons.component';
import {AwButtonsComponent} from './aw-buttons/aw-buttons.component';
import {ButtonsComponent} from './buttons/buttons.component';
import {IonicButtonsComponent} from './ionic-buttons/ionic-buttons.component';
import {MaterialButtonsComponent} from './material-buttons/material-buttons.component';
import {RegularButtonsComponent} from './regular-buttons/regular-buttons.component';
import {WebButtonsComponent} from './web-buttons/web-buttons.component';


const routes: Routes = [
  { path: '', redirectTo: '/regular-buttons', pathMatch: 'full' },
  { path: 'regular-buttons', component: RegularButtonsComponent },
  { path: 'web-buttons', component: WebButtonsComponent },
  { path: 'aw-buttons', component: AwButtonsComponent },
  { path: 'aux-buttons', component: AuxButtonsComponent },
  { path: 'ionic-buttons', component: IonicButtonsComponent },
  { path: 'material-buttons', component: MaterialButtonsComponent },
  { path: 'buttons', component: ButtonsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
