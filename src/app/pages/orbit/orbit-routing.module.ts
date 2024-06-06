import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from '../games/games/games.component';
import { EarthAndMoonComponent } from './components/earth-and-moon/earth-and-moon.component';
import { EarthComponent } from './components/earth/earth.component';
import { OrbitComponent } from './orbit.component';

const routes: Routes = [
  {
    path: '',
    component: OrbitComponent,
    children: [
      {
        path: 'home',
        redirectTo: 'home',
        pathMatch: 'full',
        data: { animation: 'HomePage' },
      },
    ],
  },
  {
    path: 'earth-moon',
    component: EarthAndMoonComponent,
    data: { animation: 'HomePage' },
  },
  {
    path: 'earth',
    component: EarthComponent,
    data: { animation: 'AboutPage' },
  },
  {
    path: 'games',
    component: GamesComponent,
    data: { animation: 'AboutPage' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrbitRoutingModule {}
