import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrbitComponent } from './orbit.component';
import { EarthAndMoonComponent } from './components/earth-and-moon/earth-and-moon.component';
import { EarthComponent } from './components/earth/earth.component';

const routes: Routes = [
  {
    path: '',
    component: OrbitComponent,
    children: [
      {
        path: 'home',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'earth-moon',
    component: EarthAndMoonComponent,
  },
  {
    path: 'earth',
    component: EarthComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrbitRoutingModule {}
