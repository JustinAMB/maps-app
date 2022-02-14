import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapsRoutingModule } from './maps/maps-routing.module';
const routes: Routes = [];

@NgModule({
  imports: [MapsRoutingModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
