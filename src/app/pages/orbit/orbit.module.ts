import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { GamesComponent } from '../games/games/games.component';
import { EarthAndMoonComponent } from './components/earth-and-moon/earth-and-moon.component';
import { EarthComponent } from './components/earth/earth.component';
import { OrbitRoutingModule } from './orbit-routing.module';
import { OrbitComponent } from './orbit.component';

@NgModule({
  declarations: [
    OrbitComponent,
    EarthAndMoonComponent,
    EarthComponent,
    GamesComponent
  ],
  imports: [
    CommonModule,
    CarouselModule.forRoot(),
    OrbitRoutingModule
  ],
})
export class OrbitModule { }
