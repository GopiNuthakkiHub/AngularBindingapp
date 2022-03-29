import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Componets/home/home.component';
import { AngularcomponentComponent } from './Componets/angularcomponent/angularcomponent.component';
import { NavbarComponent } from './Componets/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AngularcomponentComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
