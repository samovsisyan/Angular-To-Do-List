// import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdTableBasic } from './app.component';


const routes: Routes = [];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  // exports: [RouterModule]

  imports: [BrowserModule, CommonModule, NgbModule],
  declarations: [NgbdTableBasic],
  exports: [NgbdTableBasic],
  bootstrap: [NgbdTableBasic],
})
// export class AppRoutingModule { }
export class NgbdTableBasicModule { }
