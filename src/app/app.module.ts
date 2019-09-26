import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
import { NgbdTableBasicModule } from './app-routing.module';
// import { AppComponent } from './app.component';
import { NgbdTableBasic } from './app.component';

@NgModule({
  declarations: [
    // AppComponent
    NgbdTableBasic
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule
    NgbdTableBasicModule
  ],
  providers: [],
  // bootstrap: [AppComponent]
  bootstrap: [NgbdTableBasic]
})
export class AppModule { }

