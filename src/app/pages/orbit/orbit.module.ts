import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrbitRoutingModule } from './orbit-routing.module';
import { OrbitComponent } from './orbit.component';
import { EarthAndMoonComponent } from './components/earth-and-moon/earth-and-moon.component';


@NgModule({
  declarations: [
    OrbitComponent,
    EarthAndMoonComponent,
  ],
  imports: [
    CommonModule,
    OrbitRoutingModule
  ]
})
export class OrbitModule { }
