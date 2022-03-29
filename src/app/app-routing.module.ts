import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularcomponentComponent } from './Componets/angularcomponent/angularcomponent.component';
import { HomeComponent } from './Componets/home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Angularcomponent',component:AngularcomponentComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
