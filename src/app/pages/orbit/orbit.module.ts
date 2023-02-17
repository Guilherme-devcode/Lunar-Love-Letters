import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrbitRoutingModule } from './orbit-routing.module';
import { OrbitComponent } from './orbit.component';
import { EarthAndMoonComponent } from './components/earth-and-moon/earth-and-moon.component';
import { EarthComponent } from './components/earth/earth.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    OrbitComponent,
    EarthAndMoonComponent,
    EarthComponent
  ],
  imports: [
    CommonModule,
    CarouselModule.forRoot(),
    OrbitRoutingModule
  ],
})
export class OrbitModule { }
